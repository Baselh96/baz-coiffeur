// src/components/Hero.tsx
"use client";

import Image from "next/image";
import Header from "@/components/Header";
import { SALON_DATA } from "@/data/salonData";
import { useLanguage } from "./LanguageContext";
import { getAssetPath } from "@/utils/getAssetPath";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[100svh] min-h-[700px] w-full flex flex-col justify-between text-white text-center overflow-hidden">
      {/* 1. Hintergrundbild - deckt kompletten Bildschirm ab */}
      <Image
        src={getAssetPath("/images/salon-main.jpeg")}
        alt="BAZ Coiffeur Salon"
        fill
        className="object-cover"
        priority
      />

      {/* 2. Dark Overlay für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/20" />

      {/* 3. Header */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* 4. Hero Inhalt */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 my-auto py-12">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-gold-custom mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light drop-shadow">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${SALON_DATA.phone}`}
            className="bg-gold-custom hover:bg-white hover:text-black text-black font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)] hover:-translate-y-0.5"
          >
            {t("hero.callBtn")} ({SALON_DATA.phone})
          </a>
          <a
            href="#services"
            className="border border-white/40 hover:bg-white hover:text-black hover:border-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 backdrop-blur-md bg-white/5"
          >
            {t("hero.servicesBtn")}
          </a>
        </div>
      </div>

      {/* 5. Moderner, weicher Fade nach unten */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        {/* Moderner Blur Fade - nimmt keinen Platz weg */}
        <div className="h-[150px] w-full backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black_0%,rgba(0,0,0,0.8)_20%,transparent_100%)] opacity-0 dark:opacity-100" />

        {/* Light: nur ganz unten 60px super leicht, Dark: mehr */}
        <div className="absolute bottom-0 w-full h-[70px] dark:h-[200px] bg-gradient-to-t from-white via-white/30 to-transparent dark:from-neutral-950 dark:via-neutral-950/70" />
      </div>

      {/* Scroll Indicator - Elegant */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-80">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-medium">
          {t("hero.scroll")}
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent relative overflow-hidden">
          <div className="absolute top-0 w-full h-1/2 bg-gold-custom animate-[scrollDown_1.8s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes scrollDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}