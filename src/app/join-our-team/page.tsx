"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

export default function JoinOurTeamPage() {
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
            Join Our Team
          </h1>

          <div className="space-y-8 text-left animate-fade-up animate-stagger-1">
            <p className="text-lg md:text-xl text-darkblue leading-relaxed pt-serif-regular">
              WeWandr is being built thoughtfully and deliberately, by a small
              team that cares deeply about lived experience, integrity, and
              creating things people can truly rely on.
            </p>

            <p className="text-lg md:text-xl text-darkblue leading-relaxed pt-serif-regular">
              While we&apos;re early, we&apos;re always interested in connecting
              with people who feel aligned with what we&apos;re building,
              especially those drawn to community-powered platforms, intentional
              product design, and building for the long term.
            </p>

            <p className="text-lg md:text-xl text-darkblue leading-relaxed pt-serif-regular">
              If you&apos;re curious about being part of the journey or
              exploring ways to work together as WeWandr grows, we&apos;d love
              to hear from you.
            </p>

            <div className="pt-8 border-t border-orange-300">
              <p className="text-lg md:text-xl text-orange-500 font-semibold mb-4 pt-serif-regular">
                Get in touch:
              </p>
              <a
                href="mailto:careers@wewandr.co"
                className="text-lg md:text-xl text-darkblue no-underline hover:text-orange-500 transition-colors duration-300 pt-serif-regular"
              >
                careers@wewandr.co
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
