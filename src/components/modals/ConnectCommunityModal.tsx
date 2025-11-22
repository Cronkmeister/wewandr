"use client";

import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

interface ConnectCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectCommunityModal({
  isOpen,
  onClose,
}: ConnectCommunityModalProps) {
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

  const sections = [
    {
      icon: FaHeart,
      title: "Our Vision",
      description:
        "We believe in the power of parents learning from one another in a space that's safe, supportive, and empowering. The WeWandr community is built on solidarity: parents helping parents make family travel feel possible, together.",
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#060453] pt-serif-bold">
              Connect with Community
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
          <p className="text-lg text-[#060453] mt-4 max-w-3xl pt-serif-regular">
            Every parent who&apos;s traveled with young kids knows it&apos;s not
            easy, you are not alone. Together, we&apos;re proving that family
            travel is possible (and pretty incredible).
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isExpanded = expandedCards.has(index);

              return (
                <div
                  key={index}
                  className="bg-cream p-6 rounded-xl border-2 border-orange-300 hover:border-orange-500 transition-all duration-[800ms] cursor-pointer group"
                  onClick={() => isMobile && toggleCard(index)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-orange-500 text-2xl flex-shrink-0 group-hover:text-orange-600 transition-colors duration-[800ms]" />
                    <h3 className="text-xl font-bold text-[#060453] pt-serif-bold group-hover:text-[#8fa7eb] transition-colors duration-[800ms]">
                      {section.title}
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
                      <p className="text-[#060453] leading-relaxed pt-serif-regular">
                        {section.description}
                      </p>
                    </div>
                  ) : (
                    <div className="max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 overflow-hidden transition-all duration-[800ms] ease-in-out mt-0 group-hover:mt-3">
                      <p className="text-[#060453] leading-relaxed pt-serif-regular">
                        {section.description}
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
