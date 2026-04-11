import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact",
  description: "Contact Rhonda Tidgwell.",
};

export default function Contact() {
  return (
    <main id="main" className="flex-1">
      <Hero eyebrow="Contact" title="Get in touch." size="lg" />
      <Container className="pb-24">
        <div className="grid gap-12 md:grid-cols-2">
          <section>
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted pb-3 mb-5 border-b border-rule">
              Direct contact
            </h2>
            <dl className="space-y-4 text-ink/90">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted">Email</dt>
                <dd>
                  <a
                    href="mailto:rhonda.tidgwell@tdsb.on.ca"
                    className="text-accent hover:underline"
                  >
                    rhonda.tidgwell@tdsb.on.ca
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted">Phone</dt>
                <dd>(647) 897-1184</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted">
                  OCT Registration
                </dt>
                <dd>#460584</dd>
              </div>
            </dl>

            <h2 className="mt-10 text-xs font-medium uppercase tracking-[0.18em] text-muted pb-3 mb-5 border-b border-rule">
              Downloads
            </h2>
            <ul className="space-y-3 text-ink/90">
              <li>
                <a
                  href="/artifacts/rhonda-tidgwell-resume-2026.pdf"
                  className="text-accent hover:underline"
                  target="_blank"
                  rel="noopener"
                >
                  Resume (PDF)
                </a>
              </li>
            </ul>

            <h2 className="mt-10 text-xs font-medium uppercase tracking-[0.18em] text-muted pb-3 mb-5 border-b border-rule">
              References
            </h2>
            <p className="text-ink/80">
              Three TDSB professional references available on request.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted pb-3 mb-5 border-b border-rule">
              Send a message
            </h2>
            <ContactForm />
          </section>
        </div>
      </Container>
    </main>
  );
}
