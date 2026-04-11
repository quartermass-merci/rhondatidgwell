"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { NAV_GROUPS } from "@/components/nav-data";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const first = sheetRef.current?.querySelector<HTMLElement>(
      "a, button, [tabindex]:not([tabindex='-1'])",
    );
    first?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-paper border-b border-rule">
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

        {/* Desktop — 3 dropdown groups + Contact */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_GROUPS.map((group) => (
            <li
              key={group.label}
              className="relative"
              onMouseEnter={() => setOpenGroup(group.label)}
              onMouseLeave={() => setOpenGroup(null)}
            >
              <Link
                href={group.href}
                className="inline-flex items-center gap-1 px-3 py-2 text-sm text-ink/85 hover:text-[color:var(--hot)] transition-colors"
                onFocus={() => setOpenGroup(group.label)}
              >
                {group.label}
                <ChevronDown
                  size={13}
                  className={cn(
                    "transition-transform duration-200",
                    openGroup === group.label && "rotate-180",
                  )}
                />
              </Link>
              {openGroup === group.label && (
                <div
                  className="absolute left-0 top-full pt-2 min-w-[22rem]"
                  onFocus={() => setOpenGroup(group.label)}
                >
                  <ul className="bg-paper border border-ink shadow-[6px_6px_0_0_var(--ink)]">
                    {group.items.map((item, i) => (
                      <li
                        key={item.href}
                        className={cn(
                          "border-l-[3px] border-transparent hover:border-[color:var(--hot)]",
                          i > 0 && "border-t border-rule",
                        )}
                      >
                        <Link
                          href={item.href}
                          onBlur={(e) => {
                            // Close when focus leaves the group entirely
                            if (
                              !e.currentTarget
                                .closest("li.relative")
                                ?.contains(
                                  e.relatedTarget as Node | null,
                                )
                            ) {
                              setOpenGroup(null);
                            }
                          }}
                          className="block px-4 py-3 text-[0.9rem] text-ink hover:text-[color:var(--hot)] transition-colors leading-snug"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
          <li className="ml-2">
            <Link
              href="/contact"
              className="inline-flex items-center px-3 py-2 text-sm text-ink/85 hover:text-[color:var(--hot)] transition-colors"
            >
              Contact
            </Link>
          </li>
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

      {/* Mobile — all groups expanded */}
      {open && (
        <div
          id="mobile-menu"
          ref={sheetRef}
          className="fixed inset-0 top-16 z-30 bg-paper md:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Primary navigation"
        >
          <div className="px-6 py-8 space-y-8">
            {NAV_GROUPS.map((group) => (
              <div key={group.label}>
                <Link
                  href={group.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-ink leading-tight block"
                >
                  {group.label}
                </Link>
                <ul className="mt-3 space-y-2 pl-4 border-l-2 border-[color:var(--hot)]">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="text-[0.95rem] text-ink/85 hover:text-[color:var(--hot)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="font-display text-2xl text-ink leading-tight block"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
