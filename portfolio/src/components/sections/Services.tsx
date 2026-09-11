import { motion } from 'framer-motion';

const servicesList = [
  {
    num: '01',
    title: 'Video Editing',
    description: 'High-retention reels, shorts, and cinematic long-form edits. We turn raw footage into engaging stories that capture attention and build trust.',
  },
  {
    num: '02',
    title: 'Motion Graphics',
    description: 'Custom visual effects, title sequences, and animated assets that elevate your brand\'s visual identity beyond standard cuts.',
  },
  {
    num: '03',
    title: 'Website Development',
    description: 'Lightning-fast, fully custom React and Webflow builds. We design interfaces that are not just beautiful, but engineered for conversions.',
  },
  {
    num: '04',
    title: 'The Full Package',
    description: 'Total brand acceleration. We handle your entire digital presence—from video content pipelines to your flagship website—so you can focus on scaling.',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
            <span className="text-[var(--color-text-muted)] tracking-wider uppercase text-sm font-medium">
              Our Services
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-12 md:pl-16 border-l border-white/10"
            >
              {/* Number decoration */}
              <div className="absolute top-0 left-0 -translate-x-1/2 bg-[var(--color-secondary)] py-2">
                <span className="text-sm font-bold font-display text-[var(--color-primary)] opacity-80">
                  {service.num}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
                {service.title}
              </h3>
              <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
