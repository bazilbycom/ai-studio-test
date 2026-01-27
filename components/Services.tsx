import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    num: "01",
    slug: "web-app-development",
    title: "Web & App Development",
    subtitle: "Smart, scalable, and built to perform.",
    desc: "From custom websites to enterprise-grade web apps, our code is fast, secure, and built to scale with your vision.",
    tags: ["Next.js", "Flutter", "React", "Node"]
  },
  {
    num: "02",
    slug: "design-branding",
    title: "Design & Branding",
    subtitle: "Design that speaks, brands that stay.",
    desc: "We help businesses shape visual identities that inspire trust and engagement — because great design isn’t decoration, it’s communication.",
    tags: ["UI/UX", "Logos", "Identity", "Motion"]
  },
  {
    num: "03",
    slug: "media-production",
    title: "Media Production",
    subtitle: "Where creativity meets sound and motion.",
    desc: "From podcasts to promotional videos — we craft stories that move people through stylized visual art and sound design.",
    tags: ["Podcasts", "Video", "VFX", "Audio"]
  },
  {
    num: "04",
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    subtitle: "Visibility that drives growth.",
    desc: "We combine performance marketing with data-driven insights to make sure your brand reaches the right audience — and converts.",
    tags: ["SEM", "Rankings", "Ads", "SMM"]
  },
  {
    num: "05",
    slug: "strategy-consulting",
    title: "Strategy & Consulting",
    subtitle: "Ideas with direction. Strategies with substance.",
    desc: "Our consulting team bridges creativity, technology, and business thinking to guide your brand’s long-term digital evolution.",
    tags: ["Consulting", "Roadmaps", "Audit"]
  },
  {
    num: "06",
    slug: "ai-automation",
    title: "AI & Automation",
    subtitle: "Let technology work while you focus.",
    desc: "We integrate AI and automation tools that simplify workflows, improve accuracy, and scale operations effortlessly.",
    tags: ["LLMs", "Bots", "Pipelines", "Python"]
  },
  {
    num: "07",
    slug: "software-integrations",
    title: "Software Integrations",
    subtitle: "Systems that empower your business.",
    desc: "From startups to enterprise systems, we develop software that adapts to your business goals — not the other way around.",
    tags: ["SaaS", "APIs", "Database", "AWS"]
  },
  {
    num: "08",
    slug: "hosting-support",
    title: "Hosting & Support",
    subtitle: "Always online. Always optimized.",
    desc: "We monitor, maintain, and upgrade your digital assets for security, performance, and 24/7 uptime reliability.",
    tags: ["Cloud", "Security", "DevOps", "SSL"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Core Arsenal</span>
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
              Operational <br/><span className="text-white/20">Service Units</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-sm text-right font-medium hidden md:block"
          >
            Bycom Solutions doesn't just build products; we engineer high-precision digital tools for business acceleration.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((s, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-[2rem] border border-white/5 hover:border-[#10b981]/50 group transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl font-black text-white/10 group-hover:text-[#10b981] transition-colors">{s.num}</span>
                <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center text-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-2 leading-tight">{s.title}</h3>
              <p className="text-[#10b981] text-[10px] font-bold uppercase tracking-widest mb-4">{s.subtitle}</p>
              <p className="text-zinc-500 text-xs leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {s.tags.map(tag => (
                  <span key={tag} className="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/5">{tag}</span>
                ))}
              </div>
              <a 
                href={`#service/${s.slug}`}
                className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-[#10b981] transition-colors"
              >
                View Specification
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;