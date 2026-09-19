export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Marley's Kraamzorg",
    description:
      "Persoonlijke kraamzorg in Rotterdam en omgeving. Eén vast gezicht, 24/7 bereikbaar.",
    url: "https://www.marleyskraamzorg.nl",
    telephone: "+31645041484",
    email: "info@marleyskraamzorg.nl",
    image: "https://www.marleyskraamzorg.nl/images/logo.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dr. J.J.P. Oudsingel 62",
      addressLocality: "Rotterdam",
      addressRegion: "Zuid-Holland",
      postalCode: "3075 CJ",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.8861",
      longitude: "4.5128",
    },
    areaServed: [
      { "@type": "City", name: "Rotterdam" },
      { "@type": "City", name: "Capelle aan den IJssel" },
      { "@type": "City", name: "Barendrecht" },
      { "@type": "City", name: "Nieuwerkerk aan den IJssel" },
      { "@type": "City", name: "Krimpen aan den IJssel" },
      { "@type": "City", name: "Gouda" },
      { "@type": "City", name: "Waddinxveen" },
      { "@type": "City", name: "Moordrecht" },
      { "@type": "City", name: "Zevenhuizen" },
    ],
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    serviceType: "Kraamzorg",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kraamzorg diensten",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zorg voor moeder" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zorg voor baby" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Huishoudelijke hulp" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Begeleiding & voorlichting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nachtzorg" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "24/7 Bereikbaarheid" } },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "6",
      bestRating: "5",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Familie de Vries" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Lisa was een geweldige steun tijdens onze kraamtijd. Haar kennis, geduld en warmte maakten alles zo veel makkelijker.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Familie Jansen" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Een vertrouwd gezicht van dag één, dat maakt zo'n verschil. Lisa is professioneel, liefdevol en altijd bereikbaar.",
      },
    ],
    sameAs: ["https://www.marleyskraamzorg.nl"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Marley's Kraamzorg",
    url: "https://www.marleyskraamzorg.nl",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.marleyskraamzorg.nl/alle-paginas?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marleyskraamzorg.nl/" },
      { "@type": "ListItem", position: 2, name: "Kraamzorg", item: "https://www.marleyskraamzorg.nl/kraamzorg/" },
      { "@type": "ListItem", position: 3, name: "Over mij", item: "https://www.marleyskraamzorg.nl/over-mij/" },
      { "@type": "ListItem", position: 4, name: "Contact", item: "https://www.marleyskraamzorg.nl/contact/" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
