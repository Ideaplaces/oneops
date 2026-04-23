import Link from "next/link";
import Container from "@/components/Container";
import Logo from "@/components/Logo";

const NAV = [
  { href: "/manifesto", label: "Manifesto" },
  { href: "/thesis", label: "Thesis" },
  { href: "/method", label: "Method" },
  { href: "/agents", label: "Agents" },
  { href: "/catalog", label: "Catalog" },
  { href: "/proof", label: "Proof" },
  { href: "/case-studies", label: "Case studies" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--color-background)]/70 border-b border-[color:var(--color-border-light)]">
      <Container size="xl" as="nav" className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)] transition-colors"
        >
          <Logo className="h-7 w-7" />
          <span className="font-serif text-xl font-bold tracking-tight">OneOps</span>
        </Link>
        <ul className="hidden lg:flex items-center gap-7 text-sm text-[color:var(--color-foreground-muted)]">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-[color:var(--color-foreground)] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Link
            href="/assess"
            className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-[color:var(--color-primary-light)] bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-light)] text-white px-4 py-2 text-sm font-medium shadow-[var(--shadow-glow)] transition"
          >
            Take the 3-min read
          </Link>
        </div>
      </Container>
    </header>
  );
}
