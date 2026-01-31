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
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Notice from "@/components/Notice";
import Navigation from "@/components/Navigation";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import BackgroundBlur from "@/components/BackgroundBlur";
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
    {},
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const screenshotsScrollRef = useRef<HTMLDivElement>(null);
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
      } | null,
    ) => void,
    reset: () => void,
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
          text: "You're on the early access list, we’ll be in touch soon.",
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

  const onSubmitBeta = async (data: SubscribeForm) => {
    await handleSubscribe(data, setBetaSubmitting, setBetaMessage, resetBeta);
  };

  const toggleItem = (itemId: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const scrollToNextImage = () => {
    if (!screenshotsScrollRef.current) return;

    const container = screenshotsScrollRef.current;
    const images = container.querySelectorAll("[data-screenshot]");
    const nextIndex = (currentImageIndex + 1) % images.length;

    if (images[nextIndex]) {
      const imageElement = images[nextIndex] as HTMLElement;
      const scrollPosition = imageElement.offsetLeft - container.offsetLeft;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });

      setCurrentImageIndex(nextIndex);
    }
  };

  const scrollToPreviousImage = () => {
    if (!screenshotsScrollRef.current) return;

    const container = screenshotsScrollRef.current;
    const images = container.querySelectorAll("[data-screenshot]");
    const prevIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;

    if (images[prevIndex]) {
      const imageElement = images[prevIndex] as HTMLElement;
      const scrollPosition = imageElement.offsetLeft - container.offsetLeft;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });

      setCurrentImageIndex(prevIndex);
    }
  };

  // Update current index when user manually scrolls
  useEffect(() => {
    const container = screenshotsScrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const images = container.querySelectorAll("[data-screenshot]");
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      images.forEach((img, index) => {
        const imgRect = (img as HTMLElement).getBoundingClientRect();
        const imgCenter = imgRect.left + imgRect.width / 2;
        const distance = Math.abs(containerCenter - imgCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCurrentImageIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen relative">
      <Navigation />

      {/* Unified hero + sections: one background so blur bleeds through */}
      <div className="relative">
        {/* Base cream gradient — spans hero + community + features */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-cream" />
        {/* Radial orange blurs — span full wrapper, bleed into sections below */}
        <BackgroundBlur />
        <BackgroundBlur
          variant="orb"
          className="right-0 top-[30%] -translate-y-1/2 w-[90vw] h-[70vh] max-w-[700px] max-h-[700px] hidden lg:block"
        />
        <BackgroundBlur
          variant="orb-soft"
          className="left-0 top-[75%] -translate-y-1/2 w-[80vw] h-[50vh] max-w-[600px] max-h-[500px] hidden lg:block"
        />

        {/* Hero Section — no own background */}
        <div
          ref={heroRef.ref}
          className={`relative z-10 min-h-screen flex items-center ${
            heroRef.isIntersecting ? "animate-in" : ""
          }`}
        >
          {/* Content Container — same width as Navigation (max-w-6xl) */}
          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-24 md:pt-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="text-center lg:text-left pt-6 lg:pt-0">
                {/* Main Heading */}
                <h1 className="dm-serif-display-regular text-6xl md:text-8xl text-orange-500 mb-6 animate-fade-scale">
                  <span className="whitespace-nowrap">Family Travel,</span>
                  <br />
                  <span className="whitespace-nowrap">Just Got Real</span>
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-xl text-darkblue tracking-wide animate-fade-up animate-stagger-2 pt-serif-regular mb-6">
                  Real family trips, shared as travel guides. Every download
                  supports the parent behind it.
                </p>

                {/* CTA Button */}
                {/* <div className="animate-fade-up animate-stagger-3">
                <Button
                  onClick={scrollToBeta}
                  className="bg-cream border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3  transition-colors"
                >
                  Join Early Access
                </Button>
              </div> */}
              </div>

              {/* Right Side - Phone Mockup */}
              <div className="flex justify-center lg:justify-center items-center animate-fade-up animate-stagger-4">
                <div className="w-full max-w-[16rem] md:max-w-[18rem] lg:max-w-xs xl:max-w-sm">
                  <Image
                    src="/assets/imgs/Simulator-Screenshot.png"
                    alt="WeWandr app mockup"
                    width={800}
                    height={1200}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Message — same background layer */}
        <div
          ref={communityMessageRef.ref}
          className="relative z-10 pt-16 md:pt-24 pb-8 md:pb-16"
        >
          <div
            className={`max-w-6xl mx-auto px-4 section-animate ${
              communityMessageRef.isIntersecting ? "animate-in" : ""
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-up animate-stagger-1">
              {/* Phone with scrolling video — left on md+, below text on mobile */}
              <div className="order-2 md:order-1 flex justify-center md:justify-end">
                <div className="relative w-[min(18rem,85vw)] max-w-[18rem] md:max-w-[16rem]">
                  <div className="absolute top-[0] left-[0] right-[0] bottom-[0] z-0 rounded-[2.9rem] overflow-hidden bg-black">
                    <video
                      src="/assets/video/ScreenRecording-guide-2.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain origin-top"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  {/* Cream bar to hide recording indicator */}
                  <div className="absolute top-[1%] left-[25%] right-[25%] h-[4.8%] z-[5] bg-cream rounded-full" />
                  <Image
                    src="/assets/imgs/apple-iphone-17-pro-max-2025-medium.png"
                    alt="iPhone showing WeWandr app"
                    width={390}
                    height={844}
                    className="relative z-10 w-full h-auto block pointer-events-none"
                  />
                </div>
              </div>
              {/* Text — right on md+, above phone on mobile */}
              <div className="order-1 md:order-2 text-center md:text-left space-y-6">
                <p className="text-orange-400 text-3xl md:text-5xl font-bold pt-serif-bold leading-tight md:leading-snug">
                  Your next trip starts with a parent who&apos;s already done
                  it, and wrote it down for you.
                </p>
                <p className="hidden md:block text-orange-700 text-lg md:text-xl font-bold pt-serif-bold leading-tight md:leading-snug">
                  When your experience helps another family, WeWandr pays you.
                  Together, we&apos;re building the world&apos;s family travel
                  network.
                </p>
              </div>
              {/* Same paragraph below phone on mobile only */}
              <p className="order-3 block md:hidden text-orange-700 text-lg md:text-xl font-bold pt-serif-bold leading-tight md:leading-snug text-center px-4">
                When your experience helps another family, WeWandr pays you.
                Together, we&apos;re building the world&apos;s family travel
                network.
              </p>
            </div>
          </div>
        </div>

        {/* What Makes WeWandr Special Section — same background layer */}
        <div
          ref={featuresRef.ref}
          id="features"
          className="relative z-10 py-20"
        >
          <div
            className={`max-w-6xl mx-auto px-4 section-animate ${
              featuresRef.isIntersecting ? "animate-in" : ""
            }`}
          >
            {/* Welcome Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              {/* Card 1: Organized for Real Life */}
              <div className="bg-cream border-2 border-orange-300 rounded-xl p-6 transition-all duration-300 card-hover group animate-fade-up animate-stagger-1 hover:border-orange-400">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-darkblue rounded-full flex items-center justify-center group-hover:bg-[#8fa7eb] transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                    <FaMapMarkedAlt className="w-6 h-6 text-white transition-transform duration-300" />
                  </div>
                  <h3 className="group-hover:text-orange-600 transition-colors duration-300 heading-tertiary text-orange-500">
                    Organized for Real Life
                  </h3>
                </div>
                <p className="leading-relaxed transition-colors duration-300 pt-serif-regular text-orange-700 group-hover:text-orange-800">
                  Real family trips are turned into clear, downloadable guides -
                  helping families plan with ease and confidence.
                </p>
              </div>

              {/* Card 2: Built on Family Experience */}
              <div className="bg-cream border-2 border-orange-300 rounded-xl p-6 transition-all duration-300 card-hover group animate-fade-up animate-stagger-2 hover:border-orange-400">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-darkblue rounded-full flex items-center justify-center group-hover:bg-[#8fa7eb] transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                    <FaUsers className="w-6 h-6 text-white transition-transform duration-300" />
                  </div>
                  <h3 className="group-hover:text-orange-600 transition-colors duration-300 heading-tertiary text-orange-500">
                    Built on Family Experience
                  </h3>
                </div>
                <p className="leading-relaxed transition-colors duration-300 pt-serif-regular text-orange-700 group-hover:text-orange-800">
                  Every guide on WeWandr is created by the family who took the
                  trip - sharing what actually mattered once they were there.
                </p>
              </div>

              {/* Card 3: How-To Guides */}
              <div className="bg-cream border-2 border-orange-300 rounded-xl p-6 transition-all duration-300 card-hover group animate-fade-up animate-stagger-3 hover:border-orange-400">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-darkblue rounded-full flex items-center justify-center group-hover:bg-[#8fa7eb] transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                    <FaStar className="w-6 h-6 text-white transition-transform duration-300" />
                  </div>
                  <h3 className="group-hover:text-orange-600 transition-colors duration-300 heading-tertiary text-orange-500">
                    Supported by Thoughtful Systems
                  </h3>
                </div>
                <p className="leading-relaxed transition-colors duration-300 pt-serif-regular text-orange-700 group-hover:text-orange-800">
                  Intelligent tools are used to help refine guides and surface
                  the most helpful insights, while keeping real family
                  experience at the center.
                </p>
              </div>

              {/* Card 4: Earn from Your Knowledge */}
              <div className="bg-cream border-2 border-orange-300 rounded-xl p-6 transition-all duration-300 card-hover group animate-fade-up animate-stagger-4 hover:border-orange-400">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-darkblue rounded-full flex items-center justify-center group-hover:bg-[#8fa7eb] transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                    <FaDollarSign className="w-6 h-6 text-white transition-transform duration-300" />
                  </div>
                  <h3 className="group-hover:text-orange-600 transition-colors duration-300 heading-tertiary text-orange-500">
                    Designed for Mutual Benefit
                  </h3>
                </div>
                <p className="leading-relaxed transition-colors duration-300 pt-serif-regular text-orange-700 group-hover:text-orange-800">
                  When a guide helps another family, the creator earns -
                  aligning usefulness, trust, and generosity from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How WeWandr Works Section */}
      <div
        ref={howItWorksRef.ref}
        id="how-it-works"
        className="relative py-28 bg-cream"
      >
        <BackgroundBlur
          variant="orb-soft"
          className="right-0 top-1/2 -translate-y-1/2 w-[55vw] h-[45vh] max-w-[500px] max-h-[450px]"
        />
        <div
          className={`relative z-10 max-w-6xl mx-auto px-4 section-animate ${
            howItWorksRef.isIntersecting ? "animate-in" : ""
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-orange-500 mb-4 animate-fade-up heading-primary">
              How It Works
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto animate-fade-up animate-stagger-1 pt-serif-regular">
              Whether you&apos;re planning your next trip or sharing what
              you&apos;ve learned, WeWandr makes it simple.
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
                Create and share your own guide, using our built-in framework,
                paid by WeWandr each time your guide is downloaded.
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

      {/* What You'll Find + Value Split — one connected cream background */}
      <div className="bg-cream">
        {/* What You'll Find on WeWandr Section */}
        <div ref={whatYoullFindRef.ref} id="what-youll-find" className="py-20">
          <div
            className={`max-w-6xl mx-auto px-4 section-animate ${
              whatYoullFindRef.isIntersecting ? "animate-in" : ""
            }`}
          >
            <div className="space-y-12">
              {/* Section Header */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-500 pt-serif-bold animate-fade-up animate-stagger-1">
                  What You&apos;ll Find
                </h2>
                <p className="text-xl text-darkblue max-w-3xl mx-auto mt-4 animate-fade-up animate-stagger-2 pt-serif-regular">
                  Structured, experience-backed travel guides created from real
                  family trips.
                </p>
              </div>

              {/* Screenshots Row — each screenshot inside iPhone mockup */}
              <div
                ref={screenshotsScrollRef}
                className="flex flex-row gap-12 justify-start md:justify-center items-center relative overflow-x-auto pb-4 pt-2 px-6 md:px-0 scrollbar-hide"
              >
                <div
                  data-screenshot
                  className="max-w-[18rem] md:max-w-[16rem] w-[18rem] md:w-full flex-shrink-0 relative animate-fade-up animate-stagger-1"
                >
                  <div className="absolute left-[5.5%] right-[5.5%] top-[5%] bottom-[5%] rounded-[2.25rem] overflow-hidden z-0">
                    <Image
                      src="/assets/imgs/screenshots/screenshot-home.png"
                      alt="WeWandr home screen"
                      width={800}
                      height={1200}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <Image
                    src="/assets/imgs/apple-iphone-17-pro-max-2025-medium.png"
                    alt=""
                    width={390}
                    height={800}
                    className="relative z-10 w-full h-auto pointer-events-none"
                    aria-hidden
                  />
                </div>
                <div
                  data-screenshot
                  className="max-w-[18rem] md:max-w-[16rem] w-[18rem] md:w-full flex-shrink-0 relative animate-fade-up animate-stagger-2"
                >
                  <div className="absolute left-[5.5%] right-[5.5%] top-[5%] bottom-[5%] rounded-[2.25rem] overflow-hidden z-0">
                    <Image
                      src="/assets/imgs/screenshots/screenshot-myguides.png"
                      alt="WeWandr My Guides screen"
                      width={800}
                      height={1200}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <Image
                    src="/assets/imgs/apple-iphone-17-pro-max-2025-medium.png"
                    alt=""
                    width={390}
                    height={800}
                    className="relative z-10 w-full h-auto pointer-events-none"
                    aria-hidden
                  />
                </div>
                <div
                  data-screenshot
                  className="max-w-[18rem] md:max-w-[16rem] w-[18rem] md:w-full flex-shrink-0 relative animate-fade-up animate-stagger-3"
                >
                  <div className="absolute left-[5.5%] right-[5.5%] top-[5%] bottom-[5%] rounded-[2.25rem] overflow-hidden z-0">
                    <Image
                      src="/assets/imgs/screenshots/screenshot-create.png"
                      alt="WeWandr create guide screen"
                      width={800}
                      height={1200}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <Image
                    src="/assets/imgs/apple-iphone-17-pro-max-2025-medium.png"
                    alt=""
                    width={390}
                    height={800}
                    className="relative z-10 w-full h-auto pointer-events-none"
                    aria-hidden
                  />
                </div>

                {/* Mobile Scroll Buttons */}
                {/* Left Button - Shows on 2nd and 3rd images (index 1 and 2) */}
                {(currentImageIndex === 1 || currentImageIndex === 2) && (
                  <button
                    onClick={scrollToPreviousImage}
                    className="md:hidden fixed left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-orange-500/80 hover:bg-orange-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Scroll to previous image"
                  >
                    <FaChevronLeft className="w-5 h-5" />
                  </button>
                )}

                {/* Right Button - Hides on last screenshot (index 2) */}
                {currentImageIndex !== 2 && (
                  <button
                    onClick={scrollToNextImage}
                    className="md:hidden fixed right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-orange-500/80 hover:bg-orange-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Scroll to next image"
                  >
                    <FaChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Value Split Section */}
          <div
            ref={valueSplitRef.ref}
            id="value-split"
            className="relative pt-28 pb-18"
          >
            <BackgroundBlur
              variant="orb-soft"
              className="left-0 bottom-1/3 w-[50vw] h-[50vh] max-w-[480px] max-h-[480px]"
            />
            <div
              className={`relative z-10 max-w-6xl mx-auto px-4 section-animate ${
                valueSplitRef.isIntersecting ? "animate-in" : ""
              }`}
            >
              {/* Two-Column Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Column: For Families Planning Trips */}
                <div className="animate-fade-up animate-stagger-1 bg-cream border-2 border-orange-300 rounded-xl p-6 relative">
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
                            access, stroller-friendliness, and how manageable
                            the destination felt with kids.
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
                            How families structured meals, naps, bathroom
                            breaks, avoided crowds, and stocked up on everyday
                            needs while out and about.
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
                            What families loved, what they&apos;d skip next
                            time, and the details that help others plan smarter
                            trips.
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
                <div className="animate-fade-up animate-stagger-2 bg-cream border-2 border-orange-300 rounded-xl p-6 relative">
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
                    Turn Experience into Shared Knowledge & Earn From It
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
                          <span className="font-medium">
                            Guided, Step-by-Step
                          </span>
                          <div
                            className={`mt-2 text-sm text-orange-500 overflow-hidden transition-all duration-300 ease-in-out ${
                              expandedItems["guided-step"]
                                ? "opacity-100 max-h-96"
                                : "opacity-0 max-h-0"
                            }`}
                          >
                            Turn your trip into a WandrGuide with simple prompts
                            and structure.
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
                            When your guide helps another family plan their
                            trip, WeWandr pays you - aligning value, trust, and
                            effort.
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
                            Control & Transparency
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
                            Become a trusted resource for family travel insights
                            - grounded in real trips and firsthand knowledge.
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
        className="py-16 bg-gradient-to-br from-orange-300/90 to-orange-200/90"
      >
        <div
          className={`max-w-4xl mx-auto px-4 text-center section-animate ${
            betaRef.isIntersecting ? "animate-in" : ""
          }`}
        >
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-orange-400 mb-6 animate-fade-up heading-primary">
              Join Early
            </h2>
            <p className="text-xl text-orange-700 max-w-2xl mx-auto animate-fade-up animate-stagger-1 pt-serif-regular">
              Be among the first to explore real family travel guides, share
              what you&apos;ve learned, and help shape what WeWandr becomes.
            </p>
          </div>

          {/* Email Signup Form */}
          <div className="max-w-lg mx-auto animate-fade-up animate-stagger-2 ">
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
          <p className="text-md text-orange-700   animate-fade-up animate-stagger-1 pt-serif-regular mt-6 max-w-2xl mx-auto">
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
