import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { ArtifactCard } from "@/components/artifact-card";
import { getArtifactsBySection } from "@/content/artifacts";

export const metadata = { title: "Growing Success in Practice" };

export default function GrowingSuccess() {
  const artifacts = getArtifactsBySection("assessment/growing-success");
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Assessment · Growing Success"
        title="Growing Success in Practice"
        lede="The policy, marked up, and the twelve things I actually do with it."
      />
      <Container className="pb-20">
        <Prose>
          <p>
            Growing Success is the Ontario assessment and reporting policy
            every TDSB teacher has to work inside. Most of us have read it.
            Fewer of us have figured out what it actually asks us to change
            about our practice.
          </p>
          <p>
            The deck below is my twelve-takeaway synthesis — the parts of the
            policy that matter most for day-to-day assessment, translated into
            things a teacher can do on Monday morning. The annotated policy
            document and the Levels/Niveaux deck are how I keep myself
            calibrated against the achievement chart with real exemplars
            instead of gut feel.
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
