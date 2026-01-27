
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIArchitect from './components/AIArchitect';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  useEffect(() => {
    // Fix: Use arrow function and anchor reference instead of 'this' to avoid TS error
    const handleAnchorClick = (e: MouseEvent, anchor: Element) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href')?.substring(1);
      const element = document.getElementById(targetId || '');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (e) => handleAnchorClick(e as MouseEvent, anchor));
    });

    // Cursor tracking for the radial glow effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        
        {/* Statistics Ticker */}
        <div className="border-y border-white/5 bg-black py-8 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 mx-12">
                <span className="text-2xl font-black text-white/20 uppercase tracking-tighter">150+ Success Projects</span>
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <span className="text-2xl font-black text-white/20 uppercase tracking-tighter">AI Integrated Solutions</span>
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-2xl font-black text-white/20 uppercase tracking-tighter">Global Enterprise Reach</span>
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              </div>
            ))}
          </div>
        </div>

        <Services />
        <AIArchitect />

        {/* Portfolio Preview Section */}
        <section id="portfolio" className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Latest <span className="text-cyan-400">Deployments</span></h2>
              <p className="text-zinc-500 max-w-lg">A quick look at our most recent breakthroughs in digital engineering.</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-3xl overflow-hidden glass-panel aspect-[4/5] border border-white/10"
                >
                  <img 
                    src={`https://picsum.photos/seed/project${i}/600/800`} 
                    alt="Project" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="text-cyan-400 font-bold text-[10px] uppercase tracking-widest mb-2 block">Enterprise</span>
                    <h3 className="text-xl font-bold uppercase mb-4">Project {i === 1 ? 'Aurora' : i === 2 ? 'Vector' : 'Nebula'}</h3>
                    <div className="w-0 group-hover:w-full h-0.5 bg-cyan-500 transition-all duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border border-white/10 hover:bg-white text-white hover:text-black transition-all font-bold uppercase tracking-widest text-xs"
              >
                Explore All Works
              </motion.button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto glass-panel rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden border border-white/10"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 z-0"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-tight">Ready to <br/><span className="text-cyan-400">evolve?</span></h2>
              <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
                Join 100+ industry leaders who have scaled their operations with Bycom Solutions.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6,182,212,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white text-black font-black uppercase tracking-wider rounded-2xl hover:bg-cyan-400 transition-all text-xl"
              >
                Start a conversation
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
      
      {/* Dynamic Cursor Shadow */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(6,182,212,0.12),transparent_45%)]"
        ></div>
      </div>
    </div>
  );
};

export default App;
