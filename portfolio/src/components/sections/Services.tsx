import { motion } from 'framer-motion';
import { ArrowUpRight, Video, Wand2, Code2, Package } from 'lucide-react';

const servicesList = [
  {
    num: '01',
    title: 'Video Editing',
    description: 'High-retention reels, shorts, and cinematic long-form edits. We turn raw footage into engaging stories that capture attention and build trust.',
    icon: Video,
  },
  {
    num: '02',
    title: 'Motion Graphics',
    description: 'Custom visual effects, title sequences, and animated assets that elevate your brand\'s visual identity beyond standard cuts.',
    icon: Wand2,
  },
  {
    num: '03',
    title: 'Website Development',
    description: 'Lightning-fast, fully custom React and Webflow builds. We design interfaces that are not just beautiful, but engineered for conversions.',
    icon: Code2,
  },
  {
    num: '04',
    title: 'The Full Package',
    description: 'Total brand acceleration. We handle your entire digital presence—from video content pipelines to your flagship website—so you can focus on scaling.',
    icon: Package,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-[95rem] mx-auto bg-[#D8E3F5] text-[#13091B] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Sticky Sidebar */}
        <div className="lg:w-1/3 relative">
          <div className="sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-2 rounded-full bg-current opacity-70" />
                <span className="opacity-70 tracking-wider uppercase text-sm font-medium">
                  Our Services
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-medium tracking-tight mb-6 leading-tight">
                What we do
              </h2>
              <p className="text-lg opacity-70 max-w-sm mb-12">
                We craft digital experiences that capture attention and drive growth. Here is how we can help your brand stand out.
              </p>
              
              <a href="https://wa.me/919833842643" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-white rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-xl">
                Contact us
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scrollable Services Grid */}
        <div className="lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (index % 2) * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                {/* Dynamic Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#D8E3F5] flex items-center justify-center mb-8 transition-transform group-hover:scale-105">
                  <service.icon className="w-7 h-7 text-[#111111]" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-3xl font-display font-medium mb-4 text-[#111111]">
                  {service.title}
                </h3>
                <p className="text-[#111111]/70 text-lg leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
