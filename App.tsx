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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020202]">
      {/* Intense scanline overlay for CRT effect */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.04] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      
      {/* Dynamic Global Energy Flashes - Primary Emerald */}
      <motion.div 
        animate={{ 
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.2, 1],
          x: ['-20%', '10%', '-20%'],
          y: ['-10%', '15%', '-10%']
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full bg-emerald-500/20 blur-[160px]"
      />

      {/* Dynamic Global Energy Flashes - Secondary Cyan */}
      <motion.div 
        animate={{ 
          opacity: [0.03, 0.12, 0.03],
          scale: [1.2, 0.9, 1.2],
          x: ['20%', '-15%', '20%'],
          y: ['10%', '-10%', '10%']
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-cyan-400/10 blur-[180px]"
      />

      {/* Center Pulse Flash */}
      <motion.div 
        animate={{ 
          opacity: [0.02, 0.08, 0.02],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-emerald-500/5 blur-[200px]"
      />

      {/* Interactive Mouse Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(16,185,129,0.08),transparent_40%)]" />
      
      {/* Global Texture Layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
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
    
    // Delayed scroll to avoid conflict with AnimatePresence height transitions
    requestAnimationFrame(() => {
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (!hash.includes('/')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }, []);

  useEffect(() => {
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
  }, [handleHashChange]);

  const marqueeContent = useMemo(() => [
    "BYCOM SOLUTIONS LAB // ENGINEERING PEAK PERFORMANCE", 
    "SCALE BEYOND LIMITS // CLOUD NATIVE ARCHITECTURE", 
    "HYPER-PERFORMANCE ENGINE // NEXT-GEN SOFTWARE", 
    "AI-NATIVE ARCHITECTURE // NEURAL SYSTEMS", 
    "ENGINEERING EXCELLENCE 2026 // GLOBAL INFRASTRUCTURE", 
    "SUB-MS LATENCY // FINTECH READY SYSTEMS"
  ], []);

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  const renderHomeContent = () => (
    <>
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      
      <section className="py-12 md:py-24 flex flex-col items-center justify-center bg-transparent relative overflow-hidden min-h-[600px]">
         <div className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-8 md:gap-10">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="w-full glass-panel rounded-[2rem] md:rounded-[3.5rem] overflow-hidden relative border border-white/20 shadow-[0_0_120px_rgba(16,185,129,0.15)] bg-black/40"
           >
             <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/8]">
               <motion.img 
                 src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" 
                 alt="Global Status" 
                 loading="lazy"
                 className="w-full h-full object-cover"
                 animate={{ opacity: [0.4, 0.6, 0.4] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
               
               <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-end">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end">
                   <div className="text-left">
                     <span className="text-[#10b981] font-black text-[10px] uppercase tracking-[0.6em] mb-4 block">Network Nodes</span>
                     <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl">Global Status</h3>
                     <div className="flex items-center gap-3 mt-6">
                       <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></div>
                       <span className="text-[10px] font-black uppercase text-white/80 tracking-[0.3em]">Active Relay</span>
                     </div>
                   </div>
                   
                   <div className="flex gap-10 md:gap-12 col-span-1 md:col-span-2">
                     <div className="text-left border-l border-[#10b981]/40 pl-6 md:pl-10">
                       <span className="text-purple-400 font-black text-[10px] uppercase tracking-[0.6em] mb-2 block">Speed</span>
                       <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-white">&lt; 15ms</h3>
                       <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mt-2">Global Latency</p>
                     </div>
                     <div className="text-left border-l border-cyan-400/40 pl-6 md:pl-10">
                       <span className="text-cyan-400 font-black text-[10px] uppercase tracking-[0.6em] mb-2 block">Nodes</span>
                       <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-white">450+</h3>
                       <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mt-2">Active Uplinks</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </motion.div>

           <div className="w-full md:border-y border-white/10 md:bg-white/[0.02] md:rounded-3xl py-8 md:py-14 overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...marqueeContent, ...marqueeContent].map((text, i) => (
                  <div key={i} className="flex items-center gap-16 md:gap-32 mx-10 md:mx-24">
                    <span className="text-xl md:text-4xl font-black text-white/80 uppercase tracking-tighter">{text}</span>
                    <span className="w-2.5 h-2.5 bg-[#10b981] rounded-full shadow-[0_0_15px_#10b981]"></span>
                  </div>
                ))}
              </div>
            </div>
         </div>
      </section>

      <Services />
      <Portfolio />
      <Process />
      
      <section className="py-24 md:py-48 px-6 relative overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 md:mb-40">
            <span className="text-[#10b981] font-black uppercase tracking-[0.6em] text-[11px] mb-6 block">Strategic Units</span>
            <h2 className="text-5xl md:text-[10rem] font-black uppercase tracking-tighter leading-none text-white">
              Core <br className="md:hidden" /> <span className="text-white/10">Specializations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "Fintech Engines", desc: "High-frequency trading platforms and secure banking middleware.", code: "F-X1", grad: "from-emerald-500/15" },
              { title: "AI Integration", desc: "LLM fine-tuning and proprietary neural layers for automation.", code: "N-L3", grad: "from-purple-500/15" },
              { title: "Scale SaaS", desc: "Multi-tenant cloud architectures for global software distribution.", code: "S-C4", grad: "from-cyan-500/15" },
              { title: "UX Engineering", desc: "Extreme-performance interfaces with sub-millisecond interactivity.", code: "H-I2", grad: "from-pink-500/15" }
            ].map((unit, i) => (
              <div key={i} className={`glass-panel p-12 rounded-[4rem] border border-white/10 hover:border-[#10b981]/50 transition-all duration-700 group flex flex-col h-full relative overflow-hidden bg-gradient-to-br ${unit.grad} to-transparent shadow-2xl`}>
                <div className="absolute top-0 right-0 p-10 opacity-[0.05] group-hover:opacity-20 transition-all duration-700 transform group-hover:scale-150">
                   <div className="text-8xl font-black text-white">{unit.code}</div>
                </div>
                <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/20 flex items-center justify-center font-black text-[#10b981] mb-12 group-hover:bg-[#10b981] group-hover:text-black transition-all shadow-xl text-xl">
                  {i + 1}
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6 text-white group-hover:text-[#10b981] transition-colors">{unit.title}</h3>
                <p className="text-zinc-200 text-base leading-relaxed font-bold mb-auto opacity-80">{unit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AIArchitect />
    </>
  );

  return (
    <div className="relative min-h-screen selection:bg-[#10b981] selection:text-black bg-[#020202] text-white">
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
            <motion.div key="contact" {...pageTransition} className="pt-48 pb-32 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 md:gap-32">
                  <div className="flex flex-col justify-center">
                    <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[11px] mb-8 block">Regional Hubs</span>
                    <h1 className="text-6xl md:text-[11rem] font-black uppercase tracking-tighter mb-16 leading-[0.8]">Global <br/><span className="text-white/20">Presence</span></h1>
                    <div className="space-y-12">
                      <div className="glass-panel p-10 md:p-12 rounded-[3rem] border border-white/10 relative group overflow-hidden bg-gradient-to-r from-emerald-500/10 to-transparent shadow-2xl">
                        <div className="relative z-10">
                          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#10b981] mb-6 block">India Node</span>
                          <p className="font-black text-2xl md:text-3xl text-white mb-3">Bantwal Chambers</p>
                          <p className="text-zinc-300 font-bold italic text-base md:text-lg tracking-tight mb-8 opacity-80">Mangalore, KA 575011</p>
                          <div className="px-8 py-4 bg-white/10 rounded-2xl border border-white/20 inline-block text-[14px] font-black text-white shadow-inner">+91 72598 30339</div>
                        </div>
                      </div>
                      <div className="glass-panel p-10 md:p-12 rounded-[3rem] border border-white/10 relative group overflow-hidden bg-gradient-to-r from-cyan-500/10 to-transparent shadow-2xl">
                        <div className="relative z-10">
                          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#06b6d4] mb-6 block">KSA Node</span>
                          <p className="font-black text-2xl md:text-3xl text-white mb-3">Tahliyah St, Riyadh</p>
                          <p className="text-zinc-300 font-bold italic text-base md:text-lg tracking-tight mb-8 opacity-80">Al Aqiq 13515</p>
                          <div className="px-8 py-4 bg-white/10 rounded-2xl border border-white/20 inline-block text-[14px] font-black text-white shadow-inner">+966 57 527 1327</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="glass-panel p-12 md:p-24 rounded-[4rem] border border-white/10 flex flex-col items-center justify-center text-center bg-gradient-to-b from-white/[0.05] to-transparent shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 text-white leading-none">Project Enquiry</h3>
                    <p className="text-zinc-200 font-bold text-xl md:text-2xl mb-16 max-w-sm leading-relaxed opacity-90">Ready to deploy your next high-performance asset?</p>
                    <button onClick={() => setIsModalOpen(true)} className="w-full max-w-sm py-6 md:py-8 bg-[#10b981] text-black font-black uppercase tracking-[0.5em] rounded-[2rem] hover:bg-white hover:scale-105 active:scale-95 transition-all text-xl md:text-2xl shadow-[0_30px_80px_rgba(16,185,129,0.4)]">Submit Enquiry</button>
                    <div className="mt-16 pt-12 border-t border-white/10 w-full">
                      <p className="font-black text-2xl md:text-3xl text-white tracking-tighter italic drop-shadow-lg">sayhello@bycomsolutions.com</p>
                    </div>
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