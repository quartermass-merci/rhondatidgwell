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
      {/* Number-as-headline opener — the "21" is now monumental and
          breaks out of the container. The headline wraps around it. */}
      <section className="pt-12 md:pt-16 overflow-hidden">
        <Container>
          <div className="md:grid md:grid-cols-12 md:gap-6 md:items-end">
            <div className="md:col-span-6 md:-ml-[2vw] relative">
              <p
                className="h-numeral text-ink select-none"
                style={{ fontSize: "clamp(8rem, 26vw, 24rem)" }}
                aria-hidden
              >
                21
              </p>
              <p className="sr-only">
                Twenty-one students per K–5 class, every period, every day.
              </p>
              <p className="mt-4 text-xs md:text-sm uppercase tracking-[0.22em] text-muted max-w-xs">
                Students per K–5 class,
                <br />
                every period, every day
              </p>
            </div>
            <div className="md:col-span-6 mt-10 md:mt-0 md:pb-8">
              <h1 className="h-display-xl font-display font-normal text-ink text-balance">
                The library is the room where{" "}
                <em className="font-normal text-[color:var(--accent-2)]">
                  every one
                </em>{" "}
                of them belongs.
              </h1>
              <p className="mt-6 text-base md:text-lg text-[color:var(--text-body)] max-w-xl leading-relaxed">
                Teacher-Librarian &amp; ESL Teacher at Rivercrest Junior
                School since 2021. K–5 library literacy, STEAM and coding,
                small-group English language learning, and Special Ed
                resource.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Full-bleed image — wider aspect, the room takes the full viewport */}
      <figure className="mt-16 md:mt-24 relative w-full aspect-[16/10] md:aspect-[21/7] bg-highlight overflow-hidden">
        <Image
          src="/images/library-hero.jpg"
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

      {/* Reversed marine intro band — announces the index */}
      <section className="reversed py-16 md:py-24">
        <Container>
          <div className="md:grid md:grid-cols-12 md:gap-8 md:items-end">
            <p className="md:col-span-3 text-[11px] font-medium uppercase tracking-[0.28em] rev-muted">
              In this section
            </p>
            <h2 className="md:col-span-9 mt-4 md:mt-0 font-display text-paper leading-[0.98] tracking-[-0.025em]"
                style={{ fontSize: "clamp(2.25rem, 6vw + 0.5rem, 5.5rem)" }}>
              Five rooms inside
              <br />
              <em className="font-normal">one library.</em>
            </h2>
          </div>
        </Container>
      </section>

      {/* Index — numbered editorial ToC, numerals pushed monumental */}
      <Container className="pb-24 pt-2">
        <ol>
          {ROOMS.map((r) => (
            <li key={r.href} className="border-b border-ink/90 first:border-t border-t-0">
              <Link
                href={r.href}
                className="group grid grid-cols-12 gap-4 md:gap-6 items-baseline py-10 md:py-14 transition-colors hover:bg-highlight/60 -mx-4 px-4"
              >
                <span className="col-span-2 md:col-span-2 h-numeral text-[color:var(--accent-2)] leading-[0.8]"
                      style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
                  {r.num}
                </span>
                <div className="col-span-10 md:col-span-8">
                  <h2 className="font-display text-[1.875rem] md:text-[2.75rem] leading-[0.98] text-ink group-hover:text-accent transition-colors tracking-[-0.025em]">
                    {r.title}
                  </h2>
                  <p className="mt-4 text-[0.95rem] md:text-base leading-relaxed text-[color:var(--text-body)] max-w-2xl">
                    {r.blurb}
                  </p>
                </div>
                <span className="hidden md:flex col-span-2 items-start justify-end pt-4 text-accent">
                  <ArrowUpRight
                    size={28}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
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
