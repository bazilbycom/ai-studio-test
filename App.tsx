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
  const stars = useMemo(() => [...Array(10)].map((_, i) => ({
    id: i,
    delay: Math.random() * 20,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: 3 + Math.random() * 2
  })), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050507]">
      {/* Decorative Blobs - Fixed 'Blurred objects on top' by using explicit z-index and reduced opacity */}
      <motion.div 
        animate={{ 
          opacity: [0.03, 0.06, 0.03],
          scale: [1, 1.05, 1],
          x: ['-2%', '2%', '-2%'],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] rounded-full bg-emerald-500/10 blur-[100px] z-[-2] background-blob"
      />
      <motion.div 
        animate={{ 
          opacity: [0.02, 0.04, 0.02],
          scale: [1.05, 1, 1.05],
          x: ['2%', '-2%', '2%'],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[100px] z-[-2] background-blob"
      />

      {/* Optimized Shooting Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ x: "-50%", y: "-50%", opacity: 0 }}
          animate={{ 
            x: ["0%", "200%"], 
            y: ["0%", "150%"],
            opacity: [0, 0.8, 0] 
          }}
          transition={{ 
            duration: star.duration, 
            repeat: Infinity, 
            repeatDelay: Math.random() * 15 + 5,
            delay: star.delay,
            ease: "linear"
          }}
          className="absolute w-[180px] h-[1px] bg-gradient-to-r from-transparent via-[#10b981]/50 to-transparent z-[-1] rotate-[-30deg]"
          style={{ top: star.top, left: star.left }}
        />
      ))}

      {/* Subtle Scanlines / Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] z-[-1]" />
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
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  const renderHomeContent = () => (
    <>
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Services />
      <Portfolio />
      <Process />
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
                <div className="grid lg:grid-cols-2 gap-24">
                  <div className="flex flex-col justify-center text-left">
                    <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block text-glow">Regional Hubs</span>
                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-12 leading-none text-white">Global Presence</h1>
                    <div className="space-y-8">
                      <div className="glass-panel p-10 rounded-[2.5rem] border border-white/10 relative group bg-gradient-to-r from-emerald-500/5 to-transparent">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#10b981] mb-4 block">India Node</span>
                        <p className="font-black text-2xl text-white">Bantwal Chambers</p>
                        <p className="text-zinc-400 font-bold italic text-sm mb-6">Mangalore, KA 575011</p>
                        <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 inline-block text-[12px] font-black text-white shadow-inner">+91 72598 30339</div>
                      </div>
                      <div className="glass-panel p-10 rounded-[2.5rem] border border-white/10 relative group bg-gradient-to-r from-cyan-500/5 to-transparent">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#06b6d4] mb-4 block">KSA Node</span>
                        <p className="font-black text-2xl text-white">Tahliyah St, Riyadh</p>
                        <p className="text-zinc-400 font-bold italic text-sm mb-6">Al Aqiq 13515</p>
                        <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 inline-block text-[12px] font-black text-white shadow-inner">+966 57 527 1327</div>
                      </div>
                    </div>
                  </div>
                  <div className="glass-panel p-12 md:p-20 rounded-[4rem] border border-white/10 flex flex-col items-center justify-center text-center bg-gradient-to-b from-white/[0.03] to-transparent shadow-2xl">
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 text-white">Project Enquiry</h3>
                    <p className="text-zinc-300 font-bold text-xl mb-12 max-w-sm leading-relaxed">Ready to deploy your next high-performance asset?</p>
                    <button onClick={() => setIsModalOpen(true)} className="w-full max-w-sm py-6 bg-[#10b981] text-black font-black uppercase tracking-[0.4em] rounded-3xl hover:bg-white hover:scale-105 active:scale-95 transition-all text-xl shadow-[0_20px_60px_rgba(16,185,129,0.3)]">Submit Enquiry</button>
                    <div className="mt-16 pt-12 border-t border-white/10 w-full text-center">
                      <p className="font-black text-2xl text-white tracking-tighter italic">sayhello@bycomsolutions.com</p>
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