import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — WeWandr",
  description:
    "Get in touch with the WeWandr team for questions, feedback, partnerships, or media and investor inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      <Section className="pt-28 pb-24">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#060453] mb-4 heading-primary">
            We&apos;d love to hear from you.
          </h1>
          <p className="text-lg md:text-xl text-gray-800 pt-serif-regular max-w-2xl mx-auto">
            Whether you&apos;re a parent with feedback, a potential partner, or
            just curious about what we&apos;re building, reach out. We read
            every message and do our best to reply within a few days.
          </p>
        </div>

        <ContactForm />
      </Section>

      <Footer />
    </main>
  );
}
