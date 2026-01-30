"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

export default function InvestorRelationsPage() {
  const heroRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <div
        ref={heroRef.ref}
        className={`relative min-h-[115vh] flex items-start justify-center pt-20 md:pt-36 overflow-hidden bg-gradient-to-b from-cream via-[#FFFBF8] to-[#FFFBF8] ${
          heroRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="dm-serif-display-regular text-4xl md:text-6xl text-orange-500 mb-12 animate-fade-scale heading-primary">
            Investor Relations
          </h1>

          <div className="space-y-8 text-left animate-fade-up animate-stagger-1">
            <p className="text-lg md:text-xl text-darkblue leading-relaxed pt-serif-regular">
              WeWandr is an early-stage, trust-led platform rethinking how
              people plan travel, starting with families and expanding into a
              broader layer for experience-backed travelguidance.
            </p>

            <p className="text-lg md:text-xl text-darkblue leading-relaxed pt-serif-regular">
              The company is currently in an early build and validation phase,
              focused on product development, community formation, and
              thoughtful growth.
            </p>

            <p className="text-lg md:text-xl text-darkblue leading-relaxed pt-serif-regular">
              We&apos;re selectively connecting with investors who are aligned
              with our long-term vision around trust, lived experience, and
              sustainable network-driven platforms.
            </p>

            <div className="pt-8 border-t border-orange-300">
              <p className="text-lg md:text-xl text-orange-500 font-semibold mb-4 pt-serif-regular">
                For investor inquiries:
              </p>
              <a
                href="mailto:investors@wewandr.co"
                className="text-lg md:text-xl text-darkblue hover:text-orange-500 transition-colors duration-300 underline underline-offset-4 pt-serif-regular"
              >
                investors@wewandr.co
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
