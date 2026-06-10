import { NextResponse } from "next/server";

const MAX_NAME_LENGTH = 120;

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}
function isPhone(s: string) {
  return /^[+]?[\d\s()-]{6,}$/.test(s);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, budget, service, website } = body ?? {};

    // Honeypot: filled = bot
    if (website) return NextResponse.json({ ok: true });

    if (!name || typeof name !== "string" || name.length > MAX_NAME_LENGTH) {
      return NextResponse.json({ ok: false, error: "invalid_name" }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !isEmail(email)) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }
    if (!phone || typeof phone !== "string" || !isPhone(phone)) {
      return NextResponse.json({ ok: false, error: "invalid_phone" }, { status: 400 });
    }

    const payload = {
      name,
      email,
      phone,
      budget: typeof budget === "string" ? budget : "",
      service: typeof service === "string" ? service : "",
      receivedAt: new Date().toISOString(),
    };

    // Email delivery — activate when RESEND_API_KEY and CONTACT_TO_EMAIL are set
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (resendKey && toEmail) {
      const html = `
        <h2>New project inquiry — Maatouk Studio</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Mobile:</strong> ${escapeHtml(payload.phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        ${payload.budget ? `<p><strong>Budget:</strong> ${escapeHtml(payload.budget)}</p>` : ""}
        ${payload.service ? `<p><strong>Service:</strong> ${escapeHtml(payload.service)}</p>` : ""}
      `;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Maatouk Studio <onboarding@resend.dev>",
          to: [toEmail],
          reply_to: payload.email,
          subject: `New inquiry: ${payload.name}`,
          html,
        }),
      });

      if (!res.ok) {
        return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
      }
    } else {
      // No provider configured — log so submissions are still visible in server logs
      console.info("[contact] Inquiry received (no email provider configured):", payload);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
