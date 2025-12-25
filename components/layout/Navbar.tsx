"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  Zap, 
  Trophy,
  Target,
  Sparkles,
  X,
  Send,
  ChevronDown,
  Cpu,
  Globe,
  ShoppingCart,
  Cloud,
  Bot,
  Palette,
  Layout,
  Video,
  PenTool,
  Monitor,
  MessageCircle // Added missing import
} from 'lucide-react';

const ServicesMegaMenu = () => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
      <div className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-purple-500/10 overflow-hidden">
        {/* Magic UI Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>
        
        {/* Animated Border Beam */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[shimmer_2s_infinite] opacity-50" />

        <div className="relative z-10 grid grid-cols-2 p-8 gap-8">
          
          {/* Tech & AI Solutions */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-purple-600">
              <Cpu className="w-5 h-5" />
              <h4 className="font-bold text-sm uppercase tracking-wider">Tech & AI Solutions</h4>
            </div>
            <div className="space-y-2">
              {[
                { name: 'AWS Solutions', icon: <Cloud className="w-4 h-4" /> },
                { name: 'AI Chatbot Development', icon: <MessageCircle className="w-4 h-4" /> },
                { name: 'AI Agents', icon: <Bot className="w-4 h-4" /> },
                { name: 'Custom Web Applications', icon: <Globe className="w-4 h-4" /> },
                { name: 'Shopify Development', icon: <ShoppingCart className="w-4 h-4" /> },
              ].map((service, i) => (
                <Link key={i} href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 group/item transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white border border-purple-100 flex items-center justify-center text-gray-400 group-hover/item:text-purple-600 group-hover/item:border-purple-200 transition-all shadow-sm">
                    {service.icon}
                  </div>
                  <span className="text-gray-600 font-medium group-hover/item:text-gray-900">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Creative Studio */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-blue-600">
              <Palette className="w-5 h-5" />
              <h4 className="font-bold text-sm uppercase tracking-wider">Creative Studio</h4>
            </div>
            <div className="space-y-2">
              {[
                { name: 'Brand Identity', icon: <Target className="w-4 h-4" /> },
                { name: 'Custom Web Design', icon: <Monitor className="w-4 h-4" /> },
                { name: 'UI/UX Design', icon: <Layout className="w-4 h-4" /> },
                { name: 'Graphic Design', icon: <PenTool className="w-4 h-4" /> },
                { name: 'Video Editing', icon: <Video className="w-4 h-4" /> },
              ].map((service, i) => (
                <Link key={i} href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 group/item transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-gray-400 group-hover/item:text-blue-600 group-hover/item:border-blue-200 transition-all shadow-sm">
                    {service.icon}
                  </div>
                  <span className="text-gray-600 font-medium group-hover/item:text-gray-900">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="bg-gray-50 border-t border-gray-100 p-4 text-center">
            <Link href="/services" className="text-sm font-semibold text-gray-500 hover:text-black transition-colors flex items-center justify-center gap-1">
                View All Services <ArrowRight className="w-4 h-4" />
            </Link>
        </div> */}
      </div>
    </div>
  );
};

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
          ? "bg-white/80 backdrop-blur-md  py-2"
          : "bg-transparent py-3"
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
          <Link href="/about-us" className="hover:text-black transition-colors">
            About Us
          </Link>
          <Link
            href="#case-studies"
            className="hover:text-black transition-colors"
          >
            Portfolio
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-black transition-colors focus:outline-none">
              Services <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <ServicesMegaMenu />
          </div>

           <Link
            href="why-us"
            className="hover:text-black transition-colors"
          >
            Why Us
          </Link>
          <Link href="/contact" className="hover:text-black transition-colors">
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

export default Navbar;
