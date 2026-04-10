import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { ArtifactCard } from "@/components/artifact-card";
import { getArtifactsBySection } from "@/content/artifacts";

export const metadata = { title: "Digital Citizenship & Research" };

export default function DigitalCitizenship() {
  const artifacts = getArtifactsBySection("library/digital-citizenship");
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Library · Digital Citizenship"
        title="Digital Citizenship & Research"
        lede="Not a list of things not to do. A literacy practice."
      />
      <Container className="pb-20">
        <Prose>
          <p>
            Digital citizenship at the junior level gets taught badly most of
            the time — as a set of warnings and a worksheet about
            cyberbullying. That's not literacy. That's compliance theatre.
          </p>
          <p>
            My approach is different. I teach source evaluation and media
            balance. Underneath both is the habit of asking who made this and
            why. The Evaluating Web Resources Checklist below is the running
            tool we use across research units from grade 4 up.
          </p>
        </Prose>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {artifacts.map((a) => (
            <ArtifactCard key={a.id} {...a} />
          ))}
        </div>
      </Container>
    </main>
  );
}
