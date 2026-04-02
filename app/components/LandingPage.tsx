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
    <div className="min-h-screen bg-zinc-50 font-[family-name:var(--font-geist-sans)]">
      {faqs && faqs.length > 0 && <FAQSchema faqs={faqs} />}
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="text-xl font-bold tracking-tight text-zinc-900">
            Printable Flashcard Maker
          </Link>
          <Link
            href="/pricing"
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
          >
            Go Pro
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-lg text-zinc-600">{subtitle}</p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors"
          >
            Start Making Flashcards — Free
          </Link>
        </div>

        <div className="mt-12 prose prose-zinc max-w-none">{children}</div>

        {faqs && faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-zinc-900">
              Frequently Asked Questions
            </h2>
            <dl className="mt-6 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base font-semibold text-zinc-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-sm text-zinc-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors"
          >
            Create Your Flashcards Now
          </Link>
        </div>

        <nav className="mt-12 border-t border-zinc-200 pt-8">
          <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">
            More Flashcard Types
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {relatedPages.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="inline-block rounded-full border border-zinc-200 px-3 py-1.5 text-sm text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 transition-colors"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="mt-8 border-t border-zinc-200 pt-8">
          <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">
            More Free Printable Tools
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {TOOL_LINKS.map((t) => (
              <li key={t.href}>
                <a
                  href={t.href}
                  className="inline-block rounded-full border border-zinc-200 px-3 py-1.5 text-sm text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 transition-colors"
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

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
          <p className="text-center text-sm text-zinc-500">
            Printable Flashcard Maker — Free flashcard PDF generator.
            Create, customize, and print your own flashcards.
          </p>
        </div>
      </footer>
    </div>
  );
}
