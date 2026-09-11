import { AtSign, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--color-secondary)] text-white py-16 border-t-8 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          <div className="flex flex-col max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
              Let's Create<br />
              <span className="text-[var(--color-primary)]">Impact.</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold uppercase max-w-lg mb-8 text-black bg-[var(--color-primary)] p-4 inline-block transform -skew-x-6 border-4 border-black">
              Start your next big project today.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-black uppercase tracking-wider text-[var(--color-accent)]">Hit Us Up</span>
              <a href="https://wa.me/919833842643" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold hover:text-[var(--color-primary)] transition-colors flex items-center gap-3">
                <MessageCircle size={32} /> +91 9833842643
              </a>
              <a href="https://wa.me/917710879175" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold hover:text-[var(--color-primary)] transition-colors flex items-center gap-3">
                <MessageCircle size={32} /> +91 7710879175
              </a>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <span className="text-2xl font-black uppercase tracking-wider text-[var(--color-accent)]">Socials</span>
              <a href="https://www.instagram.com/xenaris.studio?stkn=MWo3bzQwZnFjaDNoaw==" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold hover:text-[var(--color-primary)] transition-colors flex items-center gap-3">
                <AtSign size={32} /> @xenaris.studio
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-4 border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-lg font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Xenaris Studio.
          </p>
          <p className="text-lg font-bold uppercase tracking-widest text-[var(--color-primary)]">
            Built for impact.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
