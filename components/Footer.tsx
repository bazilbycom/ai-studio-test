import React from 'react';
import Logo from './Logo';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socials = [
    { name: 'Instagram', href: 'https://www.instagram.com/bycomsolutions', code: 'IG', color: '#E4405F' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/bycomsolutions/', code: 'LI', color: '#0077B5' },
    { name: 'Google Play', href: 'https://play.google.com/store/apps/dev?id=6192201139912582889', code: 'GP', color: '#3DDC84' },
    { name: 'Telegram', href: 'https://t.me/bycomsolutions', code: 'TG', color: '#0088CC' },
    { name: 'WhatsApp', href: 'https://wa.me/message/QL2B5ARBHDGCM1', code: 'WA', color: '#25D366' }
  ];

  return (
    <footer className="pt-24 pb-12 px-6 border-t border-white/5 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-6">
            <Logo className="h-10 mb-8" />
            <p className="text-zinc-500 max-w-sm mb-10 text-lg font-medium leading-relaxed italic">
              Elite Digital Engineering Hub. Engineering high-frequency ecosystems for global performers.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map(s => (
                <motion.a 
                  key={s.code} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.05, borderColor: s.color, color: s.color }}
                  className="w-14 h-14 rounded-2xl glass-panel border border-white/5 flex items-center justify-center text-zinc-400 text-[11px] font-black tracking-widest transition-all duration-300"
                  title={s.name}
                >
                  {s.code}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-black uppercase tracking-[0.5em] text-[9px] text-[#10b981] mb-6">Explore</h4>
              <ul className="space-y-4 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                <li><a href="#" className="hover:text-white transition-colors">Nodes</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Arsenal</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-[0.5em] text-[9px] text-[#10b981] mb-6">Resources</h4>
              <ul className="space-y-4 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                <li><a href="#blog" className="hover:text-white transition-colors">Intelligence</a></li>
                <li><a href="https://store.bycomsolutions.com" target="_blank" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Forge</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-black uppercase tracking-[0.5em] text-[9px] text-[#10b981] mb-6">Legal</h4>
              <ul className="space-y-4 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#terms" className="hover:text-white transition-colors">Engagement</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-600 text-[8px] font-black uppercase tracking-[0.6em] text-center md:text-left">
            © 2026 BYCOM SOLUTIONS. BEYOND COMPUTING.
          </p>
          <div className="flex items-center gap-3 px-6 py-2 rounded-full glass-panel border border-white/5">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
            <span className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">Core Status: Stable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;