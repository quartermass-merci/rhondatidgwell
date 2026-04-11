"use client";

/**
 * Magnetic cursor — a soft coral dot that trails the pointer with easing and
 * snaps-scales onto any element marked [data-magnet] or any native link,
 * button, or role="button". Desktop only; hidden on touch and for
 * prefers-reduced-motion users.
 *
 * Pure DOM (no React re-renders), so it costs ~zero per frame. Lerp runs at
 * ~60fps via requestAnimationFrame. The dot mix-blend-modes to "difference"
 * so it inverts whatever it sits on — reads over ink AND paper.
 */

import { useEffect, useRef } from "react";

export function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Bail on touch devices and reduced motion — there's no pointer to trail.
    const isTouch =
      matchMedia("(hover: none), (pointer: coarse)").matches;
    const isReduced =
      matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || isReduced) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let dotX = targetX;
    let dotY = targetY;
    let ringX = targetX;
    let ringY = targetY;
    let hovering = false;
    let pressed = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      // Hit-test under the pointer for a magnetic target.
      const el = document.elementFromPoint(
        e.clientX,
        e.clientY,
      ) as HTMLElement | null;
      const interactive = el?.closest(
        "a, button, [role='button'], [data-magnet], .photo-tile, summary, input, textarea, select, label",
      );
      const shouldHover = !!interactive;
      if (shouldHover !== hovering) {
        hovering = shouldHover;
        ring.dataset.hover = String(hovering);
        dot.dataset.hover = String(hovering);
      }
    };

    const onDown = () => {
      pressed = true;
      ring.dataset.press = "true";
    };
    const onUp = () => {
      pressed = false;
      ring.dataset.press = "false";
    };

    const loop = () => {
      // Dot lerps fast, ring lerps slow — creates a lagged orbit.
      dotX += (targetX - dotX) * 0.4;
      dotY += (targetY - dotY) * 0.4;
      ringX += (targetX - ringX) * 0.15;
      ringY += (targetY - ringY) * 0.15;
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${
        hovering ? 1.9 : pressed ? 0.7 : 1
      })`;
      raf = requestAnimationFrame(loop);
    };

    document.documentElement.classList.add("has-magnetic-cursor");
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("has-magnetic-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="magnetic-cursor-ring"
        data-hover="false"
        data-press="false"
      />
      <div ref={dotRef} aria-hidden className="magnetic-cursor-dot" />
    </>
  );
}
