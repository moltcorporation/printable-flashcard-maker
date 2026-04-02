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
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
          PRO
        </span>
        <button
          onClick={logout}
          className="text-xs text-zinc-400 hover:text-zinc-600 transition-colors"
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
          className="rounded-md border border-zinc-300 px-2 py-1.5 text-xs text-zinc-900 placeholder-zinc-400 w-48 focus:border-zinc-500 focus:outline-none"
          onKeyDown={(e) => e.key === "Enter" && handleVerify()}
        />
        <button
          onClick={handleVerify}
          disabled={checking || !verifyEmail}
          className="rounded-md bg-zinc-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-zinc-600 disabled:opacity-50"
        >
          {checking ? "..." : "Verify"}
        </button>
        <button
          onClick={() => setShowVerify(false)}
          className="text-xs text-zinc-400 hover:text-zinc-600"
        >
          Cancel
        </button>
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setShowVerify(true)}
        className="text-xs text-zinc-500 hover:text-zinc-700 transition-colors"
      >
        Already Pro?
      </button>
      <a
        href="/pricing"
        className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
      >
        Upgrade to Pro
      </a>
    </div>
  );
}
