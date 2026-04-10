import { Hero } from "@/components/hero";
import { ArtifactCard } from "@/components/artifact-card";
import { PullQuote } from "@/components/pull-quote";
import { EvidenceStrip } from "@/components/evidence-strip";
import { Timeline } from "@/components/timeline";
import { ProofTile } from "@/components/proof-tile";
import { SectionCard } from "@/components/section-card";
import { CompetencyFilter } from "@/components/competency-filter";
import { ContactForm } from "@/components/contact-form";
import { Tbd } from "@/components/tbd";
import { Container } from "@/components/container";

export const metadata = {
  title: "Dev Playground",
  robots: { index: false, follow: false },
};

export default function Playground() {
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Component Playground"
        title="Every component in the library, in isolation."
        lede="Not shipped publicly. Used during Phase 2 to eyeball motion, spacing, and type."
      />

      <Container className="py-12 space-y-20">
        <Section title="ProofTile — 3-tile grid">
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
        </Section>

        <Section title="SectionCard grid">
          <div className="grid gap-5 md:grid-cols-2">
            <SectionCard
              href="#"
              label="Section 01"
              title="Classroom Practice"
              blurb="Inquiry-driven lesson planning and differentiation across grades 4 through 8."
            />
            <SectionCard
              href="#"
              label="Section 02"
              title="Library & Learning Commons"
              blurb="The Rivercrest library, the makerspace, digital citizenship, and the collection."
            />
          </div>
        </Section>

        <Section title="PullQuote — hero">
          <PullQuote
            style="hero"
            quote="Every student deserves a 'Ms. Tidgwell year.'"
            attribution="Student nomination, World Teachers' Day Award"
          />
        </Section>

        <Section title="PullQuote — inline">
          <PullQuote
            quote="When a flower doesn't bloom, you fix the environment in which it grows. Not the flower."
            attribution="Alexander Den Heijer"
          />
        </Section>

        <Section title="EvidenceStrip">
          <EvidenceStrip
            items={[
              "Co-created success criteria and visible learning goals",
              "Inquiry units where students generate the questions",
              "Tiered questioning for higher-order thinking",
              "Multi-modal assignments so every learner has an entry point",
            ]}
          />
        </Section>

        <Section title="ArtifactCard">
          <div className="grid gap-5 md:grid-cols-2">
            <ArtifactCard
              label="LESSON PLAN · 2019"
              title="Inquiry Lesson Plan"
              blurb="An inquiry-driven unit built around a question students chose themselves."
              fileUrl="/artifacts/inquiry-lesson-plan-2019.pdf"
              fileType="pdf"
              competencyTags={[2, 4, 6, 9]}
              ctaLabel="View the lesson plan →"
            />
            <ArtifactCard
              label="DATA · 2019"
              title="Stakeholder Survey"
              blurb="The library belongs to the school community. This is how I ask them what they want from it."
              fileUrl="/artifacts/stakeholder-survey.png"
              fileType="png"
              competencyTags={[10, 14, 15]}
            />
          </div>
        </Section>

        <Section title="Timeline">
          <Timeline
            nodes={[
              {
                years: "2002–2009",
                heading: "Pierre Laporte Middle School",
                body: "Junior Core and Junior/Intermediate Special Education. The early years, where I learned the craft by teaching it.",
              },
              {
                years: "2021–present",
                heading: "Rivercrest Junior School",
                body: "Teacher-Librarian and ESL Teacher. K–5 library literacy, STEAM and coding, small-group differentiated ESL instruction.",
              },
            ]}
          />
        </Section>

        <Section title="CompetencyFilter (site-wide)">
          <CompetencyFilter />
        </Section>

        <Section title="TBD badge">
          <p className="text-ink/80">
            Full CV (PDF) — <Tbd>TBD</Tbd>
          </p>
        </Section>

        <Section title="ContactForm">
          <ContactForm />
        </Section>
      </Container>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xs uppercase tracking-[0.18em] text-muted font-sans font-medium pb-3 mb-6 border-b border-rule">
        {title}
      </h2>
      {children}
    </section>
  );
}
