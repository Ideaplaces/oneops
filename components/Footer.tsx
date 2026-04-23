import Link from "next/link";
import Container from "@/components/Container";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border-light)] bg-[color:var(--color-background-alt)]/60 mt-24">
      <Container size="xl" className="py-12 grid gap-10 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Logo className="h-7 w-7" />
            <span className="font-serif text-lg font-bold">OneOps</span>
          </Link>
          <p className="text-sm text-[color:var(--color-foreground-muted)] leading-relaxed max-w-xs">
            One company. One cohesive technological system. Code where possible, AI where necessary, agents for the outliers.
          </p>
        </div>
        <FooterColumn
          title="Framework"
          links={[
            { href: "/manifesto", label: "Manifesto" },
            { href: "/thesis", label: "Thesis" },
            { href: "/method", label: "Method" },
            { href: "/agents", label: "Agents" },
          ]}
        />
        <FooterColumn
          title="Evidence"
          links={[
            { href: "/catalog", label: "Catalog" },
            { href: "/proof", label: "Proof" },
            { href: "/case-studies", label: "Case studies" },
          ]}
        />
        <FooterColumn
          title="Engage"
          links={[
            { href: "/faq", label: "FAQ" },
            { href: "/contact", label: "Contact" },
            { href: "https://docs.ideaplaces.com/oneops", label: "Living docs →" },
          ]}
        />
      </Container>
      <Container size="xl" className="flex flex-col md:flex-row justify-between py-6 border-t border-[color:var(--color-border-light)] text-xs text-[color:var(--color-foreground-muted)] gap-3">
        <p>© {new Date().getFullYear()} OneOps — an IdeaPlaces initiative.</p>
        <p className="font-mono">
          <span className="text-[color:var(--color-accent)]">●</span> Predictable first. AI second. Agents for the outliers.
        </p>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="label-eyebrow mb-3">{title}</p>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)] transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
