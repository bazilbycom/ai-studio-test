
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 px-6 border-t border-white/5 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981]/5 blur-[150px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Logo className="h-10 mb-8" />
            <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
              Leading the charge in AI-driven digital transformation. We bridge the gap between complex engineering and elegant design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-[#10b981] hover:text-black hover:border-[#10b981] transition-all">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-[#10b981] hover:text-black hover:border-[#10b981] transition-all">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-black uppercase tracking-widest text-[10px] text-white/50 mb-6">Navigation</h4>
            <ul className="space-y-4 text-zinc-400 text-sm font-bold uppercase tracking-tight">
              <li><a href="#" className="hover:text-[#10b981] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#10b981] transition-colors">Services</a></li>
              <li><a href="#ai-architect" className="hover:text-[#10b981] transition-colors">AI Architect</a></li>
              <li><a href="#portfolio" className="hover:text-[#10b981] transition-colors">Portfolio</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black uppercase tracking-widest text-[10px] text-white/50 mb-6">Contact</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="font-bold">contact@bycomsolutions.com</li>
              <li>Sales: +1 (555) 000-0000</li>
              <li className="mt-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 group hover:border-[#10b981]/30 transition-all">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white font-bold text-xs">All Systems Operational</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.3em]">
            © 2025 BYCOM SOLUTIONS. BEYOND COMPUTING.
          </p>
          <div className="flex gap-6 text-zinc-600 text-[9px] font-black uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
