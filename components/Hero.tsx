// src/components/Hero.tsx
import Image from 'next/image';
import { SALON_DATA } from '../data/salonData';

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white text-center">
      <Image
        src="/images/salon-main.jpeg"
        alt="BAZ Coiffeur Salon"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-5xl font-bold tracking-wide text-amber-400 mb-4">
          {SALON_DATA.name}
        </h1>
        <p className="text-xl md:text-2xl mb-6 font-light">
          {SALON_DATA.slogan} – Zürich Oerlikon
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${SALON_DATA.phone}`}
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-md transition"
          >
            Jetzt anrufen ({SALON_DATA.phone})
          </a>
          <a
            href="#services"
            className="border border-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-md transition"
          >
            Unsere Angebote
          </a>
        </div>
      </div>
    </section>
  );
}