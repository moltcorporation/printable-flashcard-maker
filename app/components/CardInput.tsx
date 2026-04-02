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
    <div className="rounded-lg border border-zinc-200 bg-white p-3 transition-colors hover:border-zinc-300">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium text-zinc-500">Card #{index + 1}</span>
        {canRemove && (
          <button
            onClick={() => onRemove(card.id)}
            className="text-xs text-zinc-400 hover:text-red-500 transition-colors"
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
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
        />
        <input
          type="text"
          value={card.definition}
          onChange={(e) => onUpdate(card.id, "definition", e.target.value)}
          placeholder="Definition / Back"
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
        />
      </div>
    </div>
  );
}
