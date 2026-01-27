import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-4 md:px-6 flex flex-col items-center text-center overflow-hidden min-h-screen">
      {/* Dynamic Background Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-24 w-96 h-96 bg-[#10b981]/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -150, 0], 
            y: [0, 100, 0],
            scale: [1, 1.3, 1] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-24 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-7xl relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#10b981]/20 glass-panel mb-12 text-[10px] md:text-[12px] font-black tracking-[0.3em] uppercase text-[#10b981] shadow-[0_0_30px_rgba(16,185,129,0.15)]"
        >
          <span className="w-2 h-2 bg-[#10b981] rounded-full animate-ping"></span>
          Engineering Peak Performance
        </motion.div>
        
        {/* Responsive Heading: 1 Line Desktop, 3 Lines Mobile */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[15vw] sm:text-7xl md:text-8xl lg:text-[clamp(4rem,9.5vw,11rem)] font-black mb-10 leading-[0.85] tracking-tighter uppercase"
        >
          <span className="md:hidden">
            <motion.span 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              Build
            </motion.span>
            <motion.span 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#06b6d4] text-glow py-2"
            >
              Beyond
            </motion.span>
            <motion.span 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="block"
            >
              Limits
            </motion.span>
          </span>
          <span className="hidden md:block">
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#06b6d4] text-glow">Beyond</span> Limits
            </motion.span>
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-2xl text-zinc-400 mb-16 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Bycom Solutions constructs <span className="text-white font-bold border-b-2 border-[#10b981]/50">ultra-performant</span> digital infrastructure for the next generation of global industry leaders.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={onOpenModal}
            className="w-full sm:w-auto px-12 py-5 bg-[#10b981] text-black font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:scale-105 transition-all shadow-[0_20px_50px_rgba(16,185,129,0.3)] text-sm"
          >
            Start Mission
          </button>
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-12 py-5 border border-white/10 glass-panel font-black uppercase tracking-[0.2em] rounded-2xl hover:border-[#10b981] transition-all text-sm"
          >
            Archive Access
          </a>
        </motion.div>

        {/* Revived Earth Metrics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-32 w-full max-w-7xl glass-panel rounded-[3rem] overflow-hidden aspect-[21/9] relative group border border-white/5 shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" 
            alt="Beyond Computing Global View" 
            className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent"></div>
          
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-end">
              <div className="text-left">
                <span className="text-[#10b981] font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Engine Hubs</span>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-2">Global <br/>Nodes</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                  <span className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">Active Status: 100%</span>
                </div>
              </div>

              <div className="text-left border-l border-white/10 pl-8">
                <span className="text-purple-400 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Speed Protocol</span>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-2">&lt; 20ms</h3>
                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Global Edge Response</p>
              </div>

              <div className="text-left border-l border-white/10 pl-8">
                <span className="text-cyan-400 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Experience Apex</span>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-2">08 Years</h3>
                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Engineering Mastery</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;