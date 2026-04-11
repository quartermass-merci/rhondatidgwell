import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";

export const metadata = {
  title: "Teaching Philosophy",
  description:
    "A philosophy of teaching grounded in equity, wellbeing, and achievement for every learner.",
};

export default function Philosophy() {
  return (
    <main id="main" className="flex-1">
      {/* Opener */}
      <section className="pt-20 md:pt-28 pb-10 md:pb-14 overflow-hidden">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
            About · Philosophy
          </p>
          <h1
            className="mt-5 font-display font-normal text-ink text-balance leading-[0.92] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.25rem, 6vw + 0.5rem, 5.75rem)" }}
          >
            Meeting students{" "}
            <em className="font-normal text-[color:var(--accent-2)]">
              where they are.
            </em>
          </h1>
        </Container>
      </section>

      {/* Philosophy essay — exact text */}
      <Container className="pb-16 md:pb-20 border-t border-rule pt-14 md:pt-20">
        <div className="md:grid md:grid-cols-12 md:gap-10">
          <aside className="md:col-span-3">
            <p className="md:sticky md:top-24 text-xs uppercase tracking-[0.2em] text-muted">
              Philosophy
            </p>
          </aside>
          <div className="md:col-span-9 mt-6 md:mt-0 max-w-[62ch] space-y-6">
            <p className="dropcap text-[1.125rem] md:text-[1.1875rem] leading-[1.65] text-[color:var(--text-body)]">
              My philosophy of teaching is grounded in a deep commitment to
              equity, wellbeing, and achievement for every learner. I believe
              that education must move beyond &ldquo;best practice&rdquo;
              toward a dynamic, reflective approach that models innovation
              and critical thinking in the classroom. As an educator, I
              strive to create learning environments that are responsive,
              inclusive, and empowering—spaces where all students feel seen,
              valued, and capable of success.
            </p>
            <p className="text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] text-[color:var(--text-body)]">
              Central to my practice is the belief in meeting students where
              they are. Each learner arrives with unique strengths,
              identities, experiences, and needs. My role is to both support
              and challenge every student along their individual
              journey—fostering academic achievement, nurturing personal
              wellbeing, and cultivating a sense of global citizenship.
              Through experiential learning and inquiry-based facilitation,
              I encourage students to ask questions, think deeply, and
              engage meaningfully with the world around them.
            </p>
            <p className="text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] text-[color:var(--text-body)]">
              My approach to teaching is collaborative and trauma-informed,
              grounded in an understanding that learning is deeply connected
              to emotional safety and wellbeing. I honour intuition and
              interconnectedness, recognizing that students learn not only
              through intellect, but through relationships, experiences,
              and a sense of belonging. Through a culturally responsive,
              equity-focused lens, I am committed to addressing systemic
              barriers while affirming the diverse identities and voices
              within my classroom.
            </p>
            <p className="text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] text-[color:var(--text-body)]">
              I intentionally co-create a safe and inclusive space where
              students feel comfortable taking risks, making mistakes, and
              learning from them. In this environment, learners feel seen,
              heard, and supported in exploring both challenges and moments
              of joy. I believe that when students feel a genuine sense of
              trust and belonging, they are more willing to engage deeply,
              think critically, and grow with confidence.
            </p>
            <p className="text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] text-[color:var(--text-body)]">
              Outside of the classroom, I find grounding and inspiration in
              nature—planting, camping, hiking in the woods with my dogs,
              practicing yoga, or reading a good book. These experiences
              shape how I show up as an educator, bringing a sense of
              presence, balance, and respect for the interconnected world
              into my teaching practice.
            </p>
            <p className="text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] text-[color:var(--text-body)]">
              Ultimately, my goal is to support students in becoming
              thoughtful, responsible, and engaged members of the global
              community. By fostering critical thinking, empathy, and a
              commitment to lifelong learning, I aim to empower each
              student to navigate and contribute positively to an
              ever-changing world.
            </p>
            <p className="pt-4 font-display italic text-xl md:text-2xl text-ink leading-[1.3]">
              I&rsquo;m looking forward to learning, growing, and exploring
              alongside you!
            </p>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
              — Ms. Tidgwell
            </p>
          </div>
        </div>
      </Container>

      {/* Land acknowledgement */}
      <section className="border-t-[3px] border-ink bg-highlight py-16 md:py-20">
        <Container>
          <div className="md:grid md:grid-cols-12 md:gap-10">
            <aside className="md:col-span-3">
              <p className="md:sticky md:top-24 text-xs uppercase tracking-[0.2em] text-muted">
                Land acknowledgement
              </p>
            </aside>
            <div className="md:col-span-9 mt-6 md:mt-0 max-w-[62ch] space-y-6">
              <p className="text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] text-[color:var(--text-body)]">
                I would like to acknowledge that we live, work, and play on
                the traditional territories of many Indigenous nations,
                including the Mississaugas of the Credit, the Anishinaabe,
                the Haudenosaunee, and the Wendat peoples. Toronto is
                covered by Treaty 13 with the Mississaugas of the Credit
                First Nation and is also part of the Dish With One Spoon
                Wampum Belt Covenant—an agreement to share and care for
                this land in peace.
              </p>
              <p className="text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] text-[color:var(--text-body)]">
                I recognize the enduring presence, knowledge, and
                contributions of Indigenous peoples, and I commit to
                ongoing learning, reflection, and respect in my work and
                relationships.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-20">
        <Link
          href="/about/journey"
          className="inline-flex items-center text-sm font-medium text-ink hover:text-accent transition-colors min-h-[44px] border-b border-ink hover:border-accent px-1"
        >
          Career Timeline
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </Container>
    </main>
  );
}
