import type { Metadata } from "next";

import AppraisalForm from "@/components/forms/appraisal-form";
import PageHero from "@/components/page-hero";
import { images, managementFees, managementIncludes } from "@/lib/content";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Property Management Brisbane | QLAND Property",
  description:
    "Responsive property management for Brisbane investors. Quality tenants, proactive maintenance and clear reporting. Save 3% on fees.",
  alternates: { canonical: "/property-management" },
};

export default function PropertyManagementPage() {
  return (
    <main>
      <PageHero
        eyebrow="Property Management"
        title="Property management that actually manages"
        sub="Quality tenants, fast responses, and an owner who never has to chase us."
        image={images.heroPropertyManagement}
        alt="Living area of a QLAND-managed investment property"
        minHeight="min(66vh,580px)"
        subMaxWidth="52ch"
      >
        <a href="#appraisal" className="btn btn-clay">
          Get a free rental appraisal
        </a>
        <span
          style={{
            color: "var(--brass)",
            fontSize: 15,
            fontWeight: 600,
            border: "1px solid rgba(249,180,85,.4)",
            padding: "16px 22px",
          }}
        >
          Switch to QLAND and save 3% on management fees
        </span>
      </PageHero>

      {/* --- fees ------------------------------------------------------------- */}
      <section className="section" data-reveal>
        <div className="shell">
          <h2 className="display h2">Fair prices, and here they are</h2>
          <div
            style={{
              marginTop: "clamp(30px,3.4vw,48px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
              gap: "clamp(22px,2.4vw,34px)",
            }}
          >
            {managementFees.map((fee, i) => (
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

      {/* --- what's included --------------------------------------------------- */}
      <section
        className="section-paper"
        data-reveal
        style={{ padding: "var(--pad-y) var(--gutter)" }}
      >
        <div className="shell">
          <h2 className="display h2">What&rsquo;s included</h2>
          <div
            className="grid-auto"
            style={{
              marginTop: "clamp(30px,3.4vw,48px)",
              gridTemplateColumns: "repeat(auto-fit,minmax(255px,1fr))",
            }}
          >
            {managementIncludes.map((item) => (
              <div key={item.title}>
                <h3 className="h3">{item.title}</h3>
                <p className="body-copy">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- appraisal form ----------------------------------------------------- */}
      <section id="appraisal" className="section-dark section">
        <div className="shell split-form">
          <div>
            <h2 className="display h2">Request your appraisal</h2>
            <p
              style={{
                margin: "20px 0 0",
                fontSize: 16.5,
                lineHeight: 1.72,
                color: "rgba(246,241,232,.72)",
                maxWidth: "42ch",
              }}
            >
              We&rsquo;ll tell you what your property should be renting for, and
              what we&rsquo;d do differently.
            </p>

            <div
              style={{
                marginTop: 34,
                display: "flex",
                flexDirection: "column",
                gap: 18,
                fontSize: 15.5,
                lineHeight: 1.6,
              }}
            >
              {contact.people.map((person) => (
                <div key={person.email}>
                  <p style={{ margin: 0, fontWeight: 600 }}>{person.name}</p>
                  <p
                    style={{
                      margin: "4px 0 0",
                      color: "rgba(246,241,232,.66)",
                    }}
                  >
                    <a href={person.phoneHref} style={{ color: "var(--brass)" }}>
                      {person.phone}
                    </a>{" "}
                    ·{" "}
                    <a
                      href={`mailto:${person.email}`}
                      style={{ color: "var(--brass)" }}
                    >
                      {person.email}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <AppraisalForm />
        </div>
      </section>
    </main>
  );
}
