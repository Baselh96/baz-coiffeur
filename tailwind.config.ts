// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Aktiviert den Dark Mode über die 'dark' Klasse
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Helleres, edles Gold
        gold: {
          light: "#F7E5A9",
          DEFAULT: "#E5C158",
          dark: "#C69F33",
        },
      },
    },
  },
  plugins: [],
};
export default config;