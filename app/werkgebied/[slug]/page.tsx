import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { werkgebieden, getWerkgebiedBySlug, getAllSlugs } from "@/data/werkgebieden";
import WerkgebiedDetailClient from "./WerkgebiedDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getWerkgebiedBySlug(slug);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,

    /* ✅ NIEUW: expliciete robots-configuratie */
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },

    alternates: {
      canonical: `https://www.marleyskraamzorg.nl/werkgebied/${slug}/`,
    },

    openGraph: {
      type: "article",
      locale: "nl_NL",
      url: `https://www.marleyskraamzorg.nl/werkgebied/${slug}/`,
      siteName: "Marley's Kraamzorg",
      title: area.metaTitle,
      description: area.metaDescription,
      images: [
        {
          url: "https://www.marleyskraamzorg.nl/images/hero-banner.jpg",
          /* ✅ AANGEPAST: 600 → 630 (correcte OG-verhouding) */
          width: 1200,
          height: 630,
          alt: `Kraamzorg ${area.naam} - Marley's Kraamzorg`,
        },
      ],
    },
  };
}

export default async function WerkgebiedDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = getWerkgebiedBySlug(slug);
  if (!area) notFound();

  const otherAreas = werkgebieden.filter((w) => w.slug !== slug);

  return <WerkgebiedDetailClient area={area} otherAreas={otherAreas} />;
}
