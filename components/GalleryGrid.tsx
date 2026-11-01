// src/components/GalleryGrid.tsx
import Image from 'next/image';

const galleryImages = [
  { src: '/images/salon-main.jpeg', title: 'Herren- & Barberstühle', category: 'Salon' },
  { src: '/images/rezeption.jpeg', title: 'Empfang & Produkte', category: 'Salon' },
  { src: '/images/wartezimmer.jpeg', title: 'Lounge & Wartebereich', category: 'Salon' },
  { src: '/images/waschplatz-1.jpeg', title: 'Waschplatzbereich', category: 'Waschplatz' },
  { src: '/images/haarschneide-platz.jpeg', title: 'Stylingplatz', category: 'Salon' },
];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
      {galleryImages.map((img, idx) => (
        <div key={idx} className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
          <Image
            src={img.src}
            alt={img.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span className="text-white font-semibold">{img.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}