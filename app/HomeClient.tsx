"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@/components/StarIcon";

/* ── Flip Card Component ── */
function FlipCard({
  icon,
  title,
  shortDesc,
  backText,
  backCta,
}: {
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  backText: string;
  backCta: string;
}) {
  return (
    <div className="group h-[320px] w-full perspective-[1000px]">
      <div className="relative w-full h-full transition-transform duration-500 preserve-3d group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 bg-primary rounded-2xl flex flex-col items-center justify-center text-center p-6 backface-hidden shadow-card">
          <div className="text-cream/90 mb-4">{icon}</div>
          <h3 className="font-cinzel text-lg uppercase text-cream tracking-wider mb-3">
            {title}
          </h3>
          <p className="text-cream/80 text-sm font-body leading-relaxed px-2">
            {shortDesc}
          </p>
        </div>
        {/* Back */}
        <div className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center text-center p-6 [transform:rotateY(180deg)] backface-hidden shadow-card border border-berry-dark/[0.08]">
          <h4 className="font-cinzel text-base uppercase text-primary tracking-wider mb-4">
            {title}
          </h4>
          <p className="text-berry-dark/80 text-sm leading-relaxed mb-6 font-body">
            {backText}
          </p>
          <Link href="/kraamzorg/" className="font-cinzel text-xs uppercase tracking-[0.06em] text-primary hover:underline">
            {backCta} →
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Step Card ── */
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
      <p className="font-body text-sm text-cream/85 leading-relaxed mb-4">
        {description}
      </p>
      {extra && <div className="mt-2">{extra}</div>}
    </div>
  );
}

/* ── Hero — Optie 1: Editorial Luxe met babyfoto in kader ── */
function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        const content = sectionRef.current.querySelector(".hero-content") as HTMLElement;
        if (content) {
          content.style.transform = `translateY(${scrolled * 0.12}px)`;
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
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#FDF9F4] via-[#FAF4EE] to-[#F5C8D8]/20"
    >
      {/* Decoratieve zachte cirkels op de achtergrond */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#F5C8D8]/40 blur-3xl pointer-events-none" />

      <div className="hero-content relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ═══════ LINKERKOLOM — TEKST ═══════ */}
          <article className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 border border-primary/15 rounded-full px-4 py-2 mb-8 backdrop-blur-sm shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9A1E61" strokeWidth="2" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
              <span className="font-cinzel text-[11px] uppercase tracking-[0.2em] text-primary/90">
                Marley&apos;s Kraamzorg
              </span>
            </div>

            {/* H1 — met magenta accent op "Vast Gezicht" */}
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] uppercase leading-[1.08] tracking-tight mb-8 text-berry-dark text-balance">
              Kraamzorg Rotterdam
              <span className="block mt-2">
                met een{" "}
                <span className="relative inline-block text-primary whitespace-nowrap">
                  Vast Gezicht
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8 Q 50 2, 100 6 T 198 4"
                      stroke="#F5C8D8"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Persoonlijke noot */}
            <p className="font-body text-base md:text-lg text-berry-dark/90 max-w-xl mx-auto lg:mx-0 mb-4 italic leading-relaxed">
              💖 Marley&apos;s Kraamzorg vernoemd naar mijn dochtertje Marley. Haar naam draag ik met trots, als herinnering aan hoe kostbaar de eerste dagen zijn.
            </p>

            {/* Hoofdtekst */}
            <p className="font-body text-sm md:text-base text-berry-dark/80 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Verwacht je een baby en verlang je naar rust, vertrouwen en persoonlijke aandacht? Ik ben <strong className="text-berry-dark font-semibold">Lisa</strong> en bied kleinschalige kraamzorg in Rotterdam met <strong className="text-berry-dark font-semibold">één vast gezicht</strong> — en dat ben ik. Geen wisselende verzorgenden, maar een vertrouwd gezicht van dag 1.
            </p>

            {/* CTA's */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 font-cinzel text-xs uppercase tracking-[0.15em] h-14 px-10 rounded-full bg-berry-dark text-cream shadow-[0_15px_30px_-10px_rgba(74,26,61,0.5)] hover:bg-primary hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Meld je nu aan voor kraamzorg"
              >
                📝 Meld je nu aan
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 font-cinzel text-xs uppercase tracking-[0.15em] h-14 px-10 rounded-full border-2 border-primary/30 text-primary hover:bg-primary hover:text-cream hover:border-primary transition-all duration-300"
                aria-label="Plan een vrijblijvende kennismaking"
              >
                Plan een kennismaking
              </Link>
            </div>

            {/* Trust bar — zonder vaste aantallen */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start">
              {[
                "5.0 ⭐ op Google",
                "KCKZ-gecertificeerd",
                "100% vergoed",
                "24/7 bereikbaar",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="flex-shrink-0 w-4 h-4 rounded-full bg-primary flex items-center justify-center" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FDF9F4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-body text-xs md:text-sm text-berry-dark/80 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </article>

          {/* ═══════ RECHTERKOLOM — FOTO ═══════ */}
          <aside className="relative w-full max-w-[560px] mx-auto lg:ml-auto lg:mr-0">
            {/* Hoofdfoto — babyfoto in een kader */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(154,30,97,0.35)]">
              <Image
                src="/images/baby-banner.webp"
                alt="Pasgeboren baby in een zachte, warme omgeving — Marley's Kraamzorg Rotterdam"
                width={800}
                height={900}
                priority
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Zachte magenta overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Badge rechtsboven op de foto */}
            <div className="absolute top-4 right-4 bg-berry-dark text-cream rounded-2xl px-4 py-3 shadow-xl backdrop-blur-sm">
              <p className="font-cinzel text-[11px] uppercase tracking-wider text-cream leading-tight">
                100% vergoed
              </p>
              <p className="font-body text-[10px] text-cream/75 mt-0.5">
                door alle zorgverzekeraars
              </p>
            </div>

            {/* Zwevende badge linksonder op de foto — Google reviews zonder aantal */}
            <div className="absolute -bottom-6 left-4 lg:-left-6 bg-white rounded-2xl px-5 py-3.5 shadow-[0_20px_40px_-15px_rgba(74,26,61,0.25)] border border-primary/5">
              <div className="flex items-center gap-3">
                {/* Google G-logo */}
                <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div>
                  <p className="font-cinzel text-xl text-primary leading-none">
                    5.0 <span className="text-primary/60 text-base">⭐</span>
                  </p>
                  <p className="font-body text-[11px] text-berry-dark/70 mt-0.5">
                    op Google
                  </p>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}

/* ── Section 1: Flipboxen ── */
function FlipboxSection() {
  const flipCards = [
    {
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/><circle cx="12" cy="12" r="2"/></svg>,
      title: "Deskundige babyzorg",
      shortDesc: "Professionele zorg voor je pasgeboren baby",
      backText: "Liefdevolle en professionele zorg voor je pasgeboren baby door een ervaren kraamverzorgende met oog voor detail.",
    },
    {
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>,
      title: "Altijd persoonlijk",
      shortDesc: "Kleinschalige ondersteuning op maat",
      backText: "Kleinschalige en betrokken ondersteuning, volledig afgestemd op jouw wensen, gewoontes en gezinsdynamiek.",
    },
    {
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
      title: "Zorg aan huis",
      shortDesc: "Rust in je eigen vertrouwde omgeving",
      backText: "Rust en comfort in je eigen vertrouwde omgeving. Geen reistijd, geen onbekende omgeving — jij bent thuis.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-2xl md:text-3xl lg:text-4xl uppercase text-primary mb-6">
            Waarom Marley&apos;s Kraamzorg?
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
          <p className="font-body text-base md:text-lg text-berry-dark/75 max-w-2xl mx-auto leading-relaxed">
            Kleinschalige kraamzorg in Rotterdam betekent een vertrouwde band, persoonlijke aandacht en een zorgvuldige aanpak. Ik zorg voor een warme en professionele begeleiding tijdens deze bijzondere kraamweek.
          </p>
        </div>

        {/* Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {flipCards.map((card, i) => (
            <FlipCard key={i} icon={card.icon} title={card.title} shortDesc={card.shortDesc} backText={card.backText} backCta="Meer informatie" />
          ))}
        </div>

        {/* Sub-text */}
        <div className="max-w-3xl mx-auto text-center border-t border-berry-dark/10 pt-12">
          <h3 className="font-cinzel text-xl md:text-2xl uppercase text-primary mb-4">
            Start vandaag met jouw kraamzorg in Rotterdam
          </h3>
          <p className="font-body text-base text-berry-dark/75 leading-relaxed">
            Klaar voor een persoonlijke kraamzorg met één vast gezicht? Ik nodig je graag uit voor een vrijblijvende kennismaking, zonder verplichtingen. Samen kijken we wat jij nodig hebt voor een warme en zorgzame start.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Section 2: Hoe werkt het? ── */
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
              <span className="font-body text-xs text-cream/80">✓ Vrijblijvend &amp; zonder kosten</span>
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
                <span className="font-body text-xs text-cream/80 block">✓ Dagelijks overleg &amp; afstemming</span>
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

            <div className="space-y-4 font-body text-sm md:text-base text-berry-dark/80 leading-relaxed mb-6">
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
