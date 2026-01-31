"use client";

import Link from "next/link";
import { FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

export default function Footer() {
  const footerRef = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

  return (
    <footer
      ref={footerRef.ref}
      className={`relative py-16 overflow-hidden ${
        footerRef.isIntersecting ? "animate-in" : ""
      }`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/imgs/fam-holi-pic-1.jpg')",
        }}
      />

      {/* Purple Filter Overlay */}
      {/* opacity-90 --> removed for now */}
      <div className="absolute inset-0 bg-darkblue " />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Top Section - Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Left Column - Logo and Tagline */}
          <div className="md:col-span-2 animate-fade-left">
            <h3 className="text-3xl font-bold text-orange-500 mb-4 dm-serif-display-regular">
              WeWandr
            </h3>
            <div className="space-y-1 text-orange-200">
              <p className="text-sm font-medium tagline-primary">
                Where Parents Travel Better, and Earn Together
              </p>
            </div>
          </div>

          {/* Explore Section */}
          <div className="animate-fade-up animate-stagger-1">
            <h4 className="text-[#ffe44b] font-bold mb-4 heading-small">
              Explore
            </h4>
            <div className="space-y-2">
              <Link
                href="/#how-it-works"
                className="block text-[#ffe44b] hover:text-white transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/faq"
                className="block text-[#ffe44b] hover:text-white transition-colors"
              >
                FAQs
              </Link>
              <Link
                href="/founders-letter"
                className="block text-[#ffe44b] hover:text-white transition-colors"
              >
                Founder&apos;s Letter
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div className="animate-fade-up animate-stagger-2">
            <h4 className="text-[#ffe44b] font-bold mb-4 heading-small">
              Company
            </h4>
            <div className="space-y-2">
              <Link
                href="/investor-relations"
                className="block text-[#ffe44b] hover:text-white transition-colors"
              >
                Investor Relations
              </Link>
              <Link
                href="/join-our-team"
                className="block text-[#ffe44b] hover:text-white transition-colors"
              >
                Join Our Team
              </Link>
              <Link
                href="/contact"
                className="block text-[#ffe44b] hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="animate-fade-up animate-stagger-3">
            <h4 className="text-[#ffe44b] font-bold mb-4 heading-small">
              Follow
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/wewandr__"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-[#ffe44b] rounded-full flex items-center justify-center text-[#ffe44b] hover:text-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-110 icon-animate"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/wewandr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-[#ffe44b] rounded-full flex items-center justify-center text-[#ffe44b] hover:text-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-110 icon-animate"
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@wewandr.co"
                className="w-8 h-8 border border-[#ffe44b] rounded-full flex items-center justify-center text-[#ffe44b] hover:text-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-110 icon-animate"
                aria-label="Contact us via email"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Bottom Section - Copyright */}
        <div className="text-center animate-fade-up">
          <p className="text-white mt-2">
            &copy; 2025 WeWandr. All rights reserved.
          </p>
          <p className="text-white/80 text-xs mt-2">
            <Link
              href="/privacy"
              className="hover:text-yellow-300 transition-colors"
            >
              Privacy Policy
            </Link>
            {" | "}
            <Link
              href="/terms"
              className="hover:text-yellow-300 transition-colors"
            >
              Terms & Conditions
            </Link>
            {" | "}
            <Link
              href="/community-guidelines"
              className="hover:text-yellow-300 transition-colors"
            >
              Community Guidelines
            </Link>
          </p>
          <p className="text-white/80 text-xs mt-2">
            web design by{" "}
            <a
              className="hover:text-yellow-300 transition-colors"
              href="https://www.cronkcreative.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cronk Creative
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
