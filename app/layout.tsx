import type { Metadata, Viewport } from "next";
import { Cinzel, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";

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

/* ✅ NIEUW: viewport als aparte export (Next.js 13+ vereist dit) */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#9A1E61",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marleyskraamzorg.nl"),

  /* ✅ AANGEPAST: title nu 50 tekens i.p.v. 66 */
  title: {
    default: "Kraamzorg Rotterdam | met een Vast Gezicht",
    template: "%s | Marley's Kraamzorg",
  },

  /* ✅ AANGEPAST: description nu 132 tekens i.p.v. 157 */
  description:
    "Kleinschalige kraamzorg in Rotterdam door Lisa. Eén vast gezicht van dag 1, 24/7 bereikbaar. Persoonlijk, betrokken en deskundig.",

  /* ✅ VERWIJDERD: keywords (Google negeert deze al jaren) */

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
        /* ✅ AANGEPAST: absolute URL i.p.v. relatief */
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
  /* ✅ VERWIJDERD: theme-color uit other (staat nu in viewport) */
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
        <FloatingActions />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
