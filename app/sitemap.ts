import type { MetadataRoute } from "next";

const ROUTES = [
  "",
  "/about",
  "/about/journey",
  "/about/credentials",
  "/classroom",
  "/classroom/teaching-inquiry",
  "/classroom/lesson-planning",
  "/classroom/differentiation",
  "/library",
  "/library/collection",
  "/library/makerspace",
  "/library/digital-citizenship",
  "/library/reading-culture",
  "/library/virtual-library",
  "/assessment",
  "/assessment/growing-success",
  "/assessment/conferences",
  "/assessment/feedback",
  "/leadership",
  "/leadership/equity",
  "/leadership/mentorship",
  "/leadership/professional-learning",
  "/contact",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
