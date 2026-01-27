import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
    opened: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'AI Architect', href: '#ai-architect' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] flex justify-center p-6">
      <div className="glass-panel px-6 md:px-8 py-3 rounded-full flex items-center justify-between w-full max-w-6xl relative z-[70]">
        <Logo className="h-10" />
        
        <div className="hidden md:flex items-center gap-8 text-[11px] font-black tracking-widest uppercase">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-zinc-400 hover:text-[#10b981] transition-colors">{link.name}</a>
          ))}
          <div className="w-px h-4 bg-white/10 mx-2"></div>
          <a href="https://store.bycomsolutions.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#10b981] transition-colors flex items-center gap-1.5">
            Products
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
          <button onClick={onOpenModal} className="px-6 py-2.5 bg-white text-black rounded-full hover:bg-[#10b981] transition-all hover:scale-105 active:scale-95 font-black ml-4">
            Get Started
          </button>
        </div>
        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2 relative z-[80] focus:outline-none" aria-label="Toggle Menu">
          <div className="w-6 flex flex-col gap-1.5">
            <motion.span animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="h-0.5 w-full bg-[#10b981] block"></motion.span>
            <motion.span animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }} className="h-0.5 w-full bg-white block"></motion.span>
            <motion.span animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="h-0.5 w-full bg-[#10b981] block"></motion.span>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed" animate="opened" exit="closed" variants={menuVariants}
            className="fixed inset-0 bg-black/98 backdrop-blur-2xl z-[65] flex flex-col items-center justify-center gap-10 md:hidden p-8"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a key={link.name} href={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase tracking-tighter hover:text-[#10b981] transition-colors">{link.name}</motion.a>
              ))}
              <motion.a href="https://store.bycomsolutions.com" target="_blank" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-4xl font-black uppercase tracking-tighter text-[#10b981]">Products</motion.a>
            </div>
            <motion.button onClick={() => { setIsOpen(false); onOpenModal(); }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="mt-8 w-full max-w-xs text-center px-12 py-5 bg-[#10b981] text-black text-xl font-black uppercase rounded-2xl shadow-2xl">Get Started</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;