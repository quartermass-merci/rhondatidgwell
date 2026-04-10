/**
 * Single source of truth for every artifact referenced in the portfolio.
 * Used by <ArtifactCard /> on section pages AND by <CompetencyFilter />
 * for the site-wide competency filter.
 *
 * Filenames here refer to the served copy in /public/artifacts/
 * (see /public/artifacts/manifest.json for the mapping to originals).
 */

import type { ArtifactCardProps } from "@/components/artifact-card";

export type Artifact = Omit<ArtifactCardProps, "className"> & {
  id: string;
  section:
    | "classroom/teaching-inquiry"
    | "classroom/lesson-planning"
    | "classroom/differentiation"
    | "library/collection"
    | "library/makerspace"
    | "library/digital-citizenship"
    | "library/reading-culture"
    | "library/virtual-library"
    | "assessment/growing-success"
    | "assessment/conferences"
    | "assessment/feedback"
    | "leadership/equity";
};

export const ARTIFACTS: readonly Artifact[] = [
  // ─── Classroom ───────────────────────────────────────────────────────
  {
    id: "inquiry-lesson-plan-2019",
    section: "classroom/teaching-inquiry",
    label: "LESSON PLAN · 2019",
    title: "Inquiry Lesson Plan",
    blurb:
      "An inquiry-driven unit built around a question students chose themselves. Includes lesson sequences and differentiation notes with built-in assessment checkpoints.",
    fileUrl: "/artifacts/inquiry-lesson-plan-2019.pdf",
    fileType: "pdf",
    year: 2019,
    competencyTags: [2, 4, 6, 9],
    ctaLabel: "View the lesson plan →",
  },
  {
    id: "recreational-reading-long-range-plan",
    section: "classroom/lesson-planning",
    label: "LONG-RANGE PLAN · 2019",
    title: "Recreational Reading Long-Range Plan",
    blurb:
      "A full-year plan for building independent reading culture, from choice reading through Forest of Reading. This was the document that pivoted me toward teacher-librarianship.",
    fileUrl: "/artifacts/recreational-reading-long-range-plan.pdf",
    fileType: "pdf",
    year: 2019,
    competencyTags: [2, 5, 13],
    ctaLabel: "View the plan →",
  },
  {
    id: "inquiry-lesson-plan-2019-cross",
    section: "classroom/lesson-planning",
    label: "INQUIRY UNIT · 2019",
    title: "Inquiry Lesson Plan",
    blurb:
      "Cross-referenced here because a lesson plan and a long-range plan are the same job at different scales.",
    fileUrl: "/artifacts/inquiry-lesson-plan-2019.pdf",
    fileType: "pdf",
    year: 2019,
    competencyTags: [2, 4, 6],
    ctaLabel: "View the unit →",
  },

  // ─── Library ─────────────────────────────────────────────────────────
  {
    id: "making-room-for-the-new",
    section: "library/collection",
    label: "WEEDING · 2019",
    title: "Making Room for the New",
    blurb:
      "The audit that started my approach to collection development. An honest look at what belonged, with a plan for what to add in its place.",
    fileUrl: "/artifacts/making-room-for-the-new.pdf",
    fileType: "pdf",
    year: 2019,
    competencyTags: [5, 12, 15],
  },
  {
    id: "diverse-collection-selections",
    section: "library/collection",
    label: "EQUITY · 2019",
    title: "Selections for a Diverse Collection",
    blurb:
      "The framework I use to make sure every student has a book that sees them, and a book that shows them someone else.",
    fileUrl: "/artifacts/diverse-collection-selections.png",
    fileType: "png",
    year: 2019,
    competencyTags: [3, 5, 15],
  },
  {
    id: "stakeholder-survey",
    section: "library/collection",
    label: "DATA · 2019",
    title: "Stakeholder Survey",
    blurb:
      "The library belongs to the school community. This is how I ask them what they want from it.",
    fileUrl: "/artifacts/stakeholder-survey.png",
    fileType: "png",
    year: 2019,
    competencyTags: [10, 14, 15],
  },
  {
    id: "digital-citizenship",
    section: "library/digital-citizenship",
    label: "CURRICULUM",
    title: "Digital Citizenship",
    blurb: "The junior-level digital citizenship unit I teach at Rivercrest.",
    fileUrl: "/artifacts/digital-citizenship.pdf",
    fileType: "pdf",
    competencyTags: [5, 13],
  },
  {
    id: "digital-citizenship-media-balance",
    section: "library/digital-citizenship",
    label: "MEDIA LITERACY",
    title: "Digital Citizenship & Media Balance",
    blurb:
      "The extended version with media balance and the habits that support it.",
    fileUrl: "/artifacts/digital-citizenship-media-balance.pdf",
    fileType: "pdf",
    competencyTags: [5, 13],
  },
  {
    id: "evaluating-web-resources-checklist",
    section: "library/digital-citizenship",
    label: "TOOL",
    title: "Evaluating Web Resources Checklist",
    blurb:
      "A practical checklist students keep in their research folder. I've refined it over years of watching kids copy-paste their way into trouble.",
    fileUrl: "/artifacts/evaluating-web-resources-checklist.pdf",
    fileType: "pdf",
    competencyTags: [6, 13],
  },
  {
    id: "forest-of-reading-pitch",
    section: "library/reading-culture",
    label: "PITCH · 2019",
    title: "Forest of Reading Program Pitch",
    blurb:
      "The case for bringing Ontario's biggest reading program into the Rivercrest library.",
    fileUrl: "/artifacts/forest-of-reading-pitch.pdf",
    fileType: "pdf",
    year: 2019,
    competencyTags: [14, 15],
  },
  {
    id: "community-reading-event",
    section: "library/reading-culture",
    label: "EVENT",
    title: "Community Reading Event",
    blurb:
      "The culminating event that brought students, parents, and the reading program together.",
    fileUrl: "/artifacts/community-reading-event.pdf",
    fileType: "pdf",
    competencyTags: [14, 15],
  },
  {
    id: "reading-display-digital-magazine",
    section: "library/reading-culture",
    label: "DESIGN",
    title: "Reading Display — Digital Magazine",
    blurb:
      "Library displays as editorial content. A digital-magazine format for promoting reading selections.",
    fileUrl: "/artifacts/reading-display-digital-magazine.pdf",
    fileType: "pdf",
    competencyTags: [13, 15],
  },
  {
    id: "virtual-library-1-2-3",
    section: "library/virtual-library",
    label: "VIRTUAL LEARNING · 2020–2021",
    title: "Virtual Library 1-2-3",
    blurb:
      "The three-move structure for a library that lives on a screen. Built during the Grade 6 Virtual School year at Valley Park and refined into the practice I brought to Rivercrest.",
    fileUrl: "/artifacts/virtual-library-1-2-3.png",
    fileType: "png",
    year: 2021,
    competencyTags: [13, 14],
  },
  {
    id: "library-action-plan",
    section: "library/virtual-library",
    label: "STRATEGY",
    title: "Library Action Plan",
    blurb:
      "The annual action plan that governs what I'm trying to build at Rivercrest and how I'll know it's working.",
    fileUrl: "/artifacts/library-action-plan.pdf",
    fileType: "pdf",
    competencyTags: [14, 15],
  },

  // ─── Assessment ──────────────────────────────────────────────────────
  {
    id: "growing-success-12-takeaways",
    section: "assessment/growing-success",
    label: "SYNTHESIS",
    title: "Growing Success in 12 Takeaways",
    blurb:
      "My working deck translating the Ontario assessment policy into daily practice.",
    fileUrl: "/artifacts/growing-success-12-takeaways.pptx",
    fileType: "pptx",
    competencyTags: [5, 6, 11],
  },
  {
    id: "annotated-abridged-growing-success",
    section: "assessment/growing-success",
    label: "ANNOTATED POLICY",
    title: "Annotated Abridged Growing Success",
    blurb: "The policy document with my working notes in the margin.",
    fileUrl: "/artifacts/annotated-abridged-growing-success.pdf",
    fileType: "pdf",
    competencyTags: [5, 6],
  },
  {
    id: "levels-niveaux",
    section: "assessment/growing-success",
    label: "LEVELLING",
    title: "Levels / Niveaux",
    blurb:
      "How I level student work against the achievement chart with real exemplars.",
    fileUrl: "/artifacts/levels-niveaux.pptx",
    fileType: "pptx",
    competencyTags: [6, 11],
  },
  {
    id: "student-led-conferences",
    section: "assessment/conferences",
    label: "MODEL · ORIGINAL",
    title: "Student-Led Conferences",
    blurb:
      "The full model I've built and refined — ready for a teacher to adapt in an afternoon.",
    fileUrl: "/artifacts/student-led-conferences.pptx",
    fileType: "pptx",
    competencyTags: [10, 11],
  },
  {
    id: "pr-2016-subject-comments",
    section: "assessment/feedback",
    label: "REPORT CARD COMMENTS · 2016",
    title: "Subject Comment Bank",
    blurb:
      "A running bank of report card comments I've refined over a decade of reporting periods.",
    fileUrl: "/artifacts/pr-2016-subject-comments.docx",
    fileType: "docx",
    year: 2016,
    competencyTags: [6, 10, 11],
  },
];

export const getArtifactsBySection = (section: Artifact["section"]) =>
  ARTIFACTS.filter((a) => a.section === section);

export const getAllCompetenciesUsed = (): number[] => {
  const set = new Set<number>();
  ARTIFACTS.forEach((a) => a.competencyTags?.forEach((t) => set.add(t)));
  return Array.from(set).sort((a, b) => a - b);
};

export const getArtifactsByCompetency = (id: number) =>
  ARTIFACTS.filter((a) => a.competencyTags?.includes(id));
