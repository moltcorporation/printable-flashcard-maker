"use client";

import { useRef, useEffect } from "react";
import { FlashCard, CardSize, CARD_SIZES, Template, FREE_CARD_LIMIT } from "../lib/types";

interface PreviewProps {
  cards: FlashCard[];
  size: CardSize;
  template: Template;
  isPro: boolean;
}

export default function Preview({ cards, size, template, isPro }: PreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sizeConfig = CARD_SIZES[size];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const displayW = canvas.clientWidth;
    // Page aspect ratio (letter: 8.5x11)
    const displayH = displayW * (11 / 8.5);
    canvas.width = displayW * dpr;
    canvas.height = displayH * dpr;
    canvas.style.height = `${displayH}px`;
    ctx.scale(dpr, dpr);

    // Scale factor from inches to canvas pixels
    const scale = (displayW - 20) / 8.5; // 20px total padding
    const offsetX = 10;
    const offsetY = 10;

    // Clear
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, displayW, displayH);

    // Draw border
    ctx.strokeStyle = "#e0d5c7";
    ctx.lineWidth = 1;
    ctx.strokeRect(offsetX, offsetY, 8.5 * scale, 11 * scale);

    const activeCards = isPro ? cards : cards.slice(0, FREE_CARD_LIMIT);
    if (activeCards.length === 0) {
      ctx.fillStyle = "#a09689";
      ctx.font = "14px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(
        "Add cards to see preview",
        displayW / 2,
        displayH / 2
      );
      return;
    }

    const marginIn = 0.5;
    const cardW = sizeConfig.widthIn * scale;
    const cardH = sizeConfig.heightIn * scale;
    const { cols, rows, cardsPerPage } = sizeConfig;
    const usableW = (8.5 - 2 * marginIn) * scale;
    const usableH = (11 - 2 * marginIn) * scale;
    const gapX = cols > 1 ? (usableW - cols * cardW) / (cols - 1) : 0;
    const gapY = rows > 1 ? (usableH - rows * cardH) / (rows - 1) : 0;
    const startX =
      offsetX + marginIn * scale + (usableW - (cols * cardW + (cols - 1) * gapX)) / 2;
    const startY =
      offsetY + marginIn * scale + (usableH - (rows * cardH + (rows - 1) * gapY)) / 2;

    const headerH = cardH * 0.15;
    const pad = 4 * (scale / 72);

    const firstPageCards = activeCards.slice(0, cardsPerPage);

    for (let i = 0; i < firstPageCards.length; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = startX + col * (cardW + gapX);
      const y = startY + row * (cardH + gapY);

      // Card background
      ctx.fillStyle = template.bgColor;
      ctx.strokeStyle = template.borderColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(x, y, cardW, cardH, 3);
      ctx.fill();
      ctx.stroke();

      // Header
      ctx.fillStyle = template.headerBg;
      ctx.beginPath();
      ctx.roundRect(x, y, cardW, headerH, [3, 3, 0, 0]);
      ctx.fill();

      // Header text
      ctx.fillStyle = template.headerText;
      ctx.font = `bold ${Math.max(8, 9 * (scale / 72))}px system-ui, sans-serif`;
      ctx.textAlign = "left";
      ctx.fillText("TERM", x + pad * 2, y + headerH - pad * 1.5);

      ctx.textAlign = "right";
      ctx.fillText(`#${i + 1}`, x + cardW - pad * 2, y + headerH - pad * 1.5);

      // Content
      ctx.fillStyle = template.textColor;
      ctx.textAlign = "left";
      const fontSize = Math.max(9, 12 * (scale / 72));
      ctx.font = `${fontSize}px system-ui, sans-serif`;
      const term = firstPageCards[i].term || "(empty)";
      const maxW = cardW - pad * 4;
      // Simple truncation for preview
      let displayText = term;
      while (ctx.measureText(displayText).width > maxW && displayText.length > 1) {
        displayText = displayText.slice(0, -1);
      }
      if (displayText !== term) displayText += "...";
      ctx.fillText(
        displayText,
        x + pad * 2,
        y + headerH + (cardH - headerH) / 2 + fontSize / 3
      );
    }

    // Watermark for free
    if (!isPro) {
      ctx.save();
      ctx.globalAlpha = 0.08;
      ctx.fillStyle = "#000000";
      ctx.font = `bold ${40 * (scale / 72)}px system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.translate(displayW / 2, displayH / 2);
      ctx.rotate(-Math.PI / 4);
      ctx.fillText("FREE", 0, 0);
      ctx.restore();
    }
  }, [cards, size, template, isPro, sizeConfig]);

  return (
    <div
      className="rounded-2xl border p-3"
      style={{ borderColor: "var(--border)", background: "var(--paper)" }}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-bold" style={{ color: "var(--primary)" }}>
          Preview — Page 1 of{" "}
          {Math.ceil(
            (isPro ? cards.length : Math.min(cards.length, FREE_CARD_LIMIT)) /
              sizeConfig.cardsPerPage
          ) * 2 || 1}
        </span>
        <span className="text-xs" style={{ color: "var(--muted-light)" }}>
          {sizeConfig.label} / {sizeConfig.cardsPerPage} per page
        </span>
      </div>
      <canvas
        ref={canvasRef}
        className="w-full rounded-xl border"
        style={{ aspectRatio: "8.5/11", borderColor: "var(--border)" }}
      />
    </div>
  );
}
