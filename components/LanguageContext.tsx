// src/context/LanguageContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Locale } from "@/data/translations";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => any; // Typ auf 'any' oder 'unknown' ändern, damit auch Arrays zurückkommen dürfen
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("de");

  useEffect(() => {
    const saved = localStorage.getItem("baz_locale") as Locale;
    if (saved === "de" || saved === "en" || saved === "ar") {
      setLocaleState(saved);
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = saved;
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("baz_locale", newLocale);

    // Dynamisch HTML-Richtung und Sprache im DOM aktualisieren
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLocale;
  };

  const t = (path: string): any => {
    const keys = path.split(".");
    let current: any = translations[locale];

    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        return path;
      }
    }

    return current; // Gibt jetzt sowohl Strings als auch Arrays/Objekte direkt zurück!
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}