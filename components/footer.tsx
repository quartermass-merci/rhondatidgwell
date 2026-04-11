import Link from "next/link";
import { NAV_GROUPS } from "@/components/nav-data";

export function Footer() {
  return (
    <footer className="mt-20 border-t-[3px] border-ink bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-display text-2xl text-ink leading-tight">
              Rhonda
              <br />
              <em className="font-normal text-[color:var(--accent-2)]">
                Tidgwell.
              </em>
            </p>
            <p className="mt-4 text-sm text-muted max-w-[20ch]">
              Rivercrest Junior School · Toronto District School Board.
            </p>
          </div>
          {NAV_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                <Link
                  href={group.href}
                  className="hover:text-[color:var(--hot)] transition-colors"
                >
                  {group.label}
                </Link>
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[0.88rem] text-ink/85 hover:text-[color:var(--hot)] transition-colors leading-snug"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-rule flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Rhonda Tidgwell.{" "}
            <Link
              href="/contact"
              className="hover:text-[color:var(--hot)] transition-colors"
            >
              Get in touch
            </Link>
            .
          </p>
          <p className="text-xs text-muted">
            This site contains no student data. See{" "}
            <Link
              href="/accessibility"
              className="underline hover:text-[color:var(--hot)] transition-colors"
            >
              accessibility statement
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
