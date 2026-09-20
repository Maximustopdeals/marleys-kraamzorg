import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookiebeleid",
  description:
    "Cookiebeleid van Marley's Kraamzorg Rotterdam. Lees welke cookies wij gebruiken, waarom wij deze gebruiken en hoe u uw voorkeuren kunt beheren.",
  alternates: {
    canonical: "https://www.marleyskraamzorg.nl/cookie-policy/",
  },
  openGraph: {
    type: "article",
    locale: "nl_NL",
    url: "https://www.marleyskraamzorg.nl/cookie-policy/",
    siteName: "Marley's Kraamzorg",
    title: "Cookiebeleid | Marley's Kraamzorg",
    description:
      "Lees ons cookiebeleid en ontdek hoe wij cookies gebruiken voor een optimale ervaring.",
  },
};

/* ── Page ── */
export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#F5EDE3]">
      {/* ═══════ HERO ═══════ */}
      <section className="relative w-full overflow-hidden flex items-center justify-center bg-[#F5EDE3] py-20 md:py-28">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-berry-dark">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 border border-berry-dark/10 rounded-full px-5 py-2 mb-6">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9A1E61"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="font-cinzel text-xs uppercase tracking-[0.12em] text-berry-dark/80">
              Juridisch
            </span>
          </div>

          <h1 className="font-cinzel text-3xl md:text-4xl lg:text-5xl uppercase text-berry-dark leading-tight tracking-tight mb-6">
            Cookiebeleid
          </h1>
          <div className="w-16 h-0.5 bg-berry-dark/20 mx-auto mb-6" />
          <p className="font-body text-base md:text-lg text-berry-dark/85 max-w-2xl mx-auto leading-relaxed">
            Marley&apos;s Kraamzorg Rotterdam — Transparantie over het gebruik van cookies op onze
            website.
          </p>
        </div>
      </section>

      {/* ═══════ CONTENT ═══════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            {/* Intro kaart */}
            <div className="bg-[#F5EDE3] rounded-2xl p-8 md:p-10 mb-10 shadow-card">
              <p className="font-body text-base md:text-lg text-berry-dark/90 leading-relaxed">
                Welkom op de website van Marley&apos;s Kraamzorg. Wij vinden uw privacy belangrijk en
                gaan zorgvuldig om met persoonsgegevens. Op deze pagina leggen wij uit welke cookies
                wij gebruiken, waarom wij deze gebruiken en hoe u uw voorkeuren kunt beheren.
              </p>
              <p className="font-body text-sm text-berry-dark/70 leading-relaxed mt-4 italic">
                Door gebruik te maken van onze website gaat u akkoord met het gebruik van cookies
                zoals beschreven in deze verklaring.
              </p>
            </div>

            {/* ── Sectie 1 ── */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-cream font-cinzel text-sm flex-shrink-0">
                  1
                </div>
                <h2 className="font-cinzel text-xl md:text-2xl uppercase text-berry-dark">
                  Wat zijn cookies?
                </h2>
              </div>
              <div className="pl-14">
                <p className="font-body text-sm md:text-base text-berry-dark/85 leading-relaxed">
                  Cookies zijn kleine tekstbestanden die tijdens uw bezoek aan onze website op uw
                  computer, tablet of smartphone worden opgeslagen. Deze bestanden helpen de website
                  correct te functioneren en geven ons inzicht in het gebruik van de website, zodat
                  wij onze dienstverlening kunnen verbeteren.
                </p>
              </div>
            </div>

            {/* ── Sectie 2 ── */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-cream font-cinzel text-sm flex-shrink-0">
                  2
                </div>
                <h2 className="font-cinzel text-xl md:text-2xl uppercase text-berry-dark">
                  Welke cookies gebruiken wij?
                </h2>
              </div>

              <div className="pl-14 space-y-6">
                {/* Functionele */}
                <div className="border-l-3 border-primary pl-6 py-2">
                  <h3 className="font-cinzel text-sm uppercase tracking-wider text-primary mb-3">
                    Functionele cookies
                  </h3>
                  <p className="font-body text-sm md:text-base text-berry-dark/85 leading-relaxed mb-4">
                    Deze cookies zijn noodzakelijk voor het goed functioneren van de website. Zonder
                    deze cookies kunnen bepaalde onderdelen van de website niet correct werken.
                  </p>
                  <ul className="space-y-2 font-body text-sm text-berry-dark/75">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">✦</span>
                      <span>Het onthouden van cookievoorkeuren</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">✦</span>
                      <span>Beveiliging van formulieren</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">✦</span>
                      <span>Correct functioneren van de website op verschillende apparaten</span>
                    </li>
                  </ul>
                  <p className="font-body text-xs text-berry-dark/60 mt-4 italic">
                    Deze cookies verzamelen geen persoonlijke gegevens.
                  </p>
                </div>

                {/* Analytische */}
                <div className="border-l-3 border-primary pl-6 py-2">
                  <h3 className="font-cinzel text-sm uppercase tracking-wider text-primary mb-3">
                    Analytische cookies
                  </h3>
                  <p className="font-body text-sm md:text-base text-berry-dark/85 leading-relaxed mb-4">
                    Wij gebruiken analytische cookies om inzicht te krijgen in het gebruik van onze
                    website. Hiermee kunnen wij de prestaties van de website verbeteren en de
                    gebruikservaring optimaliseren.
                  </p>
                  <p className="font-body text-sm text-berry-dark/75">
                    Wij gebruiken onder andere:{" "}
                    <span className="font-semibold">Google Analytics</span>
                  </p>
                  <p className="font-body text-xs text-berry-dark/60 mt-4 italic">
                    De gegevens worden zoveel mogelijk geanonimiseerd en niet gebruikt om bezoekers
                    persoonlijk te identificeren.
                  </p>
                </div>

                {/* Marketing */}
                <div className="border-l-3 border-primary pl-6 py-2">
                  <h3 className="font-cinzel text-sm uppercase tracking-wider text-primary mb-3">
                    Marketing- en trackingcookies
                  </h3>
                  <p className="font-body text-sm md:text-base text-berry-dark/85 leading-relaxed mb-4">
                    Met marketingcookies kunnen wij relevante informatie en advertenties tonen via
                    externe platforms zoals Google of social media.
                  </p>
                  <ul className="space-y-2 font-body text-sm text-berry-dark/75">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">✦</span>
                      <span>Het meten van advertentieprestaties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">✦</span>
                      <span>Remarketingcampagnes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">✦</span>
                      <span>Het tonen van relevante content</span>
                    </li>
                  </ul>
                  <p className="font-body text-xs text-berry-dark/60 mt-4 italic">
                    Deze cookies worden alleen geplaatst nadat u hiervoor toestemming heeft gegeven.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Sectie 3 ── */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-cream font-cinzel text-sm flex-shrink-0">
                  3
                </div>
                <h2 className="font-cinzel text-xl md:text-2xl uppercase text-berry-dark">
                  Cookies beheren of uitschakelen
                </h2>
              </div>
              <div className="pl-14">
                <p className="font-body text-sm md:text-base text-berry-dark/85 leading-relaxed mb-4">
                  Bij uw eerste bezoek aan onze website kunt u uw cookievoorkeuren instellen via de
                  cookiebanner.
                </p>
                <p className="font-body text-sm md:text-base text-berry-dark/85 leading-relaxed mb-6">
                  U kunt cookies daarnaast altijd verwijderen of blokkeren via de instellingen van
                  uw browser. Houd er rekening mee dat sommige onderdelen van de website hierdoor
                  mogelijk minder goed functioneren.
                </p>
                <div className="bg-[#F5EDE3] rounded-xl p-6">
                  <p className="font-body text-sm text-berry-dark/80 mb-3">
                    Meer informatie over het beheren van cookies vindt u via de helpfunctie van uw
                    browser:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: "Google Chrome", href: "https://support.google.com/chrome/answer/95647" },
                      { label: "Mozilla Firefox", href: "https://support.mozilla.org/kb/cookies-informatie-websites-opslaan" },
                      { label: "Safari", href: "https://support.apple.com/nl-nl/guide/safari/sfri11471" },
                      { label: "Microsoft Edge", href: "https://support.microsoft.com/nl-nl/microsoft-edge/cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
                    ].map((browser) => (
                      <a
                        key={browser.label}
                        href={browser.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-cinzel text-xs uppercase tracking-wider text-primary hover:underline transition-colors"
                      >
                        <span>{browser.label}</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Sectie 4 ── */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-cream font-cinzel text-sm flex-shrink-0">
                  4
                </div>
                <h2 className="font-cinzel text-xl md:text-2xl uppercase text-berry-dark">
                  Persoonsgegevens en privacy
                </h2>
              </div>
              <div className="pl-14">
                <p className="font-body text-sm md:text-base text-berry-dark/85 leading-relaxed">
                  Voor meer informatie over hoe wij omgaan met persoonsgegevens verwijzen wij u naar
                  onze privacyverklaring.
                </p>
              </div>
            </div>

            {/* ── Sectie 5 ── */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-cream font-cinzel text-sm flex-shrink-0">
                  5
                </div>
                <h2 className="font-cinzel text-xl md:text-2xl uppercase text-berry-dark">
                  Wijzigingen in deze cookieverklaring
                </h2>
              </div>
              <div className="pl-14">
                <p className="font-body text-sm md:text-base text-berry-dark/85 leading-relaxed">
                  Marley&apos;s Kraamzorg behoudt zich het recht voor deze cookieverklaring te
                  wijzigen. Wij adviseren u deze pagina regelmatig te raadplegen zodat u op de
                  hoogte blijft van eventuele wijzigingen.
                </p>
              </div>
            </div>

            {/* ── Contact ── */}
            <div className="bg-[#F5EDE3] rounded-2xl p-8 md:p-10 mb-10 shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9A1E61" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <h2 className="font-cinzel text-lg uppercase text-berry-dark">
                  Contactgegevens
                </h2>
              </div>
              <p className="font-body text-sm md:text-base text-berry-dark/85 leading-relaxed mb-2">
                <span className="font-semibold">Marley&apos;s Kraamzorg</span>
              </p>
              <p className="font-body text-sm text-berry-dark/75 mb-4">
                Rotterdam, Nederland
              </p>
              <p className="font-body text-sm text-berry-dark/85">
                Heeft u vragen over ons cookiebeleid of uw privacy? Neem dan gerust contact met ons
                op via het{" "}
                <a href="/contact/" className="text-primary hover:underline font-semibold">
                  contactformulier
                </a>{" "}
                op onze website.
              </p>
            </div>

            {/* Laatst bijgewerkt */}
            <p className="text-xs text-berry-dark/40 text-center pt-4">
              Laatst bijgewerkt:{" "}
              {new Date().toLocaleDateString("nl-NL", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
