"use client";

/**
 * Scramble — on first scroll-in, the text jumbles through random characters
 * then settles into the final string. Respects prefers-reduced-motion (just
 * renders the final text). IntersectionObserver-driven, one-shot.
 *
 * Usage:
 *   <Scramble as="h1" className="...">Meeting every student.</Scramble>
 *
 * It renders children as-is server-side (so SEO + no-JS keeps working) and
 * only swaps to the scrambled version after mount, once it enters view.
 */

import { useEffect, useRef, useState, type ElementType } from "react";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&%$#@*";

type ScrambleProps = {
  children: string;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  /** duration of the scramble in ms (default 900) */
  durationMs?: number;
};

export function Scramble({
  children,
  as: Tag = "span",
  className,
  style,
  durationMs = 900,
}: ScrambleProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [text, setText] = useState(children);
  const playedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || playedRef.current) continue;
          playedRef.current = true;
          io.disconnect();
          run();
        }
      },
      // Low threshold so tiny eyebrow labels still trigger — a 10% visibility
      // of a 1-line label is plenty to "see" the reveal.
      { threshold: 0.01 },
    );
    io.observe(el);

    function run() {
      const target = children;
      const len = target.length;
      const start = performance.now();
      let raf = 0;

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        // Ease-out cubic — resolve faster as we approach the final string.
        const eased = 1 - Math.pow(1 - t, 3);
        const resolved = Math.floor(eased * len);
        let out = "";
        for (let i = 0; i < len; i++) {
          const c = target[i];
          if (c === " " || c === "\n" || c === "\u00A0") {
            out += c;
          } else if (i < resolved) {
            out += c;
          } else {
            out += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        setText(out);
        if (t < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setText(target);
        }
      };

      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }

    return () => io.disconnect();
  }, [children, durationMs]);

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={className}
      style={style}
    >
      {text}
    </Tag>
  );
}
