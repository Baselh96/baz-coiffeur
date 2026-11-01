// src/components/PromoBanner.tsx
import { Car, Ticket } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function PromoBanner() {
  return (
    <div className="bg-amber-500 text-black py-4 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left font-medium">
        <div className="flex items-center gap-3">
          <Car className="w-6 h-6 shrink-0" />
          <span>🚗 {SALON_DATA.parking}</span>
        </div>
        <div className="flex items-center gap-3">
          <Ticket className="w-6 h-6 shrink-0" />
          <span>✂️ {SALON_DATA.voucherText}</span>
        </div>
      </div>
    </div>
  );
}