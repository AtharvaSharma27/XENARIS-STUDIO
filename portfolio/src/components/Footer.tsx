import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--color-primary-dark)] text-[var(--color-primary)] py-20 px-6 sm:px-12 rounded-t-[3rem] mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12 relative z-10">
        
        {/* Large Text */}
        <div className="flex flex-col items-center">
          <span className="pill-badge border-[var(--color-accent)] text-[var(--color-accent)] mb-8">
            Ready to collaborate?
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tighter leading-[1.1] max-w-4xl">
            Let's build something <br className="hidden md:block"/> extraordinary.
          </h2>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          <a 
            href="https://wa.me/919833842643" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-primary)] text-[var(--color-primary-dark)] rounded-full font-medium hover:scale-105 transition-transform duration-300"
          >
            WhatsApp <ArrowUpRight size={20} />
          </a>
          <a 
            href="https://www.instagram.com/xenaris.studio?stkn=MWo3bzQwZnFjaDNoaw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 border border-[var(--color-accent)] text-[var(--color-primary)] rounded-full font-medium hover:bg-white/10 transition-colors duration-300"
          >
            Instagram <ArrowUpRight size={20} />
          </a>
        </div>
      </div>

      {/* Watermark / Logo at bottom */}
      <div className="max-w-7xl mx-auto mt-32 flex flex-col md:flex-row items-center justify-between border-t border-[var(--color-accent)]/20 pt-8 text-[var(--color-accent)] text-sm">
        <p>© {new Date().getFullYear()} Xenaris Studios. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Rotterdam Inspired, Built for the World.</p>
      </div>
    </footer>
  );
};

export default Footer;
