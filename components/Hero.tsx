import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative pt-24 md:pt-44 pb-12 md:pb-24 px-4 md:px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 -left-20 w-72 md:w-full h-[600px] bg-[#10b981]/10 blur-[150px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl relative z-10 px-2">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full border border-white/10 glass-panel mb-8 md:mb-12 text-[9px] md:text-[11px] font-black tracking-[0.2em] uppercase text-[#10b981] shadow-xl"
        >
          <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></span>
          Elite Engineering Hub • Since 2017
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[clamp(3rem,10vw,8rem)] font-black mb-6 md:mb-10 leading-[0.85] tracking-tighter uppercase flex flex-col items-center sm:block"
        >
          <span className="block sm:inline">Build</span> 
          <span className="block sm:inline sm:mx-4 text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#06b6d4] to-[#8b5cf6] text-glow animate-gradient-x">Beyond</span> 
          <span className="block sm:inline">Limits</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="px-5 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 flex items-center gap-2 backdrop-blur-sm">
            <span className="text-yellow-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              Top 10 Rated Paid Apps in India
            </span>
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base md:text-xl lg:text-2xl text-zinc-300 mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed font-medium hero-p"
        >
          Bycom Solutions engineers <span className="text-white font-semibold">high-frequency digital ecosystems</span> that redefine performance and global scalability.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-2xl mx-auto px-4"
        >
          <motion.button 
            onClick={onOpenModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 md:flex-none px-6 md:px-12 py-4 md:py-5 bg-[#10b981] text-black font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl text-[10px] md:text-sm whitespace-nowrap"
          >
            Initiate Onboarding
          </motion.button>
          <motion.a 
            href="#portfolio" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 md:flex-none px-6 md:px-12 py-4 md:py-5 border border-white/10 glass-panel font-black uppercase tracking-widest rounded-2xl transition-all text-[10px] md:text-sm whitespace-nowrap text-center"
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="mt-16 md:mt-28 w-full max-w-7xl glass-panel rounded-3xl md:rounded-[4rem] overflow-hidden aspect-[1/1] sm:aspect-[21/9] relative group border border-white/5 shadow-2xl"
      >
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" 
          alt="Future Architecture" 
          className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        <div className="absolute inset-x-6 bottom-6 md:inset-x-12 md:bottom-12 z-20 flex flex-col md:flex-row justify-between items-end gap-8 text-left">
          <div className="w-full md:max-w-xl">
            <span className="text-[#10b981] font-black text-[9px] md:text-xs uppercase tracking-[0.4em] mb-4 block">Proven Operations Matrix</span>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4">India & KSA Hubs</h3>
            <p className="text-zinc-400 font-bold text-xs md:text-lg">Specializing in AI-native architecture and extreme-scale software engineering.</p>
          </div>
          <div className="flex gap-3 md:gap-6 w-full md:w-auto">
             <div className="px-6 py-4 md:px-10 md:py-6 rounded-2xl glass-panel border border-white/5 flex flex-col items-center flex-1">
                <span className="text-[#10b981] font-black text-2xl md:text-4xl tracking-tighter">80+</span>
                <span className="text-[7px] md:text-[9px] font-black text-zinc-500 uppercase tracking-widest mt-2">Clients</span>
             </div>
             <div className="px-6 py-4 md:px-10 md:py-6 rounded-2xl glass-panel border border-white/5 flex flex-col items-center flex-1">
                <span className="text-purple-400 font-black text-2xl md:text-4xl tracking-tighter">&lt;5ms</span>
                <span className="text-[7px] md:text-[9px] font-black text-zinc-500 uppercase tracking-widest mt-2">Latency</span>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;