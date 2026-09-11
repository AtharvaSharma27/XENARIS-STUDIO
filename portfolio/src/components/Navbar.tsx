import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--color-primary)]/80 backdrop-blur-md border-b border-[var(--color-accent)]/20 transition-all duration-300 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
            alt="Xenaris Studios" 
            className="h-12 md:h-16 lg:h-20 object-contain invert mix-blend-multiply opacity-90"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }}
          />
          <span className="hidden text-xl md:text-2xl font-black tracking-tight text-[var(--color-text-light)]">
            <span className="font-display italic">Xenaris</span>
            <span className="font-sans font-medium text-[var(--color-accent)]">Studios</span>
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-[var(--color-accent)] transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-sm font-medium hover:text-[var(--color-accent)] transition-colors">
            Services
          </Link>
        </div>

        {/* CTA */}
        <a 
          href="https://wa.me/919833842643" 
          target="_blank" 
          rel="noopener noreferrer"
          className="pill-badge bg-[var(--color-text-light)] text-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] hover:scale-105 transition-all duration-300"
        >
          Let's talk
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
