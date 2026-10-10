import type { Metadata } from "next";
import KraamzorgClient from "./KraamzorgClient";

export const metadata: Metadata = {
  /* ✅ AANGEPAST: alleen unieke titel — template voegt "| Marley's Kraamzorg" toe
     Totaal in browser: "Kraamzorg Rotterdam | Persoonlijk | Marley's Kraamzorg" (58 tekens) */
  title: "Kraamzorg Rotterdam | Persoonlijk",

  /* ✅ AANGEPAST: 196 → 154 tekens */
  description:
    "Persoonlijke kraamzorg in Rotterdam met één vast gezicht door Lisa. Ook bij bijzondere situaties: thuisbevalling, alleenstaand ouderschap of premature baby.",

  /* ✅ VERWIJDERD: keywords (Google negeert dit al jaren) */

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },

  alternates: {
    canonical: "https://www.marleyskraamzorg.nl/kraamzorg/",
  },

  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.marleyskraamzorg.nl/kraamzorg/",
    siteName: "Marley's Kraamzorg",
    /* ✅ OG titel mag volledig zijn — geen template hier */
    title: "Kraamzorg Rotterdam | Persoonlijk | Marley's Kraamzorg",
    description:
      "Persoonlijke kraamzorg in Rotterdam met één vast gezicht. Ook bij bijzondere situaties zoals thuisbevalling, alleenstaand ouderschap of premature baby's.",
    images: [
      {
        /* ✅ AANGEPAST: 1200×630 = correcte OG-verhouding (1.91:1) */
        url: "https://www.marleyskraamzorg.nl/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Kraamzorg Rotterdam - Marley's Kraamzorg",
      },
    ],
  },
};

export default function KraamzorgPage() {
  return <KraamzorgClient />;
}
