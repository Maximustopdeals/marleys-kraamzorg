import type { Metadata } from "next";
import OverMijClient from "./OverMijClient";

export const metadata: Metadata = {
  title:
    "Ontdek Lisa van Marley's Kraamzorg in Rotterdam | Persoonlijke Kraamzorg",
  description:
    "Leer Lisa kennen van Marley's Kraamzorg in Rotterdam. Persoonlijke en warme zorg voor jou en je baby, vernoemd naar haar dochtertje Marley. Lees haar verhaal.",
  keywords: [
    "Lisa kraamverzorgende Rotterdam",
    "Marley's Kraamzorg verhaal",
    "persoonlijke kraamzorg Rotterdam",
    "kraamverzorgende Lisa",
    "kraamzorg met gevoel",
    "over Marley's Kraamzorg",
  ],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://www.marleyskraamzorg.nl/over-mij/",
  },
  openGraph: {
    type: "profile",
    locale: "nl_NL",
    url: "https://www.marleyskraamzorg.nl/over-mij/",
    siteName: "Marley's Kraamzorg",
    title: "Ontdek Lisa van Marley's Kraamzorg in Rotterdam",
    description:
      "Persoonlijke en warme zorg voor jou en je baby, vernoemd naar haar dochtertje Marley.",
    images: [
      {
        url: "https://www.marleyskraamzorg.nl/wp-content/uploads/2025/05/Foto_Lisa-kraamerzorgende-Marleyskraamzorg.webp",
        width: 800,
        height: 1067,
        alt: "Lisa - Oprichter van Marley's Kraamzorg",
      },
    ],
  },
};

export default function OverMijPage() {
  return <OverMijClient />;
}
