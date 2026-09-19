import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Kraamzorg Rotterdam | met een Vast Gezicht - Marley's Kraamzorg",
  description:
    "💖 Marley's Kraamzorg vernoemd naar mijn dochtertje Marley. Persoonlijke kraamzorg in Rotterdam met één vast gezicht. Betrokken, deskundig en 24/7 bereikbaar.",
  alternates: {
    canonical: "https://www.marleyskraamzorg.nl",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
