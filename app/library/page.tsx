import Image from "next/image";
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
      {/* Number-as-headline opener (critique P3).
          No eyebrow. No max-w-4xl prose block. A single display number
          with an inline gloss, then the full-bleed photograph (P4). */}
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="md:grid md:grid-cols-12 md:gap-10 md:items-end">
            <div className="md:col-span-5">
              <p
                className="font-display leading-[0.82] tracking-[-0.03em] text-ink"
                style={{ fontSize: "clamp(6rem, 18vw, 14rem)" }}
              >
                21
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted">
                Students per K–5 class, every period, every day
              </p>
            </div>
            <div className="md:col-span-7 mt-10 md:mt-0">
              <h1 className="h-display-lg font-display font-normal text-ink text-balance">
                The library is the room where every one of them belongs.
              </h1>
              <p className="mt-5 text-base md:text-lg text-[color:var(--text-body)] max-w-xl leading-relaxed">
                Teacher-Librarian &amp; ESL Teacher at Rivercrest Junior
                School since 2021. K–5 library literacy, STEAM and coding,
                small-group English language learning, and Special Ed
                resource.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Full-bleed image — the library itself, not a card (critique P4) */}
      <figure className="mt-14 md:mt-20 relative w-full aspect-[21/9] md:aspect-[21/8] bg-highlight overflow-hidden">
        <Image
          src="/images/library-hero.png"
          alt="The Rivercrest Junior School learning commons and makerspace"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </figure>
      <Container className="pt-4 pb-16">
        <figcaption className="text-xs uppercase tracking-[0.18em] text-muted">
          Rivercrest Junior School · Learning commons &amp; makerspace
        </figcaption>
      </Container>

      {/* Opening essay — drop cap retained but color is now marine via P5 */}
      <Container className="pb-20">
        <div className="md:grid md:grid-cols-12 md:gap-10">
          <div className="hidden md:block md:col-span-3">
            <p className="sticky top-24 text-xs uppercase tracking-[0.18em] text-muted">
              The job
            </p>
          </div>
          <Prose className="md:col-span-9 max-w-none md:max-w-[60ch]">
            <p className="dropcap">
              The job is simple to describe and impossible to finish: build a
              reading culture, curate a collection that reflects every
              student, teach K–5 STEAM and coding, run digital citizenship
              and research instruction, and make the library the place where
              curiosity is safest.
            </p>
            <p>
              I came into the role with two Teacher-Librarian AQs earned
              during the pandemic and a year of Grade 6 Virtual School in
              the rearview mirror. That experience — teaching a full class
              entirely through a screen — is how I learned what a library
              actually is when you strip the room away. Everything I&apos;ve
              built at Rivercrest since 2021 has been in conversation with
              what that year made plain.
            </p>
          </Prose>
        </div>
      </Container>

      {/* Index — numbered editorial ToC. Roman-numeral-style color moved
          to --accent-2-60 so the red is reserved for the hover action. */}
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
                <span className="col-span-2 md:col-span-1 font-display text-3xl md:text-4xl text-[color:var(--accent-2-60)] leading-none">
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
