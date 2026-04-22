import Link from "next/link";
import Container from "@/components/Container";

export default function CTA({
  eyebrow = "Engage",
  title,
  body,
  primaryHref = "/contact",
  primaryLabel = "Start a conversation",
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="py-20 md:py-28 border-t border-[color:var(--color-border-light)]">
      <Container size="md">
        <div className="relative rounded-[var(--radius-xl)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-12 overflow-hidden shadow-[var(--shadow-glow)]">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[color:var(--color-primary)] opacity-25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[color:var(--color-accent)] opacity-10 blur-3xl"
          />
          <div className="relative">
            <p className="label-eyebrow">{eyebrow}</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[color:var(--color-foreground)] max-w-2xl">
              {title}
            </h2>
            <p className="text-lg text-[color:var(--color-foreground-muted)] mb-8 max-w-2xl leading-relaxed">
              {body}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-[color:var(--color-primary-light)] bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-light)] text-white px-6 py-3 text-base font-medium shadow-[var(--shadow-glow)] transition"
              >
                {primaryLabel}
                <span aria-hidden="true">→</span>
              </Link>
              {secondaryHref && secondaryLabel && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center gap-2 rounded-[var(--radius)] border-2 border-[color:var(--color-secondary)] bg-transparent hover:bg-[color:var(--color-secondary)]/15 text-[color:var(--color-foreground)] px-6 py-3 text-base font-medium transition"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
