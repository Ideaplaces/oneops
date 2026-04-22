import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";

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

          <div className="rounded-[var(--radius-lg)] border border-dashed border-[color:var(--color-border-light)] bg-transparent p-8 text-center">
            <p className="label-eyebrow mb-3">Coming</p>
            <p className="font-serif text-xl text-[color:var(--color-foreground-muted)]">
              More cases are added as external permissions are secured.
            </p>
          </div>
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
