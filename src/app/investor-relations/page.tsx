import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import type { Metadata } from "next";
import { FaDownload, FaEnvelope, FaBell } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Investor Relations — WeWandr",
  description:
    "Investing in the future of family travel—powered by parents, scaled by community.",
};

export default function InvestorRelationsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* 1. Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/imgs/fam-holi-pic-1.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg animate-fade-up">
            Investing in the future of family travel, powered by parents, scaled
            by community.
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto drop-shadow-lg animate-fade-up animate-stagger-1">
            WeWandr is positioned to be the category-defining platform for
            family travel. Blending authentic community, creator monetization,
            and scalable tech.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-stagger-2">
            <Button className="bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 px-8 py-4 text-lg shadow-xl text-white">
              <FaDownload className="w-5 h-5" />
              Download Pitch Deck
            </Button>
            <Button className="bg-white/20 hover:bg-white/30 text-white  backdrop-blur-sm px-6 py-2 shadow-lg ">
              <FaEnvelope className="w-5 h-5" />
              Connect with Founder
            </Button>
          </div>
        </div>
      </div>

      {/* 2. Vision Section */}
      <div className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-gray-900 mb-12 text-center heading-primary">
            Our Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At WeWandr, we believe family travel should be easier, smarter,
                and powered by the people who know it best—parents themselves.
                We&apos;re building the first{" "}
                <strong>
                  community-driven, creator-powered travel platform
                </strong>{" "}
                where families can access trusted, parent-written guides
                (“WandrGuides”) for free, and every download pays the parent
                creator—creating a cycle of trust, authenticity, and community
                growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We&apos;re transforming scattered blog posts and unreliable
                recommendations into a trusted, searchable database of real
                family experiences—creating value for both travelers and
                creators.
              </p>
            </div>

            {/* Right Column - Graphic */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1 heading-small">
                      Parents
                    </h3>
                    <p className="text-sm text-gray-600">
                      Create & share guides
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-px h-12 bg-orange-300"></div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1 heading-small">
                      WandrGuides
                    </h3>
                    <p className="text-sm text-gray-600">
                      Downloadable travel intel
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-px h-12 bg-orange-300"></div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1 heading-small">
                      Community
                    </h3>
                    <p className="text-sm text-gray-600">
                      Growing network of families
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Market Intersection Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-gray-900 mb-12 text-center heading-primary">
            At the Intersection of Three Growing Markets
          </h2>

          <div className="space-y-6">
            {/* Card 1: Family Travel */}
            <div className="bg-gradient-to-r from-orange-50 to-white p-8 rounded-2xl border border-orange-200 hover:shadow-lg transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">✈️</span>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-3 heading-quaternary">
                    Family Travel
                  </h3>
                  <p className="text-lg text-gray-700">
                    Multi-billion-dollar sector with year-over-year growth.
                    Family travel represents one of the fastest-growing segments
                    in tourism, yet remains underserved by existing platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Creator Economy */}
            <div className="bg-gradient-to-r from-purple-50 to-white p-8 rounded-2xl border border-purple-200 hover:shadow-lg transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">💡</span>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-3 heading-quaternary">
                    Creator Economy
                  </h3>
                  <p className="text-lg text-gray-700">
                    Parents increasingly earn by sharing expertise. The creator
                    economy is booming, and family travel content is in high
                    demand but lacks a dedicated monetization platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Digital Marketplaces */}
            <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🔄</span>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-3 heading-quaternary">
                    Digital Marketplaces
                  </h3>
                  <p className="text-lg text-gray-700">
                    Scaling peer-to-peer value exchange. Modern consumers trust
                    peer recommendations over traditional advertising, creating
                    massive opportunity for marketplace platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Why Now Section */}
      <div className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-gray-900 mb-12 text-center heading-primary">
            Why Now?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Block 1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2 heading-tertiary">
                    Untapped Market
                  </h3>
                  <p className="text-gray-700">
                    $300B+ family travel market with no go-to parent platform.
                    Existing solutions are fragmented, unreliable, or not
                    designed for families.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2 heading-tertiary">
                    Parent-Creator Flywheel
                  </h3>
                  <p className="text-gray-700">
                    Parents create → families download → creators earn →
                    community grows. A self-reinforcing cycle that scales
                    organically.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2 heading-tertiary">
                    Multiple Revenue Streams
                  </h3>
                  <p className="text-gray-700">
                    Memberships, boosting, sponsorships. Diversified
                    monetization ensures sustainable growth and profitability.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2 heading-tertiary">
                    Early Interest
                  </h3>
                  <p className="text-gray-700">
                    Alpha build Fall 2025, growing waitlist. Early validation
                    shows strong demand from both creators and families.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Milestones Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-gray-900 mb-12 text-center heading-primary">
            Milestones So Far
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Milestone 1 */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-gray-900 mb-2 heading-small">
                Alpha Platform
              </h3>
              <p className="text-gray-600">In progress, launching Fall 2025</p>
            </div>

            {/* Milestone 2 */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="text-gray-900 mb-2 heading-small">
                Community Waitlist
              </h3>
              <p className="text-gray-600">Early parent community engaged</p>
            </div>

            {/* Milestone 3 */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-gray-900 mb-2 heading-small">
                Strategic Advisors
              </h3>
              <p className="text-gray-600">Industry experts engaged</p>
            </div>

            {/* Milestone 4 */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-gray-900 mb-2 heading-small">
                Pre-Seed Prep
              </h3>
              <p className="text-gray-600">Preparing for fundraising</p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. What's Next Section */}
      <div className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-gray-900 mb-8 text-center heading-primary">
            What&apos;s Next
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We&apos;re focused on launching our alpha platform in Fall 2025,
              proving the pay-per-download model with early creators, and
              building a foundation for rapid scaling. Our roadmap prioritizes
              community growth, product refinement, and establishing WeWandr as
              the trusted platform for family travel.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With the right strategic partners, we&apos;re positioned to
              capture significant market share in the family travel sector while
              creating sustainable income opportunities for parent creators
              worldwide.
            </p>
          </div>

          {/* Roadmap Graphic */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phase 1 */}
            <div className="bg-white p-6 rounded-xl border-2 border-orange-300 relative">
              <div className="absolute -top-4 left-6 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                Phase 1
              </div>
              <h3 className="text-gray-900 mt-4 mb-3 heading-tertiary">
                Alpha
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Platform development</li>
                <li>✓ Early creator onboarding</li>
                <li>✓ Core feature validation</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-6 rounded-xl border-2 border-orange-200 relative">
              <div className="absolute -top-4 left-6 bg-orange-400 text-white px-4 py-1 rounded-full text-sm font-bold">
                Phase 2
              </div>
              <h3 className="text-gray-900 mt-4 mb-3 heading-tertiary">
                Proof
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>→ Model validation</li>
                <li>→ Community growth</li>
                <li>→ Revenue generation</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="bg-white p-6 rounded-xl border-2 border-orange-100 relative">
              <div className="absolute -top-4 left-6 bg-orange-300 text-white px-4 py-1 rounded-full text-sm font-bold">
                Phase 3
              </div>
              <h3 className="text-gray-900 mt-4 mb-3 heading-tertiary">
                Scale
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>→ Market expansion</li>
                <li>→ Feature enhancement</li>
                <li>→ Partnership development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Investor Call-to-Action Section */}
      <div className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white mb-6 heading-primary">Connect With Us</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Interested in learning more about WeWandr&apos;s investment
            opportunity? We&apos;d love to hear from you.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Button */}
            <a
              href="mailto:investors@wewandr.com"
              className="block bg-white text-orange-600 hover:bg-gray-100 transition-all px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <FaEnvelope className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg mb-2 heading-small">Email Our Founder</h3>
              <p className="text-sm text-gray-600">Get in touch directly</p>
            </a>

            {/* Pitch Deck Button */}
            <a
              href="#pitch-deck"
              className="block bg-white text-orange-600 hover:bg-gray-100 transition-all px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <FaDownload className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg mb-2 heading-small">Request Pitch Deck</h3>
              <p className="text-sm text-gray-600">View detailed opportunity</p>
            </a>

            {/* Stay Updated Button */}
            <a
              href="#signup"
              className="block bg-white text-orange-600 hover:bg-gray-100 transition-all px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <FaBell className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg mb-2 heading-small">Stay Updated</h3>
              <p className="text-sm text-gray-600">Receive investor updates</p>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
