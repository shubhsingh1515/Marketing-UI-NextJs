import { ArrowRight, CheckCircle2, Layers, Map, Search, Target } from "lucide-react";


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
export default BentoGrid;