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
      "WeWandr is a parent-powered travel platform where families share real trips and get paid when their guides are downloaded. It's built on community insight — real parents helping other parents travel smarter, easier, and with more confidence.",
  },
  {
    question: "Do you have to be a parent to join?",
    answer:
      "Not at all! WeWandr was inspired by parents helping parents, but it's rooted in something universal — people helping people travel better. Whether you're traveling solo, with friends, or with family, you're part of what makes this community stronger.",
  },
  {
    question: "How do parents earn on WeWandr?",
    answer:
      "When you create a WandrGuide (your family trip shared in our format), you earn income each time it's downloaded. Guides are free for families to access - WeWandr pays creators directly, our way of recognizing that parents' real-world travel knowledge has real value.",
  },
  {
    question: "When will WeWandr launch?",
    answer:
      "WeWandr is in early development, with our first public launch planned for 2026-2027. Right now, we're building our founding community of parents and early contributors — you can join our waitlist to be among the first to explore, share, and earn.",
  },
  {
    question: "What kinds of trips can I share?",
    answer:
      "Any kind! From weekend getaways to long-haul adventures — if the insight learned would have helped your family before going, it can help someone else.",
  },
  {
    question: "How do I get involved now?",
    answer:
      "Join our growing community! Sign up for early updates, contribute your first guide when the beta opens, or follow along as we build the world's first parent-powered travel platform together.",
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
