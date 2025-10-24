"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <h1 className="dm-serif-display-regular text-6xl md:text-8xl text-orange-500 mb-6 drop-shadow-lg animate-fade-scale">
            WeWandr
          </h1>

          {/* Tagline */}
          <div className="mb-8 animate-fade-up animate-stagger-1">
            <p className="text-periwinkle mb-2 drop-shadow-lg tagline-primary">
              Real Trips. Real Tips. Parent-Powered.
            </p>
            <p className="text-periwinkle tagline-secondary">
              Where families help each other travel better, and earn together.
            </p>
          </div>

          <p className="text-xl md:text-xl text-white mb-2 drop-shadow-lg tracking-wide animate-fade-up animate-stagger-2">
            Planning a family trip shouldn’t feel like a full-time job.<br></br>
            Parents deserve more than scattered advice, endless research, and
            guesswork.
          </p>
          {/* Call to Action */}
          <p className="text-xl md:text-xl text-white mb-12 drop-shadow-lg tracking-wide animate-fade-up animate-stagger-2">
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
                  className="w-full bg-white/90 backdrop-blur-sm border-0 shadow-lg roboto-medium"
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
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4 animate-fade-up heading-primary">
              Welcome to WeWandr
            </h2>
          </div>

          {/* Welcome Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {/* Card 1: Parent-Powered Platform */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover group animate-fade-up animate-stagger-1">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 icon-animate group-hover:bg-orange-200 transition-colors duration-300">
                <FaUsers className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-gray-900 mb-3 group-hover:text-[#8fa7eb] transition-colors duration-300 heading-tertiary">
                Parent-Powered Platform
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                A travel platform flipping the script on how parents both plan
                trips and earn income from their hard-earned travel knowledge.
              </p>
            </div>

            {/* Card 2: Real Family Experiences */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover group animate-fade-up animate-stagger-2">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 icon-animate group-hover:bg-orange-200 transition-colors duration-300">
                <FaMapMarkedAlt className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-gray-900 mb-3 group-hover:text-[#8fa7eb] transition-colors duration-300 heading-tertiary">
                Real Family Experiences
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Discover real trips, door-to-door by real families who have
                already done it - typed out in a downloadable WandrGuide.
              </p>
            </div>

            {/* Card 3: How-To Guides */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover group animate-fade-up animate-stagger-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 icon-animate group-hover:bg-orange-200 transition-colors duration-300">
                <FaStar className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-gray-900 mb-3 group-hover:text-[#8fa7eb] transition-colors duration-300 heading-tertiary">
                Parent-Tested Guides
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Think of WandrGuides as &apos;How-To&apos; guides with
                information truly needed when travelling with young children.
                Skip the guesswork with parent-tested and kid-approved insights.
              </p>
            </div>

            {/* Card 4: Earn from Your Knowledge */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover group animate-fade-up animate-stagger-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 icon-animate group-hover:bg-orange-200 transition-colors duration-300">
                <FaDollarSign className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-gray-900 mb-3 group-hover:text-[#8fa7eb] transition-colors duration-300 heading-tertiary">
                Earn from Your Knowledge
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                What&apos;s more, when you download a parent&apos;s WandrGuide,
                we pay them for their insights. When your WandrGuide is
                downloaded, we pay you.
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
        className={`py-28 bg-white section-animate ${
          howItWorksRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-blue mb-4 animate-fade-up heading-primary">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up animate-stagger-1">
              Whether you&apos;re planning your next trip or looking to share
              your experience, WeWandr makes it simple.
            </p>
          </div>

          {/* Three-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1: Explore & Discover */}
            <div className="text-center animate-fade-up animate-stagger-1 group">
              <div className="w-20 h-20 bg-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-[#8fa7eb] transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  1
                </span>
              </div>
              <h3 className="text-blue mb-4 group-hover:text-[#8fa7eb] transition-colors duration-300 heading-quaternary">
                Plan & Learn
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Browse and download parent travel guides from an active and
                growing database. Filter by destination, kids&apos; ages, and
                travel style.
              </p>
              <button
                onClick={() => setIsPlanLearnModalOpen(true)}
                className="mt-4 text-blue hover:text-[#8fa7eb] font-semibold transition-colors duration-300 roboto-medium"
              >
                Learn more →
              </button>
            </div>

            {/* Step 2: Download & Plan */}
            <div className="text-center animate-fade-up animate-stagger-2 group">
              <div className="w-20 h-20 bg-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-[#8fa7eb] transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  2
                </span>
              </div>
              <h3 className="text-blue mb-4 group-hover:text-[#8fa7eb] transition-colors duration-300 heading-quaternary">
                Share & Earn
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Create and share your Travel Guide, using our built-in
                framework, and earn income when downloaded.
              </p>
              <button
                onClick={() => setIsShareEarnModalOpen(true)}
                className="mt-4 text-blue hover:text-[#8fa7eb] font-semibold transition-colors duration-300 roboto-medium"
              >
                Learn more →
              </button>
            </div>

            {/* Step 3: Create & Earn */}
            <div className="text-center animate-fade-up animate-stagger-3 group">
              <div className="w-20 h-20 bg-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-[#8fa7eb] transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  3
                </span>
              </div>
              <h3 className="text-blue mb-4 group-hover:text-[#8fa7eb] transition-colors duration-300 heading-quaternary">
                Connect with Community
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                You&apos;re joining a community of parents who get it. Because
                family travel is easier when you don&apos;t have to figure it
                out alone.
              </p>
              <button
                onClick={() => setIsConnectCommunityModalOpen(true)}
                className="mt-4 text-blue hover:text-[#8fa7eb] font-semibold transition-colors duration-300 roboto-medium"
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
        className={`py-20 relative section-animate overflow-hidden ${
          weWandrWayRef.isIntersecting ? "animate-in" : ""
        }`}
      >
        {/* Background Image with Parallax */}
        <div
          className="fixed top-[-550px] md:top-[-350px] w-full h-[100vh]"
          style={{
            backgroundImage: "url('/assets/imgs/sand-dune-crop.jpg')",
            backgroundPosition: "center 90%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transform: `translateY(${scrollY * 0.1}px)`,
            zIndex: -1,
          }}
        />

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-base md:text-lg tracking-wider text-white leading-relaxed animate-fade-up animate-stagger-1 font-medium">
                The go-to hub for travel planning, disrupting the travel
                industry, and transforming how families discover, plan, and
                share travel knowledge
              </p>

              {/* Decorative Elements */}
              <div className="mt-16 flex justify-center space-x-12 animate-fade-up animate-stagger-3">
                <div className="text-center flex flex-col items-center">
                  <p className="text-sm md:text-lg uppercase font-extrabold tracking-widest text-[#FEFFD4] mb-3 tagline-primary">
                    Personal
                  </p>
                  <div className="w-3 h-3 bg-white rounded-full "></div>
                </div>
                <div className="text-center flex flex-col items-center">
                  <p className="text-sm md:text-lg uppercase font-extrabold tracking-widest text-[#F2D4FF] mb-3 tagline-primary">
                    Parent-powered
                  </p>
                  <div
                    className="w-3 h-3 bg-white rounded-full "
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
                <div className="text-center flex flex-col items-center">
                  <p className="text-sm md:text-lg uppercase font-extrabold tracking-widest text-[#FFEBD4] mb-3 tagline-primary">
                    Profitable
                  </p>
                  <div
                    className="w-3 h-3 bg-white rounded-full "
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>

              <p className="text-base md:text-lg tracking-wider  text-white leading-relaxed animate-fade-up animate-stagger-2 font-medium">
                We are building a movement, and we&apos;re just getting started.
              </p>
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
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-up animate-stagger-1">
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
                  className="w-full bg-orange-300/30 backdrop-blur-sm border-0 shadow-lg  text-white placeholder:text-white/70 roboto-medium"
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
