import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-4 md:px-6 flex flex-col items-center text-center overflow-hidden">
      <div className="max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#10b981]/20 glass-panel mb-12 text-[10px] md:text-[12px] font-black tracking-[0.3em] uppercase text-[#10b981] shadow-[0_0_30px_rgba(16,185,129,0.15)]"
        >
          <span className="w-2 h-2 bg-[#10b981] rounded-full animate-ping"></span>
          Engineering Peak Performance
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[15vw] sm:text-7xl md:text-8xl lg:text-[clamp(4rem,12vw,10rem)] font-black mb-10 leading-[0.8] tracking-tighter uppercase"
        >
          <motion.span 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="block"
          >
            Build
          </motion.span>
          <motion.span 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#06b6d4] text-glow"
          >
            Beyond
          </motion.span>
          <motion.span 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="block"
          >
            Limits
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-2xl text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Bycom Solutions constructs <span className="text-white font-bold border-b-2 border-[#10b981]">ultra-performant</span> digital infrastructure for the next generation of global industry.
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
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 100 }}
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
        <div className="absolute bottom-12 left-12 text-left">
          <span className="text-[#10b981] font-black text-xs uppercase tracking-[0.5em] mb-4 block">System Metrics</span>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Global <br/>Edge Nodes</h3>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;