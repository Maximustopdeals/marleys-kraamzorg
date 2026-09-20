"use client";

import { StarIcon } from "@/components/StarIcon";

export default function ReviewsClient() {
  return (
    <>
      {/* Elfsight Google Reviews script */}
      <script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      />

      {/* ═══════ HERO ═══════ */}
      <section
        className="relative w-full min-h-[60vh] md:min-h-[55vh] overflow-hidden flex items-center justify-center bg-[#F5EDE3]"
      >
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
            heb mogen ondersteunen in de
