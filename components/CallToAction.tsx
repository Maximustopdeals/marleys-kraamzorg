import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-blush/10 py-16 sm:py-20 border-t border-berry-dark/5">
      <div className="container-main text-center">
        <h2 className="font-cinzel text-2xl uppercase tracking-widest text-berry-dark md:text-3xl">
          Klaar om kennis te maken?
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-sans text-base leading-relaxed text-berry-dark/70">
          Ik nodig je graag uit voor een vrijblijvend gesprek bij jou thuis, om te kijken of we een match zijn voor jouw kraamweek.
        </p>
        <Link
          href="/contact/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 font-cinzel text-xs uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
        >
          Plan een kennismaking
        </Link>
      </div>
    </section>
  );
}
