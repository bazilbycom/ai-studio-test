import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  { num: "01", slug: "web-app-development", title: "Web & App Development", subtitle: "Scalable performance.", desc: "Fast, secure, and built to scale with your enterprise vision.", tags: ["Next.js", "Flutter"], grad: "from-emerald-500/10" },
  { num: "02", slug: "design-branding", title: "Design & Branding", subtitle: "Visual identities.", desc: "Great design isn’t decoration, it’s high-fidelity communication.", tags: ["UI/UX", "Identity"], grad: "from-purple-500/10" },
  { num: "03", slug: "media-production", title: "Media Production", subtitle: "Sound and motion.", desc: "Crafting stories that move people through visual art and sound.", tags: ["VFX", "Audio"], grad: "from-blue-500/10" },
  { num: "04", slug: "digital-marketing", title: "Marketing & SEO", subtitle: "Growth visibility.", desc: "Data-driven insights to ensure your brand reaches the right nodes.", tags: ["SEM", "Rankings"], grad: "from-orange-500/10" },
  { num: "05", slug: "strategy-consulting", title: "Strategy & Consulting", subtitle: "Idea direction.", desc: "Bridging tech and business thinking to guide your evolution.", tags: ["Audit", "Roadmaps"], grad: "from-cyan-500/10" },
  { num: "06", slug: "ai-automation", title: "AI & Automation", subtitle: "Simplified workflows.", desc: "Integrating neural tools that simplify workflows and improve accuracy.", tags: ["LLMs", "Python"], grad: "from-violet-500/10" },
  { num: "07", slug: "software-integrations", title: "Software Integrations", subtitle: "Empowered systems.", desc: "Software that adapts to your business goals seamlessly.", tags: ["SaaS", "APIs"], grad: "from-indigo-500/10" },
  { num: "08", slug: "hosting-support", title: "Hosting & Support", subtitle: "Always optimized.", desc: "Maintenance for security, performance, and 24/7 reliability.", tags: ["Cloud", "DevOps"], grad: "from-pink-500/10" }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 md:py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6 md:gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[11px] mb-4 block text-glow">Core Arsenal</span>
            <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-left text-white">
              Operational <br className="md:block" /><span className="text-white/20">Service Units</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-zinc-300 max-w-sm text-left md:text-right font-bold text-base md:text-lg leading-relaxed">
            High-precision digital tools for enterprise business acceleration.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-32">
          {servicesData.map((s, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -10, scale: 1.02 }} 
              onClick={() => window.location.hash = `service/${s.slug}`}
              className={`glass-panel p-10 rounded-[3rem] border border-white/5 hover:border-[#10b981]/40 transition-all flex flex-col h-full bg-gradient-to-br ${s.grad} to-transparent cursor-pointer group shadow-xl`}
            >
              <span className="text-5xl font-black text-white/40 mb-8 block group-hover:text-[#10b981] transition-colors">{s.num}</span>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-3 leading-tight text-white">{s.title}</h3>
              <p className="text-[#10b981] text-[10px] font-black uppercase tracking-[0.3em] mb-6 drop-shadow-md">{s.subtitle}</p>
              <p className="text-zinc-200 text-sm leading-relaxed mb-8 flex-grow font-semibold">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {s.tags.map(tag => <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-white group-hover:bg-[#10b981] group-hover:text-black transition-all">{tag}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;