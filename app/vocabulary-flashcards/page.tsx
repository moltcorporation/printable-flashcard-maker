import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Vocabulary Flashcards — Printable Vocab Cards for Any Subject",
  description:
    "Make printable vocabulary flashcards for classroom quizzes, language learning, SAT prep, and more. Enter word lists, download PDF, print and study.",
  openGraph: {
    title: "Vocabulary Flashcards — Printable Vocab Cards",
    description:
      "Create vocabulary flashcards from any word list and download as a print-ready PDF.",
    type: "website",
  },
};

const faqs = [
  {
    question: "How do I make vocabulary flashcards from a word list?",
    answer:
      "Paste your word list into the bulk import area using the format 'word: definition' (one per line). The maker will create a card for each pair automatically. You can also add cards one at a time.",
  },
  {
    question: "Can I use this for SAT or GRE vocabulary?",
    answer:
      "Absolutely. Enter SAT/GRE words and their definitions, download the PDF, and use the printed cards for spaced repetition. Pro gives you unlimited cards per set for large vocab lists.",
  },
  {
    question: "What about foreign language vocabulary?",
    answer:
      "Yes — enter the foreign word as the term and the translation as the definition. Works for Spanish, French, Mandarin (romanized), or any language. Pro's double-sided mode is great for bilingual cards.",
  },
];

const relatedPages = [
  { href: "/printable-flashcards", label: "Printable Flashcards" },
  { href: "/flashcard-template", label: "Flashcard Templates" },
  { href: "/math-flashcards", label: "Math Flashcards" },
  { href: "/sight-word-flashcards", label: "Sight Word Flashcards" },
  { href: "/study-flashcards", label: "Study Flashcards" },
];

export default function VocabularyFlashcardsPage() {
  return (
    <LandingPage
      title="Vocabulary Flashcards"
      subtitle="Turn any word list into printable flashcards in seconds"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <h2>Build Vocabulary the Proven Way</h2>
      <p>
        Research consistently shows that flashcards combined with spaced
        repetition are one of the most effective methods for learning new
        vocabulary. Printed cards have an edge over apps — no distractions, no
        battery drain, and the physical act of shuffling and sorting reinforces
        memory.
      </p>
      <p>
        Our vocabulary flashcard maker takes the tedious formatting out of the
        process. Paste a word list, pick a style, and print. You spend your time
        studying, not wrestling with margins and font sizes.
      </p>

      <h2>Perfect for Every Vocabulary Need</h2>
      <ul>
        <li>
          <strong>Classroom vocab quizzes</strong> — Teachers can create a
          set in minutes and print copies for the whole class.
        </li>
        <li>
          <strong>SAT &amp; GRE prep</strong> — Load up high-frequency
          test words and study on the go.
        </li>
        <li>
          <strong>Language learning</strong> — Make bilingual flashcards
          with the target word on one side and translation on the other.
        </li>
        <li>
          <strong>Medical &amp; legal terminology</strong> — Dense
          definitions stay readable with our print-optimized templates.
        </li>
      </ul>

      <h2>Tips for Effective Vocabulary Flashcards</h2>
      <p>
        Keep definitions short — one clear sentence works better than a
        paragraph. Include an example sentence when the word has multiple
        meanings. Group cards by theme or difficulty level. Review in short
        sessions (15-20 minutes) rather than marathon cramming.
      </p>
    </LandingPage>
  );
}
