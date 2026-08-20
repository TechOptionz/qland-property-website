import { contact, SITE_URL, social } from "./site";
import { faqs } from "./content";

/**
 * RealEstateAgent schema, ported from the design canvas. Rendered once in the
 * root layout so every page carries it.
 */
export const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${SITE_URL}/#org`,
  name: "QLAND Property",
  alternateName: "QLAND Property Group",
  description:
    "Brisbane buyer's agency, fixed-price house and land packages and property management across South East Queensland.",
  url: `${SITE_URL}/`,
  telephone: contact.phoneE164,
  email: contact.email,
  priceRange: "$$",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Brisbane and South East Queensland",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${contact.address.street}, ${contact.address.building}`,
    addressLocality: contact.address.locality,
    addressRegion: contact.address.region,
    postalCode: contact.address.postcode,
    addressCountry: contact.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: contact.address.lat,
    longitude: contact.address.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  founder: { "@type": "Person", name: "Nabil Qureshi" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "37",
    bestRating: "5",
  },
  sameAs: social.map((s) => s.href),
};

/**
 * Built from the same `faqs` array the FAQ page renders, so the markup always
 * matches the visible answers.
 */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/** Renders a JSON-LD script tag. */
export function jsonLd(schema: object) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  };
}
