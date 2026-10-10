import type { Metadata } from "next";
import Link from "next/link";
import { StarIcon } from "@/components/StarIcon";

export const metadata: Metadata = {
  title: "Bedankt | Marley's Kraamzorg Rotterdam",
  description: "Je bericht is verzonden. Ik neem zo snel mogelijk contact met je op.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BedanktPage() {
  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-4 pt-24 pb-12">
      <div className="max-w-xl w-full text-center">
        <div className="glass-card p-12 md:p-16">
          <div className="flex justify-center mb-6">
            <StarIcon size="xl" fillColor="#9A1E61" strokeColor="#E8D5C4" />
          </div>
          <h1 className="font-cinzel text-2xl md:text-3xl uppercase text-primary mb-4">
            Bedankt!
          </h1>
          <p className="font-body text-base text-berry-dark/80 mb-4 leading-relaxed">
            Je bericht is verzonden. Ik neem zo snel mogelijk contact met je op.
          </p>
          <p className="font-body text-sm text-berry-dark/60 mb-8">
            Heb je vragen? Bel me gerust op{" "}
            <a href="tel:+31645041484" className="text-primary hover:underline">
              06 - 450 414 84
            </a>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Terug naar home
            </Link>
            <Link href="/contact/" className="btn-outline">
              Terug naar contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
