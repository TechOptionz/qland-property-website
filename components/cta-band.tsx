import type { ReactNode } from "react";

type Props = {
  heading: string;
  body?: string;
  children: ReactNode;
  /** The design gives the home page a taller band than the service pages. */
  tall?: boolean;
  ruleTop?: boolean;
};

/** Dark, centred closing band. Reused at the foot of most pages. */
export default function CtaBand({
  heading,
  body,
  children,
  tall = false,
  ruleTop = false,
}: Props) {
  return (
    <section
      className="section-dark"
      style={{
        padding: tall
          ? "clamp(64px,9vw,140px) var(--gutter)"
          : "clamp(60px,8vw,120px) var(--gutter)",
        textAlign: "center",
        borderTop: ruleTop ? "1px solid rgba(249,180,85,.2)" : undefined,
      }}
    >
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <h2
          className="display"
          style={
            tall
              ? {
                  fontSize: "clamp(34px,5vw,66px)",
                  lineHeight: 1.04,
                  letterSpacing: "-.025em",
                }
              : {
                  fontSize: "clamp(30px,4.4vw,58px)",
                  lineHeight: 1.05,
                  letterSpacing: "-.025em",
                }
          }
        >
          {heading}
        </h2>
        {body && (
          <p
            style={{
              margin: "22px auto 0",
              maxWidth: "56ch",
              fontSize: "clamp(16px,1.2vw,18.5px)",
              lineHeight: 1.7,
              color: "rgba(246,241,232,.74)",
            }}
          >
            {body}
          </p>
        )}
        <div style={{ marginTop: 34 }}>{children}</div>
      </div>
    </section>
  );
}
