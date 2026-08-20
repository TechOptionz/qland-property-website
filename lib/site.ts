/**
 * Single source of truth for business details, navigation and outbound links.
 * Values come from the QLAND Property v3 design canvas.
 */

export const SITE_URL = "https://www.qland.com.au";

export const CALENDLY_URL = "https://calendly.com/qland-booking/book-your-call";

export const contact = {
  phone: "0423 584 690",
  phoneHref: "tel:0423584690",
  phoneE164: "+61423584690",
  email: "info@qland.com.au",
  people: [
    {
      name: "Nabil Qureshi",
      phone: "0423 584 690",
      phoneHref: "tel:0423584690",
      email: "nabil-qureshi@qland.com.au",
    },
    {
      name: "Karen",
      phone: "0402 294 086",
      phoneHref: "tel:0402294086",
      email: "admin@qland.com.au",
    },
  ],
  address: {
    building: "Brisbane Technology Park",
    street: "Suite 7A, 88 Brandl St",
    locality: "Eight Mile Plains",
    region: "QLD",
    postcode: "4113",
    country: "AU",
    lat: -27.5793,
    lng: 153.1064,
  },
  hours: ["Mon–Fri 8:30am – 5:30pm", "Sat 9:00am – 1:00pm", "Sun closed"],
  licence: "4512789",
  abn: "54 731 902 118",
} as const;

export const social = [
  { label: "Facebook", href: "https://www.facebook.com/QLANDPropertyGroup" },
  { label: "Instagram", href: "https://www.instagram.com/qland_property" },
  { label: "TikTok", href: "https://www.tiktok.com/@qlandproperties" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nabil-q-a968bbb6" },
] as const;

export const routes = {
  home: "/",
  houseAndLand: "/house-and-land",
  buyersAgency: "/buyers-agency",
  propertyManagement: "/property-management",
  propertySales: "/property-sales",
  ourDifference: "/our-difference",
  about: "/about",
  reviews: "/reviews",
  faqs: "/faqs",
  contact: "/contact",
  privacy: "/privacy-policy",
  terms: "/terms",
} as const;

/** Items in the desktop "Services" dropdown, and the same order on mobile. */
export const serviceLinks = [
  { label: "House & Land", href: routes.houseAndLand },
  { label: "Buyer's Agency", href: routes.buyersAgency },
  { label: "Property Management", href: routes.propertyManagement },
  { label: "Property Sales", href: routes.propertySales },
] as const;

export const ourDifferenceLink = {
  label: "Our Difference",
  href: routes.ourDifference,
} as const;

/** Flat list used by the full-screen mobile menu. */
export const mobileNav = [
  { label: "Home", href: routes.home },
  ...serviceLinks,
  ourDifferenceLink,
  { label: "About", href: routes.about },
  { label: "Reviews", href: routes.reviews },
  { label: "FAQs", href: routes.faqs },
  { label: "Contact", href: routes.contact },
] as const;

/** Desktop nav entries that sit after the Services dropdown. */
export const desktopNavTail = [
  { label: "About", href: routes.about },
  { label: "Reviews", href: routes.reviews },
  { label: "FAQs", href: routes.faqs },
  { label: "Contact", href: routes.contact },
] as const;

export const footerColumns = [
  {
    heading: "About",
    links: [
      { label: "About us", href: routes.about },
      { label: "Our Difference", href: routes.ourDifference },
      { label: "Reviews", href: routes.reviews },
      { label: "FAQs", href: routes.faqs },
      { label: "Get in touch", href: routes.contact },
    ],
  },
  {
    heading: "Solutions",
    links: [...serviceLinks],
  },
] as const;
