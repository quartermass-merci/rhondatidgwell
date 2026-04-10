import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { ArtifactCard } from "@/components/artifact-card";
import { PullQuote } from "@/components/pull-quote";
import { getArtifactsBySection } from "@/content/artifacts";

export const metadata = { title: "Student-Led Conferences" };

export default function Conferences() {
  const [artifact] = getArtifactsBySection("assessment/conferences");
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Assessment · Student-Led Conferences"
        title="Student-Led Conferences"
        lede="When kids narrate their own learning, parents listen differently."
      />
      <Container className="pb-20">
        <Prose>
          <p>
            Traditional parent-teacher conferences put the teacher in the
            middle of a conversation about a student who isn't in the room.
            I've spent years running them the other way. Students prepare a
            portfolio, walk their parents through it, name what they're proud
            of, and name what they're working on. The teacher is in the room
            as a resource, not the main character.
          </p>
          <p>
            The deck below is the model I've built and refined, plus the
            student preparation work that makes the conference worth the
            parents' time.
          </p>
        </Prose>
        <div className="mt-12 max-w-xl">
          {artifact && <ArtifactCard {...artifact} />}
        </div>
        <PullQuote
          className="mt-12"
          quote="Every student deserves a 'Ms. Tidgwell year.'"
          attribution="Student nomination, World Teachers' Day Award"
        />
      </Container>
    </main>
  );
}
