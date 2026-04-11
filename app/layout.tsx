import type { Metadata } from "next";
import { Fraunces, Newsreader } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LightboxRoot } from "@/components/lightbox";
import "./globals.css";

// Display: Fraunces (keep — it's doing the editorial work).
// Variable font; omit weight to get the full axis. Adding SOFT/opsz requires
// weight: variable under next/font, so we go full variable here.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

// Body: Newsreader — a genuinely editorial serif with reading-optimized optical
// sizing. Not on the "overused AI pairing" list and it keeps the literary-magazine
// tone honest. See audit H1.
const newsreader = Newsreader({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Rhonda Tidgwell — Teacher-Librarian, TDSB",
    template: "%s · Rhonda Tidgwell",
  },
  description:
    "Portfolio of Rhonda Tidgwell, Teacher-Librarian with the Toronto District School Board — classroom practice, library leadership, assessment, and community.",
  openGraph: {
    type: "website",
    title: "Rhonda Tidgwell — Teacher-Librarian, TDSB",
    description:
      "Portfolio of Rhonda Tidgwell, Teacher-Librarian with the Toronto District School Board.",
    // OG image is TBD — omit the key rather than ship a broken /og-image.png reference.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        {children}
        <Footer />
        <LightboxRoot />
      </body>
    </html>
  );
}
