import type { Metadata } from "next";
import WerkgebiedClient from "./WerkgebiedClient";

export const metadata: Metadata = {
  /* ✅ AANGEPAST: alleen unieke titel — template voegt "| Marley's Kraamzorg" toe
     Totaal in browser: "Werkgebied | Kraamzorg Rotterdam e.o. | Marley's Kraamzorg" (64 tekens) */
  title: "Werkgebied | Kraamzorg Rotterdam e.o.",

  /* ✅ AANGEPAST: 210 → 155 tekens */
  description:
    "Kraamzorg in Rotterdam, Capelle aan den IJssel, Nieuwerkerk, Krimpen aan den IJssel, Gouda, Waddinxveen, Moordrecht en Zevenhuizen.",

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },

  alternates: {
    /* ✅ AANGEPAST: trailing slash toegevoegd (matcht trailingSlash: true) */
    canonical: "https://www.marleyskraamzorg.nl/werkgebied/",
  },

  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.marleyskraamzorg.nl/werkgebied/",
    siteName: "Marley's Kraamzorg",
    title: "Werkgebied | Kraamzorg Rotterdam en omgeving",
    description:
      "Persoonlijke kraamzorg in Rotterdam, Capelle aan den IJssel, Nieuwerkerk, Krimpen aan den IJssel, Gouda, Waddinxveen, Moordrecht en Zevenhuizen.",
    images: [
      {
        url: "https://www.marleyskraamzorg.nl/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Werkgebied Marley's Kraamzorg - Kraamzorg in Rotterdam en omgeving",
      },
    ],
  },
};

export default function WerkgebiedPage() {
  return <WerkgebiedClient />;
}
