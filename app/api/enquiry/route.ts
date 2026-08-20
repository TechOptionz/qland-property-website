import { NextResponse } from "next/server";

/**
 * Enquiry endpoint for the three site forms.
 *
 * TODO(client): wire this to the CRM or transactional email provider. Until
 * then it validates the payload and logs it server-side so nothing is silently
 * dropped in development.
 */

const REQUIRED_BY_KIND: Record<string, string[]> = {
  "house-and-land": ["first", "last", "email", "phone", "consent"],
  "property-management": [
    "first",
    "last",
    "email",
    "phone",
    "propertyAddress",
    "consent",
  ],
  contact: ["name", "email", "phone", "message", "consent"],
};

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const kind = typeof payload.kind === "string" ? payload.kind : "";
  const required = REQUIRED_BY_KIND[kind];

  if (!required) {
    return NextResponse.json({ error: "Unknown enquiry kind." }, { status: 400 });
  }

  const missing = required.filter((field) => {
    const value = payload[field];
    return value === undefined || value === null || value === "";
  });

  if (missing.length > 0) {
    return NextResponse.json(
      { error: "Missing required fields.", fields: missing },
      { status: 422 },
    );
  }

  console.info("[enquiry]", kind, payload);

  return NextResponse.json({ ok: true });
}
