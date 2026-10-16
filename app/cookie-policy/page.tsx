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

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-24">
        {/* Zachte blush-gloed rechts */}
        <div
          className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blush/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
          {/* Klein label met sterretje */}
          <div className="mb-8 flex items-center justify-center gap-2">
            <span className="text-primary text-xs">✦</span>
            <span className="font-cinzel text-[11px] uppercase tracking-[0.28em] text-primary">
              Juridisch
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-cinzel text-4xl uppercase leading-[1.1] text-berry-dark sm:text-5xl lg:text-6xl">
            Cookie<span className="text-primary">beleid</span>
          </h1>

          {/* Sierlijn */}
          <div className="mx-auto my-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-primary">✦</span>
            <span className="h-px w-12 bg-primary/40" />
          </div>

          {/* Subtitel */}
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-berry-dark/80 sm:text-xl">
            Marley&apos;s Kraamzorg Rotterdam. Transparantie over het gebruik
            van cookies op onze website.
          </p>
        </div>
      </section>

      {/* ═══════ CONTENT ═══════ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          {/* Inleiding */}
          <div className="mb-16 text-center">
            <p className="font-sans text-base leading-relaxed text-berry-dark/80 md:text-lg">
              Welkom op de website van Marley&apos;s Kraamzorg. Wij vinden uw
              privacy belangrijk en gaan zorgvuldig om met persoonsgegevens. Op
              deze pagina leggen wij uit welke cookies wij gebruiken, waarom wij
              deze gebruiken en hoe u uw voorkeuren kunt beheren.
            </p>
            <p className="mt-4 font-sans text-sm italic leading-relaxed text-berry-dark/60">
              Door gebruik te maken van onze website gaat u akkoord met het
              gebruik van cookies zoals beschreven in deze verklaring.
            </p>
          </div>

          {/* ── Sectie 1 ── */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-cinzel text-sm text-primary/60">01</span>
              <span className="text-primary text-xs">✦</span>
            </div>
            <h2 className="mb-6 font-cinzel text-2xl uppercase leading-tight text-berry-dark sm:text-3xl">
              Wat zijn cookies?
            </h2>
            <p className="font-sans text-base leading-relaxed text-berry-dark/80">
              Cookies zijn kleine tekstbestanden die tijdens uw bezoek aan onze
              website op uw computer, tablet of smartphone worden opgeslagen.
              Deze bestanden helpen de website correct te functioneren en geven
              ons inzicht in het gebruik van de website, zodat wij onze
              dienstverlening kunnen verbeteren.
            </p>
          </div>

          {/* ── Sectie 2 ── */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-cinzel text-sm text-primary/60">02</span>
              <span className="text-primary text-xs">✦</span>
            </div>
            <h2 className="mb-8 font-cinzel text-2xl uppercase leading-tight text-berry-dark sm:text-3xl">
              Welke cookies gebruiken wij?
            </h2>

            <div className="space-y-12">
              {/* Functionele */}
              <div>
                <h3 className="mb-4 font-cinzel text-lg uppercase leading-tight text-primary">
                  Functionele cookies
                </h3>
                <p className="mb-4 font-sans text-base leading-relaxed text-berry-dark/80">
                  Deze cookies zijn noodzakelijk voor het goed functioneren van
                  de website. Zonder deze cookies kunnen bepaalde onderdelen van
                  de website niet correct werken.
                </p>
                <ul className="mb-4 space-y-2 font-sans text-sm text-berry-dark/75">
                  {[
                    "Het onthouden van cookievoorkeuren",
                    "Beveiliging van formulieren",
                    "Correct functioneren van de website op verschillende apparaten",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex-shrink-0 text-primary">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-sans text-xs italic leading-relaxed text-berry-dark/50">
                  Deze cookies verzamelen geen persoonlijke gegevens.
                </p>
              </div>

              {/* Analytische */}
              <div>
                <h3 className="mb-4 font-cinzel text-lg uppercase leading-tight text-primary">
                  Analytische cookies
                </h3>
                <p className="mb-4 font-sans text-base leading-relaxed text-berry-dark/80">
                  Wij gebruiken analytische cookies om inzicht te krijgen in het
                  gebruik van onze website. Hiermee kunnen wij de prestaties van
                  de website verbeteren en de gebruikservaring optimaliseren.
                </p>
                <p className="mb-4 font-sans text-sm text-berry-dark/75">
                  Wij gebruiken onder andere:{" "}
                  <span className="font-semibold text-berry-dark">
                    Google Analytics
                  </span>
                </p>
                <p className="font-sans text-xs italic leading-relaxed text-berry-dark/50">
                  De gegevens worden zoveel mogelijk geanonimiseerd en niet
                  gebruikt om bezoekers persoonlijk te identificeren.
                </p>
              </div>

              {/* Marketing */}
              <div>
                <h3 className="mb-4 font-cinzel text-lg uppercase leading-tight text-primary">
                  Marketing- en trackingcookies
                </h3>
                <p className="mb-4 font-sans text-base leading-relaxed text-berry-dark/80">
                  Met marketingcookies kunnen wij relevante informatie en
                  advertenties tonen via externe platforms zoals Google of social
                  media.
                </p>
                <ul className="mb-4 space-y-2 font-sans text-sm text-berry-dark/75">
                  {[
                    "Het meten van advertentieprestaties",
                    "Remarketingcampagnes",
                    "Het tonen van relevante content",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex-shrink-0 text-primary">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-sans text-xs italic leading-relaxed text-berry-dark/50">
                  Deze cookies worden alleen geplaatst nadat u hiervoor
                  toestemming heeft gegeven.
                </p>
              </div>
            </div>
          </div>

          {/* ── Sectie 3 ── */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-cinzel text-sm text-primary/60">03</span>
              <span className="text-primary text-xs">✦</span>
            </div>
            <h2 className="mb-6 font-cinzel text-2xl uppercase leading-tight text-berry-dark sm:text-3xl">
              Cookies beheren of uitschakelen
            </h2>
            <p className="mb-4 font-sans text-base leading-relaxed text-berry-dark/80">
              Bij uw eerste bezoek aan onze website kunt u uw cookievoorkeuren
              instellen via de cookiebanner.
            </p>
            <p className="mb-8 font-sans text-base leading-relaxed text-berry-dark/80">
              U kunt cookies daarnaast altijd verwijderen of blokkeren via de
              instellingen van uw browser. Houd er rekening mee dat sommige
              onderdelen van de website hierdoor mogelijk minder goed
              functioneren.
            </p>

            <p className="mb-4 font-sans text-sm text-berry-dark/75">
              Meer informatie over het beheren van cookies vindt u via de
              helpfunctie van uw browser:
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
                  className="inline-flex items-center gap-2 rounded-full border border-berry-dark/10 bg-white px-4 py-2 font-cinzel text-xs uppercase tracking-wider text-primary transition-all hover:border-primary/30 hover:bg-primary/[0.03]"
                >
                  <span>{browser.label}</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Sectie 4 ── */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-cinzel text-sm text-primary/60">04</span>
              <span className="text-primary text-xs">✦</span>
            </div>
            <h2 className="mb-6 font-cinzel text-2xl uppercase leading-tight text-berry-dark sm:text-3xl">
              Persoonsgegevens en privacy
            </h2>
            <p className="font-sans text-base leading-relaxed text-berry-dark/80">
              Voor meer informatie over hoe wij omgaan met persoonsgegevens
              verwijzen wij u naar onze{" "}
              <a
                href="/privacy-policy/"
                className="font-semibold text-primary hover:underline"
              >
                privacyverklaring
              </a>
              .
            </p>
          </div>

          {/* ── Sectie 5 ── */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-cinzel text-sm text-primary/60">05</span>
              <span className="text-primary text-xs">✦</span>
            </div>
            <h2 className="mb-6 font-cinzel text-2xl uppercase leading-tight text-berry-dark sm:text-3xl">
              Wijzigingen in deze cookieverklaring
            </h2>
            <p className="font-sans text-base leading-relaxed text-berry-dark/80">
              Marley&apos;s Kraamzorg behoudt zich het recht voor deze
              cookieverklaring te wijzigen. Wij adviseren u deze pagina
              regelmatig te raadplegen zodat u op de hoogte blijft van eventuele
              wijzigingen.
            </p>
          </div>

          {/* ── Contact ── */}
          <div className="mt-16 rounded-2xl border border-berry-dark/[0.08] bg-white p-8 shadow-card sm:p-10">
            <div className="mb-6 flex items-center gap-4">
              <span className="text-primary text-xs">✦</span>
              <h2 className="font-cinzel text-lg uppercase text-berry-dark">
                Contactgegevens
              </h2>
            </div>
            <p className="mb-2 font-sans text-base leading-relaxed text-berry-dark/85">
              <strong className="font-semibold text-berry-dark">
                Marley&apos;s Kraamzorg
              </strong>
            </p>
            <p className="mb-4 font-sans text-sm text-berry-dark/70">
              Rotterdam, Nederland
            </p>
            <p className="font-sans text-sm leading-relaxed text-berry-dark/85">
              Heeft u vragen over ons cookiebeleid of uw privacy? Neem dan
              gerust contact met ons op via het{" "}
              <a
                href="/contact/"
                className="font-semibold text-primary hover:underline"
              >
                contactformulier
              </a>{" "}
              op onze website.
            </p>
          </div>

          {/* Laatst bijgewerkt */}
          <p className="mt-12 text-center font-sans text-xs text-berry-dark/40">
            Laatst bijgewerkt:{" "}
            {new Date().toLocaleDateString("nl-NL", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </section>
    </main>
  );
}
