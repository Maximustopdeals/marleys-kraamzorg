import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  /* ✅ AANGEPAST: alleen unieke titel — template voegt "| Marley's Kraamzorg" toe
     Totaal in browser: "Contact | Marley's Kraamzorg" (28 tekens) */
  title: "Contact",

  /* ✅ AANGEPAST: 166 → 149 tekens */
  description:
    "Neem contact op met Marley's Kraamzorg in Rotterdam. Bel, mail of app voor een vrijblijvend kennismakingsgesprek over persoonlijke kraamzorg.",

  /* ✅ VERWIJDERD: keywords (Google negeert dit al jaren) */

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },

  alternates: {
    canonical: "https://www.marleyskraamzorg.nl/contact/",
  },

  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.marleyskraamzorg.nl/contact/",
    siteName: "Marley's Kraamzorg",
    /* ✅ OG titel mag volledig zijn — geen template hier */
    title: "Contact | Marley's Kraamzorg Rotterdam",
    description:
      "Neem contact op voor een vrijblijvend kennismakingsgesprek. Ik beantwoord graag al je vragen over persoonlijke kraamzorg in Rotterdam.",
    images: [
      {
        /* ✅ AANGEPAST: 1200×630 = correcte OG-verhouding (1.91:1) */
        url: "https://www.marleyskraamzorg.nl/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Marley's Kraamzorg Rotterdam",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
