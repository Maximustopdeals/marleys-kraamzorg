import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacyverklaring | Marley's Kraamzorg",
  description:
    "Privacyverklaring van Marley's Kraamzorg Rotterdam. Lees hoe wij omgaan met uw persoonsgegevens.",
  alternates: {
    canonical: "https://www.marleyskraamzorg.nl/privacy-policy/",
  },
  openGraph: {
    type: "article",
    locale: "nl_NL",
    url: "https://www.marleyskraamzorg.nl/privacy-policy/",
    siteName: "Marley's Kraamzorg",
    title: "Privacyverklaring | Marley's Kraamzorg",
    description: "Lees hoe Marley's Kraamzorg omgaat met uw persoonsgegevens.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F5EDE3" }}>
      {/* ═══════ HERO ═══════ */}
      <section
        className="relative w-full overflow-hidden flex items-center justify-center py-20 md:py-28"
        style={{ backgroundColor: "#F5EDE3" }}
      >
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(74, 26, 61, 0.1)",
            }}
          >
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
            <span
              className="text-xs uppercase tracking-[0.12em]"
              style={{
                color: "#4A1A3D",
                opacity: 0.8,
                fontFamily: "Cinzel, Georgia, serif",
              }}
            >
              Juridisch
            </span>
          </div>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl uppercase leading-tight tracking-tight mb-6"
            style={{
              color: "#4A1A3D",
              fontFamily: "Cinzel, Georgia, serif",
            }}
          >
            Privacyverklaring
          </h1>
          <div
            className="w-16 h-0.5 mx-auto mb-6"
            style={{ backgroundColor: "rgba(74, 26, 61, 0.2)" }}
          />
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{
              color: "#4A1A3D",
              opacity: 0.85,
              fontFamily: "var(--font-open-sans), system-ui, sans-serif",
            }}
          >
            Marley&apos;s Kraamzorg Rotterdam — Uw privacy is voor ons belangrijk.
          </p>
        </div>
      </section>

      {/* ═══════ CONTENT ═══════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div
              className="rounded-2xl p-8 md:p-10 mb-10"
              style={{
                backgroundColor: "#F5EDE3",
                boxShadow: "0 4px 24px rgba(74, 26, 61, 0.06)",
              }}
            >
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{
                  color: "#4A1A3D",
                  opacity: 0.9,
                  fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                }}
              >
                Marley&apos;s Kraamzorg respecteert uw privacy en zorgt ervoor dat
                uw persoonsgegevens vertrouwelijk worden behandeld. In deze
                privacyverklaring leggen wij uit welke gegevens wij verzamelen, waarom
                wij dit doen en welke rechten u heeft.
              </p>
            </div>

            {/* ── Sectie 1 ── */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-cream text-sm flex-shrink-0"
                  style={{
                    backgroundColor: "#9A1E61",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  1
                </div>
                <h2
                  className="text-xl md:text-2xl uppercase"
                  style={{
                    color: "#4A1A3D",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  Welke gegevens verzamelen wij?
                </h2>
              </div>
              <div className="pl-14">
                <p
                  className="text-sm md:text-base leading-relaxed mb-4"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  Wij verzamelen de volgende persoonsgegevens die noodzakelijk zijn
                  voor het leveren van kraamzorg:
                </p>
                <ul className="space-y-2">
                  {[
                    "Naam en contactgegevens (telefoonnummer, e-mailadres)",
                    "Adres en woonplaats",
                    "Gegevens over uw zwangerschap en bevalling",
                    "Medische gegevens relevant voor de kraamzorg",
                    "Verzekeringsgegevens",
                    "Gegevens van uw pasgeborene",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      style={{
                        color: "#4A1A3D",
                        opacity: 0.75,
                        fontFamily:
                          "var(--font-open-sans), system-ui, sans-serif",
                      }}
                    >
                      <span
                        className="mt-1 flex-shrink-0"
                        style={{ color: "#9A1E61" }}
                      >
                        ✦
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Sectie 2 ── */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-cream text-sm flex-shrink-0"
                  style={{
                    backgroundColor: "#9A1E61",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  2
                </div>
                <h2
                  className="text-xl md:text-2xl uppercase"
                  style={{
                    color: "#4A1A3D",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  Waarom verzamelen wij deze gegevens?
                </h2>
              </div>
              <div className="pl-14">
                <p
                  className="text-sm md:text-base leading-relaxed mb-4"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  Wij gebruiken uw gegevens voor de volgende doeleinden:
                </p>
                <ul className="space-y-2">
                  {[
                    "Het leveren van veilige en passende kraamzorg",
                    "Het opstellen van een persoonlijk kraamzorgplan",
                    "Communicatie met u en andere betrokken zorgverleners (zoals uw verloskundige)",
                    "De overdracht van gegevens aan de jeugdgezondheidszorg (JGZ)",
                    "Facturering en declaratie bij uw zorgverzekeraar",
                    "Kwaliteitsmeting en -verbetering",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      style={{
                        color: "#4A1A3D",
                        opacity: 0.75,
                        fontFamily:
                          "var(--font-open-sans), system-ui, sans-serif",
                      }}
                    >
                      <span
                        className="mt-1 flex-shrink-0"
                        style={{ color: "#9A1E61" }}
                      >
                        ✦
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Sectie 3 ── */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-cream text-sm flex-shrink-0"
                  style={{
                    backgroundColor: "#9A1E61",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  3
                </div>
                <h2
                  className="text-xl md:text-2xl uppercase"
                  style={{
                    color: "#4A1A3D",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  Grondslag voor verwerking
                </h2>
              </div>
              <div className="pl-14">
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  Wij verwerken uw persoonsgegevens op basis van de uitvoering van
                  de zorgovereenkomst (art. 6 lid 1b AVG) en waar wettelijk
                  verplicht (art. 6 lid 1c AVG). Voor bijzondere persoonsgegevens
                  (medische gegevens) geldt de grondslag van art. 9 lid 2h AVG:
                  verwerking is noodzakelijk voor de verlening van gezondheidszorg.
                </p>
              </div>
            </div>

            {/* ── Sectie 4 ── */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-cream text-sm flex-shrink-0"
                  style={{
                    backgroundColor: "#9A1E61",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  4
                </div>
                <h2
                  className="text-xl md:text-2xl uppercase"
                  style={{
                    color: "#4A1A3D",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  Bewaartermijn
                </h2>
              </div>
              <div className="pl-14">
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk. Voor
                  medische gegevens geldt een wettelijke bewaartermijn van 15 jaar.
                  Na afloop van deze termijn worden uw gegevens vernietigd of
                  geanonimiseerd.
                </p>
              </div>
            </div>

            {/* ── Sectie 5 ── */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-cream text-sm flex-shrink-0"
                  style={{
                    backgroundColor: "#9A1E61",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  5
                </div>
                <h2
                  className="text-xl md:text-2xl uppercase"
                  style={{
                    color: "#4A1A3D",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  Delen met derden
                </h2>
              </div>
              <div className="pl-14">
                <p
                  className="text-sm md:text-base leading-relaxed mb-4"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  Wij delen uw gegevens uitsluitend met partijen die noodzakelijk
                  zijn voor de uitvoering van de kraamzorg:
                </p>
                <ul className="space-y-2">
                  {[
                    "Uw verloskundige en andere betrokken zorgverleners",
                    "Jeugdgezondheidszorg (JGZ) voor de overdracht na de kraamperiode",
                    "Uw zorgverzekeraar voor declaratie",
                    "Het KCKZ voor kwaliteitsregistratie (geanonimiseerd waar mogelijk)",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      style={{
                        color: "#4A1A3D",
                        opacity: 0.75,
                        fontFamily:
                          "var(--font-open-sans), system-ui, sans-serif",
                      }}
                    >
                      <span
                        className="mt-1 flex-shrink-0"
                        style={{ color: "#9A1E61" }}
                      >
                        ✦
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p
                  className="text-sm leading-relaxed mt-4"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  Wij verkopen uw gegevens nooit aan derden.
                </p>
              </div>
            </div>

            {/* ── Sectie 6 ── */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-cream text-sm flex-shrink-0"
                  style={{
                    backgroundColor: "#9A1E61",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  6
                </div>
                <h2
                  className="text-xl md:text-2xl uppercase"
                  style={{
                    color: "#4A1A3D",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  Uw rechten
                </h2>
              </div>
              <div className="pl-14">
                <p
                  className="text-sm md:text-base leading-relaxed mb-4"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  Onder de AVG heeft u de volgende rechten:
                </p>
                <ul className="space-y-2">
                  {[
                    "Recht op inzage in uw persoonsgegevens",
                    "Recht op correctie of aanvulling van onjuiste gegevens",
                    "Recht op vergetelheid (verwijdering van gegevens)",
                    "Recht op beperking van de verwerking",
                    "Recht op gegevensoverdraagbaarheid",
                    "Recht van bezwaar tegen de verwerking",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      style={{
                        color: "#4A1A3D",
                        opacity: 0.75,
                        fontFamily:
                          "var(--font-open-sans), system-ui, sans-serif",
                      }}
                    >
                      <span
                        className="mt-1 flex-shrink-0"
                        style={{ color: "#9A1E61" }}
                      >
                        ✦
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p
                  className="text-sm leading-relaxed mt-4"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  Wilt u gebruik maken van uw rechten? Neem dan contact met ons op
                  via het contactformulier of per e-mail.
                </p>
              </div>
            </div>

            {/* ── Sectie 7 ── */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-cream text-sm flex-shrink-0"
                  style={{
                    backgroundColor: "#9A1E61",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  7
                </div>
                <h2
                  className="text-xl md:text-2xl uppercase"
                  style={{
                    color: "#4A1A3D",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  Beveiliging
                </h2>
              </div>
              <div className="pl-14">
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  Wij nemen passende technische en organisatorische maatregelen om
                  uw persoonsgegevens te beschermen tegen verlies, ongeautoriseerde
                  toegang of wijziging. Dit omvat onder andere versleuteling,
                  toegangsbeheer en regelmatige beveiligingscontroles.
                </p>
              </div>
            </div>

            {/* ── Sectie 8 ── */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-cream text-sm flex-shrink-0"
                  style={{
                    backgroundColor: "#9A1E61",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  8
                </div>
                <h2
                  className="text-xl md:text-2xl uppercase"
                  style={{
                    color: "#4A1A3D",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  Cookies
                </h2>
              </div>
              <div className="pl-14">
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  Op onze website gebruiken wij cookies. Voor meer informatie over
                  het gebruik van cookies verwijzen wij u naar onze{" "}
                  <a
                    href="/cookie-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline"
                    style={{ color: "#9A1E61" }}
                  >
                    cookieverklaring
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* ── Sectie 9 ── */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-cream text-sm flex-shrink-0"
                  style={{
                    backgroundColor: "#9A1E61",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  9
                </div>
                <h2
                  className="text-xl md:text-2xl uppercase"
                  style={{
                    color: "#4A1A3D",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  Wijzigingen
                </h2>
              </div>
              <div className="pl-14">
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  Wij behouden ons het recht voor om deze privacyverklaring te
                  wijzigen. Wij adviseren u deze pagina regelmatig te raadplegen
                  zodat u op de hoogte blijft van eventuele wijzigingen.
                </p>
              </div>
            </div>

            {/* ── Contact ── */}
            <div
              className="rounded-2xl p-8 md:p-10 mb-10"
              style={{
                backgroundColor: "#F5EDE3",
                boxShadow: "0 4px 24px rgba(74, 26, 61, 0.06)",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9A1E61"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <h2
                  className="text-lg uppercase"
                  style={{
                    color: "#4A1A3D",
                    fontFamily: "Cinzel, Georgia, serif",
                  }}
                >
                  Contact
                </h2>
              </div>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{
                  color: "#4A1A3D",
                  opacity: 0.85,
                  fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                }}
              >
                Heeft u vragen over onze privacyverklaring of wilt u gebruik maken
                van uw rechten? Neem contact op via{" "}
                <a
                  href="mailto:info@marleyskraamzorg.nl"
                  className="font-semibold hover:underline"
                  style={{ color: "#9A1E61" }}
                >
                  info@marleyskraamzorg.nl
                </a>{" "}
                of via het{" "}
                <a
                  href="/contact/"
                  className="font-semibold hover:underline"
                  style={{ color: "#9A1E61" }}
                >
                  contactformulier
                </a>
                .
              </p>
            </div>

            {/* Laatst bijgewerkt */}
            <p
              className="text-xs text-center pt-4"
              style={{
                color: "#4A1A3D",
                opacity: 0.4,
                fontFamily: "var(--font-open-sans), system-ui, sans-serif",
              }}
            >
              Laatst bijgewerkt: 29 mei 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
