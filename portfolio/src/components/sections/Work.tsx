import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 50); // Center the 100px wide cursor
      cursorY.set(e.clientY - 50);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <section id="work" className="py-32 px-6 md:px-12 transition-colors relative z-10 cursor-default">
      
      {/* Custom Cursor */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 w-[100px] h-[100px] bg-[#111111] text-white rounded-full pointer-events-none z-50 flex items-center justify-center font-medium text-sm tracking-wide shadow-xl"
      >
        View
      </motion.div>

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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-6">
                Selected Work
              </h2>
              <p className="text-lg opacity-70 max-w-sm">
                A collection of recent projects spanning video production, web development, and brand strategy.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scrollable Project List */}
        <div className="lg:w-2/3 flex flex-col gap-24 lg:gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group cursor-none flex flex-col"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative overflow-hidden rounded-[2rem] mb-8 bg-current/5 w-full aspect-[4/3] md:aspect-[16/10]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-current opacity-70 text-sm font-medium w-fit mb-4 transition-colors duration-300 group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111]">
                    {project.category}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-display font-medium leading-tight transition-transform duration-500 ease-out group-hover:-translate-y-1 flex items-center gap-3">
                    {project.title}
                    <ArrowUpRight className="opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out w-8 h-8" />
                  </h3>
                </div>
                
                <p className="opacity-70 max-w-xs md:text-right text-lg">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
