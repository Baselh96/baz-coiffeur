"use client";
import { Car } from "lucide-react";
import { SALON_DATA } from "@/data/salonData";
import { useLanguage } from "./LanguageContext";

export default function ParkingBanner() {
    const { t } = useLanguage();
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800 py-3.5 px-4 text-center transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
        <Car className="w-4 h-4 text-gold-custom shrink-0" />
        <span>{t("home.parking")}</span>
      </div>
    </div>
  );
}