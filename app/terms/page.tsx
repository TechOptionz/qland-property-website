import type { Metadata } from "next";

import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Terms of Use | QLAND Property",
  description:
    "The terms that apply to your use of the QLAND Property website.",
  alternates: { canonical: "/terms" },
  robots: { index: false },
};

/**
 * The design canvas links here but supplies no copy. This is a structural
 * placeholder so the footer is not a dead link.
 * TODO(client): replace with terms signed off by QLAND's legal adviser.
 */
export default function TermsPage() {
  return (
    <main>
      <section className="page-intro">
        <div className="shell">
          <p className="eyebrow">Legal</p>
          <h1 className="display h1">Website Terms of Use</h1>
        </div>
      </section>

      <section className="section-flush-top">
        <div className="shell-narrow">
          <div
            style={{
              border: "1px solid var(--rule-strong)",
              background: "var(--paper)",
              padding: "clamp(24px,3vw,34px)",
            }}
          >
            <p className="eyebrow eyebrow-tight">Awaiting content</p>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: 16.5,
                lineHeight: 1.78,
                color: "var(--muted)",
              }}
            >
              This page is a placeholder. QLAND Property&rsquo;s website terms
              have not yet been supplied and must be reviewed before this site
              goes live.
            </p>
          </div>

          <p
            style={{
              margin: "clamp(30px,3.4vw,44px) 0 0",
              fontSize: 16.5,
              lineHeight: 1.78,
              color: "var(--muted)",
            }}
          >
            The terms should cover, at minimum: acceptable use, intellectual
            property in the site content and imagery, the status of indicative
            pricing and past-results figures shown on the site (they are not
            offers, quotes or forecasts), third-party links, limitation of
            liability, and the governing law of Queensland.
          </p>

          <p
            style={{
              margin: "18px 0 0",
              fontSize: 16.5,
              lineHeight: 1.78,
              color: "var(--muted)",
            }}
          >
            Questions in the meantime:{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a> or{" "}
            <a href={contact.phoneHref}>{contact.phone}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
