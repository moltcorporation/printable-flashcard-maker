import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Study Flashcards — Printable Cards for Exam Prep & Review",
  description:
    "Create printable study flashcards for exams, certifications, and review sessions. Enter terms and definitions, download PDF, print and study anywhere.",
  openGraph: {
    title: "Study Flashcards — Printable Cards for Exam Prep",
    description:
      "Make study flashcards for any subject. Enter content, download print-ready PDFs.",
    type: "website",
  },
};

const faqs = [
  {
    question: "Are printed flashcards better than digital ones?",
    answer:
      "Studies show that handwriting and physical interaction with study materials improve retention. Printed flashcards combine the convenience of typing with the tactile benefits of paper. Plus, no app notifications to distract you mid-session.",
  },
  {
    question: "How many cards should I study at once?",
    answer:
      "Research suggests 20-30 cards per session is optimal. Break larger decks into smaller sets and rotate them. Focus more time on cards you get wrong and less on ones you already know.",
  },
  {
    question: "Can I use these for professional certifications?",
    answer:
      "Yes. The flashcard maker works for any subject — nursing boards, bar exam, PMP, real estate license, IT certifications, and more. Pro's unlimited cards let you cover entire study guides.",
  },
];

const relatedPages = [
  { href: "/printable-flashcards", label: "Printable Flashcards" },
  { href: "/flashcard-template", label: "Flashcard Templates" },
  { href: "/vocabulary-flashcards", label: "Vocabulary Flashcards" },
  { href: "/math-flashcards", label: "Math Flashcards" },
  { href: "/alphabet-flashcards", label: "Alphabet Flashcards" },
  { href: "/language-learning-flashcards", label: "Language Learning Flashcards" },
];

export default function StudyFlashcardsPage() {
  return (
    <LandingPage
      title="Study Flashcards"
      subtitle="Print flashcards for exams, certifications, and focused review"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <h2>Study Smarter with Printed Flashcards</h2>
      <p>
        Flashcards work because they force active recall — instead of passively
        re-reading notes, you test yourself on each card. Printing them takes
        it further: you can shuffle, sort into piles, carry a pocket-sized deck
        anywhere, and study without a screen.
      </p>
      <p>
        Our flashcard maker handles the formatting so you can focus on the
        content. Paste your notes, pick a template, and download a print-ready
        PDF. Cut the cards, rubber-band them, and you have a portable study
        tool that works on the bus, in the waiting room, or at the coffee shop.
      </p>

      <h2>What to Study with Flashcards</h2>
      <ul>
        <li>
          <strong>College exams</strong> — Definitions, key concepts, dates,
          and formulas for midterms and finals.
        </li>
        <li>
          <strong>Professional certifications</strong> — NCLEX, Series 7, PMP,
          CompTIA, real estate — any exam with a large pool of testable facts.
        </li>
        <li>
          <strong>Language learning</strong> — Vocabulary, verb conjugations,
          grammar rules, and common phrases.
        </li>
        <li>
          <strong>Medical &amp; nursing school</strong> — Anatomy, pharmacology,
          pathology terms, and drug interactions.
        </li>
      </ul>

      <h2>The Spaced Repetition Method</h2>
      <p>
        For maximum retention, use the Leitner system: sort cards into boxes
        based on how well you know them. Cards you get right move to a
        less-frequent review box. Cards you miss go back to daily review.
        This targets your weakest material without wasting time on what you
        already know. Printed cards make this system dead simple — just use
        separate piles or envelopes.
      </p>
    </LandingPage>
  );
}
