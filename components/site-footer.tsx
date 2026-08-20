import Image from "next/image";
import Link from "next/link";

import { contact, footerColumns, routes, social } from "@/lib/site";
import logo from "@/public/assets/qland-logo.png";

const columnHeading: React.CSSProperties = {
  fontSize: 12,
  fontFamily: "var(--font-mono), monospace",
  fontWeight: 500,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  color: "var(--brass)",
};

const columnBody: React.CSSProperties = {
  marginTop: 16,
  display: "flex",
  flexDirection: "column",
  gap: 11,
  fontSize: 15,
};

const footerLink: React.CSSProperties = { color: "rgba(246,241,232,.7)" };

export default function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--ink-deep)",
        color: "rgba(246,241,232,.7)",
        padding:
          "clamp(52px,6vw,88px) var(--gutter) clamp(28px,3vw,40px)",
      }}
    >
      <div className="shell">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
            gap: "clamp(28px,3.2vw,48px)",
          }}
        >
          <div>
            <Image
              src={logo}
              alt="QLAND Property"
              sizes="180px"
              style={{
                height: 30,
                width: "auto",
                filter: "brightness(0) invert(1)",
              }}
            />
            <p
              style={{
                margin: "20px 0 0",
                fontSize: 15,
                lineHeight: 1.7,
                maxWidth: "26ch",
              }}
            >
              Buyer-centric agency. A seamless home buying journey.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h2 style={columnHeading}>{column.heading}</h2>
              <div style={columnBody}>
                {column.links.map((link) => (
                  <Link key={link.href} href={link.href} style={footerLink}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h2 style={columnHeading}>Contact</h2>
            <div style={columnBody}>
              <p style={{ margin: 0, lineHeight: 1.65 }}>
                {contact.address.building}
                <br />
                {contact.address.street}
                <br />
                {contact.address.locality} {contact.address.region}{" "}
                {contact.address.postcode}
              </p>
              <a href={contact.phoneHref} style={footerLink}>
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} style={footerLink}>
                {contact.email}
              </a>
            </div>
          </div>

          <div>
            <h2 style={columnHeading}>Legal</h2>
            <div style={columnBody}>
              <Link href={routes.privacy} style={footerLink}>
                Privacy Policy
              </Link>
              <Link href={routes.terms} style={footerLink}>
                Website Terms of Use
              </Link>
              <p
                style={{
                  margin: 0,
                  lineHeight: 1.65,
                  fontSize: 14,
                  color: "rgba(246,241,232,.68)",
                }}
              >
                QLD real estate licence {contact.licence}
                <br />
                ABN {contact.abn}
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "clamp(38px,4vw,60px)",
            paddingTop: 22,
            borderTop: "1px solid rgba(246,241,232,.14)",
            display: "flex",
            flexWrap: "wrap",
            gap: 18,
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 13.5,
            color: "rgba(246,241,232,.68)",
          }}
        >
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} QLAND Property. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 18 }}>
            {social.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener"
                style={{ color: "rgba(246,241,232,.68)" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
