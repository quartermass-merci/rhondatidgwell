import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { ArtifactCard } from "@/components/artifact-card";
import { PullQuote } from "@/components/pull-quote";
import { EvidenceStrip } from "@/components/evidence-strip";
import { getArtifactsBySection } from "@/content/artifacts";

export const metadata = { title: "Teaching & Inquiry" };

export default function TeachingInquiry() {
  const [artifact] = getArtifactsBySection("classroom/teaching-inquiry");
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Classroom · Teaching & Inquiry"
        title="Teaching & Inquiry"
        lede="Inquiry over answers. Success criteria kids help write."
      />
      <Container className="pb-16">
        <Prose>
          <p>
            My classroom runs on the principle that students learn more when
            they're doing the asking. Lessons start with a question students can
            actually care about, then build scaffolding so every kid —
            kinesthetic, visual, ELL, the one with an IEP, the one who finished
            the reading last week — has a way into the work.
          </p>
          <p>
            Success criteria get co-created so kids know what "good" looks like
            before they try to make it. Feedback is descriptive and
            in-the-moment, not marks in a margin three weeks later. The gradual
            release of responsibility is the scaffolding pattern I come back to
            every time.
          </p>
        </Prose>

        <div className="mt-12 max-w-xl">
          {artifact && <ArtifactCard {...artifact} />}
        </div>

        <PullQuote
          className="mt-12"
          quote="She emphasized community spirit and showed the children they can make a difference in this world."
          attribution="Parent appreciation letter"
        />

        <EvidenceStrip
          items={[
            "Co-created success criteria and visible learning goals",
            "Inquiry units where students generate the questions",
            "Tiered questioning for higher-order thinking",
            "Multi-modal assignments so every learner has an entry point",
          ]}
        />
      </Container>
    </main>
  );
}
