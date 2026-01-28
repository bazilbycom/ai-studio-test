import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AIArchitect from './components/AIArchitect';
import Process from './components/Process';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import LegalPage from './components/LegalPage';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import ServicePage from './components/ServicePage';
import { motion, AnimatePresence } from 'framer-motion';

const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#000000]">
      {/* Optimized static scanline */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]"></div>
      
      {/* Light, static gradient blobs (Zero GPU cost) */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/5 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px]" />
      
      {/* Global Texture Layer - Low opacity for performance */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]" />
    </div>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [blogSlug, setBlogSlug] = useState<string | null>(null);
  const [serviceSlug, setServiceSlug] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHashChange = useCallback(() => {
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
    
    if (!hash.includes('/')) {
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [handleHashChange]);

  const marqueeContent = useMemo(() => [
    "BYCOM SOLUTIONS // ENGINEERING PEAK PERFORMANCE", 
    "SCALE BEYOND LIMITS // CLOUD NATIVE ARCHITECTURE", 
    "HYPER-PERFORMANCE ENGINE // NEXT-GEN SOFTWARE", 
    "AI-NATIVE ARCHITECTURE // NEURAL SYSTEMS", 
    "ENGINEERING EXCELLENCE 2026", 
    "SUB-MS LATENCY // FINTECH READY"
  ], []);

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 }
  };

  const renderHomeContent = () => (
    <>
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      
      <section className="py-12 md:py-24 flex flex-col items-center justify-center bg-transparent relative overflow-hidden">
         <div className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-6 md:gap-10">
           <div className="w-full glass-panel rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] relative border border-white/10 shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=60&w=1200" 
               alt="Global Status" 
               loading="lazy"
               className="w-full h-full object-cover opacity-60"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
             <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-end">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-end">
                 <div>
                   <span className="text-[#10b981] font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Network Status</span>
                   <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">Live Operations</h3>
                 </div>
                 <div className="border-l border-white/10 pl-6 hidden md:block">
                   <span className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.4em] mb-1 block">Speed</span>
                   <h3 className="text-3xl font-black text-white">&lt; 15ms</h3>
                 </div>
                 <div className="border-l border-white/10 pl-6 hidden md:block">
                   <span className="text-cyan-400 font-black text-[10px] uppercase tracking-[0.4em] mb-1 block">Nodes</span>
                   <h3 className="text-3xl font-black text-white">450+ Active</h3>
                 </div>
               </div>
             </div>
           </div>

           <div className="w-full border-y border-white/5 py-8 overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...marqueeContent, ...marqueeContent].map((text, i) => (
                  <div key={i} className="flex items-center gap-12 md:gap-24 mx-8 md:mx-12">
                    <span className="text-xl md:text-2xl font-black text-white/70 uppercase tracking-tighter">{text}</span>
                    <span className="w-2 h-2 bg-[#10b981] rounded-full"></span>
                  </div>
                ))}
              </div>
            </div>
         </div>
      </section>

      <Services />
      <Portfolio />
      <Process />
      
      <section className="py-24 px-6 relative overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#10b981] font-black uppercase tracking-[0.6em] text-[10px] mb-4 block">Core Competencies</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white">
              Tactical <span className="text-white/20">Specializations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Fintech Engines", desc: "High-frequency trading platforms and secure banking middleware.", code: "F-X1" },
              { title: "AI Integration", desc: "LLM fine-tuning and proprietary neural layers for automation.", code: "N-L3" },
              { title: "Scale SaaS", desc: "Multi-tenant cloud architectures for global software distribution.", code: "S-C4" },
              { title: "UX Engineering", desc: "Extreme-performance interfaces with sub-millisecond interactivity.", code: "H-I2" }
            ].map((unit, i) => (
              <div key={i} className="glass-panel p-10 rounded-2xl border border-white/10 hover:border-[#10b981]/30 transition-all group flex flex-col h-full bg-zinc-900/40">
                <div className="text-xs font-black text-emerald-500 mb-6">{unit.code}</div>
                <h3 className="text-xl font-black uppercase tracking-tighter mb-4 text-white">{unit.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-medium mb-auto">{unit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AIArchitect />
    </>
  );

  return (
    <div className="relative min-h-screen selection:bg-[#10b981] selection:text-black bg-[#000000] text-white">
      <GlobalBackground />
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {activeSection === 'privacy' || activeSection === 'terms' || activeSection === 'refunds' ? (
            <motion.div key={activeSection} {...pageTransition}><LegalPage type={activeSection as any} /></motion.div>
          ) : activeSection === 'blog' ? (
            <motion.div key="blog" {...pageTransition}><Blog /></motion.div>
          ) : activeSection === 'blog-post' && blogSlug ? (
            <motion.div key="blog-post" {...pageTransition}><BlogPost slug={blogSlug} /></motion.div>
          ) : activeSection === 'service-detail' && serviceSlug ? (
            <motion.div key="service-detail" {...pageTransition}><ServicePage slug={serviceSlug} onOpenModal={() => setIsModalOpen(true)} /></motion.div>
          ) : activeSection === 'contact' ? (
            <motion.div key="contact" {...pageTransition} className="pt-32 pb-24 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                  <div>
                    <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Regional Hubs</span>
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12">Global <br/><span className="text-white/20">Presence</span></h1>
                    <div className="space-y-6">
                      <div className="glass-panel p-8 rounded-2xl border border-white/5 bg-zinc-900/30">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#10b981] mb-2 block">India</span>
                        <p className="font-black text-2xl text-white">Mangalore, KA 575011</p>
                        <p className="text-zinc-400 text-sm mt-2">+91 72598 30339</p>
                      </div>
                      <div className="glass-panel p-8 rounded-2xl border border-white/5 bg-zinc-900/30">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 mb-2 block">KSA</span>
                        <p className="font-black text-2xl text-white">Riyadh, Al Aqiq 13515</p>
                        <p className="text-zinc-400 text-sm mt-2">+966 57 527 1327</p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-panel p-12 md:p-16 rounded-3xl border border-white/10 flex flex-col justify-center bg-zinc-900/40">
                    <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 text-white">Project Enquiry</h3>
                    <p className="text-zinc-400 font-bold text-lg mb-10 max-w-sm">Ready to deploy your next high-performance asset?</p>
                    <button onClick={() => setIsModalOpen(true)} className="w-full py-5 bg-[#10b981] text-black font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white transition-all text-lg shadow-xl">Submit Enquiry</button>
                    <p className="mt-8 font-black text-xl text-white/50 tracking-tighter">sayhello@bycomsolutions.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div key="home" {...pageTransition}>{renderHomeContent()}</motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;