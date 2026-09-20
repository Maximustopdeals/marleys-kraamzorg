import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | Marley's Kraamzorg",
  description:
    "Algemene voorwaarden van Marley's Kraamzorg Rotterdam. Lees de voorwaarden voor het afnemen van kraamzorg.",
  alternates: {
    canonical: "https://www.marleyskraamzorg.nl/algemene-voorwaarden/",
  },
  openGraph: {
    type: "article",
    locale: "nl_NL",
    url: "https://www.marleyskraamzorg.nl/algemene-voorwaarden/",
    siteName: "Marley's Kraamzorg",
    title: "Algemene Voorwaarden | Marley's Kraamzorg",
    description: "Lees de algemene voorwaarden voor kraamzorg bij Marley's Kraamzorg.",
  },
};

export default function AlgemeneVoorwaardenPage() {
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
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
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
            Algemene Voorwaarden
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
            Marley&apos;s Kraamzorg Rotterdam — Opgesteld door BO Geboortezorg in
            samenwerking met de Consumentenbond, LOC Zeggenschap in de Zorg, en de
            Pati&euml;ntenfederatie Nederland.
          </p>
        </div>
      </section>

      {/* ═══════ CONTENT ═══════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            {/* Artikel 1 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 1 — Definities
              </h2>
              <div className="space-y-3">
                {[
                  "Cliënte: De natuurlijke persoon die kraamzorg afneemt bij Marley's Kraamzorg. Hieronder wordt voor de bevalling de zwangere en na de bevalling de kraamvrouw verstaan.",
                  "Kraamzorgaanbieder: (Rechts)persoon die kraamzorg verleent, gefinancierd door de Zorgverzekering al dan niet in combinatie met particulier gefinancierde kraamzorg en/of aanvullende diensten.",
                  "Verloskundige: Een zelfstandig medisch beroepsbeoefenaar die de zwangere vrouw en haar partner gedurende de zwangerschap en de bevalling begeleidt.",
                  "Kraamverzorgende: De natuurlijke persoon die kraamzorg en partusassistentie geeft onder de medische verantwoordelijkheid van de verloskundige.",
                  "Kraamzorg: Zorg, ondersteuning, instructie en voorlichting aan de cliënte en de pasgeborene.",
                  "Minimale kraamzorg: Het minimumaantal uren kraamzorg exclusief partusassistentie van 24 uren verdeeld over acht dagen. Dit is landelijk bepaald.",
                  "Indicatiestelling: De indicatiestelling op basis van het Landelijk Indicatieprotocol Kraamzorg (LIP).",
                  "Inschrijving: Schriftelijk/telefonisch verzoek van de cliënte aan Marley's Kraamzorg om kraamzorg te leveren.",
                  "Overeenkomst: De tussen de cliënte en Marley's Kraamzorg gesloten overeenkomst met betrekking tot kraamzorg.",
                  "Intake: Een persoonlijk of telefonisch gesprek tussen Marley's Kraamzorg en de cliënte voor de 34e week van de zwangerschap.",
                  "Incident: Ieder niet beoogd of onvoorzien voorval in het kraamzorgproces met direct of op termijn merkbare gevolgen voor de cliënte en/of de pasgeborene.",
                  "Schriftelijk: Onder schriftelijk wordt ook verstaan digitaal of per e-mail.",
                ].map((item, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed"
                    style={{
                      color: "#4A1A3D",
                      opacity: 0.85,
                      fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                    }}
                  >
                    <strong style={{ color: "#9A1E61" }}>{i + 1}.</strong> {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Artikel 2 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 2 — Toepasselijkheid
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>2.1</strong> Deze algemene
                  voorwaarden vinden toepassing op de gesloten overeenkomst.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>2.2</strong> De
                  onderhavige algemene voorwaarden regelen de rechten en
                  verplichtingen van zowel de zorgaanbieder als de cliënte.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>2.3</strong> Deze algemene
                  voorwaarden laten dwingende wettelijke bepalingen onverlet.
                </p>
              </div>
            </div>

            {/* Artikel 3 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 3 — Bekendmaking Algemene Voorwaarden
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>3.1</strong> Marley's
                  Kraamzorg overhandigt deze algemene voorwaarden aan de cliënte
                  voorafgaand aan of bij het aangaan van de overeenkomst, waarbij
                  op verzoek van de cliënte een mondelinge toelichting wordt
                  verschaft. Tevens zijn de algemene voorwaarden raadpleegbaar op
                  de website van Marley's Kraamzorg.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>3.2</strong> Bij digitale
                  of telefonische inschrijving voor kraamzorg bij Marley's
                  Kraamzorg stemt de cliënt automatisch in met de algemene
                  voorwaarden. Na inschrijving ontvangt de cliënt een
                  bevestigingsmail met een verwijzing naar de algemene voorwaarden
                  op de website.
                </p>
              </div>
            </div>

            {/* Artikel 4 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 4 — Afwijking van de Algemene Voorwaarden
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>4.1</strong> Afwijkingen
                  van deze algemene voorwaarden zijn slechts geldig indien
                  uitdrukkelijk overeengekomen tussen de cliënte en de
                  kraamzorgaanbieder, mits deze afwijking niet nadelig is voor de
                  cliënte, pasgeborene, of kraamzorgaanbieder.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>4.2</strong> Afwijkingen
                  zijn uitsluitend rechtsgeldig indien schriftelijk overeengekomen.
                </p>
              </div>
            </div>

            {/* Artikel 5 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 5 — Duidelijke Informatie
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>5.1</strong> Marley's
                  Kraamzorg verstrekt informatie, hetzij schriftelijk hetzij via de
                  website, die de cliënte in staat stelt een weloverwogen
                  vergelijking te maken met andere kraamzorgaanbieders.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>5.2</strong> In deze
                  informatie vermeldt Marley's Kraamzorg ten minste: dat een
                  overeenkomst tot stand komt bij aanvaarding van de inschrijving;
                  dat de cliënte gedurende 14 dagen na aanvaarding kosteloos het
                  recht heeft de overeenkomst te herroepen; en eventuele
                  voorbehouden met betrekking tot de uitvoering van overeengekomen
                  kraamzorg.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>5.3</strong> Gedurende de
                  looptijd van de overeenkomst zorgt Marley's Kraamzorg ervoor dat
                  de cliënte adequaat wordt geïnformeerd omtrent relevante
                  aangelegenheden betreffende de uitvoering van de overeenkomst.
                </p>
              </div>
            </div>

            {/* Artikel 6 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 6 — De Overeenkomst
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>6.1</strong> De
                  schriftelijke, telefonische, of digitale inschrijving door de
                  cliënte vormt een verzoek aan de kraamzorgaanbieder om kraamzorg
                  te leveren. De kraamzorgaanbieder aanvaardt de inschrijving
                  schriftelijk of digitaal, waarmee de overeenkomst tot stand
                  komt. Binnen 14 dagen na het sluiten van de overeenkomst heeft
                  de cliënte het recht om de overeenkomst kosteloos te herroepen.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>6.2</strong> Bij
                  telefonische inschrijving ontvangt de cliënte een bevestiging
                  per e-mail met een verwijzing naar de algemene voorwaarden,
                  waarna de overeenkomst tot stand komt.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>6.3</strong> Indien de
                  cliënte jonger is dan 18 jaar, moet de overeenkomst worden
                  ondertekend door een vertegenwoordiger vanwege de financiële
                  garantstelling tot 18 jaar.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>6.4</strong> De
                  overeenkomst bevat ten minste: een verwijzing naar het LIP voor
                  de aard en omvang van de kraamzorg; een regeling met betrekking
                  tot de toestemming voor het gebruik van gegevens; eventuele
                  annuleringskostenregeling; en verwijzing naar deze algemene
                  voorwaarden.
                </p>
              </div>
            </div>

            {/* Artikel 7 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 7 — Afwijking van de Overeenkomst
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>7.1</strong> Afwijking van
                  de overeengekomen kraamzorguren kan uitsluitend plaatsvinden na
                  onderling overleg en dient schriftelijk te worden vastgelegd.
                  Afwijking van de voorgeschreven minimale kraamzorg is niet
                  mogelijk.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>7.2</strong> Na afwijking
                  van de overeenkomst is de cliënte alleen een eigen bijdrage
                  verschuldigd over het daadwerkelijk afgenomen aantal uren
                  kraamzorg.
                </p>
              </div>
            </div>

            {/* Artikel 8 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 8 — De Intake
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>8.1</strong> Tijdens de
                  intake bespreekt de kraamzorgaanbieder de indicatiestelling met
                  de cliënte. Dit gesprek omvat onder andere: de procedure voor het
                  verkrijgen van een (her)indicatie volgens het LIP; de vaststelling
                  van de aard en omvang van de te leveren kraamzorg; en een
                  beschrijving van aanvullende kraamzorg en diensten.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>8.2</strong> Voor of
                  tijdens de intake verstrekt de kraamzorgaanbieder schriftelijke
                  informatie aan de cliënte over ten minste: de verdeling van
                  verantwoordelijkheden tussen kraamverzorgende en verloskundige;
                  sleutelbeheer; voorzieningen voor veilig werken; het verbod op
                  het gebruik van de auto van de cliënte; het parkeerbeleid; het
                  privacybeleid; het medicatiebeleid; en de schaderegeling.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>8.3</strong> De tijdens
                  het intakegesprek gemaakte afspraken worden schriftelijk
                  vastgelegd.
                </p>
              </div>
            </div>

            {/* Artikel 9 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 9 — Het Kraamzorgplan
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>9.1</strong> Op basis van
                  de indicatiestelling uit het LIP stelt de kraamverzorgende
                  schriftelijk en in samenspraak met de cliënte bij aanvang van de
                  kraamzorg een kraamzorgplan op.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>9.2</strong> Het
                  kraamzorgplan legt de doelen en afspraken vast, afgestemd op de
                  wensen, gewoontes, en omstandigheden van de cliënte en de
                  pasgeborene.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>9.3</strong> In het
                  kraamzorgplan wordt tevens vastgelegd: de betrokkenheid van
                  gezinsleden; afspraken over ondersteuning en voorlichting; en de
                  evaluatiemomenten.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>9.4</strong> Indien het
                  kraamzorgplan niet volgens afspraak kan worden uitgevoerd, wordt
                  dit in overleg en samenspraak met de cliënte bijgesteld.
                </p>
              </div>
            </div>

            {/* Artikel 10 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 10 — Privacy
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>10.1</strong> Voor de
                  gegevens zoals bedoeld in dit hoofdstuk geldt onverkort het
                  bepaalde in de regeling bescherming persoonsgegevens.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>10.2</strong>
                  Kraamverzorgende is niet toegestaan te roken in het huis van de
                  cliënt of in het bijzijn van de cliënt of de pasgeborene.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>10.3</strong> Het is niet
                  toegestaan dat de kraamverzorgende de auto van de cliënt of van
                  een van de huisgenoten gebruikt.
                </p>
              </div>
            </div>

            {/* Artikel 11 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 11 — Bewaren van Gegevens
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>11.1</strong> De
                  kraamzorgaanbieder is verplicht gegevens over de cliënte en de
                  pasgeborene te bewaren, zoals vastgelegd in de overeenkomst, het
                  LIP-formulier, JGZ-overdracht, urenregistratie en een weergave
                  van de registratie, interpretatie en te nemen acties met
                  betrekking tot signalering van gezondheidsproblemen.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>11.2</strong> Bij
                  beëindiging van de overeenkomst bewaart de kraamzorgaanbieder
                  bovengenoemde gegevens en blijven deze ter beschikking van
                  zowel de kraamzorgaanbieder als de cliënte. Op verzoek van de
                  cliënte wordt een kopie verstrekt.
                </p>
              </div>
            </div>

            {/* Artikel 12 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 12 — Gegevensverstrekking aan Derden
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>12.1</strong> De
                  kraamzorgaanbieder verstrekt zonder schriftelijke toestemming
                  van de cliënte geen gegevens over de cliënte en de pasgeborene
                  aan derden, behalve wanneer dit vereist is voor landelijke
                  verplichtingen of bij naleving van de meldcode
                  kindermishandeling.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>12.2</strong> Derden zoals
                  bedoeld in het eerste lid zijn niet inclusief de verloskundige
                  en personen die namens en/of in opdracht van de
                  kraamzorgaanbieder betrokken zijn bij de levering van
                  kraamzorg.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>12.3</strong> De
                  kraamverzorgende en personen namens en/of in opdracht van de
                  kraamzorgaanbieder betrokken bij de levering van kraamzorg zijn
                  gebonden aan geheimhoudingsplicht.
                </p>
              </div>
            </div>

            {/* Artikel 13 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 13 — Kraamzorg en Kwaliteit
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>13.1</strong> De
                  kraamzorgaanbieder levert kraamzorg in overeenstemming met de
                  normen voor "verantwoorde kraamzorg", vastgesteld door
                  representatieve organisaties van kraamzorgaanbieders en
                  cliënten in overleg met de Inspectie voor de Gezondheidszorg.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>13.2</strong> De
                  kraamzorgaanbieder waarborgt dat alle kraamverzorgenden bevoegd
                  en bekwaam zijn, ingeschreven staan in het Kwaliteitsregister
                  van het Kenniscentrum Kraamzorg, en handelen volgens de
                  geldende professionele standaarden.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>13.3</strong> De
                  kraamzorgaanbieder zorgt voor continuïteit van de kraamzorg.
                </p>
              </div>
            </div>

            {/* Artikel 14 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 14 — Veiligheid
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#4A1A3D",
                  opacity: 0.85,
                  fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                }}
              >
                De kraamzorgaanbieder maakt gebruik van deugdelijk materiaal dat
                noodzakelijk is voor de uitoefening van het beroep.
              </p>
            </div>

            {/* Artikel 15 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 15 — Afstemming (Meer Zorgverleners)
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#4A1A3D",
                  opacity: 0.85,
                  fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                }}
              >
                Als de cliënte te maken heeft met twee of meer zorgverleners die
                namens of in opdracht van de kraamzorgaanbieder betrokken zijn,
                zorgt de kraamzorgaanbieder ervoor dat: alle betrokken
                zorgverleners elkaar informeren en bevragen over relevante
                gegevens; de taken en verantwoordelijkheden helder zijn
                afgebakend; en alle zorgverleners het kraamzorgplan bijhouden en
                raadplegen.
              </p>
            </div>

            {/* Artikel 16 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 16 — Incidenten
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>16.1</strong> Zo spoedig
                  mogelijk na een incident informeert de kraamzorgaanbieder de
                  cliënte over de aard en oorzaak van het incident en genomen
                  maatregelen om soortgelijke incidenten te voorkomen.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>16.2</strong> Als een
                  incident gevolgen heeft voor de gezondheidstoestand, bespreekt
                  de kraamverzorgende dit direct met de verloskundige.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>16.3</strong> In geval van
                  een incident dat direct ingrijpen vereist, handelt de
                  kraamverzorgende direct en meldt dit zo spoedig mogelijk aan de
                  verloskundige.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>16.4</strong> Marley's
                  Kraamzorg zorgt voor een adequate melding van incidenten in de
                  daarvoor vastgestelde registratiesystemen.
                </p>
              </div>
            </div>

            {/* Artikel 17 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 17 — Zorg voor Persoonlijke Eigendommen
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#4A1A3D",
                  opacity: 0.85,
                  fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                }}
              >
                De kraamzorgaanbieder waarborgt dat degenen die onder zijn
                verantwoordelijkheid betrokken zijn bij de kraamzorg voor de
                cliënte en de pasgeborene, zorgvuldig omgaan met hun
                eigendommen.
              </p>
            </div>

            {/* Artikel 18 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 18 — Verplichtingen van de Cliënte
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>18.1</strong> De cliënte
                  legitimeert zich voorafgaand aan de totstandkoming van de
                  overeenkomst of gedurende de looptijd op verzoek met een in
                  Nederland erkend, geldig legitimatiebewijs.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>18.2</strong> De cliënte
                  geeft de kraamzorgaanbieder naar beste weten de inlichtingen en
                  medewerking die redelijkerwijs voor het uitvoeren van de
                  overeenkomst nodig zijn.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>18.3</strong> De cliënte
                  onthoudt zich van gedrag zoals agressie, discriminatie,
                  (seksuele) intimidatie en/of ander gedrag schadelijk voor de
                  gezondheid of het welzijn van de kraamverzorgende.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>18.4</strong> De cliënte
                  meldt schade binnen 5 dagen na afronding van de kraamzorg
                  schriftelijk aan. Schademeldingen na deze termijn worden niet
                  behandeld. De cliënt heeft een eigen risico van €50,- per
                  schadegeval.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>18.5</strong> De cliënte
                  wordt geacht verzekerd te zijn voor aansprakelijkheid.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>18.6</strong>
                  Discriminatie op basis van leeftijd, geslacht, levensbeschouwing,
                  huidskleur, of seksuele geaardheid van de kraamverzorgende wordt
                  niet geaccepteerd.
                </p>
              </div>
            </div>

            {/* Artikel 19 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 19 — Betaling
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>19.1</strong> De cliënte
                  is de kraamzorgaanbieder de overeengekomen prijs verschuldigd
                  voor de kraamzorg en diensten die rechtstreeks door de
                  zorgverzekeraar verschuldigd zijn.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>19.2</strong> De
                  kraamzorgaanbieder stuurt een gespecificeerde factuur voor
                  aanvullende kraamzorg, eigen bijdrage en/of diensten.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>19.3</strong> Na het
                  verstrijken van 14 dagen na facturering stuurt de
                  kraamzorgaanbieder een betalingsherinnering met een
                  betalingstermijn van 14 dagen.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>19.4</strong> Bij
                  uitblijvende betaling na de tweede termijn is de
                  kraamzorgaanbieder gerechtigd incassokosten in rekening te
                  brengen.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>19.5</strong>
                  Parkeerkosten worden doorberekend aan de cliënt en dienen direct
                  tijdens de zorgverlening betaald te worden.
                </p>
              </div>
            </div>

            {/* Artikel 20 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 20 — Beëindiging Overeenkomst
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>20.1</strong> De
                  overeenkomst eindigt door opname van de cliënte in een
                  ziekenhuis indien zij niet binnen 10 dagen na de bevalling
                  terugkeert; door opname van de pasgeborene in een ziekenhuis
                  indien deze niet binnen 10 dagen terugkeert; bij wederzijds
                  goedvinden, schriftelijk vastgelegd; door overlijden van de
                  cliënte of pasgeborene; of op basis van medische gronden.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>20.2</strong> Indien de
                  cliënte de overeenkomst eenzijdig opzegt, brengt Marley's
                  Kraamzorg annuleringskosten van 90 euro in rekening.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>20.3</strong> Annulering
                  kan alleen schriftelijk worden doorgegeven, bijvoorbeeld per
                  e-mail of brief.
                </p>
              </div>
            </div>

            {/* Artikel 21 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 21 — Opzegging door de Kraamzorgaanbieder
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#4A1A3D",
                  opacity: 0.85,
                  fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                }}
              >
                De kraamzorgaanbieder kan de overeenkomst uitsluitend schriftelijk
                opzeggen om gewichtige redenen mits is voldaan aan de volgende
                voorwaarden: de kraamzorgaanbieder heeft de gronden besproken met
                de cliënte; de kraamzorgaanbieder heeft een passend alternatief
                besproken; en de kraamzorgaanbieder heeft de cliënte gewezen op
                de mogelijkheid een klacht in te dienen.
              </p>
            </div>

            {/* Artikel 22 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 22 — Klachten en Geschillen
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>22.1</strong> De
                  zorgaanbieder hanteert een klachtenregeling gebaseerd op de
                  Kwaliteit Klachten en Geschillen Zorg, voldoende bekendgemaakt
                  en beschikbaar gesteld aan de cliënten.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>22.2</strong> De
                  klachtenfunctionaris biedt opvang, bemiddeling en kan
                  oplossingen aandragen. Deze functionaris opereert onafhankelijk
                  van de eigenaar van de zorgaanbieder.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>22.3</strong> De
                  klachtenregeling is makkelijk vindbaar op de website van de
                  zorgaanbieder, en op verzoek kan de cliënt een papieren versie
                  ontvangen.
                </p>
              </div>
            </div>

            {/* Artikel 23 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 23 — Geschillenregeling
              </h2>
              <div className="space-y-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>23.1</strong> Een geschil
                  ontstaat als de procedure in artikel 22 niet correct is
                  gevolgd, of niet heeft geleid tot voldoende wegnemen van de
                  klacht.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>23.2</strong> Zowel de
                  patiënt als de zorgaanbieder kunnen het geschil voorleggen aan
                  de commissie zoals beschreven in de klachten- en
                  geschillenregeling.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>23.3</strong> De commissie
                  behandelt klachten en claims, met de mogelijkheid om een
                  schadevergoeding toe te kennen tot maximaal €25.000.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#4A1A3D",
                    opacity: 0.85,
                    fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                  }}
                >
                  <strong style={{ color: "#9A1E61" }}>23.4</strong> De
                  geschillenregeling is makkelijk vindbaar op de website van de
                  zorgaanbieder, en op verzoek kan de cliënt een papieren versie
                  ontvangen.
                </p>
              </div>
            </div>

            {/* Artikel 24 */}
            <div className="mb-10">
              <h2
                className="text-lg md:text-xl uppercase mb-4"
                style={{
                  color: "#9A1E61",
                  fontFamily: "Cinzel, Georgia, serif",
                }}
              >
                Artikel 24 — Wijziging
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#4A1A3D",
                  opacity: 0.85,
                  fontFamily: "var(--font-open-sans), system-ui, sans-serif",
                }}
              >
                Deze algemene voorwaarden zijn geformuleerd door BO Geboortezorg
                enerzijds, in samenwerking met de Consumentenbond, de LOC
                Zeggenschap in de Zorg, en de Pati&euml;ntenfederatie Nederland
                anderzijds. De kraamzorgaanbieder heeft geen bevoegdheid tot
                inhoudelijke wijziging van deze voorwaarden, tenzij
                bovengenoemde partijen een herziene versie van de algemene
                voorwaarden presenteren.
              </p>
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
                Heeft u vragen over onze algemene voorwaarden? Neem contact op
                via{" "}
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
              Laatst bijgewerkt: 24 december 2024
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
