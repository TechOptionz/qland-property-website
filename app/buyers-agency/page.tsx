import Image from "next/image";
import type { Metadata } from "next";

import CtaBand from "@/components/cta-band";
import PageHero from "@/components/page-hero";
import {
  buyerBenefits,
  buyerFees,
  buyerSteps,
  caseStudies,
  images,
} from "@/lib/content";
import { CALENDLY_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Buyer's Agent Brisbane | QLAND Property",
  description:
    "An independent buyer's agent working for you, not the vendor. Off-market access, local insight and skilled negotiation across Brisbane.",
  alternates: { canonical: "/buyers-agency" },
};

export default function BuyersAgencyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Buyer's Agency"
        title="A buyer's agent works for you, not the seller"
        sub="Every other agent in the transaction is paid by the vendor. We're on your side of the table."
        image={images.heroBuyersAgency}
        alt="A QLAND agent with clients at a sold property"
        minHeight="min(70vh,620px)"
      >
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener"
          className="btn btn-clay"
        >
          Book a discovery call
        </a>
      </PageHero>

      {/* --- why use a buyer's agent ---------------------------------------- */}
      <section className="section" data-reveal>
        <div className="shell">
          <h2 className="display h2">Why use a buyer&rsquo;s agent</h2>
          <div
            className="grid-auto"
            style={{
              marginTop: "clamp(32px,3.6vw,52px)",
              gridTemplateColumns: "repeat(auto-fit,minmax(258px,1fr))",
            }}
          >
            {buyerBenefits.map((item) => (
              <div key={item.title}>
                <h3 className="h3">{item.title}</h3>
                <p className="body-copy">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- investing in SE QLD --------------------------------------------- */}
      <section className="section-paper">
        <div className="shell grid-split cols-2">
          <div
            data-reveal
            style={{ padding: "clamp(44px,6vw,96px) clamp(20px,4vw,72px)" }}
          >
            <h2
              className="display"
              style={{ fontSize: "clamp(28px,3.6vw,46px)", lineHeight: 1.08 }}
            >
              Investing in South East Queensland
            </h2>
            <p
              style={{
                margin: "22px 0 0",
                fontSize: 16.5,
                lineHeight: 1.75,
                color: "var(--muted)",
              }}
            >
              Brisbane&rsquo;s market has moved fast and it&rsquo;s still moving.
              We&rsquo;re not just here to find you a property — we&rsquo;re here
              to make sure the one you buy is the right one. We focus on suburbs
              where the fundamentals support growth rather than where the
              marketing budget is biggest, and we negotiate hard on entry price,
              because that&rsquo;s the part of the return you control.
            </p>
          </div>

          <div className="media" style={{ minHeight: "clamp(300px,36vw,520px)" }}>
            <Image
              src={images.openPlan}
              alt="Open-plan kitchen and living area in a Brisbane home"
              fill
              sizes="(max-width: 920px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* --- recent purchases ------------------------------------------------- */}
      <section className="section" data-reveal>
        <div className="shell">
          <h2 className="display h2">Recent purchases</h2>
          <div
            className="hairline-grid"
            style={{
              marginTop: "clamp(30px,3.4vw,48px)",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            }}
          >
            {caseStudies.map((item) => (
              <article key={item.tag} className="hairline-cell">
                <p className="eyebrow eyebrow-tight">{item.tag}</p>
                <h3
                  className="display"
                  style={{ margin: "14px 0 0", fontSize: 26 }}
                >
                  {item.price}
                </h3>
                <p
                  style={{
                    margin: "12px 0 0",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--muted)",
                  }}
                >
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <p className="note" style={{ maxWidth: "80ch" }}>
            Past results only. Property values and rents move, and nothing here
            is a forecast or a guarantee of future performance.
          </p>
        </div>
      </section>

      {/* --- fees ------------------------------------------------------------- */}
      <section className="section-dark section">
        <div className="shell">
          <h2 className="display h2">Our fees, in full</h2>
          <div
            className="hairline-grid-dark"
            style={{
              marginTop: "clamp(30px,3.4vw,48px)",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            }}
          >
            {buyerFees.map((fee) => (
              <div
                key={fee.title}
                className="hairline-cell-dark"
                style={{ padding: "clamp(26px,3vw,38px)" }}
              >
                {fee.figure && (
                  <p
                    className="display"
                    style={{ margin: 0, fontSize: 34, color: "var(--brass)" }}
                  >
                    {fee.figure}
                  </p>
                )}
                <h3
                  style={{
                    margin: fee.figure ? "12px 0 0" : 0,
                    fontSize: 16.5,
                    fontWeight: 600,
                    color: fee.figure ? undefined : "var(--brass)",
                  }}
                >
                  {fee.title}
                </h3>
                <p className="body-copy-dark" style={{ marginTop: fee.figure ? 10 : 12 }}>
                  {fee.body}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              margin: "22px 0 0",
              fontSize: 13,
              color: "rgba(246,241,232,.68)",
            }}
          >
            All amounts include GST. Fees current at August 2026.
          </p>
        </div>
      </section>

      {/* --- how it works ------------------------------------------------------ */}
      <section className="section" data-reveal>
        <div className="shell">
          <h2 className="display h2">How it works</h2>
          <div
            style={{
              marginTop: "clamp(30px,3.4vw,48px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
              gap: "clamp(22px,2.4vw,34px)",
            }}
          >
            {buyerSteps.map((step, i) => (
              <div
                key={step}
                className={`rule-top${i === 0 ? " rule-top-first" : ""}`}
              >
                <p
                  className="display"
                  style={{ margin: 0, fontSize: 32, color: "var(--clay)" }}
                >
                  {i + 1}
                </p>
                <h3 style={{ margin: "12px 0 0", fontSize: 16.5, fontWeight: 600 }}>
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand ruleTop heading="Book your strategy session">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener"
          className="btn btn-brass"
        >
          Find a time
        </a>
      </CtaBand>
    </main>
  );
}
