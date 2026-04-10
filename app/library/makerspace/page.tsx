import Image from "next/image";
import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { EvidenceStrip } from "@/components/evidence-strip";

export const metadata = { title: "Makerspace & Maker Learning" };

export default function Makerspace() {
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Library · Makerspace"
        title="Makerspace"
        lede="The rule is: mistakes are the curriculum."
      />
      <Container className="pb-20">
        <Prose>
          <p>
            The Rivercrest makerspace runs on the idea that kids learn best
            when they're allowed to get it wrong in public and try again. The
            build-fail-rebuild loop is the lesson. Cross-curricular by design,
            and loud in the best way.
          </p>
          <p>
            What I've watched happen in there: quiet students become teachers,
            and kids who "don't like school" stay forty minutes past the bell
            because they're almost done.
          </p>
        </Prose>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {["makerspace-1.png", "makerspace-2.png"].map((src, i) => (
            <div
              key={src}
              className="relative aspect-[4/3] rounded-sm overflow-hidden border border-rule bg-highlight/40"
            >
              <Image
                src={`/artifacts/${src}`}
                alt={`Rhonda's makerspace at Rivercrest Junior School, image ${i + 1}`}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <EvidenceStrip
          items={[
            "Low-barrier entry for students across ability levels",
            "Projects connected to classroom units (cross-curricular by design)",
            "Student-led troubleshooting as the default teaching mode",
            "Inclusive tool access for students with IEPs",
          ]}
        />
      </Container>
    </main>
  );
}
