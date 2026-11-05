"use client";
import { Sparkles, CheckCircle2, Users } from "lucide-react";
import { SALON_DATA } from "@/data/salonData";
import { useLanguage } from "./LanguageContext";

export default function PhilosophySection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gold-custom mb-4">
          {t("home.welcomeTitle")} {SALON_DATA.name}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
          {t("home.welcomeText")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl text-center shadow-sm transition-all">
          <Sparkles className="w-10 h-10 text-gold-custom mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gold-custom">{t("home.features.quality.title")}</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            {t("home.features.quality.desc")}
          </p>
        </div>

        <div className="bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl text-center shadow-sm transition-all">
          <CheckCircle2 className="w-10 h-10 text-gold-custom mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gold-custom">{t("home.features.hygiene.title")}</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            {t("home.features.hygiene.desc")}
          </p>
        </div>

        <div className="bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl text-center shadow-sm transition-all">
          <Users className="w-10 h-10 text-gold-custom mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gold-custom">{t("home.features.family.title")}</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            {t("home.features.family.desc")}
          </p>
        </div>
      </div>
    </section>
  );
}