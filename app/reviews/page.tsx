import type { Metadata } from "next";
import ReviewsClient from "./ReviewsClient";

export const metadata: Metadata = {
  title:
    "Ervaringen met Marley's Kraamzorg | Professionele kraamzorg Rotterdam",
  description:
    "Echte ervaringen van ouders met Marley's Kraamzorg. Lees hoe Lisa gezinnen ondersteunt met professionele en liefdevolle kraamzorg in Rotterdam.",
  keywords: [
    "reviews kraamzorg Rotterdam",
    "ervaringen Marley's Kraamzorg",
    "kraamverzorgende review",
    "kraamzorg ervaring",
    "Lisa kraamzorg review",
  ],
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
    title: "Ervaringen met Marley's Kraamzorg | Professionele kraamzorg Rotterdam",
    description:
      "Echte ervaringen van ouders met Marley's Kraamzorg. Lees hoe Lisa gezinnen ondersteunt.",
    images: [
      {
        url: "https://www.marleyskraamzorg.nl/images/hero-banner.jpg",
        width: 1200,
        height: 600,
        alt: "Reviews Marley's Kraamzorg Rotterdam",
      },
    ],
  },
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
