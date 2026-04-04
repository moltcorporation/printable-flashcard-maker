import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Multiplication Flashcards — Printable Times Tables Cards",
  description:
    "Create printable multiplication flashcards for times tables 1–12. Customize colors, card sizes, and difficulty. Download PDF and drill math facts at home or school.",
  openGraph: {
    title: "Multiplication Flashcards — Printable Times Tables Cards",
    description:
      "Make custom multiplication flashcards and download as a print-ready PDF for fast math fact practice.",
    type: "website",
  },
};

const faqs = [
  {
    question: "What multiplication facts should kids learn first?",
    answer:
      "Start with the 1s, 2s, 5s, and 10s — these have simple patterns that build confidence. Then move to 3s, 4s, and 9s (the finger trick helps). Save 6s, 7s, and 8s for last since they have fewer shortcuts.",
  },
  {
    question: "How long does it take to memorize times tables?",
    answer:
      "Most students can master 1–12 times tables in 4–8 weeks with daily 10-minute flashcard sessions. Consistency matters more than session length. Mixing review of mastered facts with new ones prevents forgetting.",
  },
  {
    question: "Should I include the answer on the card?",
    answer:
      "Put the problem on the front (e.g., 7 × 8) and the answer on the back (56). This lets kids self-test without needing a partner. Our maker supports double-sided layouts so you can print front and back aligned.",
  },
];

const relatedPages = [
  { href: "/math-flashcards", label: "Math Flashcards" },
  { href: "/printable-flashcards", label: "Printable Flashcards" },
  { href: "/study-flashcards", label: "Study Flashcards" },
  { href: "/alphabet-flashcards", label: "Alphabet Flashcards" },
  { href: "/language-learning-flashcards", label: "Language Learning Flashcards" },
];

export default function MultiplicationFlashcardsPage() {
  return (
    <LandingPage
      title="Multiplication Flashcards"
      subtitle="Drill times tables with printable cards — no app needed"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <h2>Master Times Tables the Old-School Way</h2>
      <p>
        Multiplication fluency is foundational for long division, fractions, and
        algebra. Despite dozens of apps, printed flashcards remain one of the
        fastest ways to build automatic recall — no screen time, no
        distractions, just rapid-fire practice that builds real fluency.
      </p>
      <p>
        Our multiplication flashcard maker lets you generate a full set of times
        table cards in under a minute. Pick which tables to include, choose a
        card size, and download a print-ready PDF.
      </p>

      <h2>Who Uses Multiplication Flashcards</h2>
      <ul>
        <li>
          <strong>2nd–4th grade teachers</strong> — Print class sets for
          timed drills and partner practice.
        </li>
        <li>
          <strong>Homeschool parents</strong> — Create custom sets that
          match your curriculum pace.
        </li>
        <li>
          <strong>Tutors</strong> — Quickly generate targeted sets for
          the specific facts a student struggles with.
        </li>
        <li>
          <strong>Parents at home</strong> — Supplement homework with
          5-minute flashcard sessions before dinner.
        </li>
      </ul>

      <h2>Flashcard Strategies That Work</h2>
      <p>
        Separate cards into &quot;know it&quot; and &quot;still learning&quot;
        piles. Focus drill time on the smaller pile. Once a fact moves to
        &quot;know it&quot; three sessions in a row, retire it. This
        spaced-repetition approach keeps sessions short and productive — kids
        see their &quot;still learning&quot; pile shrink, which is a powerful
        motivator.
      </p>
    </LandingPage>
  );
}
