"use client";

import Link from "next/link";
import Image from "next/image";

/* ── Hero — Editorial Split-Screen met CSS-effecten ── */
function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Subtiel decoratief element op de achtergrond */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-blush/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">

          {/* ─── TEKST LINKS ─── */}
          <div className="relative z-20 max-w-xl pr-4 lg:pr-8">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-primary/50" />
              <span className="font-cinzel text-[11px] uppercase tracking-[0.3em] text-primary">
                Marley&apos;s Kraamzorg
              </span>
            </div>

            {/* 
              HIGH-END H1: 
              De titel is nu opgedeeld in een grote kop en een subtitel.
              Dit voorkomt dat het lange woord 'kraamverzorgende' afbreekt
              en zorgt voor een prachtige, professionele hiërarchie.
            */}
            <h1 className="font-cinzel uppercase tracking-tight text-berry-dark">
              <span className="block text-4xl leading-[1.1] sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem]">
                Kraamzorg Rotterdam
              </span>
              <span className="mt-3 block text-[1.7rem] leading-[1.2] text-primary sm:text-3xl lg:text-[2.2rem] xl:text-[2.5rem]">
                met één vaste kraamverzorgende
              </span>
            </h1>

            <div className="my-8 flex items-center gap-4">
              <span className="h-px w-16 bg-primary/30" />
              <span className="text-primary text-sm">✦</span>
            </div>

            {/* NIEUWE ALINEA: Geen herhaling van de H1, focus op gevoel en conversie */}
            <p className="mb-10 font-sans text-base leading-relaxed text-berry-dark/80 sm:text-lg">
              import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  // ═══════ BASIS SEO ═══════
  title: "Kraamzorg Rotterdam | 1 vaste kraamverzorgende",
  
  // Uw nieuwe, perfect passende meta omschrijving (92 tekens)
  description:
    "Kraamzorg in Rotterdam met één vast gezicht. Persoonlijke zorg voor jou, je baby en je gezin.",
  
  keywords: [
    "kraamzorg Rotterdam",
    "professionele kraamzorg",
    "kraamverzorgende Rotterdam",
    "persoonlijke kraamzorg",
    "kraamzorg met vast gezicht",
    "Marley's Kraamzorg",
    "kraamzorg aanvragen Rotterdam",
  ],
  authors: [{ name: "Marley's Kraamzorg" }],
  creator: "Marley's Kraamzorg",
  publisher: "Marley's Kraamzorg",

  // ═══════ CANONICAL ═══════
  alternates: {
    canonical: "https://www.marleyskraamzorg.nl/",
  },

  // ═══════ ROBOTS ═══════
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // ═══════ OPEN GRAPH ═══════
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.marleyskraamzorg.nl/",
    siteName: "Marley's Kraamzorg",
    title: "Kraamzorg Rotterdam | 1 vaste kraamverzorgende",
    description:
      "Kraamzorg in Rotterdam met één vast gezicht. Persoonlijke zorg voor jou, je baby en je gezin.",
    images: [
      {
        url: "https://www.marleyskraamzorg.nl/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marley's Kraamzorg - Persoonlijke kraamzorg in Rotterdam",
      },
    ],
  },

  // ═══════ TWITTER CARD ═══════
  twitter: {
    card: "summary_large_image",
    title: "Kraamzorg Rotterdam | 1 vaste kraamverzorgende",
    description:
      "Kraamzorg in Rotterdam met één vast gezicht. Persoonlijke zorg voor jou, je baby en je gezin.",
    images: ["https://www.marleyskraamzorg.nl/images/og-image.jpg"],
  },

  // ═══════ METADATA BASE ═══════
  metadataBase: new URL("https://www.marleyskraamzorg.nl"),

  // ═══════ ICONS ═══════
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
            </p>

            {/* DE CTA'S: Unieke bestemmingen voor hogere conversie */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://marleyskraamzorg.mijngeboortezorg.nl/Aanvragen/kraamzorg?mode=frame"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
              >
                Meld je aan
              </a>
              <Link
                href="/contact/"
                className="inline-flex h-14 items-center justify-center rounded-full border border-berry-dark/20 px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-berry-dark transition-all duration-300 hover:border-berry-dark hover:bg-berry-dark hover:text-white"
              >
                Plan een kennismaking
              </Link>
            </div>

            <p className="mt-10 font-sans text-[10px] sm:text-xs uppercase tracking-[0.2em] text-berry-dark/50">
              KCKZ-gecertificeerd · 24/7 bereikbaar · 5.0 op Google
            </p>
          </div>

          {/* ─── FOTO RECHTS ─── */}
          <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none">
            {/* Zachte gloed achter de foto */}
            <div
              className="absolute -inset-4 rounded-[2.5rem] bg-blush/30 blur-2xl"
              aria-hidden="true"
            />

            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_-30px_rgba(74,26,61,0.3)] sm:aspect-[9/11]">
              <Image
                src="/images/baby-portrait.webp"
                alt="Pasgeboren baby in een zachte witte omgeving - Marley's Kraamzorg Rotterdam"
                fill
                priority
                fetchPriority="high"
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40 mix-blend-overlay" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-berry-dark/10 via-transparent to-white/80" />
            </div>

            <div className="absolute -bottom-6 -left-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl border border-berry-dark/5 z-30">
              <span className="text-primary text-2xl">✦</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Section 1: Waarom Marley's — Editorial 3-koloms ── */
function FlipboxSection() {
  const pijlers = [
    {
      nr: "01",
      title: "Deskundige babyzorg",
      text: "Professionele zorg voor je pasgeboren baby door een ervaren kraamverzorgende, met oog voor detail en een warme aanpak.",
    },
    {
      nr: "02",
      title: "Altijd persoonlijk",
      text: "Kleinschalige en betrokken ondersteuning, volledig afgestemd op jouw wensen, gewoontes en gezinsdynamiek.",
    },
    {
      nr: "03",
      title: "Zorg aan huis",
      text: "Rust en comfort in je eigen vertrouwde omgeving. Geen reistijd, geen onbekende plek. Jij bent thuis.",
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">Waarom Marley&apos;s</p>
          <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl">
            Waarom kiezen voor{" "}
            <span className="text-primary">Marley&apos;s Kraamzorg?</span>
          </h2>
          <div className="mx-auto my-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-primary">✦</span>
            <span className="h-px w-12 bg-primary/40" />
          </div>
          <p className="font-sans text-base leading-relaxed text-berry-dark/85">
            Kleinschalige kraamzorg in Rotterdam betekent een vertrouwde band,
            persoonlijke aandacht en een zorgvuldige aanpak.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-16 sm:gap-12 lg:grid-cols-3 lg:gap-16">
          {pijlers.map((p, i) => (
            <div key={i} className="text-center lg:text-left">
              <div className="mb-8 flex items-center justify-center gap-3 lg:justify-start">
                <span className="font-cinzel text-sm text-primary/80">
                  {p.nr}
                </span>
                <span className="text-primary text-xs">✦</span>
              </div>
              <h3 className="mb-4 font-cinzel text-xl uppercase leading-tight text-berry-dark sm:text-2xl">
                {p.title}
              </h3>
              <p className="font-sans text-base leading-relaxed text-berry-dark/80">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-2xl text-center">
          <p className="font-cinzel text-sm uppercase tracking-[0.2em] text-berry-dark/80 mb-4">
            Start vandaag met jouw kraamzorg
          </p>
          <p className="font-sans text-base leading-relaxed text-berry-dark/80">
            Klaar voor een persoonlijke kraamzorg met één vast gezicht? Ik nodig
            je graag uit voor een vrijblijvende kennismaking.
          </p>
          <Link
            href="/contact/"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            Plan een kennismaking
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Section 2: Hoe werkt het — Horizontale tijdlijn ── */
function StepsSection() {
  const stappen = [
    {
      nr: "01",
      title: "Aanmelden",
      text: "Meld je eenvoudig online aan voor kraamzorg in Rotterdam. Ik neem daarna snel contact op om je wensen en beschikbaarheid te bespreken.",
      cta: {
        label: "Direct aanmelden",
        href: "https://marleyskraamzorg.mijngeboortezorg.nl/Aanvragen/kraamzorg?mode=frame",
        external: true,
      },
    },
    {
      nr: "02",
      title: "Kennismaking",
      text: "Het intakegesprek vindt plaats bij jou thuis of telefonisch. We bespreken jouw wensen, verwachtingen en leren elkaar kennen.",
      cta: null,
    },
    {
      nr: "03",
      title: "Jouw kraamperiode",
      text: "Vanaf de bevalling sta ik voor je klaar. Ik assisteer de verloskundige en begeleid jouw gezin in de eerste dagen thuis.",
      cta: {
        label: "Bel voor vragen",
        href: "tel:+31645041484",
        external: false,
      },
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">Hoe werkt het</p>
          <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl">
            In drie stappen naar{" "}
            <span className="text-primary">een zorgeloze kraamweek</span>
          </h2>
          <div className="mx-auto my-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-primary">✦</span>
            <span className="h-px w-12 bg-primary/40" />
          </div>
          <p className="font-sans text-base leading-relaxed text-berry-dark/85">
            Van eerste aanmelding tot de kraamweek zelf. Ik begeleid je in
            elke stap.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-primary/15 lg:block"
            aria-hidden="true"
          />
          <ol className="relative grid gap-16 lg:grid-cols-3 lg:gap-12">
            {stappen.map((stap) => (
              <li key={stap.nr} className="relative text-center lg:text-left">
                <div className="mb-8 flex items-center justify-center gap-3 lg:justify-start">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-cinzel text-sm text-primary ring-1 ring-primary/20">
                    {stap.nr}
                  </span>
                  <span className="text-primary text-xs">✦</span>
                </div>
                <h3 className="mb-4 font-cinzel text-xl uppercase leading-tight text-berry-dark sm:text-2xl">
                  {stap.title}
                </h3>
                <p className="font-sans text-base leading-relaxed text-berry-dark/80">
                  {stap.text}
                </p>
                {stap.cta && (
                  <div className="mt-6">
                    {stap.cta.external ? (
                      <a
                        href={stap.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-cinzel text-xs uppercase tracking-[0.15em] text-primary transition-colors hover:text-berry-dark"
                      >
                        {stap.cta.label}
                        <span aria-hidden="true">→</span>
                      </a>
                    ) : (
                      <a
                        href={stap.cta.href}
                        className="inline-flex items-center gap-2 font-cinzel text-xs uppercase tracking-[0.15em] text-primary transition-colors hover:text-berry-dark"
                      >
                        {stap.cta.label}
                        <span aria-hidden="true">→</span>
                      </a>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ── Section 3: Wat is kraamzorg? — Tekst-only editorial ── */
function WhatIsSection() {
  const kenmerken = [
    {
      title: "Vaste, ervaren kraamverzorgende",
      text: "Eén vertrouwd gezicht, van de eerste kennismaking tot het einde van de kraamweek.",
    },
    {
      title: "24/7 bereikbaar voor vragen",
      text: "Ook 's nachts en in het weekend sta ik voor je klaar met advies en een luisterend oor.",
    },
    {
      title: "Persoonlijke begeleiding aan huis",
      text: "Zorg in jouw eigen vertrouwde omgeving, afgestemd op jouw gezin en ritme.",
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-main">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Wat is kraamzorg?</p>
            <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl">
              Professionele zorg in{" "}
              <span className="text-primary">de eerste week</span>
            </h2>
            <div className="mx-auto my-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary">✦</span>
              <span className="h-px w-12 bg-primary/40" />
            </div>
          </div>

          <div className="mx-auto max-w-2xl space-y-5 text-center">
            <p className="font-sans text-lg leading-relaxed text-berry-dark/80">
              Kraamzorg is professionele ondersteuning voor jou en je
              pasgeboren baby na de bevalling. Ik bied hulp bij de verzorging
              van je baby, zoals verschonen, voeden en in bad doen, en
              controleer de gezondheid van moeder en baby.
            </p>
            <p className="font-sans text-lg leading-relaxed text-berry-dark/80">
              Ook geef ik deskundig advies over borstvoeding, het herstel van
              de moeder en de dagelijkse verzorging van je baby.
            </p>
          </div>

          <div className="mx-auto my-16 max-w-2xl text-center">
            <div className="mx-auto mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-primary/40" />
              <span className="text-primary text-xs">✦</span>
              <span className="h-px w-8 bg-primary/40" />
            </div>
            <p className="font-cinzel text-xl uppercase leading-snug tracking-wide text-berry-dark sm:text-2xl">
              Meer dan huishoudelijke hulp.{" "}
              <span className="text-primary">
                Rust, vertrouwen en deskundigheid
              </span>{" "}
              voor jouw gezin.
            </p>
            <div className="mx-auto mt-6 flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-primary/40" />
              <span className="text-primary text-xs">✦</span>
              <span className="h-px w-8 bg-primary/40" />
            </div>
          </div>

          <div className="mt-20 grid gap-12 sm:gap-16 lg:grid-cols-3">
            {kenmerken.map((k, i) => (
              <div key={i} className="text-center">
                <div className="mb-6 flex items-center justify-center gap-3">
                  <span className="font-cinzel text-sm text-primary/80">
                    0{i + 1}
                  </span>
                  <span className="text-primary text-xs">✦</span>
                </div>
                <h3 className="mb-4 font-cinzel text-base uppercase leading-tight text-berry-dark sm:text-lg">
                  {k.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-berry-dark/80">
                  {k.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/kraamzorg/"
              className="inline-flex items-center gap-2 font-cinzel text-xs uppercase tracking-[0.15em] text-primary transition-colors hover:text-berry-dark"
            >
              Lees meer over kraamzorg
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Export ── */
export default function HomeClient() {
  return (
    <>
      <HomeHero />
      <FlipboxSection />
      <StepsSection />
      <WhatIsSection />
    </>
  );
}
