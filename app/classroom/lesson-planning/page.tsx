import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { ArtifactCard } from "@/components/artifact-card";
import { getArtifactsBySection } from "@/content/artifacts";

export const metadata = { title: "Lesson Planning" };

export default function LessonPlanning() {
  const artifacts = getArtifactsBySection("classroom/lesson-planning");
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Classroom · Lesson Planning"
        title="Lesson Planning"
        lede="Where intention becomes curriculum."
      />
      <Container className="pb-20">
        <Prose>
          <p>
            A long-range plan is a promise to a group of students about the year
            they're about to have. I write mine starting from the Ontario
            Curriculum, with student voice and equity frames layered in.
            Assessment-for-learning checkpoints go in before grades are ever on
            the table.
          </p>
          <p>
            The Recreational Reading Long-Range Plan below is from 2019 —
            written in my last classroom year, and the document that made me
            realize the library was where I wanted to be. It still holds up.
          </p>
        </Prose>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {artifacts.map((a) => (
            <ArtifactCard key={a.id} {...a} />
          ))}
        </div>
      </Container>
    </main>
  );
}
