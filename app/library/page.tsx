import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Prose } from "@/components/container";
import { CompetencyFilter } from "@/components/competency-filter";

export const metadata = {
  title: "Library & Learning Commons",
  description:
    "Teacher-Librarian at Rivercrest Junior School — collection, makerspace, digital citizenship, reading culture, and the virtual library.",
};

const ROOMS = [
  {
    num: "01",
    href: "/library/collection",
    title: "Collection & Curation",
    blurb:
      "A collection is a living document about who matters. Here's how I've rebuilt Rivercrest's.",
  },
  {
    num: "02",
    href: "/library/makerspace",
    title: "Makerspace & Maker Learning",
    blurb:
      "Where mistakes are the curriculum and the rule is iterate until it works.",
  },
  {
    num: "03",
    href: "/library/digital-citizenship",
    title: "Digital Citizenship & Research",
    blurb:
      "Not a list of things not to do. A media literacy practice for junior students.",
  },
  {
    num: "04",
    href: "/library/reading-culture",
    title: "Reading Culture",
    blurb:
      "Forest of Reading and community events, plus the quiet work of matching a kid to the book that will change them.",
  },
  {
    num: "05",
    href: "/library/virtual-library",
    title: "Virtual Library & Tech Integration",
    blurb:
      "A year of Grade 6 Virtual School, two Teacher-Librarian AQs, and the lesson that shaped how I came back to the physical room.",
  },
];

export default function Library() {
  return (
    <main id="main" className="flex-1">
      {/* Full-bleed editorial header — oversized headline, no card, no hero shell */}
      <section className="pt-16 md:pt-24 pb-14 md:pb-20 border-b border-rule">
        <Container>
          <div className="md:grid md:grid-cols-12 md:gap-10">
            <div className="md:col-span-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
                Section II — Library &amp; Learning Commons
              </p>
              <h1 className="mt-6 h-display-xl font-display font-normal text-ink text-balance">
                The library is the{" "}
                <em className="font-normal text-[color:var(--accent)]">
                  most democratic
                </em>{" "}
                room in the school.
              </h1>
            </div>
            <aside className="md:col-span-4 md:pt-6 mt-8 md:mt-0">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Posting
              </p>
              <p className="mt-2 font-display text-lg text-ink leading-snug">
                Teacher-Librarian &amp; ESL Teacher
                <br />
                Rivercrest Junior School
              </p>
              <p className="mt-1 text-sm text-muted">2021 – present</p>
            </aside>
          </div>
        </Container>
      </section>

      {/* Opening essay — a true editorial opener, not a hero+prose combo */}
      <Container className="pt-16 pb-20">
        <div className="md:grid md:grid-cols-12 md:gap-10">
          <div className="hidden md:block md:col-span-3">
            <p className="sticky top-24 text-xs uppercase tracking-[0.18em] text-muted">
              The job
            </p>
          </div>
          <Prose className="md:col-span-9 max-w-none md:max-w-[60ch]">
            <p className="dropcap">
              The job is simple to describe and impossible to finish: build a
              reading culture, curate a collection that reflects every student,
              teach K–5 STEAM and coding, run digital citizenship and research
              instruction, and make the library the place where curiosity is
              safest.
            </p>
            <p>
              I came into the role with two Teacher-Librarian AQs earned
              during the pandemic and a year of Grade 6 Virtual School in the
              rearview mirror. That experience — teaching a full class
              entirely through a screen — is how I learned what a library
              actually is when you strip the room away. Everything I&apos;ve
              built at Rivercrest since 2021 has been in conversation with
              what that year made plain.
            </p>
          </Prose>
        </div>
      </Container>

      {/* Index — a numbered editorial ToC, not a card grid */}
      <Container className="pb-24">
        <p className="text-xs uppercase tracking-[0.22em] text-muted">
          In this section
        </p>
        <ol className="mt-6 border-t border-ink/90">
          {ROOMS.map((r) => (
            <li key={r.href} className="border-b border-rule">
              <Link
                href={r.href}
                className="group grid grid-cols-12 gap-4 md:gap-8 items-baseline py-7 md:py-9 transition-colors hover:bg-highlight/50 -mx-4 px-4"
              >
                <span className="col-span-2 md:col-span-1 font-display text-3xl md:text-4xl text-[color:var(--accent-70)] leading-none">
                  {r.num}
                </span>
                <div className="col-span-10 md:col-span-9">
                  <h2 className="font-display text-2xl md:text-[2rem] leading-[1.12] text-ink group-hover:text-accent transition-colors">
                    {r.title}
                  </h2>
                  <p className="mt-3 text-[0.95rem] md:text-base leading-relaxed text-[color:var(--text-body)] max-w-2xl">
                    {r.blurb}
                  </p>
                </div>
                <span className="hidden md:flex col-span-2 items-start justify-end pt-3 text-accent">
                  <ArrowUpRight
                    size={20}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Container>

      <Container className="pb-24 pt-4 border-t border-rule">
        <CompetencyFilter />
      </Container>
    </main>
  );
}
