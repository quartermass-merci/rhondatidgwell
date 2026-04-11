// Infinite horizontal marquee. Duplicated track → seamless -100% loop.
// Each item is separated by a squared ornament bullet. Pausable on hover.

type TickerProps = {
  items: string[];
  className?: string;
  tone?: "ink" | "hot" | "marine";
};

const TONE = {
  ink: "bg-ink text-paper",
  hot: "bg-[color:var(--hot)] text-paper",
  marine: "bg-[color:var(--accent-2)] text-paper",
} as const;

export function Ticker({ items, className = "", tone = "ink" }: TickerProps) {
  // Duplicate the items inline so the -100% keyframe yields a seamless loop.
  const track = [...items, ...items];

  return (
    <div
      aria-hidden
      className={`ticker ${TONE[tone]} py-5 md:py-6 ${className}`}
    >
      <div className="ticker-track font-display italic text-[1.75rem] md:text-[2.75rem] leading-none tracking-[-0.02em]">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-10 pr-10"
          >
            {item}
            <span
              className="inline-block h-3 w-3 md:h-4 md:w-4 rotate-45 bg-[color:var(--citrus)]"
              aria-hidden
            />
          </span>
        ))}
      </div>
    </div>
  );
}
