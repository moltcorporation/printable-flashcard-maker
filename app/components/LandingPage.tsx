import Link from "next/link";

interface FAQ {
  question: string;
  answer: string;
}

interface LandingPageProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  faqs?: FAQ[];
  relatedPages: { href: string; label: string }[];
}

function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const TOOL_LINKS = [
  { href: "https://nametracingmaker.com", label: "Tracing Worksheet Maker" },
  { href: "https://classroomseatingchartmaker.com", label: "Classroom Seating Chart Maker" },
  { href: "https://barcode-label-maker-moltcorporation.vercel.app", label: "Barcode Label Maker" },
  { href: "https://printable-label-maker-moltcorporation.vercel.app", label: "Printable Label Maker" },
  { href: "https://printable-planner-maker-2-moltcorporation.vercel.app", label: "Printable Planner Maker" },
  { href: "https://printable-ring-sizer-moltcorporation.vercel.app", label: "Printable Ring Sizer" },
];

export default function LandingPage({
  title,
  subtitle,
  children,
  faqs,
  relatedPages,
}: LandingPageProps) {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]" style={{ background: "var(--background)" }}>
      {faqs && faqs.length > 0 && <FAQSchema faqs={faqs} />}
      {/* Accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#0d7377] via-[#e8a838] to-[#6b8f71]" />
      <header className="border-b" style={{ borderColor: "var(--border)", background: "var(--paper)" }}>
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0d7377] to-[#095c5f] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <rect x="2" y="4" width="16" height="14" rx="2" />
                <rect x="6" y="6" width="16" height="14" rx="2" fill="white" fillOpacity="0.3" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
              Flashcard Maker
            </span>
          </Link>
          <Link
            href="/pricing"
            className="rounded-xl px-4 py-2 text-sm font-bold text-white transition-all"
            style={{ background: "linear-gradient(135deg, var(--primary), var(--primary-dark))" }}
          >
            Go Pro
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: "var(--foreground)" }}>
            {title}
          </h1>
          <p className="mt-3 text-lg" style={{ color: "var(--muted)" }}>{subtitle}</p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-all shadow-lg"
            style={{ background: "linear-gradient(135deg, #0d7377, #0d9488)", boxShadow: "0 4px 16px rgba(13, 115, 119, 0.25)" }}
          >
            Start Making Flashcards — Free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        <div className="mt-12 prose prose-zinc max-w-none">{children}</div>

        {faqs && faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-extrabold" style={{ color: "var(--foreground)" }}>
              Frequently Asked Questions
            </h2>
            <dl className="mt-6 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border p-5" style={{ borderColor: "var(--border)", background: "var(--paper)" }}>
                  <dt className="text-base font-bold" style={{ color: "var(--foreground)" }}>
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-all shadow-lg"
            style={{ background: "linear-gradient(135deg, #0d7377, #0d9488)", boxShadow: "0 4px 16px rgba(13, 115, 119, 0.25)" }}
          >
            Create Your Flashcards Now
          </Link>
        </div>

        <nav className="mt-12 border-t pt-8" style={{ borderColor: "var(--border)" }}>
          <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--foreground)" }}>
            More Flashcard Types
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {relatedPages.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="inline-block rounded-full border px-3 py-1.5 text-sm transition-all"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="mt-8 border-t pt-8" style={{ borderColor: "var(--border)" }}>
          <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--foreground)" }}>
            More Free Printable Tools
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {TOOL_LINKS.map((t) => (
              <li key={t.href}>
                <a
                  href={t.href}
                  className="inline-block rounded-full border px-3 py-1.5 text-sm transition-all"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                  target="_blank"
                  rel="noopener"
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </main>

      <footer className="border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
          <p className="text-center text-sm" style={{ color: "var(--muted-light)" }}>
            Printable Flashcard Maker — Free flashcard PDF generator.
            Create, customize, and print your own flashcards.
          </p>
        </div>
      </footer>
    </div>
  );
}
