// src/components/home/ServicesSection.tsx
"use client";

import { Scissors } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();

  // Helper-Funktion, um Arrays sicher aus dem Translation-Objekt zu holen
  const getServiceList = (key: string): string[] => {
    const list = t(key);
    return Array.isArray(list) ? list : [];
  };

  const herrenList = getServiceList("home.servicesList.herren");
  const damenList = getServiceList("home.servicesList.damen");
  const kinderList = getServiceList("home.servicesList.kinder");

  return (
    <section id="services" className="py-16 bg-neutral-100 dark:bg-neutral-900/40 border-y border-neutral-200 dark:border-neutral-800 px-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gold-custom mb-12">
          {t("home.servicesTitle")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Herren Card */}
          <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Scissors className="w-6 h-6 text-gold-custom" />
              <h3 className="text-2xl font-semibold text-gold-custom">{t("home.services.men")}</h3>
            </div>
            <ul className="space-y-3 text-neutral-700 dark:text-neutral-300 text-sm">
              {herrenList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-custom shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Damen Card (Hervorgehoben) */}
          <div className="bg-white dark:bg-neutral-950 border-2 border-gold-custom rounded-xl p-6 shadow-md relative overflow-hidden transition-all">
            <span className="absolute top-0 right-0 bg-gold-custom text-black font-bold text-xs px-3 py-1 rounded-bl-lg shadow-sm">
              {t("home.services.popular")}
            </span>
            <div className="flex items-center gap-3 mb-4">
              <Scissors className="w-6 h-6 text-gold-custom" />
              <h3 className="text-2xl font-semibold text-gold-custom">{t("home.services.women")}</h3>
            </div>
            <ul className="space-y-3 text-neutral-700 dark:text-neutral-300 text-sm">
              {damenList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-custom shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Kinder Card */}
          <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Scissors className="w-6 h-6 text-gold-custom" />
              <h3 className="text-2xl font-semibold text-gold-custom">{t("home.services.kids")}</h3>
            </div>
            <ul className="space-y-3 text-neutral-700 dark:text-neutral-300 text-sm">
              {kinderList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-custom shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}