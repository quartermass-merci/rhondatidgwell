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
            The way we assess is the way we teach. I run an assessment practice
            rooted in Ontario's Growing Success — clear learning goals,
            co-created success criteria, descriptive feedback that a kid can
            act on, and multiple ways to show what they know. Grades come last,
            and they surprise no one.
          </p>
          <p>
            The work in this section is the practice behind that sentence.
            Three artifacts below: the policy decoded, the conference model,
            and the comment bank that ties it all together.
          </p>
        </Prose>
      </Container>
      <Container className="pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          <SectionCard
            href="/assessment/growing-success"
            label="Card 01"
            title="Growing Success in Practice"
            blurb="My working synthesis of Ontario's assessment policy, plus the levelling exemplars I use day-to-day."
          />
          <SectionCard
            href="/assessment/conferences"
            label="Card 02"
            title="Student-Led Conferences"
            blurb="The model I use to put students in the driver's seat at reporting time."
          />
          <SectionCard
            href="/assessment/feedback"
            label="Card 03"
            title="Descriptive Feedback & Comment Craft"
            blurb="Report card comments and descriptive feedback as a craft, not a chore."
          />
        </div>
      </Container>
    </main>
  );
}
