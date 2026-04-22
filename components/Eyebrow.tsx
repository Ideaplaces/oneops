import { cn } from "@/lib/cn";

export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("label-eyebrow mb-3", className)}>{children}</p>;
}
