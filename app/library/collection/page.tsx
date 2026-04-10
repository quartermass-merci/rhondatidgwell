import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { ArtifactCard } from "@/components/artifact-card";
import { getArtifactsBySection } from "@/content/artifacts";

export const metadata = { title: "Collection & Curation" };

export default function Collection() {
  const artifacts = getArtifactsBySection("library/collection");
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Library · Collection & Curation"
        title="Collection & Curation"
        lede="Every acquisition is a statement about who matters. Every weed is one too."
      />
      <Container className="pb-20">
        <Prose>
          <p>
            I run the Rivercrest collection against a simple framework. Does
            this book let a student see themselves, or open a window into
            someone else? And is it still earning its shelf space?
          </p>
          <p>
            Those questions sound simple until you apply them to a collection
            that's been sitting on shelves for a decade. "Making Room for the
            New" was my first real weeding project at Rivercrest — an honest
            audit of what still belonged and what needed to be cleared to make
            room for what should come next.
          </p>
          <p>
            The diverse collection work is ongoing. It isn't a shelf or a
            display. It's how I think about every new order I place.
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
