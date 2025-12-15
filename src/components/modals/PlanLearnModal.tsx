"use client";

import { useState, useEffect } from "react";
import {
  FaSuitcase,
  FaHome,
  FaShoppingCart,
  FaRoute,
  FaShieldAlt,
  FaStar,
  FaGlobe,
  FaList,
  FaThumbsUp,
} from "react-icons/fa";

interface PlanLearnModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PlanLearnModal({
  isOpen,
  onClose,
}: PlanLearnModalProps) {
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

  const categories = [
    {
      icon: FaSuitcase,
      title: "Gear Logistics",
      description:
        "How parents travelled with strollers, carseats, high chairs, potties, pack and plays, carriers and more.",
    },
    {
      icon: FaHome,
      title: "Kid-Friendly Accommodation Reviews",
      description:
        "What was included, safety notes to keep in mind, laundry access, and more.",
    },
    {
      icon: FaRoute,
      title: "On-the-Go Strategies",
      description:
        "Where to eat, nap, and find public toilets, how to arrange childcare, travel with pets, avoid large crowds, and more.",
    },
    {
      icon: FaShoppingCart,
      title: "Purchasing the Essentials",
      description:
        "Where to buy diapers, formula, snacks, and everything else you'll need day-to-day.",
    },
    {
      icon: FaShieldAlt,
      title: "Safety and Transportation",
      description:
        "Overall feeling of safety when walking with kids, stroller-friendliness, and the convenience/ cost of public transport, taxis, rideshares, bikes, and boats.",
    },
    {
      icon: FaStar,
      title: "'Yes' Activities",
      description:
        "Family-focused fun — what the whole family enjoyed most, kid and parent highlights, nearby playgrounds, open areas to run around, and places to unwind together.",
    },
    {
      icon: FaGlobe,
      title: "Destination Cultural Views",
      description:
        "Local attitudes toward breastfeeding and diaper changes in public, respectful clothing norms, helpful words or gestures, tipping practices, whether patios and pubs welcome kids, and more.",
    },
    {
      icon: FaList,
      title: "Packing Lists",
      description:
        "What families actually wore, what was handy to pack (and hard to buy locally), temperature ranges for the season, travel day essentials, and more.",
    },
    {
      icon: FaThumbsUp,
      title: "Highlights & Lowlights",
      description:
        "Real parent perspectives, what families loved and what they'd skip next time.",
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
      <div className="relative bg-cream rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-cream border-b border-orange-200 px-8 py-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold text-darkblue pt-serif-bold">
              Plan & Learn
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
          <p className="text-lg text-darkblue mt-4 max-w-4xl pt-serif-regular">
            WandrGuides are the inside scoop on real family trips — what worked,
            what didn&apos;t, and what to know before you go. Each one is a
            tried-and-tested roadmap to help parents plan their next adventure.
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-darkblue mb-6 pt-serif-bold">
            In each WandrGuide you&apos;ll find insight into:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isExpanded = expandedCards.has(index);

              return (
                <div
                  key={index}
                  className="bg-cream p-6 rounded-xl border-2 border-orange-300 hover:border-orange-500 transition-all duration-[800ms] cursor-pointer group"
                  onClick={() => isMobile && toggleCard(index)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="text-orange-500 text-2xl flex-shrink-0 group-hover:text-orange-600 transition-colors duration-[800ms]" />
                    <h3 className="text-lg font-bold text-darkblue pt-serif-bold group-hover:text-[#8fa7eb] transition-colors duration-[800ms]">
                      {category.title}
                    </h3>
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
                        {category.description}
                      </p>
                    </div>
                  ) : (
                    <div className="max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 overflow-hidden transition-all duration-[800ms] ease-in-out mt-0 group-hover:mt-3">
                      <p className="text-darkblue leading-relaxed pt-serif-regular">
                        {category.description}
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
  );
}
