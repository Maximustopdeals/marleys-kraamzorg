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
    description:
      "Lees de algemene voorwaarden voor kraamzorg bij Marley's Kraamzorg.",
  },
};

export default function AlgemeneVoorwaardenPage() {
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
            Algemene{" "}
            <span className="text-primary">Voorwaarden</span>
          </h1>

          {/* Sierlijn */}
          <div className="mx-auto my-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-primary">✦</span>
            <span className="h-px w-12 bg-primary/40" />
          </div>

          {/* Subtitel */}
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-berry-dark/80 sm:text-xl">
            Marley&apos;s Kraamzorg Rotterdam. Opgesteld door BO Geboortezorg in
            samenwerking met de Consumentenbond, LOC Zeggenschap in de Zorg, en
            de Patiëntenfederatie Nederland.
          </p>
        </div>
      </section>

      {/* ═══════ CONTENT ═══════ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          {/* Inleiding */}
          <div className="mb-16 text-center">
            <p className="font-sans text-base leading-relaxed text-berry-dark/80 md:text-lg">
              Deze algemene voorwaarden zijn van toepassing op alle
              overeenkomsten tussen Marley&apos;s Kraamzorg en cliënten. Lees
              ze zorgvuldig door.
            </p>
          </div>

          {/* ── Artikel 1 ── */}
          <Article number="01" title="Definities">
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
                  className="font-sans text-sm leading-relaxed text-berry-dark/80"
                >
                  <strong className="font-semibold text-primary">
                    {i + 1}.
                  </strong>{" "}
                  {item}
                </p>
              ))}
            </div>
          </Article>

          {/* ── Artikel 2 ── */}
          <Article number="02" title="Toepasselijkheid">
            <ArticleSub number="2.1" text="Deze algemene voorwaarden vinden toepassing op de gesloten overeenkomst." />
            <ArticleSub number="2.2" text="De onderhavige algemene voorwaarden regelen de rechten en verplichtingen van zowel de zorgaanbieder als de cliënte." />
            <ArticleSub number="2.3" text="Deze algemene voorwaarden laten dwingende wettelijke bepalingen onverlet." />
          </Article>

          {/* ── Artikel 3 ── */}
          <Article number="03" title="Bekendmaking Algemene Voorwaarden">
            <ArticleSub number="3.1" text="Marley's Kraamzorg overhandigt deze algemene voorwaarden aan de cliënte voorafgaand aan of bij het aangaan van de overeenkomst, waarbij op verzoek van de cliënte een mondelinge toelichting wordt verschaft. Tevens zijn de algemene voorwaarden raadpleegbaar op de website van Marley's Kraamzorg." />
            <ArticleSub number="3.2" text="Bij digitale of telefonische inschrijving voor kraamzorg bij Marley's Kraamzorg stemt de cliënt automatisch in met de algemene voorwaarden. Na inschrijving ontvangt de cliënt een bevestigingsmail met een verwijzing naar de algemene voorwaarden op de website." />
          </Article>

          {/* ── Artikel 4 ── */}
          <Article number="04" title="Afwijking van de Algemene Voorwaarden">
            <ArticleSub number="4.1" text="Afwijkingen van deze algemene voorwaarden zijn slechts geldig indien uitdrukkelijk overeengekomen tussen de cliënte en de kraamzorgaanbieder, mits deze afwijking niet nadelig is voor de cliënte, pasgeborene, of kraamzorgaanbieder." />
            <ArticleSub number="4.2" text="Afwijkingen zijn uitsluitend rechtsgeldig indien schriftelijk overeengekomen." />
          </Article>

          {/* ── Artikel 5 ── */}
          <Article number="05" title="Duidelijke Informatie">
            <ArticleSub number="5.1" text="Marley's Kraamzorg verstrekt informatie, hetzij schriftelijk hetzij via de website, die de cliënte in staat stelt een weloverwogen vergelijking te maken met andere kraamzorgaanbieders." />
            <ArticleSub number="5.2" text="In deze informatie vermeldt Marley's Kraamzorg ten minste: dat een overeenkomst tot stand komt bij aanvaarding van de inschrijving; dat de cliënte gedurende 14 dagen na aanvaarding kosteloos het recht heeft de overeenkomst te herroepen; en eventuele voorbehouden met betrekking tot de uitvoering van overeengekomen kraamzorg." />
            <ArticleSub number="5.3" text="Gedurende de looptijd van de overeenkomst zorgt Marley's Kraamzorg ervoor dat de cliënte adequaat wordt geïnformeerd omtrent relevante aangelegenheden betreffende de uitvoering van de overeenkomst." />
          </Article>

          {/* ── Artikel 6 ── */}
          <Article number="06" title="De Overeenkomst">
            <ArticleSub number="6.1" text="De schriftelijke, telefonische, of digitale inschrijving door de cliënte vormt een verzoek aan de kraamzorgaanbieder om kraamzorg te leveren. De kraamzorgaanbieder aanvaardt de inschrijving schriftelijk of digitaal, waarmee de overeenkomst tot stand komt. Binnen 14 dagen na het sluiten van de overeenkomst heeft de cliënte het recht om de overeenkomst kosteloos te herroepen." />
            <ArticleSub number="6.2" text="Bij telefonische inschrijving ontvangt de cliënte een bevestiging per e-mail met een verwijzing naar de algemene voorwaarden, waarna de overeenkomst tot stand komt." />
            <ArticleSub number="6.3" text="Indien de cliënte jonger is dan 18 jaar, moet de overeenkomst worden ondertekend door een vertegenwoordiger vanwege de financiële garantstelling tot 18 jaar." />
            <ArticleSub number="6.4" text="De overeenkomst bevat ten minste: een verwijzing naar het LIP voor de aard en omvang van de kraamzorg; een regeling met betrekking tot de toestemming voor het gebruik van gegevens; eventuele annuleringskostenregeling; en verwijzing naar deze algemene voorwaarden." />
          </Article>

          {/* ── Artikel 7 ── */}
          <Article number="07" title="Afwijking van de Overeenkomst">
            <ArticleSub number="7.1" text="Afwijking van de overeengekomen kraamzorguren kan uitsluitend plaatsvinden na onderling overleg en dient schriftelijk te worden vastgelegd. Afwijking van de voorgeschreven minimale kraamzorg is niet mogelijk." />
            <ArticleSub number="7.2" text="Na afwijking van de overeenkomst is de cliënte alleen een eigen bijdrage verschuldigd over het daadwerkelijk afgenomen aantal uren kraamzorg." />
          </Article>

          {/* ── Artikel 8 ── */}
          <Article number="08" title="De Intake">
            <ArticleSub number="8.1" text="Tijdens de intake bespreekt de kraamzorgaanbieder de indicatiestelling met de cliënte. Dit gesprek omvat onder andere: de procedure voor het verkrijgen van een (her)indicatie volgens het LIP; de vaststelling van de aard en omvang van de te leveren kraamzorg; en een beschrijving van aanvullende kraamzorg en diensten." />
            <ArticleSub number="8.2" text="Voor of tijdens de intake verstrekt de kraamzorgaanbieder schriftelijke informatie aan de cliënte over ten minste: de verdeling van verantwoordelijkheden tussen kraamverzorgende en verloskundige; sleutelbeheer; voorzieningen voor veilig werken; het verbod op het gebruik van de auto van de cliënte; het parkeerbeleid; het privacybeleid; het medicatiebeleid; en de schaderegeling." />
            <ArticleSub number="8.3" text="De tijdens het intakegesprek gemaakte afspraken worden schriftelijk vastgelegd." />
          </Article>

          {/* ── Artikel 9 ── */}
          <Article number="09" title="Het Kraamzorgplan">
            <ArticleSub number="9.1" text="Op basis van de indicatiestelling uit het LIP stelt de kraamverzorgende schriftelijk en in samenspraak met de cliënte bij aanvang van de kraamzorg een kraamzorgplan op." />
            <ArticleSub number="9.2" text="Het kraamzorgplan legt de doelen en afspraken vast, afgestemd op de wensen, gewoontes, en omstandigheden van de cliënte en de pasgeborene." />
            <ArticleSub number="9.3" text="In het kraamzorgplan wordt tevens vastgelegd: de betrokkenheid van gezinsleden; afspraken over ondersteuning en voorlichting; en de evaluatiemomenten." />
            <ArticleSub number="9.4" text="Indien het kraamzorgplan niet volgens afspraak kan worden uitgevoerd, wordt dit in overleg en samenspraak met de cliënte bijgesteld." />
          </Article>

          {/* ── Artikel 10 ── */}
          <Article number="10" title="Privacy">
            <ArticleSub number="10.1" text="Voor de gegevens zoals bedoeld in dit hoofdstuk geldt onverkort het bepaalde in de regeling bescherming persoonsgegevens." />
            <ArticleSub number="10.2" text="Kraamverzorgende is niet toegestaan te roken in het huis van de cliënt of in het bijzijn van de cliënt of de pasgeborene." />
            <ArticleSub number="10.3" text="Het is niet toegestaan dat de kraamverzorgende de auto van de cliënt of van een van de huisgenoten gebruikt." />
          </Article>

          {/* ── Artikel 11 ── */}
          <Article number="11" title="Bewaren van Gegevens">
            <ArticleSub number="11.1" text="De kraamzorgaanbieder is verplicht gegevens over de cliënte en de pasgeborene te bewaren, zoals vastgelegd in de overeenkomst, het LIP-formulier, JGZ-overdracht, urenregistratie en een weergave van de registratie, interpretatie en te nemen acties met betrekking tot signalering van gezondheidsproblemen." />
            <ArticleSub number="11.2" text="Bij beëindiging van de overeenkomst bewaart de kraamzorgaanbieder bovengenoemde gegevens en blijven deze ter beschikking van zowel de kraamzorgaanbieder als de cliënte. Op verzoek van de cliënte wordt een kopie verstrekt." />
          </Article>

          {/* ── Artikel 12 ── */}
          <Article number="12" title="Gegevensverstrekking aan Derden">
            <ArticleSub number="12.1" text="De kraamzorgaanbieder verstrekt zonder schriftelijke toestemming van de cliënte geen gegevens over de cliënte en de pasgeborene aan derden, behalve wanneer dit vereist is voor landelijke verplichtingen of bij naleving van de meldcode kindermishandeling." />
            <ArticleSub number="12.2" text="Derden zoals bedoeld in het eerste lid zijn niet inclusief de verloskundige en personen die namens en/of in opdracht van de kraamzorgaanbieder betrokken zijn bij de levering van kraamzorg." />
            <ArticleSub number="12.3" text="De kraamverzorgende en personen namens en/of in opdracht van de kraamzorgaanbieder betrokken bij de levering van kraamzorg zijn gebonden aan geheimhoudingsplicht." />
          </Article>

          {/* ── Artikel 13 ── */}
          <Article number="13" title="Kraamzorg en Kwaliteit">
            <ArticleSub number="13.1" text='De kraamzorgaanbieder levert kraamzorg in overeenstemming met de normen voor "verantwoorde kraamzorg", vastgesteld door representatieve organisaties van kraamzorgaanbieders en cliënten in overleg met de Inspectie voor de Gezondheidszorg.' />
            <ArticleSub number="13.2" text="De kraamzorgaanbieder waarborgt dat alle kraamverzorgenden bevoegd en bekwaam zijn, ingeschreven staan in het Kwaliteitsregister van het Kenniscentrum Kraamzorg, en handelen volgens de geldende professionele standaarden." />
            <ArticleSub number="13.3" text="De kraamzorgaanbieder zorgt voor continuïteit van de kraamzorg." />
          </Article>

          {/* ── Artikel 14 ── */}
          <Article number="14" title="Veiligheid">
            <p className="font-sans text-sm leading-relaxed text-berry-dark/80">
              De kraamzorgaanbieder maakt gebruik van deugdelijk materiaal dat
              noodzakelijk is voor de uitoefening van het beroep.
            </p>
          </Article>

          {/* ── Artikel 15 ── */}
          <Article number="15" title="Afstemming (Meer Zorgverleners)">
            <p className="font-sans text-sm leading-relaxed text-berry-dark/80">
              Als de cliënte te maken heeft met twee of meer zorgverleners die
              namens of in opdracht van de kraamzorgaanbieder betrokken zijn,
              zorgt de kraamzorgaanbieder ervoor dat: alle betrokken
              zorgverleners elkaar informeren en bevragen over relevante
              gegevens; de taken en verantwoordelijkheden helder zijn
              afgebakend; en alle zorgverleners het kraamzorgplan bijhouden en
              raadplegen.
            </p>
          </Article>

          {/* ── Artikel 16 ── */}
          <Article number="16" title="Incidenten">
            <ArticleSub number="16.1" text="Zo spoedig mogelijk na een incident informeert de kraamzorgaanbieder de cliënte over de aard en oorzaak van het incident en genomen maatregelen om soortgelijke incidenten te voorkomen." />
            <ArticleSub number="16.2" text="Als een incident gevolgen heeft voor de gezondheidstoestand, bespreekt de kraamverzorgende dit direct met de verloskundige." />
            <ArticleSub number="16.3" text="In geval van een incident dat direct ingrijpen vereist, handelt de kraamverzorgende direct en meldt dit zo spoedig mogelijk aan de verloskundige." />
            <ArticleSub number="16.4" text="Marley's Kraamzorg zorgt voor een adequate melding van incidenten in de daarvoor vastgestelde registratiesystemen." />
          </Article>

          {/* ── Artikel 17 ── */}
          <Article number="17" title="Zorg voor Persoonlijke Eigendommen">
            <p className="font-sans text-sm leading-relaxed text-berry-dark/80">
              De kraamzorgaanbieder waarborgt dat degenen die onder zijn
              verantwoordelijkheid betrokken zijn bij de kraamzorg voor de
              cliënte en de pasgeborene, zorgvuldig omgaan met hun
              eigendommen.
            </p>
          </Article>

          {/* ── Artikel 18 ── */}
          <Article number="18" title="Verplichtingen van de Cliënte">
            <ArticleSub number="18.1" text="De cliënte legitimeert zich voorafgaand aan de totstandkoming van de overeenkomst of gedurende de looptijd op verzoek met een in Nederland erkend, geldig legitimatiebewijs." />
            <ArticleSub number="18.2" text="De cliënte geeft de kraamzorgaanbieder naar beste weten de inlichtingen en medewerking die redelijkerwijs voor het uitvoeren van de overeenkomst nodig zijn." />
            <ArticleSub number="18.3" text="De cliënte onthoudt zich van gedrag zoals agressie, discriminatie, (seksuele) intimidatie en/of ander gedrag schadelijk voor de gezondheid of het welzijn van de kraamverzorgende." />
            <ArticleSub number="18.4" text="De cliënte meldt schade binnen 5 dagen na afronding van de kraamzorg schriftelijk aan. Schademeldingen na deze termijn worden niet behandeld. De cliënt heeft een eigen risico van € 50,- per schadegeval." />
            <ArticleSub number="18.5" text="De cliënte wordt geacht verzekerd te zijn voor aansprakelijkheid." />
            <ArticleSub number="18.6" text="Discriminatie op basis van leeftijd, geslacht, levensbeschouwing, huidskleur, of seksuele geaardheid van de kraamverzorgende wordt niet geaccepteerd." />
          </Article>

          {/* ── Artikel 19 ── */}
          <Article number="19" title="Betaling">
            <ArticleSub number="19.1" text="De cliënte is de kraamzorgaanbieder de overeengekomen prijs verschuldigd voor de kraamzorg en diensten die rechtstreeks door de zorgverzekeraar verschuldigd zijn." />
            <ArticleSub number="19.2" text="De kraamzorgaanbieder stuurt een gespecificeerde factuur voor aanvullende kraamzorg, eigen bijdrage en/of diensten." />
            <ArticleSub number="19.3" text="Na het verstrijken van 14 dagen na facturering stuurt de kraamzorgaanbieder een betalingsherinnering met een betalingstermijn van 14 dagen." />
            <ArticleSub number="19.4" text="Bij uitblijvende betaling na de tweede termijn is de kraamzorgaanbieder gerechtigd incassokosten in rekening te brengen." />
            <ArticleSub number="19.5" text="Parkeerkosten worden doorberekend aan de cliënt en dienen direct tijdens de zorgverlening betaald te worden." />
          </Article>

          {/* ── Artikel 20 ── */}
          <Article number="20" title="Beëindiging Overeenkomst">
            <ArticleSub number="20.1" text="De overeenkomst eindigt door opname van de cliënte in een ziekenhuis indien zij niet binnen 10 dagen na de bevalling terugkeert; door opname van de pasgeborene in een ziekenhuis indien deze niet binnen 10 dagen terugkeert; bij wederzijds goedvinden, schriftelijk vastgelegd; door overlijden van de cliënte of pasgeborene; of op basis van medische gronden." />
            <ArticleSub number="20.2" text="Indien de cliënte de overeenkomst eenzijdig opzegt, brengt Marley's Kraamzorg annuleringskosten van 90 euro in rekening." />
            <ArticleSub number="20.3" text="Annulering kan alleen schriftelijk worden doorgegeven, bijvoorbeeld per e-mail of brief." />
          </Article>

          {/* ── Artikel 21 ── */}
          <Article number="21" title="Opzegging door de Kraamzorgaanbieder">
            <p className="font-sans text-sm leading-relaxed text-berry-dark/80">
              De kraamzorgaanbieder kan de overeenkomst uitsluitend schriftelijk
              opzeggen om gewichtige redenen mits is voldaan aan de volgende
              voorwaarden: de kraamzorgaanbieder heeft de gronden besproken met
              de cliënte; de kraamzorgaanbieder heeft een passend alternatief
              besproken; en de kraamzorgaanbieder heeft de cliënte gewezen op
              de mogelijkheid een klacht in te dienen.
            </p>
          </Article>

          {/* ── Artikel 22 ── */}
          <Article number="22" title="Klachten en Geschillen">
            <ArticleSub number="22.1" text="De zorgaanbieder hanteert een klachtenregeling gebaseerd op de Kwaliteit Klachten en Geschillen Zorg, voldoende bekendgemaakt en beschikbaar gesteld aan de cliënten." />
            <ArticleSub number="22.2" text="De klachtenfunctionaris biedt opvang, bemiddeling en kan oplossingen aandragen. Deze functionaris opereert onafhankelijk van de eigenaar van de zorgaanbieder." />
            <ArticleSub number="22.3" text="De klachtenregeling is makkelijk vindbaar op de website van de zorgaanbieder, en op verzoek kan de cliënt een papieren versie ontvangen." />
          </Article>

          {/* ── Artikel 23 ── */}
          <Article number="23" title="Geschillenregeling">
            <ArticleSub number="23.1" text="Een geschil ontstaat als de procedure in artikel 22 niet correct is gevolgd, of niet heeft geleid tot voldoende wegnemen van de klacht." />
            <ArticleSub number="23.2" text="Zowel de patiënt als de zorgaanbieder kunnen het geschil voorleggen aan de commissie zoals beschreven in de klachten- en geschillenregeling." />
            <ArticleSub number="23.3" text="De commissie behandelt klachten en claims, met de mogelijkheid om een schadevergoeding toe te kennen tot maximaal € 25.000." />
            <ArticleSub number="23.4" text="De geschillenregeling is makkelijk vindbaar op de website van de zorgaanbieder, en op verzoek kan de cliënt een papieren versie ontvangen." />
          </Article>

          {/* ── Artikel 24 ── */}
          <Article number="24" title="Wijziging">
            <p className="font-sans text-sm leading-relaxed text-berry-dark/80">
              Deze algemene voorwaarden zijn geformuleerd door BO Geboortezorg
              enerzijds, in samenwerking met de Consumentenbond, de LOC
              Zeggenschap in de Zorg, en de Patiëntenfederatie Nederland
              anderzijds. De kraamzorgaanbieder heeft geen bevoegdheid tot
              inhoudelijke wijziging van deze voorwaarden, tenzij bovengenoemde
              partijen een herziene versie van de algemene voorwaarden
              presenteren.
            </p>
          </Article>

          {/* ── Contact ── */}
          <div className="mt-16 rounded-2xl border border-berry-dark/[0.08] bg-white p-8 shadow-card sm:p-10">
            <div className="mb-6 flex items-center gap-4">
              <span className="text-primary text-xs">✦</span>
              <h2 className="font-cinzel text-lg uppercase text-berry-dark">
                Contact
              </h2>
            </div>
            <p className="font-sans text-base leading-relaxed text-berry-dark/85">
              Heeft u vragen over onze algemene voorwaarden? Neem contact op via{" "}
              <a
                href="mailto:info@marleyskraamzorg.nl"
                className="font-semibold text-primary hover:underline"
              >
                info@marleyskraamzorg.nl
              </a>{" "}
              of via het{" "}
              <a
                href="/contact/"
                className="font-semibold text-primary hover:underline"
              >
                contactformulier
              </a>
              .
            </p>
          </div>

          {/* Laatst bijgewerkt */}
          <p className="mt-12 text-center font-sans text-xs text-berry-dark/40">
            Laatst bijgewerkt: 24 december 2024
          </p>
        </div>
      </section>
    </main>
  );
}

/* ── Helper components ── */
function Article({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-16">
      <div className="mb-6 flex items-center gap-4">
        <span className="font-cinzel text-sm text-primary/60">{number}</span>
        <span className="text-primary text-xs">✦</span>
      </div>
      <h2 className="mb-6 font-cinzel text-2xl uppercase leading-tight text-berry-dark sm:text-3xl">
        Artikel {parseInt(number, 10)}:{" "}
        <span className="text-primary">{title}</span>
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function ArticleSub({ number, text }: { number: string; text: string }) {
  return (
    <p className="font-sans text-sm leading-relaxed text-berry-dark/80">
      <strong className="font-semibold text-primary">{number}</strong> {text}
    </p>
  );
}
