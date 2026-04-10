import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { SectionCard } from "@/components/section-card";

export const metadata = {
  title: "Leadership & Community",
  description:
    "Staff PD, mentorship, equity work, and the committees and PLCs behind twenty-four years in TDSB.",
};

export default function Leadership() {
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Leadership & Community"
        title="Leadership & Community"
        lede="The classroom and the library are the primary rooms. The work doesn't stop at the door."
        size="lg"
      />
      <Container className="pb-16">
        <Prose>
          <p>
            Twenty-four years of TDSB experience hasn't just been about
            teaching my own students. It's been about the staff PD I've
            delivered, the teaching candidates I've mentored, the committees
            I've sat on, and the students I've supported outside the classroom
            through the GSA and social justice programming.
          </p>
        </Prose>
      </Container>
      <Container className="pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          <SectionCard
            href="/leadership/equity"
            label="Card 01"
            title="Equity, GSA & Social Justice"
            blurb="Equity isn't a unit. It's how you run the room."
          />
          <SectionCard
            href="/leadership/mentorship"
            label="Card 02"
            title="Mentorship & Staff PD"
            blurb="The best way to learn something is to teach it to another teacher."
          />
          <SectionCard
            href="/leadership/professional-learning"
            label="Card 03"
            title="Professional Learning"
            blurb="Twenty-four years of figuring out how to do the job better."
          />
        </div>
      </Container>
    </main>
  );
}
