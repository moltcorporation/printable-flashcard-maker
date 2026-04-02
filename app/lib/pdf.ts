import { jsPDF } from "jspdf";
import {
  FlashCard,
  CardSize,
  CARD_SIZES,
  Template,
  FREE_CARD_LIMIT,
} from "./types";

const PTS_PER_IN = 72;
const PAGE_W = 8.5 * PTS_PER_IN;
const PAGE_H = 11 * PTS_PER_IN;
const MARGIN = 0.5 * PTS_PER_IN;

function wrapText(
  doc: jsPDF,
  text: string,
  maxWidth: number,
  fontSize: number
): string[] {
  doc.setFontSize(fontSize);
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (doc.getTextWidth(test) > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines.length ? lines : [""];
}

export function generatePDF(
  cards: FlashCard[],
  size: CardSize,
  template: Template,
  isPro: boolean,
  doubleSided: boolean
) {
  const sizeConfig = CARD_SIZES[size];
  const doc = new jsPDF({ orientation: "portrait", unit: "pt", format: "letter" });

  const activeCards = isPro ? cards : cards.slice(0, FREE_CARD_LIMIT);

  const cardW = sizeConfig.widthIn * PTS_PER_IN;
  const cardH = sizeConfig.heightIn * PTS_PER_IN;
  const { cols, rows, cardsPerPage } = sizeConfig;

  const usableW = PAGE_W - 2 * MARGIN;
  const usableH = PAGE_H - 2 * MARGIN;
  const gapX = cols > 1 ? (usableW - cols * cardW) / (cols - 1) : 0;
  const gapY = rows > 1 ? (usableH - rows * cardH) / (rows - 1) : 0;
  const startX = MARGIN + (usableW - (cols * cardW + (cols - 1) * gapX)) / 2;
  const startY = MARGIN + (usableH - (rows * cardH + (rows - 1) * gapY)) / 2;

  const headerH = cardH * 0.15;
  const contentPadding = 8;

  function drawCard(
    x: number,
    y: number,
    label: string,
    content: string,
    isBack: boolean
  ) {
    // Card background
    doc.setFillColor(template.bgColor);
    doc.setDrawColor(template.borderColor);
    doc.setLineWidth(1.5);
    doc.roundedRect(x, y, cardW, cardH, 4, 4, "FD");

    // Header bar
    doc.setFillColor(template.headerBg);
    doc.roundedRect(x, y, cardW, headerH, 4, 4, "F");
    // Fill the bottom corners of header
    doc.rect(x, y + headerH - 4, cardW, 4, "F");

    // Header text
    doc.setFontSize(9);
    doc.setTextColor(template.headerText);
    doc.setFont("helvetica", "bold");
    doc.text(isBack ? "DEFINITION" : "TERM", x + contentPadding, y + headerH - 6);

    // Label (card number) right-aligned
    doc.setFontSize(8);
    doc.text(label, x + cardW - contentPadding, y + headerH - 6, {
      align: "right",
    });

    // Content
    doc.setTextColor(template.textColor);
    const contentAreaH = cardH - headerH - contentPadding * 2;
    const maxContentW = cardW - contentPadding * 2;

    // Auto-size font
    let fontSize = 14;
    let lines: string[];
    do {
      lines = wrapText(doc, content, maxContentW, fontSize);
      const totalTextH = lines.length * fontSize * 1.3;
      if (totalTextH <= contentAreaH || fontSize <= 8) break;
      fontSize--;
    } while (true);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(fontSize);
    const lineHeight = fontSize * 1.3;
    const totalTextH = lines.length * lineHeight;
    const textStartY =
      y + headerH + contentPadding + (contentAreaH - totalTextH) / 2 + fontSize;

    for (let i = 0; i < lines.length; i++) {
      doc.text(lines[i], x + contentPadding, textStartY + i * lineHeight);
    }
  }

  function drawCutGuides(x: number, y: number) {
    doc.setDrawColor("#cbd5e1");
    doc.setLineWidth(0.5);
    doc.setLineDashPattern([3, 3], 0);
    const guideLen = 10;
    // corners
    const corners = [
      [x, y],
      [x + cardW, y],
      [x, y + cardH],
      [x + cardW, y + cardH],
    ];
    for (const [cx, cy] of corners) {
      doc.line(cx - guideLen, cy, cx + guideLen, cy);
      doc.line(cx, cy - guideLen, cx, cy + guideLen);
    }
    doc.setLineDashPattern([], 0);
  }

  function addWatermark() {
    if (isPro) return;
    doc.setFontSize(48);
    doc.setTextColor(200, 200, 200);
    doc.setFont("helvetica", "bold");
    doc.text("FREE", PAGE_W / 2, PAGE_H / 2, {
      align: "center",
      angle: 45,
    });
  }

  // Generate front pages
  for (let i = 0; i < activeCards.length; i++) {
    if (i > 0 && i % cardsPerPage === 0) {
      doc.addPage();
    }
    const posInPage = i % cardsPerPage;
    const col = posInPage % cols;
    const row = Math.floor(posInPage / cols);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    drawCutGuides(x, y);
    drawCard(x, y, `#${i + 1}`, activeCards[i].term, false);

    if (posInPage === cardsPerPage - 1 || i === activeCards.length - 1) {
      addWatermark();
    }
  }

  // Generate back pages (definitions) if double-sided
  if (doubleSided && isPro) {
    for (let i = 0; i < activeCards.length; i++) {
      if (i % cardsPerPage === 0) {
        doc.addPage();
      }
      const posInPage = i % cardsPerPage;
      const col = posInPage % cols;
      // Mirror columns for double-sided printing
      const mirroredCol = cols - 1 - col;
      const row = Math.floor(posInPage / cols);
      const x = startX + mirroredCol * (cardW + gapX);
      const y = startY + row * (cardH + gapY);

      drawCutGuides(x, y);
      drawCard(x, y, `#${i + 1}`, activeCards[i].definition, true);
    }
  } else {
    // Single-sided: definitions on separate pages
    for (let i = 0; i < activeCards.length; i++) {
      if (i % cardsPerPage === 0) {
        doc.addPage();
      }
      const posInPage = i % cardsPerPage;
      const col = posInPage % cols;
      const row = Math.floor(posInPage / cols);
      const x = startX + col * (cardW + gapX);
      const y = startY + row * (cardH + gapY);

      drawCutGuides(x, y);
      drawCard(x, y, `#${i + 1}`, activeCards[i].definition, true);

      if (posInPage === cardsPerPage - 1 || i === activeCards.length - 1) {
        addWatermark();
      }
    }
  }

  doc.save("flashcards.pdf");
}
