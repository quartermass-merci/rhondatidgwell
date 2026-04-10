/**
 * Ontario College of Teachers — 16-competency map.
 * Used by <CompetencyFilter /> and tagged on every <ArtifactCard />.
 * Numbering is preserved so artifact metadata can reference by number.
 */
export type Competency = {
  id: number;
  label: string;
  short: string;
};

export const COMPETENCIES: readonly Competency[] = [
  { id: 1, label: "Commitment to students and student learning", short: "Commitment to students" },
  { id: 2, label: "Professional knowledge", short: "Professional knowledge" },
  { id: 3, label: "Professional practice", short: "Professional practice" },
  { id: 4, label: "Leadership in learning communities", short: "Leadership in learning communities" },
  { id: 5, label: "Ongoing professional learning", short: "Ongoing professional learning" },
  { id: 6, label: "Curriculum knowledge and planning", short: "Curriculum & planning" },
  { id: 7, label: "Differentiated instruction", short: "Differentiation" },
  { id: 8, label: "Assessment for, as, and of learning", short: "Assessment" },
  { id: 9, label: "Classroom management and environment", short: "Classroom environment" },
  { id: 10, label: "Equity, diversity, and inclusion", short: "Equity & inclusion" },
  { id: 11, label: "Safe and caring school communities", short: "Safe & caring" },
  { id: 12, label: "Technology and digital learning", short: "Digital learning" },
  { id: 13, label: "Literacy and numeracy", short: "Literacy & numeracy" },
  { id: 14, label: "Collaboration with colleagues and families", short: "Collaboration" },
  { id: 15, label: "Reflective practice", short: "Reflective practice" },
  { id: 16, label: "Ethical standards of the profession", short: "Ethical standards" },
] as const;

export const getCompetency = (id: number) =>
  COMPETENCIES.find((c) => c.id === id);
