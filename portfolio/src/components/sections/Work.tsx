import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Cinematic Reel - Brand X',
    category: 'Video Editing',
    description: 'High-energy promotional reel designed for Instagram and TikTok.',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A headless Shopify build for a premium streetwear brand.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Podcast Launch Series',
    category: 'Video Editing',
    description: 'Multi-cam setup, color grading, and motion graphics for a top 100 podcast.',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Agency Portfolio',
    category: 'Web Development',
    description: 'Minimalist, interaction-heavy portfolio site for a creative agency.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-[#0a040d]">
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
              Selected Work
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-video bg-white/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                
                {/* Category Badge overlay */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium tracking-wide uppercase">
                    {project.category}
                  </span>
                </div>
                
                {/* Hover reveal icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight size={24} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                {project.title}
              </h3>
              <p className="text-[var(--color-text-muted)]">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
