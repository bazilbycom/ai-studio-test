import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import GlobalNetwork from './components/GlobalNetwork'; // New Import
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
  const stars = useMemo(() => [...Array(15)].map((_, i) => ({
    id: i,
    delay: Math.random() * 10,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: 2 + Math.random() * 3
  })), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#020202]">
      {/* Intense iOS style dynamic blobs */}
      <motion.div 
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.2, 1],
          x: ['-10%', '10%', '-10%'],
          y: ['-5%', '5%', '-5%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-emerald-500/10 blur-[120px]"
      />
      <motion.div 
        animate={{ 
          opacity: [0.03, 0.08, 0.03],
          scale: [1.2, 1, 1.2],
          x: ['10%', '-10%', '10%'],
          y: ['5%', '-5%', '5%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[120px]"
      />
      
      {/* Shooting Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ x: "-100%", y: "-100%", opacity: 0 }}
          animate={{ 
            x: ["0%", "400%"], 
            y: ["0%", "300%"],
            opacity: [0, 1, 0] 
          }}
          transition={{ 
            duration: star.duration, 
            repeat: Infinity, 
            repeatDelay: Math.random() * 8 + 4,
            delay: star.delay,
            ease: "linear"
          }}
          className="absolute w-[250px] h-[1px] bg-gradient-to-r from-transparent via-[#10b981]/60 to-transparent rotate-[-35deg]"
          style={{ top: star.top, left: star.left }}
        />
      ))}
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
    
    if (hash && !hash.includes('/')) {
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
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

  const pageTransition = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
  };

  const renderHomeContent = () => (
    <>
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Services />
      <GlobalNetwork />
      <Portfolio />
      <Process />
      <AIArchitect />
    </>
  );

  return (
    <div className="relative min-h-screen selection:bg-[#10b981] selection:text-black bg-[#020202] text-white overflow-x-hidden">
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
                <div className="grid lg:grid-cols-2 gap-24">
                  <div className="flex flex-col justify-center text-left">
                    <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block text-glow">Engineering Hubs</span>
                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-12 leading-none text-white">Global Nodes</h1>
                    <div className="space-y-6">
                      <div className="glass-panel p-8 rounded-[2rem] border border-white/10 bg-gradient-to-r from-emerald-500/5 to-transparent">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#10b981] mb-2 block">Region: India</span>
                        <p className="font-black text-2xl text-white">Bantwal Chambers, Mangalore</p>
                        <div className="mt-4 px-4 py-2 bg-white/5 rounded-xl border border-white/10 inline-block text-[12px] font-black">+91 72598 30339</div>
                      </div>
                      <div className="glass-panel p-8 rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/5 to-transparent">
                        <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-2 block">Region: Saudi Arabia</span>
                        <p className="font-black text-2xl text-white">Tahliyah St, Riyadh</p>
                        <div className="mt-4 px-4 py-2 bg-white/5 rounded-xl border border-white/10 inline-block text-[12px] font-black">+966 57 527 1327</div>
                      </div>
                    </div>
                  </div>
                  <div className="glass-panel p-12 md:p-16 rounded-[3.5rem] flex flex-col items-center justify-center text-center shadow-2xl">
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Mission Intake</h3>
                    <p className="text-zinc-400 font-bold text-lg mb-10 max-w-sm">Initiate project deployment protocols via our intake node.</p>
                    <button onClick={() => setIsModalOpen(true)} className="w-full max-w-sm py-6 bg-[#10b981] text-black font-black uppercase tracking-[0.4em] rounded-3xl hover:bg-white hover:scale-105 transition-all shadow-[0_15px_40px_rgba(16,185,129,0.3)]">Deploy Query</button>
                    <p className="mt-12 font-black text-xl text-zinc-500 italic">sayhello@bycomsolutions.com</p>
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