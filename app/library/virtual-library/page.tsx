import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { ArtifactCard } from "@/components/artifact-card";
import { EvidenceStrip } from "@/components/evidence-strip";
import { getArtifactsBySection } from "@/content/artifacts";

export const metadata = { title: "Virtual Library & Tech Integration" };

export default function VirtualLibrary() {
  const artifacts = getArtifactsBySection("library/virtual-library");
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Library · Virtual Library"
        title="The Virtual Library"
        lede="A year of Grade 6 Virtual School, two Teacher-Librarian AQs, and what it taught me about the room I came back to."
      />
      <Container className="pb-20">
        <Prose>
          <p>
            The pandemic didn't find me in a library. It found me at Valley
            Park Middle School, where I'd been teaching since 2018. When TDSB
            stood up its Virtual School in fall 2020, I took a Grade 6 class
            and taught the full year through a screen.
          </p>
          <p>
            That's also where my Teacher-Librarian path got serious. I'd
            already completed Teacher-Librarian Part 1 at York University in
            2019, and I finished Part 2 in 2020 — during the same stretch I
            was running a virtual classroom from my kitchen table. The two
            things informed each other in ways I couldn't have planned. I was
            teaching kids I'd never met in a room that didn't exist while I
            was studying how to run a library that depended on the room as its
            first asset.
          </p>
          <p>
            By 2021 I was out of the classroom and into the Teacher-Librarian
            role — first at West Glen, then at Rivercrest, where I've been
            since. The virtual library artifacts in this section were built
            in that window: the transition from Grade 6 Virtual School to a
            full Teacher-Librarian practice, with digital instruction as the
            common thread.
          </p>
        </Prose>

        {/* Reflection block */}
        <section className="mt-16 rounded-sm bg-highlight/70 p-8 md:p-12 border border-rule">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Reflection
          </p>
          <h2 className="mt-3 font-display text-2xl md:text-3xl text-ink">
            What a year of virtual school taught me about libraries
          </h2>
          <div className="mt-5 space-y-5 text-ink/90 leading-relaxed">
            <p>
              Teaching Grade 6 entirely through a screen is the most honest
              test of reading culture I've ever been inside. You can't fall
              back on the displays, the comfy chair in the corner, or the
              accident of a kid walking past a shelf and picking something up.
              Every book recommendation has to be deliberate. Every read-aloud
              has to earn its minute. Every connection between a kid and a book
              has to happen without the room doing any of the work for you.
            </p>
            <p>
              When I came back into a physical library in 2021, I came back
              with a different definition of the job. A library isn't a room.
              It's a relationship a school has with reading, and the room is
              the most obvious place that relationship lives — but not the only
              one. The virtual year showed me where else it has to live: the
              request form, the read-aloud playlist, the kid-sized
              recommendation delivered by email, the book that shows up in a
              backpack the next morning because a librarian matched it right.
            </p>
            <p>That's the practice I run at Rivercrest now.</p>
          </div>
        </section>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {artifacts.map((a) => (
            <ArtifactCard key={a.id} {...a} />
          ))}
        </div>
        <EvidenceStrip
          items={[
            "Full year of Grade 6 Virtual School (2020–2021)",
            "Teacher-Librarian Part 1 (2019) and Part 2 (2020) — York University",
            "Digital-first read-aloud and recommendation practice",
            "Transition from virtual to physical library informed by both",
          ]}
        />
      </Container>
    </main>
  );
}
