import { CALENDLY_URL, contact } from "@/lib/site";

/** Fixed Call / Book bar, mobile only. */
export default function MobileCtaBar() {
  return (
    <div
      className="only-mobile"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 70,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "var(--ink)",
        borderTop: "1px solid rgba(249,180,85,.3)",
      }}
    >
      <a
        href={contact.phoneHref}
        style={{
          padding: 18,
          textAlign: "center",
          color: "var(--bone)",
          fontSize: 15,
          fontWeight: 600,
          borderRight: "1px solid rgba(246,241,232,.16)",
        }}
      >
        Call
      </a>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener"
        style={{
          padding: 18,
          textAlign: "center",
          background: "var(--brass)",
          color: "var(--ink)",
          fontSize: 15,
          fontWeight: 700,
        }}
      >
        Book a call
      </a>
    </div>
  );
}
