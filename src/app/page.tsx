"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import {
  FaUsers,
  FaMapMarkedAlt,
  FaDollarSign,
  FaStar,
  FaBook,
  FaPlus,
  FaCheck,
} from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Notice from "@/components/Notice";
import Navigation from "@/components/Navigation";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
// import ThoughtCloud from "@/components/ThoughtCloud";
import PlanLearnModal from "@/components/modals/PlanLearnModal";
import ShareEarnModal from "@/components/modals/ShareEarnModal";
import ConnectCommunityModal from "@/components/modals/ConnectCommunityModal";
import EarlyAccessSuccessModal from "@/components/modals/EarlyAccessSuccessModal";
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
  const [isPlanLearnModalOpen, setIsPlanLearnModalOpen] = useState(false);
  const [isShareEarnModalOpen, setIsShareEarnModalOpen] = useState(false);
  const [isConnectCommunityModalOpen, setIsConnectCommunityModalOpen] =
    useState(false);
  const [isEarlyAccessSuccessOpen, setIsEarlyAccessSuccessOpen] =
    useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );
  const mountTime = useRef(Date.now());

  // Intersection observers for animations
  const heroRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
  const featuresRef = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  });
  const howItWorksRef = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  });
  const betaRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  const weWandrWayRef = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  });
  const communityMessageRef = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  });
  const ourStoryRef = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  });
  const valueSplitRef = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  });
  const whatYoullFindRef = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
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

  const handleSubscribe = async (
    data: SubscribeForm,
    setSubmitting: (value: boolean) => void,
    setMessage: (
      value: {
        type: "success" | "duplicate" | "error";
        text: string;
      } | null
    ) => void,
    reset: () => void
  ) => {
    setSubmitting(true);
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
        setIsEarlyAccessSuccessOpen(true);
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
      setSubmitting(false);
    }
  };

  const onSubmitHero = async (data: SubscribeForm) => {
    await handleSubscribe(data, setHeroSubmitting, setHeroMessage, resetHero);
  };

  const onSubmitBeta = async (data: SubscribeForm) => {
    await handleSubscribe(data, setBetaSubmitting, setBetaMessage, resetBeta);
  };

  const toggleItem = (itemId: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <main className="min-h-screen relative">
      {/* <CursorTrail /> */}
      <Navigation />
      {/* <ScrollProgress /> */}

      {/* Hero Section */}
      <div
        ref={heroRef.ref}
        className={`relative min-h-[90vh] md:min-h-[115vh] flex items-start justify-center pt-28 md:pt-36 overflow-hidden bg-gradient-to-b from-cream via-[#FFFBF8] to-[#FFFBF8] ${
          heroRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        {/* Bottom Background Illustration */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0">
          <Image
            src="/assets/imgs/family-camping.png"
            alt="Family camping illustration"
            width={1536}
            height={743}
            className="w-full h-auto object-cover object-bottom"
            priority
          />
        </div>

        {/* Bottom Blend into Next Section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70px] md:h-32 bg-gradient-to-b from-transparent to-[#3240A1]" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <h1 className="dm-serif-display-regular text-4xl md:text-8xl text-orange-500 mb-6 animate-fade-scale">
            WeWandr
          </h1>

          <p className="text-xl md:text-xl text-darkblue mb-6 tracking-wide animate-fade-up animate-stagger-2 pt-serif-regular">
            Real family trips. Trusted travel guides. Income for parents.
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
                  className="w-full bg-cream border-2 border-orange-500 shadow-md pt-serif-regular"
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
                className="bg-cream border-2 border-darkblue text-darkblue hover:bg-darkblue hover:text-white px-8 py-3 whitespace-nowrap shadow-md transition-colors"
              >
                {heroSubmitting ? "Joining..." : "Join Early Access"}
              </Button>
            </form>
          </div>

          {/* Call to Action */}
          <p className="text-md md:text-base text-darkblue mt-6 tracking-wide animate-fade-up animate-stagger-2 pt-serif-regular">
            Become part of the community shaping family travel.
          </p>

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

      {/* New Section - Community Message */}
      <div
        ref={communityMessageRef.ref}
        className="pt-16 md:pt-24 pb-8 md:pb-16 bg-[#3240A1]"
      >
        <div
          className={`max-w-5xl mx-auto px-4 section-animate ${
            communityMessageRef.isIntersecting ? "animate-in" : ""
          }`}
        >
          <div className="space-y-10 md:space-y-14 text-center animate-fade-up animate-stagger-1">
            <p className="text-orange-400 text-3xl pb-8 md:text-5xl font-bold pt-serif-bold leading-tight">
              Family travel shouldn&apos;t feel impossible, it just needs a
              community behind it
            </p>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 ">
              <div className="mx-auto max-w-[260px] md:max-w-none md:mx-0 w-full rounded-lg overflow-hidden shadow-lg border-2 border-orange-400 flex items-stretch">
                <video
                  src="/assets/video/planning/young-mum-1.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover block"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mx-auto max-w-[260px] md:max-w-none md:mx-0 w-full rounded-lg overflow-hidden shadow-lg border-2 border-orange-400 flex items-stretch">
                <video
                  src="/assets/video/planning/young-mum-2.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover block"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mx-auto max-w-[260px] md:max-w-none md:mx-0 w-full rounded-lg overflow-hidden shadow-lg border-2 border-orange-400 flex items-stretch">
                <video
                  src="/assets/video/planning/young-mum-3.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover block"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      {/* <ThoughtCloud /> */}

      {/* What Makes WeWandr Special Section */}
      <div ref={featuresRef.ref} id="features" className="py-20 bg-[#3240A1]">
        <div
          className={`max-w-6xl mx-auto px-4 section-animate ${
            featuresRef.isIntersecting ? "animate-in" : ""
          }`}
        >
          {/* Section Header */}
          {/* <div className="text-center mb-16">
            <h2 className="mb-4 animate-fade-up heading-primary text-darkblue">
              Welcome to WeWandr
            </h2>
          </div> */}

          {/* Welcome Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {/* Card 1: Parent-Powered Platform */}
            <div className="backdrop-blur-sm p-8 rounded-2xl border-2 border-white/20 hover:border-orange-400 hover:bg-white/10 transition-all duration-300 card-hover group animate-fade-up animate-stagger-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center icon-animate group-hover:bg-orange-400/30 transition-colors duration-300 flex-shrink-0">
                  <FaUsers className="w-6 h-6 text-orange-300 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="group-hover:text-orange-300 transition-colors duration-300 heading-tertiary text-orange-300">
                  Built on Family Experience
                </h3>
              </div>
              <p className="leading-relaxed group-hover:opacity-90 transition-colors duration-300 pt-serif-regular text-cream">
                Every guide on WeWandr is created by families who&apos;ve taken
                the trip - sharing what actually mattered once they were there.
              </p>
            </div>

            {/* Card 2: Real Family Experiences */}
            <div className="backdrop-blur-sm p-8 rounded-2xl border-2 border-white/20 hover:border-orange-400 hover:bg-white/10 transition-all duration-300 card-hover group animate-fade-up animate-stagger-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center icon-animate group-hover:bg-orange-400/30 transition-colors duration-300 flex-shrink-0">
                  <FaMapMarkedAlt className="w-6 h-6 text-orange-300 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="group-hover:text-orange-300 transition-colors duration-300 heading-tertiary text-orange-300">
                  Organized for Real Life
                </h3>
              </div>
              <p className="leading-relaxed group-hover:opacity-90 transition-colors duration-300 pt-serif-regular text-cream">
                Real family trips are turned into clear, downloadable guides -
                helping families plan with ease and confidence.
              </p>
            </div>

            {/* Card 3: How-To Guides */}
            <div className="backdrop-blur-sm p-8 rounded-2xl border-2 border-white/20 hover:border-orange-400 hover:bg-white/10 transition-all duration-300 card-hover group animate-fade-up animate-stagger-3">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center icon-animate group-hover:bg-orange-400/30 transition-colors duration-300 flex-shrink-0">
                  <FaStar className="w-6 h-6 text-orange-300 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="group-hover:text-orange-300 transition-colors duration-300 heading-tertiary text-orange-300">
                  Supported by Thoughtful Systems
                </h3>
              </div>
              <p className="leading-relaxed group-hover:opacity-90 transition-colors duration-300 pt-serif-regular text-cream">
                We use intelligent tools to help refine guides and surface the
                most helpful insights, while keeping real family experience at
                the center.
              </p>
            </div>

            {/* Card 4: Earn from Your Knowledge */}
            <div className="backdrop-blur-sm p-8 rounded-2xl border-2 border-white/20 hover:border-orange-400 hover:bg-white/10 transition-all duration-300 card-hover group animate-fade-up animate-stagger-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center icon-animate group-hover:bg-orange-400/30 transition-colors duration-300 flex-shrink-0">
                  <FaDollarSign className="w-6 h-6 text-orange-300 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="group-hover:text-orange-300 transition-colors duration-300 heading-tertiary text-orange-300">
                  Designed for Mutual Benefit
                </h3>
              </div>
              <p className="leading-relaxed group-hover:opacity-90 transition-colors duration-300 pt-serif-regular text-cream">
                When a guide helps another family, the creator earns - aligning
                usefulness, trust, and generosity from day one.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Strip Section with Background */}
      <div className="relative py-28 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/assets/imgs/kids-on-beach-2-crop.png')",
            backgroundPosition: "center 40%",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Top Gradient Blend - from dark blue section above */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#3240A1] to-transparent pointer-events-none z-10" />

        {/* Bottom Gradient Blend - to cream section below */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream to-transparent pointer-events-none z-10" />

        {/* Content */}
        <div className="relative z-20 text-center px-4">
          <h3 className="text-white/0 animate-fade-up animate-stagger-6 heading-secondary drop-shadow-lg">
            Because travel is better, when planned together.
          </h3>
        </div>
      </div>

      {/* How WeWandr Works Section */}
      <div ref={howItWorksRef.ref} id="how-it-works" className="py-28 bg-cream">
        <div
          className={`max-w-6xl mx-auto px-4 section-animate ${
            howItWorksRef.isIntersecting ? "animate-in" : ""
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-orange-500 mb-4 animate-fade-up heading-primary">
              How It Works
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto animate-fade-up animate-stagger-1 pt-serif-regular">
              Whether you&apos;re planning your next trip or looking to sharing
              what you&apos;ve learned, WeWandr makes it simple.
            </p>
          </div>

          {/* Three-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1: Explore & Discover */}
            <div className="text-center animate-fade-up animate-stagger-1 group">
              <div className="w-20 h-20 bg-darkblue rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-[#8fa7eb] transition-all duration-300 group-hover:scale-110">
                <FaBook className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-orange-500 mb-4 group-hover:text-orange-600 transition-colors duration-300 heading-quaternary">
                Plan & Learn
              </h3>
              <p className="text-orange-700 leading-relaxed group-hover:text-orange-800 transition-colors duration-300 pt-serif-regular">
                <p className="text-orange-700 leading-relaxed group-hover:text-orange-800 transition-colors duration-300 pt-serif-regular"></p>
                Explore parent-written guides. Filter by destination, kids&apos;
                ages, trip type and travel style to discover trips that match
                your family.
              </p>
              {/* <button
                onClick={() => setIsPlanLearnModalOpen(true)}
                className="mt-4 text-darkblue hover:text-[#8fa7eb] font-semibold transition-colors duration-300 pt-serif-regular"
              >
                Learn more →
              </button> */}
            </div>

            {/* Step 2: Download & Plan */}
            <div className="text-center animate-fade-up animate-stagger-2 group">
              <div className="w-20 h-20 bg-darkblue rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-[#8fa7eb] transition-all duration-300 group-hover:scale-110">
                <FaHandshakeSimple className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-orange-500 mb-4 group-hover:text-orange-600 transition-colors duration-300 heading-quaternary">
                Share & Earn
              </h3>
              <p className="text-orange-700 leading-relaxed group-hover:text-orange-800 transition-colors duration-300 pt-serif-regular">
                Create and your own guide, using our built-in framework, paid by
                WeWandr each time your guide is downloaded.
              </p>
              {/* <button
                onClick={() => setIsShareEarnModalOpen(true)}
                className="mt-4 text-darkblue hover:text-[#8fa7eb] font-semibold transition-colors duration-300 pt-serif-regular"
              >
                Learn more →
              </button> */}
            </div>

            {/* Step 3: Create & Earn */}
            <div className="text-center animate-fade-up animate-stagger-3 group">
              <div className="w-20 h-20 bg-darkblue rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-[#8fa7eb] transition-all duration-300 group-hover:scale-110">
                <FaUsers className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-orange-500 mb-4 group-hover:text-orange-600 transition-colors duration-300 heading-quaternary">
                Connect with Community
              </h3>
              <p className="text-orange-700 leading-relaxed group-hover:text-orange-800 transition-colors duration-300 pt-serif-regular">
                You&apos;re joining a community of parents who get it. Because
                family travel is easier when you don&apos;t have to figure it
                out alone.
              </p>
              {/* <button
                onClick={() => setIsConnectCommunityModalOpen(true)}
                className="mt-4 text-darkblue hover:text-[#8fa7eb] font-semibold transition-colors duration-300 pt-serif-regular"
              >
                Learn more →
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Value Split Section */}
      <div
        ref={valueSplitRef.ref}
        id="value-split"
        className="pt-28 pb-18 bg-cream"
      >
        <div
          className={`max-w-6xl mx-auto px-4 section-animate ${
            valueSplitRef.isIntersecting ? "animate-in" : ""
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-orange-500 mb-4 animate-fade-up heading-primary">
              For Planning and Sharing
            </h2>
            <p className="text-xl text-darkblue max-w-3xl mx-auto animate-fade-up animate-stagger-1 pt-serif-regular">
              Whether you&apos;re planning your next trip or sharing what
              you&apos;ve already learned, WeWandr works for you.
            </p>
          </div>

          {/* Two-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: For Families Planning Trips */}
            <div className="animate-fade-up animate-stagger-1 border-2 border-orange-300 rounded-xl p-6 relative">
              <div className="absolute top-6 right-6">
                <Image
                  src="/assets/icons/sign-post.png"
                  alt="Sign post icon"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-orange-500 mb-4 heading-tertiary">
                Planning Trips
              </h3>
              <h4 className="text-orange-600 mb-4 heading-quaternary">
                Plan with Confidence, Not Guesswork
              </h4>

              <p className="text-darkblue leading-relaxed mb-4 font-semibold pt-serif-regular">
                Each guide includes:
              </p>
              <ul className="text-darkblue leading-relaxed space-y-3 pt-serif-regular">
                <li className="group relative">
                  <div
                    className="flex items-start gap-3 cursor-pointer"
                    onClick={() => toggleItem("gear-logistics")}
                  >
                    <FaCheck className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="font-medium">Gear & Logistics</span>
                      <div
                        className={`mt-2 text-sm text-orange-500 overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedItems["gear-logistics"]
                            ? "opacity-100 max-h-96"
                            : "opacity-0 max-h-0"
                        }`}
                      >
                        How families traveled with strollers, car seats,
                        carriers, pack-and-plays, potties, and everything in
                        between - including what to bring, rent, or skip.
                      </div>
                    </div>
                    <FaPlus
                      className={`w-4 h-4 text-orange-500 mt-1 flex-shrink-0 transition-transform duration-200 ${
                        expandedItems["gear-logistics"] ? "rotate-45" : ""
                      }`}
                    />
                  </div>
                </li>
                <li className="group relative">
                  <div
                    className="flex items-start gap-3 cursor-pointer"
                    onClick={() => toggleItem("kid-friendly")}
                  >
                    <FaCheck className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="font-medium">
                        Kid-Friendly Places to Stay & Navigate
                      </span>
                      <div
                        className={`mt-2 text-sm text-orange-500 overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedItems["kid-friendly"]
                            ? "opacity-100 max-h-96"
                            : "opacity-0 max-h-0"
                        }`}
                      >
                        Honest accommodation reviews, safety notes, laundry
                        access, stroller-friendliness, and how manageable the
                        destination felt with kids.
                      </div>
                    </div>
                    <FaPlus
                      className={`w-4 h-4 text-orange-500 mt-1 flex-shrink-0 transition-transform duration-200 ${
                        expandedItems["kid-friendly"] ? "rotate-45" : ""
                      }`}
                    />
                  </div>
                </li>
                <li className="group relative">
                  <div
                    className="flex items-start gap-3 cursor-pointer"
                    onClick={() => toggleItem("daily-routines")}
                  >
                    <FaCheck className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="font-medium">
                        Daily Routines & Essentials
                      </span>
                      <div
                        className={`mt-2 text-sm text-orange-500 overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedItems["daily-routines"]
                            ? "opacity-100 max-h-96"
                            : "opacity-0 max-h-0"
                        }`}
                      >
                        How families structured meals, naps, bathroom breaks,
                        avoided crowds, and stocked up on everyday needs while
                        out and about.
                      </div>
                    </div>
                    <FaPlus
                      className={`w-4 h-4 text-orange-500 mt-1 flex-shrink-0 transition-transform duration-200 ${
                        expandedItems["daily-routines"] ? "rotate-45" : ""
                      }`}
                    />
                  </div>
                </li>
                <li className="group relative">
                  <div
                    className="flex items-start gap-3 cursor-pointer"
                    onClick={() => toggleItem("highlights")}
                  >
                    <FaCheck className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="font-medium">
                        Highlights & Lessons Learned
                      </span>
                      <div
                        className={`mt-2 text-sm text-orange-500 overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedItems["highlights"]
                            ? "opacity-100 max-h-96"
                            : "opacity-0 max-h-0"
                        }`}
                      >
                        What families loved, what they&apos;d skip next time,
                        and the details that help others plan smarter trips.
                      </div>
                    </div>
                    <FaPlus
                      className={`w-4 h-4 text-orange-500 mt-1 flex-shrink-0 transition-transform duration-200 ${
                        expandedItems["highlights"] ? "rotate-45" : ""
                      }`}
                    />
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column: For Families Sharing Trips */}
            <div className="animate-fade-up animate-stagger-2 border-2 border-orange-300 rounded-xl p-6 relative">
              <div className="absolute top-6 right-6">
                <Image
                  src="/assets/icons/journal.png"
                  alt="Journal icon"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-orange-500 mb-4 heading-tertiary">
                Sharing Guides
              </h3>
              <h4 className="text-orange-600 mb-4 heading-quaternary">
                Turn experience into shared knowledge - and earn from it
              </h4>

              <p className="text-darkblue leading-relaxed mb-4 font-semibold pt-serif-regular">
                What you&apos;ll get:
              </p>
              <ul className="text-darkblue leading-relaxed space-y-3 pt-serif-regular">
                <li className="group relative">
                  <div
                    className="flex items-start gap-3 cursor-pointer"
                    onClick={() => toggleItem("guided-step")}
                  >
                    <FaCheck className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="font-medium">Guided, Step-by-Step</span>
                      <div
                        className={`mt-2 text-sm text-orange-500 overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedItems["guided-step"]
                            ? "opacity-100 max-h-96"
                            : "opacity-0 max-h-0"
                        }`}
                      >
                        Turn your trip into a WandrGuide guide with simple
                        prompts and structure
                      </div>
                    </div>
                    <FaPlus
                      className={`w-4 h-4 text-orange-500 mt-1 flex-shrink-0 transition-transform duration-200 ${
                        expandedItems["guided-step"] ? "rotate-45" : ""
                      }`}
                    />
                  </div>
                </li>
                <li className="group relative">
                  <div
                    className="flex items-start gap-3 cursor-pointer"
                    onClick={() => toggleItem("earnings")}
                  >
                    <FaCheck className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="font-medium">
                        Earnings Tied to Real Usefulness
                      </span>
                      <div
                        className={`mt-2 text-sm text-orange-500 overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedItems["earnings"]
                            ? "opacity-100 max-h-96"
                            : "opacity-0 max-h-0"
                        }`}
                      >
                        When your guide helps another family plan their trip,
                        WeWandr pays you - aligning value, trust, and effort.
                      </div>
                    </div>
                    <FaPlus
                      className={`w-4 h-4 text-orange-500 mt-1 flex-shrink-0 transition-transform duration-200 ${
                        expandedItems["earnings"] ? "rotate-45" : ""
                      }`}
                    />
                  </div>
                </li>
                <li className="group relative">
                  <div
                    className="flex items-start gap-3 cursor-pointer"
                    onClick={() => toggleItem("control")}
                  >
                    <FaCheck className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="font-medium">
                        Control and Transparency
                      </span>
                      <div
                        className={`mt-2 text-sm text-orange-500 overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedItems["control"]
                            ? "opacity-100 max-h-96"
                            : "opacity-0 max-h-0"
                        }`}
                      >
                        You stay in control of your guides, with clear,
                        straightforward payouts when families use them.
                      </div>
                    </div>
                    <FaPlus
                      className={`w-4 h-4 text-orange-500 mt-1 flex-shrink-0 transition-transform duration-200 ${
                        expandedItems["control"] ? "rotate-45" : ""
                      }`}
                    />
                  </div>
                </li>
                <li className="group relative">
                  <div
                    className="flex items-start gap-3 cursor-pointer"
                    onClick={() => toggleItem("recognition")}
                  >
                    <FaCheck className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="font-medium">
                        Recognition for Lived Experience
                      </span>
                      <div
                        className={`mt-2 text-sm text-orange-500 overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedItems["recognition"]
                            ? "opacity-100 max-h-96"
                            : "opacity-0 max-h-0"
                        }`}
                      >
                        Become a trusted resource for family travel insights -
                        grounded in real trips and firsthand knowledge.
                      </div>
                    </div>
                    <FaPlus
                      className={`w-4 h-4 text-orange-500 mt-1 flex-shrink-0 transition-transform duration-200 ${
                        expandedItems["recognition"] ? "rotate-45" : ""
                      }`}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* The WeWandr Way Section */}
      <div
        ref={weWandrWayRef.ref}
        id="wewandr-way"
        className="py-12 md:py-16 relative overflow-hidden bg-cream"
      >
        {/* Content */}
        <div
          className={`relative z-10 max-w-8xl mx-auto px-4 section-animate ${
            weWandrWayRef.isIntersecting ? "animate-in" : ""
          }`}
        >
          <div className="text-center">
            <div className="max-w-6xl mx-auto">
              <p className="text-2xl md:text-3xl tracking-wider text-darkblue leading-relaxed animate-fade-up animate-stagger-1 font-medium pt-serif-regular">
                One community, built on lived experience{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Find on WeWandr Section */}
      <div
        ref={whatYoullFindRef.ref}
        id="what-youll-find"
        className="py-20 bg-cream"
      >
        <div
          className={`max-w-6xl mx-auto px-4 section-animate ${
            whatYoullFindRef.isIntersecting ? "animate-in" : ""
          }`}
        >
          <div className="space-y-12">
            {/* Section Header */}
            {/* <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-500 pt-serif-bold animate-fade-up animate-stagger-1">
                What you&apos;ll find on WeWandr
              </h2>
            </div> */}

            {/* Content Grid - Screenshot and Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Screenshot */}
              <div className="flex justify-center relative">
                <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-orange-300 max-w-[18rem] md:max-w-[16rem] relative">
                  <Image
                    src="/assets/imgs/wewandr-screenshot.PNG"
                    alt="WeWandr app screenshot"
                    width={800}
                    height={1200}
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* Enlarged overlay - positioned relative to parent */}
                <div className="hidden lg:block absolute top-8 left-[calc(50%+3rem)] md:top-[110px] md:left-[274px] z-10 rounded-3xl overflow-hidden shadow-2xl max-w-[5rem] md:max-w-[10rem]">
                  <Image
                    src="/assets/imgs/guide-screenshot.jpg"
                    alt="WeWandr guide screenshot enlarged"
                    width={800}
                    height={1200}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Text Description */}
              <div className="md:space-y-12 space-y-6">
                <div className="border-2 border-orange-300 rounded-lg p-4 space-y-3 ml-0 w-full animate-fade-up animate-stagger-2">
                  <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                    Discover guides created by parents, for parents.
                  </p>
                  <p className="text-sm md:text-base text-darkblue leading-relaxed pt-serif-regular">
                    Browse travel guides shaped by real family experiences—not
                    algorithms.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="border-2 border-orange-300 rounded-lg p-4 md:ml-6 w-full animate-fade-up animate-stagger-4">
                    <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-2 pt-serif-bold">
                      WandrGuides
                    </h3>
                    <p className="text-sm md:text-base text-darkblue leading-relaxed pt-serif-regular">
                      First-hand guides from parents sharing what actually
                      worked on their trips.
                    </p>
                  </div>
                  <div className="border-2 border-orange-300 rounded-lg p-4 md:ml-[-18px] w-full animate-fade-up animate-stagger-6">
                    <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-2 pt-serif-bold">
                      WandrLocals
                    </h3>
                    <p className="text-sm md:text-base text-darkblue leading-relaxed pt-serif-regular">
                      Local parents sharing their favourite spots, hidden gems,
                      and everyday insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Demo with Text */}
            <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
              {/* Text Description - Desktop: Beside video */}
              <div className="animate-fade-up animate-stagger-5 relative z-10 md:mr-[-3rem] hidden md:block">
                <div className="border-2 border-orange-300 rounded-lg p-4 space-y-3 bg-cream max-w-[12rem] md:max-w-[24rem]">
                  <p className="text-sm md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                    Extensive guides packed with practical tips, gear
                    recommendations, parent-friendly restaurants &
                    accommodation, and everything you need to know.
                  </p>
                </div>
              </div>

              {/* Video */}
              <div className="flex justify-center relative">
                <div className="rounded-2xl overflow-visible md:overflow-hidden shadow-xl border-2 border-orange-300 max-w-[18rem] md:max-w-[16rem] relative">
                  <video
                    src="/assets/video/wewander-recording.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-2xl"
                  >
                    Your browser does not support the video tag.
                  </video>

                  {/* Text Description - Overlayed on video (mobile only) */}
                  <div className="animate-fade-up animate-stagger-5 absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-10 md:hidden">
                    <div className="border-2 border-orange-300 rounded-lg p-4 space-y-3 bg-cream max-w-[12rem] shadow-lg">
                      <p className="text-sm text-darkblue leading-relaxed pt-serif-regular">
                        Extensive guides packed with practical tips, gear
                        recommendations, parent-friendly restaurants &
                        accommodation, and everything you need to know.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section (Shortened) */}
      <div ref={ourStoryRef.ref} id="our-story" className="py-20 bg-cream">
        <div
          className={`max-w-6xl mx-auto px-4 section-animate ${
            ourStoryRef.isIntersecting ? "animate-in" : ""
          }`}
        >
          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-darkblue pt-serif-bold text-center animate-fade-up animate-stagger-1">
              Thoughtfully Built, from Lived Experience
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left - Founder Image */}
              <div className="flex justify-center md:justify-start order-2 md:order-1 animate-fade-up animate-stagger-1">
                <div className="w-full max-w-xl h-80 md:h-[32rem] overflow-hidden rounded-lg">
                  <Image
                    src="/assets/imgs/founder-min.jpeg"
                    alt="WeWandr founder"
                    width={500}
                    height={600}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
              </div>

              {/* Right - Condensed Story */}
              <div className="space-y-6 text-center md:text-left order-1 md:order-2 animate-fade-up animate-stagger-2">
                <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                  WeWandr was founded by Natasha Aylward, a parent of three and
                  experienced marketing and strategy leader, building the
                  platform she wished existed when planning trips with young
                  kids.
                </p>

                <p className="text-sm md:text-base text-darkblue leading-relaxed pt-serif-regular italic md:pl-6">
                  “Family travel shouldn&apos;t start with guesswork, it should
                  start with people who&apos;ve already done it.”
                </p>

                <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                  WeWandr is taking shape from real trips, real planning
                  challenges, and early input from families helping inform what
                  comes next.
                </p>

                <p className="text-base md:text-lg text-darkblue leading-relaxed pt-serif-regular">
                  If this resonates, we&apos;d love to build it with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join the WeWandr Beta Section */}
      <div
        ref={betaRef.ref}
        id="beta"
        className="py-16 bg-gradient-to-br from-orange-300 to-orange-500"
      >
        <div
          className={`max-w-4xl mx-auto px-4 text-center section-animate ${
            betaRef.isIntersecting ? "animate-in" : ""
          }`}
        >
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-white mb-6 animate-fade-up heading-primary">
              Join Early
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-up animate-stagger-1 pt-serif-regular">
              Be among the first to explore real family travel guides, share
              what you&apos;ve learned, and help shape what WeWandr becomes.
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
                  className="w-full bg-cream border-2 border-orange-500 shadow-sm text-darkblue placeholder:text-darkblue/80 pt-serif-regular"
                />
              </div>

              <Button
                type="submit"
                loading={betaSubmitting}
                disabled={betaSubmitting}
                className="text-darkblue bg-cream border-2 border-darkblue hover:bg-darkblue hover:text-white focus:bg-darkblue focus:text-white focus:ring-darkblue px-8 py-3 whitespace-nowrap shadow-sm"
              >
                {betaSubmitting ? "Joining..." : "Join Early Access"}
              </Button>
            </form>
          </div>
          <p className="text-md text-white/90   animate-fade-up animate-stagger-1 pt-serif-regular mt-6 max-w-2xl mx-auto">
            Early access will roll out in waves. You&apos;ll hear from us as we
            open things up.
          </p>

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

      {/* Family Video Section */}
      <div className="pt-24  bg-gradient-to-br bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mx-auto max-w-[200px] md:max-w-[300px] animate-fade-up animate-stagger-3">
            <div className="rounded-lg overflow-hidden shadow-lg border-2 border-orange-500 flex items-stretch">
              <video
                src="/assets/video/planning/family.mov"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover block"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Plan & Learn Modal */}
      <PlanLearnModal
        isOpen={isPlanLearnModalOpen}
        onClose={() => setIsPlanLearnModalOpen(false)}
      />

      {/* Share & Earn Modal */}
      <ShareEarnModal
        isOpen={isShareEarnModalOpen}
        onClose={() => setIsShareEarnModalOpen(false)}
      />

      {/* Connect with Community Modal */}
      <ConnectCommunityModal
        isOpen={isConnectCommunityModalOpen}
        onClose={() => setIsConnectCommunityModalOpen(false)}
      />

      {/* Early Access Success Modal */}
      <EarlyAccessSuccessModal
        isOpen={isEarlyAccessSuccessOpen}
        onClose={() => setIsEarlyAccessSuccessOpen(false)}
      />
    </main>
  );
}
