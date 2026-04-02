import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Printable Flashcards — Free PDF Flashcard Generator",
  description:
    "Create and download printable flashcards as PDF files. Choose card sizes, pick templates, and print at home. No sign-up required.",
  openGraph: {
    title: "Printable Flashcards — Free PDF Flashcard Generator",
    description:
      "Create printable flashcards and download them as print-ready PDFs. Free, no account needed.",
    type: "website",
  },
};

const faqs = [
  {
    question: "How do I make printable flashcards?",
    answer:
      "Enter your terms and definitions in the editor, choose a card size and template, then click Download PDF. Print the PDF at home on cardstock or regular paper and cut along the guides.",
  },
  {
    question: "What card sizes are available?",
    answer:
      'Free users get standard 3"x5" cards. Pro unlocks 4"x6" and A6 sizes, plus double-sided layouts for duplex printing.',
  },
  {
    question: "Can I print flashcards without an account?",
    answer:
      "Yes. The free tier works instantly with no sign-up. You can create up to 5 cards per set, choose from 2 templates, and download a watermarked PDF right away.",
  },
];

const relatedPages = [
  { href: "/flashcard-template", label: "Flashcard Templates" },
  { href: "/vocabulary-flashcards", label: "Vocabulary Flashcards" },
  { href: "/math-flashcards", label: "Math Flashcards" },
  { href: "/sight-word-flashcards", label: "Sight Word Flashcards" },
  { href: "/study-flashcards", label: "Study Flashcards" },
];

export default function PrintableFlashcardsPage() {
  return (
    <LandingPage
      title="Printable Flashcards"
      subtitle="Create custom flashcards and download print-ready PDFs in seconds"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <h2>The Fastest Way to Make Printable Flashcards</h2>
      <p>
        Flashcards are one of the most effective study tools, and printing them
        on paper makes them portable, distraction-free, and easy to shuffle.
        Our flashcard maker lets you type in your terms and definitions, pick a
        card size and style, and download a perfectly formatted PDF ready for
        your printer.
      </p>
      <p>
        Whether you need flashcards for a classroom vocabulary quiz, a nursing
        exam, language learning, or just everyday memorization, you can go from
        a blank screen to printed cards in under two minutes. No account, no
        install, no cost.
      </p>

      <h2>How It Works</h2>
      <ol>
        <li>
          <strong>Enter your content</strong> — Type term/definition pairs one
          at a time, or paste a whole list (tab-separated or colon-separated).
        </li>
        <li>
          <strong>Choose your style</strong> — Pick a card size, select a
          template, and customize colors if you have Pro.
        </li>
        <li>
          <strong>Download &amp; print</strong> — Hit &ldquo;Download
          PDF&rdquo; and print on cardstock or regular paper. Cut along the
          guides and start studying.
        </li>
      </ol>

      <h2>Free vs. Pro</h2>
      <p>
        The free tier gives you 5 cards per set, one card size, and two clean
        templates — more than enough for a quick quiz or review session.
        Upgrade to Pro for unlimited cards, all sizes including 4&quot;x6&quot;
        and A6, 16 premium templates, double-sided printing, custom fonts and
        colors, and watermark-free PDFs.
      </p>
    </LandingPage>
  );
}
