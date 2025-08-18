"use client";

import { useState, useRef, useEffect } from "react";
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
import LoadingSkeleton from "@/components/LoadingSkeleton";
import CursorTrail from "@/components/CursorTrail";
import ScrollProgress from "@/components/ScrollProgress";
import { subscribe } from "@/app/actions/subscribe";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type SubscribeForm = z.infer<typeof subscribeSchema>;

export default function Home() {
  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [betaSubmitting, setBetaSubmitting] = useState(false);
  const [heroMessage, setHeroMessage] = useState<{
    type: "success" | "duplicate" | "error";
    text: string;
  } | null>(null);
  const [betaMessage, setBetaMessage] = useState<{
    type: "success" | "duplicate" | "error";
    text: string;
  } | null>(null);
  const mountTime = useRef(Date.now());

  // Intersection observers for animations
  const heroRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
  const featuresRef = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  });
  const howItWorksRef = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  });
  const becomeCreatorRef = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  });
  const betaRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  const footerRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  // Individual feature card observers for staggered animations
  const featureCard1Ref = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
  });
  const featureCard2Ref = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.4,
  });
  const featureCard3Ref = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.5,
  });
  const featureCard4Ref = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.8,
  });
  const featureCard5Ref = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.9,
  });
  const featureCard6Ref = useIntersectionObserver<HTMLDivElement>({
    threshold: 1.0,
  });

  // Auto-dismiss messages after 5 seconds
  useEffect(() => {
    if (heroMessage) {
      const timer = setTimeout(() => {
        setHeroMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [heroMessage]);

  useEffect(() => {
    if (betaMessage) {
      const timer = setTimeout(() => {
        setBetaMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [betaMessage]);

  const {
    register: registerHero,
    handleSubmit: handleSubmitHero,
    reset: resetHero,
    formState: { errors: heroErrors },
  } = useForm<SubscribeForm>({
    resolver: zodResolver(subscribeSchema),
  });

  const {
    register: registerBeta,
    handleSubmit: handleSubmitBeta,
    reset: resetBeta,
    formState: { errors: betaErrors },
  } = useForm<SubscribeForm>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmitHero = async (data: SubscribeForm) => {
    setHeroSubmitting(true);
    setHeroMessage(null);

    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("company", ""); // honeypot
      formData.append("t", (Date.now() - mountTime.current).toString());

      const result = await subscribe(formData);

      if (result.status === "ok") {
        setHeroMessage({
          type: "success",
          text: "Thanks! You've been added to the waitlist.",
        });
        resetHero();
      } else if (result.status === "duplicate") {
        setHeroMessage({
          type: "duplicate",
          text: "You're already on the list!",
        });
      } else {
        setHeroMessage({
          type: "error",
          text: "Something went wrong—please try again.",
        });
      }
    } catch {
      setHeroMessage({
        type: "error",
        text: "Something went wrong—please try again.",
      });
    } finally {
      setHeroSubmitting(false);
    }
  };

  const onSubmitBeta = async (data: SubscribeForm) => {
    setBetaSubmitting(true);
    setBetaMessage(null);

    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("company", ""); // honeypot
      formData.append("t", (Date.now() - mountTime.current).toString());

      const result = await subscribe(formData);

      if (result.status === "ok") {
        setBetaMessage({
          type: "success",
          text: "Thanks! You've been added to the waitlist.",
        });
        resetBeta();
      } else if (result.status === "duplicate") {
        setBetaMessage({
          type: "duplicate",
          text: "You're already on the list!",
        });
      } else {
        setBetaMessage({
          type: "error",
          text: "Something went wrong—please try again.",
        });
      }
    } catch {
      setBetaMessage({
        type: "error",
        text: "Something went wrong—please try again.",
      });
    } finally {
      setBetaSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen relative">
      {/* <CursorTrail /> */}
      <Navigation />
      {/* <ScrollProgress /> */}

      {/* Hero Section with Beach Background */}
      <div
        ref={heroRef.ref}
        className={`relative min-h-screen flex items-center justify-center ${
          heroRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-parallax"
          style={{
            backgroundImage: "url('/assets/imgs/fam-holi-pic-3.jpg')",
          }}
        />

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <h1 className="knewave-regular text-6xl md:text-8xl text-orange-500 mb-6 drop-shadow-lg animate-fade-scale">
            WeWandr
          </h1>

          {/* Tagline */}
          <div className="mb-8 animate-fade-up animate-stagger-1">
            <p className="text-1xl md:text-2xl font-semibold text-orange-400 mb-2 drop-shadow-lg tracking-wide">
              Travel Smarter. Earn Together
            </p>
          </div>

          {/* Call to Action */}
          <p className="text-xl md:text-2xl text-white mb-12 drop-shadow-lg tracking-wide animate-fade-up animate-stagger-2">
            Join our growing waitlist for early access
          </p>

          {/* Email Form */}
          <div className="max-w-lg mx-auto animate-fade-up animate-stagger-3">
            <form
              onSubmit={handleSubmitHero(onSubmitHero)}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-1 h-12">
                <Input
                  {...registerHero("email")}
                  placeholder="Enter your email"
                  error={heroErrors.email?.message}
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
                loading={heroSubmitting}
                disabled={heroSubmitting}
                className="bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 focus:ring-orange-500 px-8 py-3 whitespace-nowrap shadow-lg animate-pulse-glow"
              >
                {heroSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          </div>

          {/* Message Display - Fixed height to prevent layout shift */}
          <div className="mt-6 h-12 max-w-lg mx-auto">
            {heroSubmitting ? (
              <div className="flex items-center justify-center">
                <LoadingSkeleton lines={1} className="w-64" />
              </div>
            ) : heroMessage ? (
              <div className="message-fade-in">
                <Notice type={heroMessage.type}>{heroMessage.text}</Notice>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* What Makes WeWandr Special Section */}
      <div
        ref={featuresRef.ref}
        id="features"
        className={`py-20 bg-gray-50 section-animate ${
          featuresRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-up">
              Family Travel, By Parents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto my-8 animate-fade-up animate-stagger-1">
              We get it, travelling with kids is hard, and the information
              available doesn't help. Think of WeWandr as your travel planning
              shortcut.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up animate-stagger-2">
              Discover detailed travel guides by real parents, who've done the
              trip — strollers, snack breaks, naps and all. What's more, every
              guide downloaded supports the parent behind it.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Parent-to-Parent Recommendations */}
            <div
              ref={featureCard1Ref.ref}
              className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover section-animate group feature-delay-1 ${
                featureCard1Ref.isIntersecting ? "animate-in" : ""
              }`}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 icon-animate group-hover:bg-orange-200 transition-colors duration-300">
                <FaUsers className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                Parent-to-Parent Recommendations
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Get real, honest reviews from families who&apos;ve been there.
                Learn about kid-friendly attractions, accommodations, and what
                to expect.
              </p>
            </div>

            {/* Detailed Travel Guides */}
            <div
              ref={featureCard2Ref.ref}
              className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover section-animate group feature-delay-2 ${
                featureCard2Ref.isIntersecting ? "animate-in" : ""
              }`}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 icon-animate group-hover:bg-orange-200 transition-colors duration-300">
                <FaMapMarkedAlt className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                Detailed Travel Guides
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Comprehensive guides with technical details like transportation
                options, accessibility info, age-appropriate activities, and
                family-specific logistics.
              </p>
            </div>

            {/* Family Accommodation Insights */}
            <div
              ref={featureCard3Ref.ref}
              className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover section-animate group feature-delay-3 ${
                featureCard3Ref.isIntersecting ? "animate-in" : ""
              }`}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 icon-animate group-hover:bg-orange-200 transition-colors duration-300">
                <FaBed className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                Family Accommodation Insights
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Learn about hotels, resorts, and rentals that truly cater to
                families—from cribs and high chairs to kid-friendly amenities
                and services.
              </p>
            </div>

            {/* Monetize Your Travel Wisdom */}
            <div
              ref={featureCard4Ref.ref}
              className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover section-animate group feature-delay-4 ${
                featureCard4Ref.isIntersecting ? "animate-in" : ""
              }`}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 icon-animate group-hover:bg-orange-200 transition-colors duration-300">
                <FaDollarSign className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                Monetize Your Travel Wisdom
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Become a creator and earn money by sharing your family travel
                experiences. Turn your hard-learned lessons into valuable guides
                for other parents.
              </p>
            </div>

            {/* Quality-Verified Content */}
            <div
              ref={featureCard5Ref.ref}
              className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover section-animate group feature-delay-5 ${
                featureCard5Ref.isIntersecting ? "animate-in" : ""
              }`}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 icon-animate group-hover:bg-orange-200 transition-colors duration-300">
                <FaStar className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                Quality-Verified Content
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                All guides are created by real parents who&apos;ve traveled with
                their families, ensuring authentic and trustworthy
                recommendations.
              </p>
            </div>

            {/* Personalized Discovery */}
            <div
              ref={featureCard6Ref.ref}
              className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover section-animate group feature-delay-6 ${
                featureCard6Ref.isIntersecting ? "animate-in" : ""
              }`}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 icon-animate group-hover:bg-orange-200 transition-colors duration-300">
                <FaSearch className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                Personalized Discovery
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Find destinations and experiences tailored to your family&apos;s
                specific needs, ages, and interests through our smart matching
                system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How WeWandr Works Section */}
      <div
        ref={howItWorksRef.ref}
        id="how-it-works"
        className={`py-20 bg-white section-animate ${
          howItWorksRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-up">
              How WeWandr Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up animate-stagger-1">
              Whether you&apos;re seeking travel inspiration or ready to share
              your expertise, WeWandr makes it simple.
            </p>
          </div>

          {/* Three-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1: Explore & Discover */}
            <div className="text-center animate-fade-up animate-stagger-1 group">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow group-hover:bg-orange-600 transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  1
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                Explore & Discover
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Browse detailed family travel guides created by parents for
                parents. Filter by destination, kids&apos; ages, and travel
                style.
              </p>
            </div>

            {/* Step 2: Download & Plan */}
            <div className="text-center animate-fade-up animate-stagger-2 group">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow group-hover:bg-orange-600 transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  2
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                Download & Plan
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Purchase and download comprehensive guides with insider tips,
                practical details, and family-specific recommendations.
              </p>
            </div>

            {/* Step 3: Create & Earn */}
            <div className="text-center animate-fade-up animate-stagger-3 group">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow group-hover:bg-orange-600 transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  3
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                Create & Earn
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Share your own family travel experiences by creating detailed
                guides and earn money from downloads by other families.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Become a Creator Section */}
      <div
        ref={becomeCreatorRef.ref}
        id="become-creator"
        className={`py-20 bg-gray-50 section-animate ${
          becomeCreatorRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="animate-fade-left">
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
            <div className="relative animate-fade-right">
              {/* Large Mobile Phone (Left) */}
              <img
                className="w-full max-w-md mx-auto animate-float"
                src="/assets/icons/make-money-from-your-phone.webp"
                alt="Digital earning illustration"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Join the WeWandr Beta Section */}
      <div
        ref={betaRef.ref}
        id="beta"
        className={`py-20 bg-gradient-to-br from-orange-300 to-orange-500 section-animate ${
          betaRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-up">
              Join the growing <span className="knewave-regular">WeWandr</span>{" "}
              community
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-up animate-stagger-1">
              Find your next family adventure and the parent who's done it
            </p>
          </div>

          {/* Email Signup Form */}
          <div className="max-w-lg mx-auto animate-fade-up animate-stagger-2">
            <form
              onSubmit={handleSubmitBeta(onSubmitBeta)}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-1 h-12">
                <Input
                  {...registerBeta("email")}
                  placeholder="Enter your email"
                  error={betaErrors.email?.message}
                  className="w-full bg-orange-300/30 backdrop-blur-sm border-0 shadow-lg text-white placeholder:text-white/70"
                />
              </div>

              <Button
                type="submit"
                loading={betaSubmitting}
                disabled={betaSubmitting}
                className="bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 focus:ring-orange-600 px-8 py-3 whitespace-nowrap shadow-lg animate-pulse-glow"
              >
                {betaSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          </div>

          {/* Message Display - Fixed height to prevent layout shift */}
          <div className="mt-6 h-12 max-w-lg mx-auto">
            {betaSubmitting ? (
              <div className="flex items-center justify-center">
                <LoadingSkeleton lines={1} className="w-64" />
              </div>
            ) : betaMessage ? (
              <div className="message-fade-in">
                <Notice type={betaMessage.type}>{betaMessage.text}</Notice>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        ref={footerRef.ref}
        className={`relative py-16 overflow-hidden ${
          footerRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-parallax"
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
              <div className="space-y-1 text-[#ffe44b]">
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
                  className="block text-[#ffe44b] hover:text-white transition-colors link-hover"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  className="block text-[#ffe44b] hover:text-white transition-colors link-hover"
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
                  className="block text-[#ffe44b] hover:text-white transition-colors link-hover"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="block text-[#ffe44b] hover:text-white transition-colors link-hover"
                >
                  Investor Relations
                </a>
                <a
                  href="#"
                  className="block text-[#ffe44b] hover:text-white transition-colors link-hover"
                >
                  Join Our Team
                </a>
                <a
                  href="#"
                  className="block text-[#ffe44b] hover:text-white transition-colors link-hover"
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
            <p className="text-white/80 text-xs mt-2 ">
              web design by{" "}
              <a
                className="hover:text-yellow-300 transition-colors link-hover"
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
