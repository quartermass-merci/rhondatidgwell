"use client";

import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";

/**
 * Global image lightbox. Mounted once in the root layout.
 *
 * Delegates clicks on any `.photo-tile` that is NOT inside an anchor —
 * tile links keep their navigation affordance; standalone photo tiles
 * (hero collages, competency photo grids) become zoomable.
 */
export function LightboxRoot() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState<string>("");
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      // Skip tiles that are themselves links (navigation affordance)
      const tile = target.closest<HTMLElement>(".photo-tile");
      if (!tile) return;
      if (tile.tagName === "A" || tile.closest("a")) return;
      const img = tile.querySelector<HTMLImageElement>("img");
      if (!img) return;
      e.preventDefault();
      // Use the largest src the browser chose from srcset if available
      setSrc(img.currentSrc || img.src);
      setAlt(img.alt || "");
      setOpen(true);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open || !src) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt || "Image preview"}
      className="lightbox-root fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-[color:var(--ink)]/95 backdrop-blur-sm animate-[lightbox-in_180ms_ease-out]"
      onClick={() => setOpen(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="max-h-[92vh] max-w-[94vw] object-contain shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        ref={closeRef}
        type="button"
        aria-label="Close image preview"
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2 bg-paper text-ink px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] hover:bg-[color:var(--hot)] hover:text-paper transition-colors"
      >
        <X size={14} /> Close
      </button>
      {alt && (
        <p className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-center text-[11px] uppercase tracking-[0.2em] text-paper/70 pointer-events-none">
          {alt}
        </p>
      )}
    </div>
  );
}
