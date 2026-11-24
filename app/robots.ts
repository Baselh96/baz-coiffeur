// src/app/robots.ts
import { getBasePath } from "@/utils/getBasePath";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: getBasePath("/sitemap.xml"),
  };
}