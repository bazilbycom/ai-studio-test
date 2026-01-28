import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  onOpenModal: () => void;
}

const spintax = [
  "Engineering Peak Performance",
  "Beyond Computing Limits",
  "Constructing Digital Excellence",
  "Architecting Future Systems",
  "Hyper-Scale Infrastructure",
  "Sub-ms Latency Engineering"
];

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % spintax.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex items-center justify-center h-[90vh] md:h-screen w-full px-6 bg-transparent">
      <div className="max-w-6xl relative z-10 w-full flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 glass-panel mb-8 text-[10px] font-black tracking-[0.3em] uppercase text-[#10b981]">
          <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full"></span>
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.3 }}
            >
              {spintax[index]}
            </motion.span>
          </AnimatePresence>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black mb-6 leading-[0.9] tracking-tighter uppercase text-center text-white">
          Build <span className="text-[#10b981]">Beyond</span> Limits
        </h1>
        
        <p className="text-lg md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Bycom Solutions constructs <span className="text-white font-bold">ultra-performant</span> digital infrastructure and AI ecosystems for industry leaders.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <button 
            onClick={onOpenModal}
            className="w-full sm:w-auto px-10 py-4 bg-[#10b981] text-black font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white transition-all shadow-lg text-[11px]"
          >
            Consult Architect
          </button>
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-10 py-4 border border-white/10 glass-panel font-black uppercase tracking-[0.2em] rounded-xl hover:border-white transition-all text-[11px] text-white"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;