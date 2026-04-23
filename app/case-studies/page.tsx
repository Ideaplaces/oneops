import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import { PROVEN_COMPANIES } from "@/lib/companies";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "OneOps in production: companies running on compiled operations. Every case study follows the same structure — context, scope, build, numbers, proof.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <Container size="lg">
          <p className="label-eyebrow">Case studies</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 max-w-4xl leading-[1.05]">
            Companies running on compiled operations.
          </h1>
          <p className="text-xl text-[color:var(--color-foreground-muted)] leading-relaxed max-w-3xl">
            Each case follows the same structure: context, scope, what was
            built, headline numbers, what it proves. Numbers are frozen at a
            dated snapshot, not live.
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-6">
          <Link
            href="/case-studies/ideaplaces"
            className="group rounded-[var(--radius-lg)] border border-[color:var(--color-border-light)] bg-[color:var(--color-surface)]/40 p-8 md:p-10 hover:border-[color:var(--color-accent)] transition"
          >
            <p className="label-eyebrow">IdeaPlaces</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-[color:var(--color-foreground)] group-hover:text-[color:var(--color-accent)] transition">
              Orchestrator of orchestrators.
            </h2>
            <p className="text-lg text-[color:var(--color-foreground-muted)] leading-relaxed mb-4">
              A meta-repository tying 29 sub-projects together. Azure, Cloudflare, and Google Workspace all in Terraform. C3 runs remote Claude Code sessions on a cron. PostHog has multi-app super-properties. Every GitHub repo declared in code.
            </p>
            <span className="text-[color:var(--color-accent)] text-sm font-medium">
              Read the case →
            </span>
          </Link>

        </div>
      </Section>

      <Section className="bg-[color:var(--color-background-alt)]">
        <p className="label-eyebrow">Compiled in production</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 max-w-3xl">
          Three companies running on the pattern.
        </h2>
        <p className="text-lg text-[color:var(--color-foreground-muted)] leading-relaxed max-w-3xl mb-10">
          Each was built with AI as the factory. The code is compiled and
          owned. Formal case studies (with permission-gated internals) will
          follow. Until then, the sites themselves are the artifact.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {PROVEN_COMPANIES.map((c) => (
            <a
              key={c.host}
              href={c.url}
              target="_blank"
              rel="noreferrer noopener"
              className="block rounded-[var(--radius-lg)] border border-[color:var(--color-border-light)] bg-[color:var(--color-surface)]/40 p-6 hover:border-[color:var(--color-accent)] transition group"
            >
              <p className="label-eyebrow mb-2">Compiled</p>
              <h3 className="font-serif text-2xl font-bold text-[color:var(--color-foreground)] group-hover:text-[color:var(--color-accent)] mb-2 transition">
                {c.name}
              </h3>
              <p className="text-sm text-[color:var(--color-foreground-muted)] mb-3 leading-relaxed">
                {c.tagline}
              </p>
              <p className="font-mono text-xs text-[color:var(--color-accent)]">
                {c.host} →
              </p>
            </a>
          ))}
        </div>
      </Section>

      <CTA
        title="Want to be the next case study?"
        body="The first lighthouse customer engagement includes a published write-up (subject to your approval). Discounted rate in exchange for the case study rights."
        primaryLabel="Become a lighthouse"
      />
    </>
  );
}
