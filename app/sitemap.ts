import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

// Falls back to localhost until siteConfig.url is set (DESIGN.md/CLAUDE.md
// #27 — no domain has been assigned yet); every URL below is derived from
// that single source instead of a second hardcoded value.
const baseUrl = siteConfig.url ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ["", "/projects"].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
    }),
  );

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
