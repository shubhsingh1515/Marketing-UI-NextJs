import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null as number | null);

  const faqs = [
    {
      q: "What makes your service unique?",
      a: "Our unique approach combines data-driven strategies with creative excellence to deliver viral content that drives real results. We specialize in understanding your audience and creating campaigns that resonate.",
    },
    {
      q: "What guarantee do you offer your clients?",
      a: "We guarantee to go viral within 90 days or we continue working until we achieve results. Our track record speaks for itself with over 50 successful viral campaigns.",
    },
    {
      q: "What additional services do you offer?",
      a: "Beyond social media marketing, we offer content creation, web design & development, influencer marketing, and professional photography services.",
    },
    {
      q: "How are your prices structured?",
      a: "We offer transparent, fixed monthly pricing with no hidden fees. Choose from our packages or contact us for a custom solution tailored to your needs.",
    },
    {
      q: "How long is commitment required?",
      a: "We recommend a minimum 3-month commitment to see significant results, but we offer flexible monthly plans that can be adjusted based on your needs.",
    },
    {
      q: "What niches do you specialise in?",
      a: "We work across various industries including tech, e-commerce, lifestyle, fitness, and B2B services. Our diverse portfolio demonstrates our ability to create viral content in any niche.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold mb-12 text-center tracking-tighter">
          Frequently Asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-gray-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-500">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;