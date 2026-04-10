import { Hero } from "@/components/hero";
import { Container, Prose } from "@/components/container";

export const metadata = {
  title: "Accessibility",
  description:
    "This portfolio site is built to WCAG 2.1 AA standards.",
};

export default function Accessibility() {
  return (
    <main id="main" className="flex-1">
      <Hero
        eyebrow="Accessibility"
        title="Built for every reader."
        lede="This site is built to WCAG 2.1 AA standards."
      />
      <Container className="pb-24">
        <Prose>
          <p>
            This site is built to WCAG 2.1 AA standards. If you find something
            that isn't working for you, please email{" "}
            <a
              href="mailto:rhonda.tidgwell@tdsb.on.ca"
              className="text-accent hover:underline"
            >
              rhonda.tidgwell@tdsb.on.ca
            </a>{" "}
            and I'll fix it.
          </p>
          <p>
            The site contains no student data, no tracking cookies, and no
            third-party ads. Analytics are limited to understanding which
            sections hiring teams actually read.
          </p>
        </Prose>
      </Container>
    </main>
  );
}
