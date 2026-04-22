import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import AxiomCard from "@/components/AxiomCard";
import CTA from "@/components/CTA";
import { AXIOMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Thesis",
  description:
    "Ten axioms behind OneOps: why the company becomes one cohesive technological system, why code comes first, why AI bridges the gaps, and why the platform is what makes agents possible.",
};

export default function ThesisPage() {
  return (
    <>
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 relative">
        <Container size="lg">
          <p className="label-eyebrow">Thesis</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 max-w-4xl leading-[1.05]">
            The fundamental shift in how software companies run.
          </h1>
          <p className="text-xl text-[color:var(--color-foreground-muted)] leading-relaxed max-w-3xl">
            Ten axioms. Each earned from building and running real businesses
            (Eli, Mentorly, Pivot). Each sets a constraint that the rest of the
            system composes with.
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {AXIOMS.map((a) => (
            <AxiomCard key={a.number} number={a.number} title={a.title}>
              {a.body}
            </AxiomCard>
          ))}
        </div>
      </Section>

      <Section className="bg-[color:var(--color-background-alt)]">
        <div className="max-w-3xl">
          <p className="label-eyebrow">The punch line</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Predictable first. AI second. Agents for the outliers.
          </h2>
          <p className="text-lg text-[color:var(--color-foreground-muted)] leading-relaxed">
            Build the substrate. Declare every tool, every integration, every
            workflow in code. Drop AI in where the spec asks for it. Let agents
            handle the unpredictable across the whole system. The company
            becomes antifragile to the model race, because the moat is the
            platform plus the catalog, not the agent intelligence.
          </p>
        </div>
      </Section>

      <CTA
        title="Ready to compile your company's operations?"
        body="The first step is always Assess: a Console Debt Report that names every place the business runs through a UI, a tribal runbook, or a human copy-paste. From there, the compile pays itself back in weeks."
        primaryLabel="Book an assess call"
        secondaryHref="/method"
        secondaryLabel="How the method works"
      />
    </>
  );
}
