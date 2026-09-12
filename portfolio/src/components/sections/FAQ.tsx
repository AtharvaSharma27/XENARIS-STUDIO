import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is your typical turnaround time?",
    answer: "For video editing, standard reels take 24-48 hours. For full website builds, we typically launch within 2 to 4 weeks depending on the complexity and scope of the project."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes. Every project includes two rounds of revisions. We believe in getting it exactly right, but our streamlined process usually means we hit the mark on the first or second try."
  },
  {
    question: "What do you need from me to get started?",
    answer: "For videos: raw footage and brand guidelines. For websites: your branding assets, any existing copy, and a quick onboarding call to align on your business goals."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer both project-based pricing for websites and monthly retainers for ongoing video content pipelines. Book a call and we'll provide a custom quote tailored to your needs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-12 border-t border-current transition-colors opacity-90">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-2 h-2 rounded-full bg-current" />
          <span className="opacity-70 tracking-wider uppercase text-sm font-medium">
            Questions
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-current/20 rounded-xl overflow-hidden bg-current/5 hover:bg-current/10 transition-colors"
            >
              <button 
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
              >
                <span className="text-xl md:text-2xl font-display font-bold pr-8">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 opacity-70">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 opacity-70 text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
