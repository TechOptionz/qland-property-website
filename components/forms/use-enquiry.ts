"use client";

import { useState, type FormEvent } from "react";

export type EnquiryState = "idle" | "submitting" | "sent" | "error";

/**
 * Posts a form to /api/enquiry and drives the success panel the design shows in
 * place of the form. On failure the form stays put with an inline message, so a
 * dropped submission is never mistaken for a successful one.
 */
export function useEnquiry(kind: string) {
  const [state, setState] = useState<EnquiryState>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("submitting");

    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, ...payload }),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  return { state, onSubmit };
}
