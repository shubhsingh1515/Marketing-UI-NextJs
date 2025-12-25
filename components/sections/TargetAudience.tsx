import { BarChart3, Briefcase, Users, Zap } from "lucide-react";


const TargetAudience = () => {
  const audiences = [
    {
      title: "Founders",
      desc: "Raising capital, hiring talent, or preparing for an exit. Your brand is your leverage.",
      icon: <Users className="w-6 h-6 text-white" />,
      color: "#3b82f6", // blue
    },
    {
      title: "Consultants",
      desc: "Stop chasing leads. Become the authority that high-ticket clients hunt down.",
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      color: "#a855f7", // purple
    },
    {
      title: "Executives",
      desc: "Secure board seats and speaking gigs by amplifying your industry perspective.",
      icon: <Zap className="w-6 h-6 text-white" />,
      color: "#f97316", // orange
    },
    {
      title: "Professionals",
      desc: "Differentiate yourself in a crowded market. Career velocity starts with visibility.",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      color: "#10b981", // emerald
    },
  ];

  return (
    <section className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Neon Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />

      {/* Dark Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            Who is this Program For?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            This isn't for everyone. It's for those ready to dominate their
            niche.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((aud, i) => (
            <div key={i} className="group relative h-full">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                {/* The rotating beam */}
                <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] animate-[spin_4s_linear_infinite] opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="relative h-full bg-gray-950 border border-white/5 rounded-3xl p-8 m-[1px] flex flex-col items-start backdrop-blur-sm">
                <div
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ boxShadow: `0 0 20px ${aud.color}40` }}
                >
                  {aud.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {aud.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {aud.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TargetAudience;