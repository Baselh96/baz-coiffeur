// src/components/gallery/GalleryContent.tsx
"use client";

import GalleryGrid from "@/components/GalleryGrid";
import { useLanguage } from "./LanguageContext";

export default function GalleryContent() {
  const { t } = useLanguage();

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gold-custom mb-4">
        {t("gallery.title")}
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10">
        {t("gallery.subtitle")}
      </p>

      <GalleryGrid />
    </div>
  );
}