"use client";

import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@/components/StarIcon";
import Accordion from "@/components/Accordion";
import { werkgebieden } from "@/data/werkgebieden";

const areaFAQ = [
  { question: "In welke regio werk je?", answer: "Ik werk in Rotterdam en omliggende gemeenten: Capelle aan den IJssel, Nieuwerkerk aan den IJssel, Krimpen aan den IJssel, Gouda, Waddinxveen, Moordrecht en Zevenhuizen." },
  { question: "Wat als ik net buiten je werkgebied woon?", answer: "Neem gerust contact op. In sommige gevallen kan ik toch iets voor je betekenen of je doorverwijzen naar een collega in jouw regio." },
  { question: "Hoe snel ben je ter plaatse?", answer: "Omdat ik in Rotterdam woon, ben ik meestal binnen 30–45 minuten bij je thuis in de regio." },
  { question: "Kan ik je kiezen als vaste kraamverzorgende?", answer: "Ja, dat is juist de kracht van mijn werkwijze. Je krijgt één vast gezicht — mij — voor de hele kraamperiode." },
];

export default function WerkgebiedClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[50vh] min-h-[350px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/area-hero.jpg"
            alt="Kraamzorg werkgebied Rotterdam en omgeving"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Light warm beige overlay — effen, geen gradient */}
          <div className="absolute inset-0 bg-[#F5EDE3]/88" />
        </div>
        <div className="relative z-10 text-center px-4 pt-16 text-berry-dark">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 border border-berry-dark/10 rounded-full px-5 py-2 mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9A1E61" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="font-cinzel text-xs uppercase tracking-[0.12em] text-cream/90">
              Werkgebied
            </span>
          </div>
          <h1 className="font-cinzel text-2xl md:text-4xl lg:text-5xl uppercase text-berry-dark leading-tight">
            Kraamzorg in uw regio
          </h1>
          <div className="w-16 h-0.5 bg-berry-dark/20 mx-auto mt-6 mb-6" />
          <StarIcon
            size="lg"
            className="mx-auto"
            fillColor="#9A1E61"
            strokeColor="#4A1A3D"
            animate
          />
        </div>
      </section>

      {/* 8 Kaarten Grid */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-2xl md:text-3xl lg:text-4xl uppercase text-primary mb-4">
              Waar ik werk
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
            <p className="font-body text-base md:text-lg text-berry-dark/75 max-w-2xl mx-auto leading-relaxed">
              Ik bied persoonlijke kraamzorg in Rotterdam en de omliggende gemeenten. 
              Klik op jouw regio voor meer informatie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {werkgebieden.map((area) => (
              <Link
                key={area.slug}
                href={`/werkgebied/${area.slug}/`}
                className="group block bg-white rounded-2xl border border-berry-dark/[0.08] overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient Header */}
                <div
                  className="h-44 flex items-center justify-center relative overflow-hidden"
                  style={{ background: area.gradient }}
                >
                  {/* Decorative circle */}
                  <div className="absolute w-24 h-24 rounded-full border-2 border-primary/20 flex items-center justify-center">
                    <span className="font-cinzel text-4xl uppercase text-primary/30 group-hover:text-primary/50 transition-colors duration-300">
                      {area.naam.charAt(0)}
                    </span>
                  </div>
                  {/* Subtle pattern dots */}
                  <div 
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage: `radial-gradient(circle, #9A1E61 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-cinzel text-base uppercase text-berry-dark mb-2 group-hover:text-primary transition-colors">
                    {area.naam}
                  </h3>
                  <p className="font-body text-sm text-berry-dark/60 mb-4 line-clamp-2">
                    {area.intro[0].slice(0, 120)}...
                  </p>
                  <span className="font-cinzel text-xs uppercase tracking-[0.06em] text-primary group-hover:underline inline-flex items-center gap-1">
                    Bekijk kraamzorg in {area.naam.split(" ")[0]}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-center mt-12 font-body text-berry-dark/80">
            Staat jouw regio er niet bij?{" "}
            <Link href="/contact/" className="text-primary hover:underline font-semibold">
              Neem contact op
            </Link>{" "}
            — mogelijk kan ik toch iets voor je betekenen.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cinzel text-2xl md:text-3xl lg:text-4xl uppercase text-primary text-center mb-12">
              Veelgestelde vragen
            </h2>
            <Accordion items={areaFAQ} />
          </div>
        </div>
      </section>
    </>
  );
}
