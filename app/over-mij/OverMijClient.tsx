"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import "./overmij.css";

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
      "Ja, tijdens de kraamperiode ben ik altijd bereikbaar voor dringende vragen. Dat geeft rust, wetende dat je altijd iemand hebt die je kan helpen — ook midden in de nacht.",
  },
  {
    question: "Werk je samen met verloskundigen?",
    answer:
      "Ik werk samen met verschillende verloskundigenpraktijken in de regio, waaronder Verloskundigen aan de Schie, IVE Verloskundigen, VIVE Verloskundigen en Cindy's Kraamzorg.",
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
  useEffect(() => {
    const fadeEls = document.querySelectorAll(".om-fade");
    fadeEls.forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(30px)";
      (el as HTMLElement).style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    fadeEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ═══════ SECTIE 1: HERO ═══════ */}
      <section className="om-hero" aria-label="Over Lisa - Marley's Kraamzorg">
        <div className="om-hero-deco1" aria-hidden="true" />
        <div className="om-hero-deco2" aria-hidden="true" />
        <div className="om-hero-deco3" aria-hidden="true" />

        <div className="om-hero-content">
          <div className="om-hero-badge">Over mij</div>
          <h1>Ontdek Lisa van Marley&apos;s Kraamzorg in Rotterdam</h1>
          <div className="om-hero-line" />
          <p className="om-hero-sub">
            Lisa van Marley&apos;s Kraamzorg biedt warme zorg in Rotterdam, vernoemd
            naar haar dochtertje. Persoonlijke aandacht voor jou en je baby.
            Ontdek haar verhaal.
          </p>
        </div>

        <div className="om-hero-scroll" aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ═══════ SECTIE 2: HET VERHAAL ═══════ */}
      <section className="om-story" aria-labelledby="story-title">
        <div className="om-story-bg" aria-hidden="true">
          <div className="om-story-circle" />
          <div className="om-story-dots" />
          <div className="om-story-line-deco" />
        </div>

        <div className="om-story-container">
          {/* Header */}
          <div className="om-story-header om-fade">
            <div className="om-story-badge">Persoonlijk &amp; oprecht</div>
            <h2 id="story-title" className="om-story-title">
              <span className="om-story-title-small">Het verhaal achter</span>
              <span className="om-story-title-big">Marley&apos;s Kraamzorg</span>
            </h2>
            <div className="om-story-divider">
              <span className="om-divider-icon">&#10023;</span>
            </div>
          </div>

          {/* Grid */}
          <div className="om-story-grid">
            {/* AFBEELDING */}
            <div className="om-image-block om-fade">
              <div className="om-image-wrapper">
                <div className="om-image-inner">
                  <div className="om-img-overlay-top" />
                  <div className="om-img-overlay-bottom" />
                  <Image
                    src="https://www.marleyskraamzorg.nl/wp-content/uploads/2025/05/Foto_Lisa-kraamerzorgende-Marleyskraamzorg.webp"
                    alt="Lisa - Oprichter van Marley's Kraamzorg"
                    loading="lazy"
                    width={400}
                    height={533}
                    className="w-full h-auto"
                  />
                  {/* Corner accents */}
                  <div className="om-corner om-corner-tl" />
                  <div className="om-corner om-corner-tr" />
                  <div className="om-corner om-corner-bl" />
                  <div className="om-corner om-corner-br" />
                </div>
              </div>

              {/* Heart badge */}
              <div className="om-heart-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>

              {/* Caption */}
              <div className="om-caption">
                <span className="om-caption-name">Lisa</span>
                <span className="om-caption-role">Oprichter &amp; kraamverzorgende</span>
              </div>
            </div>

            {/* TEKST */}
            <div className="om-text-block om-fade">
              <div className="om-text-card">
                {/* Opening quote */}
                <div className="om-quote-open">&ldquo;</div>

                <p className="om-paragraph">
                  <span className="om-dropcap">M</span>
                  ijn naam is <strong className="om-highlight">Lisa</strong>, de trotse oprichter van Marley&apos;s Kraamzorg. Als enthousiaste en gediplomeerde kraamverzorgende is mijn passie gewijd aan het creëren van een ontspannen sfeer tijdens de bijzondere kraamperiode. Mijn werk gaat verder dan een beroep; het is mijn roeping, uitgevoerd met liefde en toewijding.
                </p>

                {/* Separator */}
                <div className="om-separator">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.52 6.52 0 0 1 16.5 3 5.5 5.5 0 0 1 21 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>

                <p className="om-paragraph">
                  Als moeder van twee jongens, <strong className="om-highlight">Sem &amp; Mees</strong>, en dochter <strong className="om-highlight">Marley</strong>, begrijp ik de onschatbare waarde van een ondersteunende omgeving tijdens het ouderschap.
                </p>

                {/* Emotional block */}
                <div className="om-emotional">
                  <div className="om-emotional-deco">&#10023;</div>
                  <p className="om-emotional-text">
                    <span className="om-q">&ldquo;</span>
                    Hoewel Marley nu een stralend sterretje aan de hemel is, blijft haar naam synoniem met de toewijding en liefde die ik in mijn werk stop.
                    <span className="om-q">&rdquo;</span>
                  </p>
                  <div className="om-emotional-deco">&#10023;</div>
                </div>

                <p className="om-paragraph">
                  Mijn toewijding overstijgt een standaard dienst; het is een persoonlijke missie om gezinnen te ondersteunen. Met mijn spontaniteit en positieve instelling stel ik iedereen op zijn gemak. Bij Marley&apos;s Kraamzorg bied ik daarom zorg op maat, waarbij flexibiliteit en deskundigheid hand in hand gaan.
                </p>

                {/* Signature */}
                <div className="om-signature">
                  <div className="om-sig-line" />
                  <div>
                    <span className="om-sig-text">Met warme groet,</span>
                    <span className="om-sig-name">Lisa</span>
                  </div>
                  <div className="om-sig-line" />
                </div>

                {/* CTA */}
                <div className="om-story-cta">
                  <Link href="/contact/" className="om-story-link">
                    <span>Maak kennis met Lisa</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTIE 3: WAT MARLEY'S BIJZONDER MAAKT ═══════ */}
      <section className="om-features" aria-labelledby="features-heading">
        <div className="om-features-container">
          <h2 id="features-heading" className="om-features-h2">
            Wat Marley&apos;s Kraamzorg bijzonder maakt
          </h2>

          <div className="om-features-grid">
            <div className="om-feature-card om-fade">
              <div className="om-feature-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>
              <h3>Een Persoonlijke Verbinding</h3>
              <p>
                Bij Marley&apos;s Kraamzorg gaat het niet alleen om het bieden van kraamzorg; het gaat om het opbouwen van een persoonlijke band met de gezinnen die ik mag ondersteunen. Mijn eigen ervaringen als moeder hebben me geleerd dat de kraamperiode een mix is van vreugde, uitdagingen en kwetsbaarheid.
              </p>
            </div>

            <div className="om-feature-card om-fade">
              <div className="om-feature-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 1.66 2.24 3 5 3s5-1.34 5-3v-5" />
                </svg>
              </div>
              <h3>Expertise in Actie</h3>
              <p>
                Als ervaren kraamverzorgster ben ik niet alleen gedreven door passie, maar ook door kennis en expertise. Mijn deskundige begeleiding omvat alles, van praktische hulp in het huishouden tot gerichte educatie over babyverzorging.
              </p>
            </div>

            <div className="om-feature-card om-fade">
              <div className="om-feature-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 1l4 4-4 4" />
                  <path d="M3 11V9a4 4 0 014-4h14" />
                  <path d="M7 23l-4-4 4-4" />
                  <path d="M21 13v2a4 4 0 01-4 4H3" />
                </svg>
              </div>
              <h3>Flexibiliteit en Zorg op Maat</h3>
              <p>
                Elk gezin heeft zijn eigen behoeften en wensen, en bij Marley&apos;s Kraamzorg begrijp ik het belang van flexibiliteit. Mijn diensten passen zich aan op basis van uw specifieke situatie.
              </p>
            </div>

            <div className="om-feature-card om-fade">
              <div className="om-feature-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3>Marley&apos;s Kraamzorg Familie</h3>
              <p>
                Wanneer u kiest voor Marley&apos;s Kraamzorg, wordt u niet alleen een cliënt; u wordt deel van de Marley&apos;s Kraamzorg-familie. Deze familie staat voor betrokkenheid, warmte en zorg die verder gaat dan de kraamperiode zelf.
              </p>
            </div>
          </div>

          <div className="om-features-cta om-fade">
            <p>
              Voor meer informatie over mijn kraamzorgdiensten, aarzel niet om contact op te nemen. Ik kijk ernaar uit om u te verwelkomen in de Marley&apos;s Kraamzorg-familie en samen deze prachtige reis te maken.
            </p>
            <Link href="/contact/" className="om-features-btn">
              Neem contact op
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTIE 4: WAAROM KIEZEN ═══════ */}
      <section className="om-why" aria-labelledby="why-title">
        <div className="om-why-container">
          <header className="om-why-intro om-fade">
            <h2 id="why-title">Waarom kiezen voor Marley&apos;s Kraamzorg?</h2>
            <p>
              Bij Marley&apos;s Kraamzorg bied ik professionele en persoonlijke <strong>kraamzorg in Rotterdam</strong> en omgeving. Als ervaren kraamverzorgende ondersteun ik jou en je gezin tijdens deze bijzondere periode.
            </p>
            <p className="om-why-highlight">Dat ben ik, Lisa!</p>
          </header>

          <div className="om-why-grid">
            <article className="om-why-card om-fade" role="listitem" tabIndex={0} aria-label="Persoonlijke aandacht">
              <div className="om-why-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3>Persoonlijke aandacht</h3>
              <p>Je ontvangt persoonlijke zorg op maat, in je vertrouwde omgeving, zodat jij je comfortabel voelt.</p>
            </article>

            <article className="om-why-card om-fade" role="listitem" tabIndex={0} aria-label="Ervaring en kwaliteit">
              <div className="om-why-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <h3>Ervaring en kwaliteit</h3>
              <p>Met mijn jarenlange ervaring weet ik precies wat jij nodig hebt tijdens je kraamtijd. Betrouwbaarheid staat voorop.</p>
            </article>

            <article className="om-why-card om-fade" role="listitem" tabIndex={0} aria-label="Flexibiliteit">
              <div className="om-why-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" />
                </svg>
              </div>
              <h3>Flexibiliteit</h3>
              <p>Kies de zorg die bij jou past. Een paar uur per dag of volledige dagen — alles is bespreekbaar.</p>
            </article>

            <article className="om-why-card om-fade" role="listitem" tabIndex={0} aria-label="Babyverzorging">
              <div className="om-why-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M18 21v-2a4 4 0 00-4-4h-4a4 4 0 00-4 4v2" />
                </svg>
              </div>
              <h3>Babyverzorging</h3>
              <p>Ik bied ondersteuning die volledig is afgestemd op jouw gezin en de behoeften van je baby.</p>
            </article>

            <article className="om-why-card om-fade" role="listitem" tabIndex={0} aria-label="Persoonlijke klik">
              <div className="om-why-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3>Persoonlijke klik</h3>
              <p>Met een vrijblijvend intakegesprek ontdekken we samen of er een goede klik is.</p>
            </article>

            <article className="om-why-card om-fade" role="listitem" tabIndex={0} aria-label="Betrouwbare keuze">
              <div className="om-why-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>
              <h3>Betrouwbare keuze</h3>
              <p>Kies voor Marley&apos;s Kraamzorg en ontvang deskundige, liefdevolle zorg voor jou en je baby.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════ SECTIE 5: CTA ═══════ */}
      <section className="om-cta" aria-label="Kennismaken met Lisa">
        <div className="om-cta-deco1" aria-hidden="true" />
        <div className="om-cta-deco2" aria-hidden="true" />
        <div className="om-cta-content om-fade">
          <h2>Wil je kennismaken?</h2>
          <p>
            Een kraamtijd is zo persoonlijk. Ik neem graag de tijd om te kijken
            wat jij nodig hebt en hoe ik jou het beste kan ondersteunen. Ons
            kennismakingsgesprek is altijd gratis en vrijblijvend.
          </p>
          <Link href="/contact/" className="om-cta-btn">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Neem contact op
          </Link>
        </div>
      </section>

      {/* ═══════ SECTIE 6: FAQ ═══════ */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cinzel text-2xl md:text-3xl uppercase text-primary text-center mb-4">
              Veelgestelde vragen
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />
            <Accordion items={aboutFAQ} />
            <p className="text-center mt-10 font-body text-berry-dark/80">
              Wil je meer weten?{" "}
              <Link href="/contact/" className="text-primary hover:underline font-semibold">
                Neem gerust contact op
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
