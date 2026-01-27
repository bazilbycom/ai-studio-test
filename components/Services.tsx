
import React from 'react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, tags }) => (
  <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-cyan-500/50 transition-all group cursor-default">
    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all">
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{title}</h3>
    <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded bg-white/5 text-zinc-300 border border-white/5">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Services: React.FC = () => {
  const servicesData: ServiceCardProps[] = [
    {
      title: "App Engineering",
      description: "Crafting fluid, native experiences across iOS and Android with battle-tested architectures.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
      tags: ["Flutter", "React Native", "Swift", "Kotlin"]
    },
    {
      title: "Web Ecosystems",
      description: "Hyper-fast, SEO-optimized web applications designed for conversion and global scale.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
      tags: ["Next.js", "TypeScript", "Node.js", "Tailwind"]
    },
    {
      title: "AI Integration",
      description: "Empower your business with custom LLM agents, computer vision, and predictive analytics.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      tags: ["Gemini API", "OpenAI", "PyTorch", "Automation"]
    },
    {
      title: "Growth & SEO",
      description: "Data-driven marketing strategies to propel your brand to the top of search results.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
      tags: ["Keyword Research", "Link Building", "Analytics", "SMM"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-4 block">Our Core Arsenal</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Specialized <br/><span className="text-white/40">Digital Units</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-sm text-right hidden md:block">
            We don't just build products; we build high-precision digital tools that drive business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((s, idx) => <ServiceCard key={idx} {...s} />)}
        </div>
      </div>
    </section>
  );
};

export default Services;
