import type { Metadata } from "next"; 
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Marley's Kraamzorg in Rotterdam. Bel, mail of app voor een vrijblijvend kennismakingsgesprek over persoonlijke kraamzorg.",
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
    title: "Contact | Marley's Kraamzorg Rotterdam",
    description:
      "Neem contact op voor een vrijblijvend kennismakingsgesprek. Ik beantwoord graag al je vragen over persoonlijke kraamzorg in Rotterdam.",
    images: [
      {
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
