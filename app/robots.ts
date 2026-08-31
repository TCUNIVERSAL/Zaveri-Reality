import type { MetadataRoute } from "next";

/**
 * robots.txt — controls search engine crawling behavior.
 * Allows all crawlers access to all pages, and points them to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: "https://zaverirealty.com/sitemap.xml",
  };
}
