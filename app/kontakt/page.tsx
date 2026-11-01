// src/app/kontakt/page.tsx
import { SALON_DATA } from "@/data/salonData";
import { Clock, MapPin, Phone, Car } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt | BAZ Coiffeur Zürich Oerlikon",
  description: "Kontaktieren Sie BAZ Coiffeur in Zürich Oerlikon. Adresse: Franklinstrasse 5, Tel: 043 817 25 25. Parkplätze direkt hinter dem Haus.",
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-amber-400 mb-12">
          Kontakt & Standorte
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Linke Spalte: Informationen */}
          <div className="space-y-8">
            {/* Kontakt & Adresse */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <MapPin className="text-amber-400" /> Adresse & Kontakt
              </h2>
              <div className="space-y-4 text-neutral-300">
                <p className="text-lg font-medium text-amber-400">{SALON_DATA.name}</p>
                <p>{SALON_DATA.address}</p>
                <div className="flex items-center gap-3 pt-2">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <a href={`tel:${SALON_DATA.phone}`} className="hover:text-amber-400 font-semibold transition">
                    {SALON_DATA.phone}
                  </a>
                </div>
                              <div className="flex items-center gap-3">
                                  {/* zu instegram icon */}
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span className="text-neutral-300">{SALON_DATA.instagram}</span>
                </div>
              </div>
            </div>

            {/* Parkplatz-Hinweis */}
            <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-xl flex items-start gap-4">
              <Car className="w-8 h-8 text-amber-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-400 mb-1">Parkmöglichkeiten</h3>
                <p className="text-neutral-300 text-sm">{SALON_DATA.parking}</p>
              </div>
            </div>

            {/* Öffnungszeiten */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Clock className="text-amber-400" /> Öffnungszeiten
              </h2>
              <div className="space-y-3 text-neutral-300 text-sm">
                <div className="flex justify-between py-1 border-b border-neutral-800">
                  <span>Montag – Freitag</span>
                  <span className="font-medium text-amber-400">{SALON_DATA.hours.weekdays}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800">
                  <span>Samstag</span>
                  <span className="font-medium text-amber-400">{SALON_DATA.hours.saturday}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Sonntag</span>
                  <span className="text-neutral-500">{SALON_DATA.hours.sunday}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Google Maps Embed */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden min-h-[400px] relative">
            <iframe
              title="BAZ Coiffeur Standorte"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?key=DEIN_GOOGLE_MAPS_API_KEY&q=Franklinstrasse+5,+8050+Zürich`}
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}