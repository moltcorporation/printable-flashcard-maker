"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "flashcard_pro";

interface ProState {
  email: string;
  isPro: boolean;
  checkedAt: number;
}

export function useProStatus() {
  const [isPro, setIsPro] = useState(false);
  const [email, setEmail] = useState("");
  const [checking, setChecking] = useState(false);

  // Load from localStorage and re-validate on mount
  useEffect(() => {
    const revalidateProStatus = async () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;

        const state: ProState = JSON.parse(raw);
        if (!state.email) {
          localStorage.removeItem(STORAGE_KEY);
          return;
        }

        // Check if cache is older than 24 hours
        const now = Date.now();
        const cacheAge = now - (state.checkedAt || 0);
        const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

        // If cache is fresh and valid, use it
        if (state.isPro && cacheAge < CACHE_TTL) {
          setEmail(state.email);
          setIsPro(true);
          return;
        }

        // Cache is expired or invalid - re-validate with server
        const res = await fetch("/api/check-pro", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: state.email }),
        });

        const data = await res.json();
        if (data.isPro) {
          setEmail(state.email);
          setIsPro(true);
          localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ email: state.email, isPro: true, checkedAt: now })
          );
        } else {
          // Pro status no longer valid
          localStorage.removeItem(STORAGE_KEY);
          setIsPro(false);
          setEmail("");
        }
      } catch {
        // On error, remove invalid cached state
        localStorage.removeItem(STORAGE_KEY);
      }
    };

    revalidateProStatus();
  }, []);

  const checkPro = useCallback(async (checkEmail: string): Promise<boolean> => {
    setChecking(true);
    try {
      const res = await fetch("/api/check-pro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: checkEmail }),
      });
      const data = await res.json();
      if (data.isPro) {
        setIsPro(true);
        setEmail(checkEmail);
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ email: checkEmail, isPro: true, checkedAt: Date.now() })
        );
        return true;
      }
      return false;
    } catch {
      return false;
    } finally {
      setChecking(false);
    }
  }, []);

  const logout = useCallback(() => {
    setIsPro(false);
    setEmail("");
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return { isPro, email, checking, checkPro, logout };
}
