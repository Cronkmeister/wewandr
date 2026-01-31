import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import {
  FaUsers,
  FaFileAlt,
  FaDollarSign,
  FaRobot,
  FaBalanceScale,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Terms & Conditions — WeWandr",
  description: "Terms and Conditions for WeWandr",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-darkblue">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="prose prose-lg max-w-none p-8 md:p-12">
          {/* Intro Text */}
          <section className="mb-12">
            <p className="text-lg text-darkblue leading-relaxed mb-6">
              At WeWandr, we believe in being clear and transparent. Below
              you&apos;ll find:
            </p>
            <ul className="list-disc list-inside text-darkblue leading-relaxed space-y-2 mb-8">
              <li>
                <strong>A Quick & Friendly Version</strong> (easy to read)
              </li>
              <li>
                <strong>The Full Legal Terms</strong> (compliance + details)
              </li>
            </ul>
          </section>

          {/* Quick & Friendly Summary */}
          <section className="mb-16">
            <h2 className="text-orange-500 mb-8 text-center heading-secondary">
              Quick & Friendly Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Who Can Join */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-600 text-2xl">
                    <FaUsers />
                  </div>
                  <div>
                    <h3 className="text-orange-500 mb-2 heading-small">
                      Who Can Join
                    </h3>
                    <p className="text-darkblue text-sm leading-relaxed">
                      Adults 18+ can create and share guides. Kids can use
                      WeWandr, but only with a parent&apos;s guidance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Your Content */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-600 text-2xl">
                    <FaFileAlt />
                  </div>
                  <div>
                    <h3 className="text-orange-500 mb-2 heading-small">
                      Your Content
                    </h3>
                    <p className="text-darkblue text-sm leading-relaxed">
                      Your guides are yours! By posting, you let us share them
                      so other parents can benefit. Please don&apos;t post
                      unsafe, hateful, or copied content.
                    </p>
                  </div>
                </div>
              </div>

              {/* Getting Paid */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-600 text-2xl">
                    <FaDollarSign />
                  </div>
                  <div>
                    <h3 className="text-orange-500 mb-2 heading-small">
                      Getting Paid
                    </h3>
                    <p className="text-darkblue text-sm leading-relaxed">
                      Creators get paid when others download their guides.
                      Payments are handled by trusted third-party providers.
                      You&apos;re responsible for your own taxes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Community Rules */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-600 text-2xl">
                    <FaHandshakeSimple />
                  </div>
                  <div>
                    <h3 className="text-orange-500 mb-2 heading-small">
                      Community Rules
                    </h3>
                    <p className="text-darkblue text-sm leading-relaxed">
                      Be kind, respectful, and helpful. No bullying, spam, or
                      unsafe advice.
                    </p>
                  </div>
                </div>
              </div>

              {/* About AI */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-600 text-2xl">
                    <FaRobot />
                  </div>
                  <div>
                    <h3 className="text-orange-500 mb-2 heading-small">
                      About AI
                    </h3>
                    <p className="text-darkblue text-sm leading-relaxed">
                      We may use AI to help with trip suggestions and content
                      checks, but you&apos;re always in charge of your choices.
                    </p>
                  </div>
                </div>
              </div>

              {/* The Serious Stuff */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-600 text-2xl">
                    <FaBalanceScale />
                  </div>
                  <div>
                    <h3 className="text-orange-500 mb-2 heading-small">
                      The Serious Stuff
                    </h3>
                    <p className="text-darkblue text-sm leading-relaxed">
                      If you break the rules, we may suspend your account.
                      Travel always involves risks, and WeWandr can&apos;t
                      guarantee outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Questions and Scroll Link */}
            <div className="mt-8 text-center space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <div className="text-blue-600 text-2xl">
                    <FaEnvelope />
                  </div>
                  <h3 className="text-orange-500 heading-small">Questions?</h3>
                </div>
                <p className="text-darkblue text-sm">
                  Email us at{" "}
                  <a
                    href="mailto:hello@wewandr.co"
                    className="text-orange-600 hover:text-orange-700 font-semibold"
                  >
                    hello@wewandr.co
                  </a>
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="#full-legal-terms"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                >
                  <FaChevronRight className="mr-2" />
                  Read the Full Legal Terms Below ↓
                </a>
              </div>
            </div>
          </section>

          {/* Full Legal Terms Section */}
          <section id="full-legal-terms" className="mb-12">
            <h2 className="text-orange-500 mb-8 text-center heading-secondary">
              Full Legal Terms
            </h2>

            {/* Terms Header */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
              <h3 className="text-orange-500 mb-2 heading-quaternary">
                WeWandr Terms & Conditions
              </h3>
              <p className="text-darkblue mb-4">
                Effective Date:{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="text-darkblue leading-relaxed">
                Welcome to WeWandr, a community-powered travel platform
                (&quot;WeWandr,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;). By accessing or using our website, mobile
                application, or services (collectively, the
                &quot;Platform&quot;), you agree to be bound by these Terms and
                Conditions (&quot;Terms&quot;). If you do not agree, you may not
                use the Platform.
              </p>
            </div>

            {/* Section 1: Eligibility */}
            <section className="mb-8">
              <h3 className="text-orange-700 mb-4 heading-tertiary">
                1. Eligibility
              </h3>
              <p className="text-darkblue leading-relaxed">
                You must be at least 18 years old to create an account and
                upload content. By using the Platform, you represent and warrant
                that you meet these requirements. Parents or guardians may allow
                children under 18 to access the Platform under their
                supervision.
              </p>
            </section>

            {/* Section 2: User Accounts */}
            <section className="mb-8">
              <h3 className="text-orange-700 mb-4 heading-tertiary">
                2. User Accounts
              </h3>
              <p className="text-darkblue leading-relaxed">
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activity that occurs under your
                account. You agree to notify us immediately of any unauthorized
                use of your account.
              </p>
            </section>

            {/* Section 3: Content Ownership and License */}
            <section className="mb-8">
              <h3 className="text-orange-700 mb-4 heading-tertiary">
                3. Content Ownership and License
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-500 mb-2">
                    Your Content:
                  </h4>
                  <p className="text-darkblue leading-relaxed">
                    You retain ownership of the travel guides, reviews, and
                    other content you create (&quot;User Content&quot;).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-500 mb-2">
                    License to WeWandr:
                  </h4>
                  <p className="text-darkblue leading-relaxed">
                    By uploading content, you grant WeWandr a worldwide,
                    non-exclusive, royalty-free license to host, use, reproduce,
                    display, and distribute your content on the Platform and in
                    promotional materials.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-500 mb-2">
                    Prohibited Content:
                  </h4>
                  <p className="text-darkblue leading-relaxed">
                    You may not upload content that is unlawful, harmful,
                    infringing, or otherwise inappropriate.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Payments and Revenue */}
            <section className="mb-8">
              <h3 className="text-orange-700 mb-4 heading-tertiary">
                4. Payments and Revenue
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-500 mb-2">
                    Creators:
                  </h4>
                  <p className="text-darkblue leading-relaxed">
                    Eligible users may earn revenue for their content as
                    described on the Platform.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-500 mb-2">
                    Payouts:
                  </h4>
                  <p className="text-darkblue leading-relaxed">
                    Payments are processed via third-party providers (e.g.,
                    Stripe, PayPal). WeWandr may deduct service fees and
                    applicable taxes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-500 mb-2">
                    Responsibility:
                  </h4>
                  <p className="text-darkblue leading-relaxed">
                    Users are responsible for reporting and paying any
                    applicable income taxes.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Acceptable Use */}
            <section className="mb-8">
              <h3 className="text-orange-700 mb-4 heading-tertiary">
                5. Acceptable Use
              </h3>
              <p className="text-darkblue leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-darkblue leading-relaxed space-y-2 ml-4">
                <li>Use the Platform for unlawful purposes.</li>
                <li>
                  Misrepresent your identity or impersonate another person.
                </li>
                <li>
                  Circumvent payment systems, spam users, or exploit the
                  Platform.
                </li>
              </ul>
            </section>

            {/* Section 6: AI and Recommendations */}
            <section className="mb-8">
              <h3 className="text-orange-700 mb-4 heading-tertiary">
                6. AI and Recommendations
              </h3>
              <p className="text-darkblue leading-relaxed">
                WeWandr may provide AI-powered content moderation and travel
                suggestions. These tools are for informational purposes only and
                do not replace professional advice or personal judgment.
              </p>
            </section>

            {/* Section 7: Termination */}
            <section className="mb-8">
              <h3 className="text-orange-700 mb-4 heading-tertiary">
                7. Termination
              </h3>
              <p className="text-darkblue leading-relaxed">
                We reserve the right to suspend or terminate your account at our
                sole discretion if you violate these Terms. Upon termination,
                your right to use the Platform ceases immediately.
              </p>
            </section>

            {/* Section 8: Disclaimers */}
            <section className="mb-8">
              <h3 className="text-orange-700 mb-4 heading-tertiary">
                8. Disclaimers
              </h3>
              <p className="text-darkblue leading-relaxed">
                WeWandr provides the Platform on an &quot;as is&quot; and
                &quot;as available&quot; basis. We make no warranties regarding
                the accuracy, reliability, or availability of content. Travel
                involves inherent risks, and WeWandr is not liable for any
                outcomes resulting from use of the Platform.
              </p>
            </section>

            {/* Section 9: Limitation of Liability */}
            <section className="mb-8">
              <h3 className="text-orange-700 mb-4 heading-tertiary">
                9. Limitation of Liability
              </h3>
              <p className="text-darkblue leading-relaxed">
                To the maximum extent permitted by law, WeWandr shall not be
                liable for indirect, incidental, consequential, or punitive
                damages arising out of your use of the Platform.
              </p>
            </section>

            {/* Section 10: Privacy */}
            <section className="mb-8">
              <h3 className="text-orange-700 mb-4 heading-tertiary">
                10. Privacy
              </h3>
              <p className="text-darkblue leading-relaxed">
                Your use of the Platform is also governed by our{" "}
                <Link
                  href="/privacy"
                  className="text-orange-600 hover:text-orange-700 font-semibold underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            {/* Section 11: Changes to Terms */}
            <section className="mb-8">
              <h3 className="text-orange-700 mb-4 heading-tertiary">
                11. Changes to Terms
              </h3>
              <p className="text-darkblue leading-relaxed">
                WeWandr reserves the right to modify these Terms at any time.
                Changes will be effective when posted. Continued use of the
                Platform constitutes acceptance of the updated Terms.
              </p>
            </section>

            {/* Section 12: Governing Law */}
            <section className="mb-8">
              <h3 className="text-orange-700 mb-4 heading-tertiary">
                12. Governing Law
              </h3>
              <p className="text-darkblue leading-relaxed">
                These Terms shall be governed by and construed under the laws of
                British Columbia, Canada, without regard to its conflict of laws
                principles.
              </p>
            </section>

            {/* Section 13: Contact — Questions box */}
            <section className="mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <div className="text-orange-600 text-2xl">
                    <FaEnvelope />
                  </div>
                  <h3 className="text-orange-500 heading-small">
                    Questions about these Terms?
                  </h3>
                </div>
                <p className="text-darkblue text-sm text-center">
                  Email us at{" "}
                  <a
                    href="mailto:hello@wewandr.co"
                    className="text-orange-600 hover:text-orange-700 font-semibold"
                  >
                    hello@wewandr.co
                  </a>
                </p>
              </div>
            </section>
          </section>
        </div>

        {/* Back to Home Link */}
        <div className="text-center my-4">
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
