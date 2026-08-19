import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const baseUrl = siteConfig.url ?? "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
