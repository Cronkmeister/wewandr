import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { FaEnvelope } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Community Guidelines — WeWandr",
  description:
    "WeWandr community guidelines for creating and sharing family-friendly travel guides. Learn how to be part of our trusted parent community.",
  alternates: {
    canonical: "https://wewandr.co/community-guidelines",
  },
};

export default function CommunityGuidelinesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <div className="relative pt-32 pb-4  bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            Community Guidelines
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="prose prose-lg max-w-none p-8 md:p-12">
          {/* Intro Text */}
          <section className="mb-12">
            <p className="text-lg text-darkblue leading-relaxed mb-6">
              We&apos;re building a safe, supportive space where parents share
              real travel experiences with other families. These guidelines help
              ensure WeWandr remains a respectful, trusted place where everyone
              feels welcome and supported in traveling with kids.
            </p>
            <p className="text-lg text-darkblue leading-relaxed font-semibold">
              By being part of WeWandr, you agree to follow these community
              rules.
            </p>
          </section>

          {/* Section 1: Be Kind & Respectful */}
          <section className="mb-8">
            <h2 className="text-orange-500 mb-4 heading-tertiary">
              1. Be Kind & Respectful
            </h2>
            <ul className="list-disc list-inside text-darkblue leading-relaxed space-y-2 ml-4">
              <li>
                Treat everyone with empathy. Parents are juggling a lot, please
                respect different choices and perspectives.
              </li>
              <li>No hate speech, discrimination, harassment, or bullying.</li>
            </ul>
          </section>

          {/* Section 2: Share Honestly */}
          <section className="mb-8">
            <h2 className="text-orange-500 mb-4 heading-tertiary">
              2. Share Honestly
            </h2>
            <ul className="list-disc list-inside text-darkblue leading-relaxed space-y-2 ml-4">
              <li>
                Only post guides, tips, or advice based on your own experiences.
              </li>
              <li>
                Be truthful, don&apos;t exaggerate or mislead other families.
              </li>
              <li>
                Credit sources if you use content that isn&apos;t fully yours
                (e.g., a photo or a fact).
              </li>
            </ul>
          </section>

          {/* Section 3: Keep Families Safe */}
          <section className="mb-8">
            <h2 className="text-orange-500 mb-4 heading-tertiary">
              3. Keep Families Safe
            </h2>
            <ul className="list-disc list-inside text-darkblue leading-relaxed space-y-2 ml-4">
              <li>Don&apos;t post unsafe or harmful recommendations.</li>
              <li>
                Always use common sense, WeWandr isn&apos;t a substitute for
                medical or professional travel advice.
              </li>
              <li>
                Never share private information about children (such as full
                names, addresses, or school details).
              </li>
            </ul>
          </section>

          {/* Section 4: Contribute Helpfully */}
          <section className="mb-8">
            <h2 className="text-orange-500 mb-4 heading-tertiary">
              4. Contribute Helpfully
            </h2>
            <ul className="list-disc list-inside text-darkblue leading-relaxed space-y-2 ml-4">
              <li>
                Focus on making travel easier, safer, and more enjoyable for
                families.
              </li>
              <li>
                Avoid spamming, self-promotion, or trying to sell services
                outside WeWandr.
              </li>
              <li>Keep discussions on-topic: family travel.</li>
            </ul>
          </section>

          {/* Section 5: Respect Our Platform */}
          <section className="mb-8">
            <h2 className="text-orange-500 mb-4 heading-tertiary">
              5. Respect Our Platform
            </h2>
            <ul className="list-disc list-inside text-darkblue leading-relaxed space-y-2 ml-4">
              <li>Don&apos;t attempt to hack, or misuse the app.</li>
              <li>
                Report issues if you see them, we&apos;re building this
                community together.
              </li>
            </ul>
          </section>

          {/* Section 6: About AI */}
          <section className="mb-8">
            <h2 className="text-orange-500 mb-4 heading-tertiary">
              6. About AI
            </h2>
            <p className="text-darkblue leading-relaxed">
              We sometimes use AI to help review guides and suggest content.
              It&apos;s here to assist, not replace, parent-to-parent wisdom.
            </p>
          </section>

          {/* Section 7: If Rules Are Broken */}
          <section className="mb-8">
            <h2 className="text-orange-500 mb-4 heading-tertiary">
              7. If Rules Are Broken
            </h2>
            <ul className="list-disc list-inside text-darkblue leading-relaxed space-y-2 ml-4">
              <li>
                We may remove content or suspend accounts that don&apos;t follow
                these guidelines.
              </li>
              <li>
                Serious or repeated violations may result in permanent removal
                from the platform.
              </li>
            </ul>
          </section>

          {/* Section 8: Let's Build Together */}
          <section className="mb-12">
            <h2 className="text-orange-500 mb-4 heading-tertiary">
              8. Let&apos;s Build Together
            </h2>
            <p className="text-darkblue leading-relaxed mb-6">
              WeWandr only works if parents contribute openly and respectfully.
              Thank you for sharing your real experiences and helping other
              families make travel possible.
            </p>

            {/* Contact Section */}
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
                  href="mailto:hello@wewandr.co"
                  className="text-orange-600 hover:text-orange-700 font-semibold"
                >
                  hello@wewandr.co
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
