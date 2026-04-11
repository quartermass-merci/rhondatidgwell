export type NavItem = { href: string; label: string };
export type NavGroup = { label: string; href: string; items: NavItem[] };

// Top menu — main sections only. Each is a dropdown that reveals the
// detailed sub-pages on hover/focus. The footer mirrors the same tree.
export const NAV_GROUPS: NavGroup[] = [
  {
    label: "About",
    href: "/about",
    items: [
      { href: "/about", label: "Philosophy" },
      { href: "/about/journey", label: "Journey" },
      { href: "/about/credentials", label: "Credentials" },
    ],
  },
  {
    label: "Commitment to Students",
    href: "/#commitments",
    items: [
      {
        href: "/commitments/students-and-student-learning",
        label: "Commitment to Students and Student Learning",
      },
      {
        href: "/commitments/professional-knowledge",
        label: "Professional Knowledge",
      },
      {
        href: "/commitments/teaching-practice",
        label: "Teaching Practice",
      },
      {
        href: "/commitments/leadership-and-community",
        label: "Leadership and Community",
      },
      {
        href: "/commitments/ongoing-professional-learning",
        label: "Ongoing Professional Learning",
      },
    ],
  },
  {
    label: "Four Cornerstones",
    href: "/#cornerstones",
    items: [
      { href: "/classroom", label: "Classroom Practice" },
      { href: "/library", label: "Library and Learning Commons" },
      { href: "/assessment", label: "Assessment and Feedback" },
      { href: "/leadership", label: "Leadership and Community" },
    ],
  },
];
