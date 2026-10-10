import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { StarIcon } from "@/components/StarIcon";
import Accordion from "@/components/Accordion";
import {
  werkgebieden,
  getWerkgebiedBySlug,
  getAllSlugs,
} from "@/data/werkgebieden";

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
          width: 1200,
          height: 630,
          alt: `Kraamzorg ${area.naam} - Marley's Kraamzorg`,
        },
      ],
    },
  };
}

/* ✅ Server Component — geen "use client" meer.
   De pagina wordt volledig op de server gerenderd als HTML.
   Alleen de Accordion (FAQ) blijft een Client Component. */
export default async function WerkgebiedDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = getWerkgebiedBySlug(slug);
  if (!area) notFound();

  const otherAreas = werkgebieden.filter((w) => w.slug !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.marleyskraamzorg.nl/#business",
    name: `Marley's Kraamzorg - ${area.naam}`,
    description: area.metaDescription,
    url: `https://www.marleyskraamzorg.nl/werkgebied/${area.slug}/`,
    image: "https://www.marleyskraamzorg.nl/images/hero-banner.jpg",
    logo: "https://www.marleyskraamzorg.nl/images/logo.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dr. J.J.P. Oudsingel 62",
      addressLocality: "Rotterdam",
      addressRegion: "Zuid-Holland",
      postalCode: "3067 EH",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.9471597,
      longitude: 4.5466515,
    },
    hasMap: "https://www.google.com/maps/place/Marley's+Kraamzorg/@51.9472273,4.5463225,17z",
    telephone: "+31-6-45041484",
    email: "info@marleyskraamzorg.nl",
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "22:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "85",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      {
        "@type": "City",
        name: area.naam,
      },
      {
        "@type": "AdministrativeArea",
        name: "Rotterdam en omgeving",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════ HERO — Magenta Cinzel-stijl ═══════ */}
      <section className="relative w-full min-h-[55vh] md:min-h-[50vh] overflow-hidden flex items-center justify-center bg-primary">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `radial-gradient(circle, #FDF9F4 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-cream/5" />
          <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-cream/5" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 md:pt-24 pb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E8D5C4"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="font-cinzel text-xs uppercase tracking-[0.12em] text-cream/90">
              Marley&apos;s Kraamzorg — {area.naam}
            </span>
          </div>

          <h1
            className="text-2xl md:text-4xl lg:text-5xl uppercase text-cream leading-tight tracking-tight mb-6"
            style={{ fontFamily: "Cinzel, Georgia, serif" }}
          >
            {area.heroH1}
          </h1>

          <div className="w-16 h-0.5 bg-starlight/50 mx-auto mb-6" />

          <p className="font-cinzel text-sm md:text-base uppercase tracking-[0.15em] text-starlight mb-8">
            {area.heroSubtitle}
          </p>

          <div className="flex justify-center mb-8">
            <StarIcon
              size="md"
              fillColor="#E8D5C4"
              strokeColor="#FDF9F4"
              animate
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center font-cinzel uppercase tracking-[0.06em] text-xs rounded-full transition-all duration-300 h-11 px-6 bg-cream text-primary shadow-glow hover:bg-blush hover:-translate-y-0.5"
            >
              Meld je aan
            </Link>
            <a
              href="tel:+31645041484"
              className="inline-flex items-center justify-center font-cinzel uppercase tracking-[0.06em] text-xs rounded-full transition-all duration-300 h-11 px-6 border border-cream/50 text-cream hover:bg-cream hover:text-primary"
            >
              Bel direct
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/50">
          <span className="text-xs font-cinzel uppercase tracking-wider">
            Scroll
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-bounce-gentle"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ═══════ INTRO ═══════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-5">
              {area.intro.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-body text-base md:text-lg text-berry-dark/80 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WAAROM KRAAMZORG ═══════ */}
      <section className="bg-[#FAF4EE] py-16 md:py-20">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cinzel text-2xl md:text-3xl uppercase text-primary mb-4">
              {area.whyTitle}
            </h2>
            <div className="w-16 h-0.5 bg-primary mb-8" />
            <div className="space-y-5">
              {area.whyText.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-body text-base text-berry-dark/80 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ OVER MARLEY'S ═══════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cinzel text-2xl md:text-3xl uppercase text-primary mb-4">
              {area.aboutTitle}
            </h2>
            <div className="w-16 h-0.5 bg-primary mb-8" />
            <div className="space-y-5">
              {area.aboutText.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-body text-base text-berry-dark/80 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WIJKEN ═══════ */}
      <section className="bg-[#FAF4EE] py-16 md:py-20">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cinzel text-2xl md:text-3xl uppercase text-primary mb-4">
              {area.wijkenTitle}
            </h2>
            <div className="w-16 h-0.5 bg-primary mb-6" />
            <p className="font-body text-base text-berry-dark/80 leading-relaxed mb-8">
              {area.wijkenIntro}
            </p>
            <ul className="space-y-3">
              {area.wijken.map((wijk, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 shadow-card"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9A1E61"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 mt-0.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="font-body text-sm text-berry-dark/80">
                    {wijk}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cinzel text-2xl md:text-3xl uppercase text-primary text-center mb-4">
              Veelgestelde vragen
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-10" />
            {/* Alleen de accordion blijft Client Component */}
            <Accordion
              items={area.faq.map((f) => ({
                question: f.question,
                answer: f.answer,
              }))}
            />
          </div>
        </div>
      </section>

      {/* ═══════ ANDERE WERKGEBIEDEN ═══════ */}
      <section className="bg-[#FAF4EE] py-16 md:py-20">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-cinzel text-2xl md:text-3xl uppercase text-primary text-center mb-4">
              Kraamzorg in de regio
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
            <p className="font-body text-base text-berry-dark/70 text-center max-w-xl mx-auto mb-10">
              Naast {area.naam} ben ik ook actief in de volgende gemeenten:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherAreas.map((other) => (
                <Link
                  key={other.slug}
                  href={`/werkgebied/${other.slug}/`}
                  className="group bg-white hover:bg-primary/[0.04] rounded-xl px-5 py-4 flex items-center gap-3 transition-all duration-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9A1E61"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="font-cinzel text-sm uppercase text-berry-dark group-hover:text-primary transition-colors">
                    {other.naam}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="relative bg-primary py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #FDF9F4 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-cream/5" />
        <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-cream/5" />

        <div className="container-main text-center relative z-10">
          <h2 className="font-cinzel text-2xl md:text-3xl lg:text-4xl uppercase text-cream mb-6">
            Klaar voor jouw kraamzorg in {area.naam}?
          </h2>
          <div className="w-16 h-0.5 bg-cream/50 mx-auto mb-8" />
          <p className="font-body text-base md:text-lg text-cream/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Neem vandaag nog contact op voor een vrijblijvende kennismaking. Samen
            bespreken we jouw wensen en kijken we hoe ik jouw kraamperiode in{" "}
            {area.naam} zo mooi mogelijk kan maken.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center font-cinzel uppercase tracking-[0.06em] text-xs rounded-full transition-all duration-300 h-11 px-6 bg-cream text-primary shadow-glow hover:bg-blush hover:-translate-y-0.5"
            >
              Check beschikbaarheid
            </Link>
            <a
              href="tel:+31645041484"
              className="inline-flex items-center justify-center font-cinzel uppercase tracking-[0.06em] text-xs rounded-full transition-all duration-300 h-11 px-6 border border-cream/50 text-cream hover:bg-cream hover:text-primary"
            >
              Bel direct
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
