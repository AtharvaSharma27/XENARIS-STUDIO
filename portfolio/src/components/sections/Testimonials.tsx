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
    <section className="py-32 px-4 md:px-8 bg-white relative overflow-hidden flex justify-center">
      {/* Huge Background Watermark Marquee */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap text-[#D8E3F5] font-display font-black text-[35vw] leading-none opacity-60 pointer-events-none select-none z-0 overflow-hidden w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex whitespace-nowrap w-fit"
        >
          <span className="px-8">Xenaris Studio</span>
          <span className="px-8">Xenaris Studio</span>
          <span className="px-8">Xenaris Studio</span>
          <span className="px-8">Xenaris Studio</span>
        </motion.div>
      </div>

      <div className="max-w-5xl w-full mx-auto text-center bg-[#0E0611] text-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 relative z-10 shadow-2xl">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-2 h-2 rounded-full bg-white" />
          <span className="opacity-70 tracking-wider uppercase text-sm font-medium">
            What customers say
          </span>
        </div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center max-w-3xl mx-auto"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-display leading-tight mb-12 font-medium">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-bold">{testimonials[currentIndex].name}</div>
                  <div className="text-sm opacity-50">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-16">
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
