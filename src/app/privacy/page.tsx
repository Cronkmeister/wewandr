import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import {
  FaLock,
  FaEye,
  FaUsers,
  FaEnvelope,
  FaShieldAlt,
  FaGlobe,
  FaChevronRight,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Privacy Policy — WeWandr",
  description: "Privacy Policy for WeWandr",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <div className="relative pt-32 pb-4 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            Privacy Policy
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
              At WeWandr, we believe in being clear and transparent about how we
              handle your information. Below you&apos;ll find:
            </p>
            <ul className="list-disc list-inside text-darkblue leading-relaxed space-y-2 mb-8">
              <li>
                <strong>A Quick & Friendly Version</strong> (easy to read)
              </li>
              <li>
                <strong>The Full Legal Privacy Policy</strong> (compliance +
                details)
              </li>
            </ul>
          </section>

          {/* Quick & Friendly Summary */}
          <section className="mb-16">
            <h2 className="text-orange-500 mb-8 text-center heading-secondary">
              Quick & Friendly Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Your Info, Your Choice */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-600 text-2xl">
                    <FaLock />
                  </div>
                  <div>
                    <h3 className="text-orange-700 mb-2 heading-small">
                      Your Info, Your Choice
                    </h3>
                    <p className="text-darkblue text-sm leading-relaxed">
                      We only collect what we need: your name, email, and the
                      guides you post. Payment details are handled safely by
                      trusted third-party providers.
                    </p>
                  </div>
                </div>
              </div>

              {/* What Others See */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-600 text-2xl">
                    <FaEye />
                  </div>
                  <div>
                    <h3 className="text-orange-700 mb-2 heading-small">
                      What Others See
                    </h3>
                    <p className="text-darkblue text-sm leading-relaxed">
                      Guides you share are visible to other parents, but your
                      personal details (like email) aren&apos;t public.
                    </p>
                  </div>
                </div>
              </div>

              {/* Kids' Privacy */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-600 text-2xl">
                    <FaUsers />
                  </div>
                  <div>
                    <h3 className="text-orange-700 mb-2 heading-small">
                      Kids&apos; Privacy
                    </h3>
                    <p className="text-darkblue text-sm leading-relaxed">
                      WeWandr is built for parents. Children can only use it
                      under your guidance. We don&apos;t knowingly collect data
                      directly from kids.
                    </p>
                  </div>
                </div>
              </div>

              {/* How We Use Data */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-600 text-2xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="text-orange-700 mb-2 heading-small">
                      How We Use Data
                    </h3>
                    <p className="text-darkblue text-sm leading-relaxed mb-2">
                      We use your info to:
                    </p>
                    <ul className="text-darkblue text-sm leading-relaxed space-y-1 ml-4">
                      <li>• Run the platform smoothly</li>

                      <li>
                        • Send important updates (you can opt out of promos)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Security */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-600 text-2xl">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <h3 className="text-orange-700 mb-2 heading-small">
                      Security
                    </h3>
                    <p className="text-darkblue text-sm leading-relaxed">
                      We do our best to keep your data safe with modern
                      protections.
                    </p>
                  </div>
                </div>
              </div>

              {/* Where Data Lives */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-600 text-2xl">
                    <FaGlobe />
                  </div>
                  <div>
                    <h3 className="text-orange-700 mb-2 heading-small">
                      Where Data Lives
                    </h3>
                    <p className="text-darkblue text-sm leading-relaxed">
                      We&apos;re based in Canada, but your data may be stored
                      securely in other countries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Questions and Scroll Link */}
            <div className="mt-8 text-center space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <div className="text-orange-600 text-2xl">
                    <FaEnvelope />
                  </div>
                  <h3 className="text-orange-700 heading-small">Questions?</h3>
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
                  href="#full-privacy-policy"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                >
                  <FaChevronRight className="mr-2" />
                  Read the Full Privacy Policy Below ↓
                </a>
              </div>
            </div>
          </section>

          {/* Full Privacy Policy Section */}
          <section id="full-privacy-policy" className="mb-12">
            <h2 className="text-orange-500 mb-8 text-center heading-secondary">
              Full Privacy Policy
            </h2>

            {/* Privacy Policy Header */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
              <h3 className="text-orange-500 mb-2 heading-quaternary">
                WeWandr Privacy Policy
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
                This Privacy Policy describes how WeWandr (&quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares
                your personal information when you use our website, mobile
                application, or services (collectively, the
                &quot;Platform&quot;).
              </p>
            </div>

            {/* Section 1: Information We Collect */}
            <section className="mb-8">
              <h3 className="text-orange-500 mb-4 heading-tertiary">
                1. Information We Collect
              </h3>
              <p className="text-darkblue leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Account Information:
                  </h4>
                  <p className="text-darkblue leading-relaxed">
                    Name, email address, password, profile details.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Content You Provide:
                  </h4>
                  <p className="text-darkblue leading-relaxed">
                    Travel guides, posts, messages, reviews, and other material
                    you upload.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Payment Information:
                  </h4>
                  <p className="text-darkblue leading-relaxed">
                    Payment details are handled safely by trusted third-party
                    providers. We do not store full payment card details.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Usage Data:
                  </h4>
                  <p className="text-darkblue leading-relaxed">
                    Device information, IP address, browser type, and how you
                    interact with the Platform.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Cookies & Tracking:
                  </h4>
                  <p className="text-darkblue leading-relaxed">
                    We use cookies and similar technologies to improve
                    functionality and analytics.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: How We Use Your Information */}
            <section className="mb-8">
              <h3 className="text-orange-500 mb-4 heading-tertiary">
                2. How We Use Your Information
              </h3>
              <p className="text-darkblue leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside text-darkblue leading-relaxed space-y-2 ml-4">
                <li>Provide and improve the Platform.</li>
                <li>Enable creator payouts.</li>
                <li>
                  Moderate and enhance user-generated content (including with
                  AI).
                </li>
                <li>Send updates, notifications, and support messages.</li>
                <li>
                  Protect against fraud, abuse, and violations of our Terms.
                </li>
              </ul>
            </section>

            {/* Section 3: Sharing of Information */}
            <section className="mb-8">
              <h3 className="text-orange-500 mb-4 heading-tertiary">
                3. Sharing of Information
              </h3>
              <p className="text-darkblue leading-relaxed mb-4">
                We do not sell your personal information. We may share it with:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Service Providers:
                  </h4>
                  <p className="text-darkblue leading-relaxed">
                    Payment processors, cloud hosting, analytics tools.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Legal Obligations:
                  </h4>
                  <p className="text-darkblue leading-relaxed">
                    If required by law or to protect rights, safety, and
                    security.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Community Visibility:
                  </h4>
                  <p className="text-darkblue leading-relaxed">
                    Content you post (e.g., guides, reviews) is visible to other
                    users.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Children's Privacy */}
            <section className="mb-8">
              <h3 className="text-orange-500 mb-4 heading-tertiary">
                4. Children&apos;s Privacy
              </h3>
              <p className="text-darkblue leading-relaxed">
                WeWandr is designed for parents. Accounts may only be created by
                individuals 18 or older. Children may access the Platform only
                under the supervision of a parent or guardian. We do not
                knowingly collect personal data directly from children under 18.
              </p>
            </section>

            {/* Section 5: Data Security */}
            <section className="mb-8">
              <h3 className="text-orange-500 mb-4 heading-tertiary">
                5. Data Security
              </h3>
              <p className="text-darkblue leading-relaxed">
                We implement industry-standard security measures to protect your
                data. However, no online service can be completely secure, and
                we cannot guarantee absolute protection.
              </p>
            </section>

            {/* Section 6: Your Rights */}
            <section className="mb-8">
              <h3 className="text-orange-500 mb-4 heading-tertiary">
                6. Your Rights
              </h3>
              <p className="text-darkblue leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-darkblue leading-relaxed space-y-2 ml-4 mb-4">
                <li>Access, correct, or delete your personal data.</li>
                <li>Request a copy of your data.</li>
                <li>Opt out of marketing communications.</li>
                <li>Restrict or object to certain data uses.</li>
              </ul>
              <p className="text-darkblue leading-relaxed">
                Requests can be made by contacting us at{" "}
                <a
                  href="mailto:hello@wewandr.co"
                  className="text-orange-600 hover:text-orange-700 font-semibold"
                >
                  hello@wewandr.co
                </a>
                .
              </p>
            </section>

            {/* Section 7: International Transfers */}
            <section className="mb-8">
              <h3 className="text-orange-500 mb-4 heading-tertiary">
                7. International Transfers
              </h3>
              <p className="text-darkblue leading-relaxed">
                WeWandr is based in Canada but may process and store data in
                other countries. By using the Platform, you consent to data
                transfers outside your country of residence.
              </p>
            </section>

            {/* Section 8: Changes to this Policy */}
            <section className="mb-8">
              <h3 className="text-orange-500 mb-4 heading-tertiary">
                8. Changes to this Policy
              </h3>
              <p className="text-darkblue leading-relaxed">
                We may update this Privacy Policy as WeWandr grows. Updates will
                be posted on this page with a revised effective date.
              </p>
            </section>
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
