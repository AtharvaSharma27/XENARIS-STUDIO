import { motion } from "framer-motion";
import Marquee from "../components/Marquee";

const Home = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-16 px-6 sm:px-12 max-w-7xl mx-auto w-full flex flex-col justify-center items-center text-center min-h-[85vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="pill-badge border-[var(--color-text-light)] text-[var(--color-text-light)] mb-8">
            Digital Design Studio
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium tracking-tighter leading-[0.95] text-[var(--color-text-light)] mb-10 max-w-5xl">
            Built to grow & <br className="hidden md:block"/> designed to stand out
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-light)]/80 max-w-2xl font-sans leading-relaxed">
            Standing out isn't luck, it's craftsmanship. We edit stories and build websites that last, from concept to launch. After that, you can take it further yourself.
          </p>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="px-6 max-w-7xl mx-auto w-full">
        <Marquee />
      </div>

      {/* ABOUT SECTION (Plum Background Transition) */}
      <section className="w-full bg-[var(--color-primary-dark)] text-[var(--color-primary)] rounded-[3rem] px-6 sm:px-12 py-32 mt-12 mx-auto max-w-[95%]">
        <div className="max-w-5xl mx-auto">
          <span className="pill-badge border-[var(--color-accent)] text-[var(--color-accent)] mb-12">
            About us, since 2024
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight leading-[1.1] mb-12">
            Xenaris Studios is a digital design agency focused on high-quality video editing and web development.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[var(--color-accent)]/20 pt-12">
            <div>
              <h3 className="text-2xl font-sans font-medium mb-4">Direct Communication</h3>
              <p className="text-[var(--color-accent)] text-lg leading-relaxed">
                We work directly with you. No account manager layers. This allows for same-day decision making and a smoother creative process tailored to your specific needs.
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <a href="/services" className="text-xl font-medium flex items-center gap-4 hover:text-[var(--color-text-dark)] transition-colors">
                <span className="text-[var(--color-accent)] text-sm">(01)</span> View our services
              </a>
              <a href="https://wa.me/919833842643" target="_blank" rel="noopener noreferrer" className="text-xl font-medium flex items-center gap-4 hover:text-[var(--color-text-dark)] transition-colors">
                <span className="text-[var(--color-accent)] text-sm">(02)</span> Schedule a meeting
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
