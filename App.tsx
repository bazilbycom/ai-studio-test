
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIArchitect from './components/AIArchitect';
import Process from './components/Process';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import LegalPage from './components/LegalPage';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioClients = {
  tier1: {
    label: "Sector Alpha / Global Platforms",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
    clients: ["Obcbook", "Lesalonais", "HomeMaids", "Aventura Indica", "Back Benchers", "TripAdvisor", "Little's and Big's", "Infodifesa", "Srinivas University", "House of coupons", "o2oviet.com", "Markitcafe", "Fitnessmentor.dk", "ARCI", "Poikilingo", "Clashmentor", "nishtry.com", "mobolarynetwork.com", "BridgeVIPnetwork.com", "varthaloka.com"]
  },
  tier2: {
    label: "Sector Beta / Real Estate & Commerce",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600",
    clients: ["yamunaashacity.com", "someshwarvista.com", "proplinks.co.in", "essencecarryzen.com", "dandeliadventures.co", "dandeliouting.in", "tharkistaan.xyz", "myadda.in", "maniththakur.design", "brochya", "Female Mixtapes", "Beporsam", "Bearyvarthe", "Justkudla", "Asdev mobile", "IJIM Pay Bank", "DariNews USA", "DariNews Turkey", "SwoBook", "Zegmart"]
  },
  tier3: {
    label: "Sector Gamma / Network & Infra",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=600",
    clients: ["milleegram.com", "VajraRealities.com", "Bikerscafesalem.com", "scenolabevents.com", "UnitedVPN", "FastFree VPN", "VersaPro", "Bycom VPN", "Suraksha VPN", "Byvarsi Stickers", "insyapp.com", "connexsta.com", "groceradda", "recipetree.app", "achefacilceara", "Fepeople.com", "Datoo.xyz", "IndicaSurfSchool.com", "Oddboii", "spacefather.com"]
  }
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const renderContent = () => {
    if (activeSection === 'privacy' || activeSection === 'terms' || activeSection === 'refunds') {
      return <LegalPage type={activeSection as any} />;
    }

    switch (activeSection) {
      case 'home':
        return (
          <motion.div key="home" {...pageTransition}>
            <Hero onOpenModal={() => setIsModalOpen(true)} />
            
            <div className="border-y border-white/5 bg-black py-12 overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center gap-16 mx-8 md:mx-16">
                    <span className="text-xl md:text-3xl font-black text-white/30 uppercase tracking-tighter">AI-Optimized Deployments 2026</span>
                    <span className="w-2 h-2 bg-[#10b981] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                    <span className="text-xl md:text-3xl font-black text-white/30 uppercase tracking-tighter">Hyper-Scale Engineering</span>
                    <span className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                  </div>
                ))}
              </div>
            </div>

            <Services />
            <Process />
            <AIArchitect />
            
            <section className="py-24 px-6 bg-[#080808] border-t border-white/5">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                <div className="max-w-lg">
                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">Global <br/>Archive</h2>
                  <p className="text-zinc-500 mb-8 font-medium">Over 80+ global brands and high-velocity startups powered by Bycom core protocols in 2026.</p>
                  <button onClick={() => window.location.hash = 'portfolio'} className="mx-auto md:mx-0 text-[#10b981] font-black uppercase tracking-widest text-xs flex items-center gap-2 group">
                    Explore Clientele
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </div>
                <div className="flex gap-4 flex-wrap justify-center">
                  {["Fintech", "Health", "Real Estate", "Crypto", "Media"].map(tag => (
                     <div key={tag} className="px-5 py-2.5 md:px-6 md:py-3 glass-panel rounded-full border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-widest">{tag}</div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        );
      case 'services':
        return (
          <motion.div key="services" {...pageTransition} className="pt-32 pb-24 px-6">
            <div className="max-w-6xl mx-auto">
              <Services />
              <div className="mt-24">
                <Process />
              </div>
            </div>
          </motion.div>
        );
      case 'portfolio':
        return (
          <motion.div key="portfolio" {...pageTransition} className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
              <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">The Clientele Matrix</span>
              <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-20 leading-[0.8]">Global <br/><span className="text-white/20">Partnerships</span></h1>
              
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {[
                  { key: 'tier1', color: '#10b981' },
                  { key: 'tier2', color: '#06b6d4' },
                  { key: 'tier3', color: '#8b5cf6' }
                ].map((tier, gIdx) => {
                  const data = (portfolioClients as any)[tier.key];
                  return (
                    <div key={gIdx} className="space-y-6">
                      <div className="relative h-48 md:h-64 rounded-2xl md:rounded-3xl overflow-hidden glass-panel border border-white/10 mb-6 md:mb-8 group">
                        <img src={data.image} alt={data.label} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                        <div className="absolute bottom-6 left-6">
                           <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#10b981]">{data.label}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {data.clients.map((client: string, cIdx: number) => (
                          <motion.div 
                            key={cIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: cIdx * 0.02 + gIdx * 0.1 }}
                            className="p-3 md:p-4 glass-panel rounded-xl border border-white/5 hover:border-white/20 transition-all group flex items-center justify-between"
                          >
                            <span className="text-xs md:text-sm text-zinc-400 group-hover:text-white font-bold transition-colors">{client}</span>
                            <div className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: tier.color }}></div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        );
      case 'contact':
      case 'ai-architect':
        return activeSection === 'ai-architect' ? <AIArchitect /> : (
          <motion.div key="contact" {...pageTransition} className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 md:gap-20">
                <div className="flex flex-col justify-center text-center lg:text-left">
                  <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Operational HQ</span>
                  <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.8]">Let's <br/><span className="text-white/20">Forge</span></h1>
                  <div className="space-y-8 md:space-y-12">
                    <div className="glass-panel p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5">
                      <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#10b981] mb-4">India Hub</h4>
                      <p className="text-xl md:text-2xl font-black leading-tight text-white mb-1">Bantwal Chambers, Baikampady</p>
                      <p className="text-sm md:text-lg text-zinc-500 font-bold mb-4">Mangalore, Karnataka 575011</p>
                      <a href="https://wa.me/917259830339" target="_blank" className="text-lg md:text-xl font-bold text-zinc-300 hover:text-white flex items-center justify-center lg:justify-start gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.656zm6.29-4.139c1.52.907 3.0 1.352 4.619 1.353 5.504 0 9.982-4.479 9.984-9.985.002-5.507-4.475-9.985-9.982-9.987-2.68-.001-5.197 1.041-7.09 2.932-1.891 1.892-2.933 4.403-2.934 7.087-.001 1.706.469 3.126 1.391 4.509l-.989 3.613 3.701-.971c.001-.001.001-.001.001-.001z"/></svg>
                        +91 72598 30339
                      </a>
                    </div>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5">
                      <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#06b6d4] mb-4">KSA Relay</h4>
                      <p className="text-xl md:text-2xl font-black leading-tight text-white mb-1">Tahliyah Street, Al Aqiq</p>
                      <p className="text-sm md:text-lg text-zinc-500 font-bold mb-4">Riyadh 13515</p>
                      <a href="https://wa.me/966575271327" target="_blank" className="text-lg md:text-xl font-bold text-zinc-300 hover:text-white flex items-center justify-center lg:justify-start gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.656zm6.29-4.139c1.52.907 3.0 1.352 4.619 1.353 5.504 0 9.982-4.479 9.984-9.985.002-5.507-4.475-9.985-9.982-9.987-2.68-.001-5.197 1.041-7.09 2.932-1.891 1.892-2.933 4.403-2.934 7.087-.001 1.706.469 3.126 1.391 4.509l-.989 3.613 3.701-.971c.001-.001.001-.001.001-.001z"/></svg>
                        +966 57 527 1327
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border border-white/5 relative bg-gradient-to-br from-white/[0.02] to-transparent">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-8 md:mb-10 text-center lg:text-left">Transmission Forge</h3>
                  <div className="space-y-8 md:space-y-10 text-center lg:text-left">
                    <p className="text-zinc-400 font-medium text-sm md:text-base">Ready to scale in 2026? Click below to launch our priority enquiry forge and connect with our sales engineers.</p>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="w-full py-5 md:py-7 bg-[#10b981] text-black font-black uppercase tracking-widest rounded-2xl md:rounded-3xl hover:bg-white transition-all shadow-[0_0_50px_rgba(16,185,129,0.3)] text-lg md:text-xl"
                    >
                      Start Project Enquiry
                    </button>
                    <div className="pt-8 md:pt-10 border-t border-white/5">
                      <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4">Neural Relay Channels</h4>
                      <div className="flex flex-col gap-3 font-bold text-xs md:text-base">
                        <span className="hover:text-[#10b981] cursor-default transition-colors select-all">sayhello [at] bycomsolutions.com</span>
                        <span className="hover:text-[#10b981] cursor-default transition-colors select-all">sales [at] bycomsolutions.com</span>
                        <span className="hover:text-purple-400 cursor-default transition-colors select-all">support [at] bycomsolutions.com</span>
                      </div>
                    </div>
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
      <Navbar />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      <Footer />
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(16,185,129,0.08),transparent_40%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.04]"></div>
      </div>
    </div>
  );
};

export default App;
