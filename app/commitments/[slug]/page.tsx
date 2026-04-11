import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { COMMITMENTS, getCommitment } from "@/content/commitments";

export function generateStaticParams() {
  return COMMITMENTS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCommitment(slug);
  if (!c) return {};
  return {
    title: `${c.title} — Rhonda Tidgwell`,
    description: c.tagline,
  };
}

// Pick up to `n` photos from a competency's photo directory as preview tiles.
function previewPhotos(photoDir: string, photoCount: number, n: number) {
  const out: string[] = [];
  const max = Math.min(n, photoCount);
  for (let i = 1; i <= max; i++) {
    out.push(`${photoDir}/${String(i).padStart(2, "0")}.jpg`);
  }
  return out;
}

export default async function CommitmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCommitment(slug);
  if (!c) notFound();

  const idx = COMMITMENTS.findIndex((x) => x.slug === c.slug);
  const next = COMMITMENTS[(idx + 1) % COMMITMENTS.length];
  const prev = COMMITMENTS[(idx - 1 + COMMITMENTS.length) % COMMITMENTS.length];

  // Hero collage: one lead photo from each competency
  const heroPhotos = c.competencies
    .map((comp) => `${comp.photoDir}/01.jpg`)
    .slice(0, 4);

  return (
    <main className="bg-paper">
      {/* Crumb */}
      <Container className="pt-8 md:pt-10">
        <Link
          href="/#commitments"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} />
          My Commitment to Students
        </Link>
      </Container>

      {/* ============================================================
          OPENER — fits viewport. Two-col: numeral + title on left,
          photo collage on right. Intro sits beneath, compact.
          ============================================================ */}
      <section className="min-h-[calc(100svh-6rem)] flex items-center py-10 md:py-12 overflow-hidden">
        <Container>
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
                Commitment {c.ord} of {COMMITMENTS.length} · {c.title}
              </p>
              <h1
                className="mt-4 font-display font-normal text-ink leading-[0.92] tracking-[-0.03em] text-balance"
                style={{ fontSize: "clamp(2rem, 5.5vw + 0.5rem, 5.5rem)" }}
              >
                <em className="font-normal text-[color:var(--accent-2)]">
                  {c.tagline}
                </em>
              </h1>
              <p className="mt-7 text-[1rem] md:text-[1.05rem] leading-[1.55] text-[color:var(--text-body)] max-w-[56ch]">
                {c.intro}
              </p>
              <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-muted">
                {c.competencies.length}{" "}
                {c.competencies.length === 1 ? "competency" : "competencies"} ·
                Scroll to explore
              </p>
            </div>

            {/* 2x2 photo collage — one lead photo per competency */}
            <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-2 md:gap-3">
              {heroPhotos.map((src, i) => (
                <figure
                  key={src}
                  className={`photo-tile reveal relative aspect-[4/5] ${
                    i === 0 ? "row-span-2 aspect-[4/5]" : ""
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${c.title} — preview ${i + 1}`}
                    fill
                    sizes="(min-width: 768px) 20vw, 45vw"
                    className="object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          COMPETENCIES — each a compact module with photos interleaved.
          No full-bleed marquee; photos sit inside the module itself.
          ============================================================ */}
      {c.competencies.map((comp, ci) => {
        const photos = previewPhotos(comp.photoDir, comp.photoCount, 4);
        const isEven = ci % 2 === 0;
        return (
          <section
            key={comp.slug}
            className={`${ci === 0 ? "border-t-[3px]" : "border-t"} border-ink/90 py-14 md:py-20 ${
              isEven ? "bg-paper" : "bg-highlight"
            }`}
          >
            <Container>
              {/* Module header */}
              <div className="flex items-end justify-between gap-6 flex-wrap mb-10 md:mb-14">
                <div className="max-w-2xl">
                  <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
                    Competency {comp.ord} of {c.competencies.length}
                  </p>
                  <h2
                    className="mt-3 font-display text-ink leading-[0.95] tracking-[-0.028em] text-balance"
                    style={{
                      fontSize: "clamp(1.75rem, 3.8vw + 0.5rem, 3.5rem)",
                    }}
                  >
                    {comp.title}.
                  </h2>
                  <p className="mt-5 font-display italic text-lg md:text-xl text-[color:var(--text-body)] leading-[1.35] max-w-xl border-l-2 border-[color:var(--hot)] pl-4">
                    {comp.pull}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="font-display italic text-[color:var(--accent-2)]/20 leading-none select-none"
                  style={{ fontSize: "clamp(5rem, 10vw, 11rem)" }}
                >
                  {String(comp.ord).padStart(2, "0")}
                </span>
              </div>

              {/* Side-by-side: photo grid + sub-competency cards */}
              <div className="grid grid-cols-12 gap-4 md:gap-6">
                {/* Photo grid — 2 cols, 4 photos */}
                <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-3 md:gap-4 content-start">
                  {photos.map((src, pi) => (
                    <figure
                      key={src}
                      className={`photo-tile relative ${
                        pi === 0
                          ? "col-span-2 aspect-[4/3]"
                          : "aspect-square"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`${comp.title} — ${pi + 1}`}
                        fill
                        sizes="(min-width: 768px) 22vw, 45vw"
                        className="object-cover"
                      />
                    </figure>
                  ))}
                </div>

                {/* Sub-competency cards — 2x2 compact */}
                <ol className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {comp.subs.map((sub, si) => (
                    <li
                      key={si}
                      className="bg-paper border-l-[3px] border-[color:var(--accent-2)] hover:border-[color:var(--hot)] transition-colors p-4 md:p-5"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-display italic text-[color:var(--hot)] text-xl leading-none shrink-0">
                          {String(si + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-[1.05rem] md:text-[1.15rem] text-ink leading-[1.15] tracking-[-0.01em]">
                          {sub.title}
                        </h3>
                      </div>
                      <ul className="mt-3 space-y-1.5">
                        {sub.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className="text-[0.86rem] md:text-[0.9rem] leading-[1.45] text-[color:var(--text-body)] pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[color:var(--accent-2)]"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            </Container>
          </section>
        );
      })}

      {/* Prev / Next commitment nav */}
      <section className="border-t-[3px] border-ink bg-ink text-paper">
        <Container className="py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
            <Link
              href={`/commitments/${prev.slug}`}
              className="group flex items-start gap-4 md:border-r md:border-paper/20 md:pr-10"
            >
              <ArrowLeft
                size={22}
                className="text-[color:var(--hot)] mt-2 shrink-0 transition-transform group-hover:-translate-x-1"
              />
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-paper/60">
                  Previous
                </p>
                <p className="mt-2 font-display text-xl md:text-2xl leading-tight text-paper">
                  {prev.tagline}
                </p>
              </div>
            </Link>
            <Link
              href={`/commitments/${next.slug}`}
              className="group flex items-start justify-between gap-4 md:pl-10 md:text-right"
            >
              <div className="md:order-1 md:ml-auto">
                <p className="text-[11px] uppercase tracking-[0.22em] text-paper/60">
                  Next
                </p>
                <p className="mt-2 font-display text-xl md:text-2xl leading-tight text-paper">
                  {next.tagline}
                </p>
              </div>
              <ArrowUpRight
                size={22}
                className="text-[color:var(--hot)] mt-2 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:order-2"
              />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
