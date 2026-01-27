import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const obfMail = (u: string, d: string) => `${u} [at] ${d}`;
  const salesMail = obfMail("sales", "bycomsolutions.com");
  const supportMail = obfMail("support", "bycomsolutions.com");
  
  const mapUrl = "https://share.google/QcnKz8Qj6OByUo8mu";

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
      name: 'Telegram', 
      href: 'https://t.me/bycomsolutions',
      svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.462 8.357c-.147 1.549-1.01 6.643-1.45 9.006-.186.998-.553 1.333-.91 1.366-.775.072-1.363-.512-2.112-.999-1.173-.765-1.835-1.24-2.974-1.991-1.316-.867-.463-1.343.287-2.118.196-.203 3.601-3.303 3.667-3.585.008-.035.015-.167-.063-.236s-.191-.046-.273-.028c-.116.025-1.956 1.241-5.517 3.645-.521.357-.991.532-1.409.523-.46-.01-1.344-.26-2.002-.473-.806-.263-1.446-.402-1.391-.848.029-.233.349-.47.959-.711 3.748-1.632 6.246-2.709 7.495-3.23 3.564-1.479 4.305-1.736 4.787-1.745.106-.002.344.024.498.15.13.106.166.248.175.348.01.1.021.311-.001.487z"/></svg>
    },
    { 
      name: 'WhatsApp', 
      href: 'https://wa.me/message/QL2B5ARBHDGCM1',
      svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.656zm6.29-4.139c1.52.907 3.0 1.352 4.619 1.353 5.504 0 9.982-4.479 9.984-9.985.002-5.507-4.475-9.985-9.982-9.987-2.68-.001-5.197 1.041-7.09 2.932-1.891 1.892-2.933 4.403-2.934 7.087-.001 1.706.469 3.126 1.391 4.509l-.989 3.613 3.701-.971c.001-.001.001-.001.001-.001z"/></svg>
    },
    { 
      name: 'Google Play', 
      href: 'https://play.google.com/store/apps/dev?id=6192201139912582889&hl=en',
      svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.6 18l-1.2-1.2 4.8-4.8-4.8-4.8 1.2-1.2 6 6-6 6z"/></svg>
    },
    { 
      name: 'Trustpilot', 
      href: 'https://www.trustpilot.com/review/bycomsolutions.com',
      svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l3.09 9.5h10l-8.09 5.88 3.09 9.5-8.09-5.88-8.09 5.88 3.09-9.5-8.09-5.88h10z"/></svg>
    }
  ];

  return (
    <footer className="pt-24 pb-12 px-6 border-t border-white/5 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Logo className="h-10 mb-8" />
            <p className="text-zinc-500 max-w-sm mb-10 text-lg font-medium leading-relaxed">Top 10 Rated Developer in the Indian App Frontier. Engineering high-frequency ecosystems for global performers in 2026.</p>
            <div className="flex flex-wrap gap-3">
              {socials.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-xl border border-white/5 glass-panel flex items-center gap-2.5 hover:bg-[#10b981] hover:text-black transition-all text-[10px] font-black uppercase tracking-widest">
                  {s.svg}
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
              <li><a href={mapUrl} target="_blank" className="hover:text-white transition-colors underline decoration-[#10b981]/40 underline-offset-4">Digital HQ Address</a></li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 pt-12 border-t border-white/5">
          <div className="glass-panel p-8 rounded-3xl border border-white/5">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4">India Operation HUB</h5>
            <p className="font-black text-xl mb-2 leading-none">Bantwal Chambers, Mangalore</p>
            <div className="text-zinc-500 font-bold text-xs flex flex-col gap-2">
               <span className="select-all opacity-80">{salesMail}</span>
               <a href="https://wa.me/917259830339" className="hover:text-[#10b981]">+91 72598 30339</a>
            </div>
          </div>
          <div className="glass-panel p-8 rounded-3xl border border-white/5">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4">KSA Operation HUB</h5>
            <p className="font-black text-xl mb-2 leading-none">Tahliyah St, Riyadh 13515</p>
            <div className="text-zinc-500 font-bold text-xs flex flex-col gap-2">
               <span className="select-all opacity-80">{supportMail}</span>
               <a href="https://wa.me/966575271327" className="hover:text-[#10b981]">+966 57 527 1327</a>
            </div>
          </div>
        </div>
        <div className="pt-10 mt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em] text-center md:text-left">© 2026 BYCOM SOLUTIONS. BEYOND COMPUTING. GLOBAL DEPLOYMENT ACTIVE.</p>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]"></div>
            <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">System Health: Optimal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;