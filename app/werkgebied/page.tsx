import type { Metadata } from "next";
import WerkgebiedClient from "./WerkgebiedClient";

export const metadata: Metadata = {
  title: "Werkgebied | Kraamzorg Rotterdam en Omgeving - Marley's Kraamzorg",
  description:
    "Marley's Kraamzorg is actief in Rotterdam, Capelle aan den IJssel, Nieuwerkerk, Krimpen aan den IJssel, Gouda, Waddinxveen, Moordrecht en Zevenhuizen. Persoonlijke kraamzorg bij jou in de regio.",
  alternates: {
    canonical: "https://www.marleyskraamzorg.nl/werkgebied",
  },
};

export default function WerkgebiedPage() {
  return <WerkgebiedClient />;
}
