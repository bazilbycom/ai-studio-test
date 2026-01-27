import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  { num: "01", slug: "web-app-development", title: "Web & App Development", subtitle: "Scalable performance.", desc: "Fast, secure, and built to scale with your enterprise vision.", tags: ["Next.js", "Flutter"] },
  { num: "02", slug: "design-branding", title: "Design & Branding", subtitle: "Visual identities.", desc: "Great design isn’t decoration, it’s high-fidelity communication.", tags: ["UI/UX", "Identity"] },
  { num: "03", slug: "media-production", title: "Media Production", subtitle: "Sound and motion.", desc: "Crafting stories that move people through visual art and sound.", tags: ["VFX", "Audio"] },
  { num: "04", slug: "digital-marketing", title: "Marketing & SEO", subtitle: "Growth visibility.", desc: "Data-driven insights to ensure your brand reaches the right nodes.", tags: ["SEM", "Rankings"] },
  { num: "05", slug: "strategy-consulting", title: "Strategy & Consulting", subtitle: "Idea direction.", desc: "Bridging tech and business thinking to guide your evolution.", tags: ["Audit", "Roadmaps"] },
  { num: "06", slug: "ai-automation", title: "AI & Automation", subtitle: "Simplified workflows.", desc: "Integrating neural tools that simplify workflows and improve accuracy.", tags: ["LLMs", "Python"] },
  { num: "07", slug: "software-integrations", title: "Software Integrations", subtitle: "Empowered systems.", desc: "Software that adapts to your business goals seamlessly.", tags: ["SaaS", "APIs"] },
  { num: "08", slug: "hosting-support", title: "Hosting & Support", subtitle: "Always optimized.", desc: "Maintenance for security, performance, and 24/7 reliability.", tags: ["Cloud", "DevOps"] }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 md:py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Core Arsenal</span>
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-left">
              Operational <br className="md:block" /><span className="text-white/20">Service Units</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-zinc-500 max-w-sm text-left md:text-right font-medium text-sm md:text-base">
            High-precision digital tools for enterprise business acceleration.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((s, idx) => (
            <motion.div key={idx} whileHover={{ y: -8 }} className="glass-panel p-8 rounded-[2rem] border border-white/5 hover:border-[#10b981]/40 transition-all flex flex-col h-full">
              <span className="text-3xl font-black text-white/20 mb-6 block">{s.num}</span>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-2 leading-tight">{s.title}</h3>
              <p className="text-[#10b981] text-[10px] font-bold uppercase tracking-widest mb-4">{s.subtitle}</p>
              <p className="text-zinc-500 text-xs leading-relaxed mb-6 flex-grow">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(tag => <span key={tag} className="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/5">{tag}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;