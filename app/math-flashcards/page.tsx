import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Math Flashcards — Printable Math Fact Cards for Practice",
  description:
    "Create printable math flashcards for multiplication, division, addition, and subtraction. Enter problems and answers, download PDF, print and drill.",
  openGraph: {
    title: "Math Flashcards — Printable Math Fact Cards",
    description:
      "Make math flashcards for any operation. Enter problems, download print-ready PDFs.",
    type: "website",
  },
};

const faqs = [
  {
    question: "Can I make multiplication table flashcards?",
    answer:
      "Yes. Enter each multiplication fact as a term (e.g., '7 × 8') with the answer as the definition ('56'). Use bulk import to paste an entire times table at once.",
  },
  {
    question: "What math levels are these good for?",
    answer:
      "Any level. Use them for basic addition facts in kindergarten, multiplication drills in elementary school, fraction practice in middle school, or formula review in algebra and beyond.",
  },
  {
    question: "Can I include math symbols?",
    answer:
      "Yes. Standard keyboard symbols (+, -, ×, ÷, =, ², √) all render correctly on the cards and in the PDF output.",
  },
];

const relatedPages = [
  { href: "/printable-flashcards", label: "Printable Flashcards" },
  { href: "/flashcard-template", label: "Flashcard Templates" },
  { href: "/vocabulary-flashcards", label: "Vocabulary Flashcards" },
  { href: "/sight-word-flashcards", label: "Sight Word Flashcards" },
  { href: "/study-flashcards", label: "Study Flashcards" },
];

export default function MathFlashcardsPage() {
  return (
    <LandingPage
      title="Math Flashcards"
      subtitle="Print math fact cards for fast, focused practice"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <h2>Build Math Fluency with Printed Flashcards</h2>
      <p>
        Math fact fluency — the ability to recall basic operations quickly and
        accurately — is the foundation for everything from fractions to algebra.
        Printed flashcards are a time-tested way to build that speed.
        No app notifications, no game mechanics — just focused repetition
        that works.
      </p>
      <p>
        Type in the problems you want to practice, set the answer on the back,
        and print a clean PDF. Shuffle the deck, drill daily, and watch
        response times drop.
      </p>

      <h2>What to Put on Your Math Flashcards</h2>
      <ul>
        <li>
          <strong>Addition &amp; subtraction facts</strong> — Build
          automaticity for single-digit operations that underpin mental math.
        </li>
        <li>
          <strong>Multiplication tables</strong> — The classic flashcard use
          case. Paste an entire times table using bulk import.
        </li>
        <li>
          <strong>Division facts</strong> — Pair with multiplication for
          inverse-operation drilling.
        </li>
        <li>
          <strong>Formulas &amp; equations</strong> — Put the formula name on
          front, the formula on back. Great for geometry, physics, or
          statistics review.
        </li>
      </ul>

      <h2>Tips for Math Flashcard Drills</h2>
      <p>
        Start with the facts your student finds hardest — don&apos;t waste time on
        ones they already know. Sort cards into &ldquo;got it&rdquo; and &ldquo;need
        practice&rdquo; piles. Aim for short daily sessions (5-10 minutes) rather
        than one long weekly cram. For young kids, pair the cards with physical
        objects for concrete understanding before moving to abstract recall.
      </p>
    </LandingPage>
  );
}
