/* ── Hero — Stijl 1: Magenta dominant ── */
function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        const content = sectionRef.current.querySelector(".hero-content") as HTMLElement;
        if (content) {
          content.style.transform = `translateY(${scrolled * 0.12}px)`;
          content.style.opacity = `${Math.max(0, 1 - scrolled / 900)}`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-primary"
    >
      {/* Decoratieve zachte cirkels op de achtergrond */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cream/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-cream/8 blur-3xl pointer-events-none" />

      {/* Subtiel korrelig patroon */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #FDF9F4 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="hero-content relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ═══════ LINKERKOLOM — TEKST ═══════ */}
          <article className="text-center lg:text-left">
            {/* Badge — crème op magenta */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/25 rounded-full px-4 py-2 mb-8 backdrop-blur-sm shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FDF9F4" strokeWidth="2" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
              <span className="font-cinzel text-[11px] uppercase tracking-[0.2em] text-cream/95">
                Marley&apos;s Kraamzorg
              </span>
            </div>

            {/* H1 — crème, met accent op "Vast Gezicht" */}
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] uppercase leading-[1.08] tracking-tight mb-8 text-cream text-balance">
              Kraamzorg Rotterdam
              <span className="block mt-2">
                met een{" "}
                <span className="relative inline-block text-cream whitespace-nowrap">
                  Vast Gezicht
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8 Q 50 2, 100 6 T 198 4"
                      stroke="#F5C8D8"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Persoonlijke noot — crème op magenta */}
            <p className="font-body text-base md:text-lg text-cream/90 max-w-xl mx-auto lg:mx-0 mb-4 italic leading-relaxed">
              💖 Marley&apos;s Kraamzorg vernoemd naar mijn dochtertje Marley. Haar naam draag ik met trots, als herinnering aan hoe kostbaar de eerste dagen zijn.
            </p>

            {/* Hoofdtekst — crème op magenta */}
            <p className="font-body text-sm md:text-base text-cream/85 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Verwacht je een baby en verlang je naar rust, vertrouwen en persoonlijke aandacht? Ik ben <strong className="text-cream font-semibold">Lisa</strong> en bied kleinschalige kraamzorg in Rotterdam met <strong className="text-cream font-semibold">één vast gezicht</strong> — en dat ben ik. Geen wisselende verzorgenden, maar een vertrouwd gezicht van dag 1.
            </p>

            {/* CTA's — crème primair + outline crème */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 font-cinzel text-xs uppercase tracking-[0.15em] h-14 px-10 rounded-full bg-cream text-primary shadow-[0_15px_30px_-10px_rgba(0,0,0,0.35)] hover:bg-blush hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Meld je nu aan voor kraamzorg"
              >
                📝 Meld je nu aan
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 font-cinzel text-xs uppercase tracking-[0.15em] h-14 px-10 rounded-full border-2 border-cream/40 text-cream hover:bg-cream hover:text-primary hover:border-cream transition-all duration-300"
                aria-label="Plan een vrijblijvende kennismaking"
              >
                Plan een kennismaking
              </Link>
            </div>

            {/* Trust bar — crème op magenta */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start">
              {[
                "5.0 ⭐ op Google",
                "KCKZ-gecertificeerd",
                "100% vergoed",
                "24/7 bereikbaar",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="flex-shrink-0 w-4 h-4 rounded-full bg-cream flex items-center justify-center" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9A1E61" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-body text-xs md:text-sm text-cream/90 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </article>

          {/* ═══════ RECHTERKOLOM — FOTO ═══════ */}
          <aside className="relative w-full max-w-[560px] mx-auto lg:ml-auto lg:mr-0">
            {/* Hoofdfoto — babyfoto in een crème kader */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.4)] ring-1 ring-cream/20">
              <Image
                src="/images/baby-banner.webp"
                alt="Pasgeboren baby in een zachte, warme omgeving — Marley's Kraamzorg Rotterdam"
                width={800}
                height={900}
                priority
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Zachte donkere overlay onderaan voor diepte */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A1A3D]/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Badge rechtsboven op de foto — donker met crème tekst */}
            <div className="absolute top-4 right-4 bg-berry-dark text-cream rounded-2xl px-4 py-3 shadow-xl backdrop-blur-sm ring-1 ring-cream/20">
              <p className="font-cinzel text-[11px] uppercase tracking-wider text-cream leading-tight">
                100% vergoed
              </p>
              <p className="font-body text-[10px] text-cream/75 mt-0.5">
                door alle zorgverzekeraars
              </p>
            </div>

            {/* Zwevende badge linksonder op de foto — wit met magenta */}
            <div className="absolute -bottom-6 left-4 lg:-left-6 bg-white rounded-2xl px-5 py-3.5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] ring-1 ring-primary/10">
              <div className="flex items-center gap-3">
                {/* Google G-logo */}
                <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div>
                  <p className="font-cinzel text-xl text-primary leading-none">
                    5.0 <span className="text-primary/60 text-base">⭐</span>
                  </p>
                  <p className="font-body text-[11px] text-berry-dark/70 mt-0.5">
                    op Google
                  </p>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
