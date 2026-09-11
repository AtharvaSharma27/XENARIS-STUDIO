import { Link } from "react-router-dom";
import Marquee from "../components/Marquee";

const Home = () => {
  return (
    <div className="flex flex-col w-full pb-20 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden pt-10">
        <div className="absolute inset-0 flex justify-center items-center opacity-20 pointer-events-none">
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border-[10px] border-[var(--color-primary)] rounded-full absolute -top-20 -left-20 animate-pulse"></div>
          <div className="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[var(--color-accent)] rounded-full absolute bottom-10 right-10 mix-blend-screen blur-[100px]"></div>
          <div className="w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] bg-[var(--color-secondary)] rounded-full absolute top-10 right-20 mix-blend-screen blur-[120px]"></div>
        </div>

        <div className="z-10 text-center max-w-6xl mx-auto flex flex-col items-center">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] text-white mix-blend-difference mb-8 drop-shadow-2xl">
            I EDIT <span className="text-[var(--color-primary)] block">STORIES</span> & BUILD <span className="text-[var(--color-accent)] block transform -skew-x-12">WEBSITES</span>
          </h1>
          
          <Link 
            to="/services" 
            className="group relative inline-flex items-center justify-center px-12 py-6 text-3xl font-black uppercase tracking-widest text-black bg-[var(--color-primary)] border-4 border-black overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[var(--color-accent)] rounded-full group-hover:w-[150%] group-hover:h-[400%]"></span>
            <span className="relative flex items-center gap-4">
              Explore Work
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="mt-10 mb-32">
        <Marquee />
      </section>

      {/* ABOUT ME */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="bg-[var(--color-secondary)] border-8 border-white p-8 md:p-16 lg:p-24 relative transform md:rotate-1">
          <div className="absolute -top-10 -left-10 bg-[var(--color-primary)] text-black text-6xl md:text-8xl font-black p-4 border-4 border-black transform -rotate-12">
            "
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase leading-tight tracking-tight text-white mix-blend-exclusion">
            We help brands turn raw footage into <span className="text-[var(--color-primary)] bg-black px-2">scroll-stopping stories</span> and build <span className="text-[var(--color-accent)] bg-black px-2">high-converting websites</span>.
          </h2>
          <div className="mt-12 flex justify-end">
            <p className="text-2xl md:text-3xl font-bold uppercase tracking-widest bg-white text-black p-4 inline-block border-4 border-black">
              — Xenaris Studio
            </p>
          </div>
        </div>
      </section>

      {/* STATS / HIGHLIGHTS */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex flex-col items-center justify-center p-12 bg-black border-4 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black transition-colors group cursor-default">
            <span className="text-7xl md:text-8xl font-black mb-4 group-hover:scale-110 transition-transform">100+</span>
            <span className="text-2xl font-bold uppercase tracking-widest text-center">Videos Edited</span>
          </div>

          <div className="flex flex-col items-center justify-center p-12 bg-black border-4 border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-colors group cursor-default transform md:-translate-y-8">
            <span className="text-7xl md:text-8xl font-black mb-4 group-hover:scale-110 transition-transform">50+</span>
            <span className="text-2xl font-bold uppercase tracking-widest text-center">Websites Built</span>
          </div>

          <div className="flex flex-col items-center justify-center p-12 bg-black border-4 border-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white transition-colors group cursor-default">
            <span className="text-7xl md:text-8xl font-black mb-4 group-hover:scale-110 transition-transform">24/7</span>
            <span className="text-2xl font-bold uppercase tracking-widest text-center">Creative Energy</span>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
