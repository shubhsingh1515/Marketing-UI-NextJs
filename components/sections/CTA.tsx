
import { ArrowRight, Star } from "lucide-react";

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
export default CTA;