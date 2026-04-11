import { Hero } from "@/components/hero";
import { Container } from "@/components/container";

export const metadata = {
  title: "Credentials",
  description:
    "OCT member in good standing, with Additional Qualifications across Librarianship, Special Education, and Reading.",
};

export default function Credentials() {
  return (
    <main id="main" className="flex-1">
      <Hero eyebrow="About" title="Credentials." size="lg" />
      <Container className="pb-24 pt-12">
        <p className="max-w-[60ch] text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] text-[color:var(--text-body)]">
          Member in good standing with the Ontario College of Teachers.
          Additional Qualifications and professional learning across
          Librarianship, Special Education, and Reading.
        </p>
      </Container>
    </main>
  );
}
