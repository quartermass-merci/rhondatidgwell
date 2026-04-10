import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { ArtifactCard } from "@/components/artifact-card";
import { getArtifactsBySection } from "@/content/artifacts";

export const metadata = { title: "Descriptive Feedback & Comment Craft" };

export default function Feedback() {
  const [artifact] = getArtifactsBySection("assessment/feedback");
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Assessment · Descriptive Feedback"
        title="Descriptive Feedback & Comment Craft"
        lede="Report card comments aren't an afterthought. They're the last thing a kid reads about themselves that year."
      />
      <Container className="pb-20">
        <Prose>
          <p>
            Every reporting period, parents and students read a comment and
            decide how to feel about school. The comment deserves more care
            than it usually gets.
          </p>
          <p>
            My comment bank is a decade of writing, refining, and stealing
            from better teachers. Every comment is specific to the student and
            paired with a next step the kid can actually take.
          </p>
        </Prose>
        <div className="mt-12 max-w-xl">
          {artifact && <ArtifactCard {...artifact} />}
        </div>
      </Container>
    </main>
  );
}
