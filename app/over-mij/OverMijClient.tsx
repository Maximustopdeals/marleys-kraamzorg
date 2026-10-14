"use client";

import Link from "next/link";
import Image from "next/image";

/* ─── FAQ Data ─── */
const aboutFAQ = [
  {
    question: "Hoe lang werk je al als kraamverzorgende?",
    answer:
      "Ik werk al jaren met veel liefde als kraamverzorgende. Elke familie is uniek en dat maakt dit werk zo bijzonder. Mijn ervaring heeft me geleerd dat geen enkele kraamperiode hetzelfde is.",
  },
  {
    question: "Wat maakt jouw zorg anders?",
    answer:
      "Bij mij krijg je één vast gezicht. Ik blijf de hele kraamperiode bij je, zodat je niet steeds hoeft te wennen aan nieuwe mensen. Dat geeft rust, vertrouwen en een persoonlijke band.",
  },
  {
    question: "Ben je 24/7 bereikbaar?",
    answer:
      "Ja, tijdens de kraamperiode ben ik altijd bereikbaar voor dringende vragen. Dat geeft rust, wetende dat je altijd iemand hebt die je kan helpen, ook midden in de nacht.",
  },
  {
    question: "Werk je samen met verloskundigen?",
    answer:
      "Ik werk samen met verschillende verloskundigenpraktijken in de regio, waaronder Verloskundigen Zuidplas, IVE Verloskundigen en VIVE Verloskundigen.",
  },
  {
    question: "Waarom de naam Marley's Kraamzorg?",
    answer:
      "Marley's Kraamzorg is vernoemd naar mijn dochtertje Marley. Hoewel zij nu een stralend sterretje aan de hemel is, leeft haar naam voort in mijn werk. Elke kraamperiode draag ik haar liefde en warmte met me mee.",
  },
  {
    question: "Hoe kan ik me aanmelden?",
    answer:
      "Je kunt je aanmelden via het formulier op deze website, of je kunt me bellen of een e-mail sturen. Ik neem dan zo snel mogelijk contact met je op voor een vrijblijvend kennismakingsgesprek.",
  },
];

export default function OverMijClient() {
  return (
    <>
      {/* ═══════ HERO — Split-Screen met foto ═══════ */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-24">
        {/* Zachte blush-gloed rechts */}
        <div
          className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blush/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* FOTO LINKS */}
            <div className="order-1 lg:order-1">
              <div className="relative mx-auto max-w-md lg:mx-0">
                {/* Zachte blush-gloed achter foto */}
                <div
                  className="absolute -inset-3 rounded-[2rem] bg-blush/30 blur-xl"
                  aria-hidden="true"
                />

                {/* Foto in strak kader */}
                <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(74,26,61,0.35)]">
                  <Image
                    src="/images/lisa.jpg"
                    alt="Lisa, oprichter en kraamverzorgende bij Marley's Kraamzorg"
                    width={1145}
                    height={1374}
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-auto w-full object-cover"
                  />
                </div>

                {/* Naam + rol onder foto */}
                <div className="mt-8 flex items-center justify-center gap-4 lg:justify-center">
                  <span className="h-px w-12 bg-primary/40" />
                  <div className="text-center">
                    <span className="block font-cinzel text-xl uppercase tracking-wide text-berry-dark sm:text-2xl">
                      Lisa
                    </span>
                    <span className="mt-1 block font-sans text-xs uppercase tracking-[0.15em] text-berry-dark/60">
                      Oprichter &amp; kraamverzorgende
                    </span>
                  </div>
                  <span className="h-px w-12 bg-primary/40" />
                </div>
              </div>
            </div>

            {/* TEKST RECHTS */}
            <div className="order-2 max-w-xl text-center lg:order-2 lg:text-left">
              {/* Klein label */}
              <div className="mb-8 flex items-center justify-center gap-2 lg:justify-start">
                <span className="text-primary text-xs">✦</span>
                <span className="font-cinzel text-[11px] uppercase tracking-[0.28em] text-primary">
                  Over mij
                </span>
              </div>

              {/* H1 */}
              <h1 className="font-cinzel text-4xl uppercase leading-[1.1] text-berry-dark sm:text-5xl lg:text-6xl">
                Ontdek Lisa van{" "}
                <span className="text-primary">Marley&apos;s Kraamzorg</span>
              </h1>

              {/* Sierlijn */}
              <div className="my-8 flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-12 bg-primary/40" />
                <span className="text-primary text-xs">✦</span>
              </div>

              {/* Subtitel */}
              <p className="font-sans text-lg leading-relaxed text-berry-dark/85 sm:text-xl">
                Warme zorg in Rotterdam, vernoemd naar mijn dochtertje Marley.
                Persoonlijke aandacht voor jou en je baby.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ HET VERHAAL ═══════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="text-center">
            <p className="eyebrow mb-4">Persoonlijk en oprecht</p>

            <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl">
              Het verhaal achter{" "}
              <span className="text-primary">Marley&apos;s Kraamzorg</span>
            </h2>

            <div className="mx-auto my-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary">✦</span>
              <span className="h-px w-12 bg-primary/40" />
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <p className="font-sans text-lg leading-relaxed text-berry-dark/85">
              Mijn naam is{" "}
              <strong className="font-semibold text-berry-dark">Lisa</strong>,
              de trotse oprichter van Marley&apos;s Kraamzorg. Als enthousiaste
              en gediplomeerde kraamverzorgende is mijn passie gewijd aan het
              creëren van een ontspannen sfeer tijdens de bijzondere
              kraamperiode. Mijn werk gaat verder dan een beroep. Het is mijn
              roeping, uitgevoerd met liefde en toewijding.
            </p>

            <p className="font-sans text-lg leading-relaxed text-berry-dark/85">
              Als moeder van twee jongens,{" "}
              <strong className="font-semibold text-berry-dark">
                Sem en Mees
              </strong>
              , en dochter{" "}
              <strong className="font-semibold text-berry-dark">Marley</strong>,
              begrijp ik de onschatbare waarde van een ondersteunende omgeving
              tijdens het ouderschap.
            </p>

            {/* Rustige quote over Marley */}
            <div className="my-12 border-l-2 border-primary/40 pl-6">
              <p className="font-cinzel text-lg uppercase leading-snug tracking-wide text-berry-dark sm:text-xl">
                Hoewel Marley nu een stralend sterretje aan de hemel is, blijft
                haar naam synoniem met de{" "}
                <span className="text-primary">toewijding en liefde</span> die
                ik in mijn werk stop.
              </p>
            </div>

            <p className="font-sans text-lg leading-relaxed text-berry-dark/85">
              Mijn toewijding overstijgt een standaard dienst. Het is een
              persoonlijke missie om gezinnen te ondersteunen. Met mijn
              spontaniteit en positieve instelling stel ik iedereen op zijn
              gemak. Bij Marley&apos;s Kraamzorg bied ik daarom zorg op maat,
              waarbij flexibiliteit en deskundigheid hand in hand gaan.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-primary/30" />
            <div className="text-center">
              <span className="block font-sans text-sm italic text-berry-dark/50">
                Met warme groet,
              </span>
              <span className="mt-1 block font-cinzel text-2xl uppercase tracking-wide text-berry-dark">
                Lisa
              </span>
            </div>
            <span className="h-px w-16 bg-primary/30" />
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 font-cinzel text-xs uppercase tracking-[0.15em] text-primary transition-colors hover:text-berry-dark"
            >
              Maak kennis met Lisa
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ WAT BIJZONDER MAAKT ═══════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="text-center">
            <p className="eyebrow mb-4">Wat mij bijzonder maakt</p>

            <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl">
              Wat Marley&apos;s Kraamzorg{" "}
              <span className="text-primary">bijzonder maakt</span>
            </h2>

            <div className="mx-auto my-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary">✦</span>
              <span className="h-px w-12 bg-primary/40" />
            </div>
          </div>

          {/* 4 kaarten — originele teksten behouden */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "Een Persoonlijke Verbinding",
                text: "Bij Marley's Kraamzorg gaat het niet alleen om het bieden van kraamzorg; het gaat om het opbouwen van een persoonlijke band met de gezinnen die ik mag ondersteunen. Mijn eigen ervaringen als moeder hebben me geleerd dat de kraamperiode een mix is van vreugde, uitdagingen en kwetsbaarheid.",
              },
              {
                title: "Expertise in Actie",
                text: "Als ervaren kraamverzorgster ben ik niet alleen gedreven door passie, maar ook door kennis en expertise. Mijn deskundige begeleiding omvat alles, van praktische hulp in het huishouden tot gerichte educatie over babyverzorging.",
              },
              {
                title: "Flexibiliteit en Zorg op Maat",
                text: "Elk gezin heeft zijn eigen behoeften en wensen, en bij Marley's Kraamzorg begrijp ik het belang van flexibiliteit. Mijn diensten passen zich aan op basis van uw specifieke situatie.",
              },
              {
                title: "Marley's Kraamzorg Familie",
                text: "Wanneer u kiest voor Marley's Kraamzorg, wordt u niet alleen een cliënt; u wordt deel van de Marley's Kraamzorg-familie. Deze familie staat voor betrokkenheid, warmte en zorg die verder gaat dan de kraamperiode zelf.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="rounded-2xl border border-berry-dark/[0.08] bg-white p-8 shadow-card transition-shadow hover:shadow-card-hover"
              >
                {/* Klein nummer + sierlijn */}
                <div className="mb-6 flex items-center gap-3">
                  <span className="font-cinzel text-sm text-primary/60">
                    0{i + 1}
                  </span>
                  <span className="text-primary text-xs">✦</span>
                </div>

                <h3 className="mb-4 font-cinzel text-lg uppercase leading-tight text-berry-dark sm:text-xl">
                  {p.title}
                </h3>

                <p className="font-sans text-base leading-relaxed text-berry-dark/75">
                  {p.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="mx-auto max-w-2xl font-sans text-base leading-relaxed text-berry-dark/70">
              Voor meer informatie over mijn kraamzorgdiensten, aarzel niet om
              contact op te nemen. Ik kijk ernaar uit om u te verwelkomen in de
              Marley&apos;s Kraamzorg-familie en samen deze prachtige reis te
              maken.
            </p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ WAAROM KIEZEN ═══════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="text-center">
            <p className="eyebrow mb-4">Waarom kiezen</p>

            <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl">
              Waarom kiezen voor{" "}
              <span className="text-primary">Marley&apos;s Kraamzorg?</span>
            </h2>

            <div className="mx-auto my-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary">✦</span>
              <span className="h-px w-12 bg-primary/40" />
            </div>

            <p className="mx-auto max-w-2xl font-sans text-base leading-relaxed text-berry-dark/75 sm:text-lg">
              Bij Marley&apos;s Kraamzorg bied ik professionele en persoonlijke
              kraamzorg in Rotterdam en omgeving. Als ervaren kraamverzorgende
              ondersteun ik jou en je gezin tijdens deze bijzondere periode.
            </p>
          </div>

          <div className="mt-16 grid gap-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Persoonlijke aandacht",
                text: "Je ontvangt persoonlijke zorg op maat, in je vertrouwde omgeving, zodat jij je comfortabel voelt.",
              },
              {
                title: "Ervaring en kwaliteit",
                text: "Met mijn jarenlange ervaring weet ik precies wat jij nodig hebt tijdens je kraamtijd. Betrouwbaarheid staat voorop.",
              },
              {
                title: "Flexibiliteit",
                text: "Kies de zorg die bij jou past. Een paar uur per dag of volledige dagen, alles is bespreekbaar.",
              },
              {
                title: "Babyverzorging",
                text: "Ik bied ondersteuning die volledig is afgestemd op jouw gezin en de behoeften van je baby.",
              },
              {
                title: "Persoonlijke klik",
                text: "Met een vrijblijvend intakegesprek ontdekken we samen of er een goede klik is.",
              },
              {
                title: "Betrouwbare keuze",
                text: "Kies voor Marley's Kraamzorg en ontvang deskundige, liefdevolle zorg voor jou en je baby.",
              },
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="mb-6 flex items-center justify-center gap-3">
                  <span className="font-cinzel text-sm text-primary/60">
                    0{i + 1}
                  </span>
                  <span className="text-primary text-xs">✦</span>
                </div>

                <h3 className="mb-3 font-cinzel text-lg uppercase leading-tight text-berry-dark sm:text-xl">
                  {v.title}
                </h3>

                <p className="font-sans text-sm leading-relaxed text-berry-dark/70">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl">
            Wil je{" "}
            <span className="text-primary">kennismaken</span>?
          </h2>

          <div className="mx-auto my-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-primary">✦</span>
            <span className="h-px w-12 bg-primary/40" />
          </div>

          <p className="mx-auto mb-10 max-w-2xl font-sans text-base leading-relaxed text-berry-dark/80 sm:text-lg">
            Een kraamtijd is zo persoonlijk. Ik neem graag de tijd om te kijken
            wat jij nodig hebt en hoe ik jou het beste kan ondersteunen. Ons
            kennismakingsgesprek is altijd gratis en vrijblijvend.
          </p>

          <Link
            href="/contact/"
            className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            Neem contact op
          </Link>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="text-center">
            <p className="eyebrow mb-4">Goed om te weten</p>

            <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl">
              Veelgestelde <span className="text-primary">vragen</span>
            </h2>

            <div className="mx-auto my-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary">✦</span>
              <span className="h-px w-12 bg-primary/40" />
            </div>
          </div>

          <div className="mt-12 space-y-4">
            {aboutFAQ.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-berry-dark/[0.08] bg-white p-6 shadow-card transition-shadow open:shadow-card-hover"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-cinzel text-base uppercase leading-tight text-berry-dark sm:text-lg">
                    {faq.question}
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
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <p className="mt-12 text-center font-sans text-base text-berry-dark/70">
            Wil je meer weten?{" "}
            <Link
              href="/contact/"
              className="font-semibold text-primary hover:underline"
            >
              Neem gerust contact op
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
