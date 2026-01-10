"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { FaDownload, FaEnvelope, FaBell } from "react-icons/fa";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

export default function InvestorRelationsPage() {
  // Intersection observers for animations
  const heroRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
  const visionRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  const marketRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  const whyNowRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  const milestonesRef = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  });
  const whatsNextRef = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  });
  const ctaRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* 1. Hero Section */}
      <div
        ref={heroRef.ref}
        className={`relative min-h-[115vh] flex items-start justify-center pt-20 md:pt-36 overflow-hidden bg-gradient-to-b from-cream via-[#FFFBF8] to-[#FFFBF8] ${
          heroRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="dm-serif-display-regular text-4xl md:text-6xl text-orange-500 mb-6 animate-fade-scale heading-primary">
            Investing in the future of family travel, powered by parents, scaled
            by community.
          </h1>

          <p className="text-xl md:text-xl text-darkblue mb-12 max-w-3xl mx-auto tracking-wide animate-fade-up animate-stagger-1 pt-serif-regular">
            WeWandr is positioned to be the category-defining platform for
            family travel. Blending authentic community, creator monetization,
            and scalable tech.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-stagger-2">
            <Button className="bg-cream border-2 border-darkblue text-darkblue hover:bg-darkblue hover:text-white px-8 py-4 text-lg shadow-md transition-colors">
              <FaDownload className="w-5 h-5" />
              Download Pitch Deck
            </Button>
            <a
              href="mailto:investors@wewandr.co"
              className="inline-flex items-center justify-center gap-2 bg-cream border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-4 rounded-full shadow-md transition-all pt-serif-regular"
            >
              <FaEnvelope className="w-5 h-5" />
              Connect with Founder
            </a>
          </div>
        </div>
      </div>

      {/* 2. Vision Section */}
      <div
        ref={visionRef.ref}
        className={`py-20 bg-[#3240A1] section-animate ${
          visionRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-orange-300 mb-12 text-center heading-primary animate-fade-up animate-stagger-1">
            Our Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6 animate-fade-up animate-stagger-1">
              <p className="text-lg text-cream leading-relaxed pt-serif-regular">
                At WeWandr, we believe family travel should be easier, smarter,
                and powered by the people who know it best—parents themselves.
                We&apos;re building the first{" "}
                <strong className="text-orange-300">
                  community-driven, creator-powered travel platform
                </strong>{" "}
                where families can access trusted, parent-written guides
                (&quot;WandrGuides&quot;) for free, and every download pays the parent
                creator—creating a cycle of trust, authenticity, and community
                growth.
              </p>
              <p className="text-lg text-cream leading-relaxed pt-serif-regular">
                We&apos;re transforming scattered blog posts and unreliable
                recommendations into a trusted, searchable database of real
                family experiences—creating value for both travelers and
                creators.
              </p>
            </div>

            {/* Right Column - Graphic */}
            <div className="backdrop-blur-sm p-8 rounded-2xl border-2 border-white/20 hover:border-orange-400 hover:bg-white/10 transition-all duration-300 card-hover group animate-fade-up animate-stagger-2">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange-400/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-400/30 transition-colors duration-300">
                    <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-orange-300 mb-1 heading-small group-hover:text-orange-300 transition-colors duration-300">
                      Parents
                    </h3>
                    <p className="text-sm text-cream">
                      Create & share guides
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-px h-12 bg-orange-300"></div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange-400/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-400/30 transition-colors duration-300">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-orange-300 mb-1 heading-small group-hover:text-orange-300 transition-colors duration-300">
                      WandrGuides
                    </h3>
                    <p className="text-sm text-cream">
                      Downloadable travel intel
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-px h-12 bg-orange-300"></div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange-400/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-400/30 transition-colors duration-300">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-orange-300 mb-1 heading-small group-hover:text-orange-300 transition-colors duration-300">
                      Community
                    </h3>
                    <p className="text-sm text-cream">
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
      <div
        ref={marketRef.ref}
        className={`py-20 bg-cream section-animate ${
          marketRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-orange-500 mb-12 text-center heading-primary animate-fade-up animate-stagger-1">
            At the Intersection of Three Growing Markets
          </h2>

          <div className="space-y-6">
            {/* Card 1: Family Travel */}
            <div className="border-2 border-orange-300 rounded-xl p-8 hover:border-orange-400 hover:shadow-lg transition-all duration-300 card-hover group animate-fade-up animate-stagger-1">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">✈️</span>
                </div>
                <div>
                  <h3 className="text-orange-500 mb-3 heading-quaternary group-hover:text-orange-600 transition-colors duration-300">
                    Family Travel
                  </h3>
                  <p className="text-lg text-darkblue pt-serif-regular">
                    Multi-billion-dollar sector with year-over-year growth.
                    Family travel represents one of the fastest-growing segments
                    in tourism, yet remains underserved by existing platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Creator Economy */}
            <div className="border-2 border-orange-300 rounded-xl p-8 hover:border-orange-400 hover:shadow-lg transition-all duration-300 card-hover group animate-fade-up animate-stagger-2">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💡</span>
                </div>
                <div>
                  <h3 className="text-orange-500 mb-3 heading-quaternary group-hover:text-orange-600 transition-colors duration-300">
                    Creator Economy
                  </h3>
                  <p className="text-lg text-darkblue pt-serif-regular">
                    Parents increasingly earn by sharing expertise. The creator
                    economy is booming, and family travel content is in high
                    demand but lacks a dedicated monetization platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Digital Marketplaces */}
            <div className="border-2 border-orange-300 rounded-xl p-8 hover:border-orange-400 hover:shadow-lg transition-all duration-300 card-hover group animate-fade-up animate-stagger-3">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <div>
                  <h3 className="text-orange-500 mb-3 heading-quaternary group-hover:text-orange-600 transition-colors duration-300">
                    Digital Marketplaces
                  </h3>
                  <p className="text-lg text-darkblue pt-serif-regular">
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
      <div
        ref={whyNowRef.ref}
        className={`py-20 bg-[#3240A1] section-animate ${
          whyNowRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-orange-300 mb-12 text-center heading-primary animate-fade-up animate-stagger-1">
            Why Now?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Block 1 */}
            <div className="backdrop-blur-sm p-8 rounded-xl border-2 border-white/20 hover:border-orange-400 hover:bg-white/10 transition-all duration-300 card-hover group animate-fade-up animate-stagger-1">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-orange-400/30 transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-orange-300"
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
                  <h3 className="text-orange-300 mb-2 heading-tertiary group-hover:text-orange-300 transition-colors duration-300">
                    Untapped Market
                  </h3>
                  <p className="text-cream pt-serif-regular">
                    $300B+ family travel market with no go-to parent platform.
                    Existing solutions are fragmented, unreliable, or not
                    designed for families.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="backdrop-blur-sm p-8 rounded-xl border-2 border-white/20 hover:border-orange-400 hover:bg-white/10 transition-all duration-300 card-hover group animate-fade-up animate-stagger-2">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-orange-400/30 transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-orange-300"
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
                  <h3 className="text-orange-300 mb-2 heading-tertiary group-hover:text-orange-300 transition-colors duration-300">
                    Parent-Creator Flywheel
                  </h3>
                  <p className="text-cream pt-serif-regular">
                    Parents create → families download → creators earn →
                    community grows. A self-reinforcing cycle that scales
                    organically.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="backdrop-blur-sm p-8 rounded-xl border-2 border-white/20 hover:border-orange-400 hover:bg-white/10 transition-all duration-300 card-hover group animate-fade-up animate-stagger-3">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-orange-400/30 transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-orange-300"
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
                  <h3 className="text-orange-300 mb-2 heading-tertiary group-hover:text-orange-300 transition-colors duration-300">
                    Multiple Revenue Streams
                  </h3>
                  <p className="text-cream pt-serif-regular">
                    Memberships, boosting, sponsorships. Diversified
                    monetization ensures sustainable growth and profitability.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="backdrop-blur-sm p-8 rounded-xl border-2 border-white/20 hover:border-orange-400 hover:bg-white/10 transition-all duration-300 card-hover group animate-fade-up animate-stagger-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-orange-400/30 transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-orange-300"
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
                  <h3 className="text-orange-300 mb-2 heading-tertiary group-hover:text-orange-300 transition-colors duration-300">
                    Early Interest
                  </h3>
                  <p className="text-cream pt-serif-regular">
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
      <div
        ref={milestonesRef.ref}
        className={`py-20 bg-cream section-animate ${
          milestonesRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-orange-500 mb-12 text-center heading-primary animate-fade-up animate-stagger-1">
            Milestones So Far
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Milestone 1 */}
            <div className="text-center group animate-fade-up animate-stagger-1">
              <div className="w-24 h-24 bg-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-400/30 group-hover:scale-110 transition-all duration-300">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-orange-500 mb-2 heading-small group-hover:text-orange-600 transition-colors duration-300">
                Alpha Platform
              </h3>
              <p className="text-darkblue pt-serif-regular">In progress, launching Fall 2025</p>
            </div>

            {/* Milestone 2 */}
            <div className="text-center group animate-fade-up animate-stagger-2">
              <div className="w-24 h-24 bg-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-400/30 group-hover:scale-110 transition-all duration-300">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="text-orange-500 mb-2 heading-small group-hover:text-orange-600 transition-colors duration-300">
                Community Waitlist
              </h3>
              <p className="text-darkblue pt-serif-regular">Early parent community engaged</p>
            </div>

            {/* Milestone 3 */}
            <div className="text-center group animate-fade-up animate-stagger-3">
              <div className="w-24 h-24 bg-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-400/30 group-hover:scale-110 transition-all duration-300">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-orange-500 mb-2 heading-small group-hover:text-orange-600 transition-colors duration-300">
                Strategic Advisors
              </h3>
              <p className="text-darkblue pt-serif-regular">Industry experts engaged</p>
            </div>

            {/* Milestone 4 */}
            <div className="text-center group animate-fade-up animate-stagger-4">
              <div className="w-24 h-24 bg-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-400/30 group-hover:scale-110 transition-all duration-300">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-orange-500 mb-2 heading-small group-hover:text-orange-600 transition-colors duration-300">
                Pre-Seed Prep
              </h3>
              <p className="text-darkblue pt-serif-regular">Preparing for fundraising</p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. What's Next Section */}
      <div
        ref={whatsNextRef.ref}
        className={`py-20 bg-[#3240A1] section-animate ${
          whatsNextRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-orange-300 mb-8 text-center heading-primary animate-fade-up animate-stagger-1">
            What&apos;s Next
          </h2>

          <div className="backdrop-blur-sm rounded-2xl p-8 md:p-12 border-2 border-white/20 hover:border-orange-400 hover:bg-white/10 transition-all duration-300 card-hover mb-12 animate-fade-up animate-stagger-2">
            <p className="text-lg text-cream leading-relaxed mb-6 pt-serif-regular">
              We&apos;re focused on launching our alpha platform in Fall 2025,
              proving the pay-per-download model with early creators, and
              building a foundation for rapid scaling. Our roadmap prioritizes
              community growth, product refinement, and establishing WeWandr as
              the trusted platform for family travel.
            </p>
            <p className="text-lg text-cream leading-relaxed pt-serif-regular">
              With the right strategic partners, we&apos;re positioned to
              capture significant market share in the family travel sector while
              creating sustainable income opportunities for parent creators
              worldwide.
            </p>
          </div>

          {/* Roadmap Graphic */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phase 1 */}
            <div className="backdrop-blur-sm p-6 rounded-xl border-2 border-white/20 hover:border-orange-400 hover:bg-white/10 transition-all duration-300 card-hover relative animate-fade-up animate-stagger-1">
              <div className="absolute -top-4 left-6 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                Phase 1
              </div>
              <h3 className="text-orange-300 mt-4 mb-3 heading-tertiary">
                Alpha
              </h3>
              <ul className="space-y-2 text-cream pt-serif-regular">
                <li>✓ Platform development</li>
                <li>✓ Early creator onboarding</li>
                <li>✓ Core feature validation</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="backdrop-blur-sm p-6 rounded-xl border-2 border-white/20 hover:border-orange-400 hover:bg-white/10 transition-all duration-300 card-hover relative animate-fade-up animate-stagger-2">
              <div className="absolute -top-4 left-6 bg-orange-400 text-white px-4 py-1 rounded-full text-sm font-bold">
                Phase 2
              </div>
              <h3 className="text-orange-300 mt-4 mb-3 heading-tertiary">
                Proof
              </h3>
              <ul className="space-y-2 text-cream pt-serif-regular">
                <li>→ Model validation</li>
                <li>→ Community growth</li>
                <li>→ Revenue generation</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="backdrop-blur-sm p-6 rounded-xl border-2 border-white/20 hover:border-orange-400 hover:bg-white/10 transition-all duration-300 card-hover relative animate-fade-up animate-stagger-3">
              <div className="absolute -top-4 left-6 bg-orange-300 text-white px-4 py-1 rounded-full text-sm font-bold">
                Phase 3
              </div>
              <h3 className="text-orange-300 mt-4 mb-3 heading-tertiary">
                Scale
              </h3>
              <ul className="space-y-2 text-cream pt-serif-regular">
                <li>→ Market expansion</li>
                <li>→ Feature enhancement</li>
                <li>→ Partnership development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Investor Call-to-Action Section */}
      <div
        ref={ctaRef.ref}
        className={`py-20 bg-gradient-to-br from-orange-300 to-orange-500 section-animate ${
          ctaRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white mb-6 heading-primary animate-fade-up animate-stagger-1">
            Connect With Us
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto pt-serif-regular animate-fade-up animate-stagger-1">
            Interested in learning more about WeWandr&apos;s investment
            opportunity? We&apos;d love to hear from you.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Button */}
            <a
              href="mailto:investors@wewandr.co"
              className="block bg-cream border-2 border-darkblue text-darkblue hover:bg-darkblue hover:text-white transition-all px-8 py-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 animate-fade-up animate-stagger-2"
            >
              <FaEnvelope className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg mb-2 heading-small">Email Our Founder</h3>
              <p className="text-sm text-darkblue pt-serif-regular">Get in touch directly</p>
            </a>

            {/* Pitch Deck Button */}
            <a
              href="#pitch-deck"
              className="block bg-cream border-2 border-darkblue text-darkblue hover:bg-darkblue hover:text-white transition-all px-8 py-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 animate-fade-up animate-stagger-3"
            >
              <FaDownload className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg mb-2 heading-small">Request Pitch Deck</h3>
              <p className="text-sm text-darkblue pt-serif-regular">View detailed opportunity</p>
            </a>

            {/* Stay Updated Button */}
            <a
              href="#signup"
              className="block bg-cream border-2 border-darkblue text-darkblue hover:bg-darkblue hover:text-white transition-all px-8 py-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 animate-fade-up animate-stagger-4"
            >
              <FaBell className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg mb-2 heading-small">Stay Updated</h3>
              <p className="text-sm text-darkblue pt-serif-regular">Receive investor updates</p>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

