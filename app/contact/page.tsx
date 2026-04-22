import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Start a conversation",
  description:
    "Book a discovery call to scope a OneOps engagement. First conversation is a read on where the console debt lives and what a compile would unlock.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <Container size="md">
          <p className="label-eyebrow">Engage</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-[1.05]">
            Start a conversation.
          </h1>
          <p className="text-xl text-[color:var(--color-foreground-muted)] leading-relaxed">
            No pitch deck. No scripted demo. The first call is 30 minutes of
            honest scoping: where the console debt lives, what a compile would
            unlock, and whether OneOps is the right fit for the next six months.
          </p>
        </Container>
      </section>

      <Section size="md">
        <div className="grid md:grid-cols-2 gap-6">
          <ContactCard
            eyebrow="Book a call"
            title="30 minutes, direct."
            body="Pick a slot. We walk through your current stack and agree on whether there is a compile worth scoping."
            href="https://cal.com/chip-tech/oneops-intro"
            label="See available slots →"
          />
          <ContactCard
            eyebrow="Email"
            title="Prefer a thread first?"
            body="If you would rather trade a few messages before booking time, a short email works. Tell us the stack and the top two pains."
            href="mailto:chip@ideaplaces.com?subject=OneOps"
            label="chip@ideaplaces.com →"
          />
        </div>
      </Section>

      <Section size="md" className="bg-[color:var(--color-background-alt)]">
        <p className="label-eyebrow">What to expect</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
          A fixed-fee Assess, then a decision.
        </h2>
        <ul className="space-y-4 text-lg text-[color:var(--color-foreground-muted)] leading-relaxed">
          <li>
            <strong className="text-[color:var(--color-foreground)]">1. Call.</strong>{" "}
            30 minutes. We confirm fit.
          </li>
          <li>
            <strong className="text-[color:var(--color-foreground)]">
              2. Assess engagement.
            </strong>{" "}
            Short, fixed-fee audit. Output: a Console Debt Report ranked by
            risk, vendor lock-in, and compile effort.
          </li>
          <li>
            <strong className="text-[color:var(--color-foreground)]">3. Decide.</strong>{" "}
            Use the report however you want. If you choose to compile with us,
            we scope Layer 2 from what the report says.
          </li>
        </ul>
      </Section>
    </>
  );
}

function ContactCard({
  eyebrow,
  title,
  body,
  href,
  label,
}: {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-[var(--radius-lg)] border border-[color:var(--color-border-light)] bg-[color:var(--color-surface)]/40 p-8 hover:border-[color:var(--color-accent)] transition"
    >
      <p className="label-eyebrow mb-2">{eyebrow}</p>
      <h3 className="font-serif text-2xl font-bold mb-3 text-[color:var(--color-foreground)]">
        {title}
      </h3>
      <p className="text-[color:var(--color-foreground-muted)] leading-relaxed mb-5">
        {body}
      </p>
      <span className="text-[color:var(--color-accent)] font-medium">{label}</span>
    </a>
  );
}
