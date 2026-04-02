import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Flashcard Templates — Free Printable Flashcard Designs",
  description:
    "Browse flashcard templates and create printable flashcards with custom designs. 16 templates available — 2 free, 14 Pro. Download as PDF.",
  openGraph: {
    title: "Flashcard Templates — Free Printable Flashcard Designs",
    description:
      "Choose from multiple flashcard templates and download print-ready PDFs. Free to start.",
    type: "website",
  },
};

const faqs = [
  {
    question: "How many flashcard templates are available?",
    answer:
      "There are 16 templates total. Two clean, professional templates are free. Pro unlocks 14 additional designs with color themes, bold headers, and minimalist styles.",
  },
  {
    question: "Can I customize template colors?",
    answer:
      "Pro users can customize fonts and colors on any template. Free users can choose between the two included templates as-is.",
  },
  {
    question: "Do I need to download anything?",
    answer:
      "No. Everything runs in your browser. Pick a template, enter your content, and download the PDF — no software to install.",
  },
];

const relatedPages = [
  { href: "/printable-flashcards", label: "Printable Flashcards" },
  { href: "/vocabulary-flashcards", label: "Vocabulary Flashcards" },
  { href: "/math-flashcards", label: "Math Flashcards" },
  { href: "/sight-word-flashcards", label: "Sight Word Flashcards" },
  { href: "/study-flashcards", label: "Study Flashcards" },
];

export default function FlashcardTemplatePage() {
  return (
    <LandingPage
      title="Flashcard Templates"
      subtitle="Professional flashcard designs ready to customize and print"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <h2>Choose a Template That Fits Your Style</h2>
      <p>
        A good flashcard template does two things: it makes your content easy to
        read, and it makes studying feel less like a chore. Our template library
        includes clean minimalist designs, bold color-coded layouts, and
        structured formats for different study needs.
      </p>
      <p>
        Every template is optimized for print. Card borders, spacing, and font
        sizes are calibrated so your flashcards look sharp on paper, not just
        on screen. Choose a template, enter your terms, and download a PDF that
        prints perfectly every time.
      </p>

      <h2>What You Get</h2>
      <ul>
        <li>
          <strong>2 free templates</strong> — Clean and Classic designs that
          work for any subject.
        </li>
        <li>
          <strong>14 Pro templates</strong> — Color themes, bold headers, lined
          layouts, and more for visual learners.
        </li>
        <li>
          <strong>Custom colors &amp; fonts (Pro)</strong> — Match your
          school colors, brand, or personal preference.
        </li>
      </ul>

      <h2>When Templates Matter</h2>
      <p>
        For vocabulary and language study, a template with large, clear term
        placement helps with quick recall. For science and medical terms, a
        structured layout with room for definitions keeps dense information
        readable. For young learners, colorful designs keep attention focused.
        Pick the template that matches how you study best.
      </p>
    </LandingPage>
  );
}
