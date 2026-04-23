import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Manifesto",
  description:
    "We are no longer writing code. We are summoning it. OneOps is the practice that makes the summoning reliable, deterministic, and owned by the humans who called it forth.",
};

export default function ManifestoPage() {
  return (
    <>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-hairlines opacity-40" />
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(67,56,202,0.35),transparent_70%)] pointer-events-none"
        />
        <Container size="md" className="relative">
          <p className="label-eyebrow">Manifesto</p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-[color:var(--color-foreground)] mb-8">
            Summoning software
            <br />
            <span className="text-[color:var(--color-accent)]">into existence.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[color:var(--color-foreground-muted)] leading-relaxed max-w-2xl">
            We are no longer writing code. We are bringing it into existence.
            OneOps is the practice that makes the summoning reliable,
            deterministic, and owned by the humans who called it forth.
          </p>
        </Container>
      </section>

      <Section size="md">
        <Claim number={1} title="Structure first.">
          <p>
            Before anything else, the substrate is declared. Every tool, every
            vendor, every workflow, every KPI, every integration. If it can be
            written down, it is. The company becomes legible to itself, to
            future team members, and to the AI that will work inside it.
          </p>
        </Claim>

        <Claim number={2} title="AI flows into every space the structure reveals.">
          <p>
            Once the platform exists, AI moves into it. More tools, more
            integrations, more agents. The structure multiplies itself
            through intelligence. Every new vendor plugs into the same spine.
            Every new workflow becomes another surface the agents can reach.
          </p>
        </Claim>

        <Claim number={3} title="Humans change role.">
          <p>
            We are no longer the ones who do the work. We are the ones who
            make sure information travels correctly from one end of the
            company to the other. From customer to system. From system back
            to the humans who need to act on it. We become the connective
            tissue between the humans outside the company and the substrate
            inside it.
          </p>
        </Claim>

        <Claim number={4} title="What this frees is the thing that matters.">
          <p>
            Time. Attention. The ability to be empathic with customers.
            The ability to care about their experience. The ability to build
            relationships that compound. Humans return to being human with
            the people they serve. The code becomes fast, the conversations
            become slow. That is the right direction.
          </p>
        </Claim>

        <Claim
          number={5}
          title="The industry is going this way whether we choose it or not."
        >
          <p>
            Complexity in enterprise software will only increase. Vendors
            multiply. Integrations multiply. Compliance requirements
            multiply. The LLM is already the only technology that can close
            the gap in reasonable time. The only question is whether your
            company meets that future with a coherent structure to plug it
            into, or with an ungoverned sprawl of clicks.
          </p>
        </Claim>

        <Claim number={6} title="The framework must be robust to encounter AI.">
          <p>
            Accountability lives in declared code. Transparency lives in
            auditable artifacts. Review gates live in pull requests. A
            structure that remains understandable as AI takes on more is not
            a nice-to-have. It is the precondition. Otherwise the company
            becomes opaque to itself.
          </p>
        </Claim>

        <Claim number={7} title="Two phases. Always in that order.">
          <p>
            First, AI builds the system. It writes the Terraform, the
            pipelines, the runbooks, the prompts, the KPI queries. Once
            compiled, the output is static, deterministic, owned. Then, AI
            lives on top of it. Scheduled digests. Code review. Insight jobs.
            Agents for the outliers. The compiled substrate is what makes
            that second phase real. Skip the first, the second has nothing
            to stand on.
          </p>
        </Claim>

        <Claim number={8} title="This is the DNA of any software company now.">
          <p>
            Not a framework. Not a consulting engagement. Not a SaaS you
            rent. A way of being in the software business. Every company of
            any size will arrive here. Most will arrive late, through pain,
            through unmanageable console debt, through the slow realisation
            that their people are spending their time on tasks that should
            have been code. OneOps is the deliberate version of the same
            arrival.
          </p>
        </Claim>

        <Claim number={9} title="We are not writing code. We are summoning it.">
          <p>
            The verb has changed. Humans hold intent. AI writes the glue.
            Code becomes the substrate the summoning deposits into. The
            discipline of OneOps is what keeps the summoning honest: what
            lives in the repo, what is reviewed, what is auditable, what is
            owned. Without the discipline, you are not summoning, you are
            wishing.
          </p>
        </Claim>
      </Section>

      <Section size="md" className="bg-[color:var(--color-background-alt)]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="label-eyebrow !text-[color:var(--color-accent)]">The practice</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Code where possible.
            <br />
            AI where necessary.
            <br />
            Agents for the outliers.
            <br />
            <span className="text-[color:var(--color-accent)]">Humans for the humans.</span>
          </h2>
          <p className="text-lg text-[color:var(--color-foreground-muted)] leading-relaxed">
            That last line is the part most people miss. Building the
            substrate is not about replacing humans. It is about returning
            humans to the work only humans can do.
          </p>
        </div>
      </Section>

      <CTA
        eyebrow="Begin"
        title="Start building the DNA of your company in code."
        body="The first step is always the same: a read on what the company currently runs through clicks, tribal runbooks, and copy-paste. From there, the compile shows itself."
        primaryHref="/assess"
        primaryLabel="Take the 3-minute read"
        secondaryHref="/thesis"
        secondaryLabel="See the 10 axioms"
      />
    </>
  );
}

function Claim({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mb-14 last:mb-0 grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
      <div className="flex md:flex-col items-center md:items-start gap-3">
        <span className="font-mono text-sm text-[color:var(--color-accent)]">
          {String(number).padStart(2, "0")}
        </span>
        <span
          aria-hidden="true"
          className="hidden md:block w-[2px] h-16 bg-[linear-gradient(to_bottom,var(--color-primary-light),transparent)]"
        />
      </div>
      <div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-[color:var(--color-foreground)] leading-tight">
          {title}
        </h2>
        <div className="text-lg text-[color:var(--color-foreground-muted)] leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </article>
  );
}
