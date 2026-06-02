import type { MetadataRoute } from "next";

import { createAbsoluteUrl, getSiteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: createAbsoluteUrl("/sitemap.xml"),
    host: getSiteUrl(),
  };
}
