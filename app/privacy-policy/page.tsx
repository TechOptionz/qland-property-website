import type { Metadata } from "next";

import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | QLAND Property",
  description:
    "How QLAND Property collects, uses and protects the personal information you provide through this website.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false },
};

/**
 * The design canvas links here but supplies no copy. This is a structural
 * placeholder so the footer and form consent lines are not dead links.
 * TODO(client): replace with the policy signed off by QLAND's legal adviser.
 */
export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="page-intro">
        <div className="shell">
          <p className="eyebrow">Legal</p>
          <h1 className="display h1">Privacy Policy</h1>
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
              This page is a placeholder. QLAND Property&rsquo;s privacy policy
              has not yet been supplied and must be reviewed against the
              Australian Privacy Principles before this site goes live.
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
            The policy should cover, at minimum: what personal information is
            collected through the enquiry and appraisal forms, why it is
            collected, who it is disclosed to (including any CRM, email or
            broker referral partner), how it is stored and secured, how long it
            is retained, and how to request access, correction or a complaint.
          </p>

          <p
            style={{
              margin: "18px 0 0",
              fontSize: 16.5,
              lineHeight: 1.78,
              color: "var(--muted)",
            }}
          >
            Privacy enquiries in the meantime:{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a> or{" "}
            <a href={contact.phoneHref}>{contact.phone}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
