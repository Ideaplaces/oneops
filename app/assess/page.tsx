import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Assessment from "@/components/Assessment";

export const metadata: Metadata = {
  title: "Console Debt Read",
  description:
    "Ten questions, three minutes. Score your company against the OneOps axioms. You leave with a one-page read on where the console debt lives, whether or not you continue with us.",
};

export default function AssessPage() {
  return (
    <>
      <section className="pt-24 pb-10 md:pt-32 md:pb-14">
        <Container size="md">
          <p className="label-eyebrow">Self-serve</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 max-w-3xl leading-[1.05]">
            A read on your own console debt.
          </h1>
          <p className="text-xl text-[color:var(--color-foreground-muted)] leading-relaxed max-w-2xl mb-4">
            Ten questions. Three minutes. No email, no sign-up, no tracking
            beyond aggregate completion stats. Score yourself against the
            OneOps axioms and see where the leverage is.
          </p>
          <p className="text-base text-[color:var(--color-foreground-muted)] leading-relaxed max-w-2xl">
            At the end, you get a one-page read. The read is yours whether or
            not you continue with us.
          </p>
        </Container>
      </section>

      <Section size="md" className="!py-8 !border-0">
        <Assessment />
      </Section>

      <Section size="md">
        <div className="max-w-2xl">
          <p className="label-eyebrow">How to score yourself</p>
          <h2 className="font-serif text-3xl font-bold mb-6">
            Be honest, not generous.
          </h2>
          <ul className="space-y-4 text-[color:var(--color-foreground-muted)] leading-relaxed">
            <li>
              <strong className="text-[color:var(--color-foreground)]">0 — Not yet.</strong>{" "}
              The capability does not exist, or lives entirely in consoles and tribal knowledge.
            </li>
            <li>
              <strong className="text-[color:var(--color-foreground)]">1 — Partial.</strong>{" "}
              It exists for one or two tools, or in one environment, but is not the default pattern.
            </li>
            <li>
              <strong className="text-[color:var(--color-foreground)]">2 — Mostly.</strong>{" "}
              It is the default pattern for most of the company. A new engineer would follow it without being told.
            </li>
            <li>
              <strong className="text-[color:var(--color-foreground)]">3 — Fully.</strong>{" "}
              It is declared end-to-end. A new environment or team could be stood up from code alone.
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}
