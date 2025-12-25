import Image from "next/image";
import { ArrowRight, Play, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 lg:pt-30 lg:pb-32 overflow-hidden bg-white">
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
                    {/* <Image
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${
                        i * 34
                      }`}
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    /> */}
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${
                        i * 34
                      }`}
                      alt="Avatar"
                      className="w-10 h-10 object-cover"
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
export default Hero;
