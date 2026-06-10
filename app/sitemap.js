import { allRoutes, site } from "../lib/siteData";

export const dynamic = "force-static";

export default function sitemap() {
  return allRoutes.map((route) => ({
    url: new URL(route, site.url).toString(),
    lastModified: new Date(site.lastUpdated),
    changeFrequency: route.includes("/blog") || route.includes("/updates") ? "monthly" : "weekly",
    priority: route === "/" ? 1 : route.includes("/wiki") ? 0.8 : 0.7,
  }));
}
