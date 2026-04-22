import { cn } from "@/lib/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article" | "main" | "header" | "footer" | "nav";
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClass: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export default function Container({
  as: Tag = "div",
  size = "lg",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "w-full mx-auto px-6 sm:px-8 lg:px-12",
        sizeClass[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
