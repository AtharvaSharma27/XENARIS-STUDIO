import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="px-4 md:px-8 pb-4">
      <footer className="bg-[var(--color-primary-dark)] text-white rounded-[32px] pt-16 pb-8 px-8 md:px-16 flex flex-col justify-between overflow-hidden relative">
        
        <div className="max-w-screen-2xl mx-auto w-full flex flex-col relative z-10">
          
          {/* Top availability badge */}
          <div className="flex items-center gap-3 text-sm font-medium mb-12">
            <span className="px-3 py-1 border border-white/20 rounded-md font-bold bg-white text-[var(--color-primary-dark)]">3 places</span>
            <span className="text-white/70">available for Q4</span>
          </div>

          {/* Colossal Contact Link */}
          <div className="mb-24">
            <a href="mailto:hey@xenaris.studio" className="text-4xl md:text-6xl lg:text-[7vw] font-black tracking-tighter hover:text-[var(--color-primary)] transition-colors inline-block font-display">
              hey@xenaris.studio
            </a>
          </div>

          {/* Meta Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-sm text-white/60 font-medium mb-16 gap-6">
            <div className="flex items-center gap-2">
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`} 
                alt="Xenaris Studios" 
                className="h-8 object-contain"
                onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
              />
              <p>© {new Date().getFullYear()} Xenaris Studios Rotterdam.</p>
            </div>
            
            <div className="flex items-center gap-8">
              <a href="https://linkedin.com" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://instagram.com/xenaris.studio" className="hover:text-white transition-colors">Instagram</a>
            </div>

            <button onClick={scrollToTop} className="pill-badge-dark hover:bg-white/10 transition-colors cursor-pointer">
              Back to top <ArrowUp size={16} />
            </button>
          </div>

          {/* Colossal Wordmark Base */}
          <div className="w-full text-center mt-auto border-t border-white/10 pt-8">
            <h1 className="text-[15vw] leading-none font-black tracking-tighter text-white opacity-90 select-none">
              Xenaris Studios
            </h1>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
