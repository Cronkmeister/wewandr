import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { FaEnvelope } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Community Guidelines — WeWandr",
  description: "Community Guidelines for WeWandr",
};

export default function CommunityGuidelinesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            WeWandr Community Guidelines
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none p-8 md:p-12">
          {/* Intro Text */}
          <section className="mb-12">
            <p className="text-lg text-darkblue leading-relaxed">
              We&apos;re building a safe, supportive space where parents share
              real travel experiences with other families. These guidelines help
              ensure WeWandr remains a respectful, trusted place where everyone
              feels welcome and supported in traveling with kids.
            </p>
          </section>

          {/* Guidelines List */}
          <ul className="list-disc list-inside text-darkblue leading-relaxed space-y-2 ml-4 mb-8">
            <li>
              Treat everyone with empathy. Parents are juggling a lot, please
              respect different choices and perspectives.
            </li>
            <li>
              Be truthful, don&apos;t exaggerate or mislead other families.
            </li>
            <li>
              Always use common sense, WeWandr isn&apos;t a substitute for
              medical or professional travel advice.
            </li>
            <li>
              Never share private information about children (such as full names,
              addresses, or school details).
            </li>
          </ul>

          {/* Respect Our Platform */}
          <section className="mb-12">
            <h2 className="text-orange-500 mb-4 heading-tertiary">
              Respect Our Platform
            </h2>
            <ul className="list-disc list-inside text-darkblue leading-relaxed space-y-2 ml-4">
              <li>
                Don&apos;t attempt to bypass payments, hack, or misuse the app.
              </li>
              <li>
                Report issues if you see them, we&apos;re building this community
                together.
              </li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <div className="text-orange-600 text-2xl">
                  <FaEnvelope />
                </div>
                <h3 className="text-orange-700 heading-small">
                  Questions or concerns?
                </h3>
              </div>
              <p className="text-darkblue text-sm text-center">
                Reach us anytime at{" "}
                <a
                  href="mailto:hello@wewandr.com"
                  className="text-orange-600 hover:text-orange-700 font-semibold"
                >
                  hello@wewandr.com
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
