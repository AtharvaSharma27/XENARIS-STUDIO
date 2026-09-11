import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 relative">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow Label & Scarcity Badge */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <span className="text-[var(--color-text-muted)] tracking-wider uppercase text-sm font-medium">
              Video Editing & Web Development Studio
            </span>
            <div className="bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <span className="text-white text-sm font-semibold tracking-wide">
                3 slots available this month
              </span>
            </div>
          </div>

          {/* Huge Headline */}
          <h1 className="text-[var(--color-text-light)] text-center mb-8 font-display leading-[0.9] tracking-tighter" style={{ fontSize: 'clamp(4rem, 10vw, 12rem)' }}>
            Built to Get Watched.<br />
            Designed to Convert.
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-2xl text-[var(--color-text-muted)] max-w-3xl leading-relaxed mb-16">
            We turn raw footage into scroll-stopping stories and build high-converting websites that work as hard as you do.
          </p>

          {/* Numbered CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-[var(--color-text-muted)] font-medium">
            <a href="#work" className="hover:text-white transition-colors flex items-center gap-2 group">
              <span className="text-sm opacity-50">(01)</span>
              <span className="group-hover:underline underline-offset-4 decoration-white/30">See Our Work</span>
            </a>
            <a href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
              <span className="text-sm opacity-50">(02)</span>
              <span className="group-hover:underline underline-offset-4 decoration-white/30">Our Services</span>
            </a>
            <a href="#contact" className="hover:text-white transition-colors flex items-center gap-2 group">
              <span className="text-sm opacity-50">(03)</span>
              <span className="group-hover:underline underline-offset-4 decoration-white/30">Book a Call</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
