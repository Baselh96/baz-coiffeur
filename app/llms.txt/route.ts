// src/app/llms.txt/route.ts
import { NextResponse } from "next/server";
import { SALON_DATA } from "@/data/salonData";
import { getBasePath } from "@/utils/getBasePath";

export const dynamic = "force-static";

const baseUrl = getBasePath();

export async function GET() {
  const content = `# ${SALON_DATA.name}

> Ihr Coiffeur für die ganze Familie in Zürich Oerlikon. Qualität, Sauberkeit, persönliche Beratung und Kundenzufriedenheit stehen bei uns im Mittelpunkt.

## Kontakt & Standort
- **Adresse:** ${SALON_DATA.address}
- **Telefon:** ${SALON_DATA.phone}
- **Parkplätze:** Parkplätze Nr. 7 und 8 hinter dem Haus vorhanden

## Öffnungszeiten
- **Montag – Freitag:** 09:00 – 19:00
- **Samstag:** 09:00 – 18:00
- **Sonntag:** Geschlossen

## Seiten
- [Startseite](${baseUrl}/): Übersicht und Dienstleistungen
- [Galerie](${baseUrl}/galerien): Impressionen aus dem Salon
- [Kontakt](${baseUrl}/kontakt): Adresse, Öffnungszeiten und Anfahrt

## Dienstleistungen
- **Herren:** Moderne & Klassische Haarschnitte, Bartpflege & Bartformen, Nasen- & Ohrhaar-Entfernung mit Wachs, Augenbrauenformen mit Fadentechnik
- **Damen:** Individuelle Haarschnitte, Professionelle Haarfärbungen, Mèches & Strähnen, Augenbrauenformen mit Fadentechnik
- **Kinder:** Kinderhaarschnitte
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}