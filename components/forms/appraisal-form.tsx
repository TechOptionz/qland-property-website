"use client";

import { useEnquiry } from "./use-enquiry";

/** Property Management rental appraisal request. */
export default function AppraisalForm() {
  const { state, onSubmit } = useEnquiry("property-management");

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
          Thank you for your enquiry.
        </p>
        <p
          style={{
            margin: "14px 0 0",
            fontSize: 16,
            lineHeight: 1.7,
            color: "rgba(246,241,232,.78)",
          }}
        >
          We&rsquo;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="form-grid form-dark" onSubmit={onSubmit}>
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
      <label className="field field-wide">
        Property address
        <input
          type="text"
          name="propertyAddress"
          autoComplete="street-address"
          required
        />
      </label>
      <label className="field">
        Preferred contact
        <select name="contactPreference" defaultValue="Phone">
          <option>Phone</option>
          <option>Email</option>
        </select>
      </label>
      <label className="field">
        Currently managed by
        <input type="text" name="currentAgent" />
      </label>
      <label className="field field-wide">
        Comments
        <textarea name="comments" rows={3} />
      </label>

      <label className="field consent">
        <input type="checkbox" name="consent" required />
        <span>I agree to QLAND Property contacting me about my enquiry.</span>
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
        {state === "submitting" ? "Sending…" : "Request my appraisal"}
      </button>
    </form>
  );
}
