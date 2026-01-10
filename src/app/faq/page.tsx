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
          "WeWandr is a community-powered travel planning platform built on lived experience. We started with family travel, where context makes a real difference, and are growing into a place where people can learn from others who travel like they do.",
      },
      {
        question: "Why was WeWandr created?",
        answer:
          "WeWandr was created to make family travel easier, more trusted, and less overwhelming. Too often, the most helpful details live in conversations between parents. WeWandr brings that lived experience together in one place.",
      },
      {
        question: "Who is WeWandr for?",
        answer:
          "WeWandr is for anyone who values learning from real experience rather than one-size-fits-all advice. Today, our focus is families traveling with kids — but over time, WeWandr is growing into a broader trust layer for travel planning, where people can find guidance from others who travel in similar ways.",
      },
      {
        question: "Do I need to be a parent to use WeWandr?",
        answer:
          "No. While WeWandr is built with families in mind, you don't need to be a parent to explore guides or participate. As the platform evolves, it will support all types of travelers — helping people find their own travel community.",
      },
      {
        question: "What makes WeWandr different from blogs, forums, or social platforms?",
        answer:
          "WeWandr is built to organize real travel experience into something structured, practical, and trust-led. Instead of digging through posts or threads, trips are shaped into clear, reusable guides — making it easier to learn from people who travel in ways that feel familiar.",
      },
      {
        question: "Where is WeWandr based?",
        answer:
          "WeWandr is based in Canada and being built with families from around the world.",
      },
      {
        question: "When will WeWandr officially launch?",
        answer:
          "WeWandr is rolling out gradually. Early access will open in stages as features are tested, refined, and expanded.",
      },
    ],
  },
  {
    title: "WandrGuides",
    items: [
      {
        question: "What is a WandrGuide?",
        answer:
          "A WandrGuide is a travel guide created from a real trip, written by someone who's already been there. Each guide captures the details people actually care about — from logistics and daily rhythms to lessons learned — and is designed to be easy to explore and apply.",
      },
      {
        question: "What kind of information is included in a WandrGuide?",
        answer:
          "WandrGuides typically include gear and logistics, kid-friendly places to stay, daily rhythms and essentials, transportation notes, and highlights and lessons learned from the trip.",
      },
      {
        question: "Are WandrGuides free to access?",
        answer:
          "Yes. WandrGuides are free to explore and use. We believe access to helpful, experience-based guidance should be open and easy.",
      },
      {
        question: "How do I find the right WandrGuides for my family?",
        answer:
          "Guides can be discovered using filters like destination, children's ages, trip type, and travel style — making it easier to find trips that match your needs.",
      },
      {
        question: "Can I trust the information in WandrGuides?",
        answer:
          "WandrGuides are based on real trips taken by real families. Guides go through review layers before being shared publicly, helping surface useful insights while keeping lived experience at the core.",
      },
      {
        question: "Can I save or revisit guides I like?",
        answer:
          "Yes. As features roll out, you'll be able to save and return to guides that are most useful for you.",
      },
    ],
  },
  {
    title: "Creating & Earning",
    items: [
      {
        question: "Who can create a WandrGuide?",
        answer:
          "Anyone with relevant travel experience can create a WandrGuide. You don't need to be a professional writer or an expert — just someone willing to share what you learned so others can plan with more clarity and confidence.",
      },
      {
        question: "How do I create a WandrGuide?",
        answer:
          "WandrGuides are created using a guided, step-by-step framework with helpful prompts. The process is designed to be simple, structured, and supportive.",
      },
      {
        question: "Do creators get paid for their guides?",
        answer:
          "Yes. WeWandr pays creators for the guides they contribute, recognizing the value of lived experience and the time it takes to share it thoughtfully.",
      },
      {
        question: "How does payment work?",
        answer:
          "Payment details will be shared clearly as features roll out. Our goal is to make payouts straightforward, transparent, and aligned with real use — without placing the cost on people accessing the guides.",
      },
    ],
  },
  {
    title: "Trust, Community & Access",
    items: [
      {
        question: "How does WeWandr help ensure quality and trust?",
        answer:
          "Guides go through review layers and are supported by thoughtful systems designed to surface the most helpful insights- while keeping guidance grounded in real experience.",
      },
      {
        question: "What does early access mean?",
        answer:
          "Early access means you're joining WeWandr while it's still taking shape. You'll be among the first to explore guides, contribute your own, share feedback, and help shape what comes next.",
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
