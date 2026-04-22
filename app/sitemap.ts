import type { MetadataRoute } from "next";

const BASE =
  process.env.NEXT_PUBLIC_SITE_URL || "https://oneops.cloud";

const ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/thesis", changeFrequency: "monthly", priority: 0.9 },
  { path: "/method", changeFrequency: "monthly", priority: 0.9 },
  { path: "/agents", changeFrequency: "monthly", priority: 0.9 },
  { path: "/catalog", changeFrequency: "monthly", priority: 0.8 },
  { path: "/proof", changeFrequency: "monthly", priority: 0.8 },
  { path: "/case-studies", changeFrequency: "monthly", priority: 0.8 },
  { path: "/case-studies/ideaplaces", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: `${BASE}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
