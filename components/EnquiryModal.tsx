
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Web & App Development', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In production, an API call would send to sales@bycomsolutions.com
    setTimeout(() => {
      const msg = `New Bycom Enquiry 2026\n----------------\nName: ${formData.name}\nEmail: ${formData.email}\nSector: ${formData.service}\nMission: ${formData.message}`;
      const waUrl = `https://wa.me/966575271327?text=${encodeURIComponent(msg)}`;
      
      setIsSubmitting(false);
      onClose();
      
      // Redirect to WhatsApp
      window.open(waUrl, '_blank');
      
      // Cleanup
      setFormData({ name: '', email: '', service: 'Web & App Development', message: '' });
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          ></motion.div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl glass-panel rounded-[3rem] p-10 md:p-14 border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#10b981] via-[#06b6d4] to-[#8b5cf6]"></div>
            
            <button onClick={onClose} className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors group">
              <svg className="w-8 h-8 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none font-heading">Initiate <span className="text-[#10b981]">Connection</span></h2>
            <p className="text-zinc-500 font-bold mb-10 text-sm tracking-widest uppercase">Routing to sales [at] bycomsolutions.com</p>

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Mission Identity</label>
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-[#10b981] outline-none transition-all font-bold text-lg" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Neural Frequency</label>
                  <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-[#10b981] outline-none transition-all font-bold text-lg" placeholder="Email Address" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Operational Sector</label>
                <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-[#10b981] outline-none transition-all text-white appearance-none font-bold text-lg">
                  <option className="bg-zinc-900">Web & App Development</option>
                  <option className="bg-zinc-900">Design & Branding</option>
                  <option className="bg-zinc-900">AI & Automation</option>
                  <option className="bg-zinc-900">Digital Marketing</option>
                  <option className="bg-zinc-900">Media Production</option>
                  <option className="bg-zinc-900">Software Integrations</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Uplink Message</label>
                <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-[#10b981] outline-none transition-all resize-none font-bold text-lg" placeholder="Describe your mission objective..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-6 bg-[#10b981] text-black font-black uppercase tracking-[0.4em] rounded-[2rem] hover:bg-white transition-all flex items-center justify-center gap-4 disabled:opacity-50 text-xl shadow-[0_20px_40px_rgba(16,185,129,0.3)]"
              >
                {isSubmitting ? 'Syncing...' : (
                  <>
                    Deploy Transmission
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2z"/></svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
