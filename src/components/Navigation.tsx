"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <>
      <nav
        className={`fixed top-0 h-16 md:h-20 left-0 right-0 z-50 transition-all duration-700 ease-out gpu-accelerated bg-transparent`}
        //    ${
        //   isScrolled ? "nav-glass" :
        // }
      >
        <div className="max-w-6xl mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-orange-500 dm-serif-display-regular transition-all duration-300 hover:scale-110 hover:text-orange-400 cursor-pointer"
              >
                WeWandr
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/#features"
                className="transition-all duration-300 font-medium link-hover pt-serif-regular text-orange-400 hover:text-orange-600"
              >
                About
              </Link>
              <Link
                href="/#how-it-works"
                className="transition-all duration-300 font-medium link-hover pt-serif-regular text-orange-400 hover:text-orange-600"
              >
                How It Works
              </Link>

              <Link
                href="/#beta"
                className="transition-all duration-300 font-medium link-hover pt-serif-regular text-orange-400 hover:text-orange-600"
              >
                Join Early Access
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="transition-all duration-300 hover:scale-110 pt-serif-regular text-orange-500 hover:text-orange-600 z-50 relative"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="w-6 h-6 relative">
                  {/* Hamburger icon */}
                  <svg
                    className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "opacity-0 rotate-90"
                        : "opacity-100 rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/* Close icon */}
                  <svg
                    className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "opacity-100 rotate-0"
                        : "opacity-0 -rotate-90"
                    }`}
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
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-50" : "opacity-0"
          }`}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-6">
              <Link
                href="/#features"
                onClick={handleLinkClick}
                className="text-xl font-medium pt-serif-regular text-orange-500 hover:text-orange-600 transition-all duration-300 py-2 border-b border-gray-200 hover:border-orange-400"
              >
                About
              </Link>
              <Link
                href="/#how-it-works"
                onClick={handleLinkClick}
                className="text-xl font-medium pt-serif-regular text-orange-500 hover:text-orange-600 transition-all duration-300 py-2 border-b border-gray-200 hover:border-orange-400"
              >
                How It Works
              </Link>
              <Link
                href="/#beta"
                onClick={handleLinkClick}
                className="text-xl font-medium pt-serif-regular text-orange-500 hover:text-orange-600 transition-all duration-300 py-2 border-b border-gray-200 hover:border-orange-400"
              >
                Join Waitlist
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
