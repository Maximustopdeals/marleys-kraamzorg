import type { Metadata } from "next";
import Link from "next/link";
import { StarIcon } from "@/components/StarIcon";

export const metadata: Metadata = {
  title: "Sitemap | Alle pagina's - Marley's Kraamzorg",
  description: "Overzicht van alle pagina's op marleyskraamzorg.nl. Vind snel wat je zoekt.",
  robots: {
    index: true,
    follow: true,
  },
};

const pages = [
  { name: "Home", path: "/", description: "Startpagina — welkom bij Marley's Kraamzorg" },
  { name: "Over mij", path: "/over-mij/", description: "Lisa's verhaal en achtergrond" },
  { name: "Kraamzorg", path: "/kraamzorg/", description: "Diensten en zorgpakketten" },
  { name: "Reviews", path: "/reviews/", description: "Ervaringen van ouders" },
  { name: "Werkgebied", path: "/werkgebied/", description: "Regio's waar ik werk" },
  { name: "Contact", path: "/contact/", description: "Contactformulier en gegevens" },
  { name: "Alle pagina's", path: "/alle-paginas/", description: "Deze pagina — overzicht van alle pagina's" },
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
          <div className="space-y-3">
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
          <div className="mt-12 text-center">
            <p className="font-body text-sm text-berry-dark/50 mb-2">De volgende pagina&apos;s zijn niet zichtbaar in het menu maar wel toegankelijk:</p>
            <p className="font-body text-xs text-berry-dark/40">Privacy Policy, Cookie Policy</p>
          </div>
        </div>
      </section>
    </main>
  );
}
