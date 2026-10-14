"use client";

import { useState } from "react";

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

  const inputClass = (field: string) =>
    `w-full rounded-2xl border bg-white px-5 py-3.5 font-sans text-base text-berry-dark placeholder:text-berry-dark/30 outline-none transition-all focus:ring-4 ${
      errors[field]
        ? "border-red-500 bg-red-50/50 focus:border-red-500 focus:ring-red-500/10"
        : "border-berry-dark/10 focus:border-primary focus:ring-primary/10"
    }`;

  const selectClass = (field: string) =>
    `w-full cursor-pointer appearance-none rounded-2xl border bg-white px-5 py-3.5 pr-12 font-sans text-base text-berry-dark outline-none transition-all focus:ring-4 ${
      errors[field]
        ? "border-red-500 bg-red-50/50 focus:border-red-500 focus:ring-red-500/10"
        : "border-berry-dark/10 focus:border-primary focus:ring-primary/10"
    }`;

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div
          className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blush/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
          <div className="mb-8 flex items-center justify-center gap-2">
            <span className="text-primary text-xs">✦</span>
            <span className="font-cinzel text-[11px] uppercase tracking-[0.28em] text-primary">
              Contact
            </span>
          </div>

          <h1 className="font-cinzel text-4xl uppercase leading-[1.1] text-berry-dark sm:text-5xl lg:text-6xl">
            Neem{" "}
            <span className="text-primary">contact op</span>
          </h1>

          <div className="mx-auto my-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-primary">✦</span>
            <span className="h-px w-12 bg-primary/40" />
          </div>

          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-berry-dark/80 sm:text-xl">
            Ik geloof in persoonlijk contact. Bel, app of mail mij direct. Ik
            help je graag verder met kraamzorg die écht bij jullie past.
          </p>
        </div>
      </section>

      {/* ═══════ CONTACT CARDS ═══════ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid gap-6 sm:grid-cols-3">
            {/* E-mail */}
            <div className="group rounded-2xl border border-berry-dark/[0.08] bg-white p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card-hover">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h2 className="mb-3 font-cinzel text-lg uppercase text-berry-dark">
                E-mail
              </h2>
              <a
                href="mailto:info@marleyskraamzorg.nl"
                className="block font-sans text-sm font-semibold text-primary transition-colors hover:underline"
              >
                info@marleyskraamzorg.nl
              </a>
              <p className="mt-3 font-sans text-xs text-berry-dark/50">
                Antwoord binnen 24 uur
              </p>
            </div>

            {/* Telefoon */}
            <div className="group rounded-2xl border border-berry-dark/[0.08] bg-white p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card-hover">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.11 4.1 2 2 0 014.11 2h3a2 2 0 012 1.72 12.13 12.13 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.13 12.13 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <h2 className="mb-3 font-cinzel text-lg uppercase text-berry-dark">
                Telefoon
              </h2>
              <a
                href="tel:0645041484"
                className="block font-sans text-sm font-semibold text-primary transition-colors hover:underline"
              >
                06-45041484
              </a>
              <p className="mt-3 font-sans text-xs text-berry-dark/50">
                Bereikbaar 8:00 - 20:00
              </p>
            </div>

            {/* WhatsApp */}
            <div className="group rounded-2xl border border-berry-dark/[0.08] bg-white p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card-hover">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </div>
              <h2 className="mb-3 font-cinzel text-lg uppercase text-berry-dark">
                WhatsApp
              </h2>
              <a
                href="https://wa.me/31645041484"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-sans text-sm font-semibold text-primary transition-colors hover:underline"
              >
                06-45041484
              </a>
              <p className="mt-3 font-sans text-xs text-berry-dark/50">
                Direct antwoord
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ INFO BLOCKS ═══════ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="text-center">
            <p className="eyebrow mb-4">Kraamzorg in Rotterdam</p>

            <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl">
              Persoonlijk en{" "}
              <span className="text-primary">toegewijd</span>
            </h2>

            <div className="mx-auto my-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary">✦</span>
              <span className="h-px w-12 bg-primary/40" />
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* Zorg op Maat */}
            <div className="rounded-2xl border border-berry-dark/[0.08] bg-white p-8 shadow-card">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>

              <h3 className="mb-4 font-cinzel text-lg uppercase text-berry-dark">
                Zorg op Maat
              </h3>

              <p className="mb-4 font-sans text-sm leading-relaxed text-berry-dark/75">
                Ontvang deskundige en liefdevolle kraamzorg bij Marley&apos;s
                Kraamzorg. Als ervaren kraamverzorgende begrijp ik dat elk
                gezin uniek is. Ik bied:
              </p>

              <ul className="mb-4 space-y-2 font-sans text-sm text-berry-dark/75">
                <li className="flex items-start gap-3">
                  <span className="text-primary">✦</span>
                  Borstvoedingsondersteuning
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✦</span>
                  Babyverzorging op maat
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✦</span>
                  Geruststelling en advies
                </li>
              </ul>

              <p className="font-sans text-sm leading-relaxed text-berry-dark/75">
                <strong className="font-semibold text-primary">
                  Neem vandaag nog contact op
                </strong>{" "}
                om te ontdekken hoe ik je kan ondersteunen tijdens deze
                bijzondere tijd.
              </p>
            </div>

            {/* Zorgeloos Beginnen */}
            <div className="rounded-2xl border border-berry-dark/[0.08] bg-white p-8 shadow-card">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>

              <h3 className="mb-4 font-cinzel text-lg uppercase text-berry-dark">
                Zorgeloos Beginnen
              </h3>

              <p className="mb-4 font-sans text-sm leading-relaxed text-berry-dark/75">
                Voor een{" "}
                <strong className="font-semibold text-primary">
                  zorgeloze kraamtijd
                </strong>{" "}
                raden we aan je{" "}
                <strong className="font-semibold text-primary">
                  vóór de 12e week
                </strong>{" "}
                van je zwangerschap aan te melden. Dit zorgt voor:
              </p>

              <ul className="mb-4 space-y-2 font-sans text-sm text-berry-dark/75">
                <li className="flex items-start gap-3">
                  <span className="text-primary">✦</span>
                  Geen onvoorbereidheid
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✦</span>
                  Gegarandeerde beschikbaarheid
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✦</span>
                  Ondersteuning die jullie verdienen
                </li>
              </ul>

              <p className="font-sans text-sm leading-relaxed text-berry-dark/75">
                Ik ben{" "}
                <strong className="font-semibold text-primary">
                  24/7 beschikbaar
                </strong>{" "}
                en neem spoedig contact met je op na aanmelding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FORMULIER ═══════ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="text-center">
            <p className="eyebrow mb-4">Stuur een bericht</p>

            <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl">
              Contact<span className="text-primary">formulier</span>
            </h2>

            <div className="mx-auto my-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary">✦</span>
              <span className="h-px w-12 bg-primary/40" />
            </div>

            <p className="mx-auto max-w-2xl font-sans text-base leading-relaxed text-berry-dark/75">
              Vul het formulier in en ik neem zo snel mogelijk contact met je
              op.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-berry-dark/[0.08] bg-white p-8 shadow-card sm:p-10">
            <form
              action="https://formspree.io/f/xojbjdev"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Honeypot */}
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <input
                type="hidden"
                name="_subject"
                value="Nieuwe aanmelding via Marley's Kraamzorg website"
              />
              <input
                type="hidden"
                name="_next"
                value="https://www.marleyskraamzorg.nl/bedankt/"
              />

              {/* Naam */}
              <div>
                <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Naam <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Vul hier uw voor- en achternaam in"
                  className={inputClass("name")}
                  onChange={() => clearError("name")}
                />
                {errors.name && (
                  <p className="mt-2 font-sans text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* E-mail */}
              <div>
                <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  E-mail <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Vul hier uw e-mailadres in"
                  className={inputClass("email")}
                  onChange={() => clearError("email")}
                />
                {errors.email && (
                  <p className="mt-2 font-sans text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Telefoonnummer */}
              <div>
                <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Telefoonnummer <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Vul hier uw telefoonnummer in"
                  className={inputClass("phone")}
                  onChange={() => clearError("phone")}
                />
                {errors.phone && (
                  <p className="mt-2 font-sans text-xs text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Postcode */}
              <div>
                <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Postcode en woonplaats <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="postcode"
                  placeholder="Vul hier uw postcode en woonplaats in"
                  className={inputClass("postcode")}
                  onChange={() => clearError("postcode")}
                />
                {errors.postcode && (
                  <p className="mt-2 font-sans text-xs text-red-600">
                    {errors.postcode}
                  </p>
                )}
              </div>

              {/* Bevalling + Due date */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                    Bevalling <span className="text-primary">*</span>
                  </label>
                  <select
                    name="bevalling"
                    className={selectClass("bevalling")}
                    onChange={() => clearError("bevalling")}
                    defaultValue=""
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239a1e61' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 18px center",
                    }}
                  >
                    <option value="" disabled>
                      Selecteer keuze
                    </option>
                    <option value="ziekenhuis-medisch">
                      Ziekenhuis (medische indicatie)
                    </option>
                    <option value="ziekenhuis-poliklinisch">
                      Ziekenhuis (poliklinisch)
                    </option>
                    <option value="thuisbevalling">Thuisbevalling</option>
                  </select>
                  {errors.bevalling && (
                    <p className="mt-2 font-sans text-xs text-red-600">
                      {errors.bevalling}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                    Baby verwacht op <span className="text-primary">*</span>
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    className={inputClass("dueDate")}
                    onChange={() => clearError("dueDate")}
                  />
                  {errors.dueDate && (
                    <p className="mt-2 font-sans text-xs text-red-600">
                      {errors.dueDate}
                    </p>
                  )}
                </div>
              </div>

              {/* Verloskundige + Zorgverzekeraar */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                    Verloskundige (naam)
                  </label>
                  <input
                    type="text"
                    name="verloskundige"
                    placeholder="Naam van uw verloskundige"
                    className={inputClass("verloskundige")}
                  />
                </div>
                <div>
                  <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                    Zorgverzekeraar
                  </label>
                  <input
                    type="text"
                    name="verzekeraar"
                    placeholder="Uw zorgverzekeraar"
                    className={inputClass("verzekeraar")}
                  />
                </div>
              </div>

              {/* Aanvullende informatie */}
              <div>
                <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Aanvullende informatie
                </label>
                <textarea
                  name="message"
                  placeholder="Vertel me meer over uw wensen of stel uw vragen..."
                  className={`${inputClass("message")} min-h-[120px] resize-vertical`}
                  rows={4}
                />
              </div>

              {/* Hoe gevonden */}
              <div>
                <label className="mb-3 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Hoe heb je mij gevonden?{" "}
                  <span className="text-primary">*</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { value: "google", label: "Google" },
                    { value: "familie-vrienden", label: "Familie en/of vrienden" },
                    { value: "anders", label: "Anders" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex cursor-pointer items-center gap-2 rounded-2xl border border-berry-dark/10 bg-white px-5 py-3 font-sans text-sm text-berry-dark/80 transition-all hover:border-primary hover:bg-primary/[0.03]"
                    >
                      <input
                        type="radio"
                        name="gevonden"
                        value={option.value}
                        onChange={() => clearError("gevonden")}
                        className="h-4 w-4 accent-primary"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
                {errors.gevonden && (
                  <p className="mt-2 font-sans text-xs text-red-600">
                    {errors.gevonden}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-primary font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
              >
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
