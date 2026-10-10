import type { Metadata } from "next";
import Link from "next/link";
import { StarIcon } from "@/components/StarIcon";

export const metadata: Metadata = {
  /* ✅ AANGEPAST: korter, template voegt merknaam toe */
  title: "Alle pagina's",
  description:
    "Overzicht van alle pagina's op marleyskraamzorg.nl. Vind snel wat je zoekt — van kraamzorg en werkgebied tot contact en reviews.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    /* ✅ NIEUW: canonical toegevoegd */
    canonical: "https://www.marleyskraamzorg.nl/alle-paginas/",
  },
};

/* ✅ UITGEBREID: alle pagina's nu in de lijst */
const pages = [
  { name: "Home", path: "/", description: "Startpagina — welkom bij Marley's Kraamzorg" },
  { name: "Over mij", path: "/over-mij/", description: "Lisa's verhaal en achtergrond" },
  { name: "Kraamzorg", path: "/kraamzorg/", description: "Diensten en zorgpakketten" },
  { name: "Reviews", path: "/reviews/", description: "Ervaringen van ouders" },
  { name: "Werkgebied", path: "/werkgebied/", description: "Regio's waar ik werk" },
  { name: "Contact", path: "/contact/", description: "Contactformulier en gegevens" },
];

const werkgebiedPages = [
  { name: "Kraamzorg Rotterdam", path: "/werkgebied/rotterdam/", description: "Kraamzorg in Rotterdam" },
  { name: "Kraamzorg Capelle aan den IJssel", path: "/werkgebied/capelle-aan-den-ijssel/", description: "Kraamzorg in Capelle aan den IJssel" },
  { name: "Kraamzorg Nieuwerkerk aan den IJssel", path: "/werkgebied/nieuwerkerk-aan-den-ijssel/", description: "Kraamzorg in Nieuwerkerk aan den IJssel" },
  { name: "Kraamzorg Krimpen aan den IJssel", path: "/werkgebied/krimpen-aan-den-ijssel/", description: "Kraamzorg in Krimpen aan den IJssel" },
  { name: "Kraamzorg Gouda", path: "/werkgebied/gouda/", description: "Kraamzorg in Gouda" },
  { name: "Kraamzorg Waddinxveen", path: "/werkgebied/waddinxveen/", description: "Kraamzorg in Waddinxveen" },
  { name: "Kraamzorg Moordrecht", path: "/werkgebied/moordrecht/", description: "Kraamzorg in Moordrecht" },
  { name: "Kraamzorg Zevenhuizen", path: "/werkgebied/zevenhuizen/", description: "Kraamzorg in Zevenhuizen" },
];

const legalPages = [
  { name: "Privacy Policy", path: "/privacy-policy/", description: "Hoe wij omgaan met jouw gegevens" },
  { name: "Cookie Policy", path: "/cookie-policy/", description: "Informatie over cookies op deze website" },
  { name: "Algemene Voorwaarden", path: "/algemene-voorwaarden/", description: "Voorwaarden voor onze diensten" },
];

export default function AllePaginasPage() {
  return (
    <main className="bg-cream-beige min-h-screen">
      <section className="pt-32 pb-16">
        <div className="container-main text-center">
          <p className="font-cinzel text-xs uppercase tracking-[0.06em] text-primary mb-4">Sitemap</p>
          <h1 className="font-cinzel text-3xl md:text-5xl uppercase text-berry-dark mb-4">Alle pagina&apos;s</h1>
          <StarIcon size="md" className="mx-auto mb-6" />
          <p className="font-body text-base md:text-lg text-berry-dark/80 max-w-xl mx-auto">
            Een overzicht van alle pagina&apos;s op deze website. Klik op een pagina om er direct naartoe te gaan.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-main max-w-2xl">
          {/* Hoofdpagina's */}
          <h2 className="font-cinzel text-lg uppercase tracking-wider text-primary mb-4">
            Hoofdpagina&apos;s
          </h2>
          <div className="space-y-3 mb-12">
            {pages.map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className="flex items-center justify-between p-5 rounded-xl bg-cream/50 border border-berry-dark/[0.08] hover:bg-cream/90 hover:border-primary/30 hover:translate-x-1 transition-all duration-200 group"
              >
                <div>
                  <span className="font-cinzel text-sm uppercase tracking-wider text-berry-dark group-hover:text-primary transition-colors">{page.name}</span>
                  <span className="block font-body text-xs text-berry-dark/50 mt-1">{page.description}</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0"><polyline points="9 18 15 12 9 6" /></svg>
              </Link>
            ))}
          </div>

          {/* Werkgebied-detailpagina's */}
          <h2 className="font-cinzel text-lg uppercase tracking-wider text-primary mb-4">
            Werkgebied
          </h2>
          <div className="space-y-3 mb-12">
            {werkgebiedPages.map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className="flex items-center justify-between p-5 rounded-xl bg-cream/50 border border-berry-dark/[0.08] hover:bg-cream/90 hover:border-primary/30 hover:translate-x-1 transition-all duration-200 group"
              >
                <div>
                  <span className="font-cinzel text-sm uppercase tracking-wider text-berry-dark group-hover:text-primary transition-colors">{page.name}</span>
                  <span className="block font-body text-xs text-berry-dark/50 mt-1">{page.description}</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0"><polyline points="9 18 15 12 9 6" /></svg>
              </Link>
            ))}
          </div>

          {/* Juridische pagina's */}
          <h2 className="font-cinzel text-lg uppercase tracking-wider text-primary mb-4">
            Juridisch
          </h2>
          <div className="space-y-3">
            {legalPages.map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className="flex items-center justify-between p-5 rounded-xl bg-cream/50 border border-berry-dark/[0.08] hover:bg-cream/90 hover:border-primary/30 hover:translate-x-1 transition-all duration-200 group"
              >
                <div>
                  <span className="font-cinzel text-sm uppercase tracking-wider text-berry-dark group-hover:text-primary transition-colors">{page.name}</span>
                  <span className="block font-body text-xs text-berry-dark/50 mt-1">{page.description}</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0"><polyline points="9 18 15 12 9 6" /></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
