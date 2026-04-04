import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Alphabet Flashcards — Printable ABC Cards for Kids",
  description:
    "Create printable alphabet flashcards with uppercase, lowercase, and picture cues. Perfect for preschool, kindergarten, and early readers. Download PDF and print.",
  openGraph: {
    title: "Alphabet Flashcards — Printable ABC Cards for Kids",
    description:
      "Make custom alphabet flashcards for early learners. Download as a print-ready PDF.",
    type: "website",
  },
};

const faqs = [
  {
    question: "What age are alphabet flashcards best for?",
    answer:
      "Alphabet flashcards work well for children ages 2–6. Toddlers can start with letter recognition, while preschoolers and kindergartners use them to practice letter sounds, phonics, and early spelling.",
  },
  {
    question: "Should I use uppercase or lowercase letters?",
    answer:
      "Start with uppercase — children encounter capital letters first in their names and environmental print. Once they recognize all 26 uppercase letters, introduce lowercase cards. Our maker lets you create both sets easily.",
  },
  {
    question: "How many letters should I practice at once?",
    answer:
      "Introduce 3–5 new letters per session. Mix in previously learned letters so kids build confidence. Short, frequent sessions (5–10 minutes) work better than long ones for young learners.",
  },
];

const relatedPages = [
  { href: "/printable-flashcards", label: "Printable Flashcards" },
  { href: "/sight-word-flashcards", label: "Sight Word Flashcards" },
  { href: "/vocabulary-flashcards", label: "Vocabulary Flashcards" },
  { href: "/multiplication-flashcards", label: "Multiplication Flashcards" },
  { href: "/language-learning-flashcards", label: "Language Learning Flashcards" },
];

export default function AlphabetFlashcardsPage() {
  return (
    <LandingPage
      title="Alphabet Flashcards"
      subtitle="Printable ABC cards that make letter learning hands-on and fun"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <h2>Give Kids a Head Start with Printed ABC Cards</h2>
      <p>
        Letter recognition is the single strongest predictor of early reading
        success. Physical flashcards let young children touch, sort, and arrange
        letters — building motor skills alongside literacy. Our alphabet
        flashcard maker creates clean, print-ready PDF cards in seconds so
        parents and teachers can focus on learning, not formatting.
      </p>

      <h2>How Parents and Teachers Use These</h2>
      <ul>
        <li>
          <strong>Letter-of-the-week drills</strong> — Print a small set each
          week and pin them to a classroom wall or fridge.
        </li>
        <li>
          <strong>Matching games</strong> — Print two copies and play
          memory-match with uppercase and lowercase pairs.
        </li>
        <li>
          <strong>Phonics practice</strong> — Put the letter on the front and
          a word starting with that letter on the back.
        </li>
        <li>
          <strong>Name spelling</strong> — Pull out just the letters in a
          child&apos;s name for a personalized activity.
        </li>
      </ul>

      <h2>Tips for Teaching the Alphabet with Flashcards</h2>
      <p>
        Teach letter names and sounds together — research shows this dual
        approach speeds up reading readiness. Use consistent fonts so kids
        aren&apos;t confused by stylistic differences. Laminate cards for
        durability if they&apos;ll be handled daily. And keep sessions playful:
        flashcards work best when they feel like a game, not a test.
      </p>
    </LandingPage>
  );
}
