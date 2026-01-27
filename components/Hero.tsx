
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 glass-panel mb-8 text-xs font-bold tracking-widest uppercase text-cyan-400">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
          Engineering the Digital Future
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
          Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">Beyond</span> Limits
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          From cutting-edge AI architectures to high-performance web ecosystems, Bycom Solutions transforms complex challenges into seamless digital reality.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#ai-architect" className="w-full sm:w-auto px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            Consult our AI
          </a>
          <a href="#portfolio" className="w-full sm:w-auto px-10 py-4 border border-white/20 glass-panel hover:bg-white/10 font-bold uppercase tracking-wider rounded-xl transition-all">
            View Case Studies
          </a>
        </div>
      </div>

      <div className="mt-20 w-full max-w-5xl glass-panel rounded-2xl overflow-hidden aspect-video relative group border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10 pointer-events-none"></div>
        <img 
          src="https://picsum.photos/seed/bycom/1200/800" 
          alt="Future of Tech" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
          <div className="text-left">
            <h3 className="text-2xl font-bold font-heading">Web Core 2.0</h3>
            <p className="text-sm text-zinc-300">New modular architecture for enterprise scalability.</p>
          </div>
          <div className="text-3xl font-black text-cyan-400">01 / 04</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
