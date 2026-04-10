import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { EvidenceStrip } from "@/components/evidence-strip";

export const metadata = { title: "Mentorship & Staff PD" };

export default function Mentorship() {
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Leadership · Mentorship & Staff PD"
        title="Mentorship & Staff PD"
        lede="The best way to learn something is to teach it to another teacher."
      />
      <Container className="pb-20">
        <Prose>
          <p>
            I've been an Associate Teacher for teaching candidates from
            OISE/University of Toronto and a mentor to beginning teachers on
            my staff. I've delivered staff workshops on IEP writing, Special
            Ed, CASI data collection, and EQAO administration after taking
            the board-level course.
          </p>
          <p>
            More recently, the staff learning I've led has moved into the
            library's wheelhouse: Culturally Relevant Texts, Indigenous
            education, the TDSB Virtual Library, 3-Part Math Tasks, EQAO
            delivery, and IEP development. The common thread is that good PD
            is specific — it gives a colleague something they can use in the
            room on Monday morning.
          </p>
        </Prose>
        <EvidenceStrip
          items={[
            "Associate Teacher — OISE/University of Toronto",
            "Mentor to beginning teachers",
            "Staff PD: Culturally Relevant Texts, Indigenous education",
            "Staff PD: TDSB Virtual Library, 3-Part Math Tasks",
            "Staff PD: IEP development, EQAO delivery, CASI data collection",
          ]}
        />
      </Container>
    </main>
  );
}
