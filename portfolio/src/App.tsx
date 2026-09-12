import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';

import { motion, useScroll, useTransform } from 'framer-motion';

function App() {
  const { scrollY } = useScroll();
  // 0 - 400: Light Blue (Hero)
  // 600 - 1400: Dark Plum (About)
  // 1600+: Off-White / Light (Work & beyond)
  const backgroundColor = useTransform(
    scrollY, 
    [0, 400, 600, 1400, 1600], 
    ['#D8E3F5', '#D8E3F5', '#0E0611', '#0E0611', '#ffffff']
  );
  
  // Corresponding text color transitions
  const color = useTransform(
    scrollY, 
    [0, 400, 600, 1400, 1600], 
    ['#13091B', '#13091B', '#FFFFFF', '#FFFFFF', '#13091B']
  );

  return (
    <motion.div 
      style={{ backgroundColor, color }}
      className="min-h-screen font-sans selection:bg-black selection:text-white scroll-smooth transition-colors duration-0"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Services />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
