// src/app/galerien/page.tsx
import GalleryGrid from "@/components/GalleryGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie | BAZ Coiffeur Zürich Oerlikon",
  description: "Entdecken Sie den modernen Salon von BAZ Coiffeur in Zürich Oerlikon. Einblicke in Arbeitsplätze, Lounge und Ausstattung.",
};

export default function GaleriePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-amber-400 mb-4">Impressionen & Galerie</h1>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Verschaffen Sie sich einen Eindruck von unseren Räumlichkeiten und der angenehmen Atmosphäre bei BAZ Coiffeur.
        </p>
      </div>

      {/* Einbindung des Galerie-Grids */}
      <GalleryGrid />
    </main>
  );
}