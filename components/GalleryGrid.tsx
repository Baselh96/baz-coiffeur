// src/components/GalleryGrid.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { getAssetPath } from "@/utils/getAssetPath";

const galleryImages = [
  {
    src: "/images/salon-main.jpeg",
    titleKey: "barberChairs",
    category: "salon",
  },
  {
    src: "/images/salon-main-2.jpeg",
    titleKey: "barberChairs",
    category: "salon",
  },
  { src: "/images/rezeption.jpeg", titleKey: "reception", category: "salon" },
  { src: "/images/wartezimmer.jpeg", titleKey: "lounge", category: "salon" },
  {
    src: "/images/haarschnitt-herren-1.jpeg",
    titleKey: "menCut",
    category: "men",
  },
  {
    src: "/images/haarschnitt-herren-2.jpeg",
    titleKey: "menCut",
    category: "men",
  },
  {
    src: "/images/haarschnitt-herren-3.jpeg",
    titleKey: "menCut",
    category: "men",
  },
  {
    src: "/images/haarschnitt-herren-4.jpeg",
    titleKey: "menCut",
    category: "men",
  },
  {
    src: "/images/haarschnitt-herren-5.jpeg",
    titleKey: "menCut",
    category: "men",
  },

  {
    src: "/images/haarschnitt-damen-1.jpeg",
    titleKey: "womenCut",
    category: "women",
  },
  {
    src: "/images/haarschnitt-damen-2.jpeg",
    titleKey: "womenCut",
    category: "women",
  },
  {
    src: "/images/haarschnitt-damen-3.jpeg",
    titleKey: "womenCut",
    category: "women",
  },
  {
    src: "/images/haarschnitt-damen-4.jpeg",
    titleKey: "womenCut",
    category: "women",
  },
  {
    src: "/images/haarschnitt-damen-5.jpeg",
    titleKey: "womenCut",
    category: "women",
  },
  {
    src: "/images/haarschnitt-damen-6.jpeg",
    titleKey: "womenCut",
    category: "women",
  },
  {
    src: "/images/haarschnitt-damen-7.jpeg",
    titleKey: "womenCut",
    category: "women",
  },
  {
    src: "/images/haarschnitt-damen-8.jpeg",
    titleKey: "womenCut",
    category: "women",
  },

  {
    src: "/images/haarschnitt-kinder-1.jpeg",
    titleKey: "kidsCut",
    category: "kids",
  },
  {
    src: "/images/haarschnitt-kinder-2.jpeg",
    titleKey: "kidsCut",
    category: "kids",
  },
  {
    src: "/images/haarschnitt-kinder-3.jpeg",
    titleKey: "kidsCut",
    category: "kids",
  },
  {
    src: "/images/haarschnitt-kinder-4.jpeg",
    titleKey: "kidsCut",
    category: "kids",
  },
  {
    src: "/images/haarschnitt-kinder-5.jpeg",
    titleKey: "kidsCut",
    category: "kids",
  },
  {
    src: "/images/haarschnitt-kinder-6.jpeg",
    titleKey: "kidsCut",
    category: "kids",
  },
  {
    src: "/images/haarschnitt-kinder-7.jpeg",
    titleKey: "kidsCut",
    category: "kids",
  },

  { src: "/images/waschplatz-1.jpeg", titleKey: "washArea", category: "wash" },
];

const categoryKeys = ["all", "salon", "men", "women", "kids", "wash"] as const;

export default function GalleryGrid() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Kategorie-Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {categoryKeys.map((catKey) => (
          <button
            key={catKey}
            onClick={() => setSelectedCategory(catKey)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition ${
              selectedCategory === catKey
                ? "bg-gold-custom text-black shadow-md"
                : "bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:border-gold-custom border border-neutral-200 dark:border-neutral-800"
            }`}
          >
            {t(`gallery.categories.${catKey}`)}
          </button>
        ))}
      </div>

      {/* Galerie Bilder Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((img, idx) => {
          const translatedTitle = t(`gallery.titles.${img.titleKey}`);
          return (
            <div
              key={idx}
              className="relative h-72 rounded-2xl overflow-hidden shadow-md border border-neutral-200 dark:border-neutral-800 group"
            >
              <Image
                src={getAssetPath(img.src)}
                alt={translatedTitle}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                <span className="text-white font-semibold text-lg tracking-wide">
                  {translatedTitle}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
