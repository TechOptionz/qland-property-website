import Image from "next/image";
import type { Metadata } from "next";

import PageHero from "@/components/page-hero";
import QualifyForm from "@/components/forms/qualify-form";
import { estates, homeDesigns, images, inclusions, processFull } from "@/lib/content";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "House and Land Packages Brisbane | QLAND Property",
  description:
    "Fixed-price, move-in-ready house and land packages across South East Queensland. Luxury inclusions as standard. See if you qualify.",
  alternates: { canonical: "/house-and-land" },
};

export default function HouseAndLandPage() {
  return (
    <main>
      <PageHero
        eyebrow="House & Land"
        title="House and land packages, fixed price and move-in ready"
        sub="We've built long-term relationships with land developers across South East Queensland, which gives us access to blocks in owner-occupier estates that don't reach the open market."
        image={images.heroHouseAndLand}
        alt="Covered alfresco and landscaped yard of a completed QLAND home"
        minHeight="min(72vh,660px)"
        titleMaxWidth="22ch"
        subMaxWidth="62ch"
      >
        <a href="#qualify" className="btn btn-clay">
          See if you qualify
        </a>
      </PageHero>

      {/* --- intro ---------------------------------------------------------- */}
      <section className="section" data-reveal>
        <p
          className="display"
          style={{
            maxWidth: 960,
            margin: "0 auto",
            fontSize: "clamp(22px,2.6vw,36px)",
            lineHeight: 1.38,
            letterSpacing: "-.015em",
          }}
        >
          Tell us where you want to live and one of our team will source and
          negotiate the right block, then work with you to match it to a
          floorplan that fits your life. Same fixed pricing and same luxury
          inclusions as our build-only option — complete peace of mind from
          contract to keys.
        </p>
      </section>

      {/* --- inclusions ----------------------------------------------------- */}
      <section className="section-dark section">
        <div className="shell">
          <h2 className="display h2">What&rsquo;s included, as standard</h2>
          <div
            className="hairline-grid-dark"
            style={{
              marginTop: "clamp(32px,3.6vw,52px)",
              gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
            }}
          >
            {inclusions.map((item) => (
              <div key={item.title} className="hairline-cell-dark">
                <h3 style={{ fontSize: 16.5, fontWeight: 600, color: "var(--brass)" }}>
                  {item.title}
                </h3>
                <p className="body-copy-dark">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- home designs --------------------------------------------------- */}
      <section className="section" data-reveal>
        <div className="shell">
          <h2 className="display h2">Home designs</h2>
          <div
            className="grid-cards"
            style={{
              marginTop: "clamp(30px,3.4vw,48px)",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            }}
          >
            {homeDesigns.map((design) => (
              <article key={design.name} className="card">
                <div className="card-media">
                  <Image
                    src={design.image}
                    alt={design.alt}
                    fill
                    sizes="(max-width: 920px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: 26 }}>
                  <h3 className="display" style={{ fontSize: 24 }}>
                    {design.name}
                  </h3>
                  <p
                    style={{
                      margin: "8px 0 14px",
                      fontSize: 14,
                      color: "var(--muted-soft)",
                    }}
                  >
                    {design.area} · {design.price}
                  </p>
                  <p style={{ margin: 0, fontSize: 14.5, color: "var(--muted)" }}>
                    {design.spec}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="note" style={{ marginTop: 26 }}>
            Indicative from-prices are house and land combined, current at August
            2026, and vary by estate and site conditions. Ask for a written quote
            on your chosen block.
          </p>
        </div>
      </section>

      {/* --- estates -------------------------------------------------------- */}
      <section
        data-reveal
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--rule-faint)",
          padding: "var(--pad-y) var(--gutter)",
        }}
      >
        <div className="shell">
          <h2 className="display h2">Where we have land right now</h2>
          <div
            style={{
              marginTop: "clamp(28px,3.2vw,44px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
              gap: "clamp(18px,2vw,26px)",
            }}
          >
            {estates.map((estate, i) => (
              <div
                key={estate.name}
                className={`rule-top${i === 0 ? " rule-top-first" : ""}`}
                style={{ paddingTop: 18 }}
              >
                <h3 style={{ fontSize: 16.5, fontWeight: 600 }}>{estate.name}</h3>
                <p
                  style={{
                    margin: "6px 0 0",
                    fontSize: 14.5,
                    color: "var(--muted)",
                  }}
                >
                  {estate.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- five-step process ------------------------------------------------ */}
      <section className="section" data-reveal>
        <div className="shell">
          <h2 className="display h2">The five-step process</h2>

          <ol
            style={{
              margin: "clamp(32px,3.6vw,52px) 0 0",
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {processFull.map((step, i) => (
              <li
                key={step.n}
                className="step-row"
                style={{
                  padding: "clamp(24px,3vw,38px) 0",
                  borderTop: "1px solid var(--rule-mid)",
                  borderBottom:
                    i === processFull.length - 1
                      ? "1px solid var(--rule-mid)"
                      : undefined,
                }}
              >
                <span
                  className="display"
                  style={{
                    fontSize: "clamp(38px,4vw,56px)",
                    lineHeight: 0.9,
                    color: "var(--clay)",
                  }}
                >
                  {step.n}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: "clamp(19px,1.8vw,23px)",
                      fontWeight: 600,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      margin: "12px 0 0",
                      maxWidth: "70ch",
                      fontSize: 16,
                      lineHeight: 1.72,
                      color: "var(--muted)",
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="note" style={{ maxWidth: "80ch" }}>
            Grant eligibility and amounts are set by the Queensland Government
            and change. Check your position at{" "}
            <a
              href="https://qro.qld.gov.au/property-concessions-grants/first-home-grant/"
              target="_blank"
              rel="noopener"
            >
              qro.qld.gov.au
            </a>
            . QLAND does not hold an Australian Credit Licence and does not give
            credit advice; our finance manager coordinates with a licensed
            third-party broker.
          </p>
        </div>
      </section>

      {/* --- qualification form ----------------------------------------------- */}
      <section id="qualify" className="section-dark section">
        <div className="shell split-form">
          <div>
            <h2 className="display h2">See if you qualify</h2>
            <p
              style={{
                margin: "20px 0 0",
                fontSize: 16.5,
                lineHeight: 1.72,
                color: "rgba(246,241,232,.72)",
                maxWidth: "44ch",
              }}
            >
              Two minutes now saves weekends of open homes. We&rsquo;ll come back
              with your borrowing range and the packages that fit it.
            </p>
            <p
              style={{
                margin: "26px 0 0",
                fontSize: 14.5,
                color: "rgba(246,241,232,.6)",
              }}
            >
              Prefer to talk? Call{" "}
              <a href={contact.phoneHref} style={{ color: "var(--brass)" }}>
                {contact.phone}
              </a>
            </p>
          </div>

          <QualifyForm />
        </div>
      </section>
    </main>
  );
}
