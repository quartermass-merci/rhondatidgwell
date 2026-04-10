import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { EvidenceStrip } from "@/components/evidence-strip";

export const metadata = { title: "Equity, GSA & Social Justice" };

export default function Equity() {
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Leadership · Equity, GSA & Social Justice"
        title="Equity, GSA & Social Justice"
        lede="Equity isn't a unit. It's how you run the room."
      />
      <Container className="pb-20">
        <Prose>
          <p>
            I've co-facilitated the GSA (Gay-Straight Alliance) at schools
            I've taught in, and sat inside Culturally Responsive and Relevant
            Pedagogy PLCs across multiple schools. The anchor frameworks are
            CRRP and Indigenous Ways of Knowing, with Gholdy Muhammad's{" "}
            <em>Cultivating Genius</em> as a touchstone for how I think about
            identity, skill, intellect, criticality, and joy in the same
            lesson.
          </p>
          <p>
            I co-developed curriculum for Trent University's Youth Gender
            Workshop — "Under Construction: An investigation of the ways that
            ideas about gender are built" — and the work has continued into
            the library through the collection itself.
          </p>
          <p>
            The work I'm proudest of is the quiet kind: a Rivercrest
            collection that reflects every student, and the staff
            conversations that move a colleague one step closer to
            understanding why equity isn't optional.
          </p>
        </Prose>
        <EvidenceStrip
          items={[
            "GSA co-facilitator (multi-year)",
            "Culturally Responsive & Relevant Pedagogy PLC participant",
            "Indigenous education staff learning facilitator",
            "Co-developed Trent Youth Gender Workshop curriculum",
            "Social Justice Conference at OISE",
            "Gender-Based Violence Prevention & Intervention training",
          ]}
        />
      </Container>
    </main>
  );
}
