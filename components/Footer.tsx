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
  { label: "Nathalie · Lactatiekundige begeleiding", href: "https://nathalielactatiekundigebegeleiding.nl/" },
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

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
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
    <footer className="relative overflow-hidden bg-berry-dark text-cream">
      {/* Top subtle glow */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(154,30,97,0.3) 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container-main pb-16 pt-20 md:pt-24">
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
              <p className="mb-6 font-sans text-sm leading-relaxed text-cream/80">
                Persoonlijke kraamzorg in Rotterdam met één vast gezicht.
              </p>
              <div className="space-y-2 font-sans text-xs text-cream/60">
                <p>KvK: 92463398</p>
                <p>KCKZ: 218156</p>
              </div>
            </div>

            {/* Blok 2: Sitemap */}
            <div>
              <h4 className="mb-4 font-cinzel text-base uppercase tracking-[0.06em]">
                Sitemap
              </h4>
              <div className="mb-6 flex items-center gap-2">
                <span className="h-px w-8 bg-cream/30" />
                <span className="text-[8px] text-cream/40">✦</span>
              </div>
              <ul className="space-y-3">
                {sitemapLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-sans text-sm text-cream/80 transition-colors duration-150 hover:text-cream"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blok 3: Contact */}
            <div>
              <h4 className="mb-4 font-cinzel text-base uppercase tracking-[0.06em]">
                Contact
              </h4>
              <div className="mb-6 flex items-center gap-2">
                <span className="h-px w-8 bg-cream/30" />
                <span className="text-[8px] text-cream/40">✦</span>
              </div>
              <div className="space-y-4 font-sans text-sm text-cream/80">
                <p className="flex items-start gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 flex-shrink-0 text-cream/60"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Dr. J.J.P. Oudsingel 62, Rotterdam</span>
                </p>
                <a
                  href="tel:+31645041484"
                  className="flex items-center gap-3 transition-colors hover:text-cream"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 text-cream/60"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.11 4.1 2 2 0 014.11 2h3a2 2 0 012 1.72 12.13 12.13 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.13 12.13 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <span>06 - 450 414 84</span>
                </a>
                <a
                  href="mailto:info@marleyskraamzorg.nl"
                  className="flex items-center gap-3 transition-colors hover:text-cream"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 text-cream/60"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                  <span>info@marleyskraamzorg.nl</span>
                </a>
              </div>
            </div>

            {/* Blok 4: Samenwerkingen */}
            <div>
              <h4 className="mb-4 font-cinzel text-base uppercase tracking-[0.06em]">
                Samenwerkingen
              </h4>
              <div className="mb-6 flex items-center gap-2">
                <span className="h-px w-8 bg-cream/30" />
                <span className="text-[8px] text-cream/40">✦</span>
              </div>
              <ul className="space-y-3">
                {samenwerkingen.map((s) => (
                  <li key={s.href}>
                    <ExternalLink
                      href={s.href}
                      className="flex items-center gap-2 font-sans text-sm text-cream/80 transition-colors duration-150 hover:text-cream"
                    >
                      <span className="text-[8px] text-cream/40">✦</span>
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
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
              {certificeringen.map((cert) => (
                <ExternalLink
                  key={cert.label}
                  href={cert.href}
                  className="group text-center"
                >
                  <div className="font-cinzel text-sm uppercase tracking-wider text-cream/70 transition-colors group-hover:text-cream">
                    {cert.label}
                  </div>
                  <div className="mt-0.5 font-sans text-[10px] text-cream/45">
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
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              {/* Copyright */}
              <p className="font-sans text-xs text-cream/50">
                &copy; {currentYear} Marley&apos;s Kraamzorg
              </p>

              {/* Juridische links */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-sans text-xs">
                <Link
                  href="/privacy-policy/"
                  className="text-cream/50 transition-colors hover:text-cream"
                >
                  Privacy Policy
                </Link>
                <span className="text-cream/20">✦</span>
                <Link
                  href="/cookie-policy/"
                  className="text-cream/50 transition-colors hover:text-cream"
                >
                  Cookie Policy
                </Link>
                <span className="text-cream/20">✦</span>
                <Link
                  href="/algemene-voorwaarden/"
                  className="text-cream/50 transition-colors hover:text-cream"
                >
                  Algemene Voorwaarden
                </Link>
              </div>

              {/* Webdesign credit */}
              <p className="font-sans text-xs text-cream/50">
                Webdesign door{" "}
                <ExternalLink
                  href="https://www.webboostpartner.nl/"
                  className="underline transition-colors hover:text-cream"
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
