"use client";

import { useState } from "react";
import { useProStatus } from "../lib/useProStatus";

export default function ProBadge() {
  const { isPro, email, checking, checkPro, logout } = useProStatus();
  const [showVerify, setShowVerify] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState("");
  const [error, setError] = useState("");

  const handleVerify = async () => {
    setError("");
    const found = await checkPro(verifyEmail);
    if (!found) {
      setError("No active subscription found.");
    } else {
      setShowVerify(false);
    }
  };

  if (isPro) {
    return (
      <div className="flex items-center gap-2">
        <span
          className="rounded-full px-3 py-1 text-xs font-bold"
          style={{ background: "var(--primary-light)", color: "var(--primary)" }}
        >
          PRO
        </span>
        <button
          onClick={logout}
          className="text-xs transition-colors"
          style={{ color: "var(--muted-light)" }}
        >
          Sign out
        </button>
      </div>
    );
  }

  if (showVerify) {
    return (
      <div className="flex items-center gap-2">
        <input
          type="email"
          value={verifyEmail}
          onChange={(e) => setVerifyEmail(e.target.value)}
          placeholder="Email from checkout"
          className="rounded-lg border px-2 py-1.5 text-xs w-48 focus:outline-none focus:ring-1"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
            color: "var(--foreground)",
          }}
          onKeyDown={(e) => e.key === "Enter" && handleVerify()}
        />
        <button
          onClick={handleVerify}
          disabled={checking || !verifyEmail}
          className="rounded-lg px-3 py-1.5 text-xs font-medium text-white disabled:opacity-50"
          style={{ background: "var(--primary)" }}
        >
          {checking ? "..." : "Verify"}
        </button>
        <button
          onClick={() => setShowVerify(false)}
          className="text-xs"
          style={{ color: "var(--muted-light)" }}
        >
          Cancel
        </button>
        {error && <span className="text-xs text-red-600">{error}</span>}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setShowVerify(true)}
        className="text-xs transition-colors"
        style={{ color: "var(--muted-light)" }}
      >
        Already Pro?
      </button>
      <a
        href="/pricing"
        className="rounded-xl px-4 py-2 text-sm font-bold text-white transition-all shadow-md"
        style={{ background: "linear-gradient(135deg, var(--primary), var(--primary-dark))" }}
      >
        Upgrade to Pro
      </a>
    </div>
  );
}
