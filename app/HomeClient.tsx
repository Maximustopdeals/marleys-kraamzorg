"use client";

import Link from "next/link";
import Image from "next/image";

function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FDFBFB]">
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-blush/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">

          <div className="relative z-20 max-w-xl pr-4 lg:pr-8">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-primary/50" />
              <span className="font-cinzel text-[11px] uppercase tracking-[0.3em] text-primary">
                Marley&apos;s Kraamzorg
              </span>
            </div>

            <h1 className="font-cinzel uppercase tracking-tight text-berry-dark">
              <span className="block text-4xl leading-[1.1] sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem]">
                Kraamzorg Rotterdam
              </span>
              <span className="mt-3 block text-[1.7rem] leading-[1.2] text-primary italic font-light sm:text-3xl lg:text-[2.2rem] xl:text-[2.5rem]">
                met één vaste kraamverzorgende
              </span>
            </h1>

            <div className="my-8 flex items-center gap-4">
              <span className="h-px w-16 bg-primary/30" />
              <span className="text-primary text-sm">✦</span>
            </div>

            <p className="mb-10 font-sans text-base leading-relaxed text-berry-dark/80 sm:text-lg">
              Ik ben <strong className="font-semibold text-berry-dark">Lisa</strong>. 
              Geen wisselende gezichten, maar vertrouwde zorg van dag 1 voor jou, je baby en je gezin. 
              Zo ervaar je rust, continuïteit en deskundige begeleiding tijdens de eerste, bijzondere kraamweek.
            </p>

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

          <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none">
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
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-end mb-20">
          <div>
            <p className="eyebrow mb-4 text-primary font-cinzel tracking-widest text-xs uppercase">Waarom Marley&apos;s</p>
            <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl lg:text-5xl">
              Waarom kiezen voor <span className="text-primary italic font-light lowercase">Marley&apos;s Kraamzorg?</span>
            </h2>
          </div>
          <div>
            <p className="font-sans text-lg leading-relaxed text-berry-dark/80 lg:pb-2">
              Kleinschalige kraamzorg in Rotterdam betekent een vertrouwde band,
              persoonlijke aandacht en een zorgvuldige aanpak.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {pijlers.map((p, i) => (
            <div key={i} className="group relative rounded-3xl border border-berry-dark/5 bg-[#FDFBFB] p-8 sm:p-10 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-cinzel text-2xl text-primary/30 transition-colors group-hover:text-primary">
                  {p.nr}
                </span>
                <span className="text-primary text-sm opacity-50">✦</span>
              </div>
              <h3 className="mb-4 font-cinzel text-xl uppercase leading-tight text-berry-dark sm:text-2xl">
                {p.title}
              </h3>
              <p className="font-sans text-base leading-relaxed text-berry-dark/70">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <p className="font-cinzel text-sm uppercase tracking-[0.2em] text-berry-dark/80 mb-4">
            Start vandaag met jouw kraamzorg
          </p>
          <p className="font-sans text-base leading-relaxed text-berry-dark/80 max-w-2xl">
            Klaar voor een persoonlijke kraamzorg met één vast gezicht? Ik nodig
            je graag uit voor een vrijblijvende kennismaking.
          </p>
          <Link
            href="/contact/"
            className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            Plan een kennismaking
          </Link>
        </div>
      </div>
    </section>
  );
}

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
    <section className="bg-[#FDFBFB] py-24 sm:py-32 border-y border-berry-dark/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center mb-24">
          <p className="eyebrow mb-4 text-primary font-cinzel tracking-widest text-xs uppercase">Hoe werkt het</p>
          <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl lg:text-5xl">
            In drie stappen naar <span className="text-primary italic font-light lowercase">een zorgeloze kraamweek</span>
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-berry-dark/80">
            Van eerste aanmelding tot de kraamweek zelf. Ik begeleid je in
            elke stap.
          </p>
        </div>

        <div className="relative mx-auto">
          <div
            className="absolute left-0 right-0 top-10 hidden h-px bg-berry-dark/10 lg:block"
            aria-hidden="true"
          />
          <ol className="relative grid gap-12 lg:grid-cols-3 lg:gap-16">
            {stappen.map((stap) => (
              <li key={stap.nr} className="relative">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white font-cinzel text-2xl text-primary ring-8 ring-[#FDFBFB] shadow-sm">
                  {stap.nr}
                </div>
                <h3 className="mb-4 font-cinzel text-2xl uppercase leading-tight text-berry-dark">
                  {stap.title}
                </h3>
                <p className="font-sans text-base leading-relaxed text-berry-dark/70">
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
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr,1.5fr] lg:gap-24">
          
          <div className="lg:sticky lg:top-32 h-fit">
            <p className="eyebrow mb-4 text-primary font-cinzel tracking-widest text-xs uppercase">Wat is kraamzorg?</p>
            <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl lg:text-5xl mb-8">
              Professionele zorg in <span className="text-primary italic font-light lowercase">de eerste week</span>
            </h2>
            
            <div className="border-l-2 border-primary/40 pl-6 py-2">
              <p className="font-cinzel text-lg uppercase leading-snug tracking-wide text-berry-dark sm:text-xl">
                Meer dan huishoudelijke hulp. <span className="text-primary">Rust, vertrouwen en deskundigheid</span> voor jouw gezin.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="font-sans text-lg leading-relaxed text-berry-dark/85">
              Kraamzorg is professionele ondersteuning voor jou en je
              pasgeboren baby na de bevalling. Ik bied hulp bij de verzorging
              van je baby, zoals verschonen, voeden en in bad doen, en
              controleer de gezondheid van moeder en baby.
            </p>
            <p className="font-sans text-lg leading-relaxed text-berry-dark/85">
              Ook geef ik deskundig advies over borstvoeding, het herstel van
              de moeder en de dagelijkse verzorging van je baby.
            </p>
            
            <div className="pt-6">
              <Link
                href="/kraamzorg/"
                className="inline-flex h-14 items-center justify-center rounded-full border border-berry-dark/20 px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-berry-dark transition-all duration-300 hover:border-berry-dark hover:bg-berry-dark hover:text-white"
              >
                Lees meer over kraamzorg
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-berry-dark/10">
          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {kenmerken.map((k, i) => (
              <div key={i} className="group relative rounded-3xl border border-berry-dark/5 bg-[#FDFBFB] p-8 sm:p-10 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-cinzel text-2xl text-primary/30 transition-colors group-hover:text-primary">
                    0{i + 1}
                  </span>
                  <span className="text-primary text-sm opacity-50">✦</span>
                </div>
                <h3 className="mb-4 font-cinzel text-lg uppercase leading-tight text-berry-dark sm:text-xl">
                  {k.title}
                </h3>
                <p className="font-sans text-base leading-relaxed text-berry-dark/70">
                  {k.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
