
import React from 'react';
import Logo from './Logo';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socials = [
    { name: 'Instagram', href: 'https://instagram.com/bycomsolutions', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/bycomsolutions/', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    { name: 'WhatsApp', href: 'https://wa.me/message/QL2B5ARBHDGCM1', icon: 'M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' },
    { name: 'Telegram', href: 'https://t.me/bycomsolutions', icon: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.891 7c.147 0 .299.044.422.128.143.098.238.236.271.393.186.874.635 3.497.866 4.784l.003.01c.11.599.177 1.238-.299 1.817-.309.375-.697.525-1.054.594-.12.023-.243.033-.356.033-.638 0-1.213-.341-1.626-.638l-.033-.024-3.277-2.435c-.693-.514-1.125-.925-1.125-1.488 0-.324.143-.665.441-.961l.019-.019 4.894-4.731c.214-.207.434-.419.434-.694 0-.275-.22-.388-.44-.388-.12 0-.231.039-.333.111l-.014.01-6.191 3.9c-.437.275-.826.413-1.168.413-.574 0-1.028-.231-1.526-.388l-.053-.016c-.843-.263-1.493-.466-1.493-1.063 0-.339.256-.612.766-.813l.058-.022 9.223-3.574c.12-.045.252-.069.388-.069z' }
  ];

  return (
    <footer className="pt-24 pb-12 px-6 border-t border-white/5 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <Logo className="h-10 mb-10" />
            <p className="text-zinc-500 max-w-sm mb-12 text-lg md:text-xl font-medium leading-relaxed italic">
              Elite Digital Engineering Hub. Engineering high-frequency ecosystems for global performers.
            </p>
            <div className="flex flex-col gap-6">
              <span className="text-[#10b981] font-black uppercase tracking-[0.4em] text-[10px]">Neural Relays</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socials.map(s => (
                  <motion.a 
                    key={s.name} 
                    href={s.href} 
                    target="_blank" 
                    whileHover={{ scale: 1.05, color: '#10b981' }} 
                    className="flex items-center justify-center gap-3 glass-panel border border-white/10 px-4 py-4 rounded-2xl text-zinc-400 group"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d={s.icon}/></svg>
                    <span className="text-[9px] font-black uppercase tracking-widest">{s.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-black uppercase tracking-[0.4em] text-[10px] text-[#10b981] mb-8">Uplinks</h4>
              <ul className="space-y-6 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                <li><a href="https://trustpilot.com/review/bycomsolutions.com" target="_blank" className="hover:text-white transition-colors">Trustpilot</a></li>
                <li><a href="https://google.com/search?q=bycom+solutions" target="_blank" className="hover:text-white transition-colors">Google Profile</a></li>
                <li><a href="https://play.google.com/store/apps/dev?id=6192201139912582889" target="_blank" className="hover:text-white transition-colors">Play Store</a></li>
                <li><a href="https://store.bycomsolutions.com" target="_blank" className="hover:text-white transition-colors">Digital Store</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-[0.4em] text-[10px] text-[#10b981] mb-8">Service Nodes</h4>
              <ul className="space-y-6 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                <li><a href="#services" className="hover:text-white transition-colors">Core Arsenal</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Matrix Archive</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Bycom Labs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-[0.4em] text-[10px] text-[#10b981] mb-8">Legal Docs</h4>
              <ul className="space-y-6 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#terms" className="hover:text-white transition-colors">Engagement</a></li>
                <li><a href="#refunds" className="hover:text-white transition-colors">Refunds</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 py-12 border-t border-white/5">
          <motion.div whileHover={{ y: -5 }} className="p-10 rounded-[2.5rem] glass-panel border border-white/5 relative group overflow-hidden bg-gradient-to-br from-[#10b981]/10 to-transparent">
            <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/[0.03] select-none">NODE IN</div>
            <div className="relative z-10">
              <span className="text-[9px] font-black uppercase tracking-widest text-[#10b981] mb-4 block">Regional Hub / India</span>
              <p className="font-black text-2xl text-white mb-2 tracking-tight">Bantwal Chambers</p>
              <p className="text-zinc-500 font-bold italic text-sm tracking-tight mb-6">Mangalore, KA 575011</p>
              <div className="flex items-center gap-4">
                 <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-[11px] font-black text-[#10b981] shadow-inner tracking-widest">+91 72598 30339</div>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="p-10 rounded-[2.5rem] glass-panel border border-white/5 relative group overflow-hidden bg-gradient-to-br from-[#06b6d4]/10 to-transparent">
            <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/[0.03] select-none">NODE KSA</div>
            <div className="relative z-10">
              <span className="text-[9px] font-black uppercase tracking-widest text-[#06b6d4] mb-4 block">Regional Hub / KSA</span>
              <p className="font-black text-2xl text-white mb-2 tracking-tight">Tahliyah St, Riyadh</p>
              <p className="text-zinc-500 font-bold italic text-sm tracking-tight mb-6">Al Aqiq 13515</p>
              <div className="flex items-center gap-4">
                 <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-[11px] font-black text-[#06b6d4] shadow-inner tracking-widest">+966 57 527 1327</div>
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
            <span className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">Systems: Optimal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
