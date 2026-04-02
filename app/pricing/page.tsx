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
    <div className="min-h-screen bg-zinc-50 font-[family-name:var(--font-geist-sans)]">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="text-xl font-bold tracking-tight text-zinc-900">
            Printable Flashcard Maker
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Simple pricing
          </h1>
          <p className="mt-3 text-lg text-zinc-600">
            Create flashcards for free, or unlock everything with Pro.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {/* Free */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-zinc-900">Free</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Great for trying it out
            </p>
            <p className="mt-4">
              <span className="text-4xl font-bold text-zinc-900">$0</span>
              <span className="text-zinc-500">/forever</span>
            </p>
            <a
              href="/"
              className="mt-6 block rounded-lg border border-zinc-300 px-4 py-2.5 text-center text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
            >
              Start creating
            </a>
            <ul className="mt-6 space-y-3">
              {features.map((f) => (
                <li
                  key={f.name}
                  className="flex justify-between text-sm text-zinc-600"
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
