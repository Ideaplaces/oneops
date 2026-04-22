import { cn } from "@/lib/cn";

// OneOps mark: a concentric mesh — two orbits tied by a spine line,
// one lime node for the agentic pulse at the outer ring.
export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <circle
        cx="16"
        cy="16"
        r="13"
        stroke="#6366F1"
        strokeWidth="1.25"
        strokeOpacity="0.5"
      />
      <circle
        cx="16"
        cy="16"
        r="7"
        stroke="#6366F1"
        strokeWidth="1.5"
      />
      <line
        x1="3"
        y1="16"
        x2="29"
        y2="16"
        stroke="#6366F1"
        strokeWidth="1.25"
        strokeOpacity="0.6"
      />
      <circle cx="16" cy="16" r="2" fill="#4338CA" />
      <circle cx="29" cy="16" r="1.75" fill="#A3E635" />
    </svg>
  );
}
