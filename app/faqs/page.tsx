import Link from "next/link";
import type { Metadata } from "next";

import FaqAccordion from "@/components/faq-accordion";
import { faqSchema } from "@/lib/seo";
import { contact, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs | QLAND Property, Brisbane",
  description:
    "What a buyer's agent costs, what a turnkey build includes, deposit and grant questions, build timeframes and the suburbs we cover.",
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="page-intro">
        <div className="shell">
          <p className="eyebrow">FAQs</p>
          <h1 className="display h1" style={{ maxWidth: "20ch" }}>
            Straight answers to the questions we get most
          </h1>
        </div>
      </section>

      <section className="section-flush-top" data-reveal>
        <FaqAccordion />

        <div
          className="shell-narrow"
          style={{
            borderTop: "1px solid var(--rule-strong)",
            paddingTop: "clamp(30px,3.4vw,44px)",
            marginTop: "clamp(30px,3.4vw,44px)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 16.5,
              lineHeight: 1.7,
              color: "var(--muted)",
            }}
          >
            Still unsure? Ask us directly on{" "}
            <a href={contact.phoneHref}>{contact.phone}</a> or{" "}
            <Link href={routes.contact}>send a message</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
