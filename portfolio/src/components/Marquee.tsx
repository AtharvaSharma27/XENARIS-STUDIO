import { motion } from "framer-motion";

const Marquee = () => {
  const items = [
    "VIDEO EDITING",
    "WEB DEV",
    "MOTION GRAPHICS",
    "BRANDING",
    "CONTENT STRATEGY",
    "UI/UX DESIGN",
    "CINEMATIC STORYTELLING",
    "SEO SETUP",
  ];

  // Repeat items to ensure seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-[var(--color-primary)] py-4 md:py-6 border-y-8 border-black transform -rotate-2 scale-110 relative z-10">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex space-x-12 px-6"
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-12">
              <span className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter">
                {item}
              </span>
              <span className="text-4xl md:text-6xl text-white">★</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
