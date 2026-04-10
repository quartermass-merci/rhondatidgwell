import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { Tbd } from "@/components/tbd";

export const metadata = {
  title: "Credentials",
  description:
    "OCT member in good standing, plus the AQs and PD that shaped Rhonda Tidgwell's teaching practice.",
};

const DEGREES = [
  {
    label: "Bachelor of Education, Primary/Junior",
    detail: "2000",
    tbd: true,
  },
  { label: "OCT Member in Good Standing", detail: "#460584" },
];

const AQS = [
  { label: "Teacher-Librarian, Part 2", detail: "2020" },
  { label: "Teacher-Librarian, Part 1", detail: "2019" },
  {
    label: "English as a Second Language, Part 1",
    detail:
      "2006 · Brock University (included a teaching practicum in Guiyang, China)",
  },
  { label: "Special Education, Part 1", detail: "2000 · Acadia University" },
];

const TRAINING = [
  "Horizon Circulation Teacher-Librarian Training",
  "CASI (Grades 4–6, Part 1, Data Collection — presented findings to staff)",
  "TRIBES",
  "CPI (Crisis Prevention and Intervention)",
  "First Steps Writing",
  "EQAO Scorer and Administration (presented to staff)",
  "Culturally Responsive & Relevant Pedagogy PLCs",
  "Model Schools for Inner Cities",
  "Gender-Based Violence Prevention and Intervention",
  "World Music Drumming Training, Ghana",
  "Smartboard Interactive Technology",
];

export default function Credentials() {
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="About · Credentials"
        title="The paperwork."
        lede="OCT member in good standing, plus the AQs and PD that actually shaped the practice."
        size="lg"
      />
      <Container className="pb-24 space-y-16 pt-16">
        <Block title="Degrees & Certification">
          <ul className="space-y-3">
            {DEGREES.map((d) => (
              <li key={d.label} className="flex flex-wrap items-baseline gap-x-3">
                <span className="font-medium text-ink">{d.label}</span>
                <span className="text-muted">— {d.detail}</span>
                {d.tbd && (
                  <span>
                    · <Tbd>institution TBD</Tbd>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Additional Qualifications (AQs)">
          <ul className="space-y-3">
            {AQS.map((a) => (
              <li key={a.label} className="flex flex-wrap items-baseline gap-x-3">
                <span className="font-medium text-ink">{a.label}</span>
                <span className="text-muted">— {a.detail}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Training that's shaped the work">
          <ul className="space-y-2 columns-1 md:columns-2 gap-10">
            {TRAINING.map((t) => (
              <li key={t} className="text-ink/80 break-inside-avoid">
                {t}
              </li>
            ))}
          </ul>
        </Block>

        <div className="pt-4 border-t border-rule">
          <p className="text-ink/80">
            <span className="font-medium">Download:</span> Full CV (PDF) —{" "}
            <Tbd>TBD</Tbd>
          </p>
        </div>
      </Container>
    </main>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted pb-3 mb-5 border-b border-rule">
        {title}
      </h2>
      {children}
    </section>
  );
}
