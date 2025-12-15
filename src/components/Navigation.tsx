"use client";

import Link from "next/link";

export default function Navigation() {
  return (
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
              className="text-2xl font-bold text-orange-500 dm-serif-display-regular transition-all duration-300 hover:scale-110 hover:text-orange-400 cursor-pointer"
              href="/"
            >
              WeWandr
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="transition-all duration-300 font-medium link-hover roboto-medium text-orange-400 hover:text-orange-600"
            >
              About
            </a>
            <a
              href="#how-it-works"
              className="transition-all duration-300 font-medium link-hover roboto-medium text-orange-400 hover:text-orange-600"
            >
              How It Works
            </a>

            <a
              href="#beta"
              className="transition-all duration-300 font-medium link-hover roboto-medium text-orange-400 hover:text-orange-600"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="transition-all duration-300 hover:scale-110 roboto-medium text-orange-500 hover:text-orange-600">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
