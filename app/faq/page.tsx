import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common objections to OneOps, answered directly: AI in production, vendor lock-in, compliance, ownership, and how it differs from fractional CTO or DevOps consulting.",
};

const FAQ: { q: string; a: string }[] = [
  {
    q: "Is AI running my business in production?",
    a: "No. OneOps is a compiler, not a runtime. AI writes the code. Static, deterministic code runs the business. Every artifact (Terraform, GitHub Actions, runbooks, KPI queries) is committed to your repo and reviewed before it ships. AI workers are allowed inside the compiled structure in fixed roles the spec declares, plus agents for the outliers — never improvisation on the hot path. If we disappear tomorrow, the compiled code keeps running.",
  },
  {
    q: "What about vendor lock-in?",
    a: "Everything OneOps compiles lives in your GitHub org, in portable formats (Terraform, GitHub Actions, Bash/Python CLIs, Claude prompts). No proprietary runtime. Our work can be audited, forked, or maintained by any other engineer. That is the point.",
  },
  {
    q: "Who owns the code after the engagement?",
    a: "You. The customer owns every artifact. OneOps leaves no proprietary runtime dependency.",
  },
  {
    q: "How is this different from a fractional CTO?",
    a: "A fractional CTO gives advice. OneOps ships code, commits it, and hands over runbooks. The unit of delivery is a compiled platform, not hours or strategy memos.",
  },
  {
    q: "How is this different from a DevOps consultancy?",
    a: "Consultancies stop at cloud infrastructure. OneOps covers CRM, marketing, comms, tickets, payments, analytics, identity, and an AI agent layer as code too. The whole company, not just the servers.",
  },
  {
    q: "Can you do this with our existing cloud?",
    a: "Yes. Azure, GCP, AWS, and multi-cloud setups all work. The Terraform providers are pluggable. We adapt the catalog modules to whatever you already run.",
  },
  {
    q: "What about SOC 2, HIPAA, GDPR?",
    a: "OneOps ships standard artifacts: DPA template, incident response runbook, DR plan, vendor security scorecard, SOC 2 gap analysis template. Compliance lives in code alongside the rest.",
  },
  {
    q: "What if we already have a platform team?",
    a: "OneOps can augment as a Run-tier retainer, layering the catalog and agent fleet on top of what your team already ships. Or the platform team can use OneOps as a pattern library and run the compile themselves.",
  },
  {
    q: "What can go wrong?",
    a: "Honest answer: the only truly manual step is secrets onboarding (getting the keys for each vendor). Everything after that is compiled. If the vendor does not have an API, we do not pretend it does — we leave a runbook next to the code.",
  },
  {
    q: "How fast can you move?",
    a: "Assess (the Console Debt Report) is days. Foundation compile is weeks. Enterprise-grade SSO, SCIM, and SOC 2 rollouts are measured in months, not quarters.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <Container size="md">
          <p className="label-eyebrow">FAQ</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 max-w-4xl leading-[1.05]">
            Questions we keep getting.
          </h1>
          <p className="text-xl text-[color:var(--color-foreground-muted)] leading-relaxed">
            Direct answers. No placeholder prose.
          </p>
        </Container>
      </section>

      <Section size="md">
        <div className="space-y-5">
          {FAQ.map((item, i) => (
            <details
              key={i}
              className="group rounded-[var(--radius-lg)] border border-[color:var(--color-border-light)] bg-[color:var(--color-surface)]/40 overflow-hidden"
            >
              <summary className="p-6 cursor-pointer list-none flex items-start justify-between gap-4">
                <h2 className="font-serif text-xl md:text-2xl font-bold text-[color:var(--color-foreground)]">
                  {item.q}
                </h2>
                <span
                  aria-hidden="true"
                  className="text-[color:var(--color-accent)] font-mono text-xl shrink-0 mt-1 group-open:rotate-45 transition-transform"
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-[color:var(--color-foreground-muted)] leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </Section>

      <CTA
        title="Still have a question?"
        body="The fastest way to answer specific questions about your stack is a 30-minute call. No prep required."
        primaryLabel="Start a conversation"
      />
    </>
  );
}
