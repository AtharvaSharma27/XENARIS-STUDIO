import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Xenaris completely transformed our online presence. The video assets they created drove a 40% increase in our ad conversions.",
    name: "Sarah Jenkins",
    role: "Founder, Elevate Brands",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The headless website they built is blisteringly fast. We've seen our bounce rate plummet since launch. Worth every penny.",
    name: "Marcus Thorne",
    role: "CTO, RetailX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Working directly with the founders instead of a bloated account management team meant things got done faster and better.",
    name: "Elena Rostova",
    role: "Director of Marketing, TechFlow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
          <span className="text-[var(--color-text-muted)] tracking-wider uppercase text-sm font-medium">
            Client Words
          </span>
        </div>

        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <p className="text-2xl md:text-4xl font-display leading-tight mb-12">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover grayscale opacity-80"
                />
                <div className="text-left">
                  <div className="font-bold text-white">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-white/50">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button onClick={prev} className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
            <ArrowLeft size={20} />
          </button>
          <button onClick={next} className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
