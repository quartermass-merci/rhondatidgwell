import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";

export const metadata = { title: "Professional Learning" };

const GROUPS = [
  {
    label: "Current anchors (library + literacy)",
    items: [
      "Science of Reading",
      "Universal Design for Learning (UDL)",
      "Culturally Responsive & Relevant Pedagogy (CRRP)",
      "Indigenous education",
      "Balanced Literacy, First Steps Writing, 3+1 Traits",
      "PowerSchool (TDSB SIS)",
      "TDSB Virtual Library",
    ],
  },
  {
    label: "PLCs & School-Based Learning",
    items: [
      "OFIP Pathways (differentiated instruction, co-created success criteria, descriptive feedback)",
      "Culturally Responsive & Relevant Pedagogy PLC",
      "Model Schools for Inner Cities",
      "CLPS (Critical Learning Pathways) team unit planning",
      "NW4 Mathematics Partnership",
    ],
  },
  {
    label: "Workshops & Training",
    items: [
      "Gender-Based Violence Prevention & Intervention",
      "Teaching Students with Anxiety",
      "Math Inquiry (hosted co-teaching lesson for FOS hub)",
      "Global Justice in the Classroom",
      "Guided Reading in Middle School",
      "Family of Schools Equity Workshop",
      "CPI (Crisis Prevention & Intervention)",
      "CASI Grades 4–6, CASI Part 1, CASI Data Collection",
      "Smartboard Interactive Technology",
      "TRIBES",
      "EQAO Administration & Training",
      "Horizon Circulation Teacher-Librarian Training",
    ],
  },
  {
    label: "International",
    items: [
      "ESL teaching in Guiyang, China (ESL Part 1 practicum)",
      "World Music Drumming Training, Ghana",
    ],
  },
  {
    label: "AQs",
    items: [
      "Teacher-Librarian Part 2 — York University, 2020",
      "Teacher-Librarian Part 1 — York University, 2019",
      "ESL Part 1 — Brock University, 2006",
      "Special Education Part 1 — Acadia University, 2000",
    ],
  },
];

export default function ProfessionalLearning() {
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Leadership · Professional Learning"
        title="Professional Learning"
        lede="Twenty-four years of figuring out how to do the job better."
      />
      <Container className="pb-24 space-y-14">
        <Prose>
          <p>
            Teaching is a craft, which means the learning doesn't stop when
            the degree is finished. The list below is the professional
            development that's actually shaped how I teach — recent reading
            and literacy science, the equity frameworks I run the library
            against, the specialist certifications, and the international
            teaching experiences that broke my assumptions in useful ways.
          </p>
        </Prose>

        {GROUPS.map((g) => (
          <section key={g.label}>
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted pb-3 mb-5 border-b border-rule">
              {g.label}
            </h2>
            <ul className="space-y-2">
              {g.items.map((i) => (
                <li key={i} className="text-ink/90">
                  {i}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Container>
    </main>
  );
}
