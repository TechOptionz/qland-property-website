/**
 * Page content lifted verbatim from the QLAND Property v3 design canvas.
 * Kept out of the components so copy edits do not require touching layout.
 */

import { routes } from "./site";

const wix = (id: string, w: number, h: number) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85/i.jpg`;

export const images = {
  heroHome: wix("4dd231_35f5f63d7b9748428bba0c02bd606ea4~mv2.jpg", 1900, 1000),
  heroHouseAndLand: wix(
    "4dd231_460547f669594d149d03ef21cfc76593~mv2.jpg",
    1900,
    800,
  ),
  heroBuyersAgency: wix(
    "4dd231_eb19aeae537f4eb3b835d5b7e359febd~mv2.jpg",
    1900,
    800,
  ),
  heroPropertyManagement: wix(
    "4dd231_f88db8b2141b40a9896def7306744605~mv2.jpg",
    1900,
    800,
  ),
  heroPropertySales: wix(
    "4dd231_9a578841d4124e2e8fe12d96824b749f~mv2.jpg",
    1900,
    800,
  ),
  kitchenDetail: wix("4dd231_8612c3fb8e7644c894e8edf7c18c5506~mv2.jpg", 1200, 900),
  openPlan: wix("4dd231_06fa6c39cf9b4c468d99e3acaaf1a262~mv2.jpg", 1200, 900),
  office: wix("4dd231_d938ef7de5424389aba5141fcce33df5~mv2.jpg", 900, 1125),
};

export type HomeDesign = {
  name: string;
  area: string;
  facade?: string;
  price: string;
  spec: string;
  image: string;
  alt: string;
};

/** Three of these also appear on the home page "Featured homes" band. */
export const homeDesigns: HomeDesign[] = [
  {
    name: "The Brandl 168",
    area: "168 m²",
    facade: "Facade 1",
    price: "from $612,000",
    spec: "3 bed · 2 bath · 2 living · 2 car",
    image: wix("4dd231_64d8fc3049db474eb2f908f0d3fb38b2~mv2.jpg", 800, 600),
    alt: "Facade of the Brandl 168, a single-storey QLAND home",
  },
  {
    name: "The Ripley 204",
    area: "204 m²",
    facade: "Facade 2",
    price: "from $698,000",
    spec: "4 bed · 2 bath · 2 living · 2 car",
    image: wix("4dd231_d1b2c98af5bb499a9b60b69a39e7eb2c~mv2.jpg", 800, 600),
    alt: "Facade of the Ripley 204, a two-storey QLAND home",
  },
  {
    name: "The Narangba 232",
    area: "232 m²",
    facade: "Facade 3",
    price: "from $754,000",
    spec: "4 bed · 2.5 bath · 3 living · 2 car",
    image: wix("4dd231_6678c3f97430468e85ff44063df01035~mv2.jpg", 800, 600),
    alt: "Facade of the Narangba 232, a single-storey QLAND home",
  },
  {
    name: "The Yarrabilba 186",
    area: "186 m²",
    price: "from $645,000",
    spec: "4 bed · 2 bath · 1 living · 2 car",
    image: wix("4dd231_35f5f63d7b9748428bba0c02bd606ea4~mv2.jpg", 800, 600),
    alt: "Facade of the Yarrabilba 186",
  },
  {
    name: "The Springfield 218",
    area: "218 m²",
    price: "from $726,000",
    spec: "4 bed · 2 bath · 2 living · 2 car",
    image: wix("4dd231_4380f7bd08c1486baa30c74839590cb6~mv2.jpg", 800, 600),
    alt: "Kitchen and living area in a completed Springfield 218",
  },
  {
    name: "The Caboolture 152",
    area: "152 m²",
    price: "from $566,000",
    spec: "3 bed · 2 bath · 1 living · 2 car",
    image: wix("4dd231_d1ed181bda594a96a2e0591b3fd49ea7~mv2.jpg", 800, 600),
    alt: "Kitchen in a completed Caboolture 152",
  },
];

export const trustBar = [
  {
    figure: "4.9",
    suffix: " / 5",
    label: "Google rating, 37 reviews",
  },
  { figure: "120+", label: "Homes delivered & clients helped" },
  { figure: "8 yrs", label: "In SE QLD property" },
  { figure: "4512789", label: "QLD real estate licence · REIQ member" },
];

export const paths = [
  {
    number: "01",
    title: "I want to buy",
    blurb: "We find, assess and negotiate the property for you.",
    cta: "Buyer's Agency →",
    href: routes.buyersAgency,
  },
  {
    number: "02",
    title: "I want to build",
    blurb: "Fixed-price house and land packages, turnkey.",
    cta: "House & Land →",
    href: routes.houseAndLand,
  },
  {
    number: "03",
    title: "I own an investment",
    blurb: "Management that protects your asset and your return.",
    cta: "Property Management →",
    href: routes.propertyManagement,
  },
  {
    number: "04",
    title: "I want to sell",
    blurb: "Bring your property to market properly.",
    cta: "Property Sales →",
    href: routes.propertySales,
  },
];

export const pillars = [
  {
    title: "Fixed price.",
    body: "Your contract price is locked in at signing. What you sign is what you pay, every day of the build.",
  },
  {
    title: "Fully customisable.",
    body: "Choose one of our designs, adjust it, or start from scratch with our in-house designer to suit your block and how you live.",
  },
  {
    title: "Full turnkey.",
    body: "Move-in ready. Blinds, landscaping, fencing, the mailbox — it's all in there, with no extra spend after handover.",
  },
  {
    title: "Luxury as standard.",
    body: "High ceilings, ducted air conditioning, porcelain tiles, full render, floor-to-ceiling bathroom tiling and wall-hung vanities — included, not upgraded.",
  },
];

export const processTeaser = [
  {
    n: "1",
    title: "Financial evaluation",
    body: "Know your borrowing capacity, including low-deposit options.",
  },
  {
    n: "2",
    title: "Secure finance approval",
    body: "We hold the property while your approval is arranged.",
  },
  {
    n: "3",
    title: "Choose land and floorplan",
    body: "Layout, landscaping, colour scheme. This is where it becomes yours.",
  },
  {
    n: "4",
    title: "Construction",
    body: "Approvals handled, builders on site, and you watch it go up.",
  },
  {
    n: "5",
    title: "Move in",
    body: "Handover. Keys. A brand new home with nothing left to buy.",
  },
];

export const processFull = [
  {
    n: "01",
    title: "Financial evaluation — know your borrowing capacity.",
    body: "We start with pre-qualification. Our team works out what you can borrow, including low-deposit options, then puts a shortlist of locations and home designs in front of you that actually fit your budget.",
  },
  {
    n: "02",
    title: "Secure finance approval.",
    body: "Once you've chosen your package, we hold the property while our finance manager arranges your approval — including the First Home Owner Grant or Great Start Grant if you're eligible.",
  },
  {
    n: "03",
    title: "Choose your land and floorplan.",
    body: "Pick the block that suits you and lock in the details: layout, landscaping, colour scheme. This is where the house becomes yours.",
  },
  {
    n: "04",
    title: "Construction.",
    body: "Council approvals are handled, our builders start, and you watch it go up. This is the part where you stop paying someone else's mortgage.",
  },
  {
    n: "05",
    title: "Move in.",
    body: "Handover. Keys. A brand new home with nothing left to buy.",
  },
];

export const inclusions = [
  {
    title: "Kitchen & living",
    body: "Stone benchtops, 900mm appliances, walk-in pantry, soft-close joinery, porcelain tiles, 2.7m ceilings, ducted air conditioning.",
  },
  {
    title: "Bathrooms",
    body: "Floor-to-ceiling tiling, wall-hung vanities, frameless shower screens, back-to-wall baths, matte black or brushed tapware.",
  },
  {
    title: "Exterior",
    body: "Full render, Colorbond roof, exposed aggregate driveway, fencing, letterbox, clothesline, front and rear landscaping.",
  },
  {
    title: "Turnkey finish",
    body: "Blinds throughout, flooring, security screens, LED lighting, NBN provisioning, site clean and handover pack.",
  },
  {
    title: "Warranty",
    body: "QBCC home warranty insurance, 12-month defect period and a 6-year structural guarantee.",
  },
  {
    title: "Not included",
    body: "Site costs above the standard allowance, client variations, and delays caused by developer land registration.",
  },
];

export const estates = [
  { name: "Ripley Valley", detail: "Ipswich · 12 blocks, 350–512 m²" },
  { name: "Springfield Lakes", detail: "Ipswich · 6 blocks, 400–448 m²" },
  { name: "Yarrabilba", detail: "Logan · 9 blocks, 320–450 m²" },
  { name: "Narangba Heights", detail: "Moreton Bay · 4 blocks, 448–600 m²" },
  { name: "Caboolture South", detail: "Moreton Bay · 7 blocks, 300–405 m²" },
];

export const buyerBenefits = [
  {
    title: "Access to more properties.",
    body: "Off-market listings and stock that never reaches the portals.",
  },
  {
    title: "A search built around you.",
    body: "We filter to your brief and budget so you're not spending weekends at open homes that were never right.",
  },
  {
    title: "Local market knowledge.",
    body: "Suburb-level insight into what's actually worth paying, and what isn't.",
  },
  {
    title: "Skilled negotiation.",
    body: "We negotiate for a living. That's usually the difference between the asking price and the right price.",
  },
  {
    title: "A dedicated advocate.",
    body: "Your goals, your interests, no divided loyalty.",
  },
  {
    title: "Lower risk.",
    body: "Due diligence, inspections and contract review handled properly before you commit.",
  },
  {
    title: "Time and stress back.",
    body: "We carry the paperwork and the follow-up.",
  },
  {
    title: "A professional network.",
    body: "Brokers, building and pest inspectors, conveyancers — vetted, and available to you.",
  },
];

export const caseStudies = [
  {
    tag: "Keperra · First home buyer",
    price: "$742,000",
    body: "Brief: 3-bed on a flat block within 12km, under $780k. Bought off-market before the first open home; bank valuation came back at $765,000 in March 2026.",
  },
  {
    tag: "Redbank Plains · Investor",
    price: "$518,000",
    body: "Asking $535,000, three days on market. Leased at $560 per week within a fortnight of settlement — a 5.6% gross yield as at May 2026.",
  },
  {
    tag: "Wynnum · Upgrader",
    price: "$1,180,000",
    body: "Two failed campaigns before ours. Building and pest found $28,000 of subfloor work; we renegotiated the price down by $35,000 and settled in June 2026.",
  },
];

export const buyerFees = [
  {
    figure: "$3,300",
    title: "Engagement fee",
    body: "Paid once at the strategy session. Covers your brief, borrowing review, suburb research and the start of the search.",
  },
  {
    figure: "1.9%",
    title: "Success fee",
    body: "Of the purchase price, payable on settlement. Nothing more if we don't buy.",
  },
  {
    figure: "$16,500",
    title: "Fixed-fee option",
    body: "Flat, all-in engagement for briefs under $850,000. Includes everything below.",
  },
  {
    title: "Included in every engagement",
    body: "Unlimited inspections, appraisal on every shortlisted property, building and pest coordination, contract review referral, negotiation or auction bidding, and support to settlement.",
  },
];

export const buyerSteps = [
  "Strategy session",
  "Search and shortlist",
  "Inspect and appraise",
  "Negotiate and settle",
];

export const managementFees = [
  {
    figure: "6.6%",
    title: "Management fee",
    body: "Of rent collected, incl. GST. 3.6% for the first year if you're switching agents.",
  },
  {
    figure: "1 week",
    title: "Letting fee",
    body: "Charged once per new tenancy. Includes photography, listing and open homes.",
  },
  {
    figure: "$0",
    title: "Admin, statements, inspections",
    body: "No monthly admin fee, no statement fee, no charge for routine inspections or tribunal attendance.",
  },
  {
    figure: "2 hrs",
    title: "Response time",
    body: "Our commitment on any owner or tenant contact during business hours.",
  },
];

export const managementIncludes = [
  {
    title: "Tenant screening",
    body: "Identity, employment and income checks, rental ledger history and national tenancy database search on every applicant before you see the shortlist.",
  },
  {
    title: "Inspections",
    body: "Entry and exit condition reports with photos, plus routine inspections every six months and a written report to you within 48 hours.",
  },
  {
    title: "Arrears",
    body: "Rent monitored daily. Contact on day 1, formal notice on day 8, and we keep you informed at every step.",
  },
  {
    title: "Maintenance",
    body: "Licensed trades, quotes on anything above your set limit, and emergency repairs handled without waiting on approval.",
  },
  {
    title: "Reporting",
    body: "Monthly statements, mid-year rent reviews and an EOFY summary formatted for your accountant.",
  },
  {
    title: "Representation",
    body: "QCAT preparation and attendance at no extra cost, and liaison with your landlord insurer on any claim.",
  },
];

export const salesApproach = [
  {
    title: "A price built on evidence",
    body: "Comparable sales, current competing stock and what our own buyer clients are willing to pay this month. No inflated appraisal to win the listing.",
  },
  {
    title: "Presentation first",
    body: "Styling advice, trades where they'll pay for themselves, professional photography, floorplan and video — all in the marketing schedule.",
  },
  {
    title: "A qualified buyer list",
    body: "Your property goes to our active buyer's agency clients before it hits the portals. Some sell there.",
  },
  {
    title: "Weekly reporting",
    body: "Enquiry numbers, inspection numbers, feedback and a recommendation. Every week, in writing.",
  },
];

export const salesFees = [
  {
    figure: "2.2%",
    title: "Commission",
    body: "Of the sale price, incl. GST, payable on settlement. 1.9% if we also manage the property.",
  },
  {
    figure: "$3,500",
    title: "Marketing package",
    body: "Photography, floorplan, video, signboard, portal listings and social. Deferred to settlement.",
  },
  {
    figure: "33 days",
    title: "Average days on market",
    body: "Across QLAND listings in the 12 months to June 2026.",
  },
];

export const recentSales = [
  {
    price: "$1,025,000",
    detail: "Rochedale · 4 bed · sold in 21 days, June 2026",
    image: wix("4dd231_6991835e16f34a8687d8142bf9371319~mv2.jpg", 800, 600),
    alt: "Pool outlook from a recently sold home in Rochedale",
  },
  {
    price: "$798,000",
    detail: "Springwood · 3 bed · sold in 18 days, April 2026",
    image: wix("4dd231_b72663aab8bb477bb436946caff82e15~mv2.jpg", 800, 600),
    alt: "Dining room of a recently sold home in Springwood",
  },
  {
    price: "$654,000",
    detail: "Ripley · 4 bed · sold in 29 days, March 2026",
    image: wix("4dd231_55d355c2f1bb4a5a9805fa825be995e5~mv2.jpg", 800, 600),
    alt: "Pool and outdoor area of a recently sold home in Ripley",
  },
];

export const comparisonRows = [
  {
    label: "Price certainty",
    qland: "Fixed at signing",
    builder: "Base price, then variations",
    established: "Set at auction or negotiation",
  },
  {
    label: "Move-in ready",
    qland: "Yes — blinds, landscaping, fencing included",
    builder: "Usually $25k–$45k of post-handover spend",
    established: "Varies; renovation often needed",
  },
  {
    label: "Customisation",
    qland: "Full — in-house designer",
    builder: "Limited to preset options",
    established: "Whatever you buy",
  },
  {
    label: "Time to move in",
    qland: "10–14 months",
    builder: "12–20 months",
    established: "6–8 weeks",
  },
  {
    label: "Maintenance in year one",
    qland: "Under warranty",
    builder: "Under warranty",
    established: "At your cost",
  },
  {
    label: "Who represents you",
    qland: "QLAND, on your side",
    builder: "The builder's sales consultant",
    established: "Nobody, unless you appoint a buyer's agent",
  },
];

export const team = [
  {
    slot: "team-nabil",
    name: "Nabil Qureshi",
    role: "Principal & buyer's agent",
    body: "Runs every strategy session and every negotiation.",
    placeholder: "Nabil headshot",
  },
  {
    slot: "team-karen",
    name: "Karen",
    role: "Property management & administration",
    body: "Tenancies, inspections, statements and the answers to most owner questions.",
    placeholder: "Karen headshot",
  },
  {
    slot: "team-3",
    name: "Name to confirm",
    role: "Building & design",
    body: "Floorplans, selections and site coordination through to handover.",
    placeholder: "Third team member headshot",
  },
];

export const whatWeDo = [
  {
    title: "Buyer's agency",
    body: "How we find and secure the right property for you.",
  },
  { title: "Building", body: "Your build options and design pathways." },
  {
    title: "Property management",
    body: "How we look after your investment.",
  },
  {
    title: "Owner-occupier",
    body: "Guidance on buying to live in, upgrading or building.",
  },
];

export const credentials = [
  { label: "Licence", value: "QLD real estate licence 4512789" },
  { label: "ABN", value: "54 731 902 118" },
  { label: "Memberships", value: "REIQ · PIPA" },
  { label: "Insurances", value: "Professional indemnity & public liability" },
];

export const aboutGallery = [
  {
    image: wix("4dd231_f64d596fdb444fa8a270fe6607c3cf48~mv2.jpg", 700, 700),
    alt: "Bedroom in a completed QLAND home",
  },
  {
    image: wix("4dd231_cd0f8084d0e846ae8f2b6010dac20768~mv2.jpg", 700, 700),
    alt: "Bathroom vanity in a completed QLAND home",
  },
  {
    image: wix("4dd231_b3e63a4e77c84f79a5e5a4f496a0c079~mv2.jpg", 700, 700),
    alt: "Pool and tropical planting at a completed QLAND home",
  },
  {
    image: wix("4dd231_deecc87f356443fc92ea92332ea1775c~mv2.jpg", 700, 700),
    alt: "Outdoor lounge setting at a completed QLAND home",
  },
];

export const reviews = [
  {
    body: "Moved in at Christmas 2024 and the whole thing was smooth — design concept, material selection, build stages, handover. The quality exceeded what we expected, and the plunge pool was fitted inside budget. The finished home feels worth more than we paid.",
    attribution: "Raymond Rivera · House & land build · Google, Jan 2025",
  },
  {
    body: "A smooth, stress-free purchase. The team was responsive and professional the whole way through and found us the right property.",
    attribution: "Lexi Micski · Buyer's agency · Google, Nov 2024",
  },
  {
    body: "Found QLAND by chance and they turned out to be thorough and genuinely professional. I'd recommend them whatever your budget is.",
    attribution: "Paul Jenkins · Buyer's agency · Google, Aug 2025",
  },
  {
    body: "Seamless from start to finish, and Nabil is available whenever a question comes up.",
    attribution: "Ali Khan · Google, Mar 2025",
  },
  {
    body: "Professional, prompt and reassuring. They secured quality tenants, kept the property well looked after, and problems get solved quickly.",
    attribution: "Beenush Khokhar · Property management · Google, Sep 2025",
  },
  {
    body: "Nabil is diligent and straight with you. That matters more than anything else in this business.",
    attribution: "Shahida Khan · Google, Feb 2026",
  },
];

export const reviewsGallery = [
  {
    image: wix("4dd231_63cebd26159d4badb96ed2ee40fc8f0c~mv2.jpg", 800, 540),
    alt: "QLAND clients in their new home",
  },
  {
    image: wix("4dd231_9a578841d4124e2e8fe12d96824b749f~mv2.jpg", 800, 540),
    alt: "QLAND clients outside their completed home",
  },
  {
    image: wix("4dd231_eb19aeae537f4eb3b835d5b7e359febd~mv2.jpg", 800, 540),
    alt: "Clients at a sold property with their QLAND agent",
  },
];

export const homeTestimonials = [
  {
    quote:
      "Smooth from design concept through material selection and build stages to handover. The quality exceeded what we expected — and the plunge pool still came in inside budget.",
    attribution:
      "Raymond Rivera · House & land build · Google, Jan 2025 · ★★★★★",
  },
  {
    quote:
      "Professional, prompt and reassuring. They secured quality tenants quickly and anything that comes up gets solved without me chasing anyone.",
    attribution:
      "Beenush Khokhar · Property management · Google, Sep 2025 · ★★★★★",
  },
];

export const faqs = [
  {
    q: "What does a buyer's agent cost and who pays?",
    a: "You pay us — that is the point. We are not paid by the vendor, so our advice is not shaped by a sale price. QLAND charges a $3,300 engagement fee to start the search and a success fee of 1.9% of the purchase price on settlement, or a flat $16,500 for briefs under $850,000. All amounts include GST.",
  },
  {
    q: "What is included in a turnkey QLAND build?",
    a: "Everything you need to move in: blinds, floor coverings, front and rear landscaping, fencing, driveway, clothesline, letterbox, ducted air conditioning, 2.7m ceilings, porcelain tiles, full render and floor-to-ceiling bathroom tiling. There is no extra spend after handover. Site costs above the standard allowance and client variations sit outside the contract, and we set those out in writing before you sign.",
  },
  {
    q: "How much deposit do I need?",
    a: "Most of our first home buyers start with 5% plus costs, and some qualify for low-deposit or guarantor structures below that. We work out your real position in the first strategy call, before you look at a single property.",
  },
  {
    q: "Am I eligible for the First Home Owner Grant?",
    a: "Possibly — eligibility depends on the contract date, the property value and whether you have owned before, and the rules change. Check the current criteria at qro.qld.gov.au and we will help you apply if you qualify.",
  },
  {
    q: "How long does a build take?",
    a: "Typically 10 to 14 months from contract signing to handover: six to ten weeks for council and construction approvals, then eight to eleven months on site. Land registration timing in a new estate can add to that, and we tell you where your block sits before you commit.",
  },
  {
    q: "Which suburbs do you cover?",
    a: "Greater Brisbane, Logan, Ipswich, Moreton Bay and the northern Gold Coast corridor. Our current house and land stock is in Ripley, Springfield Lakes, Yarrabilba, Narangba and Caboolture South.",
  },
  {
    q: "Can I use my own broker?",
    a: "Yes. We work with your broker or your bank. QLAND does not hold an Australian Credit Licence and does not give credit advice; our finance manager coordinates with a licensed third-party broker.",
  },
  {
    q: "What happens if construction costs rise mid-build?",
    a: "Nothing changes for you. Your contract price is fixed at signing, and cost movement in materials or labour after that is ours to carry, not yours.",
  },
];
