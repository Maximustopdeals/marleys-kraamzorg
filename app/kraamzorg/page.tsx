import type { Metadata } from "next";
import KraamzorgClient from "./KraamzorgClient";

export const metadata: Metadata = {
  title: "Kraamzorg Rotterdam | Persoonlijk",
  description:
    "Persoonlijke kraamzorg in Rotterdam met één vast gezicht door Lisa. Ook bij bijzondere situaties: thuisbevalling, alleenstaand ouderschap of premature baby.",
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
    title: "Kraamzorg Rotterdam | Persoonlijk | Marley's Kraamzorg",
    description:
      "Persoonlijke kraamzorg in Rotterdam met één vast gezicht. Ook bij bijzondere situaties zoals thuisbevalling, alleenstaand ouderschap of premature baby's.",
    images: [
      {
        url: "https://www.marleyskraamzorg.nl/images/afbeelding-pasgeboren-baby.webp",
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
