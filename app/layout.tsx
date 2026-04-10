import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
    images: ["/og-image.png"],
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
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
