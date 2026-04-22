import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Case study: IdeaPlaces",
  description:
    "Orchestrator of orchestrators: AI-native, meta-repo, 29 sub-projects, everything declared in code.",
};

export default function IdeaplacesCase() {
  return (
    <>
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <Container size="lg">
          <p className="label-eyebrow">Case study</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 max-w-4xl leading-[1.05]">
            IdeaPlaces
          </h1>
          <p className="text-xl text-[color:var(--color-foreground-muted)] leading-relaxed max-w-3xl">
            A portfolio of products and services that itself runs on OneOps
            patterns. The meta-repository and workspace that ties everything
            together.
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="label-eyebrow">Context</p>
            <h2 className="font-serif text-3xl font-bold mb-3">The portfolio</h2>
          </div>
          <p className="text-lg text-[color:var(--color-foreground-muted)] leading-relaxed">
            A founder-led portfolio running dozens of products in parallel.
            Different cloud vendors, different identity providers, different
            vendors per vertical. The coordination problem was the product.
            OneOps became the answer.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="label-eyebrow">Scope</p>
            <h2 className="font-serif text-3xl font-bold mb-3">What was compiled</h2>
          </div>
          <ul className="text-lg text-[color:var(--color-foreground-muted)] leading-relaxed space-y-3">
            <li>· Meta-repo pattern (ideaplaces-meta orchestrates all sub-repos)</li>
            <li>· Azure, Cloudflare, Google Workspace, GitHub all in Terraform</li>
            <li>· C3: remote Claude Code sessions with Discord and cron triggers</li>
            <li>· Cross-platform outreach (LinkedIn, Discord) as code</li>
            <li>· Monday.com to GitHub two-way sync</li>
            <li>· Shared PostHog analytics with multi-app super-properties</li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="label-eyebrow">Numbers</p>
            <h2 className="font-serif text-3xl font-bold mb-3">Headline figures</h2>
            <p className="text-sm text-[color:var(--color-foreground-muted)] mt-3 font-mono">
              Snapshot, not live
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Figure value="29" label="sub-projects in the meta-workspace" />
            <Figure value="1" label="GitHub repo declaration per project" />
            <Figure value="311691" label="shared PostHog project id" />
            <Figure value="Zero" label="GitHub repos created via the UI" />
          </div>
        </div>
      </Section>

      <Section className="bg-[color:var(--color-background-alt)]">
        <div className="max-w-3xl">
          <p className="label-eyebrow">What it proves</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            OneOps keeps compounding as new integrations arrive.
          </h2>
          <p className="text-lg text-[color:var(--color-foreground-muted)] leading-relaxed">
            Every new product in the portfolio plugs into the same cloud,
            identity, CI/CD, secrets, observability, and comms substrate. New
            integrations added in one place benefit everything already deployed.
            The catalog is the moat, not any individual integration.
          </p>
        </div>
      </Section>

      <CTA
        title="Can we do this for your company?"
        body="If you have a multi-vendor stack that grew organically, the answer is almost always yes. The first step is Assess: a Console Debt Report that ranks what to compile first."
        primaryLabel="Book an assess call"
      />
    </>
  );
}

function Figure({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[color:var(--color-border-light)] bg-[color:var(--color-surface)]/40 p-6">
      <p className="font-serif text-5xl font-bold text-[color:var(--color-accent)] mb-2">
        {value}
      </p>
      <p className="text-sm text-[color:var(--color-foreground-muted)]">{label}</p>
    </div>
  );
}
