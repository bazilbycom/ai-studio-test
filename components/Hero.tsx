
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Background Ornaments */}
      <motion.div 
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-[600px] h-[600px] border border-[#10b981]/5 rounded-full pointer-events-none"
      ></motion.div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#10b981]/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]"></div>

      <div className="max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass-panel mb-10 text-[10px] font-black tracking-[0.4em] uppercase text-[#10b981]"
        >
          <span className="w-2 h-2 bg-[#10b981] rounded-full animate-ping"></span>
          2025 Neural Core Online
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-[10rem] font-black mb-10 leading-[0.8] tracking-tighter uppercase"
        >
          Build <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#06b6d4] to-[#8b5cf6] drop-shadow-[0_10px_30px_rgba(16,185,129,0.2)]">Beyond</span> Limits
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Bycom Solutions engineers high-frequency digital ecosystems that redefine performance and scalability.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.a 
            href="https://wa.me/966575271327" 
            target="_blank"
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(16,185,129,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-14 py-6 bg-[#10b981] text-black font-black uppercase tracking-wider rounded-2xl transition-all shadow-xl text-lg"
          >
            Initiate Onboarding
          </motion.a>
          <motion.a 
            href="#portfolio" 
            whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-14 py-6 border border-white/10 glass-panel font-black uppercase tracking-wider rounded-2xl transition-all text-lg"
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="mt-24 w-full max-w-6xl glass-panel rounded-[3rem] overflow-hidden aspect-[21/9] relative group border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.9)]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none"></div>
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" 
          alt="Future Tech Architecture" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms] opacity-50 grayscale hover:grayscale-0 transition-all"
        />
        <div className="absolute bottom-12 left-12 right-12 z-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="text-left">
            <span className="text-[#10b981] font-black text-xs uppercase tracking-[0.4em] mb-3 block">Node Deployment: X-22</span>
            <h3 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">Omni-Channel <br/>Grid Sync</h3>
            <p className="text-zinc-500 max-w-md font-bold">Scaling global commerce through sub-10ms edge compute clusters.</p>
          </div>
          <div className="flex gap-4">
             <div className="px-8 py-4 rounded-2xl glass-panel border border-white/5 flex flex-col items-center min-w-[120px]">
                <span className="text-[#10b981] font-black text-2xl tracking-tighter">99.9%</span>
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1">SLA Uptime</span>
             </div>
             <div className="px-8 py-4 rounded-2xl glass-panel border border-white/5 flex flex-col items-center min-w-[120px]">
                <span className="text-purple-400 font-black text-2xl tracking-tighter">&lt;10ms</span>
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Latency</span>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
