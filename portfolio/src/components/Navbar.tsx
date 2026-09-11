import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-[var(--color-primary)]/90 backdrop-blur-md py-6 px-4 md:px-8">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        
        {/* Left: Logo Mark */}
        <Link to="/" className="flex items-center">
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
            alt="Xenaris Studios" 
            className="h-10 md:h-12 lg:h-14 object-contain invert mix-blend-multiply opacity-90"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }}
          />
          <span className="hidden text-xl font-bold tracking-tight text-[var(--color-text-light)]">
            Xenaris
          </span>
        </Link>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-8 text-[var(--color-text-light)] font-medium">
          <Link to="/" className="hover:opacity-70 transition-opacity">About us</Link>
          <Link to="/services" className="hover:opacity-70 transition-opacity">Work</Link>
          <Link to="/services" className="hover:opacity-70 transition-opacity">Services</Link>
        </div>

        {/* Right: CTA Pill */}
        <div className="flex items-center gap-4">
          <a href="mailto:hey@xenaris.studio" className="bg-[var(--color-primary-dark)] text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            To collaborate
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
