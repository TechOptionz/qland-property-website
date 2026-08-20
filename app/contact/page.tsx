import type { Metadata } from "next";

import ContactForm from "@/components/forms/contact-form";
import { CALENDLY_URL, contact, social } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact QLAND Property | Eight Mile Plains, Brisbane",
  description:
    "Get in touch with QLAND Property. Call 0423 584 690 or book a free 30-minute strategy call.",
  alternates: { canonical: "/contact" },
};

const asideHeading: React.CSSProperties = {
  fontSize: 12,
  fontFamily: "var(--font-mono), monospace",
  fontWeight: 500,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  color: "var(--brass)",
};

const asideBlock: React.CSSProperties = {
  marginTop: 26,
  paddingTop: 22,
  borderTop: "1px solid rgba(246,241,232,.18)",
};

export default function ContactPage() {
  const { address } = contact;
  const bbox = `${address.lng - 0.01}%2C${address.lat - 0.01}%2C${address.lng + 0.01}%2C${address.lat + 0.01}`;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${address.lat}%2C${address.lng}`;

  return (
    <main>
      <section
        style={{
          padding:
            "clamp(72px,9vw,130px) var(--gutter) clamp(40px,5vw,70px)",
        }}
      >
        <div className="shell">
          <p className="eyebrow">Contact</p>
          <h1 className="display h1">Contact us</h1>
        </div>
      </section>

      <section className="section-flush-top">
        <div className="shell split-contact">
          <div>
            <ContactForm />

            <div
              style={{
                marginTop: "clamp(40px,4.4vw,64px)",
                paddingTop: "clamp(30px,3.4vw,42px)",
                borderTop: "1px solid var(--rule-strong)",
              }}
            >
              <h2
                className="display"
                style={{ fontSize: "clamp(24px,2.8vw,34px)", lineHeight: 1.1 }}
              >
                Prefer to talk?
              </h2>
              <p
                style={{
                  margin: "14px 0 22px",
                  fontSize: 16.5,
                  lineHeight: 1.7,
                  color: "var(--muted)",
                }}
              >
                Book a 30-minute strategy call at a time that suits you.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener"
                className="btn btn-ink"
              >
                Book a 30-minute call
              </a>
            </div>
          </div>

          <aside
            className="section-dark"
            style={{ padding: "clamp(30px,3.4vw,44px)" }}
          >
            <h2 style={asideHeading}>Office</h2>
            <p
              style={{
                margin: "14px 0 0",
                fontSize: 16.5,
                lineHeight: 1.7,
                color: "rgba(246,241,232,.82)",
              }}
            >
              {address.building}
              <br />
              {address.street}
              <br />
              {address.locality} {address.region} {address.postcode}
            </p>

            <div
              style={{
                ...asideBlock,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                fontSize: 16,
              }}
            >
              <a href={contact.phoneHref} style={{ color: "var(--brass)" }}>
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                style={{ color: "var(--brass)" }}
              >
                {contact.email}
              </a>
              {contact.people.map((person) => (
                <a
                  key={person.email}
                  href={`mailto:${person.email}`}
                  style={{ color: "var(--brass)" }}
                >
                  {person.email}
                </a>
              ))}
            </div>

            <div style={asideBlock}>
              <h3 style={asideHeading}>Office hours</h3>
              <p
                style={{
                  margin: "12px 0 0",
                  fontSize: 15.5,
                  lineHeight: 1.8,
                  color: "rgba(246,241,232,.8)",
                }}
              >
                {contact.hours.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < contact.hours.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>

            <div
              style={{
                marginTop: 26,
                position: "relative",
                aspectRatio: "4 / 3",
                border: "1px solid rgba(246,241,232,.18)",
              }}
            >
              <iframe
                title="QLAND Property office location map"
                loading="lazy"
                src={mapSrc}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                  filter: "grayscale(1) contrast(.92)",
                }}
              />
            </div>

            <div
              style={{
                ...asideBlock,
                display: "flex",
                flexWrap: "wrap",
                gap: 18,
                fontSize: 14,
              }}
            >
              {social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  style={{ color: "rgba(246,241,232,.78)" }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
