"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

/* ── Hero — Editorial Split-Screen ── */
function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        const content = sectionRef.current.querySelector(".hero-content") as HTMLElement;
        if (content) {
          content.style.transform = `translateY(${scrolled * 0.08}px)`;
          content.style.opacity = `${Math.max(0, 1 - scrolled / 900)}`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Zeer subtiel decoratief element */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-blush/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="hero-content relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ─── TEKST LINKS ─── */}
          <div className="max-w-xl">

            {/* Klein label met sterretje */}
            <div className="mb-8 flex items-center gap-2">
              <span className="text-primary text-xs">✦</span>
              <span className="font-cinzel text-[11px] uppercase tracking-[0.28em] text-primary">
                Marley&apos;s Kraamzorg
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-cinzel text-4xl uppercase leading-[1.05] tracking-tight text-berry-dark sm:text-5xl lg:text-6xl xl:text-[4rem]">
              Kraamzorg in Rotterdam,
              <span className="block mt-3 text-primary">
                met een vast gezicht
              </span>
            </h1>

            {/* Sierlijn met sterretje */}
            <div className="my-8 flex items-center gap-3">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary text-xs">✦</span>
            </div>

            {/* Persoonlijke noot */}
            <p className="mb-6 font-sans text-lg leading-relaxed text-berry-dark/90">
              Ik ben <strong className="font-semibold text-berry-dark">Lisa</strong>.
              Persoonlijke kraamzorg met <strong className="font-semibold text-berry-dark">één vast gezicht</strong> —
              geen wisselende verzorgenden, maar een vertrouwd iemand van dag 1.
            </p>

            {/* Kleinere toelichting */}
            <p className="mb-10 font-sans text-base leading-relaxed text-berry-dark/70">
              Met zorg voor jou, je baby en je hele gezin. In Rotterdam en omgeving.
            </p>

            {/* CTA's */}
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

            {/* Trust-regel */}
            <p className="mt-8 font-sans text-xs uppercase tracking-[0.2em] text-berry-dark/50">
              KCKZ-gecertificeerd · 24/7 bereikbaar · 5.0 op Google
            </p>

          </div>

          {/* ─── FOTO RECHTS ─── */}
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-blush/30 blur-xl"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(74,26,61,0.35)]">
              <Image
                src="/images/baby-portrait.webp"
                alt="Pasgeboren baby in een zachte witte omgeving — Marley's Kraamzorg Rotterdam"
                width={900}
                height={1100}
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover"
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
      text: "Rust en comfort in je eigen vertrouwde omgeving. Geen reistijd, geen onbekende plek — jij bent thuis.",
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-main">
        {/* Section header */}
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

          <p className="font-sans text-base leading-relaxed text-berry-dark/75">
            Kleinschalige kraamzorg in Rotterdam betekent een vertrouwde band,
            persoonlijke aandacht en een zorgvuldige aanpak.
          </p>
        </div>

        {/* 3-koloms editorial grid */}
        <div className="mx-auto mt-20 grid max-w-6xl gap-16 sm:gap-12 lg:grid-cols-3 lg:gap-16">
          {pijlers.map((p, i) => (
            <div key={i} className="text-center lg:text-left">
              {/* Nummer + sierlijn */}
              <div className="mb-8 flex items-center justify-center gap-3 lg:justify-start">
                <span className="font-cinzel text-sm text-primary/60">
                  {p.nr}
                </span>
                <span className="text-primary text-xs">✦</span>
              </div>

              {/* Titel */}
              <h3 className="mb-4 font-cinzel text-xl uppercase leading-tight text-berry-dark sm:text-2xl">
                {p.title}
              </h3>

              {/* Tekst */}
              <p className="font-sans text-base leading-relaxed text-berry-dark/70">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        {/* Subtiele afsluitende regel */}
        <div className="mx-auto mt-24 max-w-2xl text-center">
          <p className="font-cinzel text-sm uppercase tracking-[0.2em] text-berry-dark/50 mb-4">
            Start vandaag met jouw kraamzorg
          </p>
          <p className="font-sans text-base leading-relaxed text-berry-dark/70">
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

/* ── Section 2: Hoe werkt het? ── */
function StepCard({
  step,
  title,
  description,
  icon,
  extra,
}: {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  extra?: React.ReactNode;
}) {
  return (
    <div className="bg-primary rounded-2xl p-8 text-center text-cream shadow-card">
      <div className="flex justify-center mb-5 text-cream">{icon}</div>
      <span className="font-cinzel text-xs uppercase tracking-[0.1em] text-cream/70 block mb-2">
        {step}
      </span>
      <h3 className="font-cinzel text-lg uppercase text-cream mb-4">{title}</h3>
      <p className="font-sans text-sm text-cream/85 leading-relaxed mb-4">
        {description}
      </p>
      {extra && <div className="mt-2">{extra}</div>}
    </div>
  );
}

function StepsSection() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-2xl md:text-3xl lg:text-4xl uppercase text-primary mb-4">
            Hoe werkt het?
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <StepCard
            step="Stap 1"
            title="Aanmelden"
            description="Meld je eenvoudig online aan voor kraamzorg in Rotterdam. Ik neem daarna snel contact op om je wensen en beschikbaarheid te bespreken."
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            }
            extra={
              <a href="https://marleyskraamzorg.mijngeboortezorg.nl/Aanvragen/kraamzorg?mode=frame" target="_blank" rel="noopener noreferrer" className="font-cinzel text-xs uppercase tracking-[0.06em] text-cream underline hover:text-white transition-colors">
                Direct aanmelden →
              </a>
            }
          />

          <StepCard
            step="Stap 2"
            title="Kennismaking"
            description="Het intakegesprek vindt plaats bij jou thuis of telefonisch. We bespreken jouw wensen, de verwachtingen en leren elkaar kennen."
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            }
            extra={
              <span className="font-sans text-xs text-cream/80">✓ Vrijblijvend &amp; zonder kosten</span>
            }
          />

          <StepCard
            step="Stap 3"
            title="Jouw kraamperiode"
            description="Vanaf de bevalling sta ik klaar. Ik assisteer de verloskundige en begeleid jouw gezin in de eerste dagen thuis."
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            }
            extra={
              <>
                <span className="font-sans text-xs text-cream/80 block">✓ Dagelijks overleg &amp; afstemming</span>
                <a href="tel:+31645041484" className="font-cinzel text-xs uppercase tracking-[0.06em] text-cream underline hover:text-white transition-colors mt-2 inline-block">
                  📞 Bel voor vragen
                </a>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

/* ── Section 3: Wat is kraamzorg? ── */
function WhatIsSection() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto relative">
          {/* Left: Image */}
          <div className="flex justify-center">
            <Image
              src="/images/baby-section.png"
              alt="Baby in warme, zachte omgeving - Marley's Kraamzorg Rotterdam"
              className="rounded-2xl shadow-card max-w-full h-auto"
              width={500}
              height={600}
              loading="lazy"
            />
          </div>

          {/* Right: Text */}
          <div>
            <span className="font-cinzel text-xs uppercase tracking-[0.08em] text-primary/60 block mb-2">
              Persoonlijke kraamzorg
            </span>
            <h2 className="font-cinzel text-2xl md:text-3xl uppercase text-primary mb-6">
              Wat is kraamzorg?
            </h2>

            <div className="space-y-4 font-sans text-sm md:text-base text-berry-dark/80 leading-relaxed mb-6">
              <p>
                Kraamzorg is professionele ondersteuning voor jou en je pasgeboren baby na de bevalling. Als kraamverzorgende bied ik hulp bij de verzorging van je baby, zoals verschonen, voeden en in bad doen. Daarnaast controleer ik de gezondheid van moeder en baby.
              </p>

              <blockquote className="border-l-3 border-primary pl-5 italic text-primary bg-primary/[0.04] rounded-r-lg py-3 pr-4">
                &ldquo;Kraamzorg is meer dan alleen huishoudelijke hulp. Het is betrokken en professionele zorg die rust, vertrouwen en deskundigheid brengt.&rdquo;
              </blockquote>

              <p>
                Ook geef ik deskundig advies over borstvoeding, het herstel van de moeder en de dagelijkse verzorging van je baby.
              </p>
            </div>

            {/* Feature Blocks */}
            <div className="grid grid-cols-1 gap-3 mb-8">
              {[
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>, label: "Vaste, ervaren kraamverzorgende" },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>, label: "24/7 bereikbaar voor vragen" },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>, label: "Persoonlijke begeleiding aan huis" },
              ].map((item, i) => (
                <div key={i} className="bg-primary rounded-xl px-5 py-4 flex items-center gap-4 text-cream shadow-glow">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <span className="font-cinzel text-sm uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>

            <Link href="/contact/" className="btn-primary">
              Contact opnemen
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
