import React from 'react';
import { motion } from 'framer-motion';

const GlobalNetwork: React.FC = () => {
  return (
    <section id="network" className="py-24 md:py-48 px-6 relative overflow-hidden bg-transparent">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#10b981]/5 blur-[180px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#10b981]/20 bg-[#10b981]/5 mb-6"
          >
            <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse"></span>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#10b981]">Orbital Command Level 01</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white leading-none"
          >
            Global <br/><span className="text-white/20">Sovereignty</span>
          </motion.h2>
        </div>

        <div className="relative flex justify-center items-center h-[500px] md:h-[850px]">
          {/* Main Globe Sphere */}
          <div className="relative w-[320px] h-[320px] md:w-[680px] md:h-[680px] rounded-full glass-panel border border-[#10b981]/10 overflow-hidden shadow-[0_0_120px_rgba(16,185,129,0.15)]">
            
            {/* World Map Texture - CSS Scrolling to simulate 3D rotation */}
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex w-[200%] h-full opacity-40 pointer-events-none"
              style={{
                backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png"), linear-gradient(to right, transparent, rgba(16, 185, 129, 0.1), transparent)',
              }}
            >
              <div className="w-full h-full relative">
                 {/* Simulated continents using SVG paths or detailed grid patterns */}
                 <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'radial-gradient(circle at center, #10b981 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              </div>
              <div className="w-full h-full relative">
                 <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'radial-gradient(circle at center, #10b981 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              </div>
            </motion.div>

            {/* Atmosphere Shadow/Glow (The "Planet" Look) */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.9),inset_0_0_120px_rgba(16,185,129,0.1)] rounded-full"></div>
            
            {/* Scanlines on Earth */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none"></div>

            {/* Scanning Radar Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[0.5px] border-[#10b981]/20 rounded-full scale-95"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[50%] bg-gradient-to-t from-[#10b981] to-transparent"></div>
            </motion.div>
          </div>

          {/* NODE INDIA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute top-[20%] left-[5%] md:left-[15%] z-20"
          >
            <div className="glass-panel p-6 rounded-[2rem] border border-white/10 group cursor-pointer hover:border-[#10b981]/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-[#10b981] rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-[#10b981] rounded-full animate-ping"></div>
                </div>
                <span className="text-[10px] font-black tracking-widest text-white uppercase">Relay // India</span>
              </div>
              <div className="space-y-1">
                <p className="text-[#10b981] text-xs font-black">LATENCY: 2.8ms</p>
                <p className="text-zinc-500 text-[9px] font-bold uppercase">STATUS: OPTIMAL</p>
              </div>
            </div>
          </motion.div>

          {/* NODE KSA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute bottom-[20%] right-[5%] md:right-[15%] z-20"
          >
            <div className="glass-panel p-6 rounded-[2rem] border border-white/10 group cursor-pointer hover:border-cyan-400/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-[10px] font-black tracking-widest text-white uppercase">Relay // KSA</span>
              </div>
              <div className="space-y-1">
                <p className="text-cyan-400 text-xs font-black">LATENCY: 12ms</p>
                <p className="text-zinc-500 text-[9px] font-bold uppercase">STATUS: SECURE</p>
              </div>
            </div>
          </motion.div>

          {/* Central System Core */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute glass-panel px-12 py-10 rounded-[3rem] border border-white/20 text-center shadow-2xl z-30 scale-90 md:scale-100"
          >
            <div className="w-16 h-16 bg-[#10b981]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#10b981]/20">
              <svg className="w-8 h-8 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Core <br/><span className="text-[#10b981]">Backbone</span></h3>
            <p className="text-zinc-400 text-sm font-bold max-w-[240px] mx-auto opacity-70 leading-relaxed uppercase tracking-tighter">
              Interconnected mesh network <br/>across 12 global regions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;