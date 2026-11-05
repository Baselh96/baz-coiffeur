import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
 basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages unterstützt Next.js Image Optimization standardmäßig nicht
  },
};

export default nextConfig;
