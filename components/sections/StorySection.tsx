import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";



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
export default StorySection;