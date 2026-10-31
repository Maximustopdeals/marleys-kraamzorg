"use client";

import Link from "next/link";
import Image from "next/image";

export default function KraamzorgClient() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FDFBFB] pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="pointer-events-none absolute -left-40 top-0 h-[800px] w-[800px] rounded-full bg-blush/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
            
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-primary/40"></span>
                <span className="text-primary text-xs">✦</span>
                <span className="font-cinzel text-[11px] uppercase tracking-[0.28em] text-primary">
                  Kraamzorg Rotterdam
                </span>
              </div>

              <h1 className="font-cinzel text-4xl leading-[1.15] text-berry-dark sm:text-5xl lg:text-[3.5rem] text-balance">
                Een zorgeloze kraamtijd, <br className="hidden sm:block" />
                <span className="text-primary italic font-light tracking-wide mt-2 block">
                  op jouw tempo.
                </span>
              </h1>

              <p className="mt-8 max-w-lg font-sans text-lg leading-relaxed text-berry-dark/75">
                Kraamzorg in Rotterdam nodig? Bij Marley’s Kraamzorg krijg je 
                persoonlijke zorg van één vaste kraamverzorgende. Voor een 
                ontspannen start met je gezin.
              </p>

              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
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
                  className="inline-flex h-14 items-center justify-center rounded-full border border-berry-dark/15 px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-berry-dark transition-all duration-300 hover:border-berry-dark hover:bg-berry-dark hover:text-white"
                >
                  Bel voor advies
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-berry-dark/10 pt-6 font-sans text-[11px] uppercase tracking-[0.15em] text-berry-dark/60">
                <span className="flex items-center gap-2"><span className="text-primary">✦</span> KCKZ-gecertificeerd</span>
                <span className="flex items-center gap-2"><span className="text-primary">✦</span> 24/7 bereikbaar</span>
                <span className="flex items-center gap-2"><span className="text-primary">✦</span> 5.0 op Google</span>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 rounded-[2rem] border border-primary/20 translate-x-4 translate-y-4 -z-10"></div>
              
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#FDFBFB] shadow-2xl">
                <Image 
                  src="/images/afbeelding-pasgeboren-baby.webp"
                  alt="Pasgeboren baby in het ziekenhuis met zorgzame handen - Marley's Kraamzorg Rotterdam" 
                  fill 
                  className="object-cover" 
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-end mb-20">
            <div>
              <p className="eyebrow mb-4 text-primary font-cinzel tracking-widest text-xs uppercase">Waarom kiezen voor Marley's Kraamzorg?</p>
              <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl lg:text-5xl">
                Persoonlijke kraamzorg in Rotterdam <span className="text-primary italic font-light lowercase">– Jouw vertrouwde steun</span>
              </h2>
            </div>
            <div>
              <p className="font-sans text-lg leading-relaxed text-berry-dark/80 lg:pb-2">
                Bij Marley's Kraamzorg draait alles om jou. Met persoonlijke kraamzorg in Rotterdam krijg je één vast gezicht, deskundige begeleiding en warme zorg, volledig afgestemd op jouw gezinssituatie. Van de eerste kennismaking tot de laatste kraamweek: ik sta voor je klaar.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8 mb-16">
            {[
              {
                title: "Deskundige begeleiding",
                text: "Met jarenlange ervaring bied ik liefdevolle en professionele zorg voor moeder en pasgeborene. Jij kunt vertrouwen op mijn expertise en oog voor detail.",
              },
              {
                title: "Rust en herstel",
                text: "Terwijl ik zorg voor jouw baby, krijg jij alle ruimte om te rusten en te herstellen na de bevalling. Jouw welzijn staat centraal.",
              },
              {
                title: "Hulp bij borstvoeding",
                text: "Ik begeleid je graag bij het starten en succesvol volhouden van borstvoeding. Praktische tips en emotionele steun waar nodig.",
              },
              {
                title: "Praktische ondersteuning",
                text: "Hulp met huishoudelijke taken en verzorging van andere kinderen in het gezin. Zo kun jij je volledig richten op je herstel en je baby.",
              },
            ].map((p, i) => (
              <div key={i} className="group relative rounded-3xl border border-berry-dark/5 bg-[#FDFBFB] p-8 sm:p-10 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-cinzel text-2xl text-primary/30 transition-colors group-hover:text-primary">
                    0{i + 1}
                  </span>
                  <span className="text-primary text-sm opacity-50">✦</span>
                </div>
                <h3 className="mb-3 font-cinzel text-xl uppercase leading-tight text-berry-dark sm:text-2xl">
                  {p.title}
                </h3>
                <p className="font-sans text-base leading-relaxed text-berry-dark/70">
                  {p.text}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-[#FDFBFB] border border-berry-dark/5 p-8 sm:p-12">
            <h3 className="font-cinzel text-xl uppercase text-berry-dark mb-6 text-center sm:text-left">Complete kraamzorg</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Ondersteuning bij babyverzorging",
                "Controleren van gezondheid",
                "Hulp bij borstvoeding",
                "Huishoudelijke ondersteuning",
                "Voorlichting over babyzorg"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">✓</span>
                  <span className="font-sans text-berry-dark/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FDFBFB] py-24 sm:py-32 border-y border-berry-dark/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr,1.5fr] lg:gap-24">
            
            <div className="lg:sticky lg:top-32 h-fit">
              <p className="eyebrow mb-4 text-primary font-cinzel tracking-widest text-xs uppercase">Gespecialiseerde zorg</p>
              <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl lg:text-5xl mb-6">
                Kraamzorg bij <span className="text-primary italic font-light lowercase">Bijzondere Situaties</span>
              </h2>
              <p className="font-sans text-lg leading-relaxed text-berry-dark/80 mb-8">
                Bij Marley's Kraamzorg begrijp ik dat elke geboorte uniek is. Mijn gespecialiseerde kraamzorg bij bijzondere situaties biedt extra ondersteuning wanneer uw zwangerschap of kraamperiode anders verloopt dan verwacht. Van thuisbevallingen tot couveusezorg, ik sta voor u klaar.
              </p>
              
              <blockquote className="border-l-2 border-primary/30 pl-6 mb-8">
                <p className="font-cinzel text-lg italic leading-relaxed text-berry-dark/80">
                  "Of het nu gaat om een medisch complexe situatie of persoonlijke omstandigheden, mijn aanpak zorgt voor een veilige en vertrouwde kraamperiode waarin uw behoeften centraal staan."
                </p>
              </blockquote>
            </div>

            <div className="space-y-6">
              <h3 className="font-cinzel text-xl uppercase text-berry-dark mb-8">Voor wie is mijn gespecialiseerde kraamzorg bedoeld?</h3>
              {[
                {
                  title: "Thuisbevalling versus ziekenhuisbevalling",
                  text: "Of u nu kiest voor een thuisbevalling of een bevalling in het ziekenhuis, mijn kraamzorg bij bijzondere situaties sluit naadloos aan op uw keuze. Bij een thuisbevalling richt ik mij op het creëren van een veilige en vertrouwde omgeving, terwijl ik bij een ziekenhuisbevalling de overgang naar huis soepel begeleid.",
                },
                {
                  title: "Alleenstaande ouders",
                  text: "Als alleenstaande ouder kunt u rekenen op extra praktische en emotionele ondersteuning binnen mijn kraamzorg bij bijzondere situaties. Ik help niet alleen met de babyverzorging, maar ondersteun u ook bij het opbouwen van een netwerk en het vinden van balans in uw nieuwe rol.",
                },
                {
                  title: "Prematuur geboren baby's",
                  text: "Wanneer uw baby te vroeg geboren is, bied ik gespecialiseerde kraamzorg bij bijzondere situaties die aansluit bij de extra zorg die uw kindje nodig heeft. Ik begeleid u bij de overgang van couveuse naar huis en geef advies over de verzorging van een premature baby.",
                },
                {
                  title: "Complexe medische situaties",
                  text: "Extra ondersteuning bij risicovolle zwangerschappen of bevallingen.",
                },
              ].map((s, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-6 rounded-2xl bg-white p-8 shadow-sm border border-berry-dark/5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FDFBFB] font-cinzel text-lg text-primary ring-1 ring-primary/20">
                    0{i + 1}
                  </div>
                  <div>
                    <h4 className="mb-3 font-cinzel text-xl uppercase leading-tight text-berry-dark sm:text-2xl">
                      {s.title}
                    </h4>
                    <p className="font-sans text-base leading-relaxed text-berry-dark/70">
                      {s.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
          
          <div className="mt-24 pt-16 border-t border-berry-dark/10">
            <h3 className="font-cinzel text-2xl uppercase text-berry-dark mb-10 text-center">Voordelen van mijn gespecialiseerde kraamzorg</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Persoonlijke benadering", text: "Mijn zorg is volledig afgestemd op uw unieke situatie en behoeften." },
                { title: "Ervaren specialist", text: "Ik ben speciaal getraind in kraamzorg bij bijzondere situaties." },
                { title: "Emotionele ondersteuning", text: "Ik bied een luisterend oor en begeleiding bij uw geboorte-ervaring." },
                { title: "Praktische flexibiliteit", text: "Ik pas mijn diensten aan op uw situatie, hoe bijzonder ook." },
                { title: "Coördinatie met specialisten", text: "Ik werk nauw samen met verloskundigen en gynaecologen." },
                { title: "Voortdurende beschikbaarheid", text: "Ook na de kraamweek blijf ik beschikbaar voor vragen." }
              ].map((v, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/50 border border-berry-dark/5">
                  <h4 className="font-cinzel text-sm uppercase text-berry-dark mb-2 flex items-center gap-2">
                    <span className="text-primary text-xs">✦</span> {v.title}
                  </h4>
                  <p className="font-sans text-sm leading-relaxed text-berry-dark/70">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            
            <div>
              <p className="eyebrow mb-4 text-primary font-cinzel tracking-widest text-xs uppercase">Stappenplan</p>
              <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl lg:text-5xl mb-6">
                Zo regel je eenvoudig <span className="text-primary italic font-light lowercase">jouw kraamzorg</span>
              </h2>
              <p className="font-sans text-lg leading-relaxed text-berry-dark/80 mb-6">
                Het regelen van professionele kraamzorg in Rotterdam is eenvoudig bij Marley's Kraamzorg. Binnen 24 uur ontvang je een reactie op je aanvraag.
              </p>
              <p className="font-sans text-lg leading-relaxed text-berry-dark/80 mb-8">
                Neem contact op via telefoon, e-mail of vul het online aanmeldformulier in voor al je vragen. Ik help je graag bij:
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Het plannen van jouw persoonlijke kraamzorg",
                  "Advies over vergoedingen en verzekeringen",
                  "Alle vragen over de kraamperiode"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">✓</span>
                    <span className="font-sans text-lg text-berry-dark/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p className="font-cinzel text-sm uppercase tracking-wider text-primary mb-8">
                Geen wachttijden – direct persoonlijk contact met je vaste kraamverzorgende
              </p>

              <a
                href="https://marleyskraamzorg.mijngeboortezorg.nl/Aanvragen/kraamzorg?mode=frame"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
              >
                Plan je kraamzorg
              </a>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 rounded-[2rem] bg-primary/5 translate-x-4 translate-y-4 -z-10"></div>
              <div className="rounded-[2rem] bg-[#FDFBFB] border border-berry-dark/5 p-12 h-full flex flex-col justify-center">
                <h3 className="font-cinzel text-2xl uppercase text-berry-dark mb-6">Direct contact?</h3>
                <p className="font-sans text-berry-dark/70 mb-8 leading-relaxed">
                  Liever even telefonisch overleggen of heb je een dringende vraag? Ik ben 24/7 bereikbaar voor jou.
                </p>
                <div className="flex flex-col gap-4">
                  <a href="tel:+31645041484" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-berry-dark/5 shadow-sm transition-all hover:shadow-md">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-berry-dark/50 font-cinzel">Bel mij direct</p>
                      <p className="font-sans font-semibold text-berry-dark">06-45041484</p>
                    </div>
                  </a>
                  <Link href="/contact/" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-berry-dark/5 shadow-sm transition-all hover:shadow-md">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-berry-dark/50 font-cinzel">Stuur een bericht</p>
                      <p className="font-sans font-semibold text-berry-dark">Contactformulier</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#FDFBFB] py-24 sm:py-32 border-t border-berry-dark/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr,1.5fr] lg:gap-24">
            
            <div className="lg:sticky lg:top-32 h-fit">
              <p className="eyebrow mb-4 text-primary font-cinzel tracking-widest text-xs uppercase">Goed om te weten</p>
              <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl lg:text-5xl mb-6">
                Veelgestelde <span className="text-primary italic font-light lowercase">vragen</span>
              </h2>
              <p className="font-sans text-lg leading-relaxed text-berry-dark/80 mb-8">
                Staat jouw vraag er niet tussen? Ik help je graag persoonlijk verder.
              </p>
              
              <div className="rounded-3xl bg-white p-8 shadow-sm border border-berry-dark/5">
                <h3 className="font-cinzel text-lg uppercase leading-tight text-berry-dark mb-3">
                  Nog een andere vraag?
                </h3>
                <p className="font-sans text-sm leading-relaxed text-berry-dark/70 mb-6">
                  Neem gerust contact op, telefonisch of via WhatsApp.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+31645041484"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
                  >
                    Bel 06 45041484
                  </a>
                  <Link
                    href="/contact/"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-berry-dark/10 bg-[#FDFBFB] px-6 font-cinzel text-xs uppercase tracking-[0.15em] text-berry-dark transition-all duration-300 hover:border-berry-dark hover:bg-berry-dark hover:text-white"
                  >
                    Stuur een bericht
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
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
                  className="group rounded-2xl border border-berry-dark/5 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 open:shadow-md"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-cinzel text-base uppercase leading-tight text-berry-dark sm:text-lg">
                      {faq.q}
                    </h3>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FDFBFB] text-primary ring-1 ring-primary/10 transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 font-sans text-base leading-relaxed text-berry-dark/70">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
