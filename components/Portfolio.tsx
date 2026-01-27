import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "NeuroX Exchange",
    category: "Fintech // Trading",
    desc: "A high-frequency crypto asset exchange with sub-10ms order execution and institutional grade security.",
    image: "https://images.unsplash.com/photo-1633156189757-4f49390972b0?auto=format&fit=crop&q=80&w=1600", // Fixed image link
    grad: "from-emerald-500/10"
  },
  {
    title: "Aura Intelligence",
    category: "AI // Enterprise",
    desc: "Neural network layer for automated enterprise workflow optimization and real-time decisioning.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
    grad: "from-purple-500/10"
  },
  {
    title: "Quantum Portal",
    category: "Web // SaaS",
    desc: "Multi-tenant infrastructure management platform for global cloud nodes and decentralized clusters.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600",
    grad: "from-cyan-500/10"
  },
  {
    title: "Vivid VFX Engine",
    category: "Media // Tools",
    desc: "Cloud-based visual effects rendering engine for cinematic productions and 4K real-time streaming.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600",
    grad: "from-pink-500/10"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 md:py-40 px-6 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[#10b981] font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block text-glow">Engineering Archive</span>
            <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white">
              Project <br className="md:block" /><span className="text-white/20">Matrix</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-zinc-400 max-w-sm font-medium text-lg leading-relaxed opacity-80">
            Case studies of high-frequency digital assets deployed across global enterprise networks.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`glass-panel rounded-[2.5rem] overflow-hidden relative group bg-gradient-to-br ${project.grad} to-transparent border-white/10`}
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="p-8 md:p-12">
                <span className="text-[#10b981] font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">{project.category}</span>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-[#10b981] transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-base md:text-lg font-medium mb-10 leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">{project.desc}</p>
                <button className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px] group-hover:translate-x-3 transition-transform">
                  Decipher Data
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;