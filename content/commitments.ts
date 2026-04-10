// Single source of truth for the "My Commitment to Students" section.
// Five commitments, sixteen competencies, four sub-competencies each.
// Copy is taken verbatim from the copy deck Ronnie supplied (Apr 2026).

export type SubCompetency = {
  title: string;
  bullets: string[];
};

export type Competency = {
  ord: number;
  slug: string;
  title: string;
  pull: string;
  subs: SubCompetency[];
  photoDir: string;
  photoCount: number;
};

export type Commitment = {
  ord: number;
  num: string; // Roman
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  competencies: Competency[];
};

export const HOME_INTRO_QUOTE =
  "Ms. Tidgwell emphasized community spirit and showed the children they can make a difference in this world.";

export const COMMITMENTS: Commitment[] = [
  {
    ord: 1,
    num: "I",
    slug: "students-and-student-learning",
    title: "Commitment to Students and Student Learning",
    tagline: "Every child, seen and supported.",
    intro:
      "This is the heart of the work. It's the reason most of us became teachers in the first place — to make sure every child who walks into the room feels known, safe, and challenged in the right way. These four competencies are the ones I return to every single day.",
    competencies: [
      {
        ord: 1,
        slug: "meeting-every-student",
        title: "Meeting Every Student Where They Are",
        pull:
          "Every child arrives with their own story. My job is to plan for the one in front of me, not the one in the teacher's guide.",
        photoDir: "/images/competencies/1",
        photoCount: 10,
        subs: [
          {
            title: "Individualized support and planning",
            bullets: [
              "Build and review IEPs alongside SERTs, families, and students themselves",
              "Adjust daily plans to hit IEP accommodations without siloing the student",
              "Track progress in plain language so families can follow along",
            ],
          },
          {
            title: "Inclusive instructional design",
            bullets: [
              "Use UDL as a default, not an add-on",
              "Offer multiple entry points into every task",
              "Plan for the edges of the room first — the middle takes care of itself",
            ],
          },
          {
            title: "A safe, approachable classroom culture",
            bullets: [
              "Morning check-ins and Community Circle",
              "Restorative, not punitive, when things wobble",
              "Students know exactly what to do when they need a break",
            ],
          },
          {
            title: "Team-based student advocacy",
            bullets: [
              "Close partnership with SERT, CYW, admin, and families",
              "Case conferences that centre the student's voice",
              "Hand-offs that actually carry from one grade to the next",
            ],
          },
        ],
      },
      {
        ord: 2,
        slug: "instruction-that-reaches-every-learner",
        title: "Designing Instruction That Reaches Every Learner",
        pull:
          "No two kids learn the same way, so no two lessons should look the same either.",
        photoDir: "/images/competencies/2",
        photoCount: 8,
        subs: [
          {
            title: "Differentiated, student-voiced instruction",
            bullets: [
              "Tiered tasks by readiness, interest, and learning profile",
              "Student choice baked into assessment, not bolted on",
              "Regular pulse-checks that actually change the next lesson",
            ],
          },
          {
            title: "Scaffolded teaching and gradual release",
            bullets: [
              "I do / we do / you do, with the scaffolds coming down on purpose",
              "Anchor charts co-built with students, not printed from TPT",
              "Visible success criteria at every stage",
            ],
          },
          {
            title: "Multi-modal lesson design",
            bullets: [
              "Text, image, audio, hands-on, and movement in the same week",
              "Assistive tech (Read&Write, Kurzweil, speech-to-text) as a first option",
              "STEAM and coding as vehicles for literacy, not extras",
            ],
          },
          {
            title: "A student-centred classroom environment",
            bullets: [
              "Flexible seating that serves focus, not aesthetics",
              "Learning walls that change with the unit",
              "Student work displayed at kid eye-level",
            ],
          },
        ],
      },
      {
        ord: 3,
        slug: "equitable-inclusive-classroom",
        title: "Building an Equitable, Inclusive Classroom",
        pull:
          "Every student deserves to feel seen, safe, and valued — and to see themselves in the curriculum.",
        photoDir: "/images/competencies/3",
        photoCount: 6,
        subs: [
          {
            title: "Equity leadership inside the school",
            bullets: [
              "Equity committee member and planner",
              "Lead organizer of Black History Month and Islamic Heritage Month assemblies",
              "Anti-oppression as the through-line, not the theme week",
            ],
          },
          {
            title: "Social justice in the curriculum",
            bullets: [
              "Picture books and novels that mirror the whole class",
              "Treaty and land acknowledgements woven into regular practice",
              "Current events handled with care and with sources",
            ],
          },
          {
            title: "Professional learning in equity and CRRP",
            bullets: [
              "Ongoing PD in Culturally Responsive and Relevant Pedagogy",
              "Indigenous Education learning with Elders and TDSB staff",
              "Bringing what I learn back to the staff room",
            ],
          },
          {
            title: "Honouring student identity and experience",
            bullets: [
              "Names said correctly, every time",
              "Home languages welcomed in the library and the classroom",
              "Families treated as co-educators, not audience",
            ],
          },
        ],
      },
      {
        ord: 4,
        slug: "curious-independent-learners",
        title: "Cultivating Curious, Independent Learners",
        pull:
          "I want students to leave my classroom as thinkers, not just test-takers.",
        photoDir: "/images/competencies/4",
        photoCount: 10,
        subs: [
          {
            title: "Inquiry and higher-order thinking",
            bullets: [
              "Driving questions that kids actually want to answer",
              "Research cycles that move past Google's first result",
              "Thinking routines borrowed from Project Zero",
            ],
          },
          {
            title: "Student voice and reflection",
            bullets: [
              "Learning journals and exit tickets that shape tomorrow",
              "Student-led conferences from grade 4 up",
              "Goal-setting that the student owns",
            ],
          },
          {
            title: "Community Circle and classroom discourse",
            bullets: [
              "Daily circles that teach listening as much as talking",
              "Talk moves and sentence starters for every learner",
              "A norm of disagreeing without shutting down",
            ],
          },
          {
            title: "Real-world and community-connected learning",
            bullets: [
              "Guest speakers, field trips, and library partnerships",
              "Service projects tied to curriculum, not tacked on",
              "Letting the neighbourhood walk into the classroom",
            ],
          },
        ],
      },
    ],
  },
  {
    ord: 2,
    num: "II",
    slug: "professional-knowledge",
    title: "Professional Knowledge",
    tagline: "Knowing the craft starts with knowing the student.",
    intro:
      "Good teaching rests on a foundation of deep knowledge — of curriculum, of policy, of how kids actually learn. I keep sharpening that foundation so the practice on top of it stays honest.",
    competencies: [
      {
        ord: 5,
        slug: "curriculum-policy-practice",
        title: "Grounded in Curriculum, Policy, and Professional Practice",
        pull:
          "Good teaching starts with knowing your stuff — the curriculum, the policy, and the kids in front of you.",
        photoDir: "/images/competencies/5",
        photoCount: 7,
        subs: [
          {
            title: "Curriculum expertise and implementation",
            bullets: [
              "Deep familiarity with the Ontario curriculum K–8",
              "Cross-curricular planning that holds together",
              "Unit design that begins with the end in mind",
            ],
          },
          {
            title: "Special education leadership",
            bullets: [
              "Specialist qualifications in Special Education (Parts 1 & 2)",
              "IEP writing and review across a range of exceptionalities",
              "Collaborative case-management with SERT and psych staff",
            ],
          },
          {
            title: "Professional development and certification",
            bullets: [
              "Librarianship Specialist, Reading Specialist, ESL Part 1",
              "Regular PD days in inquiry, equity, and assessment",
              "Reading the research, not just the TikToks",
            ],
          },
          {
            title: "Collaborative professional communities",
            bullets: [
              "Active PLC member across grade teams",
              "TDSB Teacher-Librarian network participant",
              "Mentor to new and occasional teachers",
            ],
          },
        ],
      },
      {
        ord: 6,
        slug: "assessment-moves-learning-forward",
        title: "Assessment That Moves Learning Forward",
        pull:
          "Assessment isn't about grades — it's about figuring out what to teach next.",
        photoDir: "/images/competencies/6",
        photoCount: 6,
        subs: [
          {
            title: "Authentic, aligned assessment design",
            bullets: [
              "Tasks that mirror the real-world use of the skill",
              "Success criteria built with students",
              "Moderation with colleagues to keep the bar honest",
            ],
          },
          {
            title: "Formative feedback and conferencing",
            bullets: [
              "Reading and writing conferences on a predictable cycle",
              "Descriptive feedback tied to the next step",
              "Kid-friendly learning goals posted and revisited",
            ],
          },
          {
            title: "Differentiated assessment for every learner",
            bullets: [
              "Multiple ways to show what you know",
              "Accommodations as a default, not a favour",
              "Portfolios that travel with the student",
            ],
          },
          {
            title: "A varied assessment toolkit",
            bullets: [
              "Running records, rubrics, anecdotals, checklists",
              "Self- and peer-assessment with real teeth",
              "Tech tools that free me up to watch and listen",
            ],
          },
        ],
      },
      {
        ord: 7,
        slug: "structured-joyful-community",
        title: "Creating a Structured, Joyful Classroom Community",
        pull:
          "Strong routines make room for joy. Joy makes room for learning.",
        photoDir: "/images/competencies/7",
        photoCount: 6,
        subs: [
          {
            title: "Routines and a safe environment",
            bullets: [
              "Predictable arrival, transition, and closing rituals",
              "Classroom layout that supports calm bodies",
              "Clear, visible expectations for every space",
            ],
          },
          {
            title: "Co-created agreements and community rituals",
            bullets: [
              "Class agreements drafted and signed by students",
              "Celebration rituals for birthdays, growth, and effort",
              "Circle practices to open and close the week",
            ],
          },
          {
            title: "Organization and self-regulation",
            bullets: [
              "Zones of Regulation language in daily use",
              "Brain breaks and movement built into the timetable",
              "Student-led check-ins and goal boards",
            ],
          },
          {
            title: "Motivation and positive behaviour systems",
            bullets: [
              "Restorative conversations over sticker charts",
              "Class-wide goals with shared payoff",
              "Catching kids being kind, loudly and often",
            ],
          },
        ],
      },
      {
        ord: 8,
        slug: "how-students-learn",
        title: "Teaching With How Students Actually Learn in Mind",
        pull:
          "I start where students are — not where the textbook wishes they were.",
        photoDir: "/images/competencies/8",
        photoCount: 8,
        subs: [
          {
            title: "Activating prior knowledge",
            bullets: [
              "Openers that surface what students already bring",
              "KWL and its smarter cousins, used selectively",
              "Schema-building before any new content lands",
            ],
          },
          {
            title: "Inclusive, identity-affirming curriculum",
            bullets: [
              "Texts and examples that reflect the whole class",
              "Space for home language and family knowledge",
              "Representation checked across the full year, not one month",
            ],
          },
          {
            title: "Individualized learning plans",
            bullets: [
              "IEPs that drive daily choices, not file-cabinet paperwork",
              "Learning profiles kept current",
              "Students in the loop about their own plan",
            ],
          },
          {
            title: "Relationship-driven pedagogy",
            bullets: [
              "Two-by-ten check-ins with students who need extra",
              "Greetings at the door, every day",
              "Knowing what's going on at home when it matters",
            ],
          },
        ],
      },
    ],
  },
  {
    ord: 3,
    num: "III",
    slug: "teaching-practice",
    title: "Teaching Practice",
    tagline: "The daily work of helping kids learn.",
    intro:
      "This is where planning meets people. The best lesson plan in the world is only as good as the classroom it lands in — so I obsess about how things actually run, hour by hour.",
    competencies: [
      {
        ord: 9,
        slug: "professional-knowledge-into-practice",
        title: "Putting Professional Knowledge Into Daily Practice",
        pull:
          "Theory matters, but only if it shows up in the room.",
        photoDir: "/images/competencies/9",
        photoCount: 5,
        subs: [
          {
            title: "Structured classroom foundations",
            bullets: [
              "Clear daily schedule, visible to everyone",
              "Materials organized so kids can be independent",
              "Predictable rhythm students can count on",
            ],
          },
          {
            title: "Community-building routines",
            bullets: [
              "Morning meeting to anchor the day",
              "Shared responsibility for classroom jobs",
              "Weekly reflection on how we're doing together",
            ],
          },
          {
            title: "Learning skills in action",
            bullets: [
              "Explicit teaching of the six learning skills",
              "Goal-setting around one skill at a time",
              "Self-assessment that informs the report card",
            ],
          },
          {
            title: "Purposeful lesson design",
            bullets: [
              "Clear learning goal, clear success criteria, clear exit",
              "Minds-on, action, consolidation — not as a ritual, as a reason",
              "Every lesson ends with me knowing what to do next",
            ],
          },
        ],
      },
      {
        ord: 10,
        slug: "families-and-colleagues",
        title: "Building Strong Bridges With Families and Colleagues",
        pull:
          "Teaching is a team sport. Families and colleagues are on the same side of the net.",
        photoDir: "/images/competencies/10",
        photoCount: 9,
        subs: [
          {
            title: "Parent communication and partnership",
            bullets: [
              "Regular, proactive communication — not just when things go wrong",
              "Newsletters, emails, and phone calls in plain language",
              "Translation and interpretation arranged when needed",
            ],
          },
          {
            title: "Student conferencing and goal-setting",
            bullets: [
              "Student-led conferences from grade 4 up",
              "Three-way conversations with real goals and timelines",
              "Mid-term check-ins, not just end-of-term surprises",
            ],
          },
          {
            title: "Mentorship of colleagues and new teachers",
            bullets: [
              "Formal mentor for NTIP teachers",
              "Lesson-planning partner for teacher candidates",
              "Open door for anyone with a tough Monday",
            ],
          },
          {
            title: "Community-facing school events",
            bullets: [
              "Family literacy nights and library open houses",
              "Reading bingo and summer reading campaigns",
              "Volunteer coordination across grade levels",
            ],
          },
        ],
      },
      {
        ord: 11,
        slug: "feedback-loops",
        title: "Ongoing, Transparent Feedback Loops",
        pull:
          "Kids grow fastest when they know what they're working on and why.",
        photoDir: "/images/competencies/11",
        photoCount: 8,
        subs: [
          {
            title: "Real-time observation and check-ins",
            bullets: [
              "Anecdotal notes taken during the lesson, not after",
              "Conferring stations built into the week",
              "Quick re-teach cycles for whoever needs them",
            ],
          },
          {
            title: "Timely written and verbal feedback",
            bullets: [
              "Feedback that's specific, actionable, and kind",
              "Turnaround measured in days, not weeks",
              "Models and exemplars alongside the comment",
            ],
          },
          {
            title: "Parent communication on progress",
            bullets: [
              "No surprises at report-card time",
              "Shared goals with families mid-unit",
              "Celebrations, not just concerns",
            ],
          },
          {
            title: "A varied assessment toolkit for varied learners",
            bullets: [
              "Rubrics, checklists, and anecdotals chosen on purpose",
              "Tech tools that collect evidence without eating my prep",
              "Portfolios that show growth across the year",
            ],
          },
        ],
      },
      {
        ord: 12,
        slug: "learning-and-refining",
        title: "Always Learning, Always Refining",
        pull:
          "No lesson is ever really finished. I keep the good, fix the rest, and come back stronger next week.",
        photoDir: "/images/competencies/12",
        photoCount: 7,
        subs: [
          {
            title: "Curriculum-aligned adaptation",
            bullets: [
              "Unit revisions based on the last run-through",
              "Fresh texts and tasks each cycle",
              "Curriculum updates tracked and applied",
            ],
          },
          {
            title: "Differentiation and IEP development",
            bullets: [
              "Differentiation patterns that evolve with the class",
              "IEP reviews grounded in classroom data",
              "Adjustments made in weeks, not terms",
            ],
          },
          {
            title: "Collaborative professional learning",
            bullets: [
              "Co-planning with grade partners",
              "Cross-school moderation with fellow TLs",
              "Sharing what works, honestly, including the flops",
            ],
          },
          {
            title: "Workshops, training, and certification",
            bullets: [
              "Ongoing AQ and specialist coursework",
              "Conference attendance as a learner, not a tourist",
              "Bringing one usable thing back from every session",
            ],
          },
        ],
      },
      {
        ord: 13,
        slug: "technology-as-tool",
        title: "Integrating Technology as a Learning Tool",
        pull:
          "Technology is a tool, not the point. I choose the tool that gets out of the way.",
        photoDir: "/images/competencies/13",
        photoCount: 7,
        subs: [
          {
            title: "Daily classroom integration",
            bullets: [
              "Google Workspace for Education as the daily spine",
              "Coding, robotics, and makerspace tools in rotation",
              "Digital citizenship woven into every project",
            ],
          },
          {
            title: "Assistive technology for diverse learners",
            bullets: [
              "Read&Write, Kurzweil, and text-to-speech on demand",
              "Voice typing and dictation as standard options",
              "Visual supports and timers for self-regulation",
            ],
          },
          {
            title: "Digital tools for planning and administration",
            bullets: [
              "Shared planning docs with co-teachers",
              "Assessment trackers that do the math for me",
              "IEP and report drafting in collaborative docs",
            ],
          },
          {
            title: "Communication and collaboration platforms",
            bullets: [
              "Class websites and newsletters for families",
              "Google Classroom as a quiet hub, not a megaphone",
              "Tech chosen for access and privacy, not novelty",
            ],
          },
        ],
      },
    ],
  },
  {
    ord: 4,
    num: "IV",
    slug: "leadership-and-community",
    title: "Leadership and Community",
    tagline: "A school is a community I help to build every year.",
    intro:
      "Teaching doesn't stop at the classroom door. The healthiest schools are the ones where staff show up for each other and for the neighbourhood around them — and I try to be one of the people who does.",
    competencies: [
      {
        ord: 14,
        slug: "collaborative-school-culture",
        title: "Leading and Contributing to a Collaborative School Culture",
        pull:
          "The best schools are built by teachers who show up for each other.",
        photoDir: "/images/competencies/14",
        photoCount: 8,
        subs: [
          {
            title: "School committees and task forces",
            bullets: [
              "Equity committee, literacy team, and safe-schools work",
              "School improvement planning alongside admin",
              "Lead organizer of schoolwide literacy events",
            ],
          },
          {
            title: "Student-facing clubs and initiatives",
            bullets: [
              "Forest of Reading coordinator",
              "Library Leaders and reading buddies programs",
              "Lunchtime makerspace and coding clubs",
            ],
          },
          {
            title: "Staff workshops and mentorship",
            bullets: [
              "PD sessions on digital citizenship, inquiry, and AT",
              "Lesson-study partnerships with grade teams",
              "One-on-one mentorship for new staff",
            ],
          },
          {
            title: "Cross-role professional collaboration",
            bullets: [
              "Close work with SERT, CYW, and admin",
              "Planning across specialist and classroom roles",
              "Sharing the library as a genuine hub",
            ],
          },
        ],
      },
      {
        ord: 15,
        slug: "beyond-the-classroom-walls",
        title: "Extending Learning Beyond the Classroom Walls",
        pull:
          "The world is the real classroom. I try to keep the doors wide open.",
        photoDir: "/images/competencies/15",
        photoCount: 6,
        subs: [
          {
            title: "Welcoming newcomers and families",
            bullets: [
              "Tours and orientations for new-to-Canada families",
              "Home-language welcome signage and resources",
              "Connecting families to settlement supports",
            ],
          },
          {
            title: "Community fundraising and service",
            bullets: [
              "Food drives, clothing drives, and book drives",
              "Terry Fox Run and Me to We campaigns",
              "Partnerships with neighbourhood organizations",
            ],
          },
          {
            title: "Student experiences beyond the classroom",
            bullets: [
              "Field trips tied tightly to curriculum",
              "Guest authors, storytellers, and makers",
              "Outdoor learning and school-yard inquiry",
            ],
          },
          {
            title: "Partnerships with specialists and professional networks",
            bullets: [
              "TDSB Teacher-Librarian network",
              "OLA and OSLA connections",
              "Public library partnerships for programming",
            ],
          },
        ],
      },
    ],
  },
  {
    ord: 5,
    num: "V",
    slug: "ongoing-professional-learning",
    title: "Ongoing Professional Learning",
    tagline: "Still learning, still curious.",
    intro:
      "The best teachers are students too. After twenty-four years I'm still the one scribbling notes at the workshop and reading on the streetcar — because the day I stop learning is the day I should stop teaching.",
    competencies: [
      {
        ord: 16,
        slug: "sustained-growth",
        title: "A Sustained Commitment to Professional Growth",
        pull:
          "Every workshop, every course, every conversation with a colleague — they all compound.",
        photoDir: "/images/competencies/16",
        photoCount: 9,
        subs: [
          {
            title: "Formal qualifications and certifications",
            bullets: [
              "B.Ed., Librarianship Specialist, Reading Specialist",
              "Special Education Part 1 & Part 2",
              "ESL Part 1, with Part 2 in progress",
            ],
          },
          {
            title: "Professional learning communities",
            bullets: [
              "Active PLC member at school and board level",
              "Regular TDSB Teacher-Librarian network contributor",
              "Grade-team co-planning as a weekly habit",
            ],
          },
          {
            title: "Specialized workshops and training",
            bullets: [
              "Inquiry, assessment, and equity PD",
              "Indigenous Education learning with Elders",
              "Makerspace, robotics, and coding certifications",
            ],
          },
          {
            title: "International and cross-cultural learning",
            bullets: [
              "Teacher exchange and travel-based PD",
              "Global read-alouds and pen-pal partnerships",
              "Bringing international perspectives into daily lessons",
            ],
          },
        ],
      },
    ],
  },
];

export function getCommitment(slug: string): Commitment | undefined {
  return COMMITMENTS.find((c) => c.slug === slug);
}
