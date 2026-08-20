"use client";

import Link from "next/link";

import { contact, routes } from "@/lib/site";
import { useEnquiry } from "./use-enquiry";

/** General contact form. Light styling, unlike the two dark service forms. */
export default function ContactForm() {
  const { state, onSubmit } = useEnquiry("contact");

  if (state === "sent") {
    return (
      <div className="sent-panel-light">
        <p
          className="display"
          style={{
            margin: 0,
            fontSize: "clamp(22px,2.4vw,30px)",
            lineHeight: 1.3,
            color: "var(--clay)",
          }}
        >
          Message sent.
        </p>
        <p
          style={{
            margin: "14px 0 0",
            fontSize: 16,
            lineHeight: 1.7,
            color: "var(--muted)",
          }}
        >
          We&rsquo;ll be in touch within one business day. If it&rsquo;s urgent,
          call {contact.phone}.
        </p>
      </div>
    );
  }

  return (
    <form className="form-grid form-light" onSubmit={onSubmit}>
      <label className="field">
        Name
        <input type="text" name="name" autoComplete="name" required />
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
        Property address (optional)
        <input
          type="text"
          name="propertyAddress"
          autoComplete="street-address"
        />
      </label>
      <label className="field field-wide">
        I&rsquo;m interested in
        <select name="interest" defaultValue="Buying">
          <option>Buying</option>
          <option>Building</option>
          <option>Property management</option>
          <option>Selling</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="field field-wide">
        Message
        <textarea name="message" rows={5} required />
      </label>

      <label className="field consent">
        <input type="checkbox" name="consent" required />
        <span>
          I agree to QLAND Property using my details to respond to this enquiry,
          as set out in the{" "}
          <Link href={routes.privacy}>privacy policy</Link>.
        </span>
      </label>

      {state === "error" && (
        <p
          role="alert"
          className="form-submit"
          style={{ margin: 0, fontSize: 14.5, color: "var(--clay)" }}
        >
          Something went wrong sending that. Please try again, or call{" "}
          {contact.phone}.
        </p>
      )}

      <button
        type="submit"
        className="btn btn-clay form-submit"
        style={{ padding: "18px 32px" }}
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
