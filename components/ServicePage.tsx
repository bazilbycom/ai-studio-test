import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface ServicePageProps {
  slug: string;
  onOpenModal: () => void;
}

const ServicePage: React.FC<ServicePageProps> = ({ slug, onOpenModal }) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const serviceDetails: any = {
      'web-app-development': {
        title: "Web & App Development",
        subtitle: "High-Performance Digital Architecture",
        summary: "Engineering sub-millisecond latency web ecosystems and ultra-responsive native applications using hyper-modern stacks.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600",
        tags: ["Next.js", "Flutter", "Edge Functions", "GraphQL"],
        grad: "from-emerald-500/30",
        body: `## The Bycom Forge 
        
Our development methodology is rooted in **Peak Performance Engineering**. We don't just build websites; we construct high-frequency digital assets designed for scale.

### Technical Arsenal:
- **Core Stacks:** We utilize Next.js for its advanced SSR/ISR capabilities.
- **Native Experience:** Flutter-based deployments for pixel-perfect cross-platform consistency.
- **Edge Deployment:** Global CDN distribution ensures your app is physically close to your users.
- **Security:** AES-256 equivalent standard protocols in all data pipelines.`
      },
      'design-branding': {
        title: "Design & Branding",
        subtitle: "Visual Identity Engineering",
        summary: "Crafting digital identities that command attention through strategic aesthetics and high-fidelity UI systems.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1600",
        tags: ["UI/UX", "Identity", "Motion", "Design Systems"],
        grad: "from-purple-500/30",
        body: `## Aesthetics of High-Performance
        
Design is not just how it looks; it's how it functions. We engineer interfaces that bridge the gap between human intuition and machine efficiency.

### Visual Protocol:
- **Design Systems:** Scalable component libraries for cross-platform brand parity.
- **Emotional UX:** Psychological pattern mapping for increased retention.
- **High-Fidelity Assets:** Custom 3D, vector, and motion assets for 2026 standards.`
      },
      'media-production': {
        title: "Media Production",
        subtitle: "Sound and Motion Architecture",
        summary: "VFX, cinematic motion graphics, and high-fidelity audio engineering for the digital avant-garde.",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1600",
        tags: ["VFX", "Audio Engineering", "Post-Production"],
        grad: "from-blue-500/30",
        body: `## Immersive Narrative Deployment
        
We build visual experiences that cut through the noise of the digital landscape. From high-end cinematic trailers to atmospheric soundscapes.

### Media Arsenal:
- **VFX & Compositing:** Advanced motion tracking and 3D integration.
- **Spatial Audio:** Engineered sound for immersive web experiences.
- **Narrative Strategy:** Direction and scripting for high-conversion video assets.`
      },
      'digital-marketing': {
        title: "Marketing & SEO",
        subtitle: "Node Visibility Strategy",
        summary: "Aggressive data-driven marketing and technical SEO to ensure your brand nodes dominate global search clusters.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
        tags: ["SEM", "Performance Marketing", "Technical SEO"],
        grad: "from-orange-500/30",
        body: `## Market Saturation Engineering
        
Dominate your vertical through hyper-targeted performance marketing and algorithmic search optimization.

### Strategy Specs:
- **Core SEO:** Deep-level technical optimization for Core Web Vitals.
- **PPC Optimization:** High-yield ad spend strategies with sub-pixel tracking.
- **Analytics:** Real-time data visualization of user flow and conversion nodes.`
      },
      'strategy-consulting': {
        title: "Strategy & Consulting",
        subtitle: "Architectural Roadmapping",
        summary: "Bridging business objectives with engineering feasibility through high-level technical audits and digital strategy.",
        image: "https://images.unsplash.com/photo-1454165833767-027ff3399bce?auto=format&fit=crop&q=80&w=1600",
        tags: ["Technical Audit", "MVP Strategy", "Business Logic"],
        grad: "from-cyan-500/30",
        body: `## Digital Evolution Blueprint
        
Transform complex business requirements into scalable technical roadmaps. Our consultants are former CTOs and elite system architects.

### Consulting Units:
- **Tech Stack Audit:** Evaluating existing systems for bottlenecks and security flaws.
- **Scaling Roadmap:** Strategic planning for infrastructure growth.
- **Market Intel:** Competitive analysis of digital assets and operational tech.`
      },
      'ai-automation': {
        title: "AI & Automation",
        subtitle: "Neural Workflow Integration",
        summary: "Deploying proprietary LLMs and neural agents to automate enterprise logic and maximize operational throughput.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
        tags: ["LLMs", "RAG", "Agentic Workflows"],
        grad: "from-violet-500/30",
        body: `## The Intelligence Layer
        
Integrate advanced AI agents into your core business logic. We build RAG-based knowledge hubs and custom fine-tuned models.

### AI Capabilities:
- **LLM Tuning:** Fine-tuning base models for specific industry jargon.
- **Neural Agents:** Task-specific agents for automated customer success and data analysis.
- **Automation Forge:** Python-driven workflows connecting disparate SaaS platforms.`
      },
      'software-integrations': {
        title: "Software Integrations",
        subtitle: "Unified Ecosystem Forge",
        summary: "Seamlessly connecting fragmented SaaS ecosystems into high-speed unified data pipelines.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
        tags: ["API Design", "Middleware", "Data Pipelines"],
        grad: "from-indigo-500/30",
        body: `## System Synergy Engineering
        
Stop the fragmentation. We build the middleware that makes your software stack speak a unified language.

### Integration Protocol:
- **API Architecture:** REST and GraphQL custom endpoints for internal apps.
- **Webhooks:** Sub-ms event propagation across your digital estate.
- **Data Warehousing:** Centralized repositories for real-time reporting.`
      },
      'hosting-support': {
        title: "Hosting & Support",
        subtitle: "Zero-Downtime Infrastructure",
        summary: "Managing global server clusters with sub-ms response times and 24/7 technical surveillance.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1600",
        tags: ["Cloud Ops", "SRE", "Security Audit"],
        grad: "from-pink-500/30",
        body: `## Operational Resilience
        
Your infrastructure is your foundation. We provide 24/7 Site Reliability Engineering and extreme-performance cloud hosting.

### Support Units:
- **Cloud Management:** AWS, GCP, and Azure optimized for cost and speed.
- **Cybersecurity:** Proactive penetration testing and DDoS mitigation.
- **24/7 Support:** Dedicated engineering relay for critical system issues.`
      }
    };

    const details = serviceDetails[slug];
    if (details) {
      setData(details);
      window.scrollTo(0, 0);
    } else {
      // Fallback for missing/bad slugs
      window.location.hash = '#services';
    }
  }, [slug]);

  if (!data) return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-12 h-12 border-4 border-[#10b981] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <article className="min-h-screen pb-32 pt-40 bg-transparent relative overflow-hidden">
      {/* Background Gradient Base */}
      <div className={`absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b ${data.grad} to-transparent opacity-40 pointer-events-none blur-[100px]`}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[11px] mb-8 block drop-shadow-lg">Strategic Unit // {slug}</span>
            <h1 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-10 text-white">
              {data.title.split(' & ').map((part: string, i: number) => (
                <span key={i} className={i === 1 ? "text-white/20 block" : "block"}>{part} {i === 0 && data.title.includes('&') ? '&' : ''}</span>
              ))}
            </h1>
            <p className="text-2xl md:text-3xl text-zinc-100 font-bold mb-12 leading-relaxed max-w-xl italic border-l-4 border-[#10b981] pl-8 drop-shadow-md">
              {data.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              {data.tags.map((tag: string) => (
                <span key={tag} className="px-8 py-3 glass-panel border border-white/20 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] text-white shadow-xl hover:bg-white hover:text-black transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
            <button onClick={onOpenModal} className="px-20 py-7 bg-[#10b981] text-black font-black uppercase tracking-[0.5em] rounded-[2.5rem] hover:bg-white transition-all shadow-[0_30px_80px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95 text-sm">
              Initiate Forge
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1 }} className="relative">
            <div className="aspect-square rounded-[5rem] overflow-hidden border border-white/20 glass-panel relative group shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
              <img src={data.image} alt={data.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-16 left-16">
                <div className="flex items-center gap-6 bg-black/60 backdrop-blur-3xl px-8 py-4 rounded-3xl border border-white/20">
                  <div className="w-3 h-3 bg-[#10b981] rounded-full animate-ping"></div>
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white">Ops Operational</span>
                </div>
              </div>
            </div>
            {/* Focal Glow */}
            <div className={`absolute -inset-16 bg-gradient-to-br ${data.grad} to-transparent blur-[140px] -z-10 opacity-60 animate-pulse`}></div>
          </motion.div>
        </div>

        <div className="max-w-4xl glass-panel p-12 md:p-24 rounded-[5rem] border border-white/10 mx-auto shadow-[0_50px_120px_rgba(0,0,0,0.7)] bg-gradient-to-b from-white/[0.05] to-transparent relative overflow-hidden mb-20">
           <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-8xl font-black text-white select-none">{slug.toUpperCase()}</div>
           
           <div className="prose prose-invert prose-emerald max-w-none relative z-10">
             <ReactMarkdown 
               components={{
                h2: ({node, ...props}) => <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mt-16 mb-10 text-white border-b border-white/10 pb-6" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-black uppercase tracking-[0.4em] mt-12 mb-8 text-[#10b981] drop-shadow-md" {...props} />,
                p: ({node, ...props}) => <p className="text-zinc-200 text-lg md:text-2xl leading-relaxed mb-10 font-bold" {...props} />,
                li: ({node, ...props}) => <li className="text-zinc-300 text-lg md:text-2xl mb-8 list-disc ml-10 font-medium" {...props} />,
               }}
             >
               {data.body}
             </ReactMarkdown>
           </div>
           
           <div className="mt-24 pt-20 border-t border-white/10 text-center">
              <p className="text-zinc-400 font-black uppercase tracking-[0.7em] text-[11px] mb-12">Authorized by Bycom Engineering Relay</p>
              <button onClick={onOpenModal} className="text-white hover:text-[#10b981] font-black uppercase tracking-[0.5em] text-2xl md:text-3xl transition-all flex items-center gap-10 mx-auto group">
                Consult With Liaison 
                <svg className="w-10 h-10 group-hover:translate-x-6 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
           </div>
        </div>
      </div>
    </article>
  );
};

export default ServicePage;