
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative pt-32 md:pt-48 pb-12 md:pb-20 px-4 md:px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Background Ornaments */}
      <motion.div 
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] border border-[#10b981]/5 rounded-full pointer-events-none"
      ></motion.div>
      <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-[#10b981]/10 blur-[120px] rounded-full animate-pulse"></div>
      
      <div className="max-w-5xl relative z-10 px-2">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 glass-panel mb-6 md:mb-10 text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#10b981]"
        >
          <span className="w-2 h-2 bg-[#10b981] rounded-full animate-ping"></span>
          2026 Neural Core Active
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl lg:text-[10rem] font-black mb-6 md:mb-10 leading-[1] md:leading-[0.8] tracking-tighter uppercase"
        >
          Build <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#06b6d4] to-[#8b5cf6] drop-shadow-[0_10px_30px_rgba(16,185,129,0.2)]">Beyond</span> Limits
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl text-zinc-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Bycom Solutions engineers high-frequency digital ecosystems that redefine performance and scalability.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <motion.button 
            onClick={onOpenModal}
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(16,185,129,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-6 bg-[#10b981] text-black font-black uppercase tracking-wider rounded-2xl transition-all shadow-xl text-sm md:text-lg"
          >
            Initiate Onboarding
          </motion.button>
          <motion.a 
            href="#portfolio" 
            whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-6 border border-white/10 glass-panel font-black uppercase tracking-wider rounded-2xl transition-all text-sm md:text-lg"
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="mt-16 md:mt-24 w-full max-w-6xl glass-panel rounded-3xl md:rounded-[3rem] overflow-hidden aspect-square sm:aspect-[21/9] relative group border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.9)] mx-4"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none"></div>
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" 
          alt="Future Tech Architecture" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms] opacity-50 grayscale hover:grayscale-0 transition-all"
        />
        <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-12 z-20 flex flex-col md:flex-row justify-between items-end gap-6 md:gap-8">
          <div className="text-left w-full md:w-auto">
            <span className="text-[#10b981] font-black text-[9px] md:text-xs uppercase tracking-[0.4em] mb-2 md:mb-3 block">Global Authority: Since 2017</span>
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-2">9+ Years of <br/>Elite Operations</h3>
            <p className="text-zinc-500 max-w-xs md:max-w-md font-bold text-xs md:text-base">Empowering 80+ high-performers with sub-10ms neural grid sync.</p>
          </div>
          <div className="flex gap-2 md:gap-4 w-full md:w-auto justify-between md:justify-end">
             <div className="px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl glass-panel border border-white/5 flex flex-col items-center flex-1 md:flex-none">
                <span className="text-[#10b981] font-black text-xl md:text-2xl tracking-tighter">80+</span>
                <span className="text-[7px] md:text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Clients</span>
             </div>
             <div className="px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl glass-panel border border-white/5 flex flex-col items-center flex-1 md:flex-none">
                <span className="text-purple-400 font-black text-xl md:text-2xl tracking-tighter">&lt;10ms</span>
                <span className="text-[7px] md:text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Latency</span>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
