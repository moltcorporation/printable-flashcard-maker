import FlashcardMaker from "./components/FlashcardMaker";
import ProBadge from "./components/ProBadge";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f5] font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="bg-[#2d1b69] text-white shadow-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-400 to-fuchsia-500 flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">
                Printable Flashcard Maker
              </h1>
              <p className="text-xs text-violet-300">
                Create custom flashcards &amp; download print-ready PDFs
              </p>
            </div>
          </div>
          <ProBadge />
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-b from-[#2d1b69] to-[#3d2b7a] pb-8 pt-2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center py-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Study smarter with custom flashcards
          </h2>
          <p className="mt-2 text-violet-200 text-sm sm:text-base max-w-lg mx-auto">
            Type your terms, pick a style, and download a print-ready PDF. Perfect for students, teachers, and self-learners.
          </p>
          <div className="flex items-center justify-center gap-5 mt-4 text-xs text-violet-300">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              100% free to start
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              No signup needed
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Instant PDF download
            </span>
          </div>
        </div>
      </div>

      {/* Main Tool */}
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 -mt-4">
        <FlashcardMaker />
      </main>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-xl font-extrabold text-stone-900">Why use Printable Flashcard Maker?</h2>
          <p className="text-sm text-stone-500 mt-1">The fastest way to go from words to printed flashcards</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "Multiple Card Sizes",
              desc: "Choose from 3\"x5\", 4\"x6\", or custom sizes. Cards are formatted for clean cutting with guides on every page.",
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                </svg>
              ),
            },
            {
              title: "Bulk Import",
              desc: "Paste a list of term:definition pairs and instantly create dozens of flashcards. Supports tab-separated and colon-separated formats.",
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
            },
            {
              title: "Beautiful Templates",
              desc: "Pick from clean, modern, bold, or pastel card designs. Pro users get additional premium templates and custom colors.",
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              ),
            },
            {
              title: "Double-Sided Printing",
              desc: "Pro feature: generate back pages mirrored for perfect duplex printing alignment. Terms on front, definitions on back.",
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              ),
            },
            {
              title: "Privacy First",
              desc: "Your flashcards stay in your browser. PDFs are generated client-side — nothing is uploaded to any server.",
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
            },
            {
              title: "For Every Subject",
              desc: "Vocabulary, math facts, sight words, science terms, foreign languages — if you can write it on a card, we can print it.",
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ),
            },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center mb-3">
                {f.icon}
              </div>
              <h3 className="text-sm font-bold text-stone-900">{f.title}</h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white mt-4">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <nav className="mb-4">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-stone-500">
              <li><a href="/printable-flashcards" className="hover:text-violet-700 transition-colors">Printable Flashcards</a></li>
              <li><a href="/flashcard-template" className="hover:text-violet-700 transition-colors">Templates</a></li>
              <li><a href="/vocabulary-flashcards" className="hover:text-violet-700 transition-colors">Vocabulary</a></li>
              <li><a href="/math-flashcards" className="hover:text-violet-700 transition-colors">Math</a></li>
              <li><a href="/sight-word-flashcards" className="hover:text-violet-700 transition-colors">Sight Words</a></li>
              <li><a href="/study-flashcards" className="hover:text-violet-700 transition-colors">Study</a></li>
              <li><a href="/pricing" className="hover:text-violet-700 transition-colors">Pricing</a></li>
            </ul>
          </nav>
          <p className="text-center text-sm text-stone-400">
            Printable Flashcard Maker &mdash; Free flashcard PDF generator for students and teachers
          </p>
        </div>
      </footer>
    </div>
  );
}
