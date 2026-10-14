import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════ HERO — high-end ═══════ */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div
          className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blush/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
          {/* Klein label met sterretje */}
          <div className="mb-8 flex items-center justify-center gap-2">
            <span className="text-primary text-xs">✦</span>
            <span className="font-cinzel text-[11px] uppercase tracking-[0.28em] text-primary">
              {area.naam}
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-cinzel text-4xl uppercase leading-[1.1] text-berry-dark sm:text-5xl lg:text-6xl">
            {area.heroH1.replace(/ \| Marley's Kraamzorg$/, "")}
          </h1>

          {/* Sierlijn */}
          <div className="mx-auto my-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-primary">✦</span>
            <span className="h-px w-12 bg-primary/40" />
          </div>

          {/* Subtitel */}
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-berry-dark/80 sm:text-xl">
            {area.heroSubtitle}
          </p>

          {/* CTA's */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/contact/"
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              Meld je aan
            </Link>
            <a
              href="tel:+31645041484"
              className="inline-flex h-14 items-center justify-center rounded-full border border-berry-dark/20 px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-berry-dark transition-all duration-300 hover:border-berry-dark hover:bg-berry-dark hover:text-white"
            >
              Bel direct
            </a>
          </div>

          {/* Trust-regel */}
          <p className="mt-8 font-sans text-xs uppercase tracking-[0.2em] text-berry-dark/50">
            KCKZ-gecertificeerd · 24/7 bereikbaar · 5.0 op Google
          </p>
        </div>
      </section>

      {/* ═══════ INTRO ═══════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="text-center">
            <p className="eyebrow mb-4">Welkom</p>

            <div className="mx-auto mb-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary">✦</span>
              <span className="h-px w-12 bg-primary/40" />
            </div>
          </div>

          <div className="space-y-5">
            {area.intro.map((paragraph, i) => (
              <p
                key={i}
                className="font-sans text-base leading-relaxed text-berry-dark/80 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WAAROM ═══════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <p className="eyebrow mb-4">Waarom hier</p>

          <h2 className="font-cinzel text-2xl uppercase leading-tight text-berry-dark md:text-3xl lg:text-4xl">
            {area.whyTitle}
          </h2>

          <div className="mb-8 mt-6 flex items-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-primary text-xs">✦</span>
          </div>

          <div className="space-y-5">
            {area.whyText.map((paragraph, i) => (
              <p
                key={i}
                className="font-sans text-base leading-relaxed text-berry-dark/80"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ OVER ═══════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <p className="eyebrow mb-4">Over mij</p>

          <h2 className="font-cinzel text-2xl uppercase leading-tight text-berry-dark md:text-3xl lg:text-4xl">
            {area.aboutTitle}
          </h2>

          <div className="mb-8 mt-6 flex items-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-primary text-xs">✦</span>
          </div>

          <div className="space-y-5">
            {area.aboutText.map((paragraph, i) => (
              <p
                key={i}
                className="font-sans text-base leading-relaxed text-berry-dark/80"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WIJKEN ═══════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <p className="eyebrow mb-4">Wijken</p>

          <h2 className="font-cinzel text-2xl uppercase leading-tight text-berry-dark md:text-3xl lg:text-4xl">
            {area.wijkenTitle}
          </h2>

          <div className="mb-8 mt-6 flex items-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-primary text-xs">✦</span>
          </div>

          <p className="mb-10 font-sans text-base leading-relaxed text-berry-dark/80">
            {area.wijkenIntro}
          </p>

          <ul className="space-y-3">
            {area.wijken.map((wijk, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-berry-dark/[0.08] bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9A1E61"
                    strokeWidth="2.5"
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
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="text-center">
            <p className="eyebrow mb-4">Goed om te weten</p>

            <h2 className="font-cinzel text-2xl uppercase leading-tight text-berry-dark md:text-3xl lg:text-4xl">
              Veelgestelde{" "}
              <span className="text-primary">vragen</span>
            </h2>

            <div className="mx-auto my-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary">✦</span>
              <span className="h-px w-12 bg-primary/40" />
            </div>
          </div>

          <div className="mt-12 space-y-4">
            {area.faq.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-berry-dark/[0.08] bg-white p-6 shadow-card transition-shadow open:shadow-card-hover"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-cinzel text-base uppercase leading-tight text-berry-dark sm:text-lg">
                    {faq.question}
                  </h3>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 font-sans text-base leading-relaxed text-berry-dark/75">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ANDERE WERKGEBIEDEN ═══════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="text-center">
            <p className="eyebrow mb-4">Ook in de regio</p>

            <h2 className="font-cinzel text-2xl uppercase leading-tight text-berry-dark md:text-3xl lg:text-4xl">
              Kraamzorg in{" "}
              <span className="text-primary">de regio</span>
            </h2>

            <div className="mx-auto my-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary">✦</span>
              <span className="h-px w-12 bg-primary/40" />
            </div>

            <p className="mx-auto mb-12 max-w-xl font-sans text-base leading-relaxed text-berry-dark/70">
              Naast {area.naam} ben ik ook actief in de volgende gemeenten:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherAreas.map((other) => (
              <Link
                key={other.slug}
                href={`/werkgebied/${other.slug}/`}
                className="group flex items-center gap-4 rounded-2xl border border-berry-dark/[0.08] bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card-hover"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="font-cinzel text-sm uppercase tracking-wider text-berry-dark transition-colors group-hover:text-primary">
                  {other.naam}
                </span>
                <span className="ml-auto text-primary transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl">
            Klaar voor jouw kraamzorg in{" "}
            <span className="text-primary">{area.naam}</span>?
          </h2>

          <div className="mx-auto my-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-primary">✦</span>
            <span className="h-px w-12 bg-primary/40" />
          </div>

          <p className="mx-auto mb-10 max-w-2xl font-sans text-base leading-relaxed text-berry-dark/80 md:text-lg">
            Neem vandaag nog contact op voor een vrijblijvende kennismaking.
            Samen bespreken we jouw wensen en kijken we hoe ik jouw
            kraamperiode in {area.naam} zo mooi mogelijk kan maken.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/contact/"
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              Check beschikbaarheid
            </Link>
            <a
              href="tel:+31645041484"
              className="inline-flex h-14 items-center justify-center rounded-full border border-berry-dark/20 px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-berry-dark transition-all duration-300 hover:border-berry-dark hover:bg-berry-dark hover:text-white"
            >
              Bel direct
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
