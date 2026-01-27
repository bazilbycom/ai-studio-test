import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenModal: () => void;
}

const ShootingStar = () => (
  <motion.div
    initial={{ x: "-100%", y: "0%", opacity: 0 }}
    animate={{ 
      x: ["0%", "250%"], 
      y: ["0%", "150%"],
      opacity: [0, 1, 0] 
    }}
    transition={{ 
      duration: 2, 
      repeat: Infinity, 
      repeatDelay: 5,
      ease: "linear"
    }}
    className="absolute w-[180px] h-[1px] bg-gradient-to-r from-transparent via-[#10b981] to-transparent z-0 rotate-[-25deg]"
    style={{ 
      top: `${Math.random() * 50}%`, 
      left: `${Math.random() * 5}%` 
    }}
  />
);

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden h-screen w-full px-6 md:px-12">
      {/* Optimized Background Layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(4)].map((_, i) => <ShootingStar key={i} />)}
        
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#10b981]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl relative z-10 w-full flex flex-col items-center justify-center text-center">
        {/* Added significant top margin to avoid navbar overlap */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#10b981]/20 glass-panel mt-20 mb-12 text-[10px] md:text-[12px] font-black tracking-[0.4em] uppercase text-[#10b981]"
        >
          <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse shadow-[0_0_12px_#10b981]"></span>
          Engineering Peak Performance
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[14vw] sm:text-7xl md:text-8xl lg:text-[clamp(4.5rem,10vw,12rem)] font-black mb-10 leading-[0.85] tracking-tighter uppercase text-center w-full"
        >
          {/* Mobile View */}
          <span className="md:hidden block">
            <span className="block">Build</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#06b6d4] text-glow py-2">Beyond</span>
            <span className="block">Limits</span>
          </span>
          
          {/* Desktop View */}
          <span className="hidden md:inline-block whitespace-nowrap">
            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#06b6d4] text-glow px-3">Beyond</span> Limits
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl text-zinc-400 mb-14 max-w-3xl mx-auto leading-relaxed font-medium px-4"
        >
          Bycom Solutions constructs <span className="text-white font-bold">ultra-performant</span> digital infrastructure and AI ecosystems for industry leaders.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md sm:max-w-none"
        >
          <button 
            onClick={onOpenModal}
            className="w-full sm:w-auto px-14 py-5 bg-[#10b981] text-black font-black uppercase tracking-[0.25em] rounded-2xl hover:bg-white hover:scale-105 transition-all shadow-2xl text-[11px]"
          >
            Consult Architect
          </button>
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-14 py-5 border border-white/10 glass-panel font-black uppercase tracking-[0.25em] rounded-2xl hover:border-[#10b981] transition-all text-[11px]"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30"
      >
        <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Discover Matrix</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#10b981] to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;