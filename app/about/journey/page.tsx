import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { Timeline } from "@/components/timeline";
import { Tbd } from "@/components/tbd";

export const metadata = {
  title: "Timeline",
  description:
    "A teaching life in the TDSB — from grade 6 classrooms to the Rivercrest library.",
};

export default function Journey() {
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="About"
        title="Career Timeline."
        lede="I've spent twenty-four years teaching with the TDSB across five schools. I've spent the majority of that time in a grade 6 classroom."
        size="lg"
      />
      <Container className="pb-24">
        <Timeline
          nodes={[
            {
              years: "2002–2009",
              heading: "Pierre Laporte Middle School",
              body: "Junior Core and Junior/Intermediate Special Education. Grade 6 Core (Gifted), ESL, Visual Arts, Library, MID, Core French. The early years, where I learned the craft by teaching it, failing at parts of it, and watching better teachers until I understood why they worked.",
            },
            {
              years: "2009–2018",
              heading: "Westwood Middle School",
              body: "Nine years. Started as a Junior/Intermediate Special Education teacher (Grade 6 Gifted, Resource, Visual Arts MID). Became the Method and Resource Teacher (MART) — co-chairing School Support Team and IPRC meetings, developing IEPs, running workshops for staff on IEP writing and Special Ed. Finished the stretch teaching Grade 6 Core with HSP (Home School Program) integration. Co-facilitated the GSA. Mentored teaching candidates from OISE/UT.",
            },
            {
              years: "2018–2021",
              heading: "Valley Park Middle School",
              body: "Junior Core Teacher with Special Education ASD and HSP Integration. During the pandemic, pivoted to Virtual School Teacher for Grade 6 — 2020 to 2021 — while completing my Teacher-Librarian qualifications (Part 1 in 2019, Part 2 in 2020). Teaching a full Grade 6 from a kitchen table while training for the library role changed how I think about both.",
            },
            {
              years: "2021–2022",
              heading: "West Glen Junior School",
              body: "Teacher-Librarian, K–5. Library literacy, STEAM and coding instruction. My first full T-L posting.",
            },
            {
              years: "2021–present",
              heading: "Rivercrest Junior School",
              body: "Teacher-Librarian and Multi-Language Learning (ESL) Teacher. K–5 library literacy, STEAM and coding, small-group differentiated ESL instruction, and Special Education resource support. Where the current work lives.",
            },
          ]}
        />

        <div className="mt-6 pl-10 md:pl-12">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
            2025–2026 · Current year
          </p>
          <p className="mt-3 text-ink/80 max-w-2xl">
            Signature projects this school year, new PD, new roles or
            committees: <Tbd>Rhonda to fill</Tbd>
          </p>
        </div>
      </Container>
    </main>
  );
}
