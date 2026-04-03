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
    <div className="rounded-xl border border-stone-200 bg-white p-3 shadow-sm transition-all hover:border-violet-200 hover:shadow-md">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-semibold text-violet-500">Card #{index + 1}</span>
        {canRemove && (
          <button
            onClick={() => onRemove(card.id)}
            className="text-xs text-stone-400 hover:text-red-500 transition-colors"
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
          className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-900 placeholder-stone-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 bg-stone-50/50"
        />
        <input
          type="text"
          value={card.definition}
          onChange={(e) => onUpdate(card.id, "definition", e.target.value)}
          placeholder="Definition / Back"
          className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-900 placeholder-stone-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 bg-stone-50/50"
        />
      </div>
    </div>
  );
}
