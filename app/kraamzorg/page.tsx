import type { Metadata } from "next";
import KraamzorgClient from "./KraamzorgClient";

export const metadata: Metadata = {
  title: "Kraamzorg Rotterdam | Persoonlijk & 1 Vast Gezicht | Marley's Kraamzorg",
  description:
    "Op zoek naar kraamzorg in Rotterdam met 1 vast gezicht? Marley's Kraamzorg biedt persoonlijke begeleiding door Lisa. Ook bij bijzondere situaties zoals thuisbevalling, alleenstaand ouderschap of premature baby's.",
  keywords: [
    "kraamzorg Rotterdam",
    "kraamzorg bij bijzondere situaties",
    "thuisbevalling kraamzorg",
    "alleenstaande ouder kraamzorg",
    "premature baby kraamzorg",
    "Marley's Kraamzorg",
    "kraamverzorgende Rotterdam",
    "persoonlijke kraamzorg",
    "kraamtijd",
    "kraamweek",
  ],
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
    title: "Kraamzorg Rotterdam | Persoonlijk & 1 Vast Gezicht | Marley's Kraamzorg",
    description:
      "Persoonlijke kraamzorg in Rotterdam met 1 vast gezicht. Ook bij bijzondere situaties zoals thuisbevalling, alleenstaand ouderschap of premature baby's.",
    images: [
      {
        url: "https://www.marleyskraamzorg.nl/images/hero-banner.jpg",
        width: 1200,
        height: 600,
        alt: "Kraamzorg Rotterdam - Marley's Kraamzorg",
      },
    ],
  },
};

export default function KraamzorgPage() {
  return <KraamzorgClient />;
}
