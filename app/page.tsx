// import HomeClient from "./HomeClient";


// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-200 selection:text-purple-900">
//      <HomeClient />

//         </div>
//   );
// }

"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import StorySection from "@/components/sections/StorySection";
import BentoGrid from "@/components/sections/BentoGrid";
import CaseStudies from "@/components/sections/CaseStudies";
import Methodology from "@/components/sections/Methodology";
import TargetAudience from "@/components/sections/TargetAudience";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";

import { AnimationsProvider } from "@/components/providers/Animations";

export default function Page() {
  return (
    <AnimationsProvider>
      <div className="min-h-screen bg-white text-slate-900">
        {/* <Navbar /> */}
        <Hero />
        <StorySection />
        <BentoGrid />
        <CaseStudies />
        <Methodology />
        <TargetAudience />
        <TestimonialsSection />
        <CTA />
        <FAQ />
        {/* <Footer />   */}
      </div>
    </AnimationsProvider>
  );
}
