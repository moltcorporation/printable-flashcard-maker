import FlashcardMaker from "./components/FlashcardMaker";
import ProBadge from "./components/ProBadge";

function TemplatePreview({
  name,
  gradient,
  icon,
}: {
  name: string;
  gradient: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-lg transition-all">
      {/* Template preview box */}
      <div className={`bg-gradient-to-br ${gradient} h-24 flex items-center justify-center`}>
        <div className="text-white font-bold text-sm text-center px-2">{icon}</div>
      </div>
      <div className="p-3 bg-white">
        <p className="font-semibold text-sm text-gray-800">{name}</p>
      </div>
    </div>
  );
}

function SubjectCard({
  icon,
  subject,
  examples,
  gradient,
}: {
  icon: React.ReactNode;
  subject: string;
  examples: string;
  gradient: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 p-5 bg-white hover:shadow-md transition-all">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-3 text-xl`}>
        {icon}
      </div>
      <h4 className="font-bold text-gray-900 mb-1">{subject}</h4>
      <p className="text-sm text-gray-600">{examples}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]" style={{ background: "var(--background)" }}>
      {/* Gradient accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#2563eb] via-[#f59e0b] to-[#10b981] fixed top-0 left-0 right-0 z-50" />

      {/* Header */}
      <header className="border-b sticky top-1 z-40" style={{ borderColor: "var(--border)", background: "var(--paper)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#1e40af] flex items-center justify-center shadow-sm">
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
                For teachers & students
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
                <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
                Trusted by teachers & students
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5 font-[family-name:var(--font-poppins)]" style={{ color: "var(--foreground)" }}>
                Study materials that
                <span className="block bg-gradient-to-r from-[#2563eb] to-[#10b981] bg-clip-text text-transparent">
                  are ready to print
                </span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                Create custom flashcards for any subject. No templates, no sign-up, no watermarks. Print them today, study tomorrow.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="#maker"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white font-bold rounded-xl hover:from-[#1e40af] hover:to-[#1e3a8a] transition-all shadow-lg shadow-[#2563eb30]"
                >
                  Create Flashcards Free
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center px-6 py-3.5 font-semibold rounded-xl transition-all border-2"
                  style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--paper)" }}
                >
                  View Pro Features
                </a>
              </div>
              <div className="flex gap-6 text-sm" style={{ color: "var(--muted)" }}>
                <span className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  No account needed
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  Instant PDF
                </span>
              </div>
            </div>

            {/* Right: Real sample flashcards with subject themes */}
            <div className="relative hidden sm:flex flex-col items-center justify-center min-h-[340px]">
              {/* Background decoration */}
              <div className="absolute inset-0 rounded-3xl opacity-40" style={{ background: "radial-gradient(circle at 60% 40%, var(--primary-light), transparent 70%)" }} />
              <div className="absolute inset-0 rounded-3xl opacity-30" style={{ background: "radial-gradient(circle at 30% 70%, var(--secondary-light), transparent 60%)" }} />

              <p className="text-xs font-semibold mb-4 text-center" style={{ color: "var(--muted-light)" }}>
                Real examples from real subjects
              </p>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {/* Math */}
                <div className="w-44 h-28 rounded-xl border-2 border-[#f59e0b] p-4 flex flex-col justify-center shadow-md bg-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2 text-[#f59e0b]">Math</p>
                  <p className="text-sm font-bold text-gray-900">What is 2³?</p>
                </div>
                {/* Science */}
                <div className="w-44 h-28 rounded-xl border-2 border-[#2563eb] p-4 flex flex-col justify-center shadow-md bg-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2 text-[#2563eb]">Science</p>
                  <p className="text-sm font-bold text-gray-900">H₂O is...</p>
                </div>
                {/* Vocabulary */}
                <div className="w-44 h-28 rounded-xl border-2 border-[#10b981] p-4 flex flex-col justify-center shadow-md bg-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2 text-[#10b981]">Vocab</p>
                  <p className="text-sm font-bold text-gray-900">Perspicacious</p>
                </div>
                {/* Language */}
                <div className="w-44 h-28 rounded-xl border-2 border-[#8b5cf6] p-4 flex flex-col justify-center shadow-md bg-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2 text-[#8b5cf6]">Spanish</p>
                  <p className="text-sm font-bold text-gray-900">Buenos días</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-8 border-y border-gray-200">
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-600 mb-2">Used by educators and learners worldwide</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div>
                <p className="text-2xl font-bold text-gray-900">50K+</p>
                <p className="text-xs text-gray-600">monthly searches</p>
              </div>
              <div className="w-px h-8 bg-gray-300 hidden sm:block" />
              <div>
                <p className="text-2xl font-bold text-gray-900">100% Free</p>
                <p className="text-xs text-gray-600">no watermarks</p>
              </div>
              <div className="w-px h-8 bg-gray-300 hidden sm:block" />
              <div>
                <p className="text-2xl font-bold text-gray-900">PDF Export</p>
                <p className="text-xs text-gray-600">print instantly</p>
              </div>
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section className="py-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-poppins)]" style={{ color: "var(--foreground)" }}>
              16 templates to choose from
            </h3>
            <p className="mt-2 text-lg" style={{ color: "var(--muted)" }}>
              Pick the look that matches your subject
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <TemplatePreview name="Classic Blue" gradient="from-[#2563eb] to-[#1e40af]" icon="📘" />
            <TemplatePreview name="Science Green" gradient="from-[#10b981] to-[#059669]" icon="🔬" />
            <TemplatePreview name="Warm Amber" gradient="from-[#f59e0b] to-[#d97706]" icon="☀️" />
            <TemplatePreview name="Purple Study" gradient="from-[#8b5cf6] to-[#7c3aed]" icon="✨" />
            <TemplatePreview name="Red Alert" gradient="from-[#ef4444] to-[#dc2626]" icon="⚡" />
            <TemplatePreview name="Pink Learn" gradient="from-[#ec4899] to-[#db2777]" icon="💖" />
          </div>
        </section>

        {/* Subject-Specific Sections */}
        <section className="py-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-poppins)]" style={{ color: "var(--foreground)" }}>
              Perfect for any subject
            </h3>
            <p className="mt-2 text-lg" style={{ color: "var(--muted)" }}>
              Teachers and students use Flashcard Maker for
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <SubjectCard
              icon="🧮"
              subject="Math"
              examples="Formulas, geometry, calculus"
              gradient="from-[#f59e0b] to-[#d97706]"
            />
            <SubjectCard
              icon="🔬"
              subject="Science"
              examples="Biology, chemistry, physics"
              gradient="from-[#2563eb] to-[#1e40af]"
            />
            <SubjectCard
              icon="🗣️"
              subject="Languages"
              examples="Vocabulary, conjugations, phrases"
              gradient="from-[#10b981] to-[#059669]"
            />
            <SubjectCard
              icon="📚"
              subject="History"
              examples="Dates, events, key figures"
              gradient="from-[#8b5cf6] to-[#7c3aed]"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <h3 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-poppins)] mb-2 text-center" style={{ color: "var(--foreground)" }}>
            Built for real studying
          </h3>
          <p className="text-center mb-10 text-lg" style={{ color: "var(--muted)" }}>
            Not another template. Tools made by educators.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                ),
                gradient: "from-[#2563eb] to-[#1e40af]",
                title: "2 Minutes Flat",
                desc: "Type terms, pick colors, get your PDF",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                ),
                gradient: "from-[#f59e0b] to-[#d97706]",
                title: "Bulk Paste",
                desc: "Paste a list, we split it automatically",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                ),
                gradient: "from-[#10b981] to-[#059669]",
                title: "16 Designs",
                desc: "Themes for every subject and mood",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                ),
                gradient: "from-[#8b5cf6] to-[#7c3aed]",
                title: "Duplex Ready",
                desc: "Pro: back pages auto-aligned for printing",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-gray-200 p-6 transition-all hover:shadow-lg hover:-translate-y-1 bg-white"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-4 shadow-sm`}>
                  {f.icon}
                </div>
                <h4 className="font-bold mb-1.5 font-[family-name:var(--font-poppins)]" style={{ color: "var(--foreground)" }}>{f.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Editor Walkthrough */}
        <section className="py-16 bg-gradient-to-br from-[#f0f4f8] to-[#f9fafb] rounded-3xl px-8 border border-gray-200">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-poppins)]" style={{ color: "var(--foreground)" }}>
              How to create flashcards
            </h3>
            <p className="mt-2 text-lg" style={{ color: "var(--muted)" }}>
              It's easier than you think
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1e40af] flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h4 className="font-bold text-lg mb-2 font-[family-name:var(--font-poppins)]" style={{ color: "var(--foreground)" }}>
                Type your terms
              </h4>
              <p style={{ color: "var(--muted)" }}>
                Enter term-definition pairs one at a time, or paste a whole list at once. You control everything.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h4 className="font-bold text-lg mb-2 font-[family-name:var(--font-poppins)]" style={{ color: "var(--foreground)" }}>
                Customize the design
              </h4>
              <p style={{ color: "var(--muted)" }}>
                Pick a template, choose your card size, adjust colors. See the preview update instantly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h4 className="font-bold text-lg mb-2 font-[family-name:var(--font-poppins)]" style={{ color: "var(--foreground)" }}>
                Download & print
              </h4>
              <p style={{ color: "var(--muted)" }}>
                Get a print-ready PDF. Cut along the lines. You're done. Start studying.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing comparison callout */}
        <section className="py-16">
          <div className="rounded-3xl border border-gray-200 p-8 bg-white">
            <h3 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-poppins)] mb-3 text-center" style={{ color: "var(--foreground)" }}>
              Free is great. Pro is powerful.
            </h3>
            <p className="text-center mb-8" style={{ color: "var(--muted)" }}>
              Everything you need to study is free. Pro unlocks advanced features for serious learners.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 p-6">
                <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-poppins)]" style={{ color: "var(--foreground)" }}>Free Tier</h4>
                <ul className="space-y-2 text-sm mb-6" style={{ color: "var(--muted)" }}>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span>Create up to 5 cards with watermark</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span>All 16 templates included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span>PDF export included</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-[#2563eb] p-6 bg-gradient-to-br from-[#f0f4f8] to-white">
                <div className="inline-block px-3 py-1 bg-[#2563eb] text-white text-xs font-bold rounded-full mb-3">Popular</div>
                <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-poppins)]" style={{ color: "var(--foreground)" }}>Pro Tier</h4>
                <ul className="space-y-2 text-sm mb-6" style={{ color: "var(--muted)" }}>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span>Unlimited flashcards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span>No watermarks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span>Duplex printing (auto-aligned backs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span>$2.99/month or $19.99/year</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Maker Component */}
        <section id="maker" className="py-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-poppins)]" style={{ color: "var(--foreground)" }}>
              Your workspace
            </h3>
            <p className="mt-2 text-lg" style={{ color: "var(--muted)" }}>Add cards on the left, preview your PDF on the right</p>
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
                Create, customize, and print your own flashcards for any subject.
              </p>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}
