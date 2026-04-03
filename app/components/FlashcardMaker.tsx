"use client";

import { useState, useCallback } from "react";
import {
  FlashCard,
  CardSize,
  CARD_SIZES,
  Template,
  TEMPLATES,
  FREE_CARD_LIMIT,
  FREE_TEMPLATE_IDS,
} from "../lib/types";
import { generatePDF } from "../lib/pdf";
import { useProStatus } from "../lib/useProStatus";
import CardInput from "./CardInput";
import Preview from "./Preview";
import TemplateGrid from "./TemplateGrid";

function newCard(): FlashCard {
  return { id: crypto.randomUUID(), term: "", definition: "" };
}

export default function FlashcardMaker() {
  const [cards, setCards] = useState<FlashCard[]>([
    { id: crypto.randomUUID(), term: "Photosynthesis", definition: "The process by which plants convert sunlight into energy" },
    { id: crypto.randomUUID(), term: "Mitochondria", definition: "The powerhouse of the cell, producing ATP for energy" },
  ]);
  const [size, setSize] = useState<CardSize>("3x5");
  const [template, setTemplate] = useState<Template>(TEMPLATES[0]);
  const [doubleSided, setDoubleSided] = useState(false);
  const [activeTab, setActiveTab] = useState<"cards" | "style">("cards");
  const { isPro } = useProStatus();

  const validCards = cards.filter((c) => c.term.trim() || c.definition.trim());
  const atLimit = !isPro && cards.length >= FREE_CARD_LIMIT;

  const addCard = useCallback(() => {
    if (atLimit) return;
    setCards((prev) => [...prev, newCard()]);
  }, [atLimit]);

  const removeCard = useCallback((id: string) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const updateCard = useCallback(
    (id: string, field: "term" | "definition", value: string) => {
      setCards((prev) =>
        prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
      );
    },
    []
  );

  const handleBulkPaste = useCallback(
    (text: string) => {
      const lines = text
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
      const newCards: FlashCard[] = [];
      for (const line of lines) {
        const sep = line.includes("\t") ? "\t" : ":";
        const idx = line.indexOf(sep);
        if (idx > 0) {
          newCards.push({
            id: crypto.randomUUID(),
            term: line.slice(0, idx).trim(),
            definition: line.slice(idx + 1).trim(),
          });
        }
      }
      if (newCards.length > 0) {
        const allowed = isPro
          ? newCards
          : newCards.slice(0, FREE_CARD_LIMIT - cards.length);
        if (allowed.length > 0) {
          setCards((prev) => [...prev, ...allowed]);
        }
      }
    },
    [cards.length, isPro]
  );

  const handleSelectTemplate = useCallback(
    (t: Template) => {
      if (t.pro && !isPro) return;
      setTemplate(t);
    },
    [isPro]
  );

  const handleDownload = useCallback(() => {
    if (validCards.length === 0) return;
    generatePDF(validCards, size, template, isPro, doubleSided);
  }, [validCards, size, template, isPro, doubleSided]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
      {/* Left panel — inputs */}
      <div className="space-y-4">
        {/* Tab switcher */}
        <div className="flex gap-1 rounded-lg bg-violet-100 p-1">
          <button
            onClick={() => setActiveTab("cards")}
            className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              activeTab === "cards"
                ? "bg-white text-violet-900 shadow-sm"
                : "text-violet-600 hover:text-violet-900"
            }`}
          >
            Cards ({cards.length}
            {!isPro ? `/${FREE_CARD_LIMIT}` : ""})
          </button>
          <button
            onClick={() => setActiveTab("style")}
            className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              activeTab === "style"
                ? "bg-white text-violet-900 shadow-sm"
                : "text-violet-600 hover:text-violet-900"
            }`}
          >
            Style & Size
          </button>
        </div>

        {activeTab === "cards" && (
          <div className="space-y-3">
            {/* Bulk paste */}
            <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <label className="block text-sm font-semibold text-stone-800">
                Bulk Import
              </label>
              <p className="mb-2 text-xs text-stone-500">
                Paste lines of &quot;term: definition&quot; or tab-separated pairs
              </p>
              <textarea
                className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-900 placeholder-stone-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 bg-stone-50/50"
                rows={3}
                placeholder={"Photosynthesis: Converting sunlight to energy\nMitosis: Cell division process"}
                onPaste={(e) => {
                  const text = e.clipboardData.getData("text");
                  if (text.includes("\n") || text.includes("\t")) {
                    e.preventDefault();
                    handleBulkPaste(text);
                  }
                }}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val.includes("\n")) {
                    handleBulkPaste(val);
                    e.target.value = "";
                  }
                }}
              />
            </div>

            {/* Individual cards */}
            <div className="space-y-2">
              {cards.map((card, idx) => (
                <CardInput
                  key={card.id}
                  card={card}
                  index={idx}
                  onUpdate={updateCard}
                  onRemove={removeCard}
                  canRemove={cards.length > 1}
                />
              ))}
            </div>

            <button
              onClick={addCard}
              disabled={atLimit}
              className={`w-full rounded-xl border-2 border-dashed px-4 py-3 text-sm font-semibold transition-colors ${
                atLimit
                  ? "border-stone-200 text-stone-400 cursor-not-allowed"
                  : "border-violet-300 text-violet-600 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700"
              }`}
            >
              {atLimit ? (
                <span>
                  Free limit reached ({FREE_CARD_LIMIT} cards) —{" "}
                  <a href="/pricing" className="text-violet-600 underline">
                    Upgrade to Pro
                  </a>
                </span>
              ) : (
                "+ Add Card"
              )}
            </button>
          </div>
        )}

        {activeTab === "style" && (
          <div className="space-y-4">
            {/* Card size */}
            <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <label className="block text-sm font-semibold text-stone-800 mb-3">
                Card Size
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(Object.entries(CARD_SIZES) as [CardSize, typeof CARD_SIZES[CardSize]][]).map(
                  ([key, config]) => (
                    <button
                      key={key}
                      onClick={() => {
                        if (config.pro && !isPro) return;
                        setSize(key);
                      }}
                      className={`relative rounded-lg border-2 px-3 py-2 text-sm font-semibold transition-colors ${
                        size === key
                          ? "border-violet-500 bg-violet-600 text-white"
                          : config.pro && !isPro
                          ? "border-stone-200 text-stone-400 cursor-not-allowed"
                          : "border-stone-200 text-stone-700 hover:border-violet-300"
                      }`}
                    >
                      {config.label}
                      {config.pro && !isPro && (
                        <span className="absolute -right-1 -top-1 rounded-full bg-amber-400 px-1.5 py-0.5 text-[10px] font-bold text-amber-900">
                          PRO
                        </span>
                      )}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Templates */}
            <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <label className="block text-sm font-semibold text-stone-800 mb-3">
                Template
              </label>
              <TemplateGrid
                templates={TEMPLATES}
                selected={template}
                onSelect={handleSelectTemplate}
                isPro={isPro}
                freeIds={FREE_TEMPLATE_IDS}
              />
            </div>

            {/* Double-sided */}
            <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={doubleSided}
                  onChange={(e) => {
                    if (!isPro) return;
                    setDoubleSided(e.target.checked);
                  }}
                  disabled={!isPro}
                  className="h-4 w-4 rounded border-stone-300 accent-violet-600"
                />
                <span className="text-sm font-semibold text-stone-800">
                  Double-sided layout
                  {!isPro && (
                    <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                      PRO
                    </span>
                  )}
                </span>
              </label>
              <p className="ml-7 mt-1 text-xs text-stone-500">
                Back pages are mirrored for duplex printing alignment
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Right panel — preview + download */}
      <div className="space-y-4">
        <div className="sticky top-6">
          <Preview cards={validCards} size={size} template={template} isPro={isPro} />
          <button
            onClick={handleDownload}
            disabled={validCards.length === 0}
            className={`mt-4 w-full rounded-xl px-4 py-3 text-sm font-bold transition-all ${
              validCards.length === 0
                ? "bg-stone-200 text-stone-500 cursor-not-allowed"
                : "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-200"
            }`}
          >
            Download PDF ({validCards.length} card
            {validCards.length !== 1 ? "s" : ""})
          </button>
          {!isPro && (
            <p className="mt-2 text-center text-xs text-stone-500">
              Free: {FREE_CARD_LIMIT} cards, 3&quot;x5&quot; only, watermarked PDF.{" "}
              <a href="/pricing" className="text-violet-600 font-medium underline">
                Unlock everything with Pro
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
