import type { NextConfig } from "next";

const repoName = "baz-coiffeur"; // Trage hier exakt deinen Repository-Namen ein!
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: false,
  partialPrefetching: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages unterstützt Next.js Image Optimization standardmäßig nicht
  },
};

export default nextConfig;
