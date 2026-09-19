import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Marley's Kraamzorg - Persoonlijke Kraamzorg Rotterdam",
  description:
    "Neem contact op met Marley's Kraamzorg in Rotterdam. Bel, mail of app voor een vrijblijvend kennismakingsgesprek. Ik sta klaar voor al je vragen over kraamzorg.",
  keywords: [
    "contact kraamzorg Rotterdam",
    "kraamzorg afspraak maken",
    "Marley's Kraamzorg contact",
    "kraamverzorgende Rotterdam",
    "aanmelden kraamzorg",
    "kennismakingsgesprek kraamzorg",
  ],
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
    title: "Contact | Marley's Kraamzorg - Kraamzorg Rotterdam",
    description:
      "Neem contact op voor een vrijblijvend kennismakingsgesprek. Ik beantwoord graag al je vragen over persoonlijke kraamzorg in Rotterdam.",
    images: [
      {
        url: "https://www.marleyskraamzorg.nl/images/hero-banner.jpg",
        width: 1200,
        height: 600,
        alt: "Contact Marley's Kraamzorg Rotterdam",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
