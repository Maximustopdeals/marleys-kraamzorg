/* ── Hero — Editorial Split-Screen ── */
function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        const content = sectionRef.current.querySelector(".hero-content") as HTMLElement;
        if (content) {
          content.style.transform = `translateY(${scrolled * 0.08}px)`;
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
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Zeer subtiel decoratief element — geen crème, geen drukke cirkels */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-blush/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="hero-content relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ─── TEKST LINKS ─── */}
          <div className="max-w-xl">

            {/* Klein label met sterretje — subtiel eerbetoon aan Marley */}
            <div className="mb-8 flex items-center gap-2">
              <span className="text-primary text-xs">✦</span>
              <span className="font-cinzel text-[11px] uppercase tracking-[0.28em] text-primary">
                Marley&apos;s Kraamzorg
              </span>
            </div>

            {/* H1 — grote Cinzel, twee-regelig */}
            <h1 className="font-cinzel text-4xl uppercase leading-[1.05] tracking-tight text-berry-dark sm:text-5xl lg:text-6xl xl:text-[4rem]">
              Kraamzorg in Rotterdam,
              <span className="block mt-3 text-primary">
                met een vast gezicht
              </span>
            </h1>

            {/* Sierlijn met sterretje — subtiel */}
            <div className="my-8 flex items-center gap-3">
              <span className="h-px w-12 bg-primary/40" />
              <span className="text-primary text-xs">✦</span>
            </div>

            {/* Persoonlijke noot — kort, warm, oprecht */}
            <p className="mb-6 font-sans text-lg leading-relaxed text-berry-dark/90">
              Ik ben <strong className="font-semibold text-berry-dark">Lisa</strong>.
              Persoonlijke kraamzorg met <strong className="font-semibold text-berry-dark">één vast gezicht</strong> —
              geen wisselende verzorgenden, maar een vertrouwd iemand van dag 1.
            </p>

            {/* Kleinere toelichting — rustig */}
            <p className="mb-10 font-sans text-base leading-relaxed text-berry-dark/70">
              Met zorg voor jou, je baby en je hele gezin. In Rotterdam en omgeving.
            </p>

            {/* CTA's — slechts 2, geen 4 */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact/"
                className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
              >
                Meld je aan
              </Link>
              <Link
                href="/contact/"
                className="inline-flex h-14 items-center justify-center rounded-full border border-berry-dark/20 px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-berry-dark transition-all duration-300 hover:border-berry-dark hover:bg-berry-dark hover:text-white"
              >
                Plan een kennismaking
              </Link>
            </div>

            {/* Trust-regel — klein, onder de CTA's, niet prominent */}
            <p className="mt-8 font-sans text-xs uppercase tracking-[0.2em] text-berry-dark/50">
              KCKZ-gecertificeerd · 24/7 bereikbaar · 5.0 op Google
            </p>

          </div>

          {/* ─── FOTO RECHTS ─── */}
          <div className="relative order-first lg:order-last">
            {/* Zeer subtiel kader-effect — geen drukke ringen */}
            <div
              className="absolute -inset-3 rounded-[2rem] bg-blush/30 blur-xl"
              aria-hidden="true"
            />

            {/* De foto in een strak, high-end kader */}
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(74,26,61,0.35)]">
              <Image
                src="/images/baby-portrait.webp"
                alt="Pasgeboren baby in een zachte witte omgeving — Marley's Kraamzorg Rotterdam"
                width={900}
                height={1100}
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />

              {/* Zeer subtiele overlay onderaan voor diepte — optioneel */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-berry-dark/5 via-transparent to-transparent" />
            </div>

            {/* Klein vlinder-accent of sterretje — respectvol, niet dominant */}
            <div className="absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-card">
              <span className="text-primary text-lg">✦</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
