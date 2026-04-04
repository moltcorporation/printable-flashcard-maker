import FlashcardMaker from "./components/FlashcardMaker";
import ProBadge from "./components/ProBadge";

function FlipCard({
  front,
  back,
  color,
  rotation,
  delay,
}: {
  front: string;
  back: string;
  color: string;
  rotation: string;
  delay: string;
}) {
  return (
    <div
      className={`group perspective-[600px] ${rotation}`}
      style={{ animationDelay: delay }}
    >
      <div className="relative w-44 h-28 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div
          className="absolute inset-0 rounded-xl border-2 p-4 flex flex-col justify-center [backface-visibility:hidden] shadow-md"
          style={{
            borderColor: color,
            background: `linear-gradient(145deg, #fffcf8, #f8f3ec)`,
          }}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color }}>
            Term
          </p>
          <p className="text-sm font-bold text-[#2d2a26] leading-snug">{front}</p>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl border-2 p-4 flex flex-col justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-md"
          style={{
            borderColor: color,
            background: `linear-gradient(145deg, ${color}15, ${color}08)`,
          }}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color }}>
            Answer
          </p>
          <p className="text-sm font-semibold leading-snug" style={{ color: `${color}dd` }}>
            {back}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]" style={{ background: "var(--background)" }}>
      {/* Gradient accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#0d7377] via-[#e8a838] to-[#6b8f71] fixed top-0 left-0 right-0 z-50" />

      {/* Header */}
      <header className="border-b sticky top-1 z-40" style={{ borderColor: "var(--border)", background: "var(--paper)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0d7377] to-[#095c5f] flex items-center justify-center shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="16" height="14" rx="2" />
                <rect x="6" y="6" width="16" height="14" rx="2" fill="white" fillOpacity="0.3" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
                Flashcard Maker
              </h1>
              <p className="text-[11px] font-medium -mt-0.5" style={{ color: "var(--muted-light)" }}>
                Print-ready PDFs in seconds
              </p>
            </div>
          </div>
          <ProBadge />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero Section */}
        <section className="py-14 sm:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: Text & CTA */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold mb-6" style={{ background: "var(--primary-light)", color: "var(--primary)" }}>
                <span className="w-2 h-2 rounded-full bg-[#0d7377] animate-pulse" />
                100% free to start
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5" style={{ color: "var(--foreground)" }}>
                Flashcards that
                <span className="block bg-gradient-to-r from-[#0d7377] to-[#0d9488] bg-clip-text text-transparent">
                  actually get printed
                </span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                Type your terms, pick a style, download a print-ready PDF.
                Cut along the lines and start studying. No sign-up, no fluff.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="#maker"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#0d7377] to-[#0d9488] text-white font-bold rounded-xl hover:from-[#095c5f] hover:to-[#0d7377] transition-all shadow-lg shadow-[#0d737730]"
                >
                  Make Flashcards
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center px-6 py-3.5 font-semibold rounded-xl transition-all border-2"
                  style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--paper)" }}
                >
                  See Pro Features
                </a>
              </div>
              <div className="flex gap-6 text-sm" style={{ color: "var(--muted)" }}>
                <span className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d7377" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  No account needed
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d7377" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  Instant PDF
                </span>
              </div>
            </div>

            {/* Right: Interactive flip cards */}
            <div className="relative hidden sm:flex flex-col items-center justify-center min-h-[340px]">
              {/* Background decoration */}
              <div className="absolute inset-0 rounded-3xl opacity-40" style={{ background: "radial-gradient(circle at 60% 40%, var(--primary-light), transparent 70%)" }} />
              <div className="absolute inset-0 rounded-3xl opacity-30" style={{ background: "radial-gradient(circle at 30% 70%, var(--accent-light), transparent 60%)" }} />

              <p className="text-xs font-semibold mb-4 text-center" style={{ color: "var(--muted-light)" }}>
                Hover to flip
              </p>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <FlipCard
                  front="Photosynthesis"
                  back="Plants convert sunlight into chemical energy"
                  color="#0d7377"
                  rotation=""
                  delay="0s"
                />
                <FlipCard
                  front="Mitochondria"
                  back="The organelle that produces ATP energy"
                  color="#e8a838"
                  rotation=""
                  delay="0.1s"
                />
                <FlipCard
                  front="H2O"
                  back="Water: two hydrogen atoms, one oxygen"
                  color="#6b8f71"
                  rotation=""
                  delay="0.2s"
                />
                <FlipCard
                  front="DNA"
                  back="Double helix carrying genetic instructions"
                  color="#c06040"
                  rotation=""
                  delay="0.3s"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it works — 3-step strip */}
        <section className="py-12 sm:py-16">
          <div className="rounded-2xl border-2 p-8 sm:p-10" style={{ borderColor: "var(--border)", background: "var(--paper)" }}>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-8 text-center" style={{ color: "var(--foreground)" }}>
              Three steps. That&apos;s it.
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0d7377] to-[#0d9488] flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--primary)" }}>Step 1</div>
                <h4 className="font-bold text-lg mb-1" style={{ color: "var(--foreground)" }}>Type your terms</h4>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Enter term-definition pairs or paste a whole list at once
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e8a838] to-[#c48b1e] flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--accent-dark)" }}>Step 2</div>
                <h4 className="font-bold text-lg mb-1" style={{ color: "var(--foreground)" }}>Pick a style</h4>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Choose card size, color template, and layout options
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6b8f71] to-[#4a6e50] flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--secondary)" }}>Step 3</div>
                <h4 className="font-bold text-lg mb-1" style={{ color: "var(--foreground)" }}>Download & print</h4>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Get a print-ready PDF. Cut along the lines. Start studying.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-center" style={{ color: "var(--foreground)" }}>
            Built for people who actually study
          </h3>
          <p className="text-center mb-10" style={{ color: "var(--muted)" }}>
            Not another generic template. A real tool for real learners.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                ),
                gradient: "from-[#0d7377] to-[#0d9488]",
                title: "2 Minutes Flat",
                desc: "Blank screen to printed cards, no learning curve",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                ),
                gradient: "from-[#e8a838] to-[#c48b1e]",
                title: "Bulk Paste",
                desc: "Paste an entire list — we split it into cards automatically",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                ),
                gradient: "from-[#6b8f71] to-[#4a6e50]",
                title: "16 Templates",
                desc: "From classic white to bold colors — pick what fits your subject",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                ),
                gradient: "from-[#8b5cf6] to-[#6d28d9]",
                title: "Double-Sided",
                desc: "Pro: back pages mirror-aligned for duplex printing",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border p-6 transition-all hover:shadow-lg hover:-translate-y-1"
                style={{ borderColor: "var(--border)", background: "var(--paper)" }}
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-4 shadow-sm`}>
                  {f.icon}
                </div>
                <h4 className="font-bold mb-1.5" style={{ color: "var(--foreground)" }}>{f.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Maker Component */}
        <section id="maker" className="py-12 sm:py-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold" style={{ color: "var(--foreground)" }}>
              Your workspace
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>Add cards on the left, preview your PDF on the right</p>
          </div>
          <FlashcardMaker />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-4" style={{ color: "var(--muted)" }}>
              <li><a href="/printable-flashcards" className="hover:underline transition-colors">Printable Flashcards</a></li>
              <li><a href="/flashcard-template" className="hover:underline transition-colors">Templates</a></li>
              <li><a href="/vocabulary-flashcards" className="hover:underline transition-colors">Vocabulary</a></li>
              <li><a href="/math-flashcards" className="hover:underline transition-colors">Math</a></li>
              <li><a href="/sight-word-flashcards" className="hover:underline transition-colors">Sight Words</a></li>
              <li><a href="/study-flashcards" className="hover:underline transition-colors">Study</a></li>
              <li><a href="/alphabet-flashcards" className="hover:underline transition-colors">Alphabet</a></li>
              <li><a href="/multiplication-flashcards" className="hover:underline transition-colors">Multiplication</a></li>
              <li><a href="/language-learning-flashcards" className="hover:underline transition-colors">Language Learning</a></li>
              <li><a href="/pricing" className="hover:underline transition-colors">Pricing</a></li>
            </ul>
            <div className="text-center text-sm pt-6 border-t" style={{ color: "var(--muted-light)", borderColor: "var(--border)" }}>
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
