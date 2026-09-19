"use client";

import Link from "next/link";

const sitemapLinks = [
  { label: "Home", href: "/" },
  { label: "Over mij", href: "/over-mij/" },
  { label: "Kraamzorg", href: "/kraamzorg/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Werkgebied", href: "/werkgebied/" },
  { label: "Contact", href: "/contact/" },
];

const samenwerkingen = [
  { label: "Verloskundigen aan de Schie", href: "https://verloskundigen-aandeschie.nl/" },
  { label: "IVE Verloskundigen", href: "https://www.ive-verloskundigen.nl/" },
  { label: "VIVE Verloskundigen", href: "https://www.viveverloskundigen.nl/" },
  { label: "Cindy's Kraamzorg", href: "https://cindyskraamzorg.nl/" },
];

const certificeringen = [
  {
    label: "KCKZ",
    href: "https://www.kckz.nl/",
    sub: "Kraamzorg Certificatie",
  },
  {
    label: "Kraammarkt",
    href: "https://kraammarkt.nl/",
    sub: "Dienstverlening aan kraamverzorgenden",
  },
  {
    label: "Kiwa",
    href: "https://www.kiwa.com/nl/nl/",
    sub: "Gecertificeerd",
  },
];

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative text-cream overflow-hidden"
      style={{ backgroundColor: "#541036" }}
    >
      {/* Depth gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(120,40,80,0.4) 0%, rgba(84,16,54,1) 15%, rgba(84,16,54,1) 85%, rgba(60,10,38,0.95) 100%)",
        }}
      />
      {/* Top subtle glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(154,30,97,0.2) 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container-main pt-20 md:pt-24 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Blok 1: Logo & bedrijfsgegevens */}
            <div>
              <Link href="/" className="inline-block mb-6">
                <img
                  src="https://www.marleyskraamzorg.nl/wp-content/uploads/2026/05/Transparant-logo-MarleysKraamzorg.webp"
                  alt="Marley's Kraamzorg"
                  className="h-16 w-auto"
                />
              </Link>
              <p className="text-cream/80 text-sm leading-relaxed mb-6">
                Persoonlijke kraamzorg in Rotterdam met 1 vast gezicht
              </p>
              <div className="space-y-2 text-cream/60 text-xs">
                <p>KvK: 92463398</p>
                <p>KCKZ: 218156</p>
              </div>
            </div>

            {/* Blok 2: Sitemap */}
            <div>
              <h4 className="font-cinzel text-base uppercase tracking-[0.06em] mb-4">
                Sitemap
              </h4>
              <div className="w-8 h-0.5 bg-cream/30 mb-6" />
              <ul className="space-y-3">
                {sitemapLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-cream/80 text-sm hover:text-cream transition-colors duration-150"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blok 3: Contact */}
            <div>
              <h4 className="font-cinzel text-base uppercase tracking-[0.06em] mb-4">
                Contact
              </h4>
              <div className="w-8 h-0.5 bg-cream/30 mb-6" />
              <div className="space-y-4 text-sm text-cream/80">
                <p className="flex items-start gap-2">
                  <span>📍</span>
                  <span>Dr. J.J.P. Oudsingel 62, Rotterdam</span>
                </p>
                <a
                  href="tel:+31645041484"
                  className="flex items-center gap-2 hover:text-cream transition-colors"
                >
                  <span>📞</span>
                  <span>06 - 450 414 84</span>
                </a>
                <a
                  href="mailto:info@marleyskraamzorg.nl"
                  className="flex items-center gap-2 hover:text-cream transition-colors"
                >
                  <span>✉️</span>
                  <span>info@marleyskraamzorg.nl</span>
                </a>
              </div>
            </div>

            {/* Blok 4: Samenwerkingen */}
            <div>
              <h4 className="font-cinzel text-base uppercase tracking-[0.06em] mb-4">
                Samenwerkingen
              </h4>
              <div className="w-8 h-0.5 bg-cream/30 mb-6" />
              <ul className="space-y-3">
                {samenwerkingen.map((s) => (
                  <li key={s.href}>
                    <ExternalLink
                      href={s.href}
                      className="text-cream/80 text-sm hover:text-cream transition-colors duration-150 flex items-center gap-2"
                    >
                      <span className="text-cream/40">✦</span>
                      {s.label}
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certificeringen rij */}
        <div className="border-t border-cream/[0.08]">
          <div className="container-main py-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              {certificeringen.map((cert) => (
                <ExternalLink
                  key={cert.label}
                  href={cert.href}
                  className="text-center group"
                >
                  <div className="text-cream/70 text-sm font-cinzel uppercase tracking-wider group-hover:text-cream transition-colors">
                    {cert.label}
                  </div>
                  <div className="text-cream/45 text-[10px] mt-0.5">
                    {cert.sub}
                  </div>
                </ExternalLink>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright rij */}
        <div className="border-t border-cream/[0.06]">
          <div className="container-main py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              {/* Links */}
              <p className="text-cream/50 text-xs">
                &copy; {currentYear} Marley&apos;s Kraamzorg
              </p>

              {/* Midden */}
              <div className="flex items-center gap-3">
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/50 text-xs hover:text-cream transition-colors"
                >
                  Privacy Policy
                </a>
                <span className="text-cream/25">|</span>
                <a
                  href="/cookie-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/50 text-xs hover:text-cream transition-colors"
                >
                  Cookie Policy
                </a>
              </div>

              {/* Rechts */}
              <p className="text-cream/50 text-xs">
                Webdesign door{" "}
                <ExternalLink
                  href="https://www.webboostpartner.nl/"
                  className="underline hover:text-cream transition-colors"
                >
                  Webboostpartner
                </ExternalLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
