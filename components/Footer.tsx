"use client";

import Link from "next/link";
import Image from "next/image";

const sitemapLinks = [
  { label: "Home", href: "/" },
  { label: "Over mij", href: "/over-mij/" },
  { label: "Kraamzorg", href: "/kraamzorg/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Werkgebied", href: "/werkgebied/" },
  { label: "Contact", href: "/contact/" },
];

const samenwerkingen = [
  { label: "Verloskundigen Zuidplas", href: "https://verloskundigenpraktijkzuidplas.nl/" },
  { label: "IVE Verloskundigen", href: "https://www.ive-verloskundigen.nl/" },
  { label: "VIVE Verloskundigen", href: "https://www.viveverloskundigen.nl/" },
  { label: "Cindy's Kraamzorg", href: "https://cindyskraamzorg.nl/" },
  { label: "Nathalie · Lactatiekundige", href: "https://nathalielactatiekundigebegeleiding.nl/" },
];

const certificeringen = [
  { label: "KCKZ", href: "https://www.kckz.nl/", sub: "Kraamzorg Certificatie" },
  { label: "Kraammarkt", href: "https://kraammarkt.nl/", sub: "Dienstverlening" },
  { label: "Kiwa", href: "https://www.kiwa.com/nl/nl/", sub: "Gecertificeerd" },
];

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-berry-dark text-cream">
      {/* Subtiele premium achtergrond gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-berry-dark to-berry-dark pointer-events-none" />

      <div className="relative z-10">
        
        {/* ═══════ HOOFD FOOTER GRID ═══════ */}
        <div className="container-main pb-12 pt-16 md:pt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            
            {/* Blok 1: Logo & bedrijfsgegevens */}
            <div>
              <Link href="/" className="mb-6 inline-block">
                <Image
                  src="/images/logo-new.webp"
                  alt="Marley's Kraamzorg"
                  width={200}
                  height={80}
                  className="h-16 w-auto"
                />
              </Link>
              <p className="mb-6 font-sans text-sm leading-relaxed text-cream/70">
                Persoonlijke kraamzorg in Rotterdam met één vast gezicht.
              </p>
              <div className="space-y-2 font-sans text-xs text-cream/60">
                <p>KvK: 92463398</p>
                <p>KCKZ: 218156</p>
              </div>
            </div>

            {/* Blok 2: Sitemap */}
            <div>
              <h2 className="mb-4 font-cinzel text-sm uppercase tracking-wider text-cream">
                Sitemap
              </h2>
              <div className="mb-6 flex items-center gap-2">
                <span className="h-px w-8 bg-primary/60" />
              </div>
              <ul className="space-y-3">
                {sitemapLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="font-sans text-sm text-cream/70 transition-colors duration-200 hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blok 3: Samenwerkingen */}
            <div>
              <h2 className="mb-4 font-cinzel text-sm uppercase tracking-wider text-cream">
                Samenwerkingen
              </h2>
              <div className="mb-6 flex items-center gap-2">
                <span className="h-px w-8 bg-primary/60" />
              </div>
              <ul className="space-y-3">
                {samenwerkingen.map((s) => (
                  <li key={s.href}>
                    <ExternalLink href={s.href} className="flex items-center gap-2 font-sans text-sm text-cream/70 transition-colors duration-200 hover:text-primary">
                      <span className="text-[8px] text-primary/50">✦</span>
                      {s.label}
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blok 4: Contact */}
            <div>
              <h2 className="mb-4 font-cinzel text-sm uppercase tracking-wider text-cream">
                Contact
              </h2>
              <div className="mb-6 flex items-center gap-2">
                <span className="h-px w-8 bg-primary/60" />
              </div>
              <div className="space-y-4 font-sans text-sm text-cream/70">
                <p className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-primary/80">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Dr. J.J.P. Oudsingel 62, Rotterdam</span>
                </p>
                <a href="tel:+31645041484" className="flex items-center gap-3 transition-colors hover:text-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-primary/80">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.11 4.1 2 2 0 014.11 2h3a2 2 0 012 1.72 12.13 12.13 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.13 12.13 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <span>06 - 450 414 84</span>
                </a>
                <a href="mailto:info@marleyskraamzorg.nl" className="flex items-center gap-3 transition-colors hover:text-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-primary/80">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                  <span>info@marleyskraamzorg.nl</span>
                </a>
                <div className="pt-2 text-xs text-cream/50">
                  <p>Kantoor: 08:00 - 22:00</p>
                  <p>Spoed/actief: 24/7 bereikbaar</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ═══════ CERTIFICERINGEN & LEGAL (Premium Bottom Bar) ═══════ */}
        <div className="border-t border-cream/[0.08] bg-black/20">
          <div className="container-main py-6">
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              
              {/* Certificeringen */}
              <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                {certificeringen.map((cert) => (
                  <ExternalLink key={cert.label} href={cert.href} className="group text-center lg:text-left">
                    <div className="font-cinzel text-xs uppercase tracking-wider text-cream/90 transition-colors group-hover:text-primary">
                      {cert.label}
                    </div>
                    <div className="mt-0.5 font-sans text-[10px] text-cream/50">
                      {cert.sub}
                    </div>
                  </ExternalLink>
                ))}
              </div>

              {/* Juridische links & Copyright */}
              <div className="flex flex-col items-center gap-3 lg:items-end">
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-sans text-xs">
                  <Link href="/privacy-policy/" className="text-cream/60 transition-colors hover:text-cream">Privacy Policy</Link>
                  <span className="text-cream/20">|</span>
                  <Link href="/cookie-policy/" className="text-cream/60 transition-colors hover:text-cream">Cookie Policy</Link>
                  <span className="text-cream/20">|</span>
                  <Link href="/algemene-voorwaarden/" className="text-cream/60 transition-colors hover:text-cream">Algemene Voorwaarden</Link>
                </div>
                <p className="font-sans text-xs text-cream/40 text-center lg:text-right">
                  &copy; {currentYear} Marley&apos;s Kraamzorg. Webdesign door{" "}
                  <ExternalLink href="https://www.webboostpartner.nl/" className="underline transition-colors hover:text-cream">
                    Webboostpartner
                  </ExternalLink>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
