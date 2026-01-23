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
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 bg-gradient-to-br from-orange-200 to-orange-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-white/90">
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
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {/* Intro Text */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At WeWandr, we believe in being clear and transparent. Below
                you&apos;ll find:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-8">
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
              <h2 className="text-gray-900 mb-8 text-center heading-secondary">
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
                      <h3 className="text-gray-900 mb-2 heading-small">
                        Who Can Join
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
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
                      <h3 className="text-gray-900 mb-2 heading-small">
                        Your Content
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
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
                      <h3 className="text-gray-900 mb-2 heading-small">
                        Getting Paid
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Creators get paid when others download their guides.
                        Payments are handled through Stripe/PayPal. You&apos;re
                        responsible for your own taxes.
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
                      <h3 className="text-gray-900 mb-2 heading-small">
                        Community Rules
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
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
                      <h3 className="text-gray-900 mb-2 heading-small">
                        About AI
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        We use AI to help with trip suggestions and content
                        checks, but you&apos;re always in charge of your
                        choices.
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
                      <h3 className="text-gray-900 mb-2 heading-small">
                        The Serious Stuff
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
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
                    <h3 className="text-gray-900 heading-small">Questions?</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Email us at{" "}
                    <a
                      href="mailto:support@wewandr.com"
                      className="text-orange-600 hover:text-orange-700 font-semibold"
                    >
                      support@wewandr.com
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
              <h2 className="text-gray-900 mb-8 text-center heading-secondary">
                Full Legal Terms
              </h2>

              {/* Terms Header */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-gray-900 mb-2 heading-quaternary">
                  WeWandr Terms & Conditions
                </h3>
                <p className="text-gray-600 mb-4">
                  Effective Date:{" "}
                  {new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to WeWandr, a community-powered travel platform
                  (&quot;WeWandr,&quot; &quot;we,&quot; &quot;us,&quot; or
                  &quot;our&quot;). By accessing or using our website, mobile
                  application, or services (collectively, the
                  &quot;Platform&quot;), you agree to be bound by these Terms
                  and Conditions (&quot;Terms&quot;). If you do not agree, you
                  may not use the Platform.
                </p>
              </div>

              {/* Section 1: Eligibility */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  1. Eligibility
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You must be at least 18 years old to create an account and
                  upload content. By using the Platform, you represent and
                  warrant that you meet these requirements. Parents or guardians
                  may allow children under 18 to access the Platform under their
                  supervision.
                </p>
              </section>

              {/* Section 2: User Accounts */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  2. User Accounts
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You are responsible for maintaining the confidentiality of
                  your account credentials and for all activity that occurs
                  under your account. You agree to notify us immediately of any
                  unauthorized use of your account.
                </p>
              </section>

              {/* Section 3: Content Ownership and License */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  3. Content Ownership and License
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Your Content:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      You retain ownership of the travel guides, reviews, and
                      other content you create (&quot;User Content&quot;).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      License to WeWandr:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      By uploading content, you grant WeWandr a worldwide,
                      non-exclusive, royalty-free license to host, use,
                      reproduce, display, and distribute your content on the
                      Platform and in promotional materials.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Prohibited Content:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      You may not upload content that is unlawful, harmful,
                      infringing, or otherwise inappropriate.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Payments and Revenue */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  4. Payments and Revenue
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Creators:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Eligible users may earn revenue for their content as
                      described on the Platform.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Payouts:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Payments are processed via third-party providers (e.g.,
                      Stripe, PayPal). WeWandr may deduct service fees and
                      applicable taxes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Responsibility:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Users are responsible for reporting and paying any
                      applicable income taxes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Acceptable Use */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  5. Acceptable Use
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
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
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  6. AI and Recommendations
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  WeWandr may provide AI-powered content moderation and travel
                  suggestions. These tools are for informational purposes only
                  and do not replace professional advice or personal judgment.
                </p>
              </section>

              {/* Section 7: Termination */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  7. Termination
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to suspend or terminate your account at
                  our sole discretion if you violate these Terms. Upon
                  termination, your right to use the Platform ceases
                  immediately.
                </p>
              </section>

              {/* Section 8: Disclaimers */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  8. Disclaimers
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  WeWandr provides the Platform on an &quot;as is&quot; and
                  &quot;as available&quot; basis. We make no warranties
                  regarding the accuracy, reliability, or availability of
                  content. Travel involves inherent risks, and WeWandr is not
                  liable for any outcomes resulting from use of the Platform.
                </p>
              </section>

              {/* Section 9: Limitation of Liability */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  9. Limitation of Liability
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To the maximum extent permitted by law, WeWandr shall not be
                  liable for indirect, incidental, consequential, or punitive
                  damages arising out of your use of the Platform.
                </p>
              </section>

              {/* Section 10: Privacy */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  10. Privacy
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your use of the Platform is also governed by our Privacy
                  Policy, available [here/link].
                </p>
              </section>

              {/* Section 11: Changes to Terms */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  11. Changes to Terms
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  WeWandr reserves the right to modify these Terms at any time.
                  Changes will be effective when posted. Continued use of the
                  Platform constitutes acceptance of the updated Terms.
                </p>
              </section>

              {/* Section 12: Governing Law */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  12. Governing Law
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed under the laws
                  of British Columbia, Canada, without regard to its conflict of
                  laws principles.
                </p>
              </section>

              {/* Section 13: Contact */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  13. Contact
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  For questions about these Terms, contact us at:{" "}
                  <a
                    href="mailto:support@wewandr.co"
                    className="text-orange-600 hover:text-orange-700 font-semibold"
                  >
                    support@wewandr.co
                  </a>
                </p>
              </section>
            </section>

            {/* Parent-Friendly Community Rules & Agreements */}
            <section className="mb-12">
              {/* Community Rules Header */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
                <h3 className="text-gray-900 mb-2 heading-quaternary">
                  WeWandr Community Rules & Agreements
                </h3>
                <p className="text-gray-600 mb-4">
                  Last updated:{" "}
                  {new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Hi parents! Welcome to WeWandr! We&apos;re so glad
                  you&apos;re here. To keep this space safe, supportive, and
                  fair, here&apos;s what you agree to when using our website or
                  app:
                </p>
              </div>

              {/* Section 1: Who Can Join */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  1. Who Can Join
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  WeWandr is for adults (18+) who want to share or discover
                  family travel tips. Kids can use it too, but only under their
                  parent&apos;s guidance.
                </p>
              </section>

              {/* Section 2: Your Account */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  2. Your Account
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Keep your login details safe. If someone else uses your
                  account, you&apos;re responsible for what happens. Let us know
                  right away if something looks off.
                </p>
              </section>

              {/* Section 3: Your Content */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  3. Your Content
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    What you create (guides, tips, posts) is yours.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    By posting it, you&apos;re letting WeWandr share it on our
                    app, website, or social media to help other parents discover
                    it.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Please don&apos;t post anything unsafe, hateful, misleading,
                    or copied from someone else.
                  </p>
                </div>
              </section>

              {/* Section 4: Getting Paid */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  4. Getting Paid
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    WeWandr pays creators when other parents download their
                    guides.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Payments go through trusted providers like Stripe or PayPal.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    You&apos;re responsible for any taxes on your earnings.
                  </p>
                </div>
              </section>

              {/* Section 5: How to Use WeWandr */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  5. How to Use WeWandr
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Be kind, respectful, and helpful.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    No bullying or unsafe travel advice.
                  </p>
                </div>
              </section>

              {/* Section 6: About AI */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  6. About AI
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We sometimes use AI to suggest trips or check guides for
                  quality. It&apos;s here to help, but always use your own
                  judgment when planning.
                </p>
              </section>

              {/* Section 7: If Things Go Wrong */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  7. If Things Go Wrong
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    If you break the rules, we may pause or close your account.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We can&apos;t guarantee every guide is perfect or every trip
                    will go smoothly—travel always has risks.
                  </p>
                </div>
              </section>

              {/* Section 8: Privacy */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  8. Privacy
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We respect your privacy. Check our Privacy Policy to see how
                  we use your info.
                </p>
              </section>

              {/* Section 9: Updates */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  9. Updates
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We may update these rules as WeWandr grows. We&apos;ll let you
                  know when we do, and by continuing to use WeWandr, you&apos;re
                  agreeing to the new version.
                </p>
              </section>

              {/* Section 10: Questions */}
              <section className="mb-8">
                <h3 className="text-gray-900 mb-4 heading-tertiary">
                  10. Questions?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Email us anytime at{" "}
                  <a
                    href="mailto:support@wewandr.co"
                    className="text-orange-600 hover:text-orange-700 font-semibold"
                  >
                    support@wewandr.co
                  </a>
                  . We&apos;re here to help.
                </p>
              </section>
            </section>
          </div>
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
