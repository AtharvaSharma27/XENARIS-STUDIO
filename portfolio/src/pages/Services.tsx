import { Monitor, Smartphone, PenTool, Layout, Palette, Megaphone } from 'lucide-react';

const servicesList = [
  {
    title: 'Web Development',
    description: 'Lightning-fast, fully responsive websites built with modern frameworks to ensure scale and reliability.',
    icon: <Monitor size={24} className="mb-6 opacity-70" />
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications designed to provide seamless experiences on any device.',
    icon: <Smartphone size={24} className="mb-6 opacity-70" />
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric interfaces that not only look beautiful but are intuitively crafted to drive conversions.',
    icon: <PenTool size={24} className="mb-6 opacity-70" />
  },
  {
    title: 'Brand Identity',
    description: 'Comprehensive branding packages including logos, typography, and visual systems that tell your story.',
    icon: <Palette size={24} className="mb-6 opacity-70" />
  },
  {
    title: 'Product Strategy',
    description: 'We align your business goals with user needs to define a roadmap for successful product launches.',
    icon: <Layout size={24} className="mb-6 opacity-70" />
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven campaigns to boost your online presence, reach the right audience, and grow your brand.',
    icon: <Megaphone size={24} className="mb-6 opacity-70" />
  }
];

const Services = () => {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        
        <div className="mb-16">
          <div className="pill-badge mb-6">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-light)] max-w-2xl leading-tight">
            Comprehensive solutions for modern brands.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="bg-white/50 backdrop-blur-sm p-10 rounded-[32px] border border-[var(--color-text-light)]/10 hover:bg-white transition-colors group cursor-default"
            >
              {service.icon}
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-text-light)] tracking-tight">{service.title}</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
