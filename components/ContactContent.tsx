// src/components/contact/ContactContent.tsx
"use client";

import { Instagram } from "@/components/icons";
import { SALON_DATA } from "@/data/salonData";
import { Clock, MapPin, Phone, Car, Navigation } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function ContactContent() {
  const { t } = useLanguage();
  const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(SALON_DATA.address)}`;

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      {/* Hauptüberschrift */}
      <h1 className="text-4xl font-bold text-center text-gold-custom mb-12">
        {t("contact.title")}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Linke Spalte: Informationen */}
        <div className="space-y-8">
          {/* Kontakt & Adresse Card */}
          <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-sm transition-all">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
              {t("contact.addressTitle")}
            </h2>

            <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
              <p className="text-lg font-bold text-gold-custom">
                {SALON_DATA.name}
              </p>

              <div className="group">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-3 text-left group-hover:text-black dark:group-hover:text-white transition"
                >
                  <MapPin className="text-gold-custom w-6 h-6 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base font-medium leading-tight">
                      {SALON_DATA.address}
                    </p>
                    <p className="text-[13px] text-black/50 dark:text-white/50 mt-1 flex items-center gap-1 group-hover:text-gold-custom transition">
                      {t("contact.openInMaps")} <Navigation className="w-3 h-3" />
                    </p>
                  </div>
                </a>
              </div>

              {/* Telefonnummer */}
              <div className="flex items-center gap-3 pt-2">
                <Phone className="w-5 h-5 text-gold-custom shrink-0" />
                <a
                  href={`tel:${SALON_DATA.phone}`}
                  className="hover:text-gold-custom font-semibold transition text-neutral-900 dark:text-white"
                >
                  {SALON_DATA.phone}
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-gold-custom shrink-0" />
                <a
                  href="https://www.instagram.com/coiffeur_baz_oerlikon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-custom transition text-neutral-700 dark:text-neutral-300"
                >
                  {SALON_DATA.instagram}
                </a>
              </div>
            </div>
          </div>

          {/* Parkplatz-Hinweis Card */}
          <div className="bg-neutral-50 dark:bg-neutral-900 border border-gold-custom/40 p-6 rounded-2xl flex items-start gap-4 shadow-sm transition-all">
            <Car className="w-7 h-7 text-gold-custom shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                {t("contact.parkingTitle")}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                {t("contact.parkingDesc")}
              </p>
            </div>
          </div>

          {/* Öffnungszeiten Card */}
          <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-sm transition-all">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
              <Clock className="text-gold-custom w-6 h-6" /> {t("contact.hoursTitle")}
            </h2>

            <div className="space-y-3 text-neutral-700 dark:text-neutral-300 text-sm">
              <div className="flex justify-between py-2 border-b border-neutral-200 dark:border-neutral-800">
                <span>{t("contact.weekdays")}</span>
                <span className="font-semibold text-gold-custom">
                  {SALON_DATA.hours.weekdays}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-200 dark:border-neutral-800">
                <span>{t("contact.saturday")}</span>
                <span className="font-semibold text-gold-custom">
                  {SALON_DATA.hours.saturday}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span>{t("contact.sunday")}</span>
                <span className="text-neutral-400 dark:text-neutral-500 font-medium">
                  {t("contact.closed")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Rechte Spalte: Google Maps Embed */}
        <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden min-h-[450px] shadow-sm relative">
          <iframe
            title="BAZ Coiffeur Standorte"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "450px" }}
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=Franklinstrasse+5,+8050+Z%C3%BCrich&t=&z=16&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}