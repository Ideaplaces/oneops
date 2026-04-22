interface LayerCardProps {
  layer: number;
  name: string;
  tagline: string;
  items: string[];
}

export default function LayerCard({ layer, name, tagline, items }: LayerCardProps) {
  return (
    <article className="rounded-[var(--radius-lg)] border border-[color:var(--color-border-light)] bg-[color:var(--color-background-alt)] p-8 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[2px] bg-[linear-gradient(90deg,transparent,var(--color-primary-light),var(--color-accent),transparent)] opacity-60"
      />
      <p className="label-eyebrow">Layer {layer}</p>
      <h3 className="font-serif text-3xl font-bold text-[color:var(--color-foreground)] mb-2">
        {name}
      </h3>
      <p className="text-[color:var(--color-foreground-muted)] mb-6 leading-relaxed">
        {tagline}
      </p>
      <ul className="space-y-2 font-mono text-sm">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-[color:var(--color-foreground)] border-l-2 border-[color:var(--color-border)] pl-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
