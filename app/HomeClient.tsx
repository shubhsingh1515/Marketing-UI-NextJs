"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  BarChart3,
  Zap,
  Star,
  Plus,
  Minus,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Play,
  MessageCircle,
  Search,
  Target,
  Layers,
  Map,
  ChevronsLeftRight,
  Briefcase,
} from "lucide-react";

import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * --- NEXT.JS & UTILITY MOCKS ---
 * In a real Next.js application, you would import:
 * import Link from 'next/link';
 * import Image from 'next/image';
 * import { cn } from '@/lib/utils';
 */

// Mock Link component (Replace with import Link from 'next/link' in Next.js)
const Link = ({ href, children, className, ...props }) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);

// Mock Image component (Replace with import Image from 'next/image' in Next.js)
const Image = ({ src, alt, width, height, className, ...props }) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
    {...props}
  />
);

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1, ...options }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting];
};

const NumberTicker = ({ value, direction = "up", delay = 0, className }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = parseInt(value.substring(0, value.length - 1)) || 0;
      const duration = 2000;
      const incrementTime = (duration / end) * 10;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <span ref={ref} className={className}>
      {count}
      {value.replace(/[0-9]/g, "")}
    </span>
  );
};

/**
 * PAGE COMPONENTS
 */

const ImageComparison = ({ img, alt, className }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((event) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x =
      (event.touches ? event.touches[0].clientX : event.clientX) - rect.left;
    const width = rect.width;
    const newPosition = Math.max(0, Math.min(100, (x / width) * 100));

    setSliderPosition(newPosition);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);

  // Add global event listeners for drag
  useEffect(() => {
    const handleGlobalMove = (e) => {
      if (isDragging) {
        handleMove(e);
      }
    };
    const handleGlobalUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleGlobalMove);
      window.addEventListener("mouseup", handleGlobalUp);
      window.addEventListener("touchmove", handleGlobalMove);
      window.addEventListener("touchend", handleGlobalUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleGlobalMove);
      window.removeEventListener("mouseup", handleGlobalUp);
      window.removeEventListener("touchmove", handleGlobalMove);
      window.removeEventListener("touchend", handleGlobalUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none group overflow-hidden cursor-ew-resize ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onClick={handleMove}
    >
      {/* Background Layer: AFTER (Full Color) */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10 pointer-events-none" />
        <Image
          src={img}
          alt={`After ${alt}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
          <span className="text-[10px] font-bold text-white uppercase tracking-wider">
            After
          </span>
        </div>
      </div>

      {/* Foreground Layer: BEFORE (Grayscale) - Clipped */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="absolute inset-0 bg-gray-900/80 z-10 pointer-events-none mix-blend-saturation" />
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
        <Image
          src={img}
          alt={`Before ${alt}`}
          className="w-full h-full max-w-none object-cover grayscale brightness-75"
          style={{
            width: containerRef.current
              ? containerRef.current.offsetWidth
              : "100%",
          }}
        />
        <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Before
          </span>
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg -ml-[1px] transition-transform group-active:scale-110">
          <ChevronsLeftRight className="w-4 h-4 text-gray-900" />
        </div>
      </div>
    </div>
  );
};

// 1. Navigation
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-2"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-2xl tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
            B
          </div>
          BRAND.IO
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#process" className="hover:text-black transition-colors">
            About Us
          </Link>
          <Link
            href="#case-studies"
            className="hover:text-black transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="#methodology"
            className="hover:text-black transition-colors"
          >
            Services
          </Link>
           <Link
            href="#methodology"
            className="hover:text-black transition-colors"
          >
            Why Us
          </Link>
          <Link href="#faq" className="hover:text-black transition-colors">
            Contact Us
          </Link>
        </div>
        <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95">
          Book Audit
        </button>
      </div>
    </nav>
  );
};

// 2. Hero Section
const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>

      {/* Aurora Background Simulation */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-300/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-blue-300/30 rounded-full blur-[120px] animate-pulse delay-700" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] bg-orange-200/30 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side: Content */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-gray-600 tracking-wide uppercase">
                Accepting Clients for Q1 2025
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-tighter text-gray-900 mb-6 leading-[1.1] animate-fade-in-up delay-100">
              Scale Your{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-blue-400 blur-lg opacity-30 animate-pulse"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 animate-gradient-x">
                  Personal Brand
                </span>
              </span>{" "}
              <br className="hidden lg:block" /> in 90 Days.
            </h1>

            <p className="text-xl text-gray-500 max-w-xl mb-10 leading-relaxed animate-fade-in-up delay-200">
              The exact roadmap to authority. We build your narrative,
              strategize your content, and expand your digital footprint.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-300 mb-12 w-full justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-black text-white rounded-full text-lg font-medium overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-500/20 w-full sm:w-auto">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span className="flex items-center justify-center gap-2">
                  Start Your Roadmap{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto">
                View Case Studies
              </button>
            </div>

            {/* Avatar Circles Mockup */}
            <div className="flex items-center gap-4 animate-fade-in-up delay-500">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                  >
                    <Image
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${
                        i * 34
                      }`}
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-black text-white text-xs flex items-center justify-center font-bold">
                  +40
                </div>
              </div>
              <div className="text-sm text-gray-500 text-left">
                <span className="font-bold text-black">
                  Trusted by founders
                </span>{" "}
                <br />
                from YC, Techstars & more.
              </div>
            </div>
          </div>

          {/* Right Side: VSL / Video Section */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none animate-fade-in-up delay-700 relative">
            {/* Card 1: Total Reach (Top Right) */}
            <div className="hidden lg:block absolute -top-8 -right-12 z-30">
              <div className="animate-float-card">
                <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 flex items-center gap-4 transition-transform hover:scale-105 cursor-default">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Total Reach
                    </p>
                    <div className="flex items-baseline gap-1">
                      <p className="text-lg font-bold text-gray-900">2.4M</p>
                      <span className="text-xs font-medium text-green-500 flex items-center">
                        <ArrowRight className="w-3 h-3 rotate-[-45deg]" /> 12%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: New Leads (Bottom Left) */}
            <div className="hidden lg:block absolute -bottom-6 -left-12 z-30">
              <div
                className="animate-float-card"
                style={{ animationDelay: "1.5s", animationDuration: "6s" }}
              >
                <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 flex items-center gap-4 transition-transform hover:scale-105 cursor-default">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      New Leads
                    </p>
                    <div className="flex items-baseline gap-1">
                      <p className="text-lg font-bold text-gray-900">+142</p>
                      <span className="text-xs font-medium text-green-500 flex items-center">
                        <ArrowRight className="w-3 h-3 rotate-[-45deg]" /> 8%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 md:h-[500px] md:w-[600px] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

              <div className="relative md:h-[500px] md:w-[600px] rounded-2xl bg-black border border-gray-800 aspect-video overflow-hidden shadow-2xl cursor-pointer">
                {/* Placeholder for VSL - Using an image with a play button overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:scale-110 hover:bg-white/20 transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                    <Play className="w-8 h-8 md:w-10 md:h-10 fill-white ml-1" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex items-center justify-between pointer-events-none">
                  <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-white/10 text-white text-xs md:text-sm font-medium flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    Watch: How we scaled 40+ Founders
                  </div>
                  <div className="text-white/80 text-xs md:text-sm font-mono bg-black/50 backdrop-blur-md px-2 py-1 md:px-3 md:py-1 rounded-md border border-white/10">
                    02:45
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Second Section: Brand Story
const StorySection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} className="py-32 bg-black relative overflow-hidden">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Left Side: Headings */}
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                Your Brand.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 delay-100">
                Your Story.
              </span>
              <span className="block mt-2 bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent animate-gradient-x">
                Our Strategy.
              </span>
            </h2>
          </div>

          {/* Right Side: Text Content */}
          <div className="space-y-8">
            <p className="text-neutral-400 text-xl leading-relaxed">
              We don't just post content. We{" "}
              <span className="text-white font-medium">
                architect authority
              </span>
              . We take your scattered ideas and turn them into a cohesive
              digital presence that converts attention into revenue.
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            <p className="text-white text-xl leading-relaxed font-medium">
              This is a fully{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
                personalized 1:1 branding mentorship
              </span>{" "}
              designed to help founders and creators build a clear, confident,
              and high-impact personal brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Third Section: What You Get (Bento Grid)
const BentoGrid = () => {
  // Custom minimalist abstract illustrations for the cards
  const ScanIllustration = () => (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full opacity-20"
      fill="none"
      stroke="currentColor"
    >
      <circle
        cx="50"
        cy="50"
        r="30"
        strokeWidth="2"
        className="text-blue-500 animate-pulse"
      />
      <path
        d="M50 20 V80 M20 50 H80"
        strokeWidth="1"
        className="text-blue-300"
        strokeDasharray="4 4"
      />
      <path
        d="M30 30 L70 70 M70 30 L30 70"
        strokeWidth="1"
        className="text-blue-200"
        strokeOpacity="0.5"
      />
      <rect
        x="35"
        y="35"
        width="30"
        height="30"
        rx="4"
        strokeWidth="2"
        className="text-blue-600"
      />
    </svg>
  );

  const PositioningIllustration = () => (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full opacity-30"
      fill="none"
      stroke="currentColor"
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        strokeWidth="1"
        className="text-purple-300"
        strokeDasharray="6 6"
      />
      <circle
        cx="50"
        cy="50"
        r="25"
        strokeWidth="1"
        className="text-purple-400"
      />
      <path d="M50 50 L85 15" strokeWidth="2" className="text-purple-600" />
      <circle
        cx="85"
        cy="15"
        r="4"
        fill="currentColor"
        className="text-purple-600"
      />
    </svg>
  );

  const ContentIllustration = () => (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full opacity-30"
      fill="none"
      stroke="currentColor"
    >
      <rect
        x="10"
        y="20"
        width="35"
        height="25"
        rx="4"
        strokeWidth="2"
        className="text-orange-400"
      />
      <rect
        x="55"
        y="20"
        width="35"
        height="25"
        rx="4"
        strokeWidth="2"
        className="text-orange-300"
      />
      <rect
        x="10"
        y="55"
        width="80"
        height="25"
        rx="4"
        strokeWidth="2"
        className="text-orange-500"
      />
      <path
        d="M25 45 V55 M75 45 V55"
        strokeWidth="2"
        className="text-orange-200"
      />
    </svg>
  );

  const RoadmapIllustration = () => (
    <svg
      viewBox="0 0 200 100"
      className="w-full h-full opacity-20"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M10 90 Q 50 80 80 50 T 190 10"
        strokeWidth="4"
        className="text-white"
        strokeLinecap="round"
      />
      <circle
        cx="10"
        cy="90"
        r="4"
        fill="currentColor"
        className="text-gray-400"
      />
      <circle
        cx="80"
        cy="50"
        r="4"
        fill="currentColor"
        className="text-gray-300"
      />
      <circle
        cx="190"
        cy="10"
        r="6"
        fill="currentColor"
        className="text-white"
      />
      <path
        d="M10 90 L190 90"
        strokeWidth="1"
        className="text-gray-600"
        strokeDasharray="4 4"
      />
    </svg>
  );

  return (
    <section
      id="process"
      className="py-16 md:py-32 bg-slate-50 relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-widest">
            The Process
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            The 90-Day Authority Framework
          </h2>
          <p className="text-gray-500 text-lg md:text-xl">
            We don't guess. We execute a proven 4-step roadmap designed to take
            you from unknown to undeniable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Card 1: Large Span - Audit */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-white p-6 md:p-10 shadow-2xl shadow-gray-200/50 border border-gray-100 hover:border-blue-100 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-64 h-64 transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-700">
              <ScanIllustration />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  Personal Brand Audit
                </h3>
                <p className="text-gray-500 leading-relaxed text-base md:text-lg max-w-lg">
                  We start with a deep-dive analysis of your current digital
                  footprint. We identify gaps, analyze competitors, and uncover
                  your unique "unfair advantage" in the market.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-full bg-white text-xs font-bold text-blue-600 border border-blue-100 shadow-sm">
                  Gap Analysis
                </div>
                <div className="px-4 py-2 rounded-full bg-white text-xs font-bold text-blue-600 border border-blue-100 shadow-sm">
                  Competitor Recon
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Positioning */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-6 md:p-10 shadow-2xl shadow-gray-200/50 border border-gray-100 hover:border-purple-100 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute -right-12 -top-12 w-48 h-48 group-hover:rotate-12 transition-transform duration-700">
              <PositioningIllustration />
            </div>
            <div className="relative z-10 mt-4 md:mt-12">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Positioning
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Defining your niche, value proposition, and visual identity with
                absolute clarity. We a "Why You?" before anyone else has to ask.
              </p>
            </div>
          </div>

          {/* Card 3 - Content Strategy */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-6 md:p-10 shadow-2xl shadow-gray-200/50 border border-gray-100 hover:border-orange-100 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute -left-5 -bottom-5 w-48 h-48 group-hover:scale-105 transition-transform duration-700">
              <ContentIllustration />
            </div>
            <div className="relative z-10 mb-4 md:mb-12">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Content Strategy
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Your blueprint for LinkedIn & Twitter. We build content buckets,
                hook libraries, and specific formats tailored to your voice.
              </p>
            </div>
          </div>

          {/* Card 4: Large Span - Execution */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-slate-900 text-white p-6 md:p-10 shadow-2xl hover:shadow-slate-900/20 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
            <div className="absolute bottom-0 right-0 w-full h-48 opacity-20 pointer-events-none">
              <RoadmapIllustration />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 h-full">
              <div className="max-w-xl">
                <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-white/20 transition-colors">
                  <Map className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  90-Day Growth Roadmap
                </h3>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                  A day-by-day execution plan. We tell you exactly what to post,
                  when to post it, and how to engage to maximize reach. No
                  guessing, just growing.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-w-[220px] bg-white/5 p-6 rounded-2xl border border-white/5 backdrop-blur-sm w-full md:w-auto">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span>Daily Action Items</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span>Weekly Reviews</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span>Growth Analytics</span>
                </div>
                <button className="mt-4 w-full bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg">
                  Start Now{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 5. Case Studies (Dark Section)
const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="py-24 relative overflow-hidden bg-gray-950"
    >
      {/* Creative Background Gradient & Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
              Real Results.
              <br />
              Real Revenue.
            </h2>
            <p className="text-gray-400 max-w-md">
              Our partners don't just get likes. They get leads, speaking gigs,
              and investor attention.
            </p>
          </div>
          <div className="flex gap-4">
            {/* Decorative buttons/tags */}
            <div className="px-4 py-2 rounded-full border border-gray-800 text-xs font-mono uppercase tracking-widest text-gray-400 bg-gray-900/50 backdrop-blur-md">
              Tech
            </div>
            <div className="px-4 py-2 rounded-full border border-gray-800 text-xs font-mono uppercase tracking-widest text-gray-400 bg-gray-900/50 backdrop-blur-md">
              SaaS
            </div>
            <div className="px-4 py-2 rounded-full border border-gray-800 text-xs font-mono uppercase tracking-widest text-gray-400 bg-gray-900/50 backdrop-blur-md">
              VC
            </div>
          </div>
        </div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              metric: "250k+",
              label: "Impressions Generated",
              desc: "In the first 30 days for a Fintech CEO.",
            },
            {
              metric: "300%",
              label: "Engagement Increase",
              desc: "Average growth across all client accounts.",
            },
            {
              metric: "15k+",
              label: "Inbound Leads",
              desc: "Value generated directly via LinkedIn DMs.",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-gray-900/50 border border-white/5 hover:border-white/10 transition-colors group backdrop-blur-sm"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                <NumberTicker value={stat.metric} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {stat.label}
              </h3>
              <p className="text-gray-500 text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Before & After Visuals - 2 Cards per Row */}
        <div className="border-t border-white/10 pt-16">
          <h3 className="text-2xl font-bold text-white mb-10 text-center tracking-tight">
            Transformation Showcase
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Series A Founder",
                before: "500 Views/mo",
                after: "150k Views/mo",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
                growth: "+3,000%",
              },
              {
                title: "SaaS Consultant",
                before: "2 Inbound Leads",
                after: "45 Inbound Leads",
                img: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2669&auto=format&fit=crop",
                growth: "+2,150%",
              },
              {
                title: "VC Partner",
                before: "Silent Network",
                after: "Industry Voice",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop",
                growth: "Top 1%",
              },
              {
                title: "E-com Brand",
                before: "High CPA",
                after: "Organic Viral",
                img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
                growth: "-40% CAC",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative group rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl"
              >
                <ImageComparison
                  img={item.img}
                  alt={item.title}
                  className="w-full h-full"
                />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-40 pointer-events-none">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-green-500/30 backdrop-blur-sm">
                        {item.growth}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-2">
                    <div className="text-gray-500 text-xs font-mono line-through decoration-red-500/50">
                      {item.before}
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                    <div className="text-white text-sm font-bold font-mono">
                      {item.after}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 6. Methodology (Ripples & Creativity)
const Methodology = () => {
  const steps = [
    {
      number: "01",
      title: "Hook Mastery",
      desc: "We engineer openings that stop the scroll. Using psychological pattern interrupts to buy the first 3 seconds of attention.",
      color: "border-yellow-500 shadow-yellow-500/20 text-yellow-600",
      bg: "bg-yellow-500/10",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
    },
    {
      number: "02",
      title: "Story Architecture",
      desc: "Structuring your expertise into compelling narratives. We turn dry facts into emotional journeys that build trust.",
      color: "border-purple-500 shadow-purple-500/20 text-purple-600",
      bg: "bg-purple-500/10",
      icon: <Layers className="w-6 h-6 text-purple-500" />,
    },
    {
      number: "03",
      title: "Community Eng.",
      desc: "Moving beyond likes to true engagement. We build systems that turn passive followers into active advocates.",
      color: "border-orange-500 shadow-orange-500/20 text-orange-600",
      bg: "bg-orange-500/10",
      icon: <Users className="w-6 h-6 text-orange-500" />,
    },
    {
      number: "04",
      title: "Data Iteration",
      desc: "We analyze 15+ metrics per post to refine the strategy. Every piece of content makes the next one smarter.",
      color: "border-green-500 shadow-green-500/20 text-green-600",
      bg: "bg-green-500/10",
      icon: <BarChart3 className="w-6 h-6 text-green-500" />,
    },
  ];

  return (
    <section
      id="methodology"
      className="py-32 bg-white relative overflow-hidden"
    >
      {/* Light Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          {/* Sticky Title Side */}
          <div className="md:w-1/3 md:sticky md:top-32 h-fit">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9] text-gray-900">
              Our <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Method.
              </span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We've stripped away the fluff. This is the exact scientific
              process we use to build industry-leading personal brands.
            </p>
            <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black border-b border-black/30 pb-1 hover:text-purple-600 hover:border-purple-600 transition-colors">
              Get the playbook <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Stacking Scrollable Cards Side */}
          <div className="md:w-2/3 relative space-y-32">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`sticky group bg-white/90 backdrop-blur-xl border-l-4 ${
                  step.color.split(" ")[0]
                } border-t border-r border-b border-gray-100 p-8 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                // Dynamic stacking effect
                style={{ marginTop: i === 0 ? 0 : "-5rem" }}
              >
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-2xl ${
                      step.bg
                    } border ${
                      step.color.split(" ")[0]
                    } flex items-center justify-center`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-4 mb-4">
                      <span
                        className={`text-4xl font-bold font-mono opacity-50 ${step.color
                          .split(" ")
                          .pop()}`}
                      >
                        {step.number}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-lg leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 7. Target Audience
const TargetAudience = () => {
  const audiences = [
    {
      title: "Founders",
      desc: "Raising capital, hiring talent, or preparing for an exit. Your brand is your leverage.",
      icon: <Users className="w-6 h-6 text-white" />,
      color: "#3b82f6", // blue
    },
    {
      title: "Consultants",
      desc: "Stop chasing leads. Become the authority that high-ticket clients hunt down.",
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      color: "#a855f7", // purple
    },
    {
      title: "Executives",
      desc: "Secure board seats and speaking gigs by amplifying your industry perspective.",
      icon: <Zap className="w-6 h-6 text-white" />,
      color: "#f97316", // orange
    },
    {
      title: "Professionals",
      desc: "Differentiate yourself in a crowded market. Career velocity starts with visibility.",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      color: "#10b981", // emerald
    },
  ];

  return (
    <section className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Neon Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />

      {/* Dark Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            Who is this Program For?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            This isn't for everyone. It's for those ready to dominate their
            niche.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((aud, i) => (
            <div key={i} className="group relative h-full">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                {/* The rotating beam */}
                <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] animate-[spin_4s_linear_infinite] opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="relative h-full bg-gray-950 border border-white/5 rounded-3xl p-8 m-[1px] flex flex-col items-start backdrop-blur-sm">
                <div
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ boxShadow: `0 0 20px ${aud.color}40` }}
                >
                  {aud.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {aud.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {aud.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 8. Marquee Section

// 9. CTA Section (Limited Availability) with Sparkles/Border Beam
// const CTA = () => {
//   return (
//     <section className="py-32 bg-black relative overflow-hidden flex items-center justify-center">
//        {/* Gradient Background Effect */}
//       <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-black to-black" />

//       {/* Sparkles simulation */}
//       <div className="absolute top-10 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
//       <div className="absolute top-20 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-75" />
//       <div className="absolute bottom-10 left-10 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-150" />

//       <div className="relative z-10 container mx-auto px-6 text-center">
//         <div className="inline-block mb-6 px-4 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-medium">
//           Limited Availability Q1 2025
//         </div>

//         <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
//           Ready to become the <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 relative inline-block">
//             Authority?
//             {/* Underline decoration */}
//             <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-500" viewBox="0 0 100 10" preserveAspectRatio="none">
//               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
//             </svg>
//           </span>
//         </h2>

//         <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
//           <button className="relative group overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//             <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//             <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-lg font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900">
//               Apply for Roadmap
//               <ArrowRight className="ml-2 w-5 h-5" />
//             </span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

const CTA = () => {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden flex items-center justify-center border-t border-white/10">
      {/* Background Base */}
      <div className="absolute inset-0 bg-black" />

      {/* Warp Speed Animation (Neonish) */}
      <div className="absolute inset-0 opacity-40 pointer-events-none animate-warp" />

      {/* Center Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Sparkles simulation */}
      <div className="absolute top-20 left-[20%] w-1 h-1 bg-white rounded-full animate-pulse duration-1000" />
      <div className="absolute bottom-32 right-[20%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-700 duration-1000" />
      <div className="absolute top-1/3 right-[15%] w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300 duration-1000" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex  mb-6 px-4 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-medium">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 mr-2 mt-0.5" />
          Limited Availability Q1 2025
        </div>

        <h2 className="text-5xl md:text-7xl lg:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
          Ready to become the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 relative inline-block">
            Authority?
            {/* Underline decoration */}
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-yellow-500"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto text-lg mb-12">
          Stop waiting for permission. Build the brand your expertise deserves.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="relative group overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transform hover:scale-105 transition-transform duration-300">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-lg font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900">
              Apply for Roadmap
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

// 10. FAQ
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What makes your service unique?",
      a: "Our unique approach combines data-driven strategies with creative excellence to deliver viral content that drives real results. We specialize in understanding your audience and creating campaigns that resonate.",
    },
    {
      q: "What guarantee do you offer your clients?",
      a: "We guarantee to go viral within 90 days or we continue working until we achieve results. Our track record speaks for itself with over 50 successful viral campaigns.",
    },
    {
      q: "What additional services do you offer?",
      a: "Beyond social media marketing, we offer content creation, web design & development, influencer marketing, and professional photography services.",
    },
    {
      q: "How are your prices structured?",
      a: "We offer transparent, fixed monthly pricing with no hidden fees. Choose from our packages or contact us for a custom solution tailored to your needs.",
    },
    {
      q: "How long is commitment required?",
      a: "We recommend a minimum 3-month commitment to see significant results, but we offer flexible monthly plans that can be adjusted based on your needs.",
    },
    {
      q: "What niches do you specialise in?",
      a: "We work across various industries including tech, e-commerce, lifestyle, fitness, and B2B services. Our diverse portfolio demonstrates our ability to create viral content in any niche.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold mb-12 text-center tracking-tighter">
          Frequently Asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-gray-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-500">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 11. Footer
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="font-bold text-2xl tracking-tighter flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black">
                A
              </div>
              ARDENT & LEAP
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Architecting authority for the world's most ambitious founders. We
              build brands that don't just compete—they dominate.
            </p>
            <div className="flex gap-4 pt-4">
              {/* Social Icons */}
              {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              {[
                "About Us",
                "Case Studies",
                "Blog",
                "Contact Us",
                "Careers",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech & AI Services */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6">Tech & AI Solutions</h4>
            <ul className="space-y-4 text-gray-400">
              {[
                "AI Chatbot Development",
                "AI Agents",
                "Custom Web Applications",
                "Shopify Development",
                "AWS Solutions",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-purple-400" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Creative Studio */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6">Creative Studio</h4>
            <ul className="space-y-4 text-gray-400">
              {[
                "Custom Web Design",
                "UI/UX Design",
                "Graphic Design",
                "Video Editing",
                "Brand Identity",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-400" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Large Text CTA / Bottom */}
        <div className="border-t border-white/10 pt-12 flex flex-col  justify-between items-center gap-8">
          <div className="w-full">
            <h3 className="text-[12vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-white/10 select-none pointer-events-none whitespace-nowrap">
              ARDENT & LEAP
            </h3>
          </div>
          <div className="flex   gap-8 text-sm text-gray-500  ">
            <p>© 2025 Ardent & Leap Agency Inc.</p>
            <div className="">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
            <div>
              {" "}
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              |
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export function TestimonialsSection() {
  const scrollLeft = useRef<HTMLDivElement>(null);
  const scrollRight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollLeft.current) {
      const scrollContainer = scrollLeft.current;
      const scrollWidth = scrollContainer.scrollWidth / 2;

      gsap.to(scrollContainer, {
        x: -scrollWidth,
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    }
  }, []);

  useEffect(() => {
    if (scrollRight.current) {
      const scrollContainer = scrollRight.current;
      const scrollWidth = scrollContainer.scrollWidth / 2;

      gsap.set(scrollContainer, { x: -scrollWidth });

      gsap.to(scrollContainer, {
        x: 0,
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    }
  }, []);

  const testimonials = [
    {
      quote:
        "I've increased Signature Club in 1 Million views within my first 3 months, and to be totally honest, I NEVER in a MILLION years did I think it was a legitimate thing. I thought maybe a large outlet/site or it's people who'd literally dedicated their ENTIRE life to...",
      name: "Sam Reynolds",
      role: "Property Manager at Property Plus",
      image:
        "https://framerusercontent.com/images/xcVsFcFg7M5SkoOkJX5lUfdBUN4.jpg",
    },
    {
      quote:
        "Building and keeping trust with clients is what we do best. We make sure every interaction strengthens your relationships and encourages long-term loyalty. Thanks to Signature Club.",
      name: "Emma Turner",
      role: "Sales Manager at FreshStart",
      image:
        "https://framerusercontent.com/images/lyyanOkQwdFqEmTN9vhLsdsi0.jpg",
    },
    {
      quote:
        "The best part about Signature Club is how they combine creativity with strategy. They don't just create content; they create content that converts. Our engagement has skyrocketed!",
      name: "Michael Chen",
      role: "CEO at TechFlow",
      image:
        "https://framerusercontent.com/images/a5SO6bWYO9JGc90jHykGK0g78.jpg",
    },
    {
      quote:
        "Partnering with Signature Club has been a complete game-changer for us. Honestly, execution and planning is the hard part, working with them is the easy part!",
      name: "Oliver Martinez",
      role: "CMO at Peak Performance",
      image:
        "https://framerusercontent.com/images/iBem3bM7DskP1qLkV8JoHMLH68.jpg",
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <>
      <section className="py-24 px-4 bg-white text-black overflow-hidden">
        <div className="container mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center"
          >
            <span className="block">
              Words <span className="font-serif italic">from</span> Our Partners
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mt-4"
          >
            See what our clients have to say about their experience with us.
          </motion.p>
        </div>

        <div ref={scrollLeft} className="flex gap-6">
          {duplicatedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: (index % testimonials.length) * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[400px] bg-gray-50 border border-gray-200 rounded-2xl p-8"
            >
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div ref={scrollRight} className="flex gap-6 mt-8">
          {duplicatedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: (index % testimonials.length) * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[400px] bg-gray-50 border border-gray-200 rounded-2xl p-8"
            >
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

// 12. Main Page Component (Equivalent to page.jsx in Next.js App Router)
export default function HomeClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-200 selection:text-purple-900">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Custom Keyframe for smooth arrow movement */
        @keyframes float {
          0%, 100% { transform: translateX(0) translateY(0) rotate(12deg); }
          50% { transform: translateX(10px) translateY(-5px) rotate(15deg); }
        }
        /* New Keyframe for floating card */
        @keyframes float-card {
          0%, 100% { transform: translateY(0) rotate(3deg); }
          50% { transform: translateY(-12px) rotate(6deg); }
        }
        .animate-float-card {
          animation: float-card 5s ease-in-out infinite;
        }
        /* Arrow Drawing Animation */
        @keyframes draw-path {
          0% { stroke-dashoffset: 400; opacity: 0; }
          20% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        .animate-draw-path {
          animation: draw-path 2s cubic-bezier(0.65, 0, 0.35, 1) forwards infinite;
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0; /* Start hidden */
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>

      <Navbar />
      <Hero />
      <StorySection />
      <BentoGrid />
      <CaseStudies />
      <Methodology />
      <TargetAudience />
      <TestimonialsSection />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
