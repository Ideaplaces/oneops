import Container from "@/components/Container";
import { cn } from "@/lib/cn";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: "sm" | "md" | "lg" | "xl";
  bleed?: boolean;
}

export default function Section({
  size = "lg",
  className,
  bleed = false,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 md:py-28 border-t border-[color:var(--color-border-light)] first:border-0",
        bleed && "relative overflow-hidden",
        className,
      )}
      {...rest}
    >
      {bleed ? children : <Container size={size}>{children}</Container>}
    </section>
  );
}
