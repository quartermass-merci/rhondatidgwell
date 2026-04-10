import { cn } from "@/lib/cn";

type PullQuoteProps = {
  quote: string;
  attribution?: string;
  style?: "hero" | "inline";
  className?: string;
};

export function PullQuote({
  quote,
  attribution,
  style = "inline",
  className,
}: PullQuoteProps) {
  if (style === "hero") {
    return (
      <figure
        className={cn(
          "mx-auto w-full max-w-4xl rounded-sm bg-highlight px-8 py-14 md:px-16 md:py-20 text-center",
          className,
        )}
      >
        <span
          aria-hidden
          className="block font-display text-[5rem] leading-none text-accent/70 -mb-6"
        >
          &ldquo;
        </span>
        <blockquote className="font-display italic text-2xl md:text-3xl leading-snug text-ink">
          {quote}
        </blockquote>
        {attribution && (
          <figcaption className="mt-6 text-sm uppercase tracking-[0.16em] text-muted">
            {attribution}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure
      className={cn(
        "my-10 pl-6 border-l-2 border-accent/70",
        className,
      )}
    >
      <blockquote className="font-display italic text-xl md:text-2xl text-ink leading-snug">
        {quote}
      </blockquote>
      {attribution && (
        <figcaption className="mt-3 text-sm text-muted">— {attribution}</figcaption>
      )}
    </figure>
  );
}
