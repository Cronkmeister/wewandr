"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FaInstagram,
  FaEnvelope,
  FaUsers,
  FaMapMarkedAlt,
  FaBed,
  FaDollarSign,
  FaStar,
  FaSearch,
} from "react-icons/fa";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Notice from "@/components/Notice";
import Navigation from "@/components/Navigation";
import { subscribe } from "@/app/actions/subscribe";

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type SubscribeForm = z.infer<typeof subscribeSchema>;

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "duplicate" | "error";
    text: string;
  } | null>(null);
  const mountTime = useRef(Date.now());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubscribeForm>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = async (data: SubscribeForm) => {
    setIsSubmitting(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("company", ""); // honeypot
      formData.append("t", (Date.now() - mountTime.current).toString());

      const result = await subscribe(formData);

      if (result.status === "ok") {
        setMessage({
          type: "success",
          text: "Thanks! You've been added to the waitlist.",
        });
        reset();
      } else if (result.status === "duplicate") {
        setMessage({
          type: "duplicate",
          text: "You're already on the list!",
        });
      } else {
        setMessage({
          type: "error",
          text: "Something went wrong—please try again.",
        });
      }
    } catch {
      setMessage({
        type: "error",
        text: "Something went wrong—please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen relative">
      <Navigation />

      {/* Hero Section with Beach Background */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/imgs/fam-holi-pic-3.jpg')",
          }}
        />

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <h1 className="knewave-regular text-6xl md:text-8xl text-orange-500 mb-6 drop-shadow-lg">
            WeWandr
          </h1>

          {/* Tagline */}
          <div className="mb-8">
            <p className="text-1xl md:text-2xl font-semibold text-orange-400 mb-2 drop-shadow-lg tracking-wide">
              Travel Smarter. Earn Together
            </p>
            {/* <p className="text-xl md:text-2xl font-medium text-orange-300 drop-shadow-lg">
              PARENT-POWERED
            </p> */}
          </div>

          {/* Call to Action */}
          <p className="text-xl md:text-2xl text-white mb-12 drop-shadow-lg tracking-wide">
            Join our growing waitlist for early access
          </p>

          {/* Email Form */}
          <div className="max-w-lg mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-1">
                <Input
                  {...register("email")}
                  placeholder="Enter your email"
                  error={errors.email?.message}
                  className="w-full bg-white/90 backdrop-blur-sm border-0 shadow-lg"
                />
              </div>

              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: "1px",
                  height: "1px",
                }}
              />

              <Button
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
                className="bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 focus:ring-orange-500 px-8 py-3 whitespace-nowrap shadow-lg"
              >
                Join Waitlist
              </Button>
            </form>
          </div>

          {/* Message Display */}
          {message && (
            <div className="mt-6 animate-fade-up max-w-lg mx-auto">
              <Notice type={message.type}>{message.text}</Notice>
            </div>
          )}
        </div>
      </div>

      {/* What Makes WeWandr Special Section */}
      <div id="features" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Family Travel, By Parents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto my-8">
              We get it, travelling with kids is hard, and the information
              available doesn't help. Think of WeWandr as your travel planning
              shortcut.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover detailed travel guides by real parents, who’ve done the
              trip — strollers, snack breaks, naps and all. What's more, every
              guide downloaded supports the parent behind it.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Parent-to-Parent Recommendations */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <FaUsers className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Parent-to-Parent Recommendations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get real, honest reviews from families who&apos;ve been there.
                Learn about kid-friendly attractions, accommodations, and what
                to expect.
              </p>
            </div>

            {/* Detailed Travel Guides */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <FaMapMarkedAlt className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Detailed Travel Guides
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive guides with technical details like transportation
                options, accessibility info, age-appropriate activities, and
                family-specific logistics.
              </p>
            </div>

            {/* Family Accommodation Insights */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <FaBed className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Family Accommodation Insights
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Learn about hotels, resorts, and rentals that truly cater to
                families—from cribs and high chairs to kid-friendly amenities
                and services.
              </p>
            </div>

            {/* Monetize Your Travel Wisdom */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <FaDollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Monetize Your Travel Wisdom
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Become a creator and earn money by sharing your family travel
                experiences. Turn your hard-learned lessons into valuable guides
                for other parents.
              </p>
            </div>

            {/* Quality-Verified Content */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <FaStar className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quality-Verified Content
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All guides are created by real parents who&apos;ve traveled with
                their families, ensuring authentic and trustworthy
                recommendations.
              </p>
            </div>

            {/* Personalized Discovery */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <FaSearch className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Personalized Discovery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Find destinations and experiences tailored to your family&apos;s
                specific needs, ages, and interests through our smart matching
                system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How WeWandr Works Section */}
      <div id="how-it-works" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How WeWandr Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you&apos;re seeking travel inspiration or ready to share
              your expertise, WeWandr makes it simple.
            </p>
          </div>

          {/* Three-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1: Explore & Discover */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Explore & Discover
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Browse detailed family travel guides created by parents for
                parents. Filter by destination, kids&apos; ages, and travel
                style.
              </p>
            </div>

            {/* Step 2: Download & Plan */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Download & Plan
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Purchase and download comprehensive guides with insider tips,
                practical details, and family-specific recommendations.
              </p>
            </div>

            {/* Step 3: Create & Earn */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Create & Earn
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Share your own family travel experiences by creating detailed
                guides and earn money from downloads by other families.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Become a Creator Section */}
      <div id="become-creator" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Become a Creator?
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Turn your family travel experiences into valuable resources
                  for other parents.
                </p>
                <p>
                  Share detailed guides about destinations you know well and
                  earn money from each download.
                </p>
              </div>
            </div>

            {/* Right Column - Digital Earning Illustration */}
            <div className="relative">
              {/* Large Mobile Phone (Left) */}
              <img
                className="w-full max-w-md mx-auto"
                src="/assets/icons/make-money-from-your-phone.webp"
                alt="Digital earning illustration"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Join the WeWandr Beta Section */}
      <div
        id="beta"
        className="py-20 bg-gradient-to-br from-orange-300 to-orange-500"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the WeWandr Beta
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Be among the first families to experience a new way of discovering
              and sharing travel wisdom. Limited beta spots available.
            </p>
          </div>

          {/* Email Signup Form */}
          <div className="max-w-lg mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-1">
                <Input
                  {...register("email")}
                  placeholder="Enter your email"
                  error={errors.email?.message}
                  className="w-full bg-orange-300/30 backdrop-blur-sm border-0 shadow-lg text-white placeholder:text-white/70"
                />
              </div>

              <Button
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
                className="bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 focus:ring-orange-600 px-8 py-3 whitespace-nowrap shadow-lg"
              >
                Join Waitlist
              </Button>
            </form>
          </div>

          {/* Message Display */}
          {message && (
            <div className="mt-6 animate-fade-up max-w-lg mx-auto">
              <Notice type={message.type}>{message.text}</Notice>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative py-16 overflow-hidden">
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
            <div className="md:col-span-1">
              <h3 className="text-3xl font-bold text-orange-500 mb-4 knewave-regular">
                WeWandr
              </h3>
              <div className="space-y-1 text-[#ffe44b]">
                <p className="text-sm font-medium">
                  Travel Smart, Travel Together
                </p>
              </div>
            </div>

            {/* Follow Us Section */}
            <div>
              <h4 className="text-[#ffe44b] font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 border border-[#ffe44b] rounded-full flex items-center justify-center text-[#ffe44b] hover:text-orange-500 hover:border-orange-500 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 border border-[#ffe44b] rounded-full flex items-center justify-center text-[#ffe44b] hover:text-orange-500 hover:border-orange-500 transition-colors"
                  aria-label="Contact us via email"
                >
                  <FaEnvelope className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Legal Section */}
            <div>
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
            <div>
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
          <div className="text-center">
            <p className="text-white mt-2">
              &copy; 2025 WeWandr. All rights reserved.
            </p>
            <p className="text-white/80 text-xs mt-2 ">
              created by{" "}
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
    </main>
  );
}
