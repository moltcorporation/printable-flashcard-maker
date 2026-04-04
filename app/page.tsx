import FlashcardMaker from "./components/FlashcardMaker";
import ProBadge from "./components/ProBadge";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white sticky top-4 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="text-2xl">📚</div>
            <h1 className="text-lg font-bold tracking-tight text-zinc-900 sm:text-xl">
              Flashcard Maker
            </h1>
          </div>
          <ProBadge />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero Section */}
        <section className="py-12 sm:py-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12 items-center">
            {/* Left: Text & CTA */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-4">
                Create Flashcards That Actually Get Used
              </h2>
              <p className="text-lg text-zinc-600 mb-6">
                Print custom flashcards in seconds. No account needed. Free to start, upgrade for unlimited cards and custom designs.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="#maker"
                  className="inline-block px-6 py-3 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  Start for Free
                </a>
                <a
                  href="/pricing"
                  className="inline-block px-6 py-3 bg-white text-zinc-900 border-2 border-zinc-200 font-semibold rounded-lg hover:border-zinc-400 transition-colors"
                >
                  See Pro Features
                </a>
              </div>
              <div className="text-sm text-zinc-600 space-y-2">
                <p>✓ No credit card required</p>
                <p>✓ Download PDFs instantly</p>
                <p>✓ Print from home or school</p>
              </div>
            </div>

            {/* Right: Visual Flashcards */}
            <div className="relative h-80 sm:h-96">
              {/* Stacked flashcard visual */}
              <div className="absolute left-0 top-0 w-48 h-64 bg-white border-2 border-zinc-900 rounded-lg p-4 shadow-lg transform -rotate-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Question</p>
                  <p className="text-lg font-bold text-zinc-900 mt-2">What is the capital of France?</p>
                </div>
                <div className="text-xs text-zinc-500">Front →</div>
              </div>
              <div className="absolute left-12 top-6 w-48 h-64 bg-blue-50 border-2 border-blue-900 rounded-lg p-4 shadow-md transform rotate-3 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Answer</p>
                  <p className="text-xl font-bold text-blue-900 mt-2">Paris</p>
                </div>
                <div className="text-xs text-blue-600">Back ←</div>
              </div>
              <div className="absolute left-24 top-12 w-48 h-64 bg-amber-50 border-2 border-amber-900 rounded-lg p-4 shadow-sm transform rotate-6">
                <div className="flex items-center justify-center h-full">
                  <p className="text-sm font-semibold text-amber-900 text-center">+ Create Your Set</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 border-t border-zinc-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-8 text-center">
            Why Teachers Love It
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-zinc-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">⏱️</div>
              <h4 className="font-bold text-zinc-900 mb-2">2 Minutes</h4>
              <p className="text-sm text-zinc-600">From blank screen to printed cards</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">✏️</div>
              <h4 className="font-bold text-zinc-900 mb-2">Easy Editing</h4>
              <p className="text-sm text-zinc-600">Type terms, pick colors, download PDF</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🎨</div>
              <h4 className="font-bold text-zinc-900 mb-2">Templates</h4>
              <p className="text-sm text-zinc-600">Vocabulary, math, languages, and more</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🆓</div>
              <h4 className="font-bold text-zinc-900 mb-2">Always Free</h4>
              <p className="text-sm text-zinc-600">5 cards per set, watermarked PDF</p>
            </div>
          </div>
        </section>

        {/* Maker Component */}
        <section id="maker" className="py-12 sm:py-16">
          <FlashcardMaker />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white mt-12">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-600 mb-4">
              <li><a href="/printable-flashcards" className="hover:text-zinc-900 transition-colors">Printable Flashcards</a></li>
              <li><a href="/flashcard-template" className="hover:text-zinc-900 transition-colors">Templates</a></li>
              <li><a href="/vocabulary-flashcards" className="hover:text-zinc-900 transition-colors">Vocabulary</a></li>
              <li><a href="/math-flashcards" className="hover:text-zinc-900 transition-colors">Math</a></li>
              <li><a href="/sight-word-flashcards" className="hover:text-zinc-900 transition-colors">Sight Words</a></li>
              <li><a href="/study-flashcards" className="hover:text-zinc-900 transition-colors">Study</a></li>
              <li><a href="/alphabet-flashcards" className="hover:text-zinc-900 transition-colors">Alphabet</a></li>
              <li><a href="/multiplication-flashcards" className="hover:text-zinc-900 transition-colors">Multiplication</a></li>
              <li><a href="/language-learning-flashcards" className="hover:text-zinc-900 transition-colors">Language Learning</a></li>
              <li><a href="/pricing" className="hover:text-zinc-900 transition-colors">Pricing</a></li>
            </ul>
            <div className="text-center text-sm text-zinc-500 border-t border-zinc-200 pt-6">
              <p>
                Printable Flashcard Maker — Free flashcard PDF generator.
                Create, customize, and print your own flashcards.
              </p>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}
