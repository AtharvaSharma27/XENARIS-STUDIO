import { motion } from "framer-motion";

const Marquee = () => {
  const words = [
    "VIDEO EDITING",
    "•",
    "WEB DEVELOPMENT",
    "•",
    "BRANDING",
    "•",
    "UI/UX DESIGN",
    "•",
    "MOTION GRAPHICS",
    "•",
  ];

  return (
    <div className="w-full py-8 bg-[var(--color-primary-dark)] text-[var(--color-primary)] overflow-hidden flex whitespace-nowrap rounded-3xl my-12">
      <motion.div 
        className="flex gap-8 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
      >
        {/* We render the list twice to create a seamless loop */}
        {[...words, ...words, ...words, ...words].map((word, index) => (
          <span 
            key={index} 
            className={`text-2xl font-sans tracking-wide uppercase ${word === '•' ? 'text-[var(--color-accent)] opacity-50' : 'font-medium'}`}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
