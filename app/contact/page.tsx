'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube,
  Send,
  CheckCircle2
} from 'lucide-react';

// --- MOCK LINK & IMAGE (For standalone functionality) ---
const Link = ({ href, children, className, ...props }) => (
  <a href={href} className={className} {...props}>{children}</a>
);

const Image = ({ src, alt, className, ...props }) => (
  <img src={src} alt={alt} className={className} {...props} />
);


const ContactForm = () => {
  return (
    <div className="relative group rounded-3xl p-[1px] overflow-hidden shadow-2xl shadow-purple-500/10">
      {/* Animated Border Gradient */}
      <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_50%,#a855f7_100%)] animate-[spin_4s_linear_infinite] opacity-100 transition-opacity duration-500" />
      
      <form className="relative bg-white rounded-3xl p-8 md:p-10 border border-gray-100 h-full flex flex-col justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h3>
          <p className="text-slate-500 text-sm mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                <input type="email" placeholder="john@company.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Topic</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all appearance-none">
                <option>Personal Branding</option>
                <option>Corporate Strategy</option>
                <option>Content Production</option>
                <option>Partnership Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Message</label>
              <textarea rows="4" placeholder="Tell us about your goals..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"></textarea>
            </div>
          </div>
        </div>

        <button type="button" className="group relative w-full overflow-hidden rounded-xl p-[1px] focus:outline-none shadow-lg shadow-purple-500/20">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-black px-8 py-4 text-sm font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-gray-900 uppercase tracking-widest">
              Send Message
              <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
        </button>
      </form>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-center h-full space-y-12">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-widest mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Open for New Ventures
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter mb-6">
          Let's Build Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Legacy.</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-md leading-relaxed">
          Ready to transition from player to authority? We're currently accepting applications for Q1 2025.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4 text-slate-900 group cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-300 shadow-sm">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-purple-600 transition-colors">Email Us</p>
            <p className="text-lg font-medium">hello@ardentandleap.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-slate-900 group cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-sm">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-blue-600 transition-colors">HQ</p>
            <p className="text-lg font-medium">San Francisco & Remote</p>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-200">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Connect on Social</p>
        <div className="flex gap-4">
            {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black hover:scale-110 transition-all duration-300 text-slate-600 shadow-sm">
                    <Icon size={18} />
                </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden">
       {/* CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Main Content */}
      <main className="relative pt-32 pb-20 lg:pb-32">
        {/* Background Effects - White/Grid/Neonish */}
        <div className="fixed inset-0 h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60"></div>
        
        {/* Soft Neon Glows */}
        <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column: Info */}
            <div className="animate-in slide-in-from-left-10 duration-1000 fade-in">
                <ContactInfo />
            </div>

            {/* Right Column: Form */}
            <div className="animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
                <ContactForm />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}