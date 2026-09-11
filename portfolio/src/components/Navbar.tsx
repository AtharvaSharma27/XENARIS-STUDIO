import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b-4 border-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <span className="text-4xl font-bold tracking-tighter text-white group-hover:text-[var(--color-accent)] transition-colors duration-300 uppercase italic">
              Xenaris
            </span>
            <span className="text-4xl font-bold tracking-tighter text-[var(--color-primary)] uppercase ml-2">
              Studio
            </span>
          </Link>
          <div className="flex space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative group px-2 py-1"
                >
                  <span className={`text-xl font-bold tracking-wider uppercase transition-colors duration-300 ${isActive ? 'text-[var(--color-primary)]' : 'text-white group-hover:text-[var(--color-primary)]'}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-1 bg-[var(--color-primary)]"
                    />
                  )}
                  {!isActive && (
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
