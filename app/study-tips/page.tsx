import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Study Tips with Flashcards — How to Study Effectively",
  description:
    "Learn the best flashcard study techniques: spaced repetition, active recall, Leitner method, and more. Create printable flashcards and study smarter.",
  openGraph: {
    title: "Study Tips with Flashcards — How to Study Effectively",
    description:
      "Master effective study techniques with printable flashcards. Spaced repetition, active recall, and proven methods.",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is the best way to study with flashcards?",
    answer:
      "Use active recall — look at the question side, try to answer from memory, then flip to check. Don't just read both sides passively. Combine this with spaced repetition: review cards you struggle with more often, and gradually space out cards you know well.",
  },
  {
    question: "How many flashcards should I study per session?",
    answer:
      "Start with 15–25 new cards per session. Research shows smaller batches with frequent review outperform large cramming sessions. Add 10–15 new cards daily while reviewing previous ones.",
  },
  {
    question: "What is the Leitner system?",
    answer:
      "The Leitner system sorts flashcards into boxes based on how well you know them. Cards you get wrong go to Box 1 (review daily). Cards you get right move up to Box 2 (every 2 days), Box 3 (every 4 days), etc. This automates spaced repetition with physical cards.",
  },
  {
    question: "Should I handwrite or print flashcards?",
    answer:
      "Both work. Handwriting helps with initial encoding (the act of writing aids memory). Printed flashcards are faster to create in bulk and look cleaner. For best results, type them into our maker and print, then add handwritten notes or highlights.",
  },
  {
    question: "How far in advance should I start using flashcards for a test?",
    answer:
      "Start at least 2 weeks before a test for best results. Spaced repetition needs time to work — cramming the night before with flashcards defeats their purpose. The earlier you start, the less time you need per session.",
  },
];

const relatedPages = [
  { href: "/study-flashcards", label: "Study Flashcards" },
  { href: "/vocabulary-flashcards", label: "Vocabulary Flashcards" },
  { href: "/multiplication-flashcards", label: "Multiplication Flashcards" },
  { href: "/alphabet-flashcards", label: "Alphabet Flashcards" },
  { href: "/language-learning-flashcards", label: "Language Learning" },
];

export default function StudyTipsPage() {
  return (
    <LandingPage
      title="Study Tips: How to Use Flashcards Effectively"
      subtitle="Proven techniques to memorize faster, retain longer, and ace your exams using printable flashcards."
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <h2>Why Flashcards Work</h2>
      <p>
        Flashcards leverage two of the most powerful learning principles in cognitive science:
        <strong> active recall</strong> (retrieving information from memory strengthens it) and
        <strong> spaced repetition</strong> (reviewing at increasing intervals prevents forgetting).
        Together, these techniques can cut your study time in half while improving long-term retention.
      </p>

      <h2>The Leitner Method</h2>
      <p>
        The Leitner system is the most popular flashcard study method. Sort your printed cards into
        3–5 piles:
      </p>
      <ul>
        <li><strong>Pile 1 (Daily):</strong> New cards and cards you got wrong</li>
        <li><strong>Pile 2 (Every 2 days):</strong> Cards you got right once</li>
        <li><strong>Pile 3 (Every 4 days):</strong> Cards you got right twice in a row</li>
        <li><strong>Pile 4 (Weekly):</strong> Cards you know well</li>
        <li><strong>Pile 5 (Before the test):</strong> Cards you&apos;ve mastered</li>
      </ul>
      <p>
        When you get a card wrong, it goes back to Pile 1. This ensures you spend the most time
        on your weakest material.
      </p>

      <h2>Best Practices for Creating Flashcards</h2>
      <ul>
        <li><strong>One concept per card.</strong> Don&apos;t cram multiple facts onto one card.</li>
        <li><strong>Keep it short.</strong> Questions and answers should be concise — 1–2 sentences max.</li>
        <li><strong>Use your own words.</strong> Paraphrasing forces you to understand the material.</li>
        <li><strong>Add context.</strong> Include examples or mnemonics to make cards memorable.</li>
        <li><strong>Mix subjects.</strong> Interleaving different topics improves recall more than studying one subject at a time.</li>
      </ul>

      <h2>Ready to Create Your Study Cards?</h2>
      <p>
        Our free flashcard maker lets you type your content, customize card size and style,
        and download a print-ready PDF in seconds. No account required.
      </p>
    </LandingPage>
  );
}
