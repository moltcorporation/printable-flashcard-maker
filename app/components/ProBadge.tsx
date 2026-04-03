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
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
          PRO
        </span>
        <button
          onClick={logout}
          className="text-xs text-violet-300 hover:text-white transition-colors"
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
          className="rounded-lg border border-violet-400/30 bg-white/10 px-2 py-1.5 text-xs text-white placeholder-violet-300 w-48 focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400"
          onKeyDown={(e) => e.key === "Enter" && handleVerify()}
        />
        <button
          onClick={handleVerify}
          disabled={checking || !verifyEmail}
          className="rounded-lg bg-violet-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-violet-400 disabled:opacity-50"
        >
          {checking ? "..." : "Verify"}
        </button>
        <button
          onClick={() => setShowVerify(false)}
          className="text-xs text-violet-300 hover:text-white"
        >
          Cancel
        </button>
        {error && <span className="text-xs text-red-300">{error}</span>}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setShowVerify(true)}
        className="text-xs text-violet-300 hover:text-white transition-colors"
      >
        Already Pro?
      </button>
      <a
        href="/pricing"
        className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:from-fuchsia-400 hover:to-violet-400 shadow-md shadow-violet-900/30"
      >
        Upgrade to Pro
      </a>
    </div>
  );
}
