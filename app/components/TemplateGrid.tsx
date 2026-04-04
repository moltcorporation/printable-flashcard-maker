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
            className="relative flex flex-col items-center rounded-xl border-2 p-2 transition-all"
            style={
              isSelected
                ? { borderColor: "var(--primary)", background: "var(--primary-light)" }
                : locked
                ? { borderColor: "var(--border)", opacity: 0.6, cursor: "not-allowed" }
                : { borderColor: "var(--border)" }
            }
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
            <span
              className="text-[10px] font-medium"
              style={{ color: isSelected ? "var(--primary)" : "var(--muted)" }}
            >
              {t.name}
            </span>
            {locked && (
              <span
                className="absolute -right-1 -top-1 rounded-full px-1 py-0.5 text-[8px] font-bold"
                style={{ background: "var(--accent)", color: "white" }}
              >
                PRO
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
