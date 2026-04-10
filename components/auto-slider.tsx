import Image from "next/image";

/**
 * Editorial infinite-scroll image strip.
 * - Pure CSS marquee (keyframes in globals.css), no JS, no client component.
 * - Honors prefers-reduced-motion via the global rule.
 * - Uses paper background with hairline rule, not the slop black gradient.
 *
 * The list is duplicated inline so the loop is seamless. Width of each
 * frame is fixed via `aspect-[4/3] h-[clamp(...)]` so the marquee distance
 * is deterministic.
 */
export function AutoSlider({
  src,
  count,
  alt,
}: {
  src: string;
  count: number;
  alt: string;
}) {
  const items = Array.from({ length: count }, (_, i) => ({
    href: `${src}/${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `${alt} — image ${i + 1}`,
  }));
  // Duplicate so the marquee loop is seamless
  const doubled = [...items, ...items];

  return (
    <div className="auto-slider relative w-full overflow-hidden border-y border-rule bg-highlight/40 py-10 md:py-14">
      <div className="auto-slider-track flex gap-6 md:gap-8 w-max will-change-transform">
        {doubled.map((it, i) => (
          <figure
            key={i}
            className="relative shrink-0 h-[14rem] md:h-[20rem] aspect-[4/3] bg-paper border border-rule overflow-hidden"
          >
            <Image
              src={it.href}
              alt={it.alt}
              fill
              sizes="(min-width: 768px) 27rem, 19rem"
              className="object-cover"
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
