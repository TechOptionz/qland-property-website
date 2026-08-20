import type { MetadataRoute } from "next";

import { routes, SITE_URL } from "@/lib/site";

const INDEXED: { path: string; priority: number }[] = [
  { path: routes.home, priority: 1 },
  { path: routes.houseAndLand, priority: 0.9 },
  { path: routes.buyersAgency, priority: 0.9 },
  { path: routes.propertyManagement, priority: 0.9 },
  { path: routes.propertySales, priority: 0.8 },
  { path: routes.ourDifference, priority: 0.7 },
  { path: routes.about, priority: 0.7 },
  { path: routes.reviews, priority: 0.6 },
  { path: routes.faqs, priority: 0.6 },
  { path: routes.contact, priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXED.map(({ path, priority }) => ({
    url: new URL(path, SITE_URL).toString(),
    changeFrequency: "monthly",
    priority,
  }));
}
