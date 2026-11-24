// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageContext";
import { translations } from "@/data/translations";
import { getBasePath } from "@/utils/getBasePath";
import { getAssetPath } from "@/utils/getAssetPath";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const meta = translations.de.metadata;

export const metadata: Metadata = {
    publisher: "BAZ Coiffeur",
    robots: {
      index: true,
      follow: true,
      noarchive: true,
    },
  metadataBase: new URL(getBasePath()),
  title: meta.title,
  description: meta.desc, 
/*   icons: [
    { rel: "icon", url: "/image.png" },
    { rel: "shortcut icon", url: "/image.png" },
    { rel: "apple-touch-icon", url: "/image.png" },
  ],
  icons: [
    { rel: "icon", url: getAssetPath("/images/favicon-square.png") },
    { rel: "shortcut icon", url: getAssetPath("/images/favicon-square.png") },
    { rel: "apple-touch-icon", url: getAssetPath("/images/favicon-square.png") },
  ], */
  keywords: ["Coiffeur", "Zürich Oerlikon", "Haarschnitt", "Barber", "BAZ Coiffeur", "Franklinstrasse"],
  authors: [{ name: "BAZ Coiffeur" }],
  openGraph: {
    title: meta.title,
    description: meta.desc,
    url: getBasePath(), // Passe dies an deine finale Domain an
    siteName: "BAZ Coiffeur",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/images/salon-main.jpeg", // Pfad zu deinem Bild im public-Ordner
        width: 1200,
        height: 630,
        alt: meta.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: "Ihr Coiffeur für die ganze Familie in Zürich Oerlikon. Professionelle Haarschnitte, Bartpflege.",
    images: ["/images/salon-main.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "BAZ Coiffeur",
    image: getBasePath("/images/salon-main.jpeg"), // Absolute URL empfohlen für Schema.org
    telephone: "+41438172525",
    url: getBasePath(),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Franklinstrasse 5",
      addressLocality: "Zürich",
      postalCode: "8050",
      addressCountry: "CH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.4115, // Optional: Koordinaten für Oerlikon
      longitude: 8.5442,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
  };

  return (
    <html lang="de" dir="ltr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300 min-h-screen flex flex-col font-sans`}>
        <LanguageProvider>
          <ThemeProvider>
            <div className="flex-grow">{children}</div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}