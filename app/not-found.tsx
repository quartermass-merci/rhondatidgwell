import Link from "next/link";
import { Container } from "@/components/container";

export const metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <main id="main" className="flex-1 flex items-center">
      <Container className="py-32 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          404
        </p>
        <h1 className="mt-5 font-display text-5xl md:text-[4rem] text-ink leading-[1.05]">
          This shelf is empty.
        </h1>
        <p className="mt-6 text-ink/80 max-w-lg mx-auto">
          The page you were looking for isn't here. Back to the library?
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-sm bg-accent px-5 py-3 text-sm font-medium text-paper hover:bg-accent/90 transition-colors"
        >
          Return home →
        </Link>
      </Container>
    </main>
  );
}
