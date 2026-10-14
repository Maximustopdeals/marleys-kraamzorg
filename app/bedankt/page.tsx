import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bedankt | Marley's Kraamzorg Rotterdam",
  description:
    "Je bericht is verzonden. Ik neem zo snel mogelijk contact met je op.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BedanktPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-24">
      {/* Zachte blush-gloed */}
      <div
        className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blush/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center md:px-10">
        {/* Klein label met sterretje */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <span className="text-primary text-xs">✦</span>
          <span className="font-cinzel text-[11px] uppercase tracking-[0.28em] text-primary">
            Bericht verzonden
          </span>
        </div>

        {/* Grote H1 */}
        <h1 className="font-cinzel text-4xl uppercase leading-[1.1] text-berry-dark sm:text-5xl lg:text-6xl">
          Bedankt voor{" "}
          <span className="text-primary">je bericht</span>
        </h1>

        {/* Sierlijn met sterretje */}
        <div className="mx-auto my-8 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-primary/40" />
          <span className="text-primary">✦</span>
          <span className="h-px w-12 bg-primary/40" />
        </div>

        {/* Rustige tekst */}
        <p className="mx-auto max-w-xl font-sans text-lg leading-relaxed text-berry-dark/80 sm:text-xl">
          Ik neem zo snel mogelijk contact met je op. Meestal binnen 24 uur.
        </p>

        <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-berry-dark/70">
          Heb je in de tussentijd vragen? Bel of app me gerust. Ik sta voor je
          klaar.
        </p>

        {/* Contactgegevens */}
        <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          <a
            href="tel:+31645041484"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary transition-colors hover:text-berry-dark"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.11 4.1 2 2 0 014.11 2h3a2 2 0 012 1.72 12.13 12.13 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.13 12.13 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            06 - 450 414 84
          </a>
          <a
            href="https://wa.me/31645041484"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary transition-colors hover:text-berry-dark"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* CTA's */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/"
            className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            Terug naar home
          </Link>
          <Link
            href="/kraamzorg/"
            className="inline-flex h-14 items-center justify-center rounded-full border border-berry-dark/20 px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-berry-dark transition-all duration-300 hover:border-berry-dark hover:bg-berry-dark hover:text-white"
          >
            Lees meer over kraamzorg
          </Link>
        </div>

        {/* Subtiel afsluitertje */}
        <p className="mt-16 font-sans text-xs uppercase tracking-[0.2em] text-berry-dark/40">
          Marley&apos;s Kraamzorg
        </p>
      </div>
    </main>
  );
}
