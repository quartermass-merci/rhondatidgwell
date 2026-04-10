import { cn } from "@/lib/cn";

export type TimelineNode = {
  years: string;
  heading: string;
  body: string;
};

type TimelineProps = {
  nodes: TimelineNode[];
  className?: string;
};

export function Timeline({ nodes, className }: TimelineProps) {
  return (
    <ol className={cn("relative space-y-12 my-12", className)}>
      <div
        className="absolute left-[9px] top-2 bottom-2 w-px bg-rule md:left-[11px]"
        aria-hidden
      />
      {nodes.map((n, i) => (
        <li key={i} className="relative pl-10 md:pl-12">
          <span
            className="absolute left-0 top-1.5 h-[18px] w-[18px] md:h-[22px] md:w-[22px] rounded-full border-2 border-accent bg-paper"
            aria-hidden
          />
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
            {n.years}
          </p>
          <h3 className="mt-2 font-display text-2xl md:text-3xl text-ink leading-tight">
            {n.heading}
          </h3>
          <p className="mt-3 max-w-2xl text-ink/80 leading-relaxed">
            {n.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
