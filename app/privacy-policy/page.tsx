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
            Privacy<span className="text-primary">verklaring</span>
          </h1>

          {/* Sierlijn */}
          <div className="mx-auto my-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-primary">✦</span>
            <span className="h-px w-12 bg-primary/40" />
          </div>

          {/* Subtitel */}
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-berry-dark/80 sm:text-xl">
            Marley&apos;s Kraamzorg Rotterdam. Uw privacy is voor ons
            belangrijk.
          </p>
        </div>
      </section>

      {/* ═══════ CONTENT ═══════ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          {/* Inleiding */}
          <div className="mb-16 text-center">
            <p className="font-sans text-base leading-relaxed text-berry-dark/80 md:text-lg">
              Marley&apos;s Kraamzorg respecteert uw privacy en zorgt ervoor dat
              uw persoonsgegevens vertrouwelijk worden behandeld. In deze
              privacyverklaring leggen wij uit welke gegevens wij verzamelen,
              waarom wij dit doen en welke rechten u heeft.
            </p>
          </div>

          {/* ── Sectie 1 ── */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-cinzel text-sm text-primary/60">01</span>
              <span className="text-primary text-xs">✦</span>
            </div>
            <h2 className="mb-6 font-cinzel text-2xl uppercase leading-tight text-berry-dark sm:text-3xl">
              Welke gegevens verzamelen wij?
            </h2>
            <p className="mb-4 font-sans text-base leading-relaxed text-berry-dark/80">
              Wij verzamelen de volgende persoonsgegevens die noodzakelijk zijn
              voor het leveren van kraamzorg:
            </p>
            <ul className="space-y-2 font-sans text-base text-berry-dark/80">
              {[
                "Naam en contactgegevens (telefoonnummer, e-mailadres)",
                "Adres en woonplaats",
                "Gegevens over uw zwangerschap en bevalling",
                "Medische gegevens relevant voor de kraamzorg",
                "Verzekeringsgegevens",
                "Gegevens van uw pasgeborene",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 text-primary">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Sectie 2 ── */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-cinzel text-sm text-primary/60">02</span>
              <span className="text-primary text-xs">✦</span>
            </div>
            <h2 className="mb-6 font-cinzel text-2xl uppercase leading-tight text-berry-dark sm:text-3xl">
              Waarom verzamelen wij deze gegevens?
            </h2>
            <p className="mb-4 font-sans text-base leading-relaxed text-berry-dark/80">
              Wij gebruiken uw gegevens voor de volgende doeleinden:
            </p>
            <ul className="space-y-2 font-sans text-base text-berry-dark/80">
              {[
                "Het leveren van veilige en passende kraamzorg",
                "Het opstellen van een persoonlijk kraamzorgplan",
                "Communicatie met u en andere betrokken zorgverleners (zoals uw verloskundige)",
                "De overdracht van gegevens aan de jeugdgezondheidszorg (JGZ)",
                "Facturering en declaratie bij uw zorgverzekeraar",
                "Kwaliteitsmeting en -verbetering",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 text-primary">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Sectie 3 ── */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-cinzel text-sm text-primary/60">03</span>
              <span className="text-primary text-xs">✦</span>
            </div>
            <h2 className="mb-6 font-cinzel text-2xl uppercase leading-tight text-berry-dark sm:text-3xl">
              Grondslag voor verwerking
            </h2>
            <p className="font-sans text-base leading-relaxed text-berry-dark/80">
              Wij verwerken uw persoonsgegevens op basis van de uitvoering van
              de zorgovereenkomst (art. 6 lid 1b AVG) en waar wettelijk
              verplicht (art. 6 lid 1c AVG). Voor bijzondere persoonsgegevens
              (medische gegevens) geldt de grondslag van art. 9 lid 2h AVG:
              verwerking is noodzakelijk voor de verlening van gezondheidszorg.
            </p>
          </div>

          {/* ── Sectie 4 ── */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-cinzel text-sm text-primary/60">04</span>
              <span className="text-primary text-xs">✦</span>
            </div>
            <h2 className="mb-6 font-cinzel text-2xl uppercase leading-tight text-berry-dark sm:text-3xl">
              Bewaartermijn
            </h2>
            <p className="font-sans text-base leading-relaxed text-berry-dark/80">
              Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk.
              Voor medische gegevens geldt een wettelijke bewaartermijn van 15
              jaar. Na afloop van deze termijn worden uw gegevens vernietigd of
              geanonimiseerd.
            </p>
          </div>

          {/* ── Sectie 5 ── */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-cinzel text-sm text-primary/60">05</span>
              <span className="text-primary text-xs">✦</span>
            </div>
            <h2 className="mb-6 font-cinzel text-2xl uppercase leading-tight text-berry-dark sm:text-3xl">
              Delen met derden
            </h2>
            <p className="mb-4 font-sans text-base leading-relaxed text-berry-dark/80">
              Wij delen uw gegevens uitsluitend met partijen die noodzakelijk
              zijn voor de uitvoering van de kraamzorg:
            </p>
            <ul className="mb-4 space-y-2 font-sans text-base text-berry-dark/80">
              {[
                "Uw verloskundige en andere betrokken zorgverleners",
                "Jeugdgezondheidszorg (JGZ) voor de overdracht na de kraamperiode",
                "Uw zorgverzekeraar voor declaratie",
                "Het KCKZ voor kwaliteitsregistratie (geanonimiseerd waar mogelijk)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 text-primary">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-base leading-relaxed text-berry-dark/80">
              Wij verkopen uw gegevens nooit aan derden.
            </p>
          </div>

          {/* ── Sectie 6 ── */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-cinzel text-sm text-primary/60">06</span>
              <span className="text-primary text-xs">✦</span>
            </div>
            <h2 className="mb-6 font-cinzel text-2xl uppercase leading-tight text-berry-dark sm:text-3xl">
              Uw rechten
            </h2>
            <p className="mb-4 font-sans text-base leading-relaxed text-berry-dark/80">
              Onder de AVG heeft u de volgende rechten:
            </p>
            <ul className="mb-4 space-y-2 font-sans text-base text-berry-dark/80">
              {[
                "Recht op inzage in uw persoonsgegevens",
                "Recht op correctie of aanvulling van onjuiste gegevens",
                "Recht op vergetelheid (verwijdering van gegevens)",
                "Recht op beperking van de verwerking",
                "Recht op gegevensoverdraagbaarheid",
                "Recht van bezwaar tegen de verwerking",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 text-primary">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-base leading-relaxed text-berry-dark/80">
              Wilt u gebruik maken van uw rechten? Neem dan contact met ons op
              via het contactformulier of per e-mail.
            </p>
          </div>

          {/* ── Sectie 7 ── */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-cinzel text-sm text-primary/60">07</span>
              <span className="text-primary text-xs">✦</span>
            </div>
            <h2 className="mb-6 font-cinzel text-2xl uppercase leading-tight text-berry-dark sm:text-3xl">
              Beveiliging
            </h2>
            <p className="font-sans text-base leading-relaxed text-berry-dark/80">
              Wij nemen passende technische en organisatorische maatregelen om
              uw persoonsgegevens te beschermen tegen verlies, ongeautoriseerde
              toegang of wijziging. Dit omvat onder andere versleuteling,
              toegangsbeheer en regelmatige beveiligingscontroles.
            </p>
          </div>

          {/* ── Sectie 8 ── */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-cinzel text-sm text-primary/60">08</span>
              <span className="text-primary text-xs">✦</span>
            </div>
            <h2 className="mb-6 font-cinzel text-2xl uppercase leading-tight text-berry-dark sm:text-3xl">
              Cookies
            </h2>
            <p className="font-sans text-base leading-relaxed text-berry-dark/80">
              Op onze website gebruiken wij cookies. Voor meer informatie over
              het gebruik van cookies verwijzen wij u naar onze{" "}
              <a
                href="/cookie-policy/"
                className="font-semibold text-primary hover:underline"
              >
                cookieverklaring
              </a>
              .
            </p>
          </div>

          {/* ── Sectie 9 ── */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-cinzel text-sm text-primary/60">09</span>
              <span className="text-primary text-xs">✦</span>
            </div>
            <h2 className="mb-6 font-cinzel text-2xl uppercase leading-tight text-berry-dark sm:text-3xl">
              Wijzigingen
            </h2>
            <p className="font-sans text-base leading-relaxed text-berry-dark/80">
              Wij behouden ons het recht voor om deze privacyverklaring te
              wijzigen. Wij adviseren u deze pagina regelmatig te raadplegen
              zodat u op de hoogte blijft van eventuele wijzigingen.
            </p>
          </div>

          {/* ── Contact ── */}
          <div className="mt-16 rounded-2xl border border-berry-dark/[0.08] bg-white p-8 shadow-card sm:p-10">
            <div className="mb-6 flex items-center gap-4">
              <span className="text-primary text-xs">✦</span>
              <h2 className="font-cinzel text-lg uppercase text-berry-dark">
                Contact
              </h2>
            </div>
            <p className="font-sans text-base leading-relaxed text-berry-dark/85">
              Heeft u vragen over onze privacyverklaring of wilt u gebruik maken
              van uw rechten? Neem contact op via{" "}
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
