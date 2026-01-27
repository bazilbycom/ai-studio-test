
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass-panel px-8 py-3 rounded-full flex items-center justify-between w-full max-w-5xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center font-black text-white italic">B</div>
          <span className="text-xl font-bold tracking-tighter uppercase font-heading">Bycom<span className="text-cyan-400">Solutions</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#ai-architect" className="hover:text-cyan-400 transition-colors">AI Architect</a>
          <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Works</a>
          <a href="#contact" className="px-5 py-2 bg-white text-black rounded-full hover:bg-cyan-400 transition-colors">Get Started</a>
        </div>
        
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
