
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
                  <button onClick={() => window.location.hash = 'portfolio'} className="text-[#10b981] font-black uppercase tracking-widest text-xs flex items-center gap-2 group">
                    Explore Clientele
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </div>
                <div className="flex gap-4 flex-wrap justify-center">
                  {["Fintech", "Health", "Real Estate", "Crypto", "Media"].map(tag => (
                     <div key={tag} className="px-6 py-3 glass-panel rounded-full border border-white/5 text-[10px] font-black uppercase tracking-widest">{tag}</div>
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
              
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { key: 'tier1', color: '#10b981' },
                  { key: 'tier2', color: '#06b6d4' },
                  { key: 'tier3', color: '#8b5cf6' }
                ].map((tier, gIdx) => {
                  const data = (portfolioClients as any)[tier.key];
                  return (
                    <div key={gIdx} className="space-y-6">
                      <div className="relative h-64 rounded-3xl overflow-hidden glass-panel border border-white/10 mb-8 group">
                        <img src={data.image} alt={data.label} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                        <div className="absolute bottom-6 left-6">
                           <p className="text-[10px] font-black uppercase tracking-widest text-[#10b981]">{data.label}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {data.clients.map((client: string, cIdx: number) => (
                          <motion.div 
                            key={cIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: cIdx * 0.02 + gIdx * 0.1 }}
                            className="p-4 glass-panel rounded-xl border border-white/5 hover:border-white/20 transition-all group flex items-center justify-between"
                          >
                            <span className="text-zinc-400 group-hover:text-white font-bold transition-colors">{client}</span>
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
              <div className="grid lg:grid-cols-2 gap-20">
                <div className="flex flex-col justify-center">
                  <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Operational HQ</span>
                  <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.8]">Let's <br/><span className="text-white/20">Forge</span></h1>
                  <div className="space-y-12">
                    <div className="glass-panel p-8 rounded-3xl border border-white/5">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#10b981] mb-4">India Hub</h4>
                      <p className="text-2xl font-black leading-tight text-white mb-1">Bantwal Chambers, Baikampady</p>
                      <p className="text-lg text-zinc-500 font-bold mb-4">Mangalore, Karnataka 575011</p>
                      <a href="tel:+917259830339" className="text-xl font-bold text-zinc-300 hover:text-white">+91 72598 30339</a>
                    </div>
                    <div className="glass-panel p-8 rounded-3xl border border-white/5">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#06b6d4] mb-4">KSA Relay</h4>
                      <p className="text-2xl font-black leading-tight text-white mb-4">Regional Digital Lead</p>
                      <a href="tel:+966575271327" className="text-xl font-bold text-zinc-300 hover:text-white">+966 57 527 1327</a>
                    </div>
                  </div>
                </div>
                
                <div className="glass-panel p-12 rounded-[4rem] border border-white/5 relative bg-gradient-to-br from-white/[0.02] to-transparent">
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-10">Transmission Forge</h3>
                  <div className="space-y-10">
                    <p className="text-zinc-400 font-medium">Ready to scale? Click below to launch our priority enquiry forge and connect with our sales engineers.</p>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="w-full py-7 bg-[#10b981] text-black font-black uppercase tracking-widest rounded-3xl hover:bg-white transition-all shadow-[0_0_50px_rgba(16,185,129,0.3)] text-xl"
                    >
                      Start Project Enquiry
                    </button>
                    <div className="pt-10 border-t border-white/5">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4">Neural Relay Channels</h4>
                      <div className="flex flex-col gap-3 font-bold">
                        <a href="mailto:sayhello@bycomsolutions.com" className="hover:text-[#10b981] transition-colors">sayhello@bycomsolutions.com</a>
                        <a href="mailto:sales@bycomsolutions.com" className="hover:text-[#10b981] transition-colors">sales@bycomsolutions.com</a>
                        <a href="mailto:support@bycomsolutions.com" className="hover:text-purple-400 transition-colors">support@bycomsolutions.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return <Hero />;
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
