"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

export default function FoundersLetterPage() {
  const heroRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <div
        ref={heroRef.ref}
        className={`relative min-h-[115vh] flex items-start justify-center pt-20 md:pt-36 pb-24 md:pb-36 overflow-hidden bg-gradient-to-b from-cream via-[#FFFBF8] to-[#FFFBF8] ${
          heroRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="relative z-10 px-4 max-w-6xl mx-auto w-full">
          <h1 className="dm-serif-display-regular text-4xl md:text-6xl text-orange-500 mb-16 md:mb-24 text-center animate-fade-scale heading-primary">
            A Letter from Our Founder
          </h1>

          <div className="max-w-3xl mx-auto">
            {/* Text Content */}
            <div className="space-y-8 text-left animate-fade-up animate-stagger-1">
              <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                I didn&apos;t start WeWandr because I love travel planning.
              </p>

              <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                I started it because, at a certain point, family travel started
                to feel almost impossible.
              </p>

              <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                After our third son, the thought of planning a trip felt
                overwhelming. Not just the big pieces - flights or
                accommodations - but all the in-between details that parents
                quietly carry: what to pack, how to get around with kids, what
                daily life would actually look like once we arrived. The
                information was out there, but it was scattered, impersonal, and
                often didn&apos;t apply to families like ours.
              </p>

              <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                And yet, I also held onto a very different memory.
              </p>

              <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                Two years earlier, I was on a plane with our three-month-old
                son. I was figuring things out as I went - all trial, almost all
                errors and countless kind strangers helping me along the way. At
                some point during the flight, another mom traveling alone with
                her baby needed help. Without thinking twice, I stepped in. Not
                because I had special expertise, but because I was living it
                too. We understood each other instantly.
              </p>

              <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular italic">
                That moment stayed with me.
              </p>

              <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                It reminded me that parents don&apos;t need perfect advice - we
                need each other. We need the kind of insight that only comes
                from lived experience, shared honestly, without judgment.
                Parents helping parents travel better, together.
              </p>

              <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                WeWandr was born from that idea.
              </p>

              <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                We started with family travel because it&apos;s a category where
                small details truly matter - and trust is essential. Where
                one-size-fits-all advice falls short, and where learning from
                someone who&apos;s already been there can make all the
                difference. But the vision is bigger than any one type of
                traveler. WeWandr is being built as a place where people can
                learn from others who travel like they do and where lived
                experience is recognized and valued.
              </p>

              <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                Alongside being a parent, I&apos;ve spent much of my career
                working closely with early-stage teams, focused on marketing,
                strategy, and growth - with a background in finance that&apos;s
                shaped how I think about building sustainable systems. I care
                deeply about creating things that are thoughtful, scalable, and
                grounded in real human needs, not trends or noise.
              </p>

              <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                That&apos;s how WeWandr is being built.
              </p>

              <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                Not as a platform driven by influence or volume, but as a
                trusted place for experience to be shared, organized, and
                respected. A place where families, and eventually all kinds of
                travelers, can feel less alone in figuring things out.
              </p>

              <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                WeWandr is still taking shape. It&apos;s being informed by real
                trips, real challenges, and early input from people who believe,
                as I do, that travel is be easier when we learn from one
                another.
              </p>

              <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                If this resonates with you, I&apos;d love for you to be part of
                it.
              </p>

              <div className="pt-8 space-y-2">
                <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                  Warmly,
                </p>
                <div className="py-2">
                  <Image
                    src="/assets/imgs/signature-blue.png"
                    alt="Natasha signature"
                    width={200}
                    height={80}
                    className="h-auto max-w-[200px]"
                  />
                </div>
                <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                  Founder, WeWandr
                </p>
              </div>

              <div className="pt-12 text-center">
                <Link
                  href="/"
                  className="text-orange-500 hover:text-orange-600 transition-colors font-semibold"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
