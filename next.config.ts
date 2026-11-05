import type { NextConfig } from "next";

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
  basePath: "/baz-coiffeur",
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages unterstützt Next.js Image Optimization standardmäßig nicht
  },
};

export default nextConfig;
