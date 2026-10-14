"use client";

import Link from "next/link";

export default function KraamzorgClient() {
  return (
    <>
      {/* ═══════ SECTIE 1: HERO ═══════ */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div
          className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blush/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-3xl px-6 text-center relative md:px-10">
          {/* Klein label met sterretje */}
          <div className="mb-8 flex items-center justify-center gap-2">
            <span className="text-primary text-xs">✦</span>
            <span className="font-cinzel text-[11px] uppercase tracking-[0.28em] text-primary">
              Kraamzorg
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-cinzel text-4xl uppercase leading-[1.1] text-berry-dark sm:text-5xl lg:text-6xl">
            Deskundige en{" "}
            <span className="text-primary">persoonlijke zorg</span>
            <span className="mt-3 block">in Rotterdam</span>
          </h1>

          {/* Sierlijn */}
          <div className="mx-auto my-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-primary">✦</span>
            <span className="h-px w-12 bg-primary/40" />
          </div>

          {/* Subtitel */}
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-berry-dark/80 sm:text-xl">
            Bij Marley&apos;s Kraamzorg ontvang je persoonlijke begeleiding en
            professionele ondersteuning, zodat jij en je baby een ontspannen
            en veilige start maken.
          </p>

          {/* CTA's */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="https://marleyskraamzorg.mijngeboortezorg.nl/Aanvragen/kraamzorg?mode=frame"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              Aanvraag starten
            </a>
            <a
              href="tel:+31645041484"
              className="inline-flex h-14 items-center justify-center rounded-full border border-berry-dark/20 px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-berry-dark transition-all duration-300 hover:border-berry-dark hover:bg-berry-dark hover:text-white"
            >
              Bel voor advies
            </a>
          </div>

          {/* Trust-regel */}
          <p className="mt-8 font-sans text-xs uppercase tracking-[0.2em] text-berry-dark/50">
            KCKZ-gecertificeerd · 24/7 bereikbaar · 5.0 op Google
          </p>
        </div>
      </section>

      {/* ═══════ SECTIE 2: WAT KRAAMZORG IS ═══════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Wat je van mij kunt verwachten</p>

            <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl">
              Zorg voor jou, je baby{" "}
              <span className="text-primary">en je gezin</span>
            </h2>

            <div className="mx-auto my-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary">✦</span>
              <span className="h-px w-12 bg-primary/40" />
            </div>

            <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-berry-dark/80">
              Kraamzorg is professionele ondersteuning na de bevalling. Ik
              help bij de verzorging van je baby, controleer de gezondheid
              van jou en je kindje, en begeleid je bij borstvoeding,
              herstel en alles wat er in die eerste week op je afkomt.
            </p>
          </div>

          {/* 3 pijlers */}
          <div className="mx-auto mt-20 grid max-w-5xl gap-16 sm:gap-12 lg:grid-cols-3 lg:gap-16">
            {[
              {
                nr: "01",
                title: "Zorg voor moeder & baby",
                text: "Ik houd het herstel van de kraamvrouw en de gezondheid van je baby nauwlettend in de gaten, van controles tot het signaleren van geelzucht.",
              },
              {
                nr: "02",
                title: "Voeding & verzorging",
                text: "Persoonlijk advies bij borstvoeding en flesvoeding. Ik leer je stap voor stap zelfverzekerd worden in het verschonen, baden en vasthouden van je kindje.",
              },
              {
                nr: "03",
                title: "Praktische hulp in huis",
                text: "Maaltijden bereiden, boodschappen doen, licht huishoudelijk werk en aandacht voor oudere kinderen. Zo kun jij rusten en genieten.",
              },
            ].map((p, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="mb-8 flex items-center justify-center gap-3 lg:justify-start">
                  <span className="font-cinzel text-sm text-primary/60">
                    {p.nr}
                  </span>
                  <span className="text-primary text-xs">✦</span>
                </div>

                <h3 className="mb-4 font-cinzel text-xl uppercase leading-tight text-berry-dark sm:text-2xl">
                  {p.title}
                </h3>

                <p className="font-sans text-base leading-relaxed text-berry-dark/70">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTIE 3: BIJZONDERE SITUATIES ═══════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Ook bij bijzondere situaties</p>

            <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl">
              Zorg die aansluit bij{" "}
              <span className="text-primary">jouw verhaal</span>
            </h2>

            <div className="mx-auto my-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary">✦</span>
              <span className="h-px w-12 bg-primary/40" />
            </div>

            <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-berry-dark/80">
              Elke geboorte is uniek. Soms verloopt de kraamperiode anders dan
              verwacht. Ik stem mijn zorg af op jouw situatie, wat die ook is.
            </p>
          </div>

          {/* 3 situaties */}
          <div className="mx-auto mt-16 max-w-3xl space-y-12">
            {[
              {
                title: "Thuisbevalling of ziekenhuisbevalling",
                text: "Of je nu thuis bevalt of in het ziekenhuis, ik sluit naadloos aan op jouw keuze. Bij een thuisbevalling richt ik mij op een veilige en vertrouwde omgeving, bij een ziekenhuisbevalling begeleid ik de overgang naar huis.",
              },
              {
                title: "Alleenstaand ouderschap",
                text: "Als alleenstaande ouder kun je rekenen op extra praktische en emotionele ondersteuning. Ik help niet alleen met de babyverzorging, maar denk ook met je mee over het opbouwen van een netwerk en het vinden van balans.",
              },
              {
                title: "Prematuur geboren baby",
                text: "Wanneer je baby te vroeg geboren is, bied ik zorg die aansluit bij de extra aandacht die je kindje nodig heeft. Ik begeleid je bij de overgang van couveuse naar huis en geef advies over de verzorging van een premature baby.",
              },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-cinzel text-sm text-primary ring-1 ring-primary/20">
                  0{i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 font-cinzel text-lg uppercase leading-tight text-berry-dark sm:text-xl">
                    {s.title}
                  </h3>
                  <p className="font-sans text-base leading-relaxed text-berry-dark/70">
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-16 max-w-2xl text-center font-sans text-base leading-relaxed text-berry-dark/70">
            Heb je een andere bijzondere situatie? Neem gerust{" "}
            <Link
              href="/contact/"
              className="font-semibold text-primary hover:underline"
            >
              contact op
            </Link>{" "}
            om de mogelijkheden te bespreken.
          </p>
        </div>
      </section>

      {/* ═══════ SECTIE 4: ZO REGEL JE KRAAMZORG ═══════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Hoe werkt het</p>

            <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl">
              Zo regel je{" "}
              <span className="text-primary">eenvoudig</span> jouw kraamzorg
            </h2>

            <div className="mx-auto my-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary">✦</span>
              <span className="h-px w-12 bg-primary/40" />
            </div>

            <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-berry-dark/80">
              Binnen 24 uur ontvang je een reactie op je aanvraag. Geen
              wachttijden, direct persoonlijk contact met je vaste
              kraamverzorgende.
            </p>
          </div>

          {/* 3 stappen tijdlijn */}
          <div className="relative mx-auto mt-20 max-w-3xl">
            <div
              className="absolute left-0 right-0 top-6 hidden h-px bg-primary/15 lg:block"
              aria-hidden="true"
            />

            <ol className="relative grid gap-16 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  nr: "01",
                  title: "Aanmelden",
                  text: "Meld je eenvoudig online aan via het aanmeldformulier. Ik neem daarna snel contact op om je wensen en beschikbaarheid te bespreken.",
                },
                {
                  nr: "02",
                  title: "Kennismaking",
                  text: "Het intakegesprek vindt plaats bij jou thuis of telefonisch. We bespreken jouw wensen, verwachtingen en leren elkaar kennen.",
                },
                {
                  nr: "03",
                  title: "Jouw kraamweek",
                  text: "Vanaf de bevalling sta ik voor je klaar. Ik assisteer de verloskundige en begeleid jouw gezin in de eerste dagen thuis.",
                },
              ].map((stap) => (
                <li
                  key={stap.nr}
                  className="relative text-center lg:text-left"
                >
                  <div className="mb-8 flex items-center justify-center gap-3 lg:justify-start">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-cinzel text-sm text-primary ring-1 ring-primary/20">
                      {stap.nr}
                    </span>
                    <span className="text-primary text-xs">✦</span>
                  </div>

                  <h3 className="mb-4 font-cinzel text-xl uppercase leading-tight text-berry-dark sm:text-2xl">
                    {stap.title}
                  </h3>

                  <p className="font-sans text-base leading-relaxed text-berry-dark/70">
                    {stap.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://marleyskraamzorg.mijngeboortezorg.nl/Aanvragen/kraamzorg?mode=frame"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              Start met aanmelden
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ SECTIE 5: FAQ ═══════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="text-center">
            <p className="eyebrow mb-4">Goed om te weten</p>

            <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl">
              Veelgestelde{" "}
              <span className="text-primary">vragen</span>
            </h2>

            <div className="mx-auto my-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary">✦</span>
              <span className="h-px w-12 bg-primary/40" />
            </div>
          </div>

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Wat is het verschil tussen kraamzorg en verloskundige zorg?",
                a: "Kraamzorg is gericht op de zorg en ondersteuning na de bevalling, terwijl verloskundige zorg zich richt op de begeleiding tijdens zwangerschap en bevalling. Ik ondersteun met praktische zorg, medische controles en begeleiding in het herstel van moeder en baby.",
              },
              {
                q: "Hoe lang duurt kraamzorg gemiddeld?",
                a: "De duur hangt af van jouw situatie. Gemiddeld ontvang je 8 tot 10 dagen kraamzorg, met een minimum van 24 uur en een maximum van 49 uur bij medische indicatie. Ik bied flexibele zorg, volledig afgestemd op jouw gezin en wensen.",
              },
              {
                q: "Wordt kraamzorg vergoed door de verzekering?",
                a: "Ja, kraamzorg wordt volledig vergoed vanuit de basisverzekering en valt niet onder het eigen risico. Afhankelijk van je verzekering krijg je 45 tot 80 uur vergoed. Ik help je graag met de aanvraag bij je zorgverzekeraar.",
              },
              {
                q: "Wanneer moet ik kraamzorg aanvragen?",
                a: "Het is verstandig om kraamzorg al vroeg in de zwangerschap te regelen, bij voorkeur vóór week 16. Zo ben je verzekerd van een plek en kunnen we op tijd kennismaken. Wacht niet te lang: populaire periodes raken snel vol.",
              },
              {
                q: "Kan ik mijn kraamverzorgende kiezen?",
                a: "Bij Marley's Kraamzorg krijg je persoonlijke aandacht van mij, Lisa, als vaste kraamverzorgende. Ik werk alleen, dus je weet zeker dat je geen wisselende gezichten krijgt. Ons kennismakingsgesprek is altijd gratis en vrijblijvend.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-berry-dark/[0.08] bg-white p-6 shadow-card transition-shadow open:shadow-card-hover"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-cinzel text-base uppercase leading-tight text-berry-dark sm:text-lg">
                    {faq.q}
                  </h3>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 font-sans text-base leading-relaxed text-berry-dark/75">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          {/* CTA onder FAQ */}
          <div className="mt-16 rounded-2xl border border-berry-dark/[0.08] bg-white p-8 text-center shadow-card sm:p-10">
            <h3 className="font-cinzel text-lg uppercase leading-tight text-berry-dark sm:text-xl">
              Nog een andere vraag?
            </h3>
            <p className="mx-auto mt-3 max-w-md font-sans text-base leading-relaxed text-berry-dark/70">
              Ik beantwoord je vragen graag persoonlijk. Neem gerust contact
              op, telefonisch of via WhatsApp.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="tel:+31645041484"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
              >
                Bel 06 45041484
              </a>
              <Link
                href="/contact/"
                className="inline-flex h-12 items-center justify-center rounded-full border border-berry-dark/20 px-6 font-cinzel text-xs uppercase tracking-[0.15em] text-berry-dark transition-all duration-300 hover:border-berry-dark hover:bg-berry-dark hover:text-white"
              >
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
