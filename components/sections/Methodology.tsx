import { ArrowRight, BarChart3, Layers, Users, Zap } from "lucide-react";


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
                } border-t border-r border-b border-gray-100 p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden`}
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

export default Methodology;