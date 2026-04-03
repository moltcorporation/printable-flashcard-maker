import FlashcardMaker from "./components/FlashcardMaker";
import ProBadge from "./components/ProBadge";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-[family-name:var(--font-geist-sans)]">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <h1 className="font-poppins text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
              Printable Flashcard Maker
            </h1>
            <p className="text-sm text-zinc-500">
              Create custom flashcards and download print-ready PDFs
            </p>
          </div>
          <ProBadge />
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-zinc-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left: Text */}
            <div>
              <h2 className="font-poppins text-3xl font-bold text-zinc-900 sm:text-4xl lg:text-5xl">
                Study smarter with
                <span className="block bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
                  custom flashcards
                </span>
              </h2>
              <p className="mt-6 text-lg text-zinc-600">
                Create beautiful, printable flashcards in seconds. Perfect for studying vocabulary, math, history, and more. Just add your terms and definitions, pick a card size, and download your PDF.
              </p>
              <ul className="mt-8 space-y-3 text-zinc-700">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>Fully customizable card sizes and layouts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>Print-ready PDF download instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>Free to use — no account or sign-up required</span>
                </li>
              </ul>
            </div>

            {/* Right: Visual Preview */}
            <div className="relative h-96 lg:h-full">
              {/* Fanned flashcards visual */}
              <div className="relative h-full w-full">
                {/* Back card */}
                <div className="absolute bottom-0 right-0 h-32 w-24 rotate-6 rounded-lg border-2 border-zinc-300 bg-white p-3 shadow-lg sm:h-40 sm:w-32">
                  <div className="h-full w-full rounded bg-gradient-to-br from-teal-50 to-teal-100"></div>
                </div>

                {/* Middle card */}
                <div className="absolute bottom-2 right-6 h-32 w-24 rotate-3 rounded-lg border-2 border-zinc-300 bg-white p-3 shadow-md sm:h-40 sm:w-32">
                  <div className="flex h-full flex-col justify-between">
                    <div className="text-xs font-semibold text-zinc-800 sm:text-sm">Photosynthesis</div>
                    <div className="text-xs text-zinc-600 sm:text-sm">The process by which plants convert sunlight into energy</div>
                  </div>
                </div>

                {/* Front card (highlighted) */}
                <div className="absolute bottom-4 right-12 h-32 w-24 rounded-lg border-2 border-teal-500 bg-gradient-to-br from-white to-teal-50 p-3 shadow-xl ring-2 ring-teal-400 ring-offset-2 sm:h-40 sm:w-32">
                  <div className="flex h-full flex-col justify-between">
                    <div className="font-poppins text-sm font-bold text-teal-600 sm:text-base">Mitochondria</div>
                    <div className="text-xs text-zinc-600 sm:text-sm">The powerhouse of the cell</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {/* Editor Section with enhanced chrome */}
        <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6">
            <h2 className="font-poppins text-2xl font-bold text-zinc-900">
              Create Your Flashcards
            </h2>
            <p className="mt-2 text-zinc-600">
              Enter your terms and definitions below, then customize and download
            </p>
          </div>
          <FlashcardMaker />
        </div>
      </main>

      <footer className="border-t border-zinc-200 bg-zinc-50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-poppins font-semibold text-zinc-900">Product</h3>
              <nav className="mt-4 space-y-2">
                <li><a href="/printable-flashcards" className="text-sm text-zinc-600 hover:text-teal-600">Printable Flashcards</a></li>
                <li><a href="/flashcard-template" className="text-sm text-zinc-600 hover:text-teal-600">Templates</a></li>
                <li><a href="/pricing" className="text-sm text-zinc-600 hover:text-teal-600">Pricing</a></li>
              </nav>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-zinc-900">Topics</h3>
              <nav className="mt-4 space-y-2">
                <li><a href="/vocabulary-flashcards" className="text-sm text-zinc-600 hover:text-teal-600">Vocabulary</a></li>
                <li><a href="/math-flashcards" className="text-sm text-zinc-600 hover:text-teal-600">Math</a></li>
                <li><a href="/study-flashcards" className="text-sm text-zinc-600 hover:text-teal-600">Study</a></li>
              </nav>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-zinc-900">For Kids</h3>
              <nav className="mt-4 space-y-2">
                <li><a href="/sight-word-flashcards" className="text-sm text-zinc-600 hover:text-teal-600">Sight Words</a></li>
              </nav>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-poppins font-semibold text-zinc-900">About</h3>
              <p className="mt-4 text-sm text-zinc-600">
                Create custom printable flashcards for studying. Free tool, no sign-up needed.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-200 pt-8">
            <p className="text-center text-sm text-zinc-600">
              © 2026 Printable Flashcard Maker. Free flashcard PDF generator.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
