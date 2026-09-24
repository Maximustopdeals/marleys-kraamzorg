import type { Metadata } from "next";
import HomeClient from "./HomeClient";

/* ✅ AANGEPAST: 
   - title van 66 → 44 tekens
   - description van 178 → 138 tekens
   - canonical met trailing slash (matcht trailingSlash: true)
*/
export const metadata: Metadata = {
  title: "Kraamzorg Rotterdam | met een Vast Gezicht",
  description:
    "Kraamzorg in Rotterdam, vernoemd naar dochtertje Marley. Persoonlijke zorg met één vast gezicht, 24/7 bereikbaar. Plan een intake.",
  alternates: {
    canonical: "https://www.marleyskraamzorg.nl/",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
