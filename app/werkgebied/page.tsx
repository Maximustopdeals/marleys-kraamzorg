import type { Metadata } from "next";
import Link from "next/link";
import Accordion from "@/components/Accordion";
import { werkgebieden } from "@/data/werkgebieden";

/* ── FAQ Data ── */
const areaFAQ = [
  {
    question: "In welke regio werk je?",
    answer:
      "Ik werk in Rotterdam en omliggende gemeenten: Capelle aan den IJssel, Nieuwerkerk aan den IJssel, Krimpen aan den IJssel, Gouda, Waddinxveen, Moordrecht, Zevenhuizen en Barendrecht.",
  },
  {
    question: "Wat als ik net buiten je werkgebied woon?",
    answer:
      "Neem gerust contact op. In sommige gevallen kan ik toch iets voor je betekenen of je doorverwijzen naar een collega in jouw regio.",
  },
  {
    question: "Hoe snel ben je ter plaatse?",
    answer:
      "Omdat ik in Rotterdam woon, ben ik meestal binnen 30–45 minuten bij je thuis in de regio.",
  },
  {
    question: "Kan ik je kiezen als vaste kraamverzorgende?",
    answer:
      "Ja, dat is juist de kracht van mijn werkwijze. Je krijgt één vast gezicht, mij voor de hele kraamperiode.",
  },
];

export const metadata: Metadata = {
  title: "Werkgebied | Kraamzorg Rotterdam e.o.",

  description:
    "Kraamzorg in Rotterdam, Capelle aan den IJssel, Nieuwerkerk, Krimpen aan den IJssel, Gouda, Waddinxveen, Moordrecht, Zevenhuizen en Barendrecht.",

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },

  alternates: {
    canonical: "https://www.marleyskraamzorg.nl/werkgebied/",
  },

  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.marleyskraamzorg.nl/werkgebied/",
    siteName: "Marley's Kraamzorg",
    title: "Werkgebied | Kraamzorg Rotterdam en omgeving",
    description:
      "Persoonlijke kraamzorg in Rotterdam, Capelle aan den IJssel, Nieuwerkerk, Krimpen aan den IJssel, Gouda, Waddinxveen, Moordrecht, Zevenhuizen en Barendrecht.",
    images: [
      {
        url: "https://www.marleyskraamzorg.nl/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Werkgebied Marley's Kraamzorg - Kraamzorg in Rotterdam en omgeving",
      },
    ],
  },
};

export default function WerkgebiedPage() {
  return (
    <>
      {/* ============ HERO — high-end ============ */}
      <section className="relative overflow-hidden bg-cream pt-32 pb-20 sm:pt-40 sm:pb-24">
        {/* Subtiel decoratief element */}
        <div
          className="pointer-events-none absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blush/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-main relative">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <p className="eyebrow mb-6">Werkgebied</p>

            {/* H1 */}
            <h1 className="font-cinzel text-3xl uppercase leading-[1.1] text-berry-dark sm:text-4xl lg:text-5xl">
              Kraamzorg in uw regio
            </h1>

            {/* Sierlijn */}
            <div className="my-8 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-primary/40" />
              <span className="text-primary">✦</span>
              <span className="h-px w-16 bg-primary/40" />
            </div>

            {/* Subtitel */}
            <p className="font-body text-lg leading-relaxed text-berry-dark/80 sm:text-xl">
              Ik bied persoonlijke kraamzorg in Rotterdam en de omliggende
              gemeenten. Klik op jouw regio voor meer informatie.
            </p>
          </div>
        </div>
      </section>

      {/* ============ WERKGEBIEDEN GRID ============ */}
      <section className="py-20 sm:py-24">
        <div className="container-main">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {werkgebieden.map((area) => (
              <Link
                key={area.slug}
                href={`/werkgebied/${area.slug}/`}
                className="group flex flex-col rounded-2xl border border-berry-dark/[0.08] bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-soft"
              >
                {/* Regio-label */}
                <span className="mb-4 inline-flex w-fit rounded-full bg-cream px-3 py-1 font-cinzel text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Regio Rotterdam
                </span>

                {/* Naam */}
                <h2 className="mb-3 font-cinzel text-xl uppercase text-berry-dark transition-colors group-hover:text-primary">
                  {area.naam}
                </h2>

                {/* Beschrijving */}
                <p className="mb-6 text-sm leading-relaxed text-berry-dark/70 line-clamp-3">
                  {area.intro[0].length > 150
                    ? area.intro[0].slice(0, 150).trim() + "…"
                    : area.intro[0]}
                </p>

                {/* Link-arrow */}
                <div className="mt-auto flex items-center gap-2 border-t border-berry-dark/10 pt-4 font-cinzel text-xs uppercase tracking-[0.06em] text-primary">
                  <span>Bekijk kraamzorg in {area.naam}</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Extra info onder het grid */}
          <p className="mx-auto mt-16 max-w-2xl text-center font-body text-sm leading-relaxed text-berry-dark/70">
            Staat jouw regio er niet bij?{" "}
            <Link
              href="/contact/"
              className="font-semibold text-primary hover:underline"
            >
              Neem contact op
            </Link>{" "}
            — mogelijk kan ik toch iets voor je betekenen.
          </p>
        </div>
      </section>

      {/* ============ FAQ — high-end ============ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-main max-w-3xl">
          <div className="text-center">
            <p className="eyebrow mb-3">Goed om te weten</p>

            <h2 className="font-cinzel text-2xl uppercase text-primary sm:text-3xl lg:text-4xl">
              Veelgestelde vragen
            </h2>

            <div className="divider-leaf mx-auto my-8">✦</div>
          </div>

          <div className="mt-10">
            <Accordion items={areaFAQ} />
          </div>
        </div>
      </section>
    </>
  );
}
