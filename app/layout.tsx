import type { Metadata, Viewport } from "next"; 
import { Cinzel, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ClientWidgets from "@/components/ClientWidgets";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-cinzel",
  display: "swap",
  preload: true,
  adjustFontFallback: true, // ✅ NIEUW: Voorkomt dat de browser wacht op het font
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
  display: "swap",
  adjustFontFallback: true, // ✅ NIEUW
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#9A1E61",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marleyskraamzorg.nl"),
  title: {
    default: "Kraamzorg Rotterdam | met een Vast Gezicht",
    template: "%s | Marley's Kraamzorg",
  },
  description:
    "Kraamzorg in Rotterdam, vernoemd naar dochtertje Marley. Persoonlijke zorg, één vast gezicht. Plan een vrijblijvende intake.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.marleyskraamzorg.nl",
    siteName: "Marley's Kraamzorg",
    title: "Kraamzorg Rotterdam | met een Vast Gezicht",
    description:
      "Persoonlijke kraamzorg in Rotterdam met één vast gezicht. 24/7 bereikbaar.",
    images: [
      {
        url: "https://www.marleyskraamzorg.nl/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Marley's Kraamzorg - Persoonlijke kraamzorg Rotterdam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kraamzorg Rotterdam | met een Vast Gezicht",
    description:
      "Eén vast gezicht, 24/7 bereikbaar. Verzekerd van een warme start.",
    images: ["https://www.marleyskraamzorg.nl/images/hero-banner.jpg"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${openSans.variable} min-h-screen antialiased`}
      >
        <JsonLd />
        <a href="#main-content" className="skip-link">
          Sla navigatie over
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <ClientWidgets />
      </body>
    </html>
  );
}
