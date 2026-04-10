import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { SectionCard } from "@/components/section-card";
import { CompetencyFilter } from "@/components/competency-filter";

export const metadata = {
  title: "Library & Learning Commons",
  description:
    "Teacher-Librarian at Rivercrest Junior School — collection, makerspace, digital citizenship, reading culture, and the virtual library.",
};

export default function Library() {
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Library & Learning Commons"
        title="The library is the most democratic room in the school."
        lede="Teacher-Librarian and ESL Teacher at Rivercrest Junior School since 2021."
        size="lg"
      />
      <Container className="pb-16">
        <Prose>
          <p>
            The job is simple to describe and impossible to finish: build a
            reading culture, curate a collection that reflects every student,
            teach K–5 STEAM and coding, run digital citizenship and research
            instruction, and make the library the place where curiosity is
            safest.
          </p>
          <p>
            I came into the role with two Teacher-Librarian AQs earned during
            the pandemic and a year of Grade 6 Virtual School in the rearview
            mirror. That experience — teaching a full class entirely through a
            screen — is how I learned what a library actually is when you strip
            the room away. Everything I've built at Rivercrest since 2021 has
            been in conversation with what that year made plain.
          </p>
        </Prose>
      </Container>
      <Container className="pb-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <SectionCard
            href="/library/collection"
            label="Card 01"
            title="Collection & Curation"
            blurb="A collection is a living document about who matters. Here's how I've rebuilt Rivercrest's."
          />
          <SectionCard
            href="/library/makerspace"
            label="Card 02"
            title="Makerspace & Maker Learning"
            blurb="Where mistakes are the curriculum and the rule is iterate until it works."
          />
          <SectionCard
            href="/library/digital-citizenship"
            label="Card 03"
            title="Digital Citizenship & Research"
            blurb="Not a list of things not to do. A media literacy practice for junior students."
          />
          <SectionCard
            href="/library/reading-culture"
            label="Card 04"
            title="Reading Culture"
            blurb="Forest of Reading and community events, plus the quiet work of matching a kid to the book that will change them."
          />
          <SectionCard
            href="/library/virtual-library"
            label="Card 05"
            title="Virtual Library & Tech Integration"
            blurb="A year of Grade 6 Virtual School, two Teacher-Librarian AQs, and the lesson that shaped how I came back to the physical room."
          />
        </div>
      </Container>
      <Container className="pb-24 pt-8 border-t border-rule">
        <CompetencyFilter />
      </Container>
    </main>
  );
}
