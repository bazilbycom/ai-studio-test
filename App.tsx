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

const portfolioClients = {
  tier1: {
    id: "SEC-ALPHA",
    label: "Global Platforms",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
    color: "from-[#10b981] to-[#34d399]",
    clients: ["Obcbook", "Lesalonais", "HomeMaids", "Aventura Indica", "Back Benchers", "TripAdvisor", "Little's and Big's", "Infodifesa", "Srinivas University", "House of coupons", "o2oviet.com", "Markitcafe", "Fitnessmentor.dk", "ARCI", "Poikilingo", "Clashmentor", "nishtry.com", "mobolarynetwork.com", "BridgeVIPnetwork.com", "varthaloka.com"]
  },
  tier2: {
    id: "SEC-BETA",
    label: "Real Estate & Commerce",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600",
    color: "from-[#06b6d4] to-[#22d3ee]",
    clients: ["yamunaashacity.com", "someshwarvista.com", "proplinks.co.in", "essencecarryzen.com", "dandeliadventures.co", "dandeliouting.in", "tharkistaan.xyz", "myadda.in", "maniththakur.design", "brochya", "Female Mixtapes", "Beporsam", "Bearyvarthe", "Justkudla", "Asdev mobile", "IJIM Pay Bank", "DariNews USA", "DariNews Turkey", "SwoBook", "Zegmart"]
  },
  tier3: {
    id: "SEC-GAMMA",
    label: "Network & Infrastructure",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=600",
    color: "from-[#8b5cf6] to-[#a78bfa]",
    clients: ["milleegram.com", "VajraRealities.com", "Bikerscafesalem.com", "scenolabevents.com", "UnitedVPN", "FastFree VPN", "VersaPro", "Bycom VPN", "Suraksha VPN", "Byvarsi Stickers", "insyapp.com", "connexsta.com", "groceradda", "recipetree.app", "achefacilceara", "Fepeople.com", "Datoo.xyz", "IndicaSurfSchool.com", "Oddboii", "spacefather.com"]
  }
};

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
            
            <section className="h-screen max-h-[900px] flex flex-col items-center justify-center bg-black relative overflow-hidden py-8">
               <div className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-8 h-full justify-center">
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="w-full glass-panel rounded-[3rem] overflow-hidden aspect-[21/9] md:aspect-[21/8] relative border border-white/5 shadow-[0_0_80px_rgba(16,185,129,0.1)]"
                 >
                   <motion.img 
                     src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" 
                     alt="Beyond Computing Global View" 
                     className="w-full h-full object-cover"
                     animate={{ 
                       filter: ["grayscale(100%) opacity(0.2)", "grayscale(0%) opacity(0.7)", "grayscale(100%) opacity(0.2)"],
                     }}
                     transition={{ 
                       duration: 1.5, 
                       repeat: Infinity, 
                       repeatType: "reverse",
                       ease: "easeInOut"
                     }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent"></div>
                   <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                     <div className="grid md:grid-cols-3 gap-8 items-end">
                       <div className="text-left">
                         <span className="text-[#10b981] font-black text-[9px] uppercase tracking-[0.6em] mb-2 block">Engine Hubs</span>
                         <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Global <br/>Nodes</h3>
                         <div className="flex items-center gap-3 mt-3">
                           <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></div>
                           <span className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">Neural Link: Synchronized</span>
                         </div>
                       </div>
                       <div className="text-left border-l border-white/10 pl-8 hidden md:block">
                         <span className="text-purple-400 font-black text-[9px] uppercase tracking-[0.6em] mb-2 block">Speed Protocol</span>
                         <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-none">&lt; 20ms</h3>
                         <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mt-1">Edge Deployment Latency</p>
                       </div>
                       <div className="text-left border-l border-white/10 pl-8 hidden md:block">
                         <span className="text-cyan-400 font-black text-[9px] uppercase tracking-[0.6em] mb-2 block">Legacy Apex</span>
                         <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-none">08 Years</h3>
                         <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mt-1">Deep Engineering Mastery</p>
                       </div>
                     </div>
                   </div>
                 </motion.div>

                 <div className="w-full border-y border-white/5 bg-white/5 rounded-2xl py-8 overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center gap-10 md:gap-24 mx-8 md:mx-20">
                          <span className="text-xl md:text-3xl font-black text-white/20 uppercase tracking-tighter">Bycom Logic Unit</span>
                          <span className="w-2 h-2 bg-[#10b981] rounded-full shadow-[0_0_10px_#10b981]"></span>
                          <span className="text-xl md:text-3xl font-black text-white/20 uppercase tracking-tighter">Extreme Performance</span>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </section>

            <Services />
            <Process />
            <AIArchitect />
            
            {/* Condensed Global Archive Homepage Section */}
            <section className="py-24 px-6 bg-[#080808] border-t border-white/5 relative overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
                  <div className="max-w-xl">
                    <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Fleet Summary</span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.8]">Global <span className="text-white/10">Archive</span></h2>
                    <p className="text-zinc-500 text-lg font-medium max-w-sm">80+ deployments powered by Bycom. Exploring the next frontier of digital high-performance.</p>
                  </div>
                  <button onClick={() => window.location.hash = 'portfolio'} className="group px-8 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 hover:bg-white hover:text-black transition-all">
                    <span className="text-[10px] font-black uppercase tracking-widest">Explore Full Matrix</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {Object.entries(portfolioClients).map(([key, data]) => (
                    <motion.div 
                      key={key}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`glass-panel p-1 rounded-[2.5rem] bg-gradient-to-br ${data.color} opacity-90 group relative overflow-hidden h-48`}
                    >
                      <div className="bg-black w-full h-full rounded-[2.4rem] p-8 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                           <div className="text-6xl font-black text-white">{data.id.split('-')[1]}</div>
                        </div>
                        <div>
                          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mb-1 block">Sector Alpha-01</span>
                          <h3 className="text-xl font-black uppercase tracking-tighter text-white">{data.label}</h3>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-zinc-400 italic">{data.clients.length} Active Nodes</span>
                          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
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
          <motion.div key="portfolio" {...pageTransition} className="pt-40 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-20">
                 <span className="text-[#10b981] font-black uppercase tracking-[0.6em] text-[10px] mb-6 block">Deployment Matrix</span>
                 <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-4">Complete <br/><span className="text-white/20">Archive</span></h1>
               </div>
               
               <div className="grid md:grid-cols-3 gap-8">
                  {Object.entries(portfolioClients).map(([key, data]) => (
                    <motion.div 
                      key={key}
                      className="glass-panel rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col h-[700px] relative"
                    >
                      <div className="relative h-44 flex-shrink-0">
                        <img src={data.image} alt={data.label} className="w-full h-full object-cover grayscale opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="absolute bottom-6 left-8">
                          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500 block mb-1">{data.id}</span>
                          <h2 className="text-2xl font-black uppercase tracking-tighter">{data.label}</h2>
                        </div>
                      </div>
                      <div className="flex-1 overflow-y-auto p-8 scrollbar-hide space-y-3">
                        {data.clients.map((client, i) => (
                          <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                            <span className="text-xs font-bold text-zinc-400">{client}</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
            </div>
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div key="contact" {...pageTransition} className="pt-40 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-24">
                <div className="flex flex-col justify-center">
                  <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Regional Hubs</span>
                  <h1 className="text-7xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.8]">Let's <br/><span className="text-white/20">Forge</span></h1>
                  <div className="space-y-10">
                    <div className="glass-panel p-10 rounded-3xl border border-white/5">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#10b981]">India Node</h4>
                        <span className="text-2xl">🇮🇳</span>
                      </div>
                      <p className="text-3xl font-black text-white mb-2">Bantwal Chambers</p>
                      <p className="text-lg text-zinc-500 font-bold italic tracking-tight">Mangalore, KA 575011</p>
                    </div>
                    <div className="glass-panel p-10 rounded-3xl border border-white/5">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#06b6d4]">KSA Node</h4>
                        <span className="text-2xl">🇸🇦</span>
                      </div>
                      <p className="text-3xl font-black text-white mb-2">Tahliyah St, Riyadh</p>
                      <p className="text-lg text-zinc-500 font-bold italic tracking-tight">Al Aqiq 13515</p>
                    </div>
                  </div>
                </div>
                <div className="glass-panel p-16 rounded-[4rem] border border-white/10 flex flex-col items-center justify-center text-center">
                  <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">Initiate <br/>Protocol</h3>
                  <p className="text-zinc-400 font-medium text-xl mb-12 max-w-sm leading-relaxed">Ready to deploy your next high-performance asset?</p>
                  <button onClick={() => setIsModalOpen(true)} className="w-full max-w-sm py-6 bg-[#10b981] text-black font-black uppercase tracking-[0.3em] rounded-3xl hover:bg-white transition-all text-xl">Start Mission</button>
                  <div className="mt-12 pt-10 border-t border-white/5 w-full">
                    <p className="font-black text-xl text-zinc-500 italic">sayhello [at] bycomsolutions.com</p>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(16,185,129,0.08),transparent_40%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.04]"></div>
      </div>
    </div>
  );
};

export default App;