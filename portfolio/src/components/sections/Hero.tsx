import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-1/4 -left-1/4 w-[150%] h-[150%] fill-white/60">
          <path d="M0,50 C30,20 70,80 100,50 L100,100 L0,100 Z" />
        </svg>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute -top-1/4 right-0 w-[100%] h-[150%] fill-white/40">
          <path d="M50,0 C80,30 20,70 50,100 L100,100 L100,0 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow Label */}
          <div className="mb-8">
            <div className="px-4 py-1.5 rounded-full border border-current opacity-70 text-xs font-semibold tracking-wide">
              Video Editing & Web Development Studio
            </div>
          </div>

          {/* Huge Headline */}
          <h1 className="text-center mb-8 font-display leading-[0.95] tracking-tighter" style={{ fontSize: 'clamp(3.5rem, 9vw, 11rem)' }}>
            Built to get watched.<br />
            Designed to convert.
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed font-medium opacity-70">
            Great content isn't luck, it's craft. We edit videos and build websites that capture attention, from first cut to final launch. After that, it's all yours to run.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
