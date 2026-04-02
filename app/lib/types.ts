export interface FlashCard {
  id: string;
  term: string;
  definition: string;
}

export type CardSize = "3x5" | "4x6" | "A6";

export interface CardSizeConfig {
  label: string;
  widthIn: number;
  heightIn: number;
  cardsPerPage: number;
  cols: number;
  rows: number;
  pro: boolean;
}

export interface Template {
  id: string;
  name: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  headerBg: string;
  headerText: string;
  pro: boolean;
}

export const CARD_SIZES: Record<CardSize, CardSizeConfig> = {
  "3x5": {
    label: '3" x 5"',
    widthIn: 5,
    heightIn: 3,
    cardsPerPage: 4,
    cols: 2,
    rows: 2,
    pro: false,
  },
  "4x6": {
    label: '4" x 6"',
    widthIn: 6,
    heightIn: 4,
    cardsPerPage: 2,
    cols: 1,
    rows: 2,
    pro: true,
  },
  A6: {
    label: "A6 (105x148mm)",
    widthIn: 5.83,
    heightIn: 4.13,
    cardsPerPage: 2,
    cols: 1,
    rows: 2,
    pro: true,
  },
};

export const TEMPLATES: Template[] = [
  {
    id: "classic",
    name: "Classic",
    borderColor: "#d4d4d8",
    bgColor: "#ffffff",
    textColor: "#18181b",
    headerBg: "#f4f4f5",
    headerText: "#3f3f46",
    pro: false,
  },
  {
    id: "bold",
    name: "Bold",
    borderColor: "#18181b",
    bgColor: "#ffffff",
    textColor: "#18181b",
    headerBg: "#18181b",
    headerText: "#ffffff",
    pro: false,
  },
  {
    id: "ocean",
    name: "Ocean",
    borderColor: "#0284c7",
    bgColor: "#f0f9ff",
    textColor: "#0c4a6e",
    headerBg: "#0284c7",
    headerText: "#ffffff",
    pro: true,
  },
  {
    id: "forest",
    name: "Forest",
    borderColor: "#16a34a",
    bgColor: "#f0fdf4",
    textColor: "#14532d",
    headerBg: "#16a34a",
    headerText: "#ffffff",
    pro: true,
  },
  {
    id: "sunset",
    name: "Sunset",
    borderColor: "#ea580c",
    bgColor: "#fff7ed",
    textColor: "#7c2d12",
    headerBg: "#ea580c",
    headerText: "#ffffff",
    pro: true,
  },
  {
    id: "lavender",
    name: "Lavender",
    borderColor: "#7c3aed",
    bgColor: "#faf5ff",
    textColor: "#3b0764",
    headerBg: "#7c3aed",
    headerText: "#ffffff",
    pro: true,
  },
  {
    id: "rose",
    name: "Rose",
    borderColor: "#e11d48",
    bgColor: "#fff1f2",
    textColor: "#881337",
    headerBg: "#e11d48",
    headerText: "#ffffff",
    pro: true,
  },
  {
    id: "slate",
    name: "Slate",
    borderColor: "#475569",
    bgColor: "#f8fafc",
    textColor: "#1e293b",
    headerBg: "#475569",
    headerText: "#ffffff",
    pro: true,
  },
  {
    id: "amber",
    name: "Amber",
    borderColor: "#d97706",
    bgColor: "#fffbeb",
    textColor: "#78350f",
    headerBg: "#d97706",
    headerText: "#ffffff",
    pro: true,
  },
  {
    id: "teal",
    name: "Teal",
    borderColor: "#0d9488",
    bgColor: "#f0fdfa",
    textColor: "#134e4a",
    headerBg: "#0d9488",
    headerText: "#ffffff",
    pro: true,
  },
  {
    id: "indigo",
    name: "Indigo",
    borderColor: "#4f46e5",
    bgColor: "#eef2ff",
    textColor: "#312e81",
    headerBg: "#4f46e5",
    headerText: "#ffffff",
    pro: true,
  },
  {
    id: "coral",
    name: "Coral",
    borderColor: "#f43f5e",
    bgColor: "#fff1f2",
    textColor: "#9f1239",
    headerBg: "#f43f5e",
    headerText: "#ffffff",
    pro: true,
  },
  {
    id: "mint",
    name: "Mint",
    borderColor: "#10b981",
    bgColor: "#ecfdf5",
    textColor: "#064e3b",
    headerBg: "#10b981",
    headerText: "#ffffff",
    pro: true,
  },
  {
    id: "charcoal",
    name: "Charcoal",
    borderColor: "#27272a",
    bgColor: "#27272a",
    textColor: "#e4e4e7",
    headerBg: "#18181b",
    headerText: "#fafafa",
    pro: true,
  },
  {
    id: "sky",
    name: "Sky",
    borderColor: "#0ea5e9",
    bgColor: "#f0f9ff",
    textColor: "#075985",
    headerBg: "#0ea5e9",
    headerText: "#ffffff",
    pro: true,
  },
  {
    id: "berry",
    name: "Berry",
    borderColor: "#a855f7",
    bgColor: "#faf5ff",
    textColor: "#581c87",
    headerBg: "#a855f7",
    headerText: "#ffffff",
    pro: true,
  },
];

export const FREE_CARD_LIMIT = 5;
export const FREE_TEMPLATE_IDS = ["classic", "bold"];
