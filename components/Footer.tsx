import React from 'react';
import Logo from './Logo';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socials = [
    { name: 'Instagram', href: 'https://www.instagram.com/bycomsolutions', code: 'IG', color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/bycomsolutions/', code: 'LI', color: 'bg-[#0077b5]' },
    { name: 'Google Play', href: 'https://play.google.com/store/apps/dev?id=6192201139912582889', code: 'GP', color: 'bg-gradient-to-r from-[#3bccff] via-[#aad45c] to-[#ffba00]' },
    { name: 'Telegram', href: 'https://t.me/bycomsolutions', code: 'TG', color: 'bg-[#0088cc]' },
    { name: 'WhatsApp', href: 'https://wa.me/message/QL2B5ARBHDGCM1', code: 'WA', color: 'bg-[#25d366]' }
  ];

  return (
    <footer className="pt-32 pb-16 px-6 border-t border-white/5 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <Logo className="h-12 mb-10" />
            <p className="text-zinc-500 max-w-sm mb-12 text-xl font-medium leading-relaxed italic">
              Elite Digital Engineering Hub. Engineering high-frequency ecosystems for global performers.
            </p>
            <div className="flex flex-wrap gap-4">
              {socials.map(s => (
                <motion.a 
                  key={s.code} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white text-[12px] font-black shadow-lg transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] ${s.color}`}
                  title={s.name}
                >
                  {s.code}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-black uppercase tracking-[0.5em] text-[10px] text-[#10b981] mb-8">Navigation</h4>
              <ul className="space-y-4 text-zinc-400 text-[10px] font-black uppercase tracking-widest">
                <li><a href="#" className="hover:text-white transition-colors">Home Node</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Operational Units</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Global Archive</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Intelligence</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-[0.5em] text-[10px] text-[#10b981] mb-8">Legal Docs</h4>
              <ul className="space-y-4 text-zinc-400 text-[10px] font-black uppercase tracking-widest">
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Prot.</a></li>
                <li><a href="#terms" className="hover:text-white transition-colors">Engagement</a></li>
                <li><a href="#refunds" className="hover:text-white transition-colors">Refund Pol.</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-[0.5em] text-[10px] text-[#10b981] mb-8">Uplinks</h4>
              <ul className="space-y-4 text-zinc-400 text-[10px] font-black uppercase tracking-widest">
                <li><a href="https://store.bycomsolutions.com" target="_blank" className="hover:text-[#10b981] transition-colors">Digital Store</a></li>
                <li><a href="mailto:sales@bycomsolutions.com" className="hover:text-white transition-colors">Sales Dept.</a></li>
                <li><a href="https://wa.me/917259830339" className="hover:text-[#10b981] transition-colors">Secure WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Improved Regional Hub Grid with Flags */}
        <div className="grid md:grid-cols-2 gap-8 py-12 border-t border-white/5">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 rounded-[3rem] glass-panel border border-white/5 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-4xl opacity-20 grayscale group-hover:grayscale-0 transition-all">🇮🇳</div>
            <div className="relative z-10">
              <span className="text-[9px] font-black uppercase tracking-widest text-[#10b981] mb-4 block">India Operation</span>
              <p className="font-black text-2xl text-white mb-2">Bantwal Chambers</p>
              <p className="text-zinc-500 font-bold italic text-sm tracking-tight mb-6">Mangalore, KA 575011</p>
              <div className="flex items-center gap-4">
                 <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[10px] font-black">+91 72598 30339</div>
                 <div className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Sales Node</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 rounded-[3rem] glass-panel border border-white/5 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-4xl opacity-20 grayscale group-hover:grayscale-0 transition-all">🇸🇦</div>
            <div className="relative z-10">
              <span className="text-[9px] font-black uppercase tracking-widest text-[#06b6d4] mb-4 block">KSA Operation</span>
              <p className="font-black text-2xl text-white mb-2">Tahliyah St, Riyadh</p>
              <p className="text-zinc-500 font-bold italic text-sm tracking-tight mb-6">Al Aqiq 13515</p>
              <div className="flex items-center gap-4">
                 <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[10px] font-black">+966 57 527 1327</div>
                 <div className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Support Node</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.5em] text-center md:text-left">
            © 2026 BYCOM SOLUTIONS. BEYOND COMPUTING. REGISTERED IN INDIA & KSA.
          </p>
          <div className="flex items-center gap-3 px-6 py-2 rounded-full glass-panel border border-white/5">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_#22c55e]"></div>
            <span className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">Neural Status: Optimal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;