
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  // Simple "encryption" (string splitting) to prevent basic bot scraping
  const emails = {
    say: ["sayhello", "bycomsolutions.com"].join("@"),
    sales: ["sales", "bycomsolutions.com"].join("@"),
    support: ["support", "bycomsolutions.com"].join("@")
  };
  
  const phones = {
    india: "+91" + "-7259830339",
    ksa: "+966" + "-575271327"
  };

  const socials = [
    { name: 'Instagram', href: 'https://www.instagram.com/bycomsolutions' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/bycomsolutions/' },
    { name: 'Telegram', href: 'https://t.me/bycomsolutions' },
    { name: 'WhatsApp', href: 'https://wa.me/message/QL2B5ARBHDGCM1' }
  ];

  return (
    <footer className="pt-16 md:pt-24 pb-8 md:pb-12 px-6 border-t border-white/5 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981]/5 blur-[150px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-20">
          <div className="lg:col-span-2">
            <Logo className="h-10 mb-8" />
            <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed font-medium">
              Leading the charge in AI-driven digital transformation. We bridge the gap between complex engineering and elegant design for global high-performers in 2026.
            </p>
            <div className="flex flex-wrap gap-4">
              {socials.map(social => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl border border-white/10 flex items-center justify-center hover:bg-[#10b981] hover:text-black hover:border-[#10b981] transition-all text-[10px] font-black uppercase tracking-widest"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black uppercase tracking-widest text-[10px] text-[#10b981] mb-6">Navigation</h4>
            <ul className="space-y-4 text-zinc-400 text-sm font-bold uppercase tracking-tight">
              <li><a href="#" className="hover:text-white transition-colors">Core Systems</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Arsenal</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Archive</a></li>
              <li><a href="https://store.bycomsolutions.com" target="_blank" className="hover:text-white transition-colors">Products</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black uppercase tracking-widest text-[10px] text-[#10b981] mb-6">Legal Nodes</h4>
            <ul className="space-y-4 text-zinc-400 text-sm font-bold uppercase tracking-tight">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Protocol</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Engagement</a></li>
              <li><a href="#refunds" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Support Center</a></li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16 md:mb-20 pt-12 border-t border-white/5">
          <div className="glass-panel p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5">
            <h5 className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">India Operations</h5>
            <p className="font-bold text-base md:text-lg mb-1">Bantwal Chambers, Mangalore</p>
            <div className="text-[11px] md:text-sm text-zinc-500 flex flex-col gap-1">
               <a href={`https://wa.me/${phones.india.replace(/\+/g, '').replace(/-/g, '')}`} className="hover:text-white">{phones.india} (WhatsApp)</a>
               <span className="select-all cursor-copy">{emails.say}</span>
            </div>
          </div>
          <div className="glass-panel p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5">
            <h5 className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">KSA Operations</h5>
            <p className="font-bold text-base md:text-lg mb-1">Tahliyah St, Al Aqiq, Riyadh</p>
            <div className="text-[11px] md:text-sm text-zinc-500 flex flex-col gap-1">
               <a href={`https://wa.me/${phones.ksa.replace(/\+/g, '').replace(/-/g, '')}`} className="hover:text-white">{phones.ksa} (WhatsApp)</a>
               <span className="select-all cursor-copy">{emails.support}</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-center md:text-left leading-relaxed">
            © 2026 BYCOM SOLUTIONS. BEYOND COMPUTING. <br className="md:hidden"/> REGISTERED INDIA & KSA.
          </p>
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[9px] font-black uppercase text-zinc-500">Global Node: Active 2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
