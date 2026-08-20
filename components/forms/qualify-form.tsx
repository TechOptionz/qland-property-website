"use client";

import Link from "next/link";

import { routes } from "@/lib/site";
import { useEnquiry } from "./use-enquiry";

/** House & Land qualification form. */
export default function QualifyForm() {
  const { state, onSubmit } = useEnquiry("house-and-land");

  if (state === "sent") {
    return (
      <div className="sent-panel">
        <p
          className="display"
          style={{
            margin: 0,
            fontSize: "clamp(22px,2.4vw,30px)",
            lineHeight: 1.3,
            color: "var(--brass)",
          }}
        >
          Thanks — we&rsquo;ve got your details.
        </p>
        <p
          style={{
            margin: "14px 0 0",
            fontSize: 16,
            lineHeight: 1.7,
            color: "rgba(246,241,232,.78)",
          }}
        >
          One of our team will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="form-grid form-dark" onSubmit={onSubmit} noValidate={false}>
      <label className="field">
        First name
        <input type="text" name="first" autoComplete="given-name" required />
      </label>
      <label className="field">
        Last name
        <input type="text" name="last" autoComplete="family-name" required />
      </label>
      <label className="field">
        Email
        <input type="email" name="email" autoComplete="email" required />
      </label>
      <label className="field">
        Phone
        <input type="tel" name="phone" autoComplete="tel" required />
      </label>
      <label className="field">
        Suburb or region of interest
        <input type="text" name="suburb" />
      </label>
      <label className="field">
        Buying situation
        <select name="situation" defaultValue="First home">
          <option>First home</option>
          <option>Investment</option>
          <option>Upgrading</option>
        </select>
      </label>
      <label className="field">
        Approximate deposit
        <input type="text" name="deposit" inputMode="numeric" />
      </label>
      <label className="field">
        Preferred contact
        <select name="contactPreference" defaultValue="Phone">
          <option>Phone</option>
          <option>Email</option>
          <option>Text</option>
        </select>
      </label>
      <label className="field field-wide">
        Comments
        <textarea name="comments" rows={3} />
      </label>

      <label className="field consent">
        <input type="checkbox" name="consent" required />
        <span>
          I agree to QLAND Property contacting me about my enquiry and to the{" "}
          <Link href={routes.privacy} style={{ color: "var(--brass)" }}>
            privacy policy
          </Link>
          .
        </span>
      </label>

      {state === "error" && (
        <p
          role="alert"
          className="form-submit"
          style={{ margin: 0, fontSize: 14.5, color: "var(--brass-light)" }}
        >
          Something went wrong sending that. Please try again, or call 0423 584
          690.
        </p>
      )}

      <button
        type="submit"
        className="btn btn-brass form-submit"
        style={{ padding: "18px 32px", fontSize: 15 }}
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Sending…" : "See if I qualify"}
      </button>
    </form>
  );
}
