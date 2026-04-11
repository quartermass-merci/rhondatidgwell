"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#commitments", label: "Commitment to Students" },
  { href: "/#cornerstones", label: "Four Cornerstones" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while the sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Audit H3 — focus trap + Esc close + return focus to trigger
  useEffect(() => {
    if (!open) return;

    // Move focus into the sheet
    const first = sheetRef.current?.querySelector<HTMLElement>(
      "a, button, [tabindex]:not([tabindex='-1'])",
    );
    first?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !sheetRef.current) return;

      const focusables = sheetRef.current.querySelectorAll<HTMLElement>(
        "a, button, [tabindex]:not([tabindex='-1'])",
      );
      if (focusables.length === 0) return;

      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <header
      className={cn(
        // Always solid paper. The scroll-to-transparent state was causing a
        // legibility bug (critique P1) and the transition added nothing
        // editorial. Solid paper + rule is the right move here.
        "sticky top-0 z-40 bg-paper border-b border-rule",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="font-display text-xl text-ink hover:text-accent transition-colors"
        >
          Rhonda Tidgwell
        </Link>
        <ul className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-ink/80 hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          ref={triggerRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden p-2 -mr-2 text-ink"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div
          id="mobile-menu"
          ref={sheetRef}
          className="fixed inset-0 top-16 z-30 bg-paper md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Primary navigation"
        >
          <ul className="flex flex-col px-6 py-8 gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-ink hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
