"use client";

import Link from "next/link";
import Image from "next/image";

/* ── Hero — Editorial Split-Screen ── */
function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Zeer subtiel decoratief element */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-blush/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ─── TEKST LINKS ─── */}
          <div className="max-w-xl">
            <div className="mb-8 flex items-center gap-2">
              <span className="text-primary text-xs">✦</span>
              <span className="font-cinzel text-[11px] uppercase tracking-[0.28em] text-primary">
                Marley&apos;s Kraamzorg
              </span>
            </div>

            <h1 className="font-cinzel text-4xl uppercase leading-[1.05] tracking-tight text-berry-dark sm:text-5xl lg:text-6xl xl:text-[4rem]">
              Kraamzorg Rotterdam
              <span className="block mt-3 text-primary">
                met één vaste kraamverzorgende
              </span>
            </h1>

            <div className="my-8 flex items-center gap-3">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary text-xs">✦</span>
            </div>

            <p className="mb-6 font-sans text-lg leading-relaxed text-berry-dark/90">
              Bij <strong className="font-semibold text-berry-dark">Marley&apos;s Kraamzorg</strong> krijg je persoonlijke kraamzorg in Rotterdam en omgeving van één vaste kraamverzorgende. 
            </p>

            <p className="mb-10 font-sans text-base leading-relaxed text-berry-dark/80">
              Geen wisselende gezichten, maar vertrouwde zorg voor jou, je baby en je gezin tijdens de eerste dagen na de geboorte.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact/"
                className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
              >
                Meld je aan
              </Link>
              <Link
                href="/contact/"
                className="inline-flex h-14 items-center justify-center rounded-full border border-berry-dark/20 px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-berry-dark transition-all duration-300 hover:border-berry-dark hover:bg-berry-dark hover:text-white"
              >
                Plan een kennismaking
              </Link>
            </div>

            <p className="mt-8 font-sans text-xs uppercase tracking-[0.2em] text-berry-dark/80">
              KCKZ-gecertificeerd · 24/7 bereikbaar · 5.0 op Google
            </p>
          </div>

          {/* ─── FOTO RECHTS ─── */}
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-blush/30 blur-xl"
              aria-hidden="true"
            />

            <div className="relative aspect-[9/11] w-full overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(74,26,61,0.35)]">
              <Image
                src="/images/baby-portrait.webp"
                alt="Pasgeboren baby in een zachte witte omgeving - Marley's Kraamzorg Rotterdam"
                fill
                priority
                fetchPriority="high"
                quality={75}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-berry-dark/5 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-card">
              <span className="text-primary text-lg">✦</span>
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
