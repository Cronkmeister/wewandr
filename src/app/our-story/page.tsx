"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

export default function OurStoryPage() {
  const ourStoryRef = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      <div className="pt-24 md:pt-28">
        <div
          ref={ourStoryRef.ref}
          id="our-story"
          className="py-16 md:py-20 bg-cream"
        >
          <div
            className={`max-w-6xl mx-auto px-4 section-animate ${
              ourStoryRef.isIntersecting ? "animate-in" : ""
            }`}
          >
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold text-darkblue mb-12 text-center pt-serif-bold animate-fade-up animate-stagger-1">
                Our Story
              </h1>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Left - Founder Image */}
                <div className="flex justify-center md:justify-start order-2 md:order-1 animate-fade-up animate-stagger-2">
                  <Image
                    src="/assets/imgs/founder-min.jpeg"
                    alt="WeWandr founder"
                    width={500}
                    height={600}
                    className="w-full max-w-md object-contain rounded-lg"
                  />
                </div>

                {/* Right - Text Content */}
                <div className="space-y-8 text-center md:text-left order-1 md:order-2">
                  <p className="text-lg md:text-xl text-darkblue italic leading-relaxed pt-serif-regular animate-fade-up animate-stagger-3">
                    It started with one parent searching for a better way to
                    travel with kids and turned into a platform empowering
                    families everywhere to share what they know.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-darkblue mt-12 mb-6 pt-serif-bold animate-fade-up animate-stagger-4">
                    Founder&apos;s Story
                  </h2>

                  <div className="space-y-6 text-darkblue leading-relaxed animate-fade-up animate-stagger-5">
                    <p className="text-base md:text-lg pt-serif-regular">
                      After the birth of her third son, WeWandr&apos;s founder
                      realized that while travel with kids can feel out of
                      reach, more families are exploring the world now than ever
                      before, just without a shared space to exchange what
                      they&apos;ve learned.
                    </p>

                    <p className="text-base md:text-lg pt-serif-regular">
                      That insight sparked WeWandr: a parent-powered platform
                      where real families share real trips, and parents are paid
                      for their hard-earned wisdom.
                    </p>

                    <p className="text-base md:text-lg pt-serif-regular">
                      The idea was inspired by a moment on a flight home with
                      her 3-month-old son two years prior, when she offered to
                      hold another mother&apos;s baby so she could take a break.
                      That simple act of trust between two parents became a
                      lasting reminder: we&apos;re not meant to do this alone.
                    </p>

                    <p className="text-base md:text-lg pt-serif-regular">
                      WeWandr exists to bring that same spirit online, the quiet
                      power of parents helping parents, proving that when we
                      share what we know, we make the world a little more open,
                      and family travel a little more possible for everyone.
                    </p>
                  </div>

                  <p className="text-xl md:text-2xl font-semibold text-darkblue mt-12 italic leading-relaxed pt-serif-regular animate-fade-up animate-stagger-6 text-center md:text-left">
                    One small act of trust between parents inspired WeWandr, a
                    community proving we&apos;re never meant to do this alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
