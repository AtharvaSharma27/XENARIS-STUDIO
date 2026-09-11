import { Film, Clapperboard, MonitorPlay, Palette, Layout, Smartphone } from 'lucide-react';

const servicesList = [
  {
    title: 'Professional Video Editing',
    description: 'Cinematic video editing and brand storytelling that helps you capture attention, build trust, and grow your audience.',
    icon: <Film size={24} className="mb-6 opacity-70" />
  },
  {
    title: 'Reels, Shorts & Podcasts',
    description: 'Short-form content designed to stop the scroll and turn viewers into loyal followers.',
    icon: <Clapperboard size={24} className="mb-6 opacity-70" />
  },
  {
    title: 'Motion Graphics',
    description: 'Creative content and visual effects that bring your brand to life with dynamic motion.',
    icon: <MonitorPlay size={24} className="mb-6 opacity-70" />
  },
  {
    title: 'Responsive Web Development',
    description: 'High-converting websites for businesses and creators, built fast and mobile-friendly.',
    icon: <Layout size={24} className="mb-6 opacity-70" />
  },
  {
    title: 'UI/UX Design & Wireframing',
    description: 'Custom website design tailored to provide seamless experiences and bring in enquiries.',
    icon: <Palette size={24} className="mb-6 opacity-70" />
  },
  {
    title: 'Product / Catalog Showcase',
    description: 'Lead-generation focused builds that help businesses turn visitors into customers.',
    icon: <Smartphone size={24} className="mb-6 opacity-70" />
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
