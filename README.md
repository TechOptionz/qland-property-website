# QLAND Property

Marketing site for QLAND Property — a Brisbane buyer's agency, house-and-land
builder and property manager.

Built in Next.js from the **QLAND Property v3** Claude Design canvas
(`ddbe9862-b9e5-4960-b528-5d39f66df1f6`).

## Stack

- Next.js 16 (App Router, React 19, TypeScript)
- Plain CSS with custom properties — no utility framework. Tokens and primitives
  live in `app/globals.css`; one-off layout values stay inline on the component.
- `next/font` self-hosts Instrument Serif, Inter and IBM Plex Mono.
- `next/image` serves the existing Wix CDN photography (allow-listed in
  `next.config.ts`).

## Commands

```bash
npm run dev        # http://localhost:3000
npm run build
npm start
npm run lint
npm run typecheck
```

## Layout

```
app/
  layout.tsx              header + footer shell, fonts, org JSON-LD
  page.tsx                Home
  house-and-land/         House & Land (+ qualification form)
  buyers-agency/          Buyer's Agency
  property-management/    Property Management (+ appraisal form)
  property-sales/         Property Sales
  our-difference/         Comparison table
  about/                  Founder story, team, credentials
  reviews/                Google reviews
  faqs/                   Accordion + FAQPage JSON-LD
  contact/                Form, office details, map
  privacy-policy/ terms/  Legal placeholders — see "Outstanding" below
  api/enquiry/route.ts    Form endpoint (stub — see below)
  globals.css             Design tokens and shared classes
components/               Header, footer, hero, CTA band, forms, accordion
lib/site.ts               Business details, nav, outbound links
lib/content.ts            All page copy and image references
lib/seo.ts                Structured data
public/assets/            Logo
```

Every page is statically prerendered; only `/api/enquiry` is dynamic.

## Notes on the port

The design canvas is a single-file SPA that swaps screens with `sc-if` blocks.
Here each screen is a real route with its own `metadata`, taken verbatim from the
canvas's `META` map, so titles, descriptions and canonicals match the design.

A few deliberate differences:

- **Fonts** are self-hosted through `next/font` rather than loaded from the
  Google Fonts CDN — same faces, no third-party request and no layout shift.
- **`<image-slot>`** (the canvas's drag-to-fill placeholder, which needs the
  canvas runtime) is now `components/image-slot.tsx`. It renders a real image
  when you pass `src`, and a visibly labelled placeholder when you don't. The
  three team headshots are still unfilled.
- **FAQ structured data** is generated from the same `faqs` array the page
  renders. The canvas carried a second, slightly divergent hand-written copy of
  the questions; deriving both from one source keeps the markup matching the
  visible answers, which is what Google requires.
- **Responsive breakpoint** is a single 920px cut, same as the canvas.
- **`!important`** appears four times, all in the mobile/desktop visibility and
  stacking utilities, because the elements they toggle set `display` inline.

## Outstanding

**Forms don't go anywhere yet.** `app/api/enquiry/route.ts` validates the
payload and logs it. Point it at the CRM or transactional email provider before
launch, and add GA4 conversion tracking on booking and form submit.

**Content the client still owes**, carried over from the design brief:

- Team headshots for the three `image-slot`s on `/about`.
- Privacy policy and website terms — `/privacy-policy` and `/terms` are
  structural placeholders, marked `noindex`, listing what each needs to cover.

**Figures to confirm before launch.** The canvas supplies concrete numbers where
the old site had placeholders: the 4.9/37-review rating, "120+ homes",
"8 yrs", licence 4512789, ABN 54 731 902 118, all fee percentages, the case
study and recent-sale figures, and the "33 days" average. These need to be
verified as accurate and current — several are dated "August 2026" in the copy,
and the fee and past-results claims carry compliance weight under Australian
Consumer Law and QLD agency conduct rules.
