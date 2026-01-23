import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { FaEnvelope } from "react-icons/fa";

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
          <h1 className="text-4xl md:text-5xl font-bold text-darkblue mb-4 heading-primary">
            We&apos;d love to hear from you.
          </h1>
          <p className="text-lg md:text-lg text-[#060453] py-6 pt-serif-regular max-w-2xl mx-auto">
            Whether you have a question, feedback, or just want to connect,
            here&apos;s how to reach us. We read every message and do our best
            to reply within a few days.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Email Contacts */}
          <div className="relative rounded-2xl border-2 border-orange-500 p-6 md:p-10">
            <FaEnvelope className="absolute top-6 right-6 md:top-10 md:right-10 text-orange-500 text-2xl md:text-3xl" />
            <h2 className="text-2xl md:text-3xl font-semibold text-darkblue mb-6 heading-secondary">
              Get in Touch
            </h2>

            <div className="space-y-6">
              {/* General Inquiries */}
              <div className="flex justify-between items-center">
                <p className="text-lg md:text-xl text-orange-500 font-semibold pt-serif-regular">
                  General Inquiries
                </p>
                <a
                  href="mailto:hello@wewandr.co"
                  className="text-lg md:text-xl text-darkblue hover:text-orange-500 transition-colors duration-300 pt-serif-regular"
                >
                  hello@wewandr.co
                </a>
              </div>

              {/* Investor Relations */}
              <div className="flex justify-between items-center">
                <p className="text-lg md:text-xl text-orange-500 font-semibold pt-serif-regular">
                  Investor Relations
                </p>
                <a
                  href="mailto:investors@wewandr.co"
                  className="text-lg md:text-xl text-darkblue hover:text-orange-500 transition-colors duration-300 pt-serif-regular"
                >
                  investors@wewandr.co
                </a>
              </div>

              {/* Careers */}
              <div className="flex justify-between items-center">
                <p className="text-lg md:text-xl text-orange-500 font-semibold pt-serif-regular">
                  Careers
                </p>
                <a
                  href="mailto:careers@wewandr.co"
                  className="text-lg md:text-xl text-darkblue hover:text-orange-500 transition-colors duration-300 pt-serif-regular"
                >
                  careers@wewandr.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
