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
            
            <section className="h-screen max-h-[850px] flex flex-col items-center justify-center bg-black relative overflow-hidden py-4">
               <div className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-6 h-full justify-center">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.98 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="w-full glass-panel rounded-[3rem] overflow-hidden aspect-[21/9] md:aspect-[21/8] relative border border-white/5 shadow-[0_0_80px_rgba(16,185,129,0.1)]"
                 >
                   <motion.img 
                     src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" 
                     alt="Global Engineering Nodes" 
                     className="w-full h-full object-cover"
                     animate={{ 
                       filter: ["grayscale(100%) opacity(0.1)", "grayscale(0%) opacity(0.6)", "grayscale(100%) opacity(0.1)"],
                     }}
                     transition={{ 
                       duration: 1.5, 
                       repeat: Infinity, 
                       repeatType: "reverse",
                       ease: "easeInOut"
                     }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                   <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-end">
                     <div className="grid md:grid-cols-3 gap-10 items-end">
                       <div className="text-left">
                         <span className="text-[#10b981] font-black text-[9px] uppercase tracking-[0.6em] mb-3 block">Network Nodes</span>
                         <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Global <br/>Status</h3>
                         <div className="flex items-center gap-3 mt-4">
                           <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></div>
                           <span className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">Systems: Operational</span>
                         </div>
                       </div>
                       <div className="text-left border-l border-white/10 pl-10 hidden md:block">
                         <span className="text-purple-400 font-black text-[9px] uppercase tracking-[0.6em] mb-3 block">Performance</span>
                         <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-none">&lt; 15ms</h3>
                         <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mt-2">Avg. Response Time</p>
                       </div>
                       <div className="text-left border-l border-white/10 pl-10 hidden md:block">
                         <span className="text-cyan-400 font-black text-[9px] uppercase tracking-[0.6em] mb-3 block">Integrations</span>
                         <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-none">450+</h3>
                         <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mt-2">Successful Uplinks</p>
                       </div>
                     </div>
                   </div>
                 </motion.div>

                 <div className="w-full border-y border-white/5 bg-white/[0.02] rounded-3xl py-10 overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12 md:gap-24 mx-8 md:mx-20">
                          <span className="text-xl md:text-2xl font-black text-white/10 uppercase tracking-tighter">Bycom Solutions Lab</span>
                          <span className="w-2 h-2 bg-[#10b981] rounded-full opacity-40"></span>
                          <span className="text-xl md:text-2xl font-black text-white/10 uppercase tracking-tighter">Scale Beyond limits</span>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </section>

            <Services />
            <Process />
            
            {/* Core Capabilities - Replaces Global Archive on Home */}
            <section className="py-32 px-6 bg-[#030303] border-t border-white/5 relative overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                  <span className="text-[#10b981] font-black uppercase tracking-[0.6em] text-[10px] mb-6 block">Strategic Units</span>
                  <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">Core <br/><span className="text-white/10">Specializations</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { title: "Fintech Engines", desc: "High-frequency trading platforms and secure banking middleware.", icon: "🏦" },
                    { title: "AI Integration", desc: "LLM fine-tuning and proprietary neural layers for automation.", icon: "🧠" },
                    { title: "Scale SaaS", desc: "Multi-tenant cloud architectures for global software distribution.", icon: "☁️" },
                    { title: "UX Engineering", desc: "Extreme-performance interfaces with sub-millisecond interactivity.", icon: "✨" }
                  ].map((unit, i) => (
                    <div key={i} className="glass-panel p-10 rounded-[2.5rem] border border-white/5 hover:border-[#10b981]/20 transition-all duration-500 group">
                      <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500">{unit.icon}</div>
                      <h3 className="text-xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-[#10b981] transition-colors">{unit.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed font-medium">{unit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <AIArchitect />
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
                  
                  {/* Address Section Exclusively on Contact Page */}
                  <div className="space-y-10">
                    <div className="glass-panel p-10 rounded-[2.5rem] border border-white/5 relative group overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 text-4xl opacity-20">🇮🇳</div>
                      <div className="relative z-10">
                        <span className="text-[9px] font-black uppercase tracking-widest text-[#10b981] mb-4 block">India Node</span>
                        <p className="font-black text-2xl text-white mb-2">Bantwal Chambers</p>
                        <p className="text-zinc-500 font-bold italic text-sm tracking-tight mb-6">Mangalore, KA 575011</p>
                        <div className="flex items-center gap-4">
                           <div className="px-5 py-2.5 bg-white/5 rounded-xl border border-white/10 text-[11px] font-black">+91 72598 30339</div>
                        </div>
                      </div>
                    </div>
                    <div className="glass-panel p-10 rounded-[2.5rem] border border-white/5 relative group overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 text-4xl opacity-20">🇸🇦</div>
                      <div className="relative z-10">
                        <span className="text-[9px] font-black uppercase tracking-widest text-[#06b6d4] mb-4 block">KSA Node</span>
                        <p className="font-black text-2xl text-white mb-2">Tahliyah St, Riyadh</p>
                        <p className="text-zinc-500 font-bold italic text-sm tracking-tight mb-6">Al Aqiq 13515</p>
                        <div className="flex items-center gap-4">
                           <div className="px-5 py-2.5 bg-white/5 rounded-xl border border-white/10 text-[11px] font-black">+966 57 527 1327</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-panel p-16 rounded-[4rem] border border-white/10 flex flex-col items-center justify-center text-center">
                  <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">Initiate <br/>Protocol</h3>
                  <p className="text-zinc-400 font-medium text-xl mb-12 max-w-sm leading-relaxed">Ready to deploy your next high-performance asset?</p>
                  <button onClick={() => setIsModalOpen(true)} className="w-full max-w-sm py-6 bg-[#10b981] text-black font-black uppercase tracking-[0.3em] rounded-3xl hover:bg-white transition-all text-xl shadow-2xl">Start Transmission</button>
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
      
      {/* Background Optimized for performance */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(16,185,129,0.04),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]"></div>
      </div>
    </div>
  );
};

export default App;