"use client";

import Link from "next/link";
import Image from "next/image"; // <-- Image component is nu geïmporteerd

export default function KraamzorgClient() {
  return (
    <>
      {/* ═══════ SECTIE 1: HERO (HIGH-END SPLIT) ═══════ */}
      <section className="relative overflow-hidden bg-[#FDFBFB] pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Subtiele achtergrond elementen voor diepte */}
        <div className="pointer-events-none absolute -left-40 top-0 h-[800px] w-[800px] rounded-full bg-blush/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
            
            {/* LINKERKANT: Tekst */}
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-primary/40"></span>
                <span className="text-primary text-xs">✦</span>
                <span className="font-cinzel text-[11px] uppercase tracking-[0.28em] text-primary">
                  Kraamzorg Rotterdam
                </span>
              </div>

              {/* H1 met contrast in typografie. Niet alles in caps. */}
              <h1 className="font-cinzel text-4xl leading-[1.15] text-berry-dark sm:text-5xl lg:text-[3.5rem] text-balance">
                Een zorgeloze kraamtijd, <br className="hidden sm:block" />
                <span className="text-primary italic font-light tracking-wide mt-2 block">
                  op jouw tempo.
                </span>
              </h1>

              <p className="mt-8 max-w-lg font-sans text-lg leading-relaxed text-berry-dark/75">
                Kraamzorg in Rotterdam nodig? Bij Marley’s Kraamzorg krijg je 
                persoonlijke zorg van één vaste kraamverzorgende. Voor een 
                ontspannen start met je gezin.
              </p>

              {/* CTA's - Links uitgelijnd voor een strakke look */}
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://marleyskraamzorg.mijngeboortezorg.nl/Aanvragen/kraamzorg?mode=frame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
                >
                  Aanvraag starten
                </a>
                <a
                  href="tel:+31645041484"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-berry-dark/15 px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-berry-dark transition-all duration-300 hover:border-berry-dark hover:bg-berry-dark hover:text-white"
                >
                  Bel voor advies
                </a>
              </div>

              {/* Trust-regel - strak en minimalistisch */}
              <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-berry-dark/10 pt-6 font-sans text-[11px] uppercase tracking-[0.15em] text-berry-dark/60">
                <span className="flex items-center gap-2"><span className="text-primary">✦</span> KCKZ-gecertificeerd</span>
                <span className="flex items-center gap-2"><span className="text-primary">✦</span> 24/7 bereikbaar</span>
                <span className="flex items-center gap-2"><span className="text-primary">✦</span> 5.0 op Google</span>
              </div>
            </div>

            {/* RECHTERKANT: Beeld (High-end uitstraling) */}
            <div className="relative hidden lg:block">
              {/* Decoratieve offset border achter de afbeelding */}
              <div className="absolute -inset-4 rounded-[2rem] border border-primary/20 translate-x-4 translate-y-4 -z-10"></div>
              
              {/* Afbeelding container met mooie afgeronde hoeken */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#FDFBFB] shadow-2xl">
                {/* De daadwerkelijke afbeelding */}
                <Image 
                  src="/afbeelding-pasgeboren-baby.jpg" // <-- Zorg dat de bestandsnaam en extensie exact kloppen!
                  alt="Pasgeboren baby'tje in een zachte witte doek" 
                  fill 
                  className="object-cover" 
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* ═══════ SECTIE 2: WAT KRAAMZORG IS ═══════ */}
      {/* (De rest van je code blijft hier ongewijzigd...) */}
    </>
  );
}
