import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import { PROVEN_COMPANIES } from "@/lib/companies";

export const metadata: Metadata = {
  title: "Proof",
  description:
    "What is actually running, with evidence paths. Only claims with verifiable evidence in the Ideaplaces repos are included here.",
};

const CLAIMS: { claim: string; evidence: string }[] = [
  {
    claim: "The compiler pattern works at scale",
    evidence:
      "eli.health, mentorly.com, pivotapp.ca: AI was the factory, the crystallised code now runs each business without live AI on the hot path.",
  },
  {
    claim: "Zero console clicks in the production path",
    evidence: "Terraform + GitHub Actions + Bash/Python CLIs across ideaplaces-devops/",
  },
  {
    claim: "GitHub repos created via Terraform",
    evidence:
      "github_repository and github_branch_protection resources in ideaplaces-devops/github/main.tf",
  },
  {
    claim: "Shared PostHog project with multi-app attribution",
    evidence:
      "Single project (id 311691), app and environment super-properties documented in ideaplaces-devops/posthog/",
  },
  {
    claim: "AI workers live in fixed roles declared by the spec",
    evidence: "C3 cron scheduler, scheduled Discord digests, Claude insight jobs",
  },
  {
    claim: "Documentation replaces tribal knowledge",
    evidence:
      "Every integration lives in runbook form next to the code in ideaplaces-devops/",
  },
];

export default function ProofPage() {
  return (
    <>
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <Container size="lg">
          <p className="label-eyebrow">Proof</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 max-w-4xl leading-[1.05]">
            What is actually running, with evidence paths.
          </h1>
          <p className="text-xl text-[color:var(--color-foreground-muted)] leading-relaxed max-w-3xl">
            Only claims with verifiable evidence in the IdeaPlaces repos are
            included here. Anything we cannot point to in code has been removed.
          </p>
        </Container>
      </section>

      <Section>
        <div className="space-y-4">
          {CLAIMS.map((c, i) => (
            <article
              key={i}
              className="rounded-[var(--radius-lg)] border border-[color:var(--color-border-light)] bg-[color:var(--color-surface)]/40 p-6 md:p-8 grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8"
            >
              <div>
                <p className="label-eyebrow mb-2">Claim {String(i + 1).padStart(2, "0")}</p>
                <h2 className="font-serif text-xl md:text-2xl font-bold text-[color:var(--color-foreground)]">
                  {c.claim}
                </h2>
              </div>
              <p className="text-[color:var(--color-foreground-muted)] leading-relaxed">
                {c.evidence}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <p className="label-eyebrow">The three compiled companies</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 max-w-3xl">
          Running in production right now.
        </h2>
        <p className="text-lg text-[color:var(--color-foreground-muted)] leading-relaxed max-w-3xl mb-10">
          Each of these businesses was built with AI as the factory. The code
          is compiled, static, and owned. You can click through and see the
          working results.
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

      <Section className="bg-[color:var(--color-background-alt)]">
        <p className="label-eyebrow">Public-facing proof</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 max-w-3xl">
          You can read everything that backs this.
        </h2>
        <ul className="space-y-3 text-lg text-[color:var(--color-foreground-muted)] leading-relaxed">
          <li>
            ·{" "}
            <Link
              href="https://ciprianrarau.com"
              className="text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)]"
            >
              25 posts on ciprianrarau.com
            </Link>{" "}
            documenting the method live
          </li>
          <li>
            ·{" "}
            <Link
              href="https://github.com/Ideaplaces"
              className="text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)]"
            >
              Open repositories under the Ideaplaces org
            </Link>{" "}
            showing the patterns in production
          </li>
          <li>· 29 sub-projects orchestrated through the meta-workspace</li>
          <li>· This site, authenticated and deployed, as an example of the pattern</li>
        </ul>
      </Section>

      <CTA
        title="Want to see the live repos?"
        body="We walk through the Ideaplaces meta-workspace in the first conversation: the Terraform, the catalog, the agentic layer. It is the fastest way to see whether the pattern fits your company."
        primaryLabel="Book a walkthrough"
        secondaryHref="/case-studies"
        secondaryLabel="Read case studies"
      />
    </>
  );
}
