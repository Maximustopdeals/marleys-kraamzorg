import type { Metadata } from "next";
import OverMijClient from "./OverMijClient";

export const metadata: Metadata = {
  /* ✅ AANGEPAST: alleen unieke titel — de layout-template voegt "| Marley's Kraamzorg" toe */
  title: "Over Lisa",

  description:
    "Het verhaal achter Marley's Kraamzorg. Lisa vertelt over haar dochter Marley en waarom zij koos voor kleinschalige kraamzorg in Rotterdam.",

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },

  alternates: {
    canonical: "https://www.marleyskraamzorg.nl/over-mij/",
  },

  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.marleyskraamzorg.nl/over-mij/",
    siteName: "Marley's Kraamzorg",
    /* ✅ OG titel mag wél volledig zijn — hier wordt geen template toegepast */
    title: "Over Lisa | Marley's Kraamzorg Rotterdam",
    description:
      "Het verhaal achter Marley's Kraamzorg. Lisa vertelt over haar dochter Marley en haar missie: persoonlijke kraamzorg in Rotterdam.",
    images: [
      {
        url: "https://www.marleyskraamzorg.nl/images/lisa.jpg",
        width: 800,
        height: 1067,
        alt: "Lisa - Oprichter van Marley's Kraamzorg in Rotterdam",
      },
    ],
  },
};

export default function OverMijPage() {
  return <OverMijClient />;
}
