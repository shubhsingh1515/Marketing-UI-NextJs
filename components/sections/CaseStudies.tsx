
import { ArrowRight } from "lucide-react";
import { NumberTicker } from "../ui/NumberTicker";
import ImageComparison from "../ui/ImageComparison";


const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="py-24 relative overflow-hidden bg-gray-950"
    >
      {/* Creative Background Gradient & Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">
              Real Results.
              <br />
              Real Revenue.
            </h2>
            <p className="text-gray-400 max-w-md">
              Our partners don't just get likes. They get leads, speaking gigs,
              and investor attention.
            </p>
          </div>
          <div className="flex gap-4">
            {/* Decorative buttons/tags */}
            <div className="px-4 py-2 rounded-full border border-gray-800 text-xs font-mono uppercase tracking-widest text-gray-400 bg-gray-900/50 backdrop-blur-md">
              Tech
            </div>
            <div className="px-4 py-2 rounded-full border border-gray-800 text-xs font-mono uppercase tracking-widest text-gray-400 bg-gray-900/50 backdrop-blur-md">
              SaaS
            </div>
            <div className="px-4 py-2 rounded-full border border-gray-800 text-xs font-mono uppercase tracking-widest text-gray-400 bg-gray-900/50 backdrop-blur-md">
              VC
            </div>
          </div>
        </div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              metric: "250k+",
              label: "Impressions Generated",
              desc: "In the first 30 days for a Fintech CEO.",
            },
            {
              metric: "300%",
              label: "Engagement Increase",
              desc: "Average growth across all client accounts.",
            },
            {
              metric: "15k+",
              label: "Inbound Leads",
              desc: "Value generated directly via LinkedIn DMs.",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-gray-900/50 border border-white/5 hover:border-white/10 transition-colors group backdrop-blur-sm"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                <NumberTicker value={stat.metric} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {stat.label}
              </h3>
              <p className="text-gray-500 text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Before & After Visuals - 2 Cards per Row */}
        <div className="border-t border-white/10 pt-16">
          <h3 className="text-2xl font-bold text-white mb-10 text-center tracking-tight">
            Transformation Showcase
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Series A Founder",
                before: "500 Views/mo",
                after: "150k Views/mo",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
                growth: "+3,000%",
              },
              {
                title: "SaaS Consultant",
                before: "2 Inbound Leads",
                after: "45 Inbound Leads",
                img: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2669&auto=format&fit=crop",
                growth: "+2,150%",
              },
              {
                title: "VC Partner",
                before: "Silent Network",
                after: "Industry Voice",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop",
                growth: "Top 1%",
              },
              {
                title: "E-com Brand",
                before: "High CPA",
                after: "Organic Viral",
                img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
                growth: "-40% CAC",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative group rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl"
              >
                <ImageComparison
                  img={item.img}
                  alt={item.title}
                  className="w-full h-full"
                />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-40 pointer-events-none">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-green-500/30 backdrop-blur-sm">
                        {item.growth}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-2">
                    <div className="text-gray-500 text-xs font-mono line-through decoration-red-500/50">
                      {item.before}
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                    <div className="text-white text-sm font-bold font-mono">
                      {item.after}
                    </div>
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
export default CaseStudies;