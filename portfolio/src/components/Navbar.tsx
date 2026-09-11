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
        isScrolled ? 'py-4 bg-[var(--color-secondary)]/80 backdrop-blur-lg border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
            alt="Xenaris" 
            className="h-8 object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
          />
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">Xenaris Studio</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-white/70">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <a 
          href="#contact" 
          className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[var(--color-primary)] transition-colors"
        >
          Let's Talk
        </a>
      </div>
    </motion.nav>
  );
}
