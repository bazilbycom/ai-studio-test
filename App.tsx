
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIArchitect from './components/AIArchitect';
import Process from './components/Process';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioClients = {
  tier1: ["Obcbook", "Lesalonais", "HomeMaids", "Aventura Indica", "Back Benchers", "TripAdvisor", "Little's and Big's", "Infodifesa", "Srinivas University", "House of coupons", "o2oviet.com", "Markitcafe", "Fitnessmentor.dk", "ARCI", "Poikilingo", "Clashmentor", "nishtry.com", "mobolarynetwork.com", "BridgeVIPnetwork.com", "varthaloka.com"],
  tier2: ["yamunaashacity.com", "someshwarvista.com", "proplinks.co.in", "essencecarryzen.com", "dandeliadventures.co", "dandeliouting.in", "tharkistaan.xyz", "myadda.in", "maniththakur.design", "brochya", "Female Mixtapes", "Beporsam", "Bearyvarthe", "Justkudla", "Asdev mobile", "IJIM Pay Bank", "DariNews USA", "DariNews Turkey", "SwoBook", "Zegmart"],
  tier3: ["milleegram.com", "VajraRealities.com", "Bikerscafesalem.com", "scenolabevents.com", "UnitedVPN", "FastFree VPN", "VersaPro", "Bycom VPN", "Suraksha VPN", "Byvarsi Stickers", "insyapp.com", "connexsta.com", "groceradda", "recipetree.app", "achefacilceara", "Fepeople.com", "Datoo.xyz", "IndicaSurfSchool.com", "Oddboii", "spacefather.com"]
};

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
                      <span className="text-3xl font-black text-white/30 uppercase tracking-tighter">AI-Optimized Deployments</span>
                      <span className="w-2 h-2 bg-[#10b981] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                      <span className="text-3xl font-black text-white/30 uppercase tracking-tighter">Hyper-Scale Engineering</span>
                      <span className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                    </div>
                  ))}
                </div>
              </div>

              <Services />
              <Process />
              <AIArchitect />
              
              <section className="py-24 px-6 bg-[#080808] border-t border-white/5">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                  <div className="max-w-lg">
                    <h2 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-none">Global <br/>Archive</h2>
                    <p className="text-zinc-500 mb-8 font-medium">Over 60+ global brands and high-velocity startups powered by Bycom core protocols.</p>
                    <a href="#portfolio" className="text-[#10b981] font-black uppercase tracking-widest text-xs flex items-center gap-2 group">
                      Explore Clientele
                      <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                  </div>
                  <div className="flex gap-4 flex-wrap justify-center">
                    {["Fintech", "Health", "Real Estate", "Crypto", "Media"].map(tag => (
                       <div key={tag} className="px-6 py-3 glass-panel rounded-full border border-white/5 text-[10px] font-black uppercase tracking-widest">{tag}</div>
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeSection === 'services' && (
            <motion.div key="services" {...pageTransition} className="pt-32 pb-24 px-6">
              <div className="max-w-6xl mx-auto">
                <Services />
                <div className="mt-24">
                  <Process />
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'portfolio' && (
            <motion.div key="portfolio" {...pageTransition} className="pt-32 pb-24 px-6">
              <div className="max-w-7xl mx-auto">
                <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">The Clientele</span>
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-20 leading-[0.8]">Global <br/><span className="text-white/20">Partnerships</span></h1>
                
                <div className="grid md:grid-cols-3 gap-12">
                  {[
                    { title: "Sector Alpha", clients: portfolioClients.tier1, color: "#10b981" },
                    { title: "Sector Beta", clients: portfolioClients.tier2, color: "#06b6d4" },
                    { title: "Sector Gamma", clients: portfolioClients.tier3, color: "#8b5cf6" }
                  ].map((group, gIdx) => (
                    <div key={gIdx} className="space-y-4">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-1 rounded-full" style={{ backgroundColor: group.color }}></div>
                        <h3 className="font-black uppercase tracking-widest text-sm">{group.title}</h3>
                      </div>
                      <div className="flex flex-col gap-2">
                        {group.clients.map((client, cIdx) => (
                          <motion.div 
                            key={cIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: cIdx * 0.02 + gIdx * 0.1 }}
                            className="p-4 glass-panel rounded-xl border border-white/5 hover:border-white/20 transition-all group flex items-center justify-between"
                          >
                            <span className="text-zinc-400 group-hover:text-white font-bold transition-colors">{client}</span>
                            <div className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: group.color }}></div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'contact' && (
            <motion.div key="contact" {...pageTransition} className="pt-32 pb-24 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20">
                  <div className="flex flex-col justify-center">
                    <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Operational HQ</span>
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.8]">Let's <br/><span className="text-white/20">Forge</span></h1>
                    
                    <div className="space-y-12">
                      <div className="glass-panel p-8 rounded-3xl border border-white/5">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#10b981] mb-6">Physical Node</h4>
                        <p className="text-2xl font-black leading-tight text-white mb-2">Bantwal Chambers, Baikampady</p>
                        <p className="text-xl text-zinc-500 font-bold">Mangalore – INDIA</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-4">India Uplink</h4>
                          <a href="tel:+917259830339" className="text-xl font-black hover:text-[#10b981] transition-colors">+91-7259830339</a>
                        </div>
                        <div>
                          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-4">KSA Uplink</h4>
                          <a href="tel:+966575271327" className="text-xl font-black hover:text-[#10b981] transition-colors">+966-575271327</a>
                        </div>
                      </div>

                      <div className="pt-8 border-t border-white/5">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-4">Neural Relay</h4>
                        <div className="flex flex-col gap-2">
                          <a href="mailto:sayhello@bycomsolutions.com" className="text-lg font-black hover:text-[#10b981] transition-colors">sayhello@bycomsolutions.com</a>
                          <a href="mailto:support@bycomsolutions.com" className="text-lg font-black hover:text-purple-400 transition-colors">support@bycomsolutions.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-panel p-12 rounded-[4rem] border border-white/5 relative bg-gradient-to-br from-white/[0.02] to-transparent">
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-10">Transmission Forge</h3>
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                      <div className="space-y-2 group">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-focus-within:text-[#10b981] transition-colors">Identifier</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/10 p-4 focus:outline-none focus:border-[#10b981] transition-all font-bold text-lg" placeholder="Name / Organization" />
                      </div>
                      <div className="space-y-2 group">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-focus-within:text-[#10b981] transition-colors">Frequency</label>
                        <input type="email" className="w-full bg-transparent border-b border-white/10 p-4 focus:outline-none focus:border-[#10b981] transition-all font-bold text-lg" placeholder="email@address.com" />
                      </div>
                      <div className="space-y-2 group">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-focus-within:text-[#10b981] transition-colors">Objective</label>
                        <textarea rows={4} className="w-full bg-transparent border-b border-white/10 p-4 focus:outline-none focus:border-[#10b981] transition-all font-bold resize-none text-lg" placeholder="Brief project overview..."></textarea>
                      </div>
                      <button 
                        onClick={() => window.open('https://wa.me/966575271327', '_blank')}
                        className="w-full py-7 bg-[#10b981] text-black font-black uppercase tracking-widest rounded-3xl hover:bg-white transition-all shadow-[0_0_50px_rgba(16,185,129,0.3)] text-lg"
                      >
                        Initiate Connection
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(16,185,129,0.08),transparent_40%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.04]"></div>
      </div>
    </div>
  );
};

export default App;
