import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[var(--color-secondary)] px-6 md:px-12 pt-32 pb-8 min-h-screen flex flex-col border-t border-white/10">
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-between">
        
        <div className="flex flex-col">
          {/* Top Row: Scarcity Badge & Clock */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-24">
            <div className="flex items-center gap-3">
              <span className="bg-white text-black px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider">
                3 places
              </span>
              <span className="text-white/60 text-sm font-medium">available for Q4</span>
            </div>
            
            <div className="text-white/60 font-medium font-mono text-sm">
              Local Time: {time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true })}
            </div>
          </div>

          {/* Colossal Contact Link */}
          <div className="mb-24 flex flex-col md:flex-row items-baseline gap-4 md:gap-12">
            <a href="https://wa.me/917710879175" className="text-4xl md:text-6xl lg:text-[6vw] font-black tracking-tighter hover:text-[var(--color-primary)] transition-colors inline-block font-display">
              +91 7710879175
            </a>
            <span className="text-white/60 font-medium tracking-wide">WhatsApp</span>
          </div>

          <div className="mb-12">
            <a href="mailto:hey@xenaris.studio" className="text-2xl md:text-4xl lg:text-[4vw] font-bold tracking-tight hover:text-[var(--color-primary)] transition-colors inline-block font-display">
              hey@xenaris.studio
            </a>
          </div>

          {/* Meta Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-sm text-white/60 font-medium mb-16 gap-6">
            <div className="flex items-center gap-4">
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`} 
                alt="Xenaris Studios" 
                className="h-16 md:h-20 object-contain opacity-90"
                onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
              />
              <p>© {new Date().getFullYear()} Xenaris Studios.</p>
            </div>
            
            <div className="flex items-center gap-8">
              <a href="https://linkedin.com" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://instagram.com/xenaris.studio" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://youtube.com" className="hover:text-white transition-colors">YouTube</a>
            </div>

            <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group border border-white/20 rounded-full px-4 py-2 hover:bg-white/10">
              Back to top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Colossal Wordmark Base */}
          <div className="w-full text-center mt-auto border-t border-white/10 pt-8 overflow-hidden">
            <h1 className="text-[12vw] leading-none font-black tracking-tighter text-white opacity-90 select-none whitespace-nowrap">
              Xenaris Studios
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
