import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';

function App() {
  return (
    <div className="bg-[var(--color-secondary)] min-h-screen font-sans selection:bg-[var(--color-primary)] selection:text-black scroll-smooth">
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
    </div>
  );
}

export default App;
