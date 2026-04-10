/**
 * The Standards of Practice for the Teaching Profession
 * (Ontario College of Teachers).
 *
 * Each standard has a slug, a Roman-numeral mark for editorial display,
 * a short pull-line, the bullet list of obligations, and an optional
 * photo set used by the AutoSlider on the detail page.
 */

export type Standard = {
  slug: string;
  num: string; // Roman numeral, used as editorial mark
  ord: number; // 1..5 for sequencing
  title: string;
  pull: string; // one-line gloss for the bento card
  obligations: string[];
  photoDir: string | null; // public path or null when photos pending
  photoCount: number;
};

export const STANDARDS: Standard[] = [
  {
    slug: "commitment-to-students",
    num: "I",
    ord: 1,
    title: "Commitment to Students and Student Learning",
    pull:
      "Every student. Every period. Treated equitably, taught the whole child.",
    obligations: [
      "Demonstrate commitment to the well-being and development of all students.",
      "Dedicated to teaching and supporting pupil learning and achievement.",
      "Treat all students equitably and with respect.",
      "Provide a learning environment that encourages students to be problem solvers, decision makers, lifelong learners, and contributing members of a changing society.",
    ],
    photoDir: "/images/standards/1",
    photoCount: 10,
  },
  {
    slug: "professional-knowledge",
    num: "II",
    ord: 2,
    title: "Professional Knowledge",
    pull:
      "The curriculum, the legislation, the science of how children actually learn.",
    obligations: [
      "Know their subject matter, the Ontario curriculum, and education-related legislation.",
      "Know a variety of effective teaching and assessment practices.",
      "Know a variety of effective classroom management strategies.",
      "Know how pupils learn and the factors that influence learning and achievement.",
    ],
    photoDir: "/images/standards/2",
    photoCount: 8,
  },
  {
    slug: "teaching-practice",
    num: "III",
    ord: 3,
    title: "Teaching Practice",
    pull:
      "Plan, communicate, assess, refine. The everyday craft of the classroom.",
    obligations: [
      "Use professional knowledge and understanding of students, curriculum, legislation, teaching practices, and classroom management to promote learning and achievement.",
      "Communicate effectively with students, parents, and colleagues.",
      "Conduct ongoing assessment of students' progress, evaluate achievement, and report results regularly.",
      "Adapt and refine teaching practices through continuous learning and reflection, drawing on varied sources and resources.",
      "Use appropriate technology in teaching practices and related professional responsibilities.",
    ],
    photoDir: null,
    photoCount: 0,
  },
  {
    slug: "leadership-and-community",
    num: "IV",
    ord: 4,
    title: "Leadership and Community",
    pull:
      "A school is a learning community, not a building. The library lives at the centre.",
    obligations: [
      "Collaborate with other teachers and school colleagues to create and sustain learning communities in classrooms and schools.",
      "Work with professionals, parents, and community members to enhance pupil learning, achievement, and school programs.",
    ],
    photoDir: null,
    photoCount: 0,
  },
  {
    slug: "ongoing-professional-learning",
    num: "V",
    ord: 5,
    title: "Ongoing Professional Learning",
    pull:
      "Twenty-four years in, still a student of the practice.",
    obligations: [
      "Engage in ongoing professional learning and apply it to improve teaching practices.",
    ],
    photoDir: null,
    photoCount: 0,
  },
];

export function getStandard(slug: string): Standard | undefined {
  return STANDARDS.find((s) => s.slug === slug);
}
