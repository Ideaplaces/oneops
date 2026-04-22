import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import LayerCard from "@/components/LayerCard";
import CTA from "@/components/CTA";
import { LAYERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Method",
  description:
    "Four layers compiled in sequence: Foundation, Delivery, Orchestration, Intelligence. Plus where AI lives in the system — at build, refactor, upgrade, and inside fixed runtime roles and agentic investigations.",
};

export default function MethodPage() {
  return (
    <>
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <Container size="lg">
          <p className="label-eyebrow">The method</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 max-w-4xl leading-[1.05]">
            Four layers. One compiled spine.
          </h1>
          <p className="text-xl text-[color:var(--color-foreground-muted)] leading-relaxed max-w-3xl">
            Each layer stacks on the one below. Foundation holds the cloud and
            identity. Delivery ships code. Orchestration brings every vendor
            into the same mesh. Intelligence watches and summarises.
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {LAYERS.map((l) => (
            <LayerCard key={l.layer} {...l} />
          ))}
        </div>
      </Section>

      <Section className="bg-[color:var(--color-background-alt)]">
        <p className="label-eyebrow">Where AI lives</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 max-w-3xl">
          Predictable first. AI where code cannot reach.
        </h2>
        <div className="grid gap-5 md:grid-cols-2 text-base leading-relaxed">
          <AIRole
            stage="Build time"
            body="AI reads the spec and emits Terraform, GitHub Actions, runbooks, KPI queries, vendor integration modules. The output is static code committed to the customer's repo."
          />
          <AIRole
            stage="Refactor time"
            body="When the spec changes (new vendor, new product line, new compliance requirement), AI recompiles affected modules and opens a PR. A human reviews and merges."
          />
          <AIRole
            stage="Upgrade time"
            body="When upstream tools change (Terraform provider bump, new Claude model, deprecated API), AI regenerates the glue. Same review gate."
          />
          <AIRole
            stage="Runtime, in fixed roles"
            body="Scheduled KPI digest, cron agent, insight job, code review pass, developer machine bootstrap, alert spike summariser. Fixed inputs and outputs, no improvisation on the hot path."
          />
          <AIRole
            stage="Runtime, agentic investigation"
            body="Triggered by the unpredictable (customer complaint, infra spike, unexplained metric). Agents read across database, logs, source, deploys, correlate, propose a solution, open a PR."
            accent
          />
        </div>
        <p className="mt-10 text-lg text-[color:var(--color-foreground-muted)] leading-relaxed max-w-3xl">
          AI is the connective tissue. Code is the spine. Agents are the
          response to the unpredictable. The customer can unplug us tomorrow
          and the compiled output keeps running. The agents become useful
          precisely because the platform underneath them is cohesive.
        </p>
        <p className="mt-6">
          <Link
            href="/agents"
            className="text-[color:var(--color-accent)] hover:underline text-base font-medium"
          >
            Deep dive on the agentic layer →
          </Link>
        </p>
      </Section>

      <CTA
        title="Every layer is portable. Every output is yours."
        body="OneOps leaves no proprietary runtime dependency. Every Terraform file, every Action, every prompt, every SQL view lives in your GitHub org. If we disappear, the compiled code keeps running."
        primaryLabel="Start a conversation"
        secondaryHref="/catalog"
        secondaryLabel="See the catalog"
      />
    </>
  );
}

function AIRole({
  stage,
  body,
  accent = false,
}: {
  stage: string;
  body: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-[var(--radius-lg)] border p-6 ${
        accent
          ? "border-[color:var(--color-accent)]/60 bg-[color:var(--color-accent)]/[0.06]"
          : "border-[color:var(--color-border-light)] bg-[color:var(--color-surface)]/40"
      }`}
    >
      <p className="label-eyebrow mb-2">{stage}</p>
      <p className="text-[color:var(--color-foreground-muted)] leading-relaxed">{body}</p>
    </div>
  );
}
