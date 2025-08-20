"use client";

import { FaInstagram, FaEnvelope } from "react-icons/fa";
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
      <div className="absolute inset-0 bg-[#9942f0] opacity-90" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Top Section - Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Left Column - Logo and Tagline */}
          <div className="md:col-span-1 animate-fade-left">
            <h3 className="text-3xl font-bold text-orange-500 mb-4 knewave-regular">
              WeWandr
            </h3>
            <div className="space-y-1 text-orange-500">
              <p className="text-sm font-medium">
                Travel Smart, Travel Together
              </p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="animate-fade-up animate-stagger-1">
            <h4 className="text-[#ffe44b] font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 border border-[#ffe44b] rounded-full flex items-center justify-center text-[#ffe44b] hover:text-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-110 icon-animate"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-[#ffe44b] rounded-full flex items-center justify-center text-[#ffe44b] hover:text-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-110 icon-animate"
                aria-label="Contact us via email"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Legal Section */}
          <div className="animate-fade-up animate-stagger-2">
            <h4 className="text-[#ffe44b] font-bold mb-4">Legal</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-[#ffe44b] hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="block text-[#ffe44b] hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Support Section */}
          <div className="animate-fade-up animate-stagger-3">
            <h4 className="text-[#ffe44b] font-bold mb-4">Support</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-[#ffe44b] hover:text-white transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="block text-[#ffe44b] hover:text-white transition-colors"
              >
                Investor Relations
              </a>
              <a
                href="#"
                className="block text-[#ffe44b] hover:text-white transition-colors"
              >
                Join Our Team
              </a>
              <a
                href="#"
                className="block text-[#ffe44b] hover:text-white transition-colors"
              >
                Contact
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
            web design by{" "}
            <a
              className="hover:text-yellow-300 transition-colors"
              href="https://www.jonnycronk.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jonny Cronk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
