"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { getAssetPath } from "@/utils/getAssetPath";
export default function SalonInsightSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gold-custom mb-4">
        {t("home.salonInsightTitle")}
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
        {t("home.salonInsightText")}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="relative h-72 rounded-xl overflow-hidden shadow-md border border-neutral-200 dark:border-neutral-800">
          <Image 
            src={getAssetPath("/images/salon-main.jpeg")} 
            alt="Barber Bereich" 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-300" 
          />
        </div>
        <div className="relative h-72 rounded-xl overflow-hidden shadow-md border border-neutral-200 dark:border-neutral-800">
          <Image 
            src={getAssetPath("/images/wartezimmer.jpeg")} 
            alt="Wartebereich" 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-300" 
          />
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          href="/galerien"
          className="bg-gold-custom hover:opacity-90 font-bold px-8 py-4 rounded-xl transition shadow-lg text-black inline-block text-base"
        >
          {t("home.galleryBtn")} →
        </Link>
      </div>
    </section>
  );
}