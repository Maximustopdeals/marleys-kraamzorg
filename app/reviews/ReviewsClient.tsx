"use client";

import Script from "next/script";
import { StarIcon } from "@/components/StarIcon";

export default function ReviewsClient() {
  return (
    <>
      {/* Elfsight Google Reviews script - correct geladen via next/script */}
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="afterInteractive"
      />

      {/* ═══════ HERO ═══════ */}
      <section className="relative w-full min-h-[60vh] md:min-h-[55vh] overflow-hidden flex items-center justify-center bg-[#F5EDE3]">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 md:pt-24 pb-12 text-berry-dark">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 border border-berry-dark/10 rounded-full px-5 py-2 mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9A1E61" strokeWidth="2">
              <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="font-cinzel text-xs uppercase tracking-[0.12em] text-berry-dark/80">
              Reviews
            </span>
          </div>

          <h1 className="font-cinzel text-2xl md:text-4xl lg:text-5xl uppercase text-berry-dark leading-tight tracking-tight mb-6">
            Vertel over uw ervaring met Marley&apos;s Kraamzorg
          </h1>

          <div className="w-16 h-0.5 bg-berry-dark/20 mx-auto mb-6" />

          <p className="font-body text-base md:text-lg text-berry-dark/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Bij Marley&apos;s Kraamzorg ben ik, Lisa, dankbaar dat ik met liefde en zorg zoveel gezinnen
            heb mogen ondersteunen in de bijzondere periode na de geboorte. Jouw ervaring is niet
            alleen belangrijk voor mij, maar ook voor toekomstige ouders in Rotterdam en omgeving
            die een zorgverlener zoeken waar ze op kunnen vertrouwen.
          </p>

          <div className="flex justify-center">
            <StarIcon size="md" fillColor="#9A1E61" strokeColor="#4A1A3D" animate />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-berry-dark/50">
          <span className="text-xs font-cinzel uppercase tracking-wider">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce-gentle">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ═══════ GOOGLE REVIEWS ═══════ */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-main">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/[0.06] border border-primary/10 rounded-full px-5 py-2 mb-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9A1E61" strokeWidth="2">
                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span className="font-cinzel text-xs uppercase tracking-[0.12em] text-primary">
                Google Reviews
              </span>
            </div>
            <h2 className="font-cinzel text-2xl md:text-3xl lg:text-4xl uppercase text-primary mb-4">
              Wat ouders zeggen
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
            <p className="font-body text-base md:text-lg text-berry-dark/75 max-w-2xl mx-auto leading-relaxed">
              Lees hieronder de ervaringen van gezinnen die ik heb mogen begeleiden tijdens hun kraamperiode.
            </p>
          </div>

          {/* Elfsight Google Reviews Widget */}
          <div className="max-w-6xl mx-auto">
            <div
              className="elfsight-app-217006b8-8c72-4abf-a112-e77497452b93"
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-[#F5EDE3]">
        <div className="container-main relative z-10 text-center text-berry-dark">
          <h2 className="font-cinzel text-2xl md:text-3xl lg:text-4xl uppercase text-berry-dark mb-4">
            Ook tevreden over mijn zorg?
          </h2>
          <div className="w-16 h-0.5 bg-berry-dark/20 mx-auto mb-6" />
          <p className="font-body text-base md:text-lg text-berry-dark/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Deel jouw ervaring en help andere ouders bij het vinden van de juiste kraamzorg.
            Jouw review betekent veel voor mij!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://g.page/r/CZ7m3zZ9t5ZvEB0/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              Schrijf een review
            </a>
            <a href="/contact/" className="btn-outline border-berry-dark/30 text-berry-dark hover:bg-berry-dark hover:text-cream">
              Neem contact op
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
