"use client";

import { useState } from "react";
import Link from "next/link";
import posthog from "posthog-js";
import {
  QUESTIONS,
  SCALE_LABELS,
  CATEGORY_LABELS,
  MAX_SCORE,
  CAL_URL,
  score as computeScore,
  type Scale,
  type Result,
} from "@/lib/assessment";
import { cn } from "@/lib/cn";

export default function Assessment() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Scale | undefined>>({});
  const [done, setDone] = useState(false);

  const q = QUESTIONS[index];
  const total = QUESTIONS.length;
  const progress = Math.round(((index + (done ? 1 : 0)) / total) * 100);

  function track(event: string, props: Record<string, unknown> = {}) {
    if (typeof window !== "undefined" && posthog.__loaded) {
      posthog.capture(event, props);
    }
  }

  function answer(value: Scale) {
    const id = q.id;
    const next = { ...answers, [id]: value };
    setAnswers(next);

    if (index === 0 && !answers[id]) {
      track("assessment_started");
    }

    if (index < total - 1) {
      setTimeout(() => setIndex(index + 1), 150);
    } else {
      const result = computeScore(next);
      track("assessment_completed", {
        total: result.total,
        percent: result.percent,
        bucket: result.bucket,
        weakest: result.weakest,
        strongest: result.strongest,
      });
      setTimeout(() => setDone(true), 150);
    }
  }

  function reset() {
    setAnswers({});
    setIndex(0);
    setDone(false);
  }

  if (done) {
    const result = computeScore(answers);
    return <ResultView result={result} onReset={reset} />;
  }

  return (
    <div className="rounded-[var(--radius-xl)] border border-[color:var(--color-border-light)] bg-[color:var(--color-surface)]/40 p-8 md:p-12">
      <div className="flex items-center justify-between mb-6">
        <p className="label-eyebrow">
          Question {index + 1} of {total}
        </p>
        <p className="font-mono text-xs text-[color:var(--color-foreground-muted)]">
          {CATEGORY_LABELS[q.category]}
        </p>
      </div>

      <div
        className="h-[2px] bg-[color:var(--color-border-light)] rounded-full mb-10 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[color:var(--color-accent)] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-[color:var(--color-foreground)] leading-snug">
        {q.prompt}
      </h2>
      <p className="text-base text-[color:var(--color-foreground-muted)] leading-relaxed mb-8">
        {q.context}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {([0, 1, 2, 3] as Scale[]).map((v) => (
          <button
            key={v}
            onClick={() => answer(v)}
            className={cn(
              "rounded-[var(--radius)] border-2 py-4 px-3 text-center transition",
              answers[q.id] === v
                ? "border-[color:var(--color-accent)] bg-[color:var(--color-accent)]/10 text-[color:var(--color-foreground)]"
                : "border-[color:var(--color-border-light)] bg-transparent text-[color:var(--color-foreground-muted)] hover:border-[color:var(--color-secondary)] hover:text-[color:var(--color-foreground)]",
            )}
            aria-label={`${v} out of 3 — ${SCALE_LABELS[v]}`}
          >
            <div className="font-mono text-sm mb-1">{v}</div>
            <div className="text-sm font-medium">{SCALE_LABELS[v]}</div>
          </button>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center text-sm">
        <button
          onClick={() => setIndex(Math.max(0, index - 1))}
          disabled={index === 0}
          className="text-[color:var(--color-foreground-muted)] hover:text-[color:var(--color-foreground)] disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>
        <p className="text-[color:var(--color-foreground-muted)] font-mono">
          {Object.keys(answers).length}/{total} answered
        </p>
      </div>
    </div>
  );
}

function ResultView({ result, onReset }: { result: Result; onReset: () => void }) {
  return (
    <div className="rounded-[var(--radius-xl)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 md:p-12 shadow-[var(--shadow-glow)] relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[color:var(--color-primary)] opacity-25 blur-3xl"
      />
      <div className="relative">
        <p className="label-eyebrow">Your Console Debt Read</p>
        <div className="flex items-baseline gap-4 mb-6">
          <span className="font-serif text-7xl font-bold text-[color:var(--color-accent)]">
            {result.total}
          </span>
          <span className="font-mono text-sm text-[color:var(--color-foreground-muted)]">
            / {MAX_SCORE} · {result.percent}%
          </span>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[color:var(--color-foreground)]">
          {result.bucketTitle}
        </h2>
        <p className="text-lg text-[color:var(--color-foreground-muted)] leading-relaxed mb-10">
          {result.bucketBody}
        </p>

        <h3 className="label-eyebrow mb-4">By category</h3>
        <div className="space-y-3 mb-10">
          {(Object.keys(result.byCategory) as Array<keyof typeof result.byCategory>).map((key) => {
            const row = result.byCategory[key];
            const pct = Math.round((row.score / row.max) * 100);
            return (
              <div key={key}>
                <div className="flex justify-between items-baseline text-sm mb-1">
                  <span className="font-medium text-[color:var(--color-foreground)]">
                    {CATEGORY_LABELS[key]}
                  </span>
                  <span className="font-mono text-xs text-[color:var(--color-foreground-muted)]">
                    {row.score}/{row.max}
                  </span>
                </div>
                <div
                  className="h-[6px] bg-[color:var(--color-background-alt)] rounded-full overflow-hidden"
                  aria-hidden="true"
                >
                  <div
                    className="h-full bg-[color:var(--color-primary-light)] transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-[var(--radius-lg)] border border-[color:var(--color-accent)]/30 bg-[color:var(--color-accent)]/[0.06] p-6 mb-10">
          <p className="label-eyebrow mb-2">Starting point</p>
          <p className="text-[color:var(--color-foreground)] leading-relaxed">
            Your weakest area is <strong>{CATEGORY_LABELS[result.weakest]}</strong>.
            Your strongest is <strong>{CATEGORY_LABELS[result.strongest]}</strong>.
            The leverage in a OneOps engagement is usually wherever the gap
            between those two is widest — that is where compiling pays back
            fastest.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => {
              if (typeof window !== "undefined" && posthog.__loaded) {
                posthog.capture("assessment_cta_clicked", { bucket: result.bucket });
              }
            }}
            className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-[color:var(--color-primary-light)] bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-light)] text-white px-6 py-3 text-base font-medium shadow-[var(--shadow-glow)] transition"
          >
            Book a 30-minute read
            <span aria-hidden="true">→</span>
          </a>
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 rounded-[var(--radius)] border-2 border-[color:var(--color-secondary)] bg-transparent hover:bg-[color:var(--color-secondary)]/15 text-[color:var(--color-foreground)] px-6 py-3 text-base font-medium transition"
          >
            Take the assessment again
          </button>
          <Link
            href="/thesis"
            className="inline-flex items-center gap-2 text-[color:var(--color-accent)] hover:underline px-2 py-3 text-base font-medium"
          >
            Read the 10 axioms →
          </Link>
        </div>
      </div>
    </div>
  );
}
