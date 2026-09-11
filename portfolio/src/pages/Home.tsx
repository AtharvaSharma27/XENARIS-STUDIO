import { ArrowDownRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
        
        {/* Top Centered Badge */}
        <div className="flex justify-center mb-12">
          <div className="pill-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-light)]"></span>
            Digital Design Studio
          </div>
        </div>

        {/* Massive Headline */}
        <div className="text-center flex flex-col items-center justify-center max-w-5xl mx-auto mb-16">
          <h1 className="text-[var(--color-text-light)] text-center mb-8">
            Built to grow &<br />
            designed to stand<br />
            out
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-[600px] leading-relaxed">
            We are a creative agency specializing in stunning, high-performance web experiences that elevate your brand and drive results.
          </p>
        </div>

        {/* Bottom Bar elements */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-24 gap-6">
          <div className="flex items-center gap-3 text-sm font-medium text-[var(--color-text-light)]">
            <span className="px-3 py-1 border border-[var(--color-text-light)] rounded-md font-bold bg-[var(--color-primary-dark)] text-white">3 places</span>
            <span>available for Q4</span>
          </div>
          
          <div className="pill-badge cursor-pointer hover:bg-white/50 transition-colors">
            ScrOll dOwn <ArrowDownRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
