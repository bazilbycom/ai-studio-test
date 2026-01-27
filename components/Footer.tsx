import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const obfMail = (u: string, d: string) => `${u} [at] ${d}`;
  const salesMail = obfMail("sales", "bycomsolutions.com");
  const supportMail = obfMail("support", "bycomsolutions.com");
  
  // Scraper hardened phone reconstruction
  const getINNum = () => ["+", "9", "1", " ", "7", "2", "5", "9", "8", " ", "3", "0", "3", "3", "9"].join("");
  const getKSANum = () => ["+", "9", "6", "6", " ", "5", "7", " ", "5", "2", "7", " ", "1", "3", "2", "7"].join("");

  const socials = [
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/bycomsolutions',
      svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/bycomsolutions/',
      svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    },
    { 
      name: 'Google Play', 
      href: 'https://play.google.com/store/apps/dev?id=6192201139912582889&hl=en',
      svg: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186c-.18.18-.466.115-.558-.142L3.05 2c0-.25.28-.31.46-.13a2.022 2.022 0 0 1 .099-.056zM14.5 12.707l2.844 2.844L3.61 22.186a.4.4 0 0 1-.22-.057L14.5 12.707zm5.836-3.14l3.18 1.81a1.2 1.2 0 0 1 0 2.08l-3.18 1.81L15.207 12l5.13-2.433zM14.5 11.293L3.39 1.872a.4.4 0 0 1 .22-.058L17.344 8.45 14.5 11.293z"/></svg>
    },
    { 
      name: 'Telegram', 
      href: 'https://t.me/bycomsolutions',
      svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.462 8.357c-.147 1.549-1.01 6.643-1.45 9.006-.186.998-.553 1.333-.91 1.366-.775.072-1.363-.512-2.112-.999-1.173-.765-1.835-1.24-2.974-1.991-1.316-.867-.463-1.343.287-2.118.196-.203 3.601-3.303 3.667-3.585.008-.035.015-.167-.063-.236s-.191-.046-.273-.028c-.116.025-1.956 1.241-5.517 3.645-.521.357-.991.532-1.409.523-.46-.01-1.344-.26-2.002-.473-.806-.263-1.446-.402-1.391-.848.029-.233.349-.47.959-.711 3.748-1.632 6.246-2.709 7.495-3.23 3.564-1.479 4.305-1.736 4.787-1.745.106-.002.344.024.498.15.13.106.166.248.175.348.01.1.021.311-.001.487z"/></svg>
    },
    { 
      name: 'Rate us on Google', 
      href: 'https://share.google/QcnKz8Qj6OByUo8mu',
      svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    },
    { 
      name: 'Trustpilot', 
      href: 'https://www.trustpilot.com/review/bycomsolutions.com',
      svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l3.09 9.5h10l-8.09 5.88 3.09 9.5-8.09-5.88-8.09 5.88 3.09-9.5-8.09-5.88h10z"/></svg>
    },
    { 
      name: 'WhatsApp', 
      href: 'https://wa.me/message/QL2B5ARBHDGCM1',
      svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412 0 12.048c0 2.123.554 4.197 1.608 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.598h.005c6.637 0 12.048-5.414 12.048-12.05a11.8 11.8 0 00-3.517-8.412z"/></svg>
    }
  ];

  return (
    <footer className="pt-24 pb-12 px-6 border-t border-white/5 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Logo className="h-10 mb-8" />
            <p className="text-zinc-500 max-w-sm mb-10 text-lg font-medium leading-relaxed">Elite Digital Engineering Hub. Top 10 Rated Developer in the Indian App Frontier. Engineering high-frequency ecosystems for global performers.</p>
            <div className="flex flex-wrap gap-3">
              {socials.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-xl border border-white/5 glass-panel flex items-center gap-2.5 hover:bg-[#10b981] hover:text-black transition-all text-[10px] font-black uppercase tracking-widest group">
                  <span className="group-hover:scale-110 transition-transform">{s.svg}</span>
                  {s.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-[0.4em] text-[10px] text-[#10b981] mb-8">Navigation</h4>
            <ul className="space-y-4 text-zinc-400 text-sm font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Core Nodes</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Arsenal</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Archive</a></li>
              <li><a href="https://store.bycomsolutions.com" target="_blank" className="hover:text-white transition-colors">Bycom Store</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-[0.4em] text-[10px] text-[#10b981] mb-8">Legal Protocols</h4>
            <ul className="space-y-4 text-zinc-400 text-sm font-bold uppercase tracking-widest">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#refunds" className="hover:text-white transition-colors">Refunds</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Operational Support</a></li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 pt-12 border-t border-white/5">
          <div className="glass-panel p-8 rounded-3xl border border-white/5 group hover:border-[#10b981]/20 transition-all">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4">India Operation HUB</h5>
            <p className="font-black text-xl mb-2 leading-none">Bantwal Chambers, Mangalore</p>
            <div className="text-zinc-500 font-bold text-xs flex flex-col gap-2">
               <span className="select-all opacity-80">{salesMail}</span>
               <a href={`https://wa.me/${getINNum().replace(/ /g, '').replace('+', '')}`} className="hover:text-[#10b981] transition-colors">{getINNum()}</a>
            </div>
          </div>
          <div className="glass-panel p-8 rounded-3xl border border-white/5 group hover:border-[#06b6d4]/20 transition-all">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4">KSA Operation HUB</h5>
            <p className="font-black text-xl mb-2 leading-none">Tahliyah St, Riyadh 13515</p>
            <div className="text-zinc-500 font-bold text-xs flex flex-col gap-2">
               <span className="select-all opacity-80">{supportMail}</span>
               <a href={`https://wa.me/${getKSANum().replace(/ /g, '').replace('+', '')}`} className="hover:text-[#10b981] transition-colors">{getKSANum()}</a>
            </div>
          </div>
        </div>
        <div className="pt-10 mt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em] text-center md:text-left leading-relaxed">© 2026 BYCOM SOLUTIONS. BEYOND COMPUTING. <br className="md:hidden"/> REGISTERED IN INDIA & KSA.</p>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]"></div>
            <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Neural Status: Optimal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;