import Image from "next/image";
import Link from "next/link";
import { Container, Prose } from "@/components/container";
import { ProofTile } from "@/components/proof-tile";
import { PullQuote } from "@/components/pull-quote";
import { SectionCard } from "@/components/section-card";
import { CtaStrip } from "@/components/cta-strip";

export const metadata = {
  description:
    "Teacher-Librarian and ESL teacher at Rivercrest Junior School. Twenty-four years in TDSB classrooms and learning commons. Inquiry-driven, equity-forward, still in love with the work.",
};

export default function Home() {
  return (
    <main id="main" className="flex-1">
      {/* Hero */}
      <Container className="pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Rhonda Tidgwell
            </p>
            <h1 className="mt-5 font-display text-[2.5rem] md:text-[4.25rem] leading-[1.02] text-ink font-normal">
              Twenty-four years
              <br />
              in classrooms
              <br />
              and libraries.
            </h1>
            <p className="mt-6 text-xl font-display italic text-ink/80">
              Teacher-Librarian and ESL Teacher, Rivercrest Junior School.
            </p>
            <Prose className="mt-8">
              <p>
                I'm the Teacher-Librarian and Multi-Language Learning (ESL)
                Teacher at Rivercrest Junior School — K–5 library literacy,
                STEAM and coding, small-group English language learning, and
                Special Ed resource. I've been in TDSB classrooms since 2002.
              </p>
              <p>
                This site is my portfolio. The teaching, the library work, the
                student artifacts, and the thinking behind all of it.
              </p>
            </Prose>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/library"
                className="inline-flex items-center rounded-sm bg-accent px-5 py-3 text-sm font-medium text-paper hover:bg-accent/90 transition-colors"
              >
                Enter the Library →
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-sm border border-ink/80 px-5 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
              >
                Read my philosophy
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-rule bg-highlight/40">
              <Image
                src="/images/rhonda.jpg"
                alt="Rhonda Tidgwell, Teacher-Librarian at Rivercrest Junior School"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Proof tiles */}
      <Container className="pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          <ProofTile
            label="CURRENT ROLE"
            headline="Teacher-Librarian + ESL"
            sub="Rivercrest Junior School · 2021–present"
          />
          <ProofTile
            label="EXPERIENCE"
            headline="24 Years in TDSB"
            sub="K–5 Library · Grades 4–8 Classroom · Special Ed · ESL"
          />
          <ProofTile
            label="APPROACH"
            headline="Inquiry-Driven, Equity-Forward"
            sub="Because curious kids become citizens"
          />
        </div>
      </Container>

      {/* Featured pull-quote */}
      <Container className="pb-24">
        <PullQuote
          style="hero"
          quote="Every student deserves a 'Ms. Tidgwell year.'"
          attribution="Student nomination, World Teachers' Day Award"
        />
      </Container>

      {/* Section cards */}
      <Container className="pb-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          What's in this portfolio
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink max-w-3xl">
          Four rooms, twenty-four years of practice, every claim backed by an
          artifact.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <SectionCard
            href="/classroom"
            label="Card 01"
            title="Classroom Practice"
            blurb="Inquiry-driven lesson planning and differentiation across grades 4 through 8."
          />
          <SectionCard
            href="/library"
            label="Card 02"
            title="Library & Learning Commons"
            blurb="The Rivercrest library, the makerspace, digital citizenship, and the collection I've built since 2021."
          />
          <SectionCard
            href="/assessment"
            label="Card 03"
            title="Assessment & Feedback"
            blurb="How Growing Success becomes classroom practice — conferences, levelled exemplars, a comment bank, and feedback students can actually use."
          />
          <SectionCard
            href="/leadership"
            label="Card 04"
            title="Leadership & Community"
            blurb="Staff PD, mentorship, equity work, and the committees and PLCs that keep me learning."
          />
        </div>
      </Container>

      <CtaStrip
        headline="Hiring for a Teacher-Librarian role?"
        body="Let's talk. I'm available for a September 2026 start."
        ctaLabel="Get in touch"
        ctaHref="/contact"
      />
    </main>
  );
}
