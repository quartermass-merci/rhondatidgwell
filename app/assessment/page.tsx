import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { SectionCard } from "@/components/section-card";

export const metadata = {
  title: "Assessment & Feedback",
  description:
    "Growing Success in practice — conferences, levelled exemplars, and a comment bank students can actually use.",
};

export default function Assessment() {
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Assessment & Feedback"
        title="Assessment & Feedback"
        lede="Assessment is a conversation, not a verdict."
        size="lg"
      />
      <Container className="pb-16">
        <Prose>
          <p>
            The way we assess is the way we teach. Mine is rooted in
            Ontario&apos;s Growing Success with clear learning goals,
            co-created success criteria, feedback a kid can actually use, and
            more than one way to show what they know. Grades come last, and
            they surprise no one.
          </p>
        </Prose>
      </Container>
      <Container className="pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          <SectionCard
            href="/assessment/growing-success"
            title="Growing Success in Practice"
            blurb="My working synthesis of Ontario's assessment policy, plus the levelling exemplars I use day-to-day."
          />
          <SectionCard
            href="/assessment/conferences"
            title="Student-Led Conferences"
            blurb="The model I use to put students in the driver's seat at reporting time."
          />
          <SectionCard
            href="/assessment/feedback"
            title="Descriptive Feedback & Comment Craft"
            blurb="Report card comments and descriptive feedback as a craft, not a chore."
          />
        </div>
      </Container>
    </main>
  );
}
