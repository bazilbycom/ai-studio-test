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
    <section id="services" className="py-24 px-6 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-[#10b981] font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">Service Arsenal</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white">
              Core <span className="text-white/20">Units</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-sm font-medium text-lg leading-relaxed">
            High-precision digital tools for enterprise business acceleration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-12">
          {servicesData.map((s, idx) => (
            <div 
              key={idx} 
              onClick={() => window.location.hash = `service/${s.slug}`}
              className="p-8 rounded-2xl border border-white/5 bg-zinc-900/40 hover:border-[#10b981]/40 transition-all flex flex-col h-full cursor-pointer group"
            >
              <span className="text-4xl font-black text-white/20 mb-6 block group-hover:text-[#10b981] transition-colors">{s.num}</span>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-2 text-white">{s.title}</h3>
              <p className="text-[#10b981] text-[10px] font-black uppercase tracking-[0.2em] mb-4">{s.subtitle}</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow font-medium">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {s.tags.map(tag => <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/5 text-zinc-400">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;