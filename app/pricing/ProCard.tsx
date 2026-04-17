"use client";

import { useState } from "react";
import { useProStatus } from "../lib/useProStatus";

const MONTHLY_URL = "https://buy.stripe.com/14AaEXaNZ8Ole1T6Ik3Nm0J";
const YEARLY_URL = "https://buy.stripe.com/fZu6oHbS37Kh6zr0jW3Nm1g";

export default function ProCard({
  features,
}: {
  features: { name: string; free: string; pro: string }[];
}) {
  const { isPro, email, checking, checkPro } = useProStatus();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [verifyEmail, setVerifyEmail] = useState("");
  const [showVerify, setShowVerify] = useState(false);
  const [verifyError, setVerifyError] = useState("");

  const handleVerify = async () => {
    setVerifyError("");
    const found = await checkPro(verifyEmail);
    if (!found) {
      setVerifyError("No active Pro subscription found for this email. Complete checkout first.");
    }
  };

  return (
    <div
      className="rounded-2xl border-2 p-6"
      style={{ borderColor: "var(--primary)", background: "var(--paper)" }}
    >
      <h2 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>Pro</h2>
      <p className="mt-1 text-sm" style={{ color: "var(--muted-light)" }}>
        Unlimited flashcards, all features
      </p>

      {isPro ? (
        <>
          <div className="mt-4 rounded-xl border px-4 py-3" style={{ background: "var(--primary-light)", borderColor: "var(--primary)" }}>
            <p className="text-sm font-bold" style={{ color: "var(--primary-dark)" }}>
              Pro active
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--primary)" }}>{email}</p>
          </div>
          <a
            href="/"
            className="mt-6 block rounded-xl px-4 py-2.5 text-center text-sm font-bold text-white transition-all"
            style={{ background: "linear-gradient(135deg, var(--primary), var(--primary-dark))" }}
          >
            Start creating
          </a>
        </>
      ) : (
        <>
          {/* Billing toggle */}
          <div className="mt-4 flex items-center gap-1 rounded-xl p-1" style={{ background: "var(--surface)" }}>
            <button
              onClick={() => setBillingCycle("monthly")}
              className="flex-1 rounded-lg px-3 py-2 text-sm font-bold transition-all"
              style={
                billingCycle === "monthly"
                  ? { background: "var(--paper)", color: "var(--foreground)", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }
                  : { color: "var(--muted)" }
              }
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className="flex-1 rounded-lg px-3 py-2 text-sm font-bold transition-all"
              style={
                billingCycle === "yearly"
                  ? { background: "var(--paper)", color: "var(--foreground)", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }
                  : { color: "var(--muted)" }
              }
            >
              Yearly
              <span className="ml-1 text-xs font-bold" style={{ color: "var(--primary)" }}>Save 44%</span>
            </button>
          </div>

          <p className="mt-4">
            <span className="text-4xl font-extrabold" style={{ color: "var(--foreground)" }}>
              {billingCycle === "monthly" ? "$2.99" : "$19.99"}
            </span>
            <span style={{ color: "var(--muted-light)" }}>
              /{billingCycle === "monthly" ? "mo" : "yr"}
            </span>
          </p>

          <div className="mt-6 space-y-2">
            <a
              href={billingCycle === "monthly" ? MONTHLY_URL : YEARLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl px-4 py-2.5 text-center text-sm font-bold text-white transition-all shadow-md"
              style={{ background: "linear-gradient(135deg, var(--primary), var(--primary-dark))", boxShadow: "0 4px 16px rgba(13, 115, 119, 0.25)" }}
            >
              Get Pro
            </a>
            <button
              onClick={() => setShowVerify(!showVerify)}
              className="w-full text-center text-xs transition-colors"
              style={{ color: "var(--muted-light)" }}
            >
              Already purchased? Verify your email
            </button>
          </div>

          {showVerify && (
            <div className="mt-3 rounded-xl border p-3 space-y-2" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
              <input
                type="email"
                value={verifyEmail}
                onChange={(e) => setVerifyEmail(e.target.value)}
                placeholder="Email used at checkout"
                className="w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-1"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--paper)",
                  color: "var(--foreground)",
                }}
                onKeyDown={(e) => e.key === "Enter" && handleVerify()}
              />
              <button
                onClick={handleVerify}
                disabled={checking || !verifyEmail}
                className="w-full rounded-xl px-3 py-2 text-sm font-bold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: "var(--primary-dark)" }}
              >
                {checking ? "Checking..." : "Verify"}
              </button>
              {verifyError && (
                <p className="text-xs text-red-600">{verifyError}</p>
              )}
            </div>
          )}
        </>
      )}

      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li
            key={f.name}
            className="flex justify-between text-sm"
            style={{ color: "var(--muted)" }}
          >
            <span>{f.name}</span>
            <span className="font-bold" style={{ color: "var(--foreground)" }}>{f.pro}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
