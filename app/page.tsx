import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  // ═══════ BASIS SEO ═══════
  // Titel: Exacte match met H1, zoekterm vooraan.
  title: "Kraamzorg Rotterdam | 1 vaste kraamverzorgende",
  
  // Meta Description: Krachtig, leesbaar, bevat de USP en CTA. Geen onnodige herhaling.
  description:
    "Kraamzorg Rotterdam met één vaste kraamverzorgende. Persoonlijke zorg van Lisa voor jou, je baby en je gezin. KCKZ-gecertificeerd en 24/7 bereikbaar.",
  
  keywords: [
    "kraamzorg Rotterdam",
    "kraamverzorgende Rotterdam",
    "persoonlijke kraamzorg",
    "kraamzorg met vast gezicht",
    "Marley's Kraamzorg",
    "kraamzorg aanvragen Rotterdam",
  ],
  authors: [{ name: "Marley's Kraamzorg" }],
  creator: "Marley's Kraamzorg",
  publisher: "Marley's Kraamzorg",

  // ═══════ CANONICAL ═══════
  alternates: {
    canonical: "https://www.marleyskraamzorg.nl/",
  },

  // ═══════ ROBOTS ═══════
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // ═══════ OPEN GRAPH ═══════
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.marleyskraamzorg.nl/",
    siteName: "Marley's Kraamzorg",
    title: "Kraamzorg Rotterdam | 1 vaste kraamverzorgende",
    description:
      "Kraamzorg Rotterdam met één vaste kraamverzorgende. Persoonlijke zorg van Lisa voor jou, je baby en je gezin. KCKZ-gecertificeerd en 24/7 bereikbaar.",
    images: [
      {
        url: "https://www.marleyskraamzorg.nl/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marley's Kraamzorg - Persoonlijke kraamzorg in Rotterdam",
      },
    ],
  },

  // ═══════ TWITTER CARD ═══════
  twitter: {
    card: "summary_large_image",
    title: "Kraamzorg Rotterdam | 1 vaste kraamverzorgende",
    description:
      "Kraamzorg Rotterdam met één vaste kraamverzorgende. Persoonlijke zorg van Lisa voor jou, je baby en je gezin. KCKZ-gecertificeerd en 24/7 bereikbaar.",
    images: ["https://www.marleyskraamzorg.nl/images/og-image.jpg"],
  },

  // ═══════ METADATA BASE ═══════
  metadataBase: new URL("https://www.marleyskraamzorg.nl"),

  // ═══════ ICONS ═══════
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
