import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenModal: () => void;
}

const ShootingStar = ({ delay, top, left }: { delay: number, top: string, left: string }) => (
  <motion.div
    initial={{ x: "-100%", y: "0%", opacity: 0 }}
    animate={{ 
      x: ["0%", "300%"], 
      y: ["0%", "200%"],
      opacity: [0, 1, 0] 
    }}
    transition={{ 
      duration: 2.5, 
      repeat: Infinity, 
      repeatDelay: Math.random() * 4 + 2,
      delay,
      ease: "linear"
    }}
    className="absolute w-[220px] h-[1px] bg-gradient-to-r from-transparent via-[#10b981] to-transparent z-0 rotate-[-25deg]"
    style={{ top, left }}
  />
);

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden h-screen w-full px-6 md:px-12">
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <ShootingStar delay={0} top="15%" left="5%" />
        <ShootingStar delay={1} top="40%" left="10%" />
        <ShootingStar delay={3} top="65%" left="2%" />
        <ShootingStar delay={5} top="30%" left="15%" />
        <ShootingStar delay={7} top="80%" left="8%" />
        
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#10b981]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl relative z-10 w-full flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#10b981]/20 glass-panel mt-24 mb-10 text-[10px] md:text-[12px] font-black tracking-[0.4em] uppercase text-[#10b981]"
        >
          <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse shadow-[0_0_12px_#10b981]"></span>
          Engineering Peak Performance
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[14vw] sm:text-7xl md:text-8xl lg:text-[clamp(4.5rem,10vw,12rem)] font-black mb-8 leading-[0.85] tracking-tighter uppercase text-center w-full"
        >
          <span className="md:hidden block">
            <span className="block">Build</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#06b6d4] text-glow py-2">Beyond</span>
            <span className="block">Limits</span>
          </span>
          <span className="hidden md:inline-block whitespace-nowrap">
            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#06b6d4] text-glow px-3">Beyond</span> Limits
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-sm sm:text-lg md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium px-4"
        >
          Bycom Solutions constructs <span className="text-white font-bold">ultra-performant</span> digital infrastructure and AI ecosystems for industry leaders.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-[280px] sm:max-w-none"
        >
          <button 
            onClick={onOpenModal}
            className="w-full sm:w-auto px-10 py-4 md:px-14 md:py-5 bg-[#10b981] text-black font-black uppercase tracking-[0.25em] rounded-2xl hover:bg-white hover:scale-105 transition-all shadow-2xl text-[10px] md:text-[11px]"
          >
            Consult Architect
          </button>
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-10 py-4 md:px-14 md:py-5 border border-white/10 glass-panel font-black uppercase tracking-[0.25em] rounded-2xl hover:border-[#10b981] transition-all text-[10px] md:text-[11px]"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30"
      >
        <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Discover Matrix</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#10b981] to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;