import { Play } from "lucide-react";

const Services = () => {
  const videoProjects = [
    { title: "REEL 01", style: "FAST CUT BRAND PROMO", color: "var(--color-primary)" },
    { title: "REEL 02", style: "CINEMATIC VLOG", color: "var(--color-accent)" },
    { title: "REEL 03", style: "MUSIC VIDEO EDIT", color: "var(--color-secondary)" },
    { title: "REEL 04", style: "PODCAST SNIPPET", color: "white" },
    { title: "REEL 05", style: "MOTION GRAPHICS", color: "var(--color-primary)" },
  ];

  const webProjects = [
    { title: "E-COMMERCE RE-DESIGN", type: "Web App", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" },
    { title: "CREATIVE AGENCY", type: "Portfolio", image: "https://images.unsplash.com/photo-1542744094-24638ea0b56c?auto=format&fit=crop&q=80&w=800" },
    { title: "FITNESS PLATFORM", type: "Landing Page", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      
      {/* HEADER */}
      <section className="pt-20 pb-10 px-4 max-w-7xl mx-auto w-full">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter">
          Our <span className="text-[var(--color-accent)]">Arsenal</span>
        </h1>
      </section>

      {/* VIDEO EDITING SECTION */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight">Video Editing</h2>
            <div className="flex-1 h-2 bg-[var(--color-primary)]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative">
            {videoProjects.map((project, idx) => (
              <div 
                key={idx} 
                className="group relative aspect-[9/16] bg-zinc-900 border-8 border-white overflow-hidden transition-transform duration-500 hover:scale-105 hover:z-10 cursor-pointer"
                style={{
                  transform: `rotate(${idx % 2 === 0 ? 2 : -2}deg)`,
                  borderColor: project.color
                }}
              >
                {/* Placeholder Video Area */}
                <div className="absolute inset-0 bg-zinc-800 flex flex-col items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <Play size={80} className="text-white mb-4 group-hover:scale-125 transition-transform drop-shadow-2xl" fill="currentColor" />
                  <p className="text-xl font-bold uppercase tracking-widest text-white/50">Placeholder</p>
                </div>
                
                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-4xl font-black uppercase text-white leading-none mb-2">{project.title}</h3>
                  <p className="text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase bg-black/50 inline-block px-2 py-1">{project.style}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEBSITE DEVELOPMENT SECTION */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-32 bg-[var(--color-secondary)] border-y-8 border-white relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, var(--color-primary) 0%, transparent 50%)' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white leading-none">
              Web<br />Development
            </h2>
            <p className="text-xl font-bold max-w-sm uppercase bg-[var(--color-primary)] text-black p-4 border-4 border-black transform md:rotate-2">
              High-converting, lightning fast, and built to turn visitors into clients.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {webProjects.map((project, idx) => (
              <div 
                key={idx}
                className={`group flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
              >
                <div className="w-full md:w-3/5 aspect-video border-8 border-black overflow-hidden relative">
                  <div className="absolute inset-0 bg-[var(--color-primary)] mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>
                
                <div className="w-full md:w-2/5 flex flex-col items-start">
                  <span className="text-2xl font-black text-black bg-white px-3 py-1 border-2 border-black transform -rotate-2 mb-4">
                    {project.type}
                  </span>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                    {project.title}
                  </h3>
                  <button className="text-xl font-bold uppercase tracking-widest text-[var(--color-primary)] border-b-4 border-[var(--color-primary)] pb-1 hover:text-white hover:border-white transition-colors">
                    View Project ↗
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full px-4 py-32 flex justify-center items-center">
        <a 
          href="https://wa.me/919833842643" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative px-8 py-8 md:px-16 md:py-12 bg-[var(--color-accent)] border-8 border-white overflow-hidden transform hover:-translate-y-2 transition-transform"
        >
          <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
          <h2 className="relative z-10 text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-white group-hover:text-black transition-colors duration-500">
            LET'S BUILD<br />YOUR SITE
          </h2>
        </a>
      </section>

    </div>
  );
};

export default Services;
