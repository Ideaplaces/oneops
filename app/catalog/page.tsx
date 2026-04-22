import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import EvidenceTable from "@/components/EvidenceRow";
import CTA from "@/components/CTA";
import { CATALOG } from "@/lib/content";

export const metadata: Metadata = {
  title: "Catalog",
  description:
    "Every tool OneOps currently orchestrates as code, with evidence paths in the Ideaplaces repos. If a tool is not in this table, it is not yet orchestrated. No aspirational rows.",
};

export default function CatalogPage() {
  return (
    <>
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <Container size="lg">
          <p className="label-eyebrow">Catalog</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 max-w-4xl leading-[1.05]">
            Every row has an evidence path.
          </h1>
          <p className="text-xl text-[color:var(--color-foreground-muted)] leading-relaxed max-w-3xl">
            Only tools with deployed evidence in the IdeaPlaces repos are
            listed. If it is not in this table, it is not yet orchestrated.
            The catalog grows as new integrations land.
          </p>
        </Container>
      </section>

      <Section>
        <EvidenceTable rows={CATALOG} />
        <p className="mt-6 text-sm text-[color:var(--color-foreground-muted)]">
          Evidence paths are relative to the IdeaPlaces meta workspace.
        </p>
      </Section>

      <CTA
        title="Need a pattern that is not in the catalog?"
        body="Most catalog modules started as a one-off for a specific customer, then graduated into reusable patterns. If your stack has a tool that needs to be brought into code, that is a good place to start."
        primaryLabel="Suggest a module"
      />
    </>
  );
}
