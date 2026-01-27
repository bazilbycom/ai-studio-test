import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIArchitect from './components/AIArchitect';
import Process from './components/Process';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import LegalPage from './components/LegalPage';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import ServicePage from './components/ServicePage';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [blogSlug, setBlogSlug] = useState<string | null>(null);
  const [serviceSlug, setServiceSlug] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      if (hash.startsWith('blog/')) {
        setBlogSlug(hash.split('/')[1]);
        setServiceSlug(null);
        setActiveSection('blog-post');
      } else if (hash.startsWith('service/')) {
        setServiceSlug(hash.split('/')[1]);
        setBlogSlug(null);
        setActiveSection('service-detail');
      } else {
        setBlogSlug(null);
        setServiceSlug(null);
        setActiveSection(hash);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const pageTransition = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.3, ease: "easeInOut" as const }
  };

  const renderContent = () => {
    if (activeSection === 'privacy' || activeSection === 'terms' || activeSection === 'refunds') {
      return <LegalPage type={activeSection as any} />;
    }

    if (activeSection === 'blog') {
      return <motion.div key="blog" {...pageTransition}><Blog /></motion.div>;
    }

    if (activeSection === 'blog-post' && blogSlug) {
      return <motion.div key="blog-post" {...pageTransition}><BlogPost slug={blogSlug} /></motion.div>;
    }

    if (activeSection === 'service-detail' && serviceSlug) {
      return <motion.div key="service-detail" {...pageTransition}><ServicePage slug={serviceSlug} onOpenModal={() => setIsModalOpen(true)} /></motion.div>;
    }

    switch (activeSection) {
      case 'home':
        return (
          <motion.div key="home" {...pageTransition}>
            <Hero onOpenModal={() => setIsModalOpen(true)} />
            
            <section className="py-12 md:h-screen md:max-h-[850px] flex flex-col items-center justify-center bg-black relative overflow-hidden">
               <div className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-6 md:gap-10 h-full justify-center">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.98 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="w-full glass-panel rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[16/10] md:aspect-[21/8] relative border border-white/5 shadow-[0_0_80px_rgba(16,185,129,0.1)]"
                 >
                   <motion.img 
                     src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" 
                     alt="Global Status" 
                     className="w-full h-full object-cover"
                     animate={{ opacity: [0.2, 0.5, 0.2] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                   <div className="absolute inset-0 p-6 md:p-14 flex flex-col justify-end">
                     <div className="grid grid-cols-3 gap-3 md:gap-10 items-end">
                       <div className="text-left col-span-3 md:col-span-1 mb-4 md:mb-0">
                         <span className="text-[#10b981] font-black text-[8px] md:text-[9px] uppercase tracking-[0.6em] mb-2 block">Network Nodes</span>
                         <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none">Global Status</h3>
                         <div className="flex items-center gap-2 mt-3">
                           <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></div>
                           <span className="text-[8px] md:text-[9px] font-black uppercase text-zinc-500 tracking-widest">Active Relay</span>
                         </div>
                       </div>
                       <div className="text-left border-l border-white/10 pl-3 md:pl-10">
                         <span className="text-purple-400 font-black text-[8px] md:text-[9px] uppercase tracking-[0.6em] mb-2 block">Speed</span>
                         <h3 className="text-xl md:text-4xl font-black uppercase tracking-tighter leading-none">&lt; 15ms</h3>
                         <p className="text-zinc-500 text-[8px] md:text-[9px] font-black uppercase tracking-widest mt-1">Latency</p>
                       </div>
                       <div className="text-left border-l border-white/10 pl-3 md:pl-10">
                         <span className="text-cyan-400 font-black text-[8px] md:text-[9px] uppercase tracking-[0.6em] mb-2 block">Nodes</span>
                         <h3 className="text-xl md:text-4xl font-black uppercase tracking-tighter leading-none">450+</h3>
                         <p className="text-zinc-500 text-[8px] md:text-[9px] font-black uppercase tracking-widest mt-1">Uplinks</p>
                       </div>
                     </div>
                   </div>
                 </motion.div>

                 <div className="w-full border-y border-white/5 bg-white/[0.02] rounded-2xl py-6 md:py-10 overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center gap-10 md:gap-24 mx-6 md:mx-20">
                          <span className="text-lg md:text-2xl font-black text-white/10 uppercase tracking-tighter">Bycom Solutions Lab</span>
                          <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full opacity-40"></span>
                          <span className="text-lg md:text-2xl font-black text-white/10 uppercase tracking-tighter">Scale Beyond limits</span>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </section>

            <div className="mt-[-2rem] md:mt-0">
              <Services />
            </div>
            
            <div className="mt-[-4rem] md:mt-0">
              <Process />
            </div>
            
            <section className="py-24 md:py-32 px-6 bg-[#030303] border-t border-white/5 relative overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                  <span className="text-[#10b981] font-black uppercase tracking-[0.6em] text-[10px] mb-4 block">Strategic Units</span>
                  <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-tight md:leading-none whitespace-normal">
                    Core <br className="md:hidden" /> <span className="text-white/10">Specializations</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {[
                    { title: "Fintech Engines", desc: "High-frequency trading platforms and secure banking middleware.", code: "F-X1" },
                    { title: "AI Integration", desc: "LLM fine-tuning and proprietary neural layers for automation.", code: "N-L3" },
                    { title: "Scale SaaS", desc: "Multi-tenant cloud architectures for global software distribution.", code: "S-C4" },
                    { title: "UX Engineering", desc: "Extreme-performance interfaces with sub-millisecond interactivity.", code: "H-I2" }
                  ].map((unit, i) => (
                    <div key={i} className="glass-panel p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-[#10b981]/30 transition-all duration-500 group flex flex-col h-full relative">
                      <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                         <div className="text-4xl font-black text-white">{unit.code}</div>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-black text-[#10b981] mb-8 group-hover:bg-[#10b981] group-hover:text-black transition-all">
                        {i + 1}
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-[#10b981] transition-colors">{unit.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed font-medium mb-auto">{unit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <AIArchitect />
          </motion.div>
        );
      case 'services':
      case 'portfolio':
        return <div className="pt-40 px-6 max-w-7xl mx-auto min-h-screen">Content Prototype Mode</div>;
      case 'contact':
        return (
          <motion.div key="contact" {...pageTransition} className="pt-40 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
                <div className="flex flex-col justify-center">
                  <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Regional Hubs</span>
                  <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.8]">Global <br/><span className="text-white/20">Presence</span></h1>
                  <div className="space-y-8 md:space-y-10">
                    <div className="glass-panel p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 relative group overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 text-4xl opacity-20">🇮🇳</div>
                      <div className="relative z-10">
                        <span className="text-[9px] font-black uppercase tracking-widest text-[#10b981] mb-4 block">India Node</span>
                        <p className="font-black text-xl md:text-2xl text-white mb-2">Bantwal Chambers</p>
                        <p className="text-zinc-500 font-bold italic text-sm tracking-tight mb-6">Mangalore, KA 575011</p>
                        <div className="flex items-center gap-4">
                           <div className="px-5 py-2.5 bg-white/5 rounded-xl border border-white/10 text-[11px] font-black">+91 72598 30339</div>
                        </div>
                      </div>
                    </div>
                    <div className="glass-panel p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 relative group overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 text-4xl opacity-20">🇸🇦</div>
                      <div className="relative z-10">
                        <span className="text-[9px] font-black uppercase tracking-widest text-[#06b6d4] mb-4 block">KSA Node</span>
                        <p className="font-black text-xl md:text-2xl text-white mb-2">Tahliyah St, Riyadh</p>
                        <p className="text-zinc-500 font-bold italic text-sm tracking-tight mb-6">Al Aqiq 13515</p>
                        <div className="flex items-center gap-4">
                           <div className="px-5 py-2.5 bg-white/5 rounded-xl border border-white/10 text-[11px] font-black">+966 57 527 1327</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="glass-panel p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] border border-white/10 flex flex-col items-center justify-center text-center">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8 leading-none">Initiate <br/>Protocol</h3>
                  <p className="text-zinc-400 font-medium text-lg md:text-xl mb-12 max-w-sm leading-relaxed">Ready to deploy your next high-performance asset?</p>
                  <button onClick={() => setIsModalOpen(true)} className="w-full max-w-sm py-5 md:py-6 bg-[#10b981] text-black font-black uppercase tracking-[0.3em] rounded-2xl md:rounded-3xl hover:bg-white transition-all text-base md:text-xl shadow-2xl">Start Transmission</button>
                  <div className="mt-12 pt-10 border-t border-white/5 w-full">
                    <p className="font-black text-lg md:text-xl text-zinc-500 italic">sayhello [at] bycomsolutions.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return <Hero onOpenModal={() => setIsModalOpen(true)} />;
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-[#10b981] selection:text-black bg-[#050505] text-white overflow-x-hidden">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main className="relative z-10"><AnimatePresence mode="wait">{renderContent()}</AnimatePresence></main>
      <Footer />
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(16,185,129,0.02),transparent_40%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.01]"></div>
      </div>
    </div>
  );
};

export default App;