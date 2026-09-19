"use client";

import { useEffect } from "react";
import "./kraamzorg.css";

/* ─── Icon Components ─── */
const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const AwardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const HandsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const NetworkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5" cy="6" r="3" />
    <circle cx="19" cy="6" r="3" />
    <circle cx="12" cy="18" r="3" />
    <line x1="7.5" y1="8" x2="10.5" y2="16" />
    <line x1="16.5" y1="8" x2="13.5" y2="16" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.98.38 1.93.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.88.32 1.83.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

/* ─── Voordelen SVG icons ─── */
const VoordelenIcon1 = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-2-2h-3" />
    <path d="M3 8v8a2 2 0 0 0 2 2h3" />
    <path d="M16 16v-8" />
    <path d="M8 16v-8" />
  </svg>
);

const VoordelenIcon2 = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const VoordelenIcon3 = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 21v-2a4 4 0 0 1 4-4h1" />
    <path d="M22 21v-2a4 4 0 0 0-4-4h-1" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const VoordelenIcon4 = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="21" x2="21" y2="3" />
    <path d="M6 18l6-6" />
  </svg>
);

const VoordelenIcon5 = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
    <path d="M7 14l3 3 7-7" />
  </svg>
);

const VoordelenIcon6 = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
);

/* ─── FAQ Data ─── */
const faqItems = [
  {
    question: "Wat is het verschil tussen kraamzorg en verloskundige zorg?",
    answer: "Kraamzorg is gericht op de zorg en ondersteuning <strong>na de bevalling</strong>, terwijl verloskundige zorg zich richt op de begeleiding <strong>tijdens zwangerschap en bevalling</strong>. Ik ondersteun met praktische zorg, medische controles en begeleiding in het herstel van moeder en baby.",
    featured: false,
    hasList: false,
  },
  {
    question: "Hoe lang duurt kraamzorg gemiddeld?",
    answer: "De duur hangt af van uw situatie. Gemiddeld ontvangt u <strong>8 tot 10 dagen</strong> kraamzorg, met een minimum van 24 uur en een maximum van 49 uur (bij medische indicatie). Ik bied flexibele zorg, volledig afgestemd op uw gezin en persoonlijke wensen.",
    featured: false,
    hasList: false,
  },
  {
    question: "Wordt kraamzorg vergoed door verzekeringen?",
    answer: "Ja, kraamzorg wordt volledig vergoed vanuit de <strong>basisverzekering</strong>. U betaalt <strong>geen eigen risico</strong>. Afhankelijk van uw verzekering krijgt u 45\u201380 uur vergoed. Ik help u graag met de aanvraag bij uw zorgverzekeraar en denk mee over de mogelijkheden.",
    featured: false,
    hasList: false,
  },
  {
    question: "Wat doet een kraamverzorgende precies?",
    answer: "Mijn taken omvatten:",
    featured: false,
    hasList: true,
    listItems: [
      "Medische controles van moeder en baby",
      "Begeleiding bij borstvoeding en voeding",
      "Praktische hulp in huis",
      "Voorlichting over babyverzorging",
      "Emotionele ondersteuning en een luisterend oor",
    ],
  },
  {
    question: "Wanneer moet ik kraamzorg aanvragen?",
    answer: "Het advies is om kraamzorg tussen de <strong>12e en 20e zwangerschapsweek</strong> aan te vragen. Bij voorkeur uiterlijk rond week 16, zeker als u specifieke wensen heeft. U kunt bij mij altijd een <strong>gratis intakegesprek</strong> aanvragen zonder verplichtingen.",
    featured: false,
    hasList: false,
  },
  {
    question: "Hoe werkt mijn planning?",
    answerHTML: `<p>Ik plan gemiddeld <strong class="mk-faq-highlight">twee gezinnen per maand</strong> in. Op die manier kan ik mijn tijd, energie en zorg goed verdelen en ieder gezin de <strong>persoonlijke aandacht</strong> geven die het verdient.</p><p>Omdat een bevalling vaak eerder of later kan starten (tussen week 37 en 42), is het nooit volledig te voorspellen hoe de planning precies uitpakt.</p><p>Ik doe er altijd alles aan om <strong>zelf bij jullie aanwezig</strong> te zijn. Mocht dat door een onverwachte overlap toch niet lukken, dan bespreek ik dit tijdig met jullie en zorg ik dat er een <strong>vertrouwde collega uit mijn netwerk</strong> beschikbaar is.</p><p class="mk-faq-note">Zo zijn jullie altijd verzekerd van liefdevolle en professionele kraamzorg.</p>`,
    featured: true,
    hasList: false,
  },
  {
    question: "Kan ik mijn kraamverzorgende kiezen?",
    answerHTML: `<p>Bij <strong class="mk-faq-highlight">Marley's Kraamzorg</strong> krijgt u persoonlijke aandacht van <strong>mij, Lisa</strong>, uw vaste kraamverzorgende. Omdat ik alleen werk, garandeer ik:</p><ul class="mk-faq-list mk-faq-list-heart"><li><span class="mk-faq-list-icon">&#127919;</span> <strong>Persoonlijke en warme begeleiding</strong> \u2014 geen wisselende gezichten</li><li><span class="mk-faq-list-icon">&#128158;</span> <strong>Een vertrouwde band</strong> vanaf het eerste moment</li><li><span class="mk-faq-list-icon">&#128105;&zwj;&#9877;&#65039;</span> <strong>Volledige focus</strong> op uw gezin tijdens de kraamweek</li></ul><p class="mk-faq-note">Ons kennismakingsgesprek is altijd <strong>gratis en vrijblijvend</strong>, zodat we zeker weten dat het klikt. Die persoonlijke verbinding vind ik essentieel voor een fijne kraamtijd.</p>`,
    featured: true,
    hasList: false,
  },
];

/* ─── Benefits Sectie 2 ─── */
const benefits = [
  { icon: <HeartIcon />, title: "Persoonlijke benadering", text: "Mijn zorg is volledig afgestemd op uw unieke situatie en behoeften." },
  { icon: <AwardIcon />, title: "Ervaren specialist", text: "Ik ben speciaal getraind in kraamzorg bij bijzondere situaties." },
  { icon: <HandsIcon />, title: "Emotionele ondersteuning", text: "Ik bied een luisterend oor en begeleiding bij uw geboorte-ervaring." },
  { icon: <ClockIcon />, title: "Praktische flexibiliteit", text: "Ik pas mijn diensten aan op uw situatie, hoe bijzonder ook." },
  { icon: <NetworkIcon />, title: "Co\u00f6rdinatie met specialisten", text: "Ik werk nauw samen met verloskundigen en gynaecologen." },
  { icon: <PhoneIcon />, title: "Voortdurende beschikbaarheid", text: "Ook na de kraamweek blijf ik beschikbaar voor vragen." },
];

/* ─── Voordelen Sectie 3 ─── */
const voordelen = [
  {
    icon: <VoordelenIcon1 />,
    title: "Deskundige begeleiding",
    text: "Met jarenlange ervaring bied ik liefdevolle en professionele zorg voor moeder en pasgeborene. Jij kunt vertrouwen op mijn expertise en oog voor detail.",
    featured: false,
  },
  {
    icon: <VoordelenIcon2 />,
    title: "Rust en herstel",
    text: "Terwijl ik zorg voor jouw baby, krijg jij alle ruimte om te rusten en te herstellen na de bevalling. Jouw welzijn staat centraal.",
    featured: false,
  },
  {
    icon: <VoordelenIcon3 />,
    title: "Hulp bij borstvoeding",
    text: "Ik begeleid je graag bij het starten en succesvol volhouden van borstvoeding. Praktische tips en emotionele steun waar nodig.",
    featured: false,
  },
  {
    icon: <VoordelenIcon4 />,
    title: "Praktische ondersteuning",
    text: "Hulp met huishoudelijke taken en verzorging van andere kinderen in het gezin. Zo kun jij je volledig richten op je herstel en je baby.",
    featured: false,
  },
  {
    icon: <VoordelenIcon5 />,
    title: "Complete kraamzorg",
    list: [
      "Ondersteuning bij babyverzorging",
      "Controleren van gezondheid",
      "Hulp bij borstvoeding",
      "Huishoudelijke ondersteuning",
      "Voorlichting over babyzorg",
    ],
    featured: true,
  },
  {
    icon: <VoordelenIcon6 />,
    title: "Wat te verwachten",
    text: "Zorg en ondersteuning voor jou en je gezin tijdens de kraamperiode, met aandacht voor herstel en ouderschap. 24/7 bereikbaar voor al je vragen.",
    featured: false,
  },
];

export default function KraamzorgClient() {
  useEffect(() => {
    /* Fade-in animation */
    const fadeElements = document.querySelectorAll(".fade-in-up");
    fadeElements.forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(35px)";
      (el as HTMLElement).style.transition = "opacity 0.7s ease, transform 0.7s ease";
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
      { threshold: 0.1 }
    );

    fadeElements.forEach((el) => observer.observe(el));

    /* FAQ accordion: close others when one opens */
    const details = document.querySelectorAll(".mk-faq-item");
    const handleToggle = function (this: HTMLDetailsElement) {
      if (this.open) {
        details.forEach((other) => {
          if (other !== this && (other as HTMLDetailsElement).open) {
            (other as HTMLDetailsElement).open = false;
          }
        });
      }
    };
    details.forEach((detail) => {
      detail.addEventListener("toggle", handleToggle as EventListener);
    });

    return () => {
      observer.disconnect();
      details.forEach((detail) => {
        detail.removeEventListener("toggle", handleToggle as EventListener);
      });
    };
  }, []);

  return (
    <>
      {/* ═══════ SECTIE 1: HERO ═══════ */}
      <section className="mk-hero" aria-label="Kraamzorg Rotterdam - Hero sectie">
        <div className="mk-hero-overlay" />
        <div className="mk-hero-container">
          <h1 className="mk-hero-h1">Kraamzorg Rotterdam – Deskundige en Persoonlijke Zorg</h1>
          <p className="mk-hero-sub">Kraamzorg Rotterdam voor een zorgeloze kraamtijd</p>
          <div className="mk-hero-text">
            <p>
              Ben je op zoek naar <strong>kraamzorg in Rotterdam</strong> die warmte en deskundigheid combineert? Bij <strong>Marley&apos;s Kraamzorg Rotterdam</strong> ontvang je persoonlijke begeleiding en professionele ondersteuning, zodat jij en je baby een ontspannen en veilige start maken.
            </p>
          </div>
          <div className="mk-hero-cta">
            <a
              href="https://marleyskraamzorg.mijngeboortezorg.nl/Aanvragen/kraamzorg?mode=frame"
              target="_blank"
              rel="noopener noreferrer"
              className="mk-btn-white"
            >
              Aanvraag starten
            </a>
            <a href="tel:+31645041484" className="mk-btn-outline-white">
              Bel voor advies
            </a>
          </div>
          <div className="mk-hero-trust">
            Beoordeeld met 4.9/5 door jonge gezinnen in Rotterdam e/o
          </div>
        </div>
      </section>

      {/* ═══════ SECTIE 2: BIJZONDERE SITUATIES ═══════ */}
      <section className="mk-special-section" aria-label="Kraamzorg bij bijzondere situaties">
        <div className="mk-special-container">
          <h2 className="mk-special-h2">Kraamzorg bij Bijzondere Situaties</h2>
          <p className="mk-special-intro">
            Bij Marley&apos;s Kraamzorg begrijp ik dat elke geboorte uniek is. Mijn gespecialiseerde <strong>kraamzorg bij bijzondere situaties</strong> biedt extra ondersteuning wanneer uw zwangerschap of kraamperiode anders verloopt dan verwacht. Van thuisbevallingen tot couveusezorg, ik sta voor u klaar.
          </p>

          <div className="mk-highlight-box fade-in-up">
            <p>
              &ldquo;Of het nu gaat om een medisch complexe situatie of persoonlijke omstandigheden, mijn aanpak zorgt voor een veilige en vertrouwde kraamperiode waarin uw behoeften centraal staan.&rdquo;
            </p>
          </div>

          <h3 className="mk-special-h3">Voor wie is mijn gespecialiseerde kraamzorg bedoeld?</h3>
          <ul className="mk-special-list">
            <li><strong>Thuisbevalling versus ziekenhuisbevalling:</strong> Ik leg de verschillen in zorg uit en begeleid u in beide scenario&apos;s</li>
            <li><strong>Alleenstaande ouders:</strong> Extra praktische en emotionele ondersteuning wanneer u er alleen voor staat</li>
            <li><strong>Prematuur geboren baby&apos;s:</strong> Gespecialiseerde zorg tijdens en na de couveuseperiode</li>
            <li><strong>Complexe medische situaties:</strong> Extra ondersteuning bij risicovolle zwangerschappen of bevallingen</li>
          </ul>

          <h3 className="mk-special-h3">Voordelen van mijn gespecialiseerde kraamzorg</h3>
          <div className="mk-benefits-grid-2">
            {benefits.map((b, i) => (
              <div key={i} className="mk-benefit-card-2 fade-in-up">
                <h4>
                  <span className="mk-benefit-icon-wrap">{b.icon}</span>
                  {b.title}
                </h4>
                <p>{b.text}</p>
              </div>
            ))}
          </div>

          <h3 className="mk-special-h3">Specifieke situaties</h3>

          <h4 style={{ color: "#9a1e61", marginTop: "1.5rem", fontFamily: "'Cinzel', Georgia, serif", fontWeight: 600 }}>
            Kraamzorg bij thuisbevalling versus ziekenhuisbevalling
          </h4>
          <p style={{ color: "#4a4a5e", lineHeight: 1.7 }}>
            Of u nu kiest voor een thuisbevalling of een bevalling in het ziekenhuis, mijn <strong style={{ color: "#7a174d" }}>kraamzorg bij bijzondere situaties</strong> sluit naadloos aan op uw keuze. Bij een thuisbevalling richt ik mij op het creëren van een veilige en vertrouwde omgeving, terwijl ik bij een ziekenhuisbevalling de overgang naar huis soepel begeleid.
          </p>

          <h4 style={{ color: "#9a1e61", marginTop: "1.5rem", fontFamily: "'Cinzel', Georgia, serif", fontWeight: 600 }}>
            Extra ondersteuning voor alleenstaande ouders
          </h4>
          <p style={{ color: "#4a4a5e", lineHeight: 1.7 }}>
            Als alleenstaande ouder kunt u rekenen op extra praktische en emotionele ondersteuning binnen mijn <strong style={{ color: "#7a174d" }}>kraamzorg bij bijzondere situaties</strong>. Ik help niet alleen met de babyverzorging, maar ondersteun u ook bij het opbouwen van een netwerk en het vinden van balans in uw nieuwe rol.
          </p>

          <h4 style={{ color: "#9a1e61", marginTop: "1.5rem", fontFamily: "'Cinzel', Georgia, serif", fontWeight: 600 }}>
            Gespecialiseerde zorg na een prematuur geboren baby
          </h4>
          <p style={{ color: "#4a4a5e", lineHeight: 1.7 }}>
            Wanneer uw baby te vroeg geboren is, bied ik gespecialiseerde <strong style={{ color: "#7a174d" }}>kraamzorg bij bijzondere situaties</strong> die aansluit bij de extra zorg die uw kindje nodig heeft. Ik begeleid u bij de overgang van couveuse naar huis en geef advies over de verzorging van een premature baby.
          </p>

          <div className="mk-cta-section fade-in-up">
            <h3>Klaar om te bespreken hoe ik u kan helpen?</h3>
            <p>
              Heeft u vragen over mijn <strong>kraamzorg in Rotterdam</strong> of <strong>kraamzorg bij bijzondere situaties</strong>? Vraag naar mijn beschikbaarheid.
            </p>
            <a href="/contact/" className="mk-btn-premium">
              Neem contact met mij op
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ SECTIE 3: VOORDELEN ═══════ */}
      <section className="mk-voordelen" aria-label="Waarom kiezen voor Marley's Kraamzorg">
        <div className="mk-voordelen-deco-top" aria-hidden="true" />
        <div className="mk-voordelen-deco-bottom" aria-hidden="true" />
        <div className="mk-voordelen-line-left" aria-hidden="true" />
        <div className="mk-voordelen-line-right" aria-hidden="true" />

        <div className="mk-voordelen-container">
          <header className="mk-voordelen-header">
            <span className="mk-section-tag">Waarom kiezen voor Marley&apos;s Kraamzorg?</span>
            <h2 className="mk-section-h2">Persoonlijke kraamzorg in Rotterdam – Jouw vertrouwde steun</h2>
            <p className="mk-section-sub">
              Bij Marley&apos;s Kraamzorg draait alles om jou. Met <strong>persoonlijke kraamzorg in Rotterdam</strong> krijg je één vast gezicht, deskundige begeleiding en warme zorg, volledig afgestemd op jouw gezinssituatie. Van de eerste kennismaking tot de laatste kraamweek: ik sta voor je klaar.
            </p>
          </header>

          <div className="mk-voordelen-grid">
            {voordelen.map((v, i) => (
              <article
                key={i}
                className={`mk-voordeel-card fade-in-up ${v.featured ? "mk-featured" : ""}`}
                tabIndex={0}
              >
                <div className="mk-voordeel-icon" aria-hidden="true">
                  {v.icon}
                </div>
                <h3>{v.title}</h3>
                {v.list ? (
                  <ul>
                    {v.list.map((item, j) => (
                      <li key={j}>
                        <strong>✓</strong> {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{v.text}</p>
                )}
                <div className="mk-voordeel-hover-line" />
              </article>
            ))}
          </div>

          <div className="mk-voordelen-cta">
            <a
              href="https://marleyskraamzorg.mijngeboortezorg.nl/Aanvragen/kraamzorg?mode=frame"
              target="_blank"
              rel="noopener noreferrer"
              className="mk-voordelen-btn"
              aria-label="Meld je aan voor kraamzorg bij Marley's Kraamzorg"
            >
              <span>Meld je aan voor kraamzorg</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ SECTIE 4: TWO COLUMN / HOE REGEL JE KRAAMZORG ═══════ */}
      <section className="mk-arrange" aria-label="Zo regel je jouw kraamzorg">
        <div className="mk-arrange-deco-1" aria-hidden="true" />
        <div className="mk-arrange-deco-2" aria-hidden="true" />
        <div className="mk-arrange-deco-3" aria-hidden="true" />

        <div className="mk-arrange-container">
          <div className="mk-arrange-flex">
            {/* IMAGE COLUMN */}
            <figure className="mk-arrange-image">
              <div className="mk-arrange-frame">
                <div className="mk-arrange-img-overlay" />
                <img
                  src="https://www.marleyskraamzorg.nl/wp-content/uploads/2024/11/Pasgeboren-baby-in-het-ziekenhuis.webp"
                  alt="Pasgeboren baby in het ziekenhuis met zorgzame handen - Marley's Kraamzorg Rotterdam"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="500"
                />
                <div className="mk-arrange-badge" aria-hidden="true">
                  <span>&#10022; Persoonlijk</span>
                </div>
              </div>
              <figcaption className="visually-hidden">
                Pasgeboren baby in het ziekenhuis met zorgzame handen - Kraamzorg Rotterdam
              </figcaption>
            </figure>

            {/* TEXT COLUMN */}
            <div className="mk-arrange-text">
              <div className="mk-arrange-content-badge" aria-hidden="true">
                <span className="mk-badge-dot" /> Stappenplan
              </div>

              <h2 className="mk-arrange-h2">
                Zo regel je <span className="mk-heading-highlight">eenvoudig</span>
                <br />
                jouw kraamzorg
              </h2>

              <div className="mk-heading-accent" />

              <p className="mk-lead-text">
                Het regelen van professionele <strong className="mk-strong">kraamzorg in Rotterdam</strong> is eenvoudig bij <strong className="mk-strong">Marley&apos;s Kraamzorg</strong>. Binnen <span className="mk-highlight-number">24 uur</span> ontvang je een reactie op je aanvraag.
              </p>

              <div className="mk-quote-block">
                <svg className="mk-quote-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9a1e61" strokeWidth="1.5">
                  <path d="M10 11h-4v-4h4v4zM18 11h-4v-4h4v4z" />
                  <path d="M4 21h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" />
                </svg>
                <p className="mk-highlight-text">
                  Neem contact op via telefoon, e-mail of vul het online aanmeldformulier in voor al je<strong> vragen</strong>. Ik help je graag bij:
                </p>
              </div>

              <ul className="mk-checklist" role="list">
                <li>
                  <span className="mk-check-icon" aria-hidden="true">&#10003;</span>
                  <span className="mk-check-text">Het plannen van jouw <strong>persoonlijke kraamzorg</strong></span>
                </li>
                <li>
                  <span className="mk-check-icon" aria-hidden="true">&#10003;</span>
                  <span className="mk-check-text">Advies over <strong>vergoedingen en verzekeringen</strong></span>
                </li>
                <li>
                  <span className="mk-check-icon" aria-hidden="true">&#10003;</span>
                  <span className="mk-check-text">Alle vragen over de <strong>kraamperiode</strong></span>
                </li>
              </ul>

              <div className="mk-extra-info">
                <div className="mk-info-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9a1e61" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <p>Geen wachttijden – direct persoonlijk contact met je vaste kraamverzorgende</p>
              </div>

              <div className="mk-arrange-cta">
                <a
                  href="https://marleyskraamzorg.mijngeboortezorg.nl/Aanvragen/kraamzorg?mode=frame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mk-btn-primary-2"
                  aria-label="Plan uw kraamzorg direct bij Marley's Kraamzorg"
                >
                  <span>Plan je kraamzorg</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a href="tel:0645041484" className="mk-btn-secondary-2" aria-label="Bel Marley's Kraamzorg op 06-45041484">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.13 12.13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9 9a16 16 0 0 0 6 6l.36-.36a2 2 0 0 1 2.11-.45 12.13 12.13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>06-45041484</span>
                </a>
              </div>

              <div className="mk-trust-badge-2">
                <span className="mk-trust-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span className="mk-trust-text-2">Beoordeeld met een 4.9 door klanten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTIE 5: FAQ ═══════ */}
      <section className="mk-faq" aria-labelledby="faq-title">
        <div className="mk-faq-deco-1" aria-hidden="true" />
        <div className="mk-faq-deco-2" aria-hidden="true" />

        <div className="mk-faq-container">
          {/* Header */}
          <header className="mk-faq-header">
            <div className="mk-faq-header-badge" aria-hidden="true">
              <span>Heb je vragen?</span>
            </div>
            <h2 id="faq-title" className="mk-faq-h2">
              Veelgestelde <span style={{ color: "#9a1e61" }}>vragen</span>
            </h2>
            <div className="mk-faq-heading-accent" />
            <p className="mk-faq-sub">
              Antwoorden op de meest gestelde vragen over mijn kraamzorg in Rotterdam
            </p>
          </header>

          {/* Accordion */}
          <div className="mk-faq-accordion">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className={`mk-faq-item fade-in-up ${item.featured ? "mk-featured" : ""}`}
                open={i === 0}
              >
                <summary className="mk-faq-summary">
                  <span className="mk-faq-icon-wrap" aria-hidden="true">
                    {/* Plus icon */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    {/* Minus icon */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                  <span className="mk-faq-question">{item.question}</span>
                </summary>
                <div className="mk-faq-answer">
                  {item.answerHTML ? (
                    <div dangerouslySetInnerHTML={{ __html: item.answerHTML }} />
                  ) : item.hasList ? (
                    <>
                      <p dangerouslySetInnerHTML={{ __html: item.answer || "" }} />
                      <ul className="mk-faq-list">
                        {item.listItems?.map((li, j) => (
                          <li key={j}>
                            <span className="mk-faq-list-icon">&#10003;</span>
                            {li}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p dangerouslySetInnerHTML={{ __html: item.answer || "" }} />
                  )}
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="mk-faq-cta-bottom">
            <div className="mk-faq-cta-card">
              <div className="mk-faq-cta-icon" aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9a1e61" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div className="mk-faq-cta-content">
                <h3 className="mk-faq-cta-title">Heeft u een andere vraag?</h3>
                <p className="mk-faq-cta-text">Ik beantwoord graag al uw vragen over kraamzorg in Rotterdam. Neem gerust contact op!</p>
              </div>
              <div className="mk-faq-cta-buttons">
                <a href="tel:0645041484" className="mk-faq-cta-phone">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.13 12.13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9 9a16 16 0 0 0 6 6l.36-.36a2 2 0 0 1 2.11-.45 12.13 12.13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>06-45041484</span>
                </a>
                <a href="mailto:info@marleyskraamzorg.nl" className="mk-faq-cta-email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7L12 14 2 7" />
                  </svg>
                  <span>info@marleyskraamzorg.nl</span>
                </a>
              </div>
            </div>
            <div className="mk-faq-bottom-button">
              <a href="/contact/" className="mk-faq-primary-btn">
                <span>Neem contact op</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
