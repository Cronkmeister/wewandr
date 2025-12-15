import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — WeWandr",
  description: "Everything you need to know about WeWandr",
};

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqData: FAQSection[] = [
  {
    title: "About WeWandr",
    items: [
      {
        question: "What is WeWandr?",
        answer:
          "WeWandr is a parent-powered travel platform. It's where real families share their real trips — what worked, what didn't, and what to know before you go — in downloadable WandrGuides.",
      },
      {
        question: "When will WeWandr officially launch?",
        answer:
          "We're preparing to launch WeWandr publicly in 2026-2027. Right now, we're building the platform, refining features with early parent testers, and growing our founding community. If you join the waitlist, you'll be among the first to explore the beta, publish your own WandrGuide, and help shape what WeWandr becomes.",
      },
      {
        question: "Why was WeWandr created?",
        answer:
          "Because family travel is incredible… and complicated. After traveling solo with a baby, our founder realized there wasn't a centralized shared space for parents to exchange what they've learned — or be recognized for it. WeWandr was built to change that.",
      },
      {
        question: "Who is WeWandr for?",
        answer:
          "WeWandr is for parents, caregivers, and anyone planning a trip with kids. Whether you're a first-time traveler or a seasoned wanderer, you'll find practical insights from families who've already been there.",
      },
      {
        question: "Can non-parents join WeWandr?",
        answer:
          "Absolutely. WeWandr was inspired by parents helping parents, but it's rooted in something universal — people helping people travel better. Whether you're traveling solo, with friends, or with family, you're part of what makes this community stronger.",
      },
      {
        question: "Where is WeWandr based?",
        answer:
          "WeWandr is proudly built in Canada and growing globally. Our community includes parents from around the world sharing trips across every kind of destination.",
      },
    ],
  },
  {
    title: "Using WandrGuides",
    items: [
      {
        question: "What is a WandrGuide?",
        answer:
          "A WandrGuide is a concise, parent-written travel guide to a real trip. It covers where a family went, how they got there, where they stayed, what they did, and what they learned — the highlights, the lowlights, and everything in between.",
      },
      {
        question: "Are WandrGuides free to download?",
        answer:
          "Yes. Every WandrGuide is free for parents to browse and download. When you download one, WeWandr — not you — pays the parent who wrote it.",
      },
      {
        question: "How do I find the right WandrGuides for my family?",
        answer:
          "You can search by destination, kids' ages, trip type, and travel style. The goal is to make it easy to find guides that match your kind of trip.",
      },
      {
        question: "Can I trust the information in WandrGuides?",
        answer:
          "Yes — WeWandr is built on good-faith sharing and parent-to-parent honesty. Every guide is reviewed by our team to ensure it meets community standards before it's published. We also offer profile verification to keep our space authentic and secure.",
      },
      {
        question:
          "English isn't my first language, can I still create a WandrGuide?",
        answer:
          "Yes! For now, all WandrGuides are written and published in English so families around the world can browse and learn from one shared library. That said, we know travel stories transcend language — and we're already planning translation tools to help parents write, read, and share guides in multiple languages in the future.",
      },
      {
        question: "Can I save or share my favorite guides?",
        answer:
          "Absolutely! You can save any guide to your personal library and share it directly with family or friends anytime.",
      },
    ],
  },
  {
    title: "Creating and Earning",
    items: [
      {
        question: "Who can create a WandrGuide?",
        answer:
          "Anyone with travel insight to share. While many guides come from parents and caregivers, we welcome everyone to share what they know — and earn as they go. Our simple framework makes it easy to turn your experience into a guide that helps others travel better.",
      },
      {
        question: "How do I create a WandrGuide?",
        answer:
          "You'll fill out a simple step-by-step template covering your trip details, accommodations, activities, and advice. Once submitted, our team reviews it before publishing.",
      },
      {
        question: "What kinds of trips can I share?",
        answer:
          "Any! Whether it's a weekend getaway, an international adventure, a local staycation, or even a day trip — if it would have helped your family travel better, it's worth sharing. Every trip, big or small, helps another parent plan with confidence.",
      },
      {
        question: "How recent does the trip have to be?",
        answer:
          "There's no strict cutoff — what matters most is that your details are accurate and helpful. Most WandrGuides are based on trips taken within the past few years, but if your experience is still relevant (for example, the destination, hotel, or attractions haven't changed much), we'd love to see it. Family travel wisdom doesn't expire overnight.",
      },
      {
        question: "Do I get paid for my WandrGuide?",
        answer:
          "Yes. Every time another parent downloads your WandrGuide, WeWandr pays you. It's our way of recognizing that parents' real-world travel knowledge has real value.",
      },
      {
        question: "How much can I earn?",
        answer:
          "You earn a payout each time your guide is downloaded. The more helpful your guide is — and the more it's downloaded — the more you earn. (Payout details will be shared as we open beta.)",
      },
      {
        question: "Can I update or delete my guide?",
        answer:
          "Absolutely. You can edit, refresh, or remove your guide anytime from your creator dashboard.",
      },
      {
        question: "Do I need professional photos or videos?",
        answer:
          "No. Clear, honest images are great, but your insights matter most. Parents care more about what really worked than a perfect photo.",
      },
    ],
  },
  {
    title: "Community and Safety",
    items: [
      {
        question: "Is WeWandr a social network?",
        answer:
          "Not quite - it's a knowledge-sharing community. You can follow other parents, explore their guides, and connect through shared experiences, but the focus stays on trips, not profiles.",
      },
      {
        question: "How does WeWandr keep families safe?",
        answer:
          "WeWandr never requires personal details about children and encourages all creators to protect privacy (i.e. no identifiable images of kids, no personal addresses). Every guide is reviewed before going live.",
      },
    ],
  },
  {
    title: "Getting Involved",
    items: [
      {
        question: "How can I join the beta or get involved early?",
        answer:
          "Sign up on our website to join the waitlist. You'll get early updates, invitations to test new features, and the chance to publish your first WandrGuide before launch.",
      },
      {
        question: "Is there a cost to join?",
        answer:
          "No — joining and browsing WeWandr is free. Premium features and tools will be introduced later, but the heart of WeWandr will always stay open and accessible.",
      },
      {
        question:
          "I'm interested in partnering or collaborating. Who do I contact?",
        answer: (
          <>
            We&apos;d love to hear from you. Please reach out via{" "}
            <a
              href="mailto:hello@wewandr.co"
              className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
            >
              hello@wewandr.co
            </a>
          </>
        ),
      },
    ],
  },
  {
    title: "Behind the Scenes",
    items: [
      {
        question: "Who's building WeWandr?",
        answer:
          "WeWandr was founded by Natasha Aylward, a mom of three based on Vancouver Island, inspired by the power of parents helping parents. She's now building the platform with a small, passionate team — and a growing community of travel-loving families.",
      },
      {
        question: "How does WeWandr make money?",
        answer:
          "Our model is freemium: guides are always free for parents, and WeWandr earns through premium features, partnerships, and sponsorships- all designed to keep creator payouts sustainable while keeping access free for families.",
      },
      {
        question: "What makes WeWandr different from other travel sites?",
        answer:
          "WeWandr flips the script — instead of expert-to-reader advice, it's parent-to-parent knowledge sharing. It's about real families, real trips, and real income for the people behind the insights.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 bg-gradient-to-br from-orange-400 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 heading-primary">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/90 pt-serif-regular">
            You&apos;re not the only one wondering how it all works — and
            that&apos;s exactly why we built this space. Here&apos;s everything
            you need to know.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-cream rounded-lg shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {faqData.map((section, sectionIndex) => (
              <section key={sectionIndex} className="mb-12">
                <h2 className="text-darkblue mb-6 heading-secondary">
                  {section.title}
                </h2>

                <div className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-orange-500 mb-3 heading-tertiary">
                        {item.question}
                      </h3>
                      <div className="text-gray-700 leading-relaxed pt-serif-regular">
                        {item.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors pt-serif-regular"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
