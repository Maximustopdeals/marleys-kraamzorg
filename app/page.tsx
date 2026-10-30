import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  // ═══════ BASIS SEO ═══════
  title: "Kraamzorg Rotterdam | met een Vast Gezicht",
  description:
    "Kraamzorg in Rotterdam, vernoemd naar dochtertje Marley. Persoonlijke zorg met één vast gezicht, 24/7 bereikbaar. Plan een intake.",
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

  // ═══════ OPEN GRAPH (Facebook, WhatsApp, LinkedIn) ═══════
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.marleyskraamzorg.nl/",
    siteName: "Marley's Kraamzorg",
    title: "Kraamzorg Rotterdam | met een Vast Gezicht",
    description:
      "Kraamzorg in Rotterdam, vernoemd naar dochtertje Marley. Persoonlijke zorg met één vast gezicht, 24/7 bereikbaar.",
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
    title: "Kraamzorg Rotterdam | met een Vast Gezicht",
    description:
      "Kraamzorg in Rotterdam, vernoemd naar dochtertje Marley. Persoonlijke zorg met één vast gezicht, 24/7 bereikbaar.",
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

  // ═══════ VERIFICATIE (indien nodig) ═══════
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function HomePage() {
  return <HomeClient />;
}
