import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import AxiomCard from "@/components/AxiomCard";
import { PROVEN_COMPANIES } from "@/lib/companies";

export const metadata: Metadata = {
  title: "OneOps — Make your company one cohesive system",
  description:
    "OneOps is the operating substrate for founder-led scale-ups. Code where possible, AI where necessary, agents for the outliers. The whole company, declared in one place.",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-hairlines opacity-50" />
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(67,56,202,0.35),transparent_70%)] pointer-events-none"
        />
        <Container size="lg" className="relative">
          <p className="label-eyebrow">A manifesto for founders running scale-ups</p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] tracking-tight text-[color:var(--color-foreground)] max-w-5xl mb-8">
            We are no longer writing code.{" "}
            <span className="text-[color:var(--color-accent)]">
              We are summoning it.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[color:var(--color-foreground-muted)] leading-relaxed max-w-3xl mb-10">
            OneOps is the practice that makes the summoning reliable. Declare
            the company in code. Let AI flow into every space the structure
            reveals. Humans return to the work only humans can do.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-[color:var(--color-primary-light)] bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-light)] text-white px-6 py-3 text-base font-medium shadow-[var(--shadow-glow)] transition"
            >
              Start a conversation
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/thesis"
              className="inline-flex items-center gap-2 rounded-[var(--radius)] border-2 border-[color:var(--color-secondary)] bg-transparent hover:bg-[color:var(--color-secondary)]/15 text-[color:var(--color-foreground)] px-6 py-3 text-base font-medium transition"
            >
              Read the thesis
            </Link>
          </div>
          <div className="mt-20 grid gap-3 md:grid-cols-3 max-w-4xl">
            <Pillar
              eyebrow="Default"
              body={
                <>
                  <strong className="text-[color:var(--color-foreground)]">
                    Predictable code.
                  </strong>{" "}
                  If a workflow can be expressed deterministically, it is.
                </>
              }
            />
            <Pillar
              eyebrow="When needed"
              body={
                <>
                  <strong className="text-[color:var(--color-foreground)]">
                    AI, in fixed roles.
                  </strong>{" "}
                  Scheduled digests, code review, insight jobs — declared by the spec.
                </>
              }
            />
            <Pillar
              eyebrow="For the outliers"
              body={
                <>
                  <strong className="text-[color:var(--color-foreground)]">
                    Agents.
                  </strong>{" "}
                  Triggered on complaints, spikes, regressions. Read across the platform.
                </>
              }
            />
          </div>
        </Container>
      </section>

      {/* The idea */}
      <Section>
        <p className="label-eyebrow">The idea</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 max-w-3xl">
          Make your company one cohesive technological system.
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-lg text-[color:var(--color-foreground-muted)] leading-relaxed">
          <p>
            Every department&apos;s tools speak through the same spine of code.
            Engineering, marketing, sales, finance, support, ops — one declared
            substrate, one observability surface, one identity plane. No silos,
            no tribal knowledge, no console clicks in the production path.
          </p>
          <p>
            When something unpredictable happens — a customer complaint, an
            infrastructure spike, an unexplained metric — agents take over.
            They read across database, logs, source code, and deploys at once,
            surface what they find, and open a PR. The cohesive platform is
            precisely what makes this possible.
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/manifesto"
            className="text-[color:var(--color-accent)] hover:underline text-base font-medium"
          >
            Read the full manifesto →
          </Link>
        </div>
      </Section>

      {/* Humans for the humans */}
      <Section className="bg-[color:var(--color-background-alt)]">
        <div className="max-w-4xl">
          <p className="label-eyebrow">The role of the human</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Humans for the humans.
          </h2>
          <p className="text-lg text-[color:var(--color-foreground-muted)] leading-relaxed mb-4">
            We are no longer the ones who do the work. We are the ones who
            make sure information travels correctly from one end of the
            company to the other — from customer to system and back again.
            AI writes the glue. Humans hold the intent and meet the customer.
          </p>
          <p className="text-lg text-[color:var(--color-foreground-muted)] leading-relaxed">
            The code gets faster. The conversations get slower. That is the
            right direction. OneOps is not about replacing people. It is about
            returning people to the work only people can do.
          </p>
        </div>
      </Section>

      {/* The three axioms at a glance */}
      <Section>
        <p className="label-eyebrow">Three principles</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10 max-w-3xl">
          Code, AI, and agents. In that order.
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <AxiomCard number={1} title="Predictable first">
            The default is deterministic code. Terraform, GitHub Actions, CLI
            wrappers, SQL views, runbooks. If it can be declared, it is.
          </AxiomCard>
          <AxiomCard number={2} title="AI second, in fixed roles">
            Where code cannot reach: scheduled digests, PR review, dev machine
            bootstrap, alert summaries. AI runs only where the spec declares it.
          </AxiomCard>
          <AxiomCard number={3} title="Agents for the outliers">
            Triggered by the unpredictable. Tool-using investigators that
            correlate, diagnose, and ship fixes across the whole platform.
          </AxiomCard>
        </div>
        <div className="mt-10">
          <Link
            href="/thesis"
            className="text-[color:var(--color-accent)] hover:underline text-base font-medium"
          >
            Read all 10 axioms →
          </Link>
        </div>
      </Section>

      {/* Applied agent system */}
      <Section className="bg-[color:var(--color-background-alt)]">
        <div className="max-w-4xl">
          <p className="label-eyebrow">Why this is antifragile</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            An applied agent system rides the model race.
          </h2>
          <p className="text-lg text-[color:var(--color-foreground-muted)] leading-relaxed mb-4">
            OneOps does not compete with Anthropic on agent quality. It is the
            substrate that lets agents do real work: access to the database,
            the logs, the source code, the deploys, the vendor APIs. As the
            underlying models get sharper, every agent in the fleet gets
            sharper. No rebuild required.
          </p>
          <p className="text-lg text-[color:var(--color-foreground-muted)] leading-relaxed">
            The moat is the platform plus the catalog, not the agent intelligence.
          </p>
        </div>
      </Section>

      {/* Proof */}
      <Section>
        <p className="label-eyebrow">Proof</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 max-w-3xl">
          The pattern already runs three companies.
        </h2>
        <p className="text-lg text-[color:var(--color-foreground-muted)] leading-relaxed max-w-3xl mb-6">
          AI was the factory that wrote the code. The crystallised code now
          runs each business. No live AI on the hot path. No fractional team
          required. No proprietary runtime to rent.
        </p>
        <ul className="flex flex-wrap gap-3 mb-10">
          {PROVEN_COMPANIES.map((c) => (
            <li key={c.host}>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-[color:var(--color-border-light)] bg-[color:var(--color-surface)]/40 px-4 py-2 text-sm font-medium text-[color:var(--color-foreground)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition"
              >
                <span aria-hidden="true" className="text-[color:var(--color-accent)] font-mono text-xs">
                  ●
                </span>
                {c.name}
                <span className="font-mono text-xs text-[color:var(--color-foreground-muted)]">
                  {c.host}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="grid gap-6 md:grid-cols-2">
          <Metric
            value="Code"
            label="runs production"
            body="Zero console clicks. Every cloud resource in Terraform, every pipeline in GitHub Actions, every integration in a CLI wrapper or SDK."
          />
          <Metric
            value="Agents"
            label="run the unpredictable"
            body="Investigation, code review, incident triage, dev machine bootstrap. Defined per need, deployed to fixed roles the spec declares."
          />
        </div>
        <div className="mt-10">
          <Link
            href="/proof"
            className="text-[color:var(--color-accent)] hover:underline text-base font-medium"
          >
            See the evidence paths →
          </Link>
        </div>
      </Section>

      <CTA
        eyebrow="Self-serve"
        title="A read on your own console debt. Ten questions, three minutes."
        body="No email, no sign-up. Score your company against the OneOps axioms and leave with a one-page read on where the leverage is. The read is yours whether or not you continue with us."
        primaryHref="/assess"
        primaryLabel="Start the read"
        secondaryHref="https://cal.com/ciprianrarau/oneops-intro"
        secondaryLabel="Book a 30-min call instead"
      />
    </>
  );
}

function Pillar({ eyebrow, body }: { eyebrow: string; body: React.ReactNode }) {
  return (
    <div className="border-t border-[color:var(--color-border-light)] pt-4">
      <p className="label-eyebrow mb-2">{eyebrow}</p>
      <p className="text-base text-[color:var(--color-foreground-muted)] leading-relaxed">
        {body}
      </p>
    </div>
  );
}

function Metric({
  value,
  label,
  body,
}: {
  value: string;
  label: string;
  body: string;
}) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[color:var(--color-border-light)] bg-[color:var(--color-surface)]/40 p-8">
      <p className="font-serif text-5xl font-bold text-[color:var(--color-accent)] mb-1">
        {value}
      </p>
      <p className="label-eyebrow mb-4 !text-[color:var(--color-foreground-muted)]">
        {label}
      </p>
      <p className="text-base text-[color:var(--color-foreground-muted)] leading-relaxed">
        {body}
      </p>
    </div>
  );
}
