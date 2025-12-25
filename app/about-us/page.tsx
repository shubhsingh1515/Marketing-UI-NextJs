'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Zap, 
  Target, 
  Globe, 
  Award,
  Heart,
  Lightbulb,
  ShieldCheck,
  Rocket,
  Linkedin,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

// --- MOCK COMPONENTS ---
const Link = ({ href, children, className, ...props }) => (
  <a href={href} className={className} {...props}>{children}</a>
);

const Image = ({ src, alt, className, ...props }) => (
  <img src={src} alt={alt} className={className} {...props} />
);

// --- UTILS & HOOKS ---
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { threshold: 0.1, ...options });

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

const NumberTicker = ({ value, direction = 'up', delay = 0, className }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = parseInt(value.toString().replace(/\D/g, '')) || 0; 
      const duration = 2000;
      const incrementTime = (duration / (end || 1)) * 10;

      const timer = setInterval(() => {
        start += Math.ceil(end / 100);
        if (start >= end) {
            start = end;
            clearInterval(timer);
        }
        setCount(start);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return <span ref={ref} className={className}>{count}{value.toString().replace(/[0-9]/g, '')}</span>;
};

// --- SHARED COMPONENTS ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl md:text-2xl tracking-tighter flex items-center gap-2 text-white">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black">A</div>
          ARDENT & LEAP
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="#" className="hover:text-white transition-colors">Home</Link>
          <Link href="#" className="text-white font-semibold">About</Link>
          <Link href="#" className="hover:text-white transition-colors">Services</Link>
          <Link href="#" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-all hover:scale-105 active:scale-95">
          Book Call
        </button>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="w-full">
                <h3 className="text-[12vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none pointer-events-none whitespace-nowrap">
                    ARDENT & LEAP
                </h3>
            </div>
        </div>
      </div>
    </footer>
  );
};

// --- PAGE SECTIONS ---

// 1. Intro & Identity
const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-black overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
         <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Who We Are
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-tight mb-8">
            We help businesses <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Scale with Soul.
            </span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Ardent & Leap is a branding and growth consultancy bridging the gap between data-driven marketing and meaningful, high-impact design.
        </p>
      </div>
    </section>
  );
};

// 2. Origin Story (The "Who")
const StorySection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className={`relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Team collaboration" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
                <p className="font-bold text-lg">Founded in 2020</p>
                <p className="text-sm opacity-80">San Francisco, CA</p>
            </div>
          </div>

          {/* Text Side */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter">
                Born from a desire to <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Break the Mold.</span>
             </h2>
             <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                    We noticed a pattern: brands were either beautiful but empty, or strategic but boring. There was no middle ground. 
                </p>
                <p>
                    Ardent & Leap was created to fuse the two. We believe that true authority comes from the intersection of <strong className="text-slate-900">relentless strategy</strong> and <strong className="text-slate-900">undeniable aesthetics</strong>.
                </p>
                <p>
                    Today, we are a team of strategists, designers, and technologists helping founders build legacies, not just businesses.
                </p>
             </div>
             
             <div className="pt-4">
                <div className="flex gap-12">
                    <div>
                        <h4 className="text-4xl font-bold text-slate-900 mb-1"><NumberTicker value="5" />+</h4>
                        <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">Years Active</p>
                    </div>
                    <div>
                        <h4 className="text-4xl font-bold text-slate-900 mb-1"><NumberTicker value="120" />+</h4>
                        <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">Clients Served</p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Mission & Vision (Why We Exist)
const MissionSection = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mission Card */}
                    <div className="group relative rounded-3xl p-[1px] overflow-hidden">
                        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#000000_50%,#3b82f6_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-full bg-gray-900 p-10 rounded-[23px] border border-white/10">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                To empower visionary founders with the tools, strategy, and identity they need to dominate their market and create lasting impact.
                            </p>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="group relative rounded-3xl p-[1px] overflow-hidden">
                        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#000000_50%,#a855f7_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-full bg-gray-900 p-10 rounded-[23px] border border-white/10">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                A digital landscape where authority is built on authenticity, value, and innovation—not just noise.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 4. Core Values (What Guides Us)
const ValuesSection = () => {
    const values = [
        { icon: <ShieldCheck />, title: "Integrity First", desc: "We don't sell snake oil. We build frameworks that actually work." },
        { icon: <Rocket />, title: "Performance Driven", desc: "Aesthetics matter, but results matter more. We track everything." },
        { icon: <Heart />, title: "Client Obsessed", desc: "Your wins are our wins. We treat your brand like our own." },
        { icon: <Lightbulb />, title: "Radical Innovation", desc: "We don't follow trends; we help you set them." },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
             {/* Light Grid Pattern */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />
             
             <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tighter mb-4">Our Core Values</h2>
                    <p className="text-slate-500">The principles that guide every pixel and strategy.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((val, i) => (
                        <div key={i} className="group p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 text-slate-700 group-hover:bg-black group-hover:text-white transition-colors">
                                {React.cloneElement(val.icon, { size: 24 })}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>
             </div>
        </section>
    );
};

// 5. Team Section (Human Face)
const TeamSection = () => {
    const team = [
        { name: "Alex Ardent", role: "Founder & Strategy", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" },
        { name: "Sarah Leap", role: "Creative Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop" },
        { name: "James Chen", role: "Head of Tech", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop" },
    ];

    return (
        <section className="py-24 bg-black relative border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h2 className="text-4xl font-bold text-white tracking-tighter mb-2">Meet the Minds</h2>
                        <p className="text-gray-400">The people behind the pixels.</p>
                    </div>
                    <button className="text-white border-b border-white/30 pb-1 hover:border-white transition-colors flex items-center gap-2">
                        Join the team <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl">
                            <div className="aspect-[3/4] overflow-hidden bg-gray-800">
                                <Image 
                                    src={member.img} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h4 className="text-xl font-bold text-white">{member.name}</h4>
                                <p className="text-gray-400 text-sm mb-4">{member.role}</p>
                                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                                    <Linkedin className="w-4 h-4 text-white hover:text-blue-400 cursor-pointer" />
                                    <Twitter className="w-4 h-4 text-white hover:text-blue-400 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 6. Achievements & CTA
const AchievementsCTA = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
             {/* White Neonish Grid Beam BG from WhyUs */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

             <div className="container mx-auto px-6 relative z-10 text-center">
                 
                 <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
                     {[
                        { label: "Active Clients", val: "50+" },
                        { label: "Revenue Generated", val: "$10M+" },
                        { label: "Content Pieces", val: "5k+" },
                        { label: "Global Reach", val: "15+" } // Countries
                     ].map((stat, i) => (
                         <div key={i} className="flex flex-col items-center">
                             <span className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">{stat.val}</span>
                             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                         </div>
                     ))}
                 </div>

                 <div className="max-w-4xl mx-auto relative group rounded-3xl p-[1px] overflow-hidden shadow-2xl shadow-purple-500/20">
                     <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_50%,#a855f7_100%)] animate-[spin_4s_linear_infinite] opacity-100 transition-opacity duration-500" />
                     <div className="relative bg-white rounded-[22px] p-12 md:p-16 border border-gray-100">
                         <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">
                             Stop Settling for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Average.</span>
                         </h2>
                         <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">
                             Join the leaders who are redefining their industries. Let's build your authority today.
                         </p>
                         <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-900 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto uppercase tracking-wide text-sm">
                             Book a Consultation <ArrowRight className="w-4 h-4" />
                         </button>
                     </div>
                 </div>
             </div>
        </section>
    );
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-slate-900 font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <HeroSection />
      <StorySection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <AchievementsCTA />
    </div>
  );
}