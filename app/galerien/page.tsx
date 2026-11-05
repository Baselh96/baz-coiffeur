// src/app/galerien/page.tsx
import GalleryContent from "@/components/GalleryContent";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie | BAZ Coiffeur Zürich Oerlikon",
  description: "Entdecken Sie den modernen Salon von BAZ Coiffeur in Zürich Oerlikon.",
};

export default function GaleriePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* Header ganz oben auf der Seite */}
      <Header />
      <GalleryContent />
    </main>
  );
}