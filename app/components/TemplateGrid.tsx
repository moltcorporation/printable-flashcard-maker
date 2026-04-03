"use client";

import { Template } from "../lib/types";

interface TemplateGridProps {
  templates: Template[];
  selected: Template;
  onSelect: (t: Template) => void;
  isPro: boolean;
  freeIds: string[];
}

export default function TemplateGrid({
  templates,
  selected,
  onSelect,
  isPro,
  freeIds,
}: TemplateGridProps) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {templates.map((t) => {
        const locked = t.pro && !isPro;
        const isSelected = selected.id === t.id;
        return (
          <button
            key={t.id}
            onClick={() => onSelect(t)}
            className={`relative flex flex-col items-center rounded-lg border-2 p-2 transition-all ${
              isSelected
                ? "border-violet-500 bg-violet-50 shadow-sm"
                : locked
                ? "border-stone-200 opacity-60 cursor-not-allowed"
                : "border-stone-200 hover:border-violet-300 hover:shadow-sm"
            }`}
            title={t.name}
          >
            {/* Mini card preview */}
            <div
              className="mb-1 h-8 w-full rounded-sm"
              style={{
                backgroundColor: t.bgColor,
                border: `2px solid ${t.borderColor}`,
              }}
            >
              <div
                className="h-2.5 w-full rounded-t-sm"
                style={{ backgroundColor: t.headerBg }}
              />
            </div>
            <span className={`text-[10px] font-medium ${isSelected ? "text-violet-700" : "text-stone-600"}`}>
              {t.name}
            </span>
            {locked && (
              <span className="absolute -right-1 -top-1 rounded-full bg-amber-400 px-1 py-0.5 text-[8px] font-bold text-amber-900">
                PRO
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
