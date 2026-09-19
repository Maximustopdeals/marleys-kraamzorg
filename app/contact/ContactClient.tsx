"use client";

import { useState, useEffect } from "react";
import "./contact.css";

export default function ContactClient() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    const requiredFields = [
      { name: "name", label: "Naam" },
      { name: "email", label: "E-mail" },
      { name: "phone", label: "Telefoonnummer" },
      { name: "postcode", label: "Postcode en woonplaats" },
      { name: "bevalling", label: "Bevalling" },
      { name: "dueDate", label: "Baby verwacht op" },
      { name: "gevonden", label: "Hoe heb je mij gevonden" },
    ];

    requiredFields.forEach((field) => {
      const value = data.get(field.name) as string;
      if (!value || value.trim() === "" || value === "") {
        newErrors[field.name] = `${field.label} is verplicht`;
      }
    });

    // Email validation
    const email = data.get("email") as string;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Voer een geldig e-mailadres in";
    }

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
    }
  };

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  // Fade-in animation
  useEffect(() => {
    const fadeEls = document.querySelectorAll(".ct-fade");
    fadeEls.forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(30px)";
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

    fadeEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const inputClass = (field: string) =>
    `ct-input ${errors[field] ? "ct-error" : ""}`;

  const selectClass = (field: string) =>
    `ct-select ${errors[field] ? "ct-error" : ""}`;

  const radioClass = (field: string) =>
    `ct-radio ${errors[field] ? "ct-error" : ""}`;

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="ct-hero" aria-label="Contact Marley's Kraamzorg">
        <div className="ct-hero-deco1" aria-hidden="true" />
        <div className="ct-hero-deco2" aria-hidden="true" />

        <div className="ct-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.11 4.1 2 2 0 014.11 2h3a2 2 0 012 1.72 12.13 12.13 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.13 12.13 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          Neem contact op
        </div>

        <h1>
          Contact met{" "}
          <span className="ct-highlight">Marley&apos;s Kraamzorg</span>
        </h1>
        <p className="ct-subtitle">
          Ik geloof in persoonlijk contact. Bel, app of mail mij direct. Ik help
          je graag verder met kraamzorg die &eacute;cht bij jullie past.
        </p>
        <div className="ct-accent-line" />
      </section>

      {/* ═══════ CONTACT CARDS ═══════ */}
      <div className="ct-cards">
        {/* E-mail */}
        <div className="ct-card ct-fade">
          <div className="ct-icon-wrap" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <h3>E-mail</h3>
          <a href="mailto:info@marleyskraamzorg.nl">info@marleyskraamzorg.nl</a>
          <p className="ct-card-note">Antwoord binnen 24 uur</p>
        </div>

        {/* Telefoon */}
        <div className="ct-card ct-fade">
          <div className="ct-icon-wrap" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.11 4.1 2 2 0 014.11 2h3a2 2 0 012 1.72 12.13 12.13 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.13 12.13 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
          <h3>Telefoon</h3>
          <a href="tel:0645041484">06-45041484</a>
          <p className="ct-card-note">Bereikbaar 8:00 - 20:00</p>
        </div>

        {/* WhatsApp */}
        <div className="ct-card ct-fade">
          <div className="ct-icon-wrap" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
          </div>
          <h3>WhatsApp</h3>
          <a href="https://wa.me/31645041484" target="_blank" rel="noopener noreferrer">06-45041484</a>
          <p className="ct-card-note">Direct antwoord</p>
        </div>
      </div>

      {/* ═══════ INFO BLOCKS ═══════ */}
      <div className="ct-info">
        <h2>Kraamzorg in Rotterdam: Persoonlijk &amp; Toegewijd</h2>
        <div className="ct-info-grid">
          {/* Zorg op Maat */}
          <div className="ct-info-card ct-fade">
            <div className="ct-info-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9a1e61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </div>
            <h3>Zorg op Maat</h3>
            <p>Ontvang deskundige en liefdevolle kraamzorg bij Marley&apos;s Kraamzorg. Als ervaren kraamverzorgende begrijp ik dat elk gezin uniek is. Ik bied:</p>
            <ul>
              <li>Borstvoedingsondersteuning</li>
              <li>Babyverzorging op maat</li>
              <li>Geruststelling &amp; advies</li>
            </ul>
            <p>
              <strong>Neem vandaag nog contact op</strong> om te ontdekken hoe ik je
              kan ondersteunen tijdens deze bijzondere tijd.
            </p>
          </div>

          {/* Zorgeloos Beginnen */}
          <div className="ct-info-card ct-fade">
            <div className="ct-info-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9a1e61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h3>Zorgeloos Beginnen</h3>
            <p>
              Voor een <strong>zorgeloze kraamtijd</strong> raden we aan je{" "}
              <strong>v&oacute;&oacute;r de 12e week</strong> van je zwangerschap
              aan te melden. Dit zorgt voor:
            </p>
            <ul>
              <li>Geen onvoorbereidheid</li>
              <li>Gegarandeerde beschikbaarheid</li>
              <li>Ondersteuning die jullie verdienen</li>
            </ul>
            <p>
              Ik ben <strong>24/7 beschikbaar</strong> en neem spoedig contact met
              je op na aanmelding.
            </p>
          </div>
        </div>
      </div>

      {/* ═══════ FORMULIER ═══════ */}
      <section className="ct-form-section" aria-label="Contactformulier">
        <div className="ct-form-container">
          <div className="ct-form-header ct-fade">
            <h2>Aanmeldformulier</h2>
            <p>Vul het formulier in en ik neem zo snel mogelijk contact met je op.</p>
          </div>

          <div className="ct-form-card ct-fade">
            <form
              action="https://formspree.io/f/xojbjdev"
              method="POST"
              onSubmit={handleSubmit}
            >
              {/* Honeypot */}
              <input type="text" name="_gotcha" className="ct-hp" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="_subject" value="Nieuwe aanmelding via Marley's Kraamzorg website" />
              <input type="hidden" name="_next" value="https://www.marleyskraamzorg.nl/bedankt/" />

              {/* Naam */}
              <div className="ct-field">
                <label className="ct-label">
                  Naam <span className="ct-req">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Vul hier uw voor- en achternaam in"
                  className={inputClass("name")}
                  onChange={() => clearError("name")}
                />
                {errors.name && <p className="ct-error-text">{errors.name}</p>}
              </div>

              {/* E-mail */}
              <div className="ct-field">
                <label className="ct-label">
                  E-mail <span className="ct-req">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Vul hier uw e-mailadres in"
                  className={inputClass("email")}
                  onChange={() => clearError("email")}
                />
                {errors.email && <p className="ct-error-text">{errors.email}</p>}
              </div>

              {/* Telefoonnummer */}
              <div className="ct-field">
                <label className="ct-label">
                  Telefoonnummer <span className="ct-req">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Vul hier uw telefoonnummer in"
                  className={inputClass("phone")}
                  onChange={() => clearError("phone")}
                />
                {errors.phone && <p className="ct-error-text">{errors.phone}</p>}
              </div>

              {/* Postcode */}
              <div className="ct-field">
                <label className="ct-label">
                  Postcode en woonplaats <span className="ct-req">*</span>
                </label>
                <input
                  type="text"
                  name="postcode"
                  placeholder="Vul hier uw postcode en woonplaats in"
                  className={inputClass("postcode")}
                  onChange={() => clearError("postcode")}
                />
                {errors.postcode && <p className="ct-error-text">{errors.postcode}</p>}
              </div>

              {/* Bevalling + Due date */}
              <div className="ct-field ct-field-half">
                <div>
                  <label className="ct-label">
                    Bevalling <span className="ct-req">*</span>
                  </label>
                  <select
                    name="bevalling"
                    className={selectClass("bevalling")}
                    onChange={() => clearError("bevalling")}
                    defaultValue=""
                  >
                    <option value="" disabled>-- Selecteer keuze --</option>
                    <option value="ziekenhuis-medisch">Ziekenhuis (medische indicatie)</option>
                    <option value="ziekenhuis-poliklinisch">Ziekenhuis (poliklinisch)</option>
                    <option value="thuisbevalling">Thuisbevalling</option>
                  </select>
                  {errors.bevalling && <p className="ct-error-text">{errors.bevalling}</p>}
                </div>
                <div>
                  <label className="ct-label">
                    Baby verwacht op <span className="ct-req">*</span>
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    className={inputClass("dueDate")}
                    onChange={() => clearError("dueDate")}
                  />
                  {errors.dueDate && <p className="ct-error-text">{errors.dueDate}</p>}
                </div>
              </div>

              {/* Verloskundige + Zorgverzekeraar */}
              <div className="ct-field ct-field-half">
                <div>
                  <label className="ct-label">Verloskundige (naam)</label>
                  <input
                    type="text"
                    name="verloskundige"
                    placeholder="Naam van uw verloskundige"
                    className="ct-input"
                  />
                </div>
                <div>
                  <label className="ct-label">Zorgverzekeraar</label>
                  <input
                    type="text"
                    name="verzekeraar"
                    placeholder="Uw zorgverzekeraar"
                    className="ct-input"
                  />
                </div>
              </div>

              {/* Aanvullende informatie */}
              <div className="ct-field">
                <label className="ct-label">Aanvullende informatie</label>
                <textarea
                  name="message"
                  placeholder="Vertel me meer over uw wensen of stel uw vragen..."
                  className="ct-textarea"
                  rows={4}
                />
              </div>

              {/* Hoe gevonden */}
              <div className="ct-field">
                <label className="ct-label">
                  Hoe heb je mij gevonden? <span className="ct-req">*</span>
                </label>
                <div className={radioClass("gevonden")}>
                  <label className="ct-radio">
                    <input
                      type="radio"
                      name="gevonden"
                      value="google"
                      onChange={() => clearError("gevonden")}
                    />
                    Google
                  </label>
                  <label className="ct-radio">
                    <input
                      type="radio"
                      name="gevonden"
                      value="familie-vrienden"
                      onChange={() => clearError("gevonden")}
                    />
                    Familie en/of vrienden
                  </label>
                  <label className="ct-radio">
                    <input
                      type="radio"
                      name="gevonden"
                      value="anders"
                      onChange={() => clearError("gevonden")}
                    />
                    Anders
                  </label>
                </div>
                {errors.gevonden && <p className="ct-error-text">{errors.gevonden}</p>}
              </div>

              {/* Submit */}
              <button type="submit" className="ct-submit">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Bericht verzenden
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
