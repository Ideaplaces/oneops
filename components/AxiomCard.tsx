interface AxiomCardProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export default function AxiomCard({ number, title, children }: AxiomCardProps) {
  return (
    <article className="rounded-[var(--radius-lg)] border border-[color:var(--color-border-light)] bg-[color:var(--color-surface)]/50 p-8 transition hover:border-[color:var(--color-primary-light)]">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-mono text-sm text-[color:var(--color-accent)]">
          {String(number).padStart(2, "0")}
        </span>
        <h3 className="font-serif text-2xl font-bold text-[color:var(--color-foreground)]">
          {title}
        </h3>
      </div>
      <div className="text-[color:var(--color-foreground-muted)] leading-relaxed">
        {children}
      </div>
    </article>
  );
}
