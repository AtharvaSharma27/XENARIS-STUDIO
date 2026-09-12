import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Podcast Edit',
    category: 'Video Editing',
    description: 'Professional podcast editing with multi-cam switching and audio enhancement.',
    link: 'https://drive.google.com/file/d/1eozpYRHnllpjqgiq4SoaeXJ3MtyYfErV/view',
    embedLink: 'https://drive.google.com/file/d/1eozpYRHnllpjqgiq4SoaeXJ3MtyYfErV/preview',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Wedding Highlights',
    category: 'Video Editing',
    description: 'Cinematic wedding video editing capturing special moments.',
    link: 'https://drive.google.com/file/d/1ryh79k963U-xDbJwDigiEPjT55D940Bq/view',
    embedLink: 'https://drive.google.com/file/d/1ryh79k963U-xDbJwDigiEPjT55D940Bq/preview',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Real Estate Tour',
    category: 'Video Editing',
    description: 'Engaging real estate property tour with smooth transitions and color grading.',
    link: 'https://drive.google.com/file/d/1uzvwp3kdPwdEwRLe7-PtlJfFn7uO9Wt3/view',
    embedLink: 'https://drive.google.com/file/d/1uzvwp3kdPwdEwRLe7-PtlJfFn7uO9Wt3/preview',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Tech Creator Content',
    category: 'Video Editing',
    description: 'Dynamic video editing for a technology content creator.',
    link: 'https://drive.google.com/file/d/1g0R4-Pg2wTnLx32Y3_J8R8VYL1r_Xx49/view',
    embedLink: 'https://drive.google.com/file/d/1g0R4-Pg2wTnLx32Y3_J8R8VYL1r_Xx49/preview',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Long Form Video',
    category: 'Video Editing',
    description: 'Comprehensive long-form video edit with narrative pacing and retention strategies.',
    link: 'https://drive.google.com/file/d/1cih-W1hN4FyZc6OarsyPJpNvlOiBuZXn/view',
    embedLink: 'https://drive.google.com/file/d/1cih-W1hN4FyZc6OarsyPJpNvlOiBuZXn/preview',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Pure Space Cleaners',
    category: 'Web Development',
    description: 'E-commerce and brand website for a cleaning service company.',
    link: 'https://purespacecleaners.in/',
    embedLink: 'https://purespacecleaners.in/',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 transition-colors relative z-10">

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
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group flex flex-col block"
            >
              <div className="relative overflow-hidden rounded-[2rem] mb-8 bg-current/5 w-full aspect-[4/3] md:aspect-[16/10]">
                {project.embedLink ? (
                  <iframe 
                    src={project.embedLink}
                    className={`w-full h-full border-0 absolute top-0 left-0 ${project.category === 'Web Development' ? 'pointer-events-none' : ''}`}
                    allow="autoplay"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                )}
              </div>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-current opacity-70 text-sm font-medium transition-colors duration-300 group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111]">
                      {project.category}
                    </div>
                    {project.category === 'Web Development' && (
                      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] text-white text-sm font-medium hover:bg-black/80 transition-colors">
                        Visit Site <ArrowUpRight size={14} />
                      </div>
                    )}
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
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
