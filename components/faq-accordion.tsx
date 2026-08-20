"use client";

import { useId, useState } from "react";

import { faqs } from "@/lib/content";

export default function FaqAccordion() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const baseId = useId();

  return (
    <div className="shell-narrow">
      {faqs.map((faq, i) => {
        const isOpen = Boolean(open[i]);
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <div key={faq.q} style={{ borderTop: "1px solid var(--rule-strong)" }}>
            <h2 style={{ margin: 0 }}>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}
                className="display"
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  padding: "clamp(22px,2.4vw,30px) 0",
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  color: "var(--ink)",
                  fontSize: "clamp(19px,2vw,26px)",
                  lineHeight: 1.3,
                  letterSpacing: "-.01em",
                }}
              >
                {faq.q}
                <span
                  aria-hidden="true"
                  style={{
                    flex: "0 0 auto",
                    color: "var(--clay)",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: 22,
                    lineHeight: 1.2,
                  }}
                >
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h2>

            {isOpen && (
              <p
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                style={{
                  margin: 0,
                  padding: "0 0 clamp(24px,2.6vw,34px)",
                  maxWidth: "70ch",
                  fontSize: 16.5,
                  lineHeight: 1.78,
                  color: "var(--muted)",
                }}
              >
                {faq.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
