export default function JsonLd() {
const localBusiness = {
"@context": "https://schema.org",
"@type": "MedicalBusiness",
"@id": "https://www.marleyskraamzorg.nl/#organization",
 
name: "Marley's Kraamzorg",
 
description:
"Persoonlijke kraamzorg in Rotterdam en omgeving. Eén vast gezicht, persoonlijke begeleiding en 24/7 bereikbaarheid.",
 
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
latitude: 51.8861,
longitude: 4.5128,
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
 
serviceType: "Kraamzorg",
 
hasOfferCatalog: {
"@type": "OfferCatalog",
name: "Kraamzorg diensten",
itemListElement: [
{
"@type": "Offer",
itemOffered: {
"@type": "Service",
name: "Zorg voor moeder",
},
},
{
"@type": "Offer",
itemOffered: {
"@type": "Service",
name: "Zorg voor baby",
},
},
{
"@type": "Offer",
itemOffered: {
"@type": "Service",
name: "Borstvoedingsbegeleiding",
},
},
{
"@type": "Offer",
itemOffered: {
"@type": "Service",
name: "Huishoudelijke ondersteuning",
},
},
{
"@type": "Offer",
itemOffered: {
"@type": "Service",
name: "Voorlichting en begeleiding",
},
},
],
},
 
sameAs: [
"https://www.marleyskraamzorg.nl",
],
};
 
const website = {
"@context": "https://schema.org",
"@type": "WebSite",
 
"@id": "https://www.marleyskraamzorg.nl/#website",
 
name: "Marley's Kraamzorg",
 
url: "https://www.marleyskraamzorg.nl",
 
publisher: {
"@id": "https://www.marleyskraamzorg.nl/#organization",
},
};
 
const breadcrumb = {
"@context": "https://schema.org",
"@type": "BreadcrumbList",
 
itemListElement: [
{
"@type": "ListItem",
position: 1,
name: "Home",
item: "https://www.marleyskraamzorg.nl/",
},
{
"@type": "ListItem",
position: 2,
name: "Kraamzorg",
item: "https://www.marleyskraamzorg.nl/kraamzorg/",
},
{
"@type": "ListItem",
position: 3,
name: "Over mij",
item: "https://www.marleyskraamzorg.nl/over-mij/",
},
{
"@type": "ListItem",
position: 4,
name: "Contact",
item: "https://www.marleyskraamzorg.nl/contact/",
},
],
};
 
return (
<>
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify(localBusiness),
}}
/>
 
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify(website),
}}
/>
 
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify(breadcrumb),
}}
/>
</>
);
}
