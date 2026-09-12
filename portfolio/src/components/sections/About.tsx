import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 opacity-90 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 rounded-full bg-current" />
            <span className="opacity-70 tracking-wider uppercase text-sm font-medium">
              About us, since 2021
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-12 max-w-4xl">
            We are the invisible force behind creators and brands who want to dominate their niche.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg opacity-70 max-w-4xl">
            <p>
              We don't believe in unnecessary jargon or bloated agency processes. We are a lean, specialized team working directly with founders and creators to produce high-impact video content and build digital experiences that convert.
            </p>
            <p>
              When you work with Xenaris Studio, you work directly with the experts. No middlemen, no miscommunication. Just a relentless focus on elevating your brand's presence through cinematic storytelling and robust web development.
            </p>
          </div>
        </motion.div>

        {/* Client Logo Strip Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="border-t border-current pt-12"
        >
          <p className="text-sm text-center opacity-50 uppercase tracking-widest mb-8">Trusted by</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale mix-blend-luminosity">
            {/* Replace with actual SVGs or Images */}
            <div className="text-xl font-bold tracking-tighter">BRAND ONE</div>
            <div className="text-xl font-bold tracking-tighter">COMPANY TWO</div>
            <div className="text-xl font-bold tracking-tighter">STARTUP X</div>
            <div className="text-xl font-bold tracking-tighter">CREATOR CO.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
