import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-white px-4 md:px-8 pb-4 md:pb-8 flex flex-col">
      <div className="bg-[#0E0611] text-white rounded-[2.5rem] md:rounded-[4rem] px-8 md:px-16 pt-24 pb-8 flex-grow flex flex-col justify-between shadow-2xl relative overflow-hidden max-w-[95rem] mx-auto w-full">
        <div className="max-w-7xl mx-auto w-full flex flex-col flex-grow relative z-10">
          <div className="mb-32">
            <a href="mailto:mayuresh@xenaris.studio" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-5xl lg:text-[5vw] font-medium tracking-tight hover:text-[#D8E3F5] transition-colors inline-block font-display text-white">
              mayuresh@xenaris.studio
            </a>
          </div>

          {/* Meta Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-sm text-white/60 font-medium mb-16 gap-6">
            <div className="flex items-center gap-4">
              <p className="text-white">© {new Date().getFullYear()} Xenaris Studios.</p>
            </div>
            
            <div className="flex items-center flex-wrap gap-6">
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`} 
                alt="Xenaris Studios" 
                className="h-8 md:h-10 object-contain opacity-90 filter invert"
                onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
              />
              <a href="https://wa.me/919833842643" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group border border-white/20 rounded-full px-4 py-2 hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.996 2C6.476 2 2 6.476 2 11.996c0 1.756.46 3.46 1.332 4.966L2 22l5.176-1.31A9.957 9.957 0 0 0 11.996 22c5.518 0 9.996-4.478 9.996-9.996C21.992 6.476 17.514 2 11.996 2z"/>
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-medium">Video Editing</span>
                  <span className="text-[10px] text-white/50 leading-none group-hover:text-white/80 transition-colors">+91 9833842643</span>
                </div>
              </a>
              <a href="https://wa.me/917710879175" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group border border-white/20 rounded-full px-4 py-2 hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.996 2C6.476 2 2 6.476 2 11.996c0 1.756.46 3.46 1.332 4.966L2 22l5.176-1.31A9.957 9.957 0 0 0 11.996 22c5.518 0 9.996-4.478 9.996-9.996C21.992 6.476 17.514 2 11.996 2z"/>
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-medium">Web Dev</span>
                  <span className="text-[10px] text-white/50 leading-none group-hover:text-white/80 transition-colors">+91 7710879175</span>
                </div>
              </a>
              <a href="https://instagram.com/xenaris.studio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                Instagram
              </a>
              <a href="https://youtube.com/@xenarisvideoediting?si=Irc0c0YgUbDDdb7t" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                YouTube
              </a>
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
