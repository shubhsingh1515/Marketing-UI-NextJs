'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  Zap, 
  Trophy,
  Target,
  Sparkles,
  X,
  Send
} from 'lucide-react';

// --- MOCK COMPONENTS ---
const Link = ({ href, children, className, ...props }) => (
  <a href={href} className={className} {...props}>{children}</a>
);

// --- UTILS & HOOKS ---
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  return mousePosition;
};

// --- COMPONENTS ---



// Light Mode Spotlight Card
const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.08), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const WhyUsSection = () => {
  const features = [
    {
      title: "Unmistakable Identity",
      desc: "We don't do templates. We extract your unique DNA and amplify it until you're the only logical choice in your market.",
      icon: <FingerprintIcon className="w-6 h-6 text-blue-600" />,
      gradient: "from-blue-500/10 to-transparent"
    },
    {
      title: "Influential Authority",
      desc: "Vanity metrics don't pay bills. We build deep trust that converts passive followers into high-ticket clients.",
      icon: <Trophy className="w-6 h-6 text-purple-600" />,
      gradient: "from-purple-500/10 to-transparent"
    },
    {
      title: "Impactful Scale",
      desc: "Systems over chaos. We implement content engines that allow you to dominate multiple channels without burnout.",
      icon: <Zap className="w-6 h-6 text-orange-600" />,
      gradient: "from-orange-500/10 to-transparent"
    }
  ];

  // Comparison Data structured for Table
  const comparisons = [
    {
        other: "Focus on delivering posts, videos, or graphics as ordered.",
        us: "Build brands that stand out, not blend in, through strategic identity and positioning."
    },
    {
        other: "Create content from assumptions, trends, or aesthetic preference.",
        us: "Align your message with audience psychology, platform behavior, and market expectations."
    },
    {
        other: "Depend on you to manage direction and next steps.",
        us: "Provide reusable frameworks and systems ensuring long-term clarity and control."
    },
    {
        other: "Offer short-term boosts in followers or engagement.",
        us: "Pattern growth that leads to qualified leads, partnerships, and community loyalty."
    },
    {
        other: "Work project-to-project with no long-term roadmap.",
        us: "Operate with a scalable growth path: Identity → Strategy → Demand → Authority."
    },
    {
        other: "Treat you like a client ordering services.",
        us: "Treat you like a brand partner building legacy, not just content."
    }
  ];

  return (
    <>
      {/* --- SECTION 1: Features (White BG + Neon Dotted Grid) --- */}
      <section className="relative py-32 bg-white overflow-hidden border-b border-gray-100">
        {/* Magic UI Dotted Background */}
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* Soft Neon Blurs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-purple-300/30 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
            <div className="absolute bottom-[10%] right-[20%] w-72 h-72 bg-blue-300/30 rounded-full blur-[100px] mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-100 bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              Why Clients Trust Us
            </div>
            <h2 className="text-5xl md:text-5xl font-bold text-gray-900 tracking-tighter leading-tight mb-8">
              We don't just create content. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600">
                We architect authority.
              </span>
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Choose Ardent & Leap if you want your brand to be <span className="text-black font-semibold">unmistakable, influential, and impactful</span> — not average.
            </p>
          </div>

          {/* Feature Cards with Spotlight Effect (Light Mode) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <SpotlightCard key={i} className="group">
                <div className={`absolute inset-0 bg-gradient-to-br ${feat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative p-8 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {feat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feat.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feat.desc}</p>
                  <div className="mt-auto pt-8 flex items-center text-sm font-bold text-black opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    Deep Dive <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 2: Comparison & CTA (White BG + Linear Grid) --- */}
     <section className="relative py-32 bg-black overflow-hidden">
        {/* Dark Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* Ambient Neon Glows */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Difference</span> is in the Details.</h2>
            <p className="text-gray-400 text-lg">See exactly why leaders choose us over traditional agencies.</p>
          </div>

          {/* Comparison Table (Dark Mode) */}
          <div className="max-w-6xl mx-auto bg-gray-900/60 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md mb-24 shadow-[0_0_50px_-12px_rgba(168,85,247,0.25)]">
             {/* Table Headers */}
             <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10 bg-white/5">
                <div className="p-6 md:p-8 flex items-center gap-4 border-b md:border-b-0 md:border-r border-white/10">
                   <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                      <X className="w-5 h-5 text-red-400" />
                   </div>
                   <h4 className="text-xl font-bold text-gray-400">Average Agencies</h4>
                </div>
                <div className="p-6 md:p-8 flex items-center gap-4 bg-green-500/5 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 shadow-[0_0_15px_#4ade80]" />
                   <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                   </div>
                   <h4 className="text-xl font-bold text-white">Ardent & Leap</h4>
                </div>
             </div>

             {/* Table Body */}
             <div className="divide-y divide-white/5">
               {comparisons.map((row, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 group hover:bg-white/[0.03] transition-colors">
                      {/* Others Column */}
                      <div className="p-6 md:p-8 text-gray-500 border-b md:border-b-0 md:border-r border-white/5 flex gap-4 items-start">
                           <XCircle className="w-5 h-5 text-red-500/30 flex-shrink-0 mt-1" />
                           <span className="text-base leading-relaxed">{row.other}</span>
                      </div>
                      {/* Us Column */}
                      <div className="p-6 md:p-8 text-gray-200 flex gap-4 items-start bg-green-500/[0.02]">
                           <div className="mt-1 min-w-[20px]">
                               <CheckCircle2 className="w-5 h-5 text-green-500" />
                           </div>
                           <span className="text-base leading-relaxed font-medium text-white">{row.us}</span>
                      </div>
                  </div>
               ))}
             </div>
          </div>

          {/* CTA Form Section - Dark Neonish */}
    
        </div>
      </section>
      <section className='py-32 bg-white overflow-hidden border-b border-gray-100'>
             <div className="max-w-4xl mx-auto">
                <div className="relative group rounded-3xl p-[1px] overflow-hidden shadow-2xl shadow-purple-500/20">
                    {/* Animated Border Gradient (Beam) */}
                    <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_50%,#a855f7_100%)] animate-[spin_4s_linear_infinite] opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative bg-white rounded-[22px] p-8 md:p-12 border border-gray-100 overflow-hidden">
                         {/* Internal Grid Pattern */}
                         <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-70 pointer-events-none" />

                         {/* White/Neon Background Glow */}
                         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-100/60 rounded-full blur-[80px] pointer-events-none mix-blend-multiply" />

                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                             <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                                    Stop Settling for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Average.</span>
                                </h3>
                                <p className="text-gray-500 mb-8 leading-relaxed">
                                    Fill out this quick form to book your free strategy audit. We'll map out your path to authority.
                                </p>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Free 15-min consultation</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> No obligation audit</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Actionable insights</li>
                                </ul>
                             </div>

                             <form className="space-y-4">
                                <div className="space-y-2 text-left">
                                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Name</label>
                                    <input type="text" placeholder="Your Name" className="w-full bg-white/80 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-400 backdrop-blur-sm" />
                                </div>
                                <div className="space-y-2 text-left">
                                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Work Email</label>
                                    <input type="email" placeholder="you@company.com" className="w-full bg-white/80 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-400 backdrop-blur-sm" />
                                </div>
                                <div className="space-y-2 text-left">
                                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Website / LinkedIn</label>
                                    <input type="text" placeholder="linkedin.com/in/..." className="w-full bg-white/80 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-400 backdrop-blur-sm" />
                                </div>
                                <button className="group w-full bg-black text-white font-bold py-4 rounded-xl mt-4 hover:bg-gray-900 transition-all active:scale-[0.98] uppercase tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20">
                                    Claim Your Audit 
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                             </form>
                         </div>
                    </div>
                </div>
          </div>
      </section>
    </>
  );
};


// Custom Icon
const FingerprintIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 6" />
    <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
    <path d="M8.65 22c.21-.66.45-1.32.57-2" />
    <path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2" />
    <path d="M16 22c-.73-2.77-1.35-5.5-2-8" />
    <path d="M20 20.5c.38-1.8.6-4.2.6-6.36a10 10 0 0 0-5.52-8.59" />
    <path d="M12 12a3 3 0 0 1 2 2.7" />
  </svg>
);

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-black text-slate-900 font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <WhyUsSection />
    </div>
  );
}