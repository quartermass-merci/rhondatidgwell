import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-6", className)}>
      {children}
    </Tag>
  );
}

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-[62ch] text-[color:var(--text-body)] leading-[1.65] [&>p+p]:mt-6 [&>p]:text-[1.0625rem] md:[&>p]:text-[1.1875rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}
