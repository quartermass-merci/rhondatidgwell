import Link from "next/link";
import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";
import { PullQuote } from "@/components/pull-quote";

export const metadata = {
  title: "Teaching Philosophy",
  description:
    "The philosophy behind twenty-four years of teaching, library work, and equity practice in the TDSB.",
};

export default function Philosophy() {
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="About · Philosophy"
        title="What I believe about kids, classrooms, and books."
        size="lg"
      />

      <Container className="pb-12">
        <PullQuote
          style="hero"
          quote="When a flower doesn't bloom, you fix the environment in which it grows. Not the flower."
          attribution="Alexander Den Heijer"
        />
      </Container>

      <Container className="pb-20">
        <Prose>
          <p>
            The classroom is a room where kids practice being people. The library is
            the same room with better light and more books. My job in both is to
            build the environment where students take risks, get things wrong in
            public, and figure out they're capable of more than they thought.
          </p>
          <p>
            I teach through inquiry because kids learn when they're the ones
            asking. Success criteria get co-created so students know what "good"
            looks like before they're asked to make it. Universal Design for
            Learning is the baseline, not the accommodation — because the
            alternative is teaching most kids that school is something that
            happens to them.
          </p>
          <p>
            Equity isn't a unit. It runs through Culturally Responsive and Relevant
            Pedagogy and Indigenous Ways of Knowing, and it shows up in who gets
            to see themselves in the books on the shelf and whether the kid in the
            back of the classroom is being reached or managed. Gholdy Muhammad's
            framework anchors how I think about identity and genius in the work.
            Twenty-four years in, I still know the difference.
          </p>
          <p>
            After two-plus decades, the work still looks like this: meet the kid
            where they are, and trust them with real questions. The rest is craft.
          </p>
        </Prose>

        {/* Identity strip */}
        <div className="mt-16 border-t border-b border-rule py-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-center">
          {["Teamwork", "Organization", "Empathy"].map((word) => (
            <span
              key={word}
              className="font-display text-2xl md:text-3xl uppercase tracking-[0.24em] text-ink"
            >
              {word}
            </span>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/about/journey"
            className="inline-flex items-center rounded-sm bg-accent px-5 py-3 text-sm font-medium text-paper hover:bg-accent/90 transition-colors"
          >
            See the journey →
          </Link>
        </div>
      </Container>
    </main>
  );
}
