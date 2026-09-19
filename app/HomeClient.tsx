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

/* ── Hero ── */
function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        const content = sectionRef.current.querySelector(".hero-content") as HTMLElement;
        if (content) {
          content.style.transform = `translateY(${scrolled * 0.3}px)`;
          content.style.opacity = `${1 - scrolled / 700}`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[90dvh] md:min-h-[85dvh] overflow-hidden flex items-center justify-center pb-8">
      <div className="absolute inset-0 z-0">
        <Image src="/images/baby-banner.webp" alt="Pasgeboren baby - Marley's Kraamzorg" fill priority className="object-cover" sizes="100vw" />
        {/* Light warm beige overlay — effen, geen gradient */}
        <div className="absolute inset-0 bg-[#F5EDE3]/88" />
      </div>

      <div className="hero-content relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 md:pt-24 pb-12 text-berry-dark">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/70 border border-berry-dark/10 rounded-full px-5 py-2 mb-6">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9A1E61" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
          <span className="font-cinzel text-xs uppercase tracking-[0.12em] text-berry-dark/80">
            Marley&apos;s Kraamzorg
          </span>
        </div>
        <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl uppercase text-berry-dark leading-tight tracking-tight mb-6">
          Kraamzorg Rotterdam | met een Vast Gezicht
        </h1>
        <div className="w-16 h-0.5 bg-berry-dark/20 mx-auto mb-6" />
        <p className="font-body text-base md:text-lg text-berry-dark/95 max-w-xl mx-auto mb-4 italic">
          💖 Marley&apos;s Kraamzorg vernoemd naar mijn dochtertje Marley. Haar naam draag ik met trots, als herinnering aan hoe kostbaar de eerste dagen zijn.
        </p>
        <p className="font-body text-sm md:text-base text-berry-dark/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          Verwacht je een baby en verlang je naar rust, vertrouwen en persoonlijke aandacht? Ik ben Lisa en bied kleinschalige kraamzorg in Rotterdam met <strong>één vast gezicht</strong> en dat ben ik. Geen wisselende verzorgenden, maar een vertrouwd gezicht van dag 1. Betrokken, deskundig en 24/7 bereikbaar.
        </p>
        <div className="flex justify-center mb-8">
          <StarIcon size="md" fillColor="#9A1E61" strokeColor="#4A1A3D" animate />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact/" className="btn-primary">📝 Check beschikbaarheid</Link>
          <a href="tel:+31645041484" className="btn-outline border-berry-dark/30 text-berry-dark hover:bg-berry-dark hover:text-cream">📞 Bel direct</a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-berry-dark/50">
        <span className="text-xs font-cinzel uppercase tracking-wider">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce-gentle">
          <polyline points="6 9 12 15 18 9" />
        </svg>
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
