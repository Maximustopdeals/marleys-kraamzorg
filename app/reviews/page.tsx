import type { Metadata } from "next";
import ReviewsClient from "./ReviewsClient";

export const metadata: Metadata = {
  /* ✅ AANGEPAST: alleen unieke titel — template voegt "| Marley's Kraamzorg" toe
     Totaal in browser: "Ervaringen | Marley's Kraamzorg" (32 tekens) */
  title: "Ervaringen",

  /* ✅ AANGEPAST: 154 → 148 tekens, blijft binnen de limiet */
  description:
    "Echte ervaringen van ouders met Marley's Kraamzorg in Rotterdam. Lees hoe Lisa gezinnen ondersteunt met persoonlijke en liefdevolle kraamzorg.",

  /* ✅ VERWIJDERD: keywords (Google negeert dit al jaren) */

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },

  alternates: {
    canonical: "https://www.marleyskraamzorg.nl/reviews/",
  },

  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.marleyskraamzorg.nl/reviews/",
    siteName: "Marley's Kraamzorg",
    /* ✅ OG titel mag volledig zijn — geen template hier */
    title: "Ervaringen | Marley's Kraamzorg Rotterdam",
    description:
      "Echte ervaringen van ouders met Marley's Kraamzorg. Lees hoe Lisa gezinnen ondersteunt met persoonlijke kraamzorg in Rotterdam.",
    images: [
      {
        /* ✅ AANGEPAST: 1200×630 = correcte OG-verhouding (1.91:1) */
        url: "https://www.marleyskraamzorg.nl/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Reviews Marley's Kraamzorg Rotterdam",
      },
    ],
  },
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
