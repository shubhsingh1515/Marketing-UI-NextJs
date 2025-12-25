"use client";

import Link from "next/link";
import { Linkedin, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react";
    
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
            <h3 className="text-[11vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-white/10 select-none pointer-events-none whitespace-nowrap">
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

export default Footer;
