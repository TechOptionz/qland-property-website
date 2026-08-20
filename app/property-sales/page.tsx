import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import CtaBand from "@/components/cta-band";
import PageHero from "@/components/page-hero";
import { images, recentSales, salesApproach, salesFees } from "@/lib/content";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sell Your Property Brisbane | QLAND Property",
  description:
    "Sell with a team that buys for buyers every week. Evidence-based pricing, 2.2% commission and weekly written reporting.",
  alternates: { canonical: "/property-sales" },
};

export default function PropertySalesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Property Sales"
        title="We know what buyers pay, because we buy for them"
        sub="Selling with a team that spends every week on the buyer's side of the table. We know where the demand is and what it will actually pay."
        image={images.heroPropertySales}
        alt="Clients outside their home after settlement"
        minHeight="min(64vh,560px)"
      >
        <Link href={routes.contact} className="btn btn-clay">
          Request a sales appraisal
        </Link>
      </PageHero>

      {/* --- how we sell ------------------------------------------------------- */}
      <section className="section" data-reveal>
        <div className="shell">
          <h2 className="display h2">How we sell</h2>
          <div
            className="grid-auto"
            style={{
              marginTop: "clamp(30px,3.4vw,48px)",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            }}
          >
            {salesApproach.map((item) => (
              <div key={item.title}>
                <h3 className="h3">{item.title}</h3>
                <p className="body-copy">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- commission -------------------------------------------------------- */}
      <section
        className="section-paper"
        data-reveal
        style={{ padding: "var(--pad-y) var(--gutter)" }}
      >
        <div className="shell">
          <h2 className="display h2">Commission and marketing</h2>
          <div
            style={{
              marginTop: "clamp(30px,3.4vw,48px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: "clamp(22px,2.4vw,34px)",
            }}
          >
            {salesFees.map((fee, i) => (
              <div
                key={fee.title}
                className={`rule-top${i === 0 ? " rule-top-first" : ""}`}
              >
                <p className="stat">{fee.figure}</p>
                <h3 style={{ margin: "12px 0 6px", fontSize: 16.5, fontWeight: 600 }}>
                  {fee.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--muted)",
                  }}
                >
                  {fee.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- recent sales ------------------------------------------------------ */}
      <section className="section" data-reveal>
        <div className="shell">
          <h2 className="display h2">Recent sales</h2>
          <div
            className="grid-cards"
            style={{
              marginTop: "clamp(30px,3.4vw,48px)",
              gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
            }}
          >
            {recentSales.map((sale) => (
              <article key={sale.detail} className="card">
                <div className="card-media">
                  <Image
                    src={sale.image}
                    alt={sale.alt}
                    fill
                    sizes="(max-width: 920px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: 24 }}>
                  <h3 className="display" style={{ fontSize: 24 }}>
                    {sale.price}
                  </h3>
                  <p
                    style={{
                      margin: "8px 0 0",
                      fontSize: 14.5,
                      color: "var(--muted)",
                    }}
                  >
                    {sale.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="note">
            Past sales only. Not an indication of the price your property will
            achieve.
          </p>
        </div>
      </section>

      <CtaBand
        heading="What's your property worth?"
        body="A written appraisal with the comparable sales behind it, at no cost and no obligation."
      >
        <Link href={routes.contact} className="btn btn-brass">
          Request an appraisal
        </Link>
      </CtaBand>
    </main>
  );
}
