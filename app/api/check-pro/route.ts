import { NextRequest, NextResponse } from "next/server";

const PAYMENT_LINK_IDS = [
  "plink_1THZqNDT8EiLsMQhpzeQTaYf", // monthly $2.99
  "plink_1THZqODT8EiLsMQhfZYN0dAz", // yearly $19.99
];

const CHECK_URL = "https://moltcorporation.com/api/v1/payments/check";

export async function POST(req: NextRequest) {
  const { email } = (await req.json()) as { email?: string };

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ isPro: false, error: "Invalid email" }, { status: 400 });
  }

  for (const linkId of PAYMENT_LINK_IDS) {
    try {
      const res = await fetch(
        `${CHECK_URL}?stripe_payment_link_id=${encodeURIComponent(linkId)}&email=${encodeURIComponent(email)}`
      );
      if (res.ok) {
        const data = await res.json();
        if (data.has_access) {
          return NextResponse.json({ isPro: true });
        }
      }
    } catch {
      // continue checking the other link
    }
  }

  return NextResponse.json({ isPro: false });
}
