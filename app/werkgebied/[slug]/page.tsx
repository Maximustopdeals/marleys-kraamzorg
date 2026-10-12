import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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

/* ✅ Server Component */
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
      { "@type": "City", name: area.naam },
      { "@type": "AdministrativeArea", name: "Rotterdam en omgeving" },
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════ HERO — high-end magenta ═══════ */}
      <section className="relative w-full min-h-[60vh] md:min-h-[55vh] overflow-hidden flex items-center justify-center bg-primary">
        {/* Zachte decoratieve gloed */}
        <div
          className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blush/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-berry-dark/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-28 md:pt-32 pb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F5C8D8"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="font-cinzel text-xs uppercase tracking-[0.12em] text-cream/90">
              {area.naam}
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-cinzel text-3xl md:text-4xl lg:text-5xl uppercase text-cream leading-[1.1] tracking-tight mb-8">
            {area.heroH1}
          </h1>

          {/* Sierlijn met ✦ */}
          <div className="my-8 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-starlight/50" />
            <span className="text-starlight">✦</span>
            <span className="h-px w-16 bg-starlight/50" />
          </div>

          {/* Subtitel */}
          <p className="font-cinzel text-sm md:text-base uppercase tracking-[0.15em] text-starlight mb-10 max-w-2xl mx-auto">
            {area.heroSubtitle}
          </p>

          {/* Knoppen */}
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

        {/* Scroll indicator */}
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

      {/* ═══════ INTRO — high-end tekstsectie ═══════ */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div
          className="pointer-events-none absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blush/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-main relative">
          <div className="mx-auto max-w-3xl">
            {/* Klein badge */}
            <p className="eyebrow mb-4 text-center">Welkom</p>

            {/* Sierlijn */}
            <div className="mx-auto mb-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary">✦</span>
              <span className="h-px w-12 bg-primary/40" />
            </div>

            <div className="space-y-5">
              {area.intro.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-sans text-base md:text-lg text-berry-dark/80 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WAAROM KRAAMZORG ═══════ */}
      <section className="bg-cream-beige py-20 sm:py-24">
        <div className="container-main">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-4">Waarom hier</p>

            <h2 className="font-cinzel text-2xl md:text-3xl uppercase text-primary mb-4">
              {area.whyTitle}
            </h2>

            {/* Gradient sierlijn */}
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-16 bg-primary/40" />
              <span className="text-primary text-sm">✦</span>
            </div>

            <div className="space-y-5">
              {area.whyText.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-sans text-base text-berry-dark/80 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ OVER MARLEY'S ═══════ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-main">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-4">Over mij</p>

            <h2 className="font-cinzel text-2xl md:text-3xl uppercase text-primary mb-4">
              {area.aboutTitle}
            </h2>

            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-16 bg-primary/40" />
              <span className="text-primary text-sm">✦</span>
            </div>

            <div className="space-y-5">
              {area.aboutText.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-sans text-base text-berry-dark/80 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WIJKEN ═══════ */}
      <section className="bg-cream-beige py-20 sm:py-24">
        <div className="container-main">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-4">Wijken</p>

            <h2 className="font-cinzel text-2xl md:text-3xl uppercase text-primary mb-4">
              {area.wijkenTitle}
            </h2>

            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-16 bg-primary/40" />
              <span className="text-primary text-sm">✦</span>
            </div>

            <p className="font-sans text-base text-berry-dark/80 leading-relaxed mb-8">
              {area.wijkenIntro}
            </p>

            <ul className="space-y-3">
              {area.wijken.map((wijk, i) => (
                <li
                  key={i}
                  className="group flex items-start gap-4 rounded-xl bg-white px-5 py-4 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9A1E61"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span className="font-sans text-sm leading-relaxed text-berry-dark/80">
                    {wijk}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-main">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="eyebrow mb-3">Goed om te weten</p>

              <h2 className="font-cinzel text-2xl md:text-3xl uppercase text-primary">
                Veelgestelde vragen
              </h2>

              <div className="mx-auto my-8 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-primary/40" />
                <span className="text-primary">✦</span>
                <span className="h-px w-12 bg-primary/40" />
              </div>
            </div>

            <div className="mt-10">
              <Accordion
                items={area.faq.map((f) => ({
                  question: f.question,
                  answer: f.answer,
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ ANDERE WERKGEBIEDEN ═══════ */}
      <section className="bg-cream-beige py-20 sm:py-24">
        <div className="container-main">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="eyebrow mb-3">Ook in de regio</p>

              <h2 className="font-cinzel text-2xl md:text-3xl uppercase text-primary">
                Kraamzorg in de regio
              </h2>

              <div className="mx-auto my-8 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-primary/40" />
                <span className="text-primary">✦</span>
                <span className="h-px w-12 bg-primary/40" />
              </div>

              <p className="mx-auto max-w-xl font-sans text-base text-berry-dark/70 mb-12">
                Naast {area.naam} ben ik ook actief in de volgende gemeenten:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {otherAreas.map((other) => (
                <Link
                  key={other.slug}
                  href={`/werkgebied/${other.slug}/`}
                  className="group flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/[0.04] hover:shadow-card-hover"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9A1E61"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span className="font-cinzel text-sm uppercase text-berry-dark transition-colors group-hover:text-primary">
                    {other.naam}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA — high-end magenta ═══════ */}
      <section className="relative overflow-hidden bg-primary py-20 sm:py-24">
        {/* Zachte gloed */}
        <div
          className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blush/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-berry-dark/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-main relative z-10 text-center">
          <h2 className="font-cinzel text-2xl md:text-3xl lg:text-4xl uppercase text-cream mb-6">
            Klaar voor jouw kraamzorg in {area.naam}?
          </h2>

          <div className="mx-auto my-8 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-starlight/50" />
            <span className="text-starlight">✦</span>
            <span className="h-px w-16 bg-starlight/50" />
          </div>

          <p className="mx-auto mb-10 max-w-2xl font-sans text-base md:text-lg leading-relaxed text-cream/90">
            Neem vandaag nog contact op voor een vrijblijvende kennismaking.
            Samen bespreken we jouw wensen en kijken we hoe ik jouw
            kraamperiode in {area.naam} zo mooi mogelijk kan maken.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/"
              className="inline-flex h-11 items-center justify-center rounded-full bg-cream px-6 font-cinzel text-xs uppercase tracking-[0.06em] text-primary shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-blush"
            >
              Check beschikbaarheid
            </Link>
            <a
              href="tel:+31645041484"
              className="inline-flex h-11 items-center justify-center rounded-full border border-cream/50 px-6 font-cinzel text-xs uppercase tracking-[0.06em] text-cream transition-all duration-300 hover:bg-cream hover:text-primary"
            >
              Bel direct
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
