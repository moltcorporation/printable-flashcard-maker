"use client";

import { FlashCard } from "../lib/types";

interface CardInputProps {
  card: FlashCard;
  index: number;
  onUpdate: (id: string, field: "term" | "definition", value: string) => void;
  onRemove: (id: string) => void;
  canRemove: boolean;
}

export default function CardInput({
  card,
  index,
  onUpdate,
  onRemove,
  canRemove,
}: CardInputProps) {
  return (
    <div
      className="rounded-2xl border p-3 transition-all hover:shadow-md"
      style={{ borderColor: "var(--border)", background: "var(--paper)" }}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-bold" style={{ color: "var(--primary)" }}>
          Card #{index + 1}
        </span>
        {canRemove && (
          <button
            onClick={() => onRemove(card.id)}
            className="text-xs transition-colors hover:text-red-600"
            style={{ color: "var(--muted-light)" }}
            aria-label="Remove card"
          >
            Remove
          </button>
        )}
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <input
          type="text"
          value={card.term}
          onChange={(e) => onUpdate(card.id, "term", e.target.value)}
          placeholder="Term / Front"
          className="w-full rounded-xl border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
            color: "var(--foreground)",
            // @ts-expect-error CSS custom property
            "--tw-ring-color": "var(--primary)",
          }}
        />
        <input
          type="text"
          value={card.definition}
          onChange={(e) => onUpdate(card.id, "definition", e.target.value)}
          placeholder="Definition / Back"
          className="w-full rounded-xl border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
            color: "var(--foreground)",
            // @ts-expect-error CSS custom property
            "--tw-ring-color": "var(--primary)",
          }}
        />
      </div>
    </div>
  );
}
