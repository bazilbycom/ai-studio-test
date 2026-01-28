import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "NeuroX Exchange",
    category: "Fintech // Trading",
    desc: "A high-frequency crypto asset exchange with sub-10ms order execution.",
    image: "https://images.unsplash.com/photo-1611974714658-99d31130954b?auto=format&fit=crop&q=80&w=800",
    grad: "from-emerald-500/20"
  },
  {
    title: "Aura Intelligence",
    category: "AI // Enterprise",
    desc: "Neural network layer for automated enterprise workflow optimization.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    grad: "from-purple-500/20"
  },
  {
    title: "Quantum Portal",
    category: "Web // SaaS",
    desc: "Multi-tenant infrastructure management platform for global cloud nodes.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    grad: "from-cyan-500/20"
  },
  {
    title: "Vivid VFX Engine",
    category: "Media // Tools",
    desc: "Cloud-based visual effects rendering engine for cinematic productions.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    grad: "from-pink-500/20"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 md:py-40 px-6 relative bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-4 block text-glow">Engineering Archive</span>
            <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white">
              Project <br className="md:block" /><span className="text-white/20">Matrix</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-zinc-300 max-w-sm font-bold text-lg leading-relaxed">
            Case studies of high-frequency digital assets deployed globally.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`glass-panel rounded-[3.5rem] overflow-hidden border border-white/10 relative group bg-gradient-to-br ${project.grad} to-transparent shadow-2xl`}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>
              <div className="p-10 md:p-14">
                <span className="text-[#10b981] font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">{project.category}</span>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-white group-hover:text-[#10b981] transition-colors">{project.title}</h3>
                <p className="text-zinc-300 text-lg font-bold mb-10 leading-relaxed opacity-80">{project.desc}</p>
                <button className="flex items-center gap-4 text-white font-black uppercase tracking-widest text-xs group-hover:translate-x-4 transition-transform">
                  Decipher Data
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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