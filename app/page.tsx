// src/app/page.tsx
import Hero from "@/components/Hero";
import ParkingBanner from "@/components/ParkingBanner";
import PhilosophySection from "@/components/PhilosophySection";
import ServicesSection from "@/components/ServicesSection";
import SalonInsightSection from "@/components/SalonInsightSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* 1. Hero Sektion */}
      <Hero />

      {/* 2. Parkplatz-Info Banner */}
      <ParkingBanner />

      {/* 3. Philosophie & Willkommen */}
      <PhilosophySection />

      {/* 4. Dienstleistungen Übersicht */}
      <ServicesSection />

      {/* 5. Einblick in den Salon */}
      <SalonInsightSection />
    </main>
  );
}