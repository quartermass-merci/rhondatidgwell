import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

type EvidenceStripProps = {
  items: string[];
  className?: string;
};

export function EvidenceStrip({ items, className }: EvidenceStripProps) {
  return (
    <ul
      className={cn(
        "grid gap-3 sm:grid-cols-2 my-8 p-5 md:p-6 bg-highlight/60 rounded-sm border border-rule/60",
        className,
      )}
    >
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-ink/90">
          <Check
            size={16}
            className="mt-0.5 shrink-0 text-accent"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
