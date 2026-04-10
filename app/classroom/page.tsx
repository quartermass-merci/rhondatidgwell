import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { SectionCard } from "@/components/section-card";

export const metadata = {
  title: "Classroom Practice",
  description:
    "Nineteen years of teaching grades 4 through 8 across four TDSB middle schools.",
};

export default function Classroom() {
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Classroom Practice"
        title="Classroom Practice"
        lede="Nineteen years of teaching grades 4 through 8 across four TDSB middle schools. Inquiry-driven, scaffolded, and built around the kid in front of me."
        size="lg"
      />
      <Container className="pb-16">
        <Prose>
          <p>
            The library is my current role. The classroom is where I learned to do
            everything that now shapes how I run it.
          </p>
          <p>
            The work below is drawn from Pierre Laporte, Westwood, and Valley Park
            Middle Schools between 2002 and 2021 — lesson plans, long-range plans,
            the Special Ed work, ASD and HSP integration, and the quiet craft of
            managing a room of twenty-eight people for three hundred days a year.
          </p>
        </Prose>
      </Container>
      <Container className="pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          <SectionCard
            href="/classroom/teaching-inquiry"
            label="Card 01"
            title="Teaching & Inquiry"
            blurb="How I run a room: co-created success criteria, and enough scaffolding for every kid to climb."
          />
          <SectionCard
            href="/classroom/lesson-planning"
            label="Card 02"
            title="Lesson Planning"
            blurb="Long-range plans and unit plans that shaped my teaching years. Includes the 2019 inquiry unit and the recreational reading plan that pulled me toward the library."
          />
          <SectionCard
            href="/classroom/differentiation"
            label="Card 03"
            title="Differentiation & Special Ed"
            blurb="MART role and IEP development, plus accommodations that actually get used. A decade of working with students who needed the room built differently."
          />
        </div>
      </Container>
    </main>
  );
}
