import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface ServicePageProps {
  slug: string;
  onOpenModal: () => void;
}

const ServicePage: React.FC<ServicePageProps> = ({ slug, onOpenModal }) => {
  const [data, setData] = useState<any>(null);

  // Mock data simulation - this would normally fetch from /content/services/${slug}.json
  useEffect(() => {
    const serviceDetails: any = {
      'web-app-development': {
        title: "Web & App Development",
        subtitle: "High-Performance Digital Architecture",
        summary: "Engineering sub-millisecond latency web ecosystems and ultra-responsive native applications using hyper-modern stacks.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600",
        tags: ["Next.js", "Flutter", "Edge Functions", "GraphQL"],
        body: `## The Bycom Forge 
        
Our development methodology is rooted in **Peak Performance Engineering**. We don't just build websites; we construct high-frequency digital assets designed for scale.

### Technical Arsenal:
- **Core Stacks:** We utilize Next.js for its advanced SSR/ISR capabilities.
- **Native Experience:** Flutter-based deployments for pixel-perfect cross-platform consistency.
- **Edge Deployment:** Global CDN distribution ensures your app is physically close to your users.
- **Security:** AES-256 equivalent standard protocols in all data pipelines.`
      }
      // Add more mocks if needed for previewing
    };

    setData(serviceDetails[slug] || serviceDetails['web-app-development']);
  }, [slug]);

  if (!data) return null;

  return (
    <article className="min-h-screen pb-24 pt-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Specification Unit / {slug}</span>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              {data.title.split(' & ').map((part: string, i: number) => (
                <span key={i} className={i === 1 ? "text-white/20 block" : "block"}>{part} {i === 0 && data.title.includes('&') ? '&' : ''}</span>
              ))}
            </h1>
            <p className="text-2xl text-zinc-400 font-medium mb-10 leading-relaxed max-w-xl italic">
              {data.subtitle}
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              {data.tags.map((tag: string) => (
                <span key={tag} className="px-5 py-2 glass-panel border border-white/5 rounded-full text-xs font-black uppercase tracking-widest text-[#10b981]">{tag}</span>
              ))}
            </div>
            <button onClick={onOpenModal} className="px-12 py-5 bg-[#10b981] text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all shadow-2xl">
              Initiate Project
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden border border-white/10 glass-panel relative group">
              <img src={data.image} alt={data.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#10b981] rounded-full animate-ping"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Active Deployment Mode</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-4xl glass-panel p-12 md:p-20 rounded-[3rem] border border-white/5 mx-auto">
           <div className="prose prose-invert prose-emerald max-w-none">
             <ReactMarkdown 
               components={{
                h2: ({node, ...props}) => <h2 className="text-3xl font-black uppercase tracking-tighter mt-12 mb-6 text-white" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-black uppercase tracking-widest mt-10 mb-4 text-[#10b981]" {...props} />,
                p: ({node, ...props}) => <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-medium" {...props} />,
                li: ({node, ...props}) => <li className="text-zinc-400 text-lg mb-4 list-disc ml-6" {...props} />,
               }}
             >
               {data.body}
             </ReactMarkdown>
           </div>
        </div>
      </div>
    </article>
  );
};

export default ServicePage;