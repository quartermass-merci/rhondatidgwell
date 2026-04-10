import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { ArtifactCard } from "@/components/artifact-card";
import { EvidenceStrip } from "@/components/evidence-strip";
import { getArtifactsBySection } from "@/content/artifacts";

export const metadata = { title: "Reading Culture" };

export default function ReadingCulture() {
  const artifacts = getArtifactsBySection("library/reading-culture");
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Library · Reading Culture"
        title="Reading Culture"
        lede="Forest of Reading, community events, and the quiet work of matching a kid to a book."
      />
      <Container className="pb-20">
        <Prose>
          <p>
            Reading culture doesn't come from a poster. It comes from a
            librarian who knows both the kid and the book well enough to trust
            the match, even when the kid pushes back.
          </p>
          <p>
            Forest of Reading was the first full-scale reading initiative I
            pitched at Rivercrest. The pitch deck below is the argument I made
            for why it was worth the time and the budget. The community reading
            event was where that year's work showed up in public.
          </p>
        </Prose>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {artifacts.map((a) => (
            <ArtifactCard key={a.id} {...a} />
          ))}
        </div>
        <EvidenceStrip
          items={[
            "Forest of Reading as an annual school-wide initiative",
            "Author visits and community reading events",
            "Collection matched to student identities and interests",
            "Quiet, personalized recommendations — the librarian's real art",
          ]}
        />
      </Container>
    </main>
  );
}
