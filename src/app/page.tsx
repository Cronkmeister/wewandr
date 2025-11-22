"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { FaUsers, FaMapMarkedAlt, FaDollarSign, FaStar } from "react-icons/fa";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Notice from "@/components/Notice";
import Navigation from "@/components/Navigation";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import Footer from "@/components/Footer";
// import ThoughtCloud from "@/components/ThoughtCloud";
import PlanLearnModal from "@/components/modals/PlanLearnModal";
import ShareEarnModal from "@/components/modals/ShareEarnModal";
import ConnectCommunityModal from "@/components/modals/ConnectCommunityModal";
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
  const [scrollY, setScrollY] = useState(0);
  const [isPlanLearnModalOpen, setIsPlanLearnModalOpen] = useState(false);
  const [isShareEarnModalOpen, setIsShareEarnModalOpen] = useState(false);
  const [isConnectCommunityModalOpen, setIsConnectCommunityModalOpen] =
    useState(false);
  const mountTime = useRef(Date.now());

  // Scroll event listener for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          text: "Thanks! You&apos;ve been added to the waitlist.",
        });
        resetHero();
      } else if (result.status === "duplicate") {
        setHeroMessage({
          type: "duplicate",
          text: "You&apos;re already on the list!",
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
          text: "Thanks! You&apos;ve been added to the waitlist.",
        });
        resetBeta();
      } else if (result.status === "duplicate") {
        setBetaMessage({
          type: "duplicate",
          text: "You&apos;re already on the list!",
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
        className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
          heroRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        {/* Background Video with Image Fallback */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/imgs/fam-holi-pic-3.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-125"
          style={{
            backgroundImage: "url('/assets/imgs/fam-holi-pic-3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <source src="/assets/video/1024(comp2).mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <h1 className="dm-serif-display-regular text-6xl md:text-8xl text-orange-500 mb-6 drop-shadow-lg animate-fade-scale">
            WeWandr
          </h1>

          {/* Tagline */}
          <div className="mb-8 animate-fade-up animate-stagger-1">
            <p className="text-periwinkle mb-2 drop-shadow-lg tagline-primary">
              Where parents travel better - and earn together.
            </p>
            <p className="text-periwinkle tagline-secondary">
              A parent-powered platform redefining family travel.
            </p>
          </div>

          <p className="text-xl md:text-xl text-white mb-2 drop-shadow-lg tracking-wide animate-fade-up animate-stagger-2 pt-serif-regular">
            Planning a family trip shouldn&apos;t feel like a full-time job.
            <br></br>
            Parents deserve more than scattered advice, endless research, and
            guesswork.
          </p>
          {/* Call to Action */}
          <p className="text-xl md:text-xl text-white mb-12 drop-shadow-lg tracking-wide animate-fade-up animate-stagger-2 pt-serif-regular">
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
                  className="w-full bg-white/90 backdrop-blur-sm border-0 shadow-lg pt-serif-regular"
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
                className="text-white bg-blue hover:bg-[#8fa7eb] px-8 py-3 whitespace-nowrap shadow-lg"
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

      {/* New Section - Community Message */}
      <div
        ref={communityMessageRef.ref}
        className={`py-20 bg-cream section-animate ${
          communityMessageRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-12">
            {/* Row 1: Text | Image */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left - Text */}
              <div className="space-y-6 text-center md:text-left order-1 animate-fade-up animate-stagger-1">
                <p className="text-orange-500 text-2xl md:text-3xl font-bold pt-serif-bold leading-relaxed">
                  Family travel shouldn&apos;t feel impossible, it just needs a
                  community behind it.
                </p>
                <p className="text-orange-500 text-xl md:text-2xl pt-serif-regular leading-relaxed">
                  Your next family trip starts with someone who&apos;s already
                  done it — and wrote it down for you.
                </p>
              </div>
              {/* Right - Family Image */}
              <div className="flex justify-center order-2 animate-fade-up animate-stagger-2">
                <Image
                  src="/assets/imgs/family.png"
                  alt="Family traveling together"
                  width={400}
                  height={400}
                  className="w-full max-w-md object-contain h-[400px]"
                />
              </div>
            </div>

            {/* Row 2: Image | Text */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left - App Doodle Image */}
              <div className="flex justify-center order-4 md:order-1 animate-fade-up animate-stagger-3">
                <Image
                  src="/assets/imgs/app-doodle.png"
                  alt="WeWandr app interface"
                  width={400}
                  height={400}
                  className="w-full max-w-xs object-contain h-[400px]"
                />
              </div>
              {/* Right - Text */}
              <div className="space-y-6 text-center md:text-left order-3 md:order-2 animate-fade-up animate-stagger-4">
                <p className="text-orange-500 text-xl md:text-2xl pt-serif-regular leading-relaxed">
                  When your trip helps another family, we help pay it forward —
                  literally.
                </p>
                <p className="text-orange-500 text-2xl md:text-3xl font-bold pt-serif-bold leading-relaxed">
                  Together, we&apos;re building the world&apos;s family travel
                  network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      {/* <ThoughtCloud /> */}

      {/* What Makes WeWandr Special Section */}
      <div
        ref={featuresRef.ref}
        id="features"
        className={`py-20 bg-cream section-animate ${
          featuresRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          {/* <div className="text-center mb-16">
            <h2 className="mb-4 animate-fade-up heading-primary text-darkblue">
              Welcome to WeWandr
            </h2>
          </div> */}

          {/* Welcome Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {/* Card 1: Parent-Powered Platform */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover group animate-fade-up animate-stagger-1">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 icon-animate group-hover:bg-orange-200 transition-colors duration-300">
                <FaUsers className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="mb-3 group-hover:text-[#8fa7eb] transition-colors duration-300 heading-tertiary text-darkblue">
                Parent-Powered Platform
              </h3>
              <p className="leading-relaxed group-hover:opacity-80 transition-colors duration-300 pt-serif-regular text-darkblue">
                A family travel platform turning real parent experience into
                shared trips, trusted insight, and real income.
              </p>
            </div>

            {/* Card 2: Real Family Experiences */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover group animate-fade-up animate-stagger-2">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 icon-animate group-hover:bg-orange-200 transition-colors duration-300">
                <FaMapMarkedAlt className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="mb-3 group-hover:text-[#8fa7eb] transition-colors duration-300 heading-tertiary text-darkblue">
                Real Family Experiences
              </h3>
              <p className="leading-relaxed group-hover:opacity-80 transition-colors duration-300 pt-serif-regular text-darkblue">
                Discover full family trips, start to finish. Captured clearly
                and shared in downloadable WandrGuides.
              </p>
            </div>

            {/* Card 3: How-To Guides */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover group animate-fade-up animate-stagger-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 icon-animate group-hover:bg-orange-200 transition-colors duration-300">
                <FaStar className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="mb-3 group-hover:text-[#8fa7eb] transition-colors duration-300 heading-tertiary text-darkblue">
                Parent-Tested Guides
              </h3>
              <p className="leading-relaxed group-hover:opacity-80 transition-colors duration-300 pt-serif-regular text-darkblue">
                WandrGuides are straightforward &apos;How-To&apos; built on
                parent experience so you can plan smarter, and travel easier.
              </p>
            </div>

            {/* Card 4: Earn from Your Knowledge */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover group animate-fade-up animate-stagger-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 icon-animate group-hover:bg-orange-200 transition-colors duration-300">
                <FaDollarSign className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="mb-3 group-hover:text-[#8fa7eb] transition-colors duration-300 heading-tertiary text-darkblue">
                Earn from Your Knowledge
              </h3>
              <p className="leading-relaxed group-hover:opacity-80 transition-colors duration-300 pt-serif-regular text-darkblue">
                Download a parent&apos;s WandrGuide, and we pay them for their
                insights. Share your WandrGuide, and we pay you when downloaded
                by others.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Strip Section with Background */}
      <div className="relative py-28 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/imgs/kids-on-beach.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h3 className="text-white animate-fade-up animate-stagger-6 heading-secondary drop-shadow-lg">
            Because travel is better, when planned together.
          </h3>
        </div>
      </div>

      {/* How WeWandr Works Section */}
      <div
        ref={howItWorksRef.ref}
        id="how-it-works"
        className={`py-28 bg-cream section-animate ${
          howItWorksRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-orange-500 mb-4 animate-fade-up heading-primary">
              How It Works
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto animate-fade-up animate-stagger-1 pt-serif-regular">
              Whether you&apos;re planning your next trip or looking to share
              your experience, WeWandr makes it simple.
            </p>
          </div>

          {/* Three-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1: Explore & Discover */}
            <div className="text-center animate-fade-up animate-stagger-1 group">
              <div className="w-20 h-20 bg-[#060453] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-[#8fa7eb] transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  1
                </span>
              </div>
              <h3 className="text-orange-500 mb-4 group-hover:text-orange-600 transition-colors duration-300 heading-quaternary">
                Plan & Learn
              </h3>
              <p className="text-orange-700 leading-relaxed group-hover:text-orange-800 transition-colors duration-300 pt-serif-regular">
                <p className="text-orange-700 leading-relaxed group-hover:text-orange-800 transition-colors duration-300 pt-serif-regular"></p>
                Explore parent-written WandrGuides. Filter by destination,
                kids&apos; ages, trip type and travel style to discover trips
                that match your family.
              </p>
              <button
                onClick={() => setIsPlanLearnModalOpen(true)}
                className="mt-4 text-[#060453] hover:text-[#8fa7eb] font-semibold transition-colors duration-300 pt-serif-regular"
              >
                Learn more →
              </button>
            </div>

            {/* Step 2: Download & Plan */}
            <div className="text-center animate-fade-up animate-stagger-2 group">
              <div className="w-20 h-20 bg-[#060453] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-[#8fa7eb] transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  2
                </span>
              </div>
              <h3 className="text-orange-500 mb-4 group-hover:text-orange-600 transition-colors duration-300 heading-quaternary">
                Share & Earn
              </h3>
              <p className="text-orange-700 leading-relaxed group-hover:text-orange-800 transition-colors duration-300 pt-serif-regular">
                Create and share your WandrGuide, using our built-in framework,
                and earn income everytime it&apos;s downloaded.
              </p>
              <button
                onClick={() => setIsShareEarnModalOpen(true)}
                className="mt-4 text-[#060453] hover:text-[#8fa7eb] font-semibold transition-colors duration-300 pt-serif-regular"
              >
                Learn more →
              </button>
            </div>

            {/* Step 3: Create & Earn */}
            <div className="text-center animate-fade-up animate-stagger-3 group">
              <div className="w-20 h-20 bg-[#060453] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-[#8fa7eb] transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  3
                </span>
              </div>
              <h3 className="text-orange-500 mb-4 group-hover:text-orange-600 transition-colors duration-300 heading-quaternary">
                Connect with Community
              </h3>
              <p className="text-orange-700 leading-relaxed group-hover:text-orange-800 transition-colors duration-300 pt-serif-regular">
                You&apos;re joining a community of parents who get it. Because
                family travel is easier when you don&apos;t have to figure it
                out alone.
              </p>
              <button
                onClick={() => setIsConnectCommunityModalOpen(true)}
                className="mt-4 text-[#060453] hover:text-[#8fa7eb] font-semibold transition-colors duration-300 pt-serif-regular"
              >
                Learn more →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* The WeWandr Way Section */}
      <div
        ref={weWandrWayRef.ref}
        id="wewandr-way"
        className={`py-24 md:py-32 relative section-animate overflow-hidden ${
          weWandrWayRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        {/* Background Image with Parallax */}
        <div
          className="fixed top-[-700px] md:top-[-650px] w-full h-[100vh]"
          style={{
            backgroundImage: "url('/assets/imgs/fam-holi-pic-3.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transform: `translateY(${scrollY * 0.1}px)`,
            zIndex: -1,
            scale: 1.3,
          }}
        />

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-8xl mx-auto px-4">
          <div className="text-center">
            <div className="max-w-6xl mx-auto">
              <p className="text-2xl md:text-3xl tracking-wider text-white leading-relaxed animate-fade-up animate-stagger-1 font-medium pt-serif-regular">
                Making travel more{" "}
                <em className="text-3xl md:text-4xl">authentic</em>,{" "}
                <em className="text-3xl  md:text-4xl">community-driven</em> and{" "}
                <em className="text-3xl  md:text-4xl">family-focused</em>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div
        ref={ourStoryRef.ref}
        id="our-story"
        className={`py-20 bg-cream section-animate ${
          ourStoryRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#060453] mb-12 text-center pt-serif-bold animate-fade-up animate-stagger-1">
              Our Story
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left - Founder Image */}
              <div className="flex justify-center md:justify-start order-2 md:order-1 animate-fade-up animate-stagger-2">
                <Image
                  src="/assets/imgs/founder-min.jpeg"
                  alt="WeWandr founder"
                  width={500}
                  height={600}
                  className="w-full max-w-md object-contain rounded-lg"
                />
              </div>

              {/* Right - Text Content */}
              <div className="space-y-8 text-center md:text-left order-1 md:order-2">
                <p className="text-lg md:text-xl text-[#060453] italic leading-relaxed pt-serif-regular animate-fade-up animate-stagger-3">
                  It started with one parent searching for a better way to
                  travel with kids and turned into a platform empowering
                  families everywhere to share what they know.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-[#060453] mt-12 mb-6 pt-serif-bold animate-fade-up animate-stagger-4">
                  Founder&apos;s Story
                </h3>

                <div className="space-y-6 text-[#060453] leading-relaxed animate-fade-up animate-stagger-5">
                  <p className="text-base md:text-lg pt-serif-regular">
                    After the birth of her third son, WeWandr&apos;s founder
                    realized that while travel with kids can feel out of reach,
                    more families are exploring the world now than ever before,
                    just without a shared space to exchange what they&apos;ve
                    learned.
                  </p>

                  <p className="text-base md:text-lg pt-serif-regular">
                    That insight sparked WeWandr: a parent-powered platform
                    where real families share real trips, and parents are paid
                    for their hard-earned wisdom.
                  </p>

                  <p className="text-base md:text-lg pt-serif-regular">
                    The idea was inspired by a moment on a flight home with her
                    3-month-old son two years prior, when she offered to hold
                    another mother&apos;s baby so she could take a break. That
                    simple act of trust between two parents became a lasting
                    reminder: we&apos;re not meant to do this alone.
                  </p>

                  <p className="text-base md:text-lg pt-serif-regular">
                    WeWandr exists to bring that same spirit online, the quiet
                    power of parents helping parents, proving that when we share
                    what we know, we make the world a little more open, and
                    family travel a little more possible for everyone.
                  </p>
                </div>

                <p className="text-xl md:text-2xl font-semibold text-[#060453] mt-12 italic leading-relaxed pt-serif-regular animate-fade-up animate-stagger-6 text-center md:text-left">
                  One small act of trust between parents inspired WeWandr, a
                  community proving we&apos;re never meant to do this alone.
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
        className={`py-20 bg-gradient-to-br from-orange-300 to-orange-500 section-animate ${
          betaRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-white mb-6 animate-fade-up heading-primary">
              Join the growing{" "}
              <span className="dm-serif-display-regular text-periwinkle">
                WeWandr
              </span>{" "}
              community
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-up animate-stagger-1 pt-serif-regular">
              Find your next family adventure and the parent who&apos;s done it
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
                  className="w-full bg-orange-300/30 backdrop-blur-sm border-0 shadow-lg  text-white placeholder:text-white/70 pt-serif-regular"
                />
              </div>

              <Button
                type="submit"
                loading={betaSubmitting}
                disabled={betaSubmitting}
                className="text-white bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 focus:ring-orange-600 px-8 py-3 whitespace-nowrap shadow-lg "
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
    </main>
  );
}
