import { Play } from "lucide-react";

const Services = () => {
  const videoProjects = [
    { title: "Brand Promo", style: "Commercial", color: "#DCE6F5" },
    { title: "Cinematic Vlog", style: "Lifestyle", color: "#DCE6F5" },
    { title: "Music Video", style: "Creative", color: "#DCE6F5" },
    { title: "Podcast Snippet", style: "Social", color: "#DCE6F5" },
  ];

  const webProjects = [
    { title: "E-Commerce Re-design", type: "Web App", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" },
    { title: "Creative Agency", type: "Portfolio", image: "https://images.unsplash.com/photo-1542744094-24638ea0b56c?auto=format&fit=crop&q=80&w=800" },
    { title: "Fitness Platform", type: "Landing Page", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto">
      
      {/* HEADER */}
      <section className="mb-24">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tighter text-[var(--color-text-light)]">
          Selected work
        </h1>
      </section>

      {/* WEB DEVELOPMENT SECTION */}
      <section className="w-full mb-32">
        <div className="flex items-center gap-4 mb-12">
          <span className="pill-badge border-[var(--color-text-light)] text-[var(--color-text-light)]">
            Web Development
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {webProjects.map((project, idx) => (
            <div 
              key={idx}
              className={`group flex flex-col gap-4 cursor-pointer ${idx === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
            >
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden relative bg-[var(--color-primary-dark)]/10">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="flex flex-col items-start px-2">
                <span className="text-[var(--color-accent)] text-sm font-medium mb-1">
                  • {project.type}
                </span>
                <h3 className="text-2xl font-display font-medium text-[var(--color-text-light)] group-hover:opacity-70 transition-opacity">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO EDITING SECTION */}
      <section className="w-full">
        <div className="flex items-center gap-4 mb-12">
          <span className="pill-badge border-[var(--color-text-light)] text-[var(--color-text-light)]">
            Video Editing
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoProjects.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer bg-[var(--color-primary-dark)]"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50 group-hover:text-white transition-colors duration-500">
                <Play size={48} className="mb-4 transform group-hover:scale-110 transition-transform duration-500" fill="currentColor" />
                <p className="text-sm font-medium tracking-widest uppercase">Preview</p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-display text-white mb-1">{project.title}</h3>
                <p className="text-xs font-medium text-white/70">{project.style}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Services;
