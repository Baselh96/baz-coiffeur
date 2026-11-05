// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://9nwnv5t9-3000.uks1.devtunnels.ms"),
  title: "BAZ Coiffeur | Zürich Oerlikon",
  description: "Ihr Coiffeur für die ganze Familie in Zürich Oerlikon. Professionelle Haarschnitte, Bartpflege und Styling an der Franklinstrasse 5.",
  icons: [
    { rel: "icon", url: "/images/favicon-square.png" },
    { rel: "shortcut icon", url: "/images/favicon-square.png" },
    { rel: "apple-touch-icon", url: "/images/favicon-square.png" },
  ],
  keywords: ["Coiffeur", "Zürich Oerlikon", "Haarschnitt", "Barber", "BAZ Coiffeur", "Franklinstrasse"],
  authors: [{ name: "BAZ Coiffeur" }],
  openGraph: {
    title: "BAZ Coiffeur | Zürich Oerlikon",
    description: "Ihr Coiffeur für die ganze Familie in Zürich Oerlikon. Professionelle Haarschnitte, Bartpflege.",
    url: "https://9nwnv5t9-3000.uks1.devtunnels.ms", // Passe dies an deine finale Domain an
    siteName: "BAZ Coiffeur",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/images/salon-main-2.jpeg", // Pfad zu deinem Bild im public-Ordner
        width: 1200,
        height: 630,
        alt: "BAZ Coiffeur Salon Zürich Oerlikon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BAZ Coiffeur | Zürich Oerlikon",
    description: "Ihr Coiffeur für die ganze Familie in Zürich Oerlikon. Professionelle Haarschnitte, Bartpflege.",
    images: ["/images/salon-main-2.jpeg"],
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
    image: "https://baz-coiffeur.ch/images/rezeption.jpeg", // Absolute URL empfohlen für Schema.org
    telephone: "+41438172525",
    url: "https://baz-coiffeur.ch",
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
    <html lang="de" suppressHydrationWarning>
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