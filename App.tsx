
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIArchitect from './components/AIArchitect';
import Process from './components/Process';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveSection(hash);
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
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <div className="relative min-h-screen selection:bg-[#10b981] selection:text-black bg-[#050505] text-white overflow-x-hidden">
      <Navbar />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div key="home" {...pageTransition}>
              <Hero />
              
              <div className="border-y border-white/5 bg-black py-12 overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center gap-16 mx-16">
                      <span className="text-3xl font-black text-white/5 uppercase tracking-tighter">AI-Optimized Deployments</span>
                      <span className="w-2 h-2 bg-[#10b981] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                      <span className="text-3xl font-black text-white/5 uppercase tracking-tighter">Hyper-Scale Engineering</span>
                      <span className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                    </div>
                  ))}
                </div>
              </div>

              <Services />
              <Process />
              <AIArchitect />
              
              {/* Quick Portfolio Preview */}
              <section className="py-24 px-6 bg-[#080808]">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                  <div className="max-w-lg">
                    <h2 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-none">Global <br/>Impacts</h2>
                    <p className="text-zinc-500 mb-8 font-medium">From local startups to multinational enterprises, Bycom solutions drive performance across all digital touchpoints.</p>
                    <a href="#portfolio" className="text-[#10b981] font-black uppercase tracking-widest text-xs flex items-center gap-2 group">
                      Explore Full Archive
                      <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-40 h-40 glass-panel rounded-3xl flex items-center justify-center p-8">
                       <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=100" className="opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" alt="Logo" />
                    </div>
                    <div className="w-40 h-40 glass-panel rounded-3xl flex items-center justify-center p-8 mt-8">
                       <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100" className="opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" alt="Logo" />
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeSection === 'services' && (
            <motion.div key="services" {...pageTransition} className="pt-32 pb-24 px-6">
              <div className="max-w-6xl mx-auto">
                <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Capabilities</span>
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-20 leading-[0.8]">Strategic <br/><span className="text-white/20">Operations</span></h1>
                <Services />
                <div className="mt-24">
                  <Process />
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'portfolio' && (
            <motion.div key="portfolio" {...pageTransition} className="pt-32 pb-24 px-6">
              <div className="max-w-6xl mx-auto">
                <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Deployments</span>
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-20 leading-[0.8]">Execution <br/><span className="text-white/20">Archive</span></h1>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="group relative rounded-[2.5rem] overflow-hidden glass-panel aspect-[4/5] border border-white/5"
                    >
                      <img 
                        src={`https://images.unsplash.com/photo-${1550000000000 + i * 1000}?auto=format&fit=crop&q=80&w=600`} 
                        alt="Project" 
                        className="w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                      <div className="absolute bottom-0 left-0 p-10 z-20">
                        <span className="text-[#10b981] font-black text-[9px] uppercase tracking-[0.3em] mb-3 block">Deployment 0{i+1}</span>
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Core-Protocol {i+1}</h3>
                        <p className="text-zinc-500 text-xs font-bold mb-6 opacity-0 group-hover:opacity-100 transition-opacity">Full stack integration with AI-driven analytics and edge processing.</p>
                        <a href="https://wa.me/966575271327" className="px-6 py-2 bg-white text-black text-[10px] font-black uppercase rounded-full inline-block">Case Study</a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'contact' && (
            <motion.div key="contact" {...pageTransition} className="pt-32 pb-24 px-6">
              <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                <div className="flex-1">
                  <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Connection</span>
                  <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-12 leading-[0.8]">Let's <br/><span className="text-white/20">Forge</span></h1>
                  <p className="text-zinc-400 text-xl font-medium mb-12 max-w-md">Our intake sensors are calibrated for complex challenges. Reach out for a specialized consultation.</p>
                  
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-4">Direct Uplink</h4>
                      <a href="https://wa.me/966575271327" className="text-3xl font-black hover:text-[#10b981] transition-colors">+966 57 527 1327</a>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-4">Neural Relay</h4>
                      <a href="mailto:contact@bycomsolutions.com" className="text-3xl font-black hover:text-[#10b981] transition-colors">contact@bycomsolutions.com</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 glass-panel p-12 rounded-[3rem] border border-white/5 relative">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#10b981]/20 blur-2xl rounded-full"></div>
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Identifier</label>
                      <input type="text" className="w-full bg-white/5 border-b border-white/10 p-4 focus:outline-none focus:border-[#10b981] transition-all font-bold" placeholder="Your Name / Organization" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Frequency</label>
                      <input type="email" className="w-full bg-white/5 border-b border-white/10 p-4 focus:outline-none focus:border-[#10b981] transition-all font-bold" placeholder="email@address.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Transmission</label>
                      <textarea rows={4} className="w-full bg-white/5 border-b border-white/10 p-4 focus:outline-none focus:border-[#10b981] transition-all font-bold resize-none" placeholder="Describe your objective..."></textarea>
                    </div>
                    <button 
                      onClick={() => window.open('https://wa.me/966575271327', '_blank')}
                      className="w-full py-6 bg-[#10b981] text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all shadow-[0_0_40px_rgba(16,185,129,0.2)]"
                    >
                      Send Signal
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(16,185,129,0.05),transparent_40%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
      </div>
    </div>
  );
};

export default App;
