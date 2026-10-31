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
      <section className="relative overflow-hidden bg-[#FDFBFB] pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blush/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
            
            <div className="max-w-xl">
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-primary/40"></span>
                <span className="text-primary text-xs">✦</span>
                <span className="font-cinzel text-[11px] uppercase tracking-[0.28em] text-primary">
                  Contact
                </span>
              </div>

              <h1 className="font-cinzel text-4xl leading-[1.15] text-berry-dark sm:text-5xl lg:text-[3.5rem] text-balance">
                Neem <br className="hidden sm:block" />
                <span className="text-primary italic font-light tracking-wide mt-2 block">
                  contact op
                </span>
              </h1>

              <p className="mt-8 font-sans text-lg leading-relaxed text-berry-dark/75 sm:text-xl">
                Ik geloof in persoonlijk contact. Bel, app of mail mij direct. Ik
                help je graag verder met kraamzorg die écht bij jullie past.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6">
              <a href="mailto:info@marleyskraamzorg.nl" className="group flex items-center gap-6 rounded-3xl border border-berry-dark/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div>
                  <h2 className="mb-1 font-cinzel text-sm uppercase tracking-wider text-berry-dark/60">E-mail</h2>
                  <span className="block font-sans text-lg font-semibold text-berry-dark transition-colors group-hover:text-primary">info@marleyskraamzorg.nl</span>
                  <p className="mt-1 font-sans text-xs text-berry-dark/50">Antwoord binnen 24 uur</p>
                </div>
              </a>

              <a href="tel:0645041484" className="group flex items-center gap-6 rounded-3xl border border-berry-dark/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.11 4.1 2 2 0 014.11 2h3a2 2 0 012 1.72 12.13 12.13 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.13 12.13 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                </div>
                <div>
                  <h2 className="mb-1 font-cinzel text-sm uppercase tracking-wider text-berry-dark/60">Telefoon</h2>
                  <span className="block font-sans text-lg font-semibold text-berry-dark transition-colors group-hover:text-primary">06-45041484</span>
                  <p className="mt-1 font-sans text-xs text-berry-dark/50">Kantoor: 08:00 - 22:00 · Spoed: 24/7</p>
                </div>
              </a>

              <a href="https://wa.me/31645041484" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 rounded-3xl border border-berry-dark/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
                </div>
                <div>
                  <h2 className="mb-1 font-cinzel text-sm uppercase tracking-wider text-berry-dark/60">WhatsApp</h2>
                  <span className="block font-sans text-lg font-semibold text-berry-dark transition-colors group-hover:text-primary">06-45041484</span>
                  <p className="mt-1 font-sans text-xs text-berry-dark/50">Tijdens kantooruren</p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32 border-b border-berry-dark/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-end mb-16">
            <div>
              <p className="eyebrow mb-4 text-primary font-cinzel tracking-widest text-xs uppercase">Kraamzorg in Rotterdam</p>
              <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl lg:text-5xl">
                Persoonlijk en <span className="text-primary italic font-light lowercase">toegewijd</span>
              </h2>
            </div>
            <div>
              <p className="font-sans text-lg leading-relaxed text-berry-dark/80 lg:pb-2">
                Ontdek hoe ik jou kan ondersteunen tijdens deze bijzondere tijd. Of je nu al vragen hebt over de bevalling, of je gewoon wilt oriënteren: ik sta voor je klaar.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <div className="group relative rounded-3xl border border-berry-dark/5 bg-[#FDFBFB] p-8 sm:p-10 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
              </div>
              <h3 className="mb-4 font-cinzel text-xl uppercase text-berry-dark">Zorg op Maat</h3>
              <p className="mb-6 font-sans text-base leading-relaxed text-berry-dark/75">
                Ontvang deskundige en liefdevolle kraamzorg bij Marley&apos;s Kraamzorg. Als ervaren kraamverzorgende begrijp ik dat elk gezin uniek is. Ik bied:
              </p>
              <ul className="mb-6 space-y-3 font-sans text-sm text-berry-dark/75">
                <li className="flex items-start gap-3"><span className="text-primary mt-0.5">✦</span> Borstvoedingsondersteuning</li>
                <li className="flex items-start gap-3"><span className="text-primary mt-0.5">✦</span> Babyverzorging op maat</li>
                <li className="flex items-start gap-3"><span className="text-primary mt-0.5">✦</span> Geruststelling en advies</li>
              </ul>
              <p className="font-sans text-sm leading-relaxed text-berry-dark/75">
                <strong className="font-semibold text-primary">Neem vandaag nog contact op</strong> om te ontdekken hoe ik je kan ondersteunen tijdens deze bijzondere tijd.
              </p>
            </div>

            <div className="group relative rounded-3xl border border-berry-dark/5 bg-[#FDFBFB] p-8 sm:p-10 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              </div>
              <h3 className="mb-4 font-cinzel text-xl uppercase text-berry-dark">Zorgeloos Beginnen</h3>
              <p className="mb-6 font-sans text-base leading-relaxed text-berry-dark/75">
                Voor een <strong className="font-semibold text-primary">zorgeloze kraamtijd</strong> raden we aan je <strong className="font-semibold text-primary">vóór de 12e week</strong> van je zwangerschap aan te melden. Dit zorgt voor:
              </p>
              <ul className="mb-6 space-y-3 font-sans text-sm text-berry-dark/75">
                <li className="flex items-start gap-3"><span className="text-primary mt-0.5">✦</span> Geen onvoorbereidheid</li>
                <li className="flex items-start gap-3"><span className="text-primary mt-0.5">✦</span> Gegarandeerde beschikbaarheid</li>
                <li className="flex items-start gap-3"><span className="text-primary mt-0.5">✦</span> Ondersteuning die jullie verdienen</li>
              </ul>
              <p className="font-sans text-sm leading-relaxed text-berry-dark/75">
                Ik neem na je aanmelding spoedig contact met je op om alles rustig te bespreken.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FDFBFB] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr,1.5fr] lg:gap-24 items-start">
            
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow mb-4 text-primary font-cinzel tracking-widest text-xs uppercase">Stuur een bericht</p>
              <h2 className="font-cinzel text-3xl uppercase leading-tight text-berry-dark sm:text-4xl lg:text-5xl mb-6">
                Contact<span className="text-primary italic font-light lowercase">formulier</span>
              </h2>
              <p className="font-sans text-lg leading-relaxed text-berry-dark/80 mb-10">
                Vul het formulier in en ik neem zo snel mogelijk contact met je op. Ik kijk ernaar uit om je te verwelkomen.
              </p>

              <div className="rounded-3xl bg-white p-8 shadow-sm border border-berry-dark/5">
                <h3 className="font-cinzel text-lg uppercase text-berry-dark mb-6">Onze Bereikbaarheid</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FDFBFB] text-primary ring-1 ring-primary/10">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                      <h4 className="font-cinzel text-sm uppercase text-berry-dark mb-1">Kantooruren (08:00 - 22:00)</h4>
                      <p className="font-sans text-sm leading-relaxed text-berry-dark/70">
                        Voor nieuwe aanmeldingen, intakes, vragen over vergoedingen en algemene informatie.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FDFBFB] text-primary ring-1 ring-primary/10">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-cinzel text-sm uppercase text-berry-dark mb-1">24/7 Bereikbaarheid (Spoed)</h4>
                      <p className="font-sans text-sm leading-relaxed text-berry-dark/70">
                        Lig je nu in het kraambed en heb je direct hulp nodig? Als actieve cliënt ben je 24/7 verzekerd van direct contact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-berry-dark/5 bg-white p-8 shadow-sm sm:p-12">
              <form action="https://formspree.io/f/xojbjdev" method="POST" onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                <input type="hidden" name="_subject" value="Nieuwe aanmelding via Marley's Kraamzorg website" />
                <input type="hidden" name="_next" value="https://www.marleyskraamzorg.nl/bedankt/" />

                <div>
                  <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">Naam <span className="text-primary">*</span></label>
                  <input type="text" name="name" placeholder="Vul hier uw voor- en achternaam in" className={inputClass("name")} onChange={() => clearError("name")} />
                  {errors.name && <p className="mt-2 font-sans text-xs text-red-600">{errors.name}</p>}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">E-mail <span className="text-primary">*</span></label>
                    <input type="email" name="email" placeholder="uw@email.nl" className={inputClass("email")} onChange={() => clearError("email")} />
                    {errors.email && <p className="mt-2 font-sans text-xs text-red-600">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">Telefoonnummer <span className="text-primary">*</span></label>
                    <input type="tel" name="phone" placeholder="06-12345678" className={inputClass("phone")} onChange={() => clearError("phone")} />
                    {errors.phone && <p className="mt-2 font-sans text-xs text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">Postcode en woonplaats <span className="text-primary">*</span></label>
                  <input type="text" name="postcode" placeholder="1234 AB, Rotterdam" className={inputClass("postcode")} onChange={() => clearError("postcode")} />
                  {errors.postcode && <p className="mt-2 font-sans text-xs text-red-600">{errors.postcode}</p>}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">Bevalling <span className="text-primary">*</span></label>
                    <select name="bevalling" className={selectClass("bevalling")} onChange={() => clearError("bevalling")} defaultValue="" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239a1e61' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 18px center" }}>
                      <option value="" disabled>Selecteer keuze</option>
                      <option value="ziekenhuis-medisch">Ziekenhuis (medische indicatie)</option>
                      <option value="ziekenhuis-poliklinisch">Ziekenhuis (poliklinisch)</option>
                      <option value="thuisbevalling">Thuisbevalling</option>
                    </select>
                    {errors.bevalling && <p className="mt-2 font-sans text-xs text-red-600">{errors.bevalling}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">Baby verwacht op <span className="text-primary">*</span></label>
                    <input type="date" name="dueDate" className={inputClass("dueDate")} onChange={() => clearError("dueDate")} />
                    {errors.dueDate && <p className="mt-2 font-sans text-xs text-red-600">{errors.dueDate}</p>}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">Verloskundige (naam)</label>
                    <input type="text" name="verloskundige" placeholder="Naam van uw verloskundige" className={inputClass("verloskundige")} />
                  </div>
                  <div>
                    <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">Zorgverzekeraar</label>
                    <input type="text" name="verzekeraar" placeholder="Uw zorgverzekeraar" className={inputClass("verzekeraar")} />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">Aanvullende informatie</label>
                  <textarea name="message" placeholder="Vertel me meer over uw wensen of stel uw vragen..." className={`${inputClass("message")} min-h-[120px] resize-vertical`} rows={4} />
                </div>

                <div>
                  <label className="mb-3 block font-cinzel text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">Hoe heb je mij gevonden? <span className="text-primary">*</span></label>
                  <div className="flex flex-wrap gap-3">
                    {[{ value: "google", label: "Google" }, { value: "familie-vrienden", label: "Familie en/of vrienden" }, { value: "anders", label: "Anders" }].map((option) => (
                      <label key={option.value} className="flex cursor-pointer items-center gap-2 rounded-2xl border border-berry-dark/10 bg-white px-5 py-3 font-sans text-sm text-berry-dark/80 transition-all hover:border-primary hover:bg-primary/[0.03]">
                        <input type="radio" name="gevonden" value={option.value} onChange={() => clearError("gevonden")} className="h-4 w-4 accent-primary" />
                        {option.label}
                      </label>
                    ))}
                  </div>
                  {errors.gevonden && <p className="mt-2 font-sans text-xs text-red-600">{errors.gevonden}</p>}
                </div>

                <button type="submit" className="mt-4 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-primary font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Bericht verzenden
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
