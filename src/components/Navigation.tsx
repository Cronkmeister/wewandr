"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Blurry effect starts immediately on scroll
      setIsScrolled(scrollTop > 10);

      // Color changes only after hero section is completely passed (100vh)
      setIsPastHero(scrollTop > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 h-16 md:h-20 left-0 right-0 z-50 transition-all duration-700 ease-out gpu-accelerated ${
        isScrolled ? "nav-glass" : "bg-transparent"
      }`}
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
              className={`transition-all duration-300 font-medium link-hover roboto-medium ${
                isPastHero
                  ? "text-orange-300 hover:text-orange-600"
                  : "text-white hover:text-orange-300"
              }`}
            >
              About
            </a>
            <a
              href="#how-it-works"
              className={`transition-all duration-300 font-medium link-hover roboto-medium ${
                isPastHero
                  ? "text-orange-300 hover:text-orange-600"
                  : "text-white hover:text-orange-300"
              }`}
            >
              How It Works
            </a>

            <a
              href="#beta"
              className={`transition-all duration-300 font-medium link-hover roboto-medium ${
                isPastHero
                  ? "text-orange-300 hover:text-orange-600"
                  : "text-white hover:text-orange-300"
              }`}
            >
              Join Waitlist
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className={`px-6 py-2 transition-all duration-300 ${
                isPastHero
                  ? "bg-orange-300 hover:bg-orange-500 text-white shadow-lg shadow-orange-300/25"
                  : "bg-white/20 hover:bg-white/30 text-white  backdrop-blur-sm"
              }`}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className={`transition-all duration-300 hover:scale-110 roboto-medium ${
                isPastHero
                  ? "text-orange-500 hover:text-orange-600"
                  : "text-white hover:text-orange-300"
              }`}
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
