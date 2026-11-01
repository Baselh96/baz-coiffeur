import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Scissors, Sparkles, Users } from "lucide-react";
import Hero from "../components/Hero";
import PromoBanner from "../components/PromoBanner";
import { SALON_DATA } from "../data/salonData";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* 1. Hero Sektion */}
      <Hero />

      {/* 2. Banner für Parkplätze & Gutschein */}
      {/* <PromoBanner /> */}

      {/* 3. Philosophie & Willkommen */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
            Willkommen bei {SALON_DATA.name}
          </h2>
          <p className="text-neutral-300 text-lg leading-relaxed">
            Ihr Coiffeur für die ganze Familie in Zürich Oerlikon. Bei uns stehen Qualität, Sauberkeit, persönliche Beratung und die Zufriedenheit unserer Kundinnen und Kunden im Mittelpunkt.
          </p>
        </div>

        {/* Qualität / Sauberkeit / Beratung Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/80 border border-amber-500/20 p-6 rounded-xl text-center">
            <Sparkles className="w-10 h-10 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Qualität & Style</h3>
            <p className="text-neutral-400 text-sm">
              Ob moderner Look oder klassischer Haarschnitt – wir kreieren den Stil, der perfekt zu Ihnen passt.
            </p>
          </div>
          <div className="bg-neutral-900/80 border border-amber-500/20 p-6 rounded-xl text-center">
            <CheckCircle2 className="w-10 h-10 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Sauberkeit & Hygiene</h3>
            <p className="text-neutral-400 text-sm">
              Ein sauberes Umfeld und gepflegte Werkzeuge sind bei uns die Basis für jeden Service.
            </p>
          </div>
          <div className="bg-neutral-900/80 border border-amber-500/20 p-6 rounded-xl text-center">
            <Users className="w-10 h-10 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Für die ganze Familie</h3>
            <p className="text-neutral-400 text-sm">
              Spezielle Angebote und angenehme Atmosphäre für Herren, Damen und Kinder.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Dienstleistungen Übersicht */}
      <section id="services" className="py-16 bg-neutral-900 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-400 mb-12">
            Unsere Dienstleistungen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Herren */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Scissors className="w-6 h-6 text-amber-400" />
                  <h3 className="text-2xl font-semibold text-white">Herren</h3>
                </div>
                <ul className="space-y-3 text-neutral-300 text-sm">
                  {SALON_DATA.services.herren.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Damen */}
            <div className="bg-neutral-950 border border-amber-500/30 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
              <span className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                Beliebt
              </span>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Scissors className="w-6 h-6 text-amber-400" />
                  <h3 className="text-2xl font-semibold text-white">Damen</h3>
                </div>
                <ul className="space-y-3 text-neutral-300 text-sm">
                  {SALON_DATA.services.damen.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Kinder */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Scissors className="w-6 h-6 text-amber-400" />
                  <h3 className="text-2xl font-semibold text-white">Kinder</h3>
                </div>
                <ul className="space-y-3 text-neutral-300 text-sm">
                  {SALON_DATA.services.kinder.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Einblick in den Salon */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-amber-400 mb-6">Einblick in unseren Salon</h2>
        <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
          Besuchen Sie uns an der Franklinstrasse 5 in Zürich Oerlikon und genießen Sie unseren Service in entspannter Atmosphäre.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="relative h-72 rounded-xl overflow-hidden shadow-lg border border-neutral-800">
            <Image src="/images/salon-main.jpeg" alt="Barber Bereich" fill className="object-cover" />
          </div>
          <div className="relative h-72 rounded-xl overflow-hidden shadow-lg border border-neutral-800">
            <Image src="/images/wartezimmer.jpeg" alt="Wartebereich" fill className="object-cover" />
          </div>
        </div>
        <Link
          href="/galerien"
          className="inline-block bg-neutral-800 hover:bg-neutral-700 text-amber-400 border border-amber-500/30 font-medium px-6 py-3 rounded-lg transition"
        >
          Alle Galerie-Bilder ansehen →
        </Link>
      </section>
    </main>
  );
}