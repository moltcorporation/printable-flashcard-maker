"use client";

import { useState } from "react";
import { useProStatus } from "../lib/useProStatus";

const YEARLY_URL = "https://buy.stripe.com/fZu6oHbS37Kh6zr0jW3Nm1g";

export default function ProCard({
  features,
}: {
  features: { name: string; free: string; pro: string }[];
}) {
  const { isPro, email, checking, checkPro } = useProStatus();
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
    <div className="rounded-xl border-2 border-zinc-900 bg-white p-6">
      <h2 className="text-lg font-semibold text-zinc-900">Pro</h2>
      <p className="mt-1 text-sm text-zinc-500">
        Unlimited flashcards, all features
      </p>

      {isPro ? (
        <>
          <div className="mt-4 rounded-lg bg-green-50 border border-green-200 px-4 py-3">
            <p className="text-sm font-medium text-green-800">
              Pro active
            </p>
            <p className="text-xs text-green-600 mt-0.5">{email}</p>
          </div>
          <a
            href="/"
            className="mt-6 block rounded-lg bg-zinc-900 px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Start creating
          </a>
        </>
      ) : (
        <>
          <p className="mt-4">
            <span className="text-4xl font-bold text-zinc-900">
              $19.99
            </span>
            <span className="text-zinc-500">
              /yr
            </span>
          </p>

          <div className="mt-6 space-y-2">
            <a
              href={YEARLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg bg-zinc-900 px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              Get Pro
            </a>
            <button
              onClick={() => setShowVerify(!showVerify)}
              className="w-full text-center text-xs text-zinc-500 hover:text-zinc-700 transition-colors"
            >
              Already purchased? Verify your email
            </button>
          </div>

          {showVerify && (
            <div className="mt-3 rounded-lg border border-zinc-200 bg-zinc-50 p-3 space-y-2">
              <input
                type="email"
                value={verifyEmail}
                onChange={(e) => setVerifyEmail(e.target.value)}
                placeholder="Email used at checkout"
                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                onKeyDown={(e) => e.key === "Enter" && handleVerify()}
              />
              <button
                onClick={handleVerify}
                disabled={checking || !verifyEmail}
                className="w-full rounded-md bg-zinc-700 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-600 disabled:opacity-50 disabled:cursor-not-allowed"
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
            className="flex justify-between text-sm text-zinc-600"
          >
            <span>{f.name}</span>
            <span className="font-medium text-zinc-900">{f.pro}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
