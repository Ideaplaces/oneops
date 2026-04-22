export interface EvidenceRowData {
  category: string;
  tool: string;
  pattern: string;
  evidence: string;
}

export default function EvidenceTable({ rows }: { rows: EvidenceRowData[] }) {
  return (
    <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[color:var(--color-border-light)]">
      <table className="w-full text-left text-sm">
        <thead className="bg-[color:var(--color-background-alt)]">
          <tr className="border-b border-[color:var(--color-border-light)]">
            <Th>Category</Th>
            <Th>Tool</Th>
            <Th>Pattern</Th>
            <Th>Evidence path</Th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              className="border-b border-[color:var(--color-border-light)] last:border-0 hover:bg-[color:var(--color-surface)]/40 transition"
            >
              <Td className="text-[color:var(--color-foreground-muted)]">{r.category}</Td>
              <Td className="font-medium text-[color:var(--color-foreground)]">{r.tool}</Td>
              <Td className="text-[color:var(--color-foreground-muted)]">{r.pattern}</Td>
              <Td>
                <code className="font-mono text-xs text-[color:var(--color-accent)]">
                  {r.evidence}
                </code>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="label-eyebrow py-3 px-5 text-[color:var(--color-accent)]">{children}</th>
  );
}

function Td({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <td className={`py-4 px-5 align-top ${className}`}>{children}</td>;
}
