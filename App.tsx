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

  // Added 'as const' to string literals to fix Easing type errors
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

    switch (activeSection) {
      case 'home':
        return (
          <motion.div key="home" {...pageTransition}>
            <Hero onOpenModal={() => setIsModalOpen(true)} />
            
            <div className="border-y border-white/5 bg-black py-10 md:py-16 overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center gap-10 md:gap-24 mx-8 md:mx-20">
                    <span className="text-2xl md:text-5xl font-black text-white/30 uppercase tracking-tighter">Bycom Grid 2026</span>
                    <span className="w-2.5 h-2.5 bg-[#10b981] rounded-full shadow-[0_0_12px_#10b981]"></span>
                    <span className="text-2xl md:text-5xl font-black text-white/30 uppercase tracking-tighter">Extreme Engineering</span>
                    <span className="w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_12px_#a855f7]"></span>
                  </div>
                ))}
              </div>
            </div>

            <Services />
            <Process />
            <AIArchitect />
            
            <section className="py-24 px-6 bg-[#080808] border-t border-white/5">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">Global <br/><span className="text-[#10b981]">Archive</span></h2>
                  <p className="text-zinc-500 mb-10 text-lg md:text-xl font-medium leading-relaxed">Top 10 Rated Developer in the Indian App Frontier. Bycom solutions currently powers 80+ high-performers across the digital horizon.</p>
                  <button onClick={() => window.location.hash = 'portfolio'} className="mx-auto md:mx-0 text-[#10b981] font-black uppercase tracking-[0.3em] text-[10px] flex items-center gap-3 group px-8 py-4 border border-[#10b981]/20 rounded-full hover:bg-[#10b981]/10 transition-all">
                    Explore Matrix
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </div>
                <div className="flex gap-3 flex-wrap justify-center md:justify-end max-w-lg">
                  {["SaaS", "Fintech", "Health", "Web3", "Real Estate", "Ecommerce"].map(tag => (
                     <div key={tag} className="px-5 py-2.5 glass-panel rounded-full border border-white/5 text-[10px] md:text-xs font-black uppercase tracking-widest">{tag}</div>
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
            <div className="max-w-7xl mx-auto text-center md:text-left">
              <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Archive Access</span>
              <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-20 leading-[0.8]">Global <br/><span className="text-white/20">Archive</span></h1>
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {[
                  { key: 'tier1', color: '#10b981' },
                  { key: 'tier2', color: '#06b6d4' },
                  { key: 'tier3', color: '#8b5cf6' }
                ].map((tier, gIdx) => {
                  const data = (portfolioClients as any)[tier.key];
                  return (
                    <div key={gIdx} className="space-y-6">
                      <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden glass-panel border border-white/10 group shadow-2xl">
                        <img src={data.image} alt={data.label} className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8 text-left">
                           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#10b981]">{data.label}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {data.clients.map((client: string, cIdx: number) => (
                          <motion.div 
                            key={cIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: cIdx * 0.02 + gIdx * 0.1 }}
                            className="p-4 glass-panel rounded-2xl border border-white/5 hover:border-[#10b981]/20 transition-all group flex items-center justify-between"
                          >
                            <span className="text-sm md:text-base text-zinc-400 group-hover:text-white font-bold transition-colors">{client}</span>
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
              <div className="grid lg:grid-cols-2 gap-12 md:gap-24">
                <div className="flex flex-col justify-center text-center lg:text-left">
                  <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Regional Hubs</span>
                  <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.8]">Let's <br/><span className="text-white/20">Forge</span></h1>
                  <div className="space-y-6 md:space-y-12">
                    <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#10b981] mb-6">India Node</h4>
                      <p className="text-2xl md:text-3xl font-black text-white mb-2">Bantwal Chambers</p>
                      <p className="text-sm md:text-lg text-zinc-500 font-bold mb-6 italic tracking-tight">Mangalore, Karnataka 575011</p>
                      <a href="https://wa.me/917259830339" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 rounded-full text-lg md:text-xl font-black hover:bg-[#10b981] hover:text-black transition-all">Secure Uplink</a>
                    </div>
                    <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#06b6d4] mb-6">KSA Node</h4>
                      <p className="text-2xl md:text-3xl font-black text-white mb-2">Tahliyah St, Riyadh</p>
                      <p className="text-sm md:text-lg text-zinc-500 font-bold mb-6 italic tracking-tight">Al Aqiq 13515</p>
                      <a href="https://wa.me/966575271327" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 rounded-full text-lg md:text-xl font-black hover:bg-[#06b6d4] hover:text-black transition-all">Regional Relay</a>
                    </div>
                  </div>
                </div>
                <div className="glass-panel p-10 md:p-16 rounded-[3rem] md:rounded-[5rem] border border-white/5 relative flex flex-col items-center justify-center text-center">
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none">The Project <br/>Forge</h3>
                  <p className="text-zinc-400 font-medium text-lg md:text-xl mb-12 max-w-sm leading-relaxed">Ready to initiate your 2026 deployment? Launch our secure enquiry forge to connect with our engineering team.</p>
                  <button onClick={() => setIsModalOpen(true)} className="w-full max-w-sm py-6 bg-[#10b981] text-black font-black uppercase tracking-[0.3em] rounded-3xl hover:bg-white transition-all shadow-2xl text-xl">Start Mission</button>
                  <div className="mt-12 pt-10 border-t border-white/5 w-full">
                    <p className="font-black text-sm md:text-lg text-zinc-500">sayhello [at] bycomsolutions.com</p>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(16,185,129,0.06),transparent_40%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
      </div>
    </div>
  );
};

export default App;