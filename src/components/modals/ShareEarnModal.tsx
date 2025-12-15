"use client";

import { useState, useEffect } from "react";
import {
  FaDollarSign,
  FaCreditCard,
  FaHandsHelping,
  FaStar,
} from "react-icons/fa";

interface ShareEarnModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareEarnModal({
  isOpen,
  onClose,
}: ShareEarnModalProps) {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isOpen) return null;

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const benefits = [
    {
      icon: FaDollarSign,
      title: "Earn from Experience",
      description:
        "Turn your family travel know-how into income by sharing your hard-earned insights with other parents.",
    },
    {
      icon: FaCreditCard,
      title: "Flexible Payments",
      description:
        "Whether you prefer scheduled payouts or on-demand deposits, you're in control.",
    },
    {
      icon: FaHandsHelping,
      title: "Help Other Families",
      description:
        "Share what you've learned so other parents can plan with clarity, confidence, and enjoy smoother, more stress-free trips.",
    },
    {
      icon: FaStar,
      title: "Become a Trusted Source",
      description:
        "As parents download and review your guides, you'll become a go-to resource for family travel insights.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-cream rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-cream border-b border-orange-200 px-8 py-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold text-darkblue pt-serif-bold">
              Share & Earn
            </h2>
            <button
              onClick={onClose}
              className="text-orange-500 hover:text-orange-600 transition-colors duration-[800ms] p-2 pt-serif-regular"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="text-lg text-darkblue mt-4 max-w-3xl pt-serif-regular">
            You did the planning, you took the trip, you have the insight, and
            now it&apos;s time to earn real income when you help another family
            learn from your experience.
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="space-y-6">
            {/* Getting Started */}
            <div className="bg-cream p-6 rounded-xl border-2 border-orange-300 hover:border-orange-500 transition-all duration-[800ms]">
              <h3 className="text-xl font-bold text-darkblue mb-4 flex items-center pt-serif-bold">
                <span className="w-8 h-8 bg-darkblue rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 group-hover:bg-[#8fa7eb] transition-colors duration-[800ms]">
                  1
                </span>
                Getting Started
              </h3>
              <p className="text-darkblue leading-relaxed pt-serif-regular">
                To get started, simply add your deposit details into your
                profile, and click &apos;Create WandrGuide&apos; on our site.
              </p>
            </div>

            {/* Publishing & Growth */}
            <div className="bg-cream p-6 rounded-xl border-2 border-orange-300 hover:border-orange-500 transition-all duration-[800ms]">
              <h3 className="text-xl font-bold text-darkblue mb-4 flex items-center pt-serif-bold">
                <span className="w-8 h-8 bg-darkblue rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 group-hover:bg-[#8fa7eb] transition-colors duration-[800ms]">
                  2
                </span>
                Publishing & Growth
              </h3>
              <p className="text-darkblue leading-relaxed pt-serif-regular">
                Once your guide is published, watch as your downloads and income
                grow. We have set benchmarks for sending out funds
                automatically, or you can manually request a deposit at any
                time.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const isExpanded = expandedCards.has(index);

                return (
                  <div
                    key={index}
                    className="bg-cream p-6 rounded-xl border-2 border-orange-300 hover:border-orange-500 transition-all duration-[800ms] cursor-pointer group"
                    onClick={() => isMobile && toggleCard(index)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="text-orange-500 text-2xl flex-shrink-0 group-hover:text-orange-600 transition-colors duration-[800ms]" />
                      <h4 className="text-lg font-bold text-darkblue pt-serif-bold group-hover:text-[#8fa7eb] transition-colors duration-[800ms]">
                        {benefit.title}
                      </h4>
                    </div>
                    {/* Description - shown on hover (desktop) or when expanded (mobile) */}
                    {isMobile ? (
                      <div
                        className={`overflow-hidden transition-all duration-[800ms] ease-in-out ${
                          isExpanded
                            ? "max-h-96 opacity-100 mt-3"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-darkblue leading-relaxed pt-serif-regular">
                          {benefit.description}
                        </p>
                      </div>
                    ) : (
                      <div className="max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 overflow-hidden transition-all duration-[800ms] ease-in-out mt-0 group-hover:mt-3">
                        <p className="text-darkblue leading-relaxed pt-serif-regular">
                          {benefit.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
