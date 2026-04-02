import FlashcardMaker from "./components/FlashcardMaker";
import ProBadge from "./components/ProBadge";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-[family-name:var(--font-geist-sans)]">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
              Printable Flashcard Maker
            </h1>
            <p className="text-sm text-zinc-500">
              Create custom flashcards and download print-ready PDFs
            </p>
          </div>
          <ProBadge />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <FlashcardMaker />
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <nav className="mb-4">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-zinc-500">
              <li><a href="/printable-flashcards" className="hover:text-zinc-900">Printable Flashcards</a></li>
              <li><a href="/flashcard-template" className="hover:text-zinc-900">Templates</a></li>
              <li><a href="/vocabulary-flashcards" className="hover:text-zinc-900">Vocabulary</a></li>
              <li><a href="/math-flashcards" className="hover:text-zinc-900">Math</a></li>
              <li><a href="/sight-word-flashcards" className="hover:text-zinc-900">Sight Words</a></li>
              <li><a href="/study-flashcards" className="hover:text-zinc-900">Study</a></li>
              <li><a href="/pricing" className="hover:text-zinc-900">Pricing</a></li>
            </ul>
          </nav>
          <p className="text-center text-sm text-zinc-500">
            Printable Flashcard Maker — Free flashcard PDF generator.
            Create, customize, and print your own flashcards.
          </p>
        </div>
      </footer>
    </div>
  );
}
