import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { EvidenceStrip } from "@/components/evidence-strip";
import { PullQuote } from "@/components/pull-quote";

export const metadata = { title: "Differentiation & Special Ed" };

export default function Differentiation() {
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Classroom · Differentiation & Special Ed"
        title="Differentiation & Special Ed"
        lede="A decade in the MART role taught me the difference between accommodating a kid and actually reaching them."
      />
      <Container className="pb-20">
        <Prose>
          <p>
            From 2012 to 2019 I was the Method and Resource Teacher (MART) at
            Westwood Middle School, in addition to classroom teaching. That
            meant co-chairing School Support Team and IPRC meetings, developing
            IEPs, consulting OSR documentation, and running workshops for staff
            on IEP writing.
          </p>
          <p>
            The work came down to a single principle. Differentiation isn't
            giving a kid an easier version of the same assignment. It's
            building an assignment that has multiple ways in, and trusting the
            kid to find theirs.
          </p>
        </Prose>
        <EvidenceStrip
          items={[
            "Individual Education Plans written against real student strengths, not a template",
            "Accommodations tied to OSR documentation (psycho-ed, social work, speech-language)",
            "Staff workshops on IEP writing and Special Ed",
            "Co-chaired IPRC and SST meetings",
          ]}
        />
        <PullQuote
          quote="She was my core teacher last year, in Grade 6. The beginning of a new year did not change our relationship. The fact that I was no longer assigned to her class did not diminish her level of support and encouragement."
          attribution="Student, Westwood Middle School (World Teachers' Day nomination)"
        />
      </Container>
    </main>
  );
}
