import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Agents",
  description:
    "The agentic layer: tool-using investigators triggered by outliers. Each agent is defined per need (incident triage, billing anomaly, support escalation, performance regression). The platform is what makes agents actually useful.",
};

const AGENT_EXAMPLES = [
  {
    trigger: "Customer complaint",
    agent: "Support Triage",
    actions: [
      "Look up customer in the CRM and warehouse",
      "Scan recent errors in Sentry for their account",
      "Check related deploys for the last 48 hours",
      "Correlate with marketing and billing events",
      "Summarise to a Discord channel, tag the owner",
    ],
  },
  {
    trigger: "Infrastructure spike",
    agent: "Incident Investigator",
    actions: [
      "Read cost and latency metrics from the warehouse",
      "Diff the deploy timeline against the spike window",
      "Check scheduled jobs and cron runs",
      "Propose the likely owner and a fix PR scaffold",
      "Open an issue with a suggested mitigation",
    ],
  },
  {
    trigger: "Billing anomaly",
    agent: "Revenue Sentinel",
    actions: [
      "Run MRR and invoice reconciliation queries",
      "Cross-check Stripe events against QuickBooks entries",
      "Flag gaps, duplicates, and chargebacks",
      "Summarise the deviation with a numeric delta",
      "Notify finance with a link to the raw rows",
    ],
  },
  {
    trigger: "Unexplained metric",
    agent: "KPI Correlator",
    actions: [
      "Diff the metric against product and marketing deploys",
      "Segment by cohort, region, and super-property",
      "Surface correlated feature flags or copy changes",
      "Write a Slack / Discord summary with the hypothesis",
      "Open a spec ticket if the pattern persists",
    ],
  },
];

export default function AgentsPage() {
  return (
    <>
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <Container size="lg">
          <p className="label-eyebrow">Runtime, agentic</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 max-w-4xl leading-[1.05]">
            Agents handle the unpredictable.
            <br />
            The platform is what makes them real.
          </h1>
          <p className="text-xl text-[color:var(--color-foreground-muted)] leading-relaxed max-w-3xl">
            When something outside the spec happens — a complaint, a spike, a
            metric that does not make sense — an agent is triggered. It has
            tools to read across the platform. It correlates. It proposes.
            Where appropriate, it opens a PR.
          </p>
        </Container>
      </section>

      <Section>
        <p className="label-eyebrow">The principle</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
          An agent is only useful if the substrate is cohesive.
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-lg text-[color:var(--color-foreground-muted)] leading-relaxed">
          <p>
            Without the platform, an investigating agent has nothing to read.
            It cannot trace a customer complaint across services. It cannot
            cross-reference the warehouse with the deploy log. It cannot know
            what changed last Tuesday.
          </p>
          <p>
            With the platform, everything agents need to do their job lives at
            known paths in known formats. Every secret is vaulted. Every API
            is wrapped. Every metric is in the warehouse. Every runbook is in
            the repo. Agents walk into a well-lit room.
          </p>
        </div>
      </Section>

      <Section>
        <p className="label-eyebrow">Examples</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10 max-w-3xl">
          Every agent is defined per the need.
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {AGENT_EXAMPLES.map((ex) => (
            <article
              key={ex.agent}
              className="rounded-[var(--radius-lg)] border border-[color:var(--color-border-light)] bg-[color:var(--color-surface)]/40 p-8"
            >
              <p className="label-eyebrow mb-2">On {ex.trigger}</p>
              <h3 className="font-serif text-2xl font-bold mb-5 text-[color:var(--color-foreground)]">
                {ex.agent}
              </h3>
              <ul className="space-y-2">
                {ex.actions.map((a, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[color:var(--color-foreground-muted)] leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="text-[color:var(--color-accent)] font-mono text-sm mt-1"
                    >
                      →
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-[color:var(--color-background-alt)]">
        <div className="max-w-4xl">
          <p className="label-eyebrow">Why this is antifragile</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            You ride the model race. You do not compete with it.
          </h2>
          <p className="text-lg text-[color:var(--color-foreground-muted)] leading-relaxed mb-4">
            OneOps does not build agent intelligence. It builds the applied
            system that consumes it. As foundation models get sharper, every
            agent in the catalog gets sharper, without a rewrite.
          </p>
          <p className="text-lg text-[color:var(--color-foreground-muted)] leading-relaxed">
            Your moat is the catalog of agent definitions plus the platform
            they run on, not the raw intelligence of a given model.
          </p>
        </div>
      </Section>

      <CTA
        title="Which outlier keeps getting you out of bed?"
        body="Pick one (incident triage, billing anomaly, support escalation, performance regression) and we will scope a single-agent engagement that solves it on your platform. If you do not yet have the platform, we start there."
        primaryLabel="Scope an agent"
        secondaryHref="/method"
        secondaryLabel="See the method"
      />
    </>
  );
}
