import { allRoutes, site } from "../lib/siteData";

export const dynamic = "force-static";

export default function sitemap() {
  return allRoutes.map((route) => ({
    url: new URL(route, site.url).toString(),
    lastModified: new Date(site.lastUpdated),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
