import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";

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
    photo: "/images/competencies/15/01.jpg",
  },
  {
    num: "02",
    href: "/library/makerspace",
    title: "Makerspace",
    blurb:
      "Where mistakes are the curriculum and the rule is iterate until it works.",
    photo: "/images/competencies/15/02.jpg",
  },
  {
    num: "03",
    href: "/library/digital-citizenship",
    title: "Digital Citizenship",
    blurb:
      "Not a list of things not to do — a media literacy practice for junior students.",
    photo: "/images/competencies/15/03.jpg",
  },
  {
    num: "04",
    href: "/library/reading-culture",
    title: "Reading Culture",
    blurb:
      "Forest of Reading and the quiet work of matching a kid to the book that will change them.",
    photo: "/images/competencies/15/04.jpg",
  },
  {
    num: "05",
    href: "/library/virtual-library",
    title: "Virtual Library",
    blurb:
      "A year of Grade 6 Virtual School, two Teacher-Librarian AQs, and what it all taught me about the physical room.",
    photo: "/images/competencies/15/05.jpg",
  },
];

export default function Library() {
  return (
    <main id="main" className="flex-1">
      {/* HERO */}
      <section className="min-h-[calc(100svh-4rem)] flex items-center py-10 md:py-12 overflow-hidden">
        <Container>
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
                Library &amp; Learning Commons
              </p>
              <h1
                className="mt-5 font-display font-normal text-ink leading-[0.88] tracking-[-0.035em] text-balance"
                style={{ fontSize: "clamp(2.5rem, 7vw + 0.5rem, 7rem)" }}
              >
                The library is the room where{" "}
                <em className="font-normal text-[color:var(--accent-2)]">
                  every student belongs.
                </em>
              </h1>
              <p className="mt-7 text-[1rem] md:text-[1.05rem] leading-[1.6] text-[color:var(--text-body)] max-w-[56ch]">
                Teacher-Librarian and ESL Teacher at Rivercrest Junior School
                since 2021. K–5 library literacy, STEAM and coding, small-group
                English language learners, and the school&apos;s Special Ed
                resource. It&apos;s the room where curiosity gets to feel
                safest.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-3">
              <figure className="photo-tile relative row-span-2 aspect-[3/5]">
                <Image
                  src="/images/competencies/15/01.jpg"
                  alt="Library learning"
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover"
                />
              </figure>
              <figure className="photo-tile relative aspect-square">
                <Image
                  src="/images/competencies/15/02.jpg"
                  alt="Makerspace"
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover"
                />
              </figure>
              <figure className="photo-tile relative aspect-square">
                <Image
                  src="/images/competencies/15/03.jpg"
                  alt="Digital citizenship"
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover"
                />
              </figure>
            </div>
          </div>
        </Container>
      </section>

      {/* ROOMS GRID */}
      <section className="border-t-[3px] border-ink bg-highlight py-14 md:py-20">
        <Container>
          <h2
            className="font-display text-ink leading-[0.92] tracking-[-0.03em] mb-10 md:mb-12"
            style={{ fontSize: "clamp(2rem, 4vw + 0.5rem, 3.75rem)" }}
          >
            Five rooms inside{" "}
            <em className="font-normal text-[color:var(--accent-2)]">
              one library
            </em>
            .
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {ROOMS.map((r, i) => {
              // 01 big, 02+03 small, 04+05 split
              const span = [
                "md:col-span-7",
                "md:col-span-5",
                "md:col-span-5",
                "md:col-span-7",
                "md:col-span-12",
              ][i];
              return (
                <Link
                  key={r.href}
                  href={r.href}
                  className={`photo-tile reveal group relative min-h-[20rem] md:min-h-[24rem] ${span}`}
                >
                  <Image
                    src={r.photo}
                    alt={r.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="tile-corner" />
                  <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full">
                    <span className="font-display italic text-[color:var(--citrus)] text-[3rem] md:text-[4rem] leading-[0.78] drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]">
                      {r.num}
                    </span>
                    <div className="tile-caption max-w-xl">
                      <h3
                        className="font-display text-paper leading-[1.04] tracking-[-0.015em] text-balance"
                        style={{ fontSize: "clamp(1.4rem, 2.4vw, 2.2rem)" }}
                      >
                        {r.title}.
                      </h3>
                      <p className="mt-2 text-[0.92rem] md:text-base leading-[1.5] text-paper/95 max-w-prose">
                        {r.blurb}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[color:var(--citrus)] font-semibold">
                        Open the room
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
