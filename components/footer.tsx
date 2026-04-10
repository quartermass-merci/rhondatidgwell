import Link from "next/link";

const GROUPS = [
  {
    label: "About",
    links: [
      { href: "/about", label: "Philosophy" },
      { href: "/about/journey", label: "Journey" },
      { href: "/about/credentials", label: "Credentials" },
    ],
  },
  {
    label: "Practice",
    links: [
      { href: "/classroom", label: "Classroom" },
      { href: "/library", label: "Library" },
      { href: "/assessment", label: "Assessment" },
      { href: "/leadership", label: "Leadership" },
    ],
  },
  {
    label: "Connect",
    links: [{ href: "/contact", label: "Contact" }],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-rule bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-xl">Rhonda Tidgwell</p>
            <p className="mt-2 text-sm text-muted">
              Teacher-Librarian, Toronto District School Board.
            </p>
          </div>
          {GROUPS.map((g) => (
            <div key={g.label}>
              <p className="text-xs uppercase tracking-widest text-muted">
                {g.label}
              </p>
              <ul className="mt-3 space-y-2">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink/80 hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-rule flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Rhonda Tidgwell. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            This site contains no student data. See{" "}
            <Link href="/accessibility" className="underline hover:text-accent">
              accessibility statement
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
