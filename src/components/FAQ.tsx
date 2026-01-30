"use client";

import { useState } from "react";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is WeWandr?",
    answer:
      "WeWandr is a community-powered travel planning platform built on lived experience. We started with family travel, where context makes a real difference, and are growing into a place where people can learn from others who travel like they do.",
  },
  {
    question: "What is a WandrGuide?",
    answer:
      "A WandrGuide is a travel guide created from a real trip, written by someone who’s already been there. It focuses on the details that matter most, from logistics and daily rhythms to lessons learned, and is designed to be easy to explore and apply.",
  },
  {
    question: "Is WeWandr free to join?",
    answer:
      "Yes. Joining WeWandr and signing up for early access is free. As the platform evolves, we expect to introduce additional features and value-added tools through a freemium model - while keeping core access open and community-driven.",
  },
  {
    question: "How do parents earn from their guides?",
    answer:
      "When another family downloads a WandrGuide, WeWandr pays the parent who created it - recognizing the value of lived experience and the time it takes to share it thoughtfully.",
  },
  {
    question: "What does early access mean?",
    answer:
      "Early access means you're joining WeWandr while it's still taking shape. You'll be among the first to explore guides, contribute your own, share feedback, and help shape a platform designed around learning from people who feel familiar. People like you.",
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const faqRef = useIntersectionObserver<HTMLElement>({ threshold: 0.2 });

  const toggleItem = (index: number) => {
    setExpandedIndex((prev) => {
      // If clicking the same item, close it. Otherwise, open the new one.
      return prev === index ? null : index;
    });
  };

  return (
    <section ref={faqRef.ref} id="faq" className="py-20 bg-cream">
      <div
        className={`max-w-4xl mx-auto px-4 section-animate ${
          faqRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-orange-500 mb-4 animate-fade-up heading-primary">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqData.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className="bg-cream rounded-xl border-2 border-orange-300 hover:border-orange-500 transition-all duration-300 overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 flex items-center justify-between group focus:outline-none "
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg md:text-xl font-bold text-darkblue pr-4 group-hover:text-orange-500 transition-colors duration-300 pt-serif-bold">
                    {item.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-orange-500 transition-transform duration-500 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className={`px-6 pb-6 ${isExpanded ? "pt-0" : ""}`}>
                    <p className="text-darkblue leading-relaxed pt-serif-regular">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Full FAQ */}
        <div className="text-center animate-fade-up animate-stagger-6">
          <Link
            href="/faq"
            className="inline-block text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-300 pt-serif-regular text-lg"
          >
            Read Full FAQ →
          </Link>
        </div>
      </div>
    </section>
  );
}
