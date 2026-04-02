import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Sight Word Flashcards — Printable Cards for Early Readers",
  description:
    "Make printable sight word flashcards for kindergarten and first grade. Enter Dolch or Fry words, download PDF, print and practice reading.",
  openGraph: {
    title: "Sight Word Flashcards — Printable Cards for Early Readers",
    description:
      "Create sight word flashcards for early readers. Enter words, download print-ready PDFs.",
    type: "website",
  },
};

const faqs = [
  {
    question: "What are sight words?",
    answer:
      "Sight words (also called high-frequency words) are common words that young readers learn to recognize instantly by sight, without sounding them out. Examples include 'the', 'and', 'is', 'was', and 'you'. The Dolch and Fry word lists are the most widely used collections.",
  },
  {
    question: "How many sight words should I put on each set?",
    answer:
      "Start with 5 words per set for pre-K and kindergarten. For first graders, 10-15 words per set works well. The free tier supports 5 cards — perfect for a beginner set. Pro gives you unlimited cards for larger Dolch or Fry lists.",
  },
  {
    question: "Should I include definitions for sight words?",
    answer:
      "For very young learners, use the word as both the term and definition (so the card shows just the word, large and clear). For older kids, put the word on front and a simple sentence using it on back.",
  },
];

const relatedPages = [
  { href: "/printable-flashcards", label: "Printable Flashcards" },
  { href: "/flashcard-template", label: "Flashcard Templates" },
  { href: "/vocabulary-flashcards", label: "Vocabulary Flashcards" },
  { href: "/math-flashcards", label: "Math Flashcards" },
  { href: "/study-flashcards", label: "Study Flashcards" },
];

export default function SightWordFlashcardsPage() {
  return (
    <LandingPage
      title="Sight Word Flashcards"
      subtitle="Printable flashcards for early readers learning high-frequency words"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <h2>Help Early Readers Build Confidence</h2>
      <p>
        Sight words make up 50-75% of the text in early children&apos;s books.
        When a child can recognize these words instantly, reading becomes
        smoother and more enjoyable. Printed flashcards are one of the
        simplest, most effective tools for building that recognition — a few
        minutes of daily practice makes a measurable difference.
      </p>
      <p>
        Our flashcard maker lets parents and teachers create custom sight word
        sets in seconds. Type in the words for this week&apos;s lesson, download
        the PDF, and print. No cutting cardboard, no handwriting — just clean,
        consistent cards ready to use.
      </p>

      <h2>How to Use Sight Word Flashcards</h2>
      <ul>
        <li>
          <strong>Start small</strong> — Introduce 3-5 new words at a time.
          Add more only when the current set is solid.
        </li>
        <li>
          <strong>Make it a game</strong> — Spread cards face-down for a
          memory matching game. Time how fast they can read through the deck.
        </li>
        <li>
          <strong>Review daily</strong> — Quick 3-5 minute sessions before
          bedtime or after breakfast build lasting recognition.
        </li>
        <li>
          <strong>Celebrate progress</strong> — Let kids move mastered cards
          to a &ldquo;done&rdquo; pile so they can see how many they know.
        </li>
      </ul>

      <h2>Dolch vs. Fry Word Lists</h2>
      <p>
        The Dolch list contains 220 service words plus 95 nouns, organized by
        grade level (pre-K through third grade). The Fry list contains
        1,000 words ranked by frequency. Both are widely used — check which one
        your child&apos;s school follows, or start with the Dolch pre-primer list
        for the youngest learners.
      </p>
    </LandingPage>
  );
}
