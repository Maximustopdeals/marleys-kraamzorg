"use client";

import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function ReviewsClient() {
  return (
    <>
      {/* Elfsight Google Reviews script */}
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="afterInteractive"
      />

      {/* ═══════ HERO — Split-screen met foto ═══════ */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-24">
        {/* Zachte blush-gloed rechts */}
        <div
          className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blush/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* FOTO LINKS */}
            <div className="order-1 lg:order-1">
              <div className="relative mx-auto max-w-lg lg:mx-0">
                {/* Zachte blush-gloed achter foto */}
                <div
                  className="absolute -inset-3 rounded-[2rem] bg-blush/30 blur-xl"
                  aria-hidden="true"
                />

                {/* Foto in strak kader */}
                <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(74,26,61,0.35)]">
                  <Image
                    src="/images/lisa-reviews.jpg"
                    alt="Lisa van Marley's Kraamzorg"
                    width={1536}
                    height={1024}
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* TEKST RECHTS */}
            <div className="order-2 max-w-xl text-center lg:order-2 lg:text-left">
              {/* Klein label */}
              <div className="mb-8 flex items-center justify-center gap-2 lg:justify-start">
                <span className="text-primary text-xs">✦</span>
                <span className="font-cinzel text-[11px] uppercase tracking-[0.28em] text-primary">
                  Ervaringen
                </span>
              </div>

              {/* H1 */}
              <h1 className="font-cinzel text-4xl uppercase leading-[1.1] text-berry-dark sm:text-5xl lg:text-6xl">
                Vertel over uw{" "}
                <span className="text-primary">ervaring</span>
              </h1>

              {/* Sierlijn */}
              <div className="my-8 flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-12 bg-primary/40" />
                <span className="text-primary text-xs">✦</span>
              </div>

              {/* Subtitel */}
              <p className="font-sans text-lg leading-relaxed text-berry-dark/85 sm:text-xl">
                Bij Marley&apos;s Kraamzorg ben ik, Lisa, dankbaar dat ik met
                liefde en zorg zoveel gezinnen heb mogen ondersteunen in de
                bijzondere periode na de geboorte.
              </p>

              <p className="mt-5 font-sans text-base leading-relaxed text-berry-dark/70">
                Jouw ervaring helpt andere ouders bij het vinden van de juiste
                kraamzorg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ GOOGLE REVIEWS WIDGET ═══════ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="text-center">
            <p className="eyebrow mb-4">Google Reviews</p>

            <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl">
              Wat ouders{" "}
              <span className="text-primary">zeggen</span>
            </h2>

            <div className="mx-auto my-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary">✦</span>
              <span className="h-px w-12 bg-primary/40" />
            </div>

            <p className="mx-auto max-w-2xl font-sans text-base leading-relaxed text-berry-dark/75">
              Lees hieronder de ervaringen van gezinnen die ik heb mogen
              begeleiden tijdens hun kraamperiode.
            </p>
          </div>

          {/* Elfsight Google Reviews Widget */}
          <div className="mt-16">
            <div
              className="elfsight-app-217006b8-8c72-4abf-a112-e77497452b93"
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl">
            Ook tevreden over{" "}
            <span className="text-primary">mijn zorg</span>?
          </h2>

          <div className="mx-auto my-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-primary">✦</span>
            <span className="h-px w-12 bg-primary/40" />
          </div>

          <p className="mx-auto mb-10 max-w-2xl font-sans text-base leading-relaxed text-berry-dark/80 sm:text-lg">
            Deel jouw ervaring en help andere ouders bij het vinden van de
            juiste kraamzorg. Jouw review betekent veel voor mij.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="https://g.page/r/CZ7m3zZ9t5ZvEB0/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="mr-2"
              >
                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              Schrijf een review
            </a>
            <Link
              href="/contact/"
              className="inline-flex h-14 items-center justify-center rounded-full border border-berry-dark/20 px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-berry-dark transition-all duration-300 hover:border-berry-dark hover:bg-berry-dark hover:text-white"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
