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
      duration: Math.random() * 1.5 + 1, 
      repeat: Infinity, 
      repeatDelay: Math.random() * 8 + 3,
      ease: "linear"
    }}
    className="absolute w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#10b981] to-transparent z-0 rotate-[-25deg]"
    style={{ 
      top: `${Math.random() * 60}%`, 
      left: `${Math.random() * 10}%` 
    }}
  />
);

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden h-screen w-full px-4 md:px-6">
      {/* Cinematic Motion Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => <ShootingStar key={i} />)}
        
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#10b981]/20 rounded-full blur-[180px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[200px]"
        />
      </div>

      <div className="max-w-7xl relative z-10 w-full flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#10b981]/20 glass-panel mb-8 text-[10px] md:text-[12px] font-black tracking-[0.4em] uppercase text-[#10b981]"
        >
          <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse shadow-[0_0_12px_#10b981]"></span>
          Engineering Peak Performance
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[14vw] sm:text-7xl md:text-8xl lg:text-[clamp(4rem,9.5vw,11rem)] font-black mb-8 leading-[0.85] tracking-tighter uppercase text-center"
        >
          {/* Mobile View: 3 Lines */}
          <span className="md:hidden block">
            <motion.span initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="block">Build</motion.span>
            <motion.span initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }} className="block text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#06b6d4] text-glow py-2">Beyond</motion.span>
            <motion.span initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="block">Limits</motion.span>
          </span>
          
          {/* Desktop View: Guaranteed 1 Line */}
          <span className="hidden md:inline-block whitespace-nowrap overflow-visible">
            <motion.span
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            >
              Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#06b6d4] text-glow px-2">Beyond</span> Limits
            </motion.span>
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Bycom Solutions constructs <span className="text-white font-bold">ultra-performant</span> digital infrastructure for global leaders.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={onOpenModal}
            className="w-full sm:w-auto px-12 py-5 bg-[#10b981] text-black font-black uppercase tracking-[0.25em] rounded-2xl hover:bg-white hover:scale-105 transition-all shadow-2xl text-xs"
          >
            Start Mission
          </button>
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-12 py-5 border border-white/10 glass-panel font-black uppercase tracking-[0.25em] rounded-2xl hover:border-[#10b981] transition-all text-xs"
          >
            Archive Access
          </a>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500">Discover Nodes</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#10b981] to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;