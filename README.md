# rhondatidgwell.com

Teacher-Librarian portfolio site for Rhonda Tidgwell — 24 years in TDSB,
currently at Rivercrest Junior School. Built to land a Teacher-Librarian
role for a September 2026 start.

Audience: hiring principals scanning on phones for ~30 seconds. Every
claim backed by a downloadable artifact.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript
- Tailwind CSS v4 (CSS-first `@theme`)
- `next/font` — Fraunces (display) + Inter (body)
- Framer Motion, lucide-react
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # static production build
npm run start   # serve the build
npm run lint    # eslint
```

### Environment

Copy `.env.example` to `.env.local` and set:

```
NEXT_PUBLIC_SITE_URL=https://your-deployment-url
```

Used for canonical URLs in `app/layout.tsx`, `sitemap.ts`, and `robots.ts`.

## Project layout

```
app/              # 25 pages + layout, sitemap, robots, not-found
components/       # 14 reusable components (Nav, Hero, ArtifactCard, …)
content/
  artifacts.ts    # typed single source of truth for every artifact
lib/
  cn.ts           # classnames helper
  competencies.ts # OCT 16-competency map
public/
  artifacts/      # downloadable PDFs, decks, images
    manifest.json # original-filename → served-filename mapping
  images/         # rhonda.jpg + photography
```

### Design tokens

Defined in `app/globals.css` under `@theme inline`:

| Token       | Value     | Use                    |
|-------------|-----------|------------------------|
| `--ink`     | `#1A1F2E` | Body text, headings    |
| `--paper`   | `#FAFAF7` | Background             |
| `--accent`  | `#8B2E2E` | Links, buttons, rules  |
| `--muted`   | `#6B7280` | Secondary text         |
| `--highlight` | `#F1EDE4` | Cards, fills         |
| `--rule`    | `#E6E1D5` | Dividers, borders      |

Available as Tailwind utilities: `text-ink`, `bg-paper`, `border-rule`, etc.

## Content updates

### Updating copy

All page copy is inline in `app/**/page.tsx`. Copy was lifted verbatim
from `Rhonda_Copy_Deck_v2.md` (voice-audited — don't paraphrase). The
ESLint rule `react/no-unescaped-entities` is disabled so literal
apostrophes and quotes survive intact.

### Adding an artifact

1. Drop the file in `public/artifacts/` with a kebab-cased filename
   (e.g. `library-action-plan.pdf`).
2. Add an entry to `public/artifacts/manifest.json` mapping the
   original filename → served filename + metadata.
3. Add a typed entry to `content/artifacts.ts`:

   ```ts
   {
     id: "library-action-plan",
     section: "library/collection",
     title: "Library Action Plan 2024–25",
     kind: "pdf",
     file: "/artifacts/library-action-plan.pdf",
     competencies: ["ongoing-professional-learning", "leadership-in-learning-communities"],
     note: "One-line caption for the card.",
   }
   ```

4. Reference it on the relevant page via `getArtifactsBySection("library/collection")`.

Large files (anything over ~5MB) should be flagged view-only in their
card — do not eager-load. The 257MB TPA 2017 deck is excluded by design.

### Adding a page

1. Create `app/<route>/page.tsx`.
2. Export `metadata` with `title` and `description`.
3. Add the route to `app/sitemap.ts`.
4. Link to it from Nav (`components/nav.tsx`) and/or relevant parent pages.

### Competency filter

The OCT 16-competency map lives in `lib/competencies.ts`. Artifacts tag
themselves with competency IDs; the `<CompetencyFilter>` component reads
from `content/artifacts.ts` to render the filter UI.

## Deploy

Push to `main`. Vercel auto-deploys.

The site is 100% statically prerendered — all 30 routes build at compile
time. No server runtime, no database.

**Deployment protection** must be OFF (or set to "Only Production
Deployments") so hiring principals don't hit a 401 on preview URLs.

## Accessibility

Target: WCAG 2.1 AA.

- Skip link, focus-visible rings, aria-labels
- Lighthouse target: Perf ≥95, A11y = 100, BP ≥95, SEO = 100
- Run `npx @axe-core/react` for a zero-error check before major releases

## Known `[TBD]` items

Tracked as GitHub issues:

1. Full CV PDF — to be finalized and dropped in `public/artifacts/`
2. LinkedIn URL — to be added to Nav + Footer + Contact page
3. Email confirmation copy — placeholder on contact form success state
4. Professional headshot — replace `rhonda.jpg` with high-res version

Until resolved, these render as muted `<TBD>` badges inline — not
silently dropped.
