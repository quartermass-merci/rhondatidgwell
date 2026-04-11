"use client";

/**
 * View Transitions hook — patches router pushes so same-document navigations
 * run through document.startViewTransition(). The CSS side of this lives in
 * globals.css (::view-transition-old/new rules). Progressive-enhances: in
 * browsers without the API we just use normal Next.js navigation.
 *
 * We mount this once in the root layout. It attaches a global click handler
 * on internal <a> links — no need to refactor every Link usage.
 */

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function ViewTransitions() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Feature detect once.
    const supports =
      "startViewTransition" in document &&
      typeof (document as Document & { startViewTransition?: unknown })
        .startViewTransition === "function";
    if (!supports) return;

    const isReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;

      const target = e.target as HTMLElement | null;
      const a = target?.closest("a") as HTMLAnchorElement | null;
      if (!a) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download")) return;

      const href = a.getAttribute("href");
      if (!href) return;

      // Only handle same-origin, path-only hrefs (no hashes on the same page).
      let url: URL;
      try {
        url = new URL(a.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        return; // same page, let default or hash nav happen
      }

      e.preventDefault();
      (document as Document & {
        startViewTransition: (cb: () => void) => unknown;
      }).startViewTransition(() => {
        router.push(url.pathname + url.search + url.hash);
      });
    };

    // Capture phase so we run BEFORE next/link's internal handler and can
    // wrap the navigation in startViewTransition.
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, [router]);

  return null;
}
