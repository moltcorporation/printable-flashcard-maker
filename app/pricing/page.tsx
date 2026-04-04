import type { Metadata } from "next";
import ProCard from "./ProCard";

export const metadata: Metadata = {
  title: "Pricing — Printable Flashcard Maker",
  description:
    "Unlock unlimited flashcards, all card sizes, 16 templates, double-sided printing, and no watermarks with Pro.",
};

const features = [
  { name: "Cards per set", free: "5", pro: "Unlimited" },
  { name: "Card sizes", free: '3"x5" only', pro: '3"x5", 4"x6", A6' },
  { name: "Templates", free: "2 basic", pro: "16 premium" },
  { name: "PDF watermark", free: "Yes", pro: "None" },
  { name: "Double-sided layout", free: "No", pro: "Yes" },
  { name: "Custom fonts & colors", free: "No", pro: "Yes" },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]" style={{ background: "var(--background)" }}>
      {/* Accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#0d7377] via-[#e8a838] to-[#6b8f71]" />
      <header className="border-b" style={{ borderColor: "var(--border)", background: "var(--paper)" }}>
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0d7377] to-[#095c5f] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <rect x="2" y="4" width="16" height="14" rx="2" />
                <rect x="6" y="6" width="16" height="14" rx="2" fill="white" fillOpacity="0.3" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
              Flashcard Maker
            </span>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: "var(--foreground)" }}>
            Simple pricing
          </h1>
          <p className="mt-3 text-lg" style={{ color: "var(--muted)" }}>
            Create flashcards for free, or unlock everything with Pro.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {/* Free */}
          <div className="rounded-2xl border p-6" style={{ borderColor: "var(--border)", background: "var(--paper)" }}>
            <h2 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>Free</h2>
            <p className="mt-1 text-sm" style={{ color: "var(--muted-light)" }}>
              Great for trying it out
            </p>
            <p className="mt-4">
              <span className="text-4xl font-extrabold" style={{ color: "var(--foreground)" }}>$0</span>
              <span style={{ color: "var(--muted-light)" }}>/forever</span>
            </p>
            <a
              href="/"
              className="mt-6 block rounded-xl border px-4 py-2.5 text-center text-sm font-bold transition-all"
              style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
            >
              Start creating
            </a>
            <ul className="mt-6 space-y-3">
              {features.map((f) => (
                <li
                  key={f.name}
                  className="flex justify-between text-sm"
                  style={{ color: "var(--muted)" }}
                >
                  <span>{f.name}</span>
                  <span className="font-medium">{f.free}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro */}
          <ProCard features={features} />
        </div>
      </main>
    </div>
  );
}
