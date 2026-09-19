import type { Metadata } from "next";
import { Cinzel, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomWidgets from "@/components/BottomWidgets";
import JsonLd from "@/components/JsonLd";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-cinzel",
  display: "swap",
  preload: true,
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Kraamzorg Rotterdam | met een Vast Gezicht - Marley's Kraamzorg",
    template: "%s | Marley's Kraamzorg",
  },
  description:
    "Marley's Kraamzorg biedt persoonlijke kraamzorg in Rotterdam en omgeving. Eén vast gezicht, 24/7 bereikbaar. Verzekerd van een warme, zorgzame start.",
  keywords: [
    "kraamzorg Rotterdam",
    "kraamverzorgende Rotterdam",
    "kraamzorg Capelle aan den IJssel",
    "kraamzorg Barendrecht",
    "persoonlijke kraamzorg",
    "vast gezicht kraamzorg",
    "kraamzorg 24/7",
    "kraamverzorging Rotterdam",
    "kraamtijd begeleiding",
    "newborn zorg Rotterdam",
  ],
  metadataBase: new URL("https://www.marleyskraamzorg.nl"),
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.marleyskraamzorg.nl",
    siteName: "Marley's Kraamzorg",
    title: "Kraamzorg Rotterdam | met een Vast Gezicht - Marley's Kraamzorg",
    description:
      "Persoonlijke kraamzorg in Rotterdam en omgeving. Eén vast gezicht, 24/7 bereikbaar.",
    images: [
      {
        url: "/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Marley's Kraamzorg - Persoonlijke kraamzorg Rotterdam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marley's Kraamzorg - Persoonlijke kraamzorg Rotterdam",
    description: "Eén vast gezicht, 24/7 bereikbaar. Verzekerd van een warme start.",
    images: ["/images/hero-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  verification: {
    google: "HDkkplgZsbxIfjiX_7m2RFRZVJpi9O-z3WTJD9EoHO0",
  },
  alternates: {
    canonical: "https://www.marleyskraamzorg.nl",
  },
  authors: [{ name: "Lisa - Marley's Kraamzorg" }],
  category: "Kraamzorg",
  classification: "Healthcare / Maternity Care",
  referrer: "origin-when-cross-origin",
  other: {
    "theme-color": "#9A1E61",
    "msapplication-TileColor": "#9A1E61",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={`${cinzel.variable} ${openSans.variable} min-h-screen antialiased`}>
        <JsonLd />
        <a href="#main-content" className="skip-link">
          Sla navigatie over
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <BottomWidgets />
        <GoogleTagManager gtmId="GTM-NPFPBCNH" />
        <GoogleAnalytics gaId="G-7E6L5PXENM" />
      </body>
    </html>
  );
}
