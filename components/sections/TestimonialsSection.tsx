import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function TestimonialsSection() {
  const scrollLeft = useRef<HTMLDivElement>(null);
  const scrollRight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollLeft.current) {
      const scrollContainer = scrollLeft.current;
      const scrollWidth = scrollContainer.scrollWidth / 2;

      gsap.to(scrollContainer, {
        x: -scrollWidth,
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    }
  }, []);

  useEffect(() => {
    if (scrollRight.current) {
      const scrollContainer = scrollRight.current;
      const scrollWidth = scrollContainer.scrollWidth / 2;

      gsap.set(scrollContainer, { x: -scrollWidth });

      gsap.to(scrollContainer, {
        x: 0,
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    }
  }, []);

  const testimonials = [
    {
      quote:
        "I've increased Signature Club in 1 Million views within my first 3 months, and to be totally honest, I NEVER in a MILLION years did I think it was a legitimate thing. I thought maybe a large outlet/site or it's people who'd literally dedicated their ENTIRE life to...",
      name: "Sam Reynolds",
      role: "Property Manager at Property Plus",
      image:
        "https://framerusercontent.com/images/xcVsFcFg7M5SkoOkJX5lUfdBUN4.jpg",
    },
    {
      quote:
        "Building and keeping trust with clients is what we do best. We make sure every interaction strengthens your relationships and encourages long-term loyalty. Thanks to Signature Club.",
      name: "Emma Turner",
      role: "Sales Manager at FreshStart",
      image:
        "https://framerusercontent.com/images/lyyanOkQwdFqEmTN9vhLsdsi0.jpg",
    },
    {
      quote:
        "The best part about Signature Club is how they combine creativity with strategy. They don't just create content; they create content that converts. Our engagement has skyrocketed!",
      name: "Michael Chen",
      role: "CEO at TechFlow",
      image:
        "https://framerusercontent.com/images/a5SO6bWYO9JGc90jHykGK0g78.jpg",
    },
    {
      quote:
        "Partnering with Signature Club has been a complete game-changer for us. Honestly, execution and planning is the hard part, working with them is the easy part!",
      name: "Oliver Martinez",
      role: "CMO at Peak Performance",
      image:
        "https://framerusercontent.com/images/iBem3bM7DskP1qLkV8JoHMLH68.jpg",
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <>
      <section className="py-24 px-4 bg-white text-black overflow-hidden">
        <div className="container mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center"
          >
            <span className="block">
              Words <span className="font-serif italic">from</span> Our Partners
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mt-4"
          >
            See what our clients have to say about their experience with us.
          </motion.p>
        </div>

        <div ref={scrollLeft} className="flex gap-6">
          {duplicatedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: (index % testimonials.length) * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[400px] bg-gray-50 border border-gray-200 rounded-2xl p-8"
            >
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div ref={scrollRight} className="flex gap-6 mt-8">
          {duplicatedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: (index % testimonials.length) * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[400px] bg-gray-50 border border-gray-200 rounded-2xl p-8"
            >
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default TestimonialsSection;