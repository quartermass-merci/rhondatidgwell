import { cn } from "@/lib/cn";

export type ProofTileProps = {
  label: string;
  headline: string;
  sub?: string;
  className?: string;
};

export function ProofTile({ label, headline, sub, className }: ProofTileProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-sm border border-rule bg-paper p-6 md:p-7",
        className,
      )}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
      <p className="mt-3 font-display text-2xl md:text-3xl text-ink leading-snug">
        {headline}
      </p>
      {sub && <p className="mt-2 text-sm text-muted">{sub}</p>}
    </div>
  );
}
