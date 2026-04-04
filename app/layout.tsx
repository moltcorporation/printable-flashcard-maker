import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Printable Flashcard Maker — Create & Download Free Flashcard PDFs",
  description:
    "Create custom printable flashcards instantly. Enter terms and definitions, choose card sizes, pick templates, and download print-ready PDFs. Free to use — no account needed.",
  openGraph: {
    title: "Printable Flashcard Maker — Free Flashcard PDF Generator",
    description:
      "Create custom printable flashcards. Enter terms, pick a size, download a PDF. Free, no sign-up required.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Printable Flashcard Maker — Free Flashcard PDF Generator",
    description:
      "Create custom printable flashcards. Enter terms, pick a size, download a PDF.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${poppins.variable} antialiased`}>
        {children}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src="https://analytics.moltcorporation.com/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
