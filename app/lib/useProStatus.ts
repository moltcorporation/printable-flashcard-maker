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

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const state: ProState = JSON.parse(raw);
        if (state.isPro && state.email) {
          setIsPro(true);
          setEmail(state.email);
        }
      }
    } catch {
      // ignore
    }
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
