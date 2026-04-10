import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
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
        lede="I spent nineteen years teaching Grades 4 through 8 across four TDSB middle schools. During that time, my classroom was inquiry-driven, scaffolded, and built around the kid in front of me."
        size="lg"
      />
      <Container className="pb-24 pt-8">
        <div className="grid gap-5 md:grid-cols-3">
          <SectionCard
            href="/classroom/teaching-inquiry"
            title="Teaching & Inquiry"
            blurb="How I run a room with co-created success criteria and enough scaffolding for every kid to find a way in."
          />
          <SectionCard
            href="/classroom/lesson-planning"
            title="Lesson Planning"
            blurb="Long-range plans and unit plans."
          />
          <SectionCard
            href="/classroom/differentiation"
            title="Differentiation & Special Ed"
            blurb="MART work, IEP development, and the accommodations kids actually use."
          />
        </div>
      </Container>
    </main>
  );
}
