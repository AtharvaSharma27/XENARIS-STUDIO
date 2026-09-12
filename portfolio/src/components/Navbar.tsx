import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-transparent' : 'py-4 bg-transparent'
      }`}
    >
      <div className="w-full mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group text-current">
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
            alt="Xenaris" 
            className="h-24 md:h-32 scale-110 origin-left object-contain transition-transform duration-300 group-hover:scale-125 opacity-90 mix-blend-difference invert"
            onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
          />
        </a>

        <div className="flex items-center gap-8">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-current opacity-80">
            <a href="#about" className="hover:opacity-100 transition-opacity">About us</a>
            <a href="#work" className="hover:opacity-100 transition-opacity">Work</a>
            <a href="#services" className="hover:opacity-100 transition-opacity">Services</a>
          </div>

          <a 
            href="#contact" 
            className="bg-black text-white px-6 py-3 rounded-full font-medium text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-lg mix-blend-normal"
          >
            <span className="w-2 h-2 rounded-full bg-white opacity-80"></span>
            To collaborate
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
