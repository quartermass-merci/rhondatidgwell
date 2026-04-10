import { cn } from "@/lib/cn";

/**
 * Styled placeholder for [TBD] items in the copy deck.
 * Never silently drop TBDs — always render as a visible muted badge.
 */
export function Tbd({
  children = "TBD",
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-dashed border-muted/60 bg-highlight/50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
