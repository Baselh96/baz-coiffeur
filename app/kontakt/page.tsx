// src/app/kontakt/page.tsx
import Header from "@/components/Header";
import { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt | BAZ Coiffeur Zürich Oerlikon",
  description:
    "Kontaktieren Sie BAZ Coiffeur in Zürich Oerlikon. Adresse: Franklinstrasse 5, Tel: 043 817 25 25. Parkplätze direkt hinter dem Haus.",
};

export default function KontaktPage() {
  
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* Header ganz oben auf der Seite */}
      <Header />
      <ContactContent />
    </main>
  );
}
