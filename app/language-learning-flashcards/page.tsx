import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Language Learning Flashcards — Printable Bilingual Cards",
  description:
    "Create printable flashcards for learning Spanish, French, Japanese, and any language. Target word on front, translation on back. Download PDF and study anywhere.",
  openGraph: {
    title: "Language Learning Flashcards — Printable Bilingual Cards",
    description:
      "Make bilingual flashcards for any language pair. Download as a print-ready PDF for offline study.",
    type: "website",
  },
};

const faqs = [
  {
    question: "What should I put on each side of a language flashcard?",
    answer:
      "Put the target language word or phrase on the front and the translation plus a short example sentence on the back. Including context helps you remember how the word is actually used, not just its dictionary meaning.",
  },
  {
    question: "How many new words should I learn per day?",
    answer:
      "10–15 new words per day is sustainable for most adult learners. Review yesterday's cards before adding new ones. If you're consistently forgetting more than 20% during review, slow down — retention matters more than volume.",
  },
  {
    question: "Can I use this for non-Latin scripts like Japanese or Arabic?",
    answer:
      "Yes. Enter characters in any script as your term text. For languages like Japanese, you might put kanji on the front with hiragana reading and English meaning on the back. The PDF preserves Unicode characters correctly.",
  },
];

const relatedPages = [
  { href: "/vocabulary-flashcards", label: "Vocabulary Flashcards" },
  { href: "/printable-flashcards", label: "Printable Flashcards" },
  { href: "/alphabet-flashcards", label: "Alphabet Flashcards" },
  { href: "/study-flashcards", label: "Study Flashcards" },
  { href: "/flashcard-template", label: "Flashcard Templates" },
];

export default function LanguageLearningFlashcardsPage() {
  return (
    <LandingPage
      title="Language Learning Flashcards"
      subtitle="Printable bilingual cards for mastering any language"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <h2>The Fastest Path to Vocabulary Retention</h2>
      <p>
        Flashcards have been the backbone of language learning for decades
        because they work. Physical cards outperform apps for many learners —
        the tactile act of flipping, sorting, and physically separating
        &quot;known&quot; from &quot;unknown&quot; engages more of your brain
        than tapping a screen.
      </p>
      <p>
        Our flashcard maker handles any language pair. Type in your target
        language on one side, your native language on the other, and download a
        print-ready PDF. No account required.
      </p>

      <h2>Popular Use Cases</h2>
      <ul>
        <li>
          <strong>Spanish class vocabulary</strong> — Create weekly word
          lists that match your textbook chapters.
        </li>
        <li>
          <strong>Japanese kanji practice</strong> — Put the kanji on
          front, reading and meaning on back.
        </li>
        <li>
          <strong>Travel phrase cards</strong> — Print pocket-sized cards
          with essential phrases before a trip.
        </li>
        <li>
          <strong>ESL classroom sets</strong> — Teachers can print cards
          for the whole class with thematic word groups.
        </li>
      </ul>

      <h2>Study Techniques for Language Flashcards</h2>
      <p>
        Use the Leitner system: sort cards into boxes based on how well you know
        them. Cards you get right move to a less-frequent review box. Cards you
        miss go back to daily review. This natural spaced repetition ensures you
        spend time where it counts. Print fresh sets as you advance — retiring
        mastered cards keeps your active deck manageable and sessions focused.
      </p>
    </LandingPage>
  );
}
