
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
    
    // Logic: In a real app, you'd send an API request to an endpoint that mails sales@bycomsolutions.com
    // For this prototype, we simulate a successful transmission then redirect to WhatsApp
    
    setTimeout(() => {
      const msg = `Hello Bycom Solutions! My name is ${formData.name} (${formData.email}). I am interested in ${formData.service}. Mission details: ${formData.message}`;
      const waUrl = `https://wa.me/966575271327?text=${encodeURIComponent(msg)}`;
      
      setIsSubmitting(false);
      onClose();
      
      // Attempt to open WhatsApp
      window.open(waUrl, '_blank');
      
      // Cleanup form
      setFormData({ name: '', email: '', service: 'Web & App Development', message: '' });
    }, 1500);
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
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          ></motion.div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg glass-panel rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 border border-white/10 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10b981] via-[#06b6d4] to-[#8b5cf6]"></div>
            
            <button onClick={onClose} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 leading-none">Initiate <span className="text-[#10b981]">Connection</span></h2>
            <p className="text-zinc-500 font-bold mb-8 text-xs md:text-sm">Transmitting to sales@bycomsolutions.com</p>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Identifier</label>
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-[#10b981] outline-none transition-all text-sm" placeholder="Full Name" />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Frequency</label>
                  <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-[#10b981] outline-none transition-all text-sm" placeholder="Email Address" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Target Sector</label>
                <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-[#10b981] outline-none transition-all text-white appearance-none text-sm">
                  <option className="bg-zinc-900">Web & App Development</option>
                  <option className="bg-zinc-900">Design & Branding</option>
                  <option className="bg-zinc-900">AI & Automation</option>
                  <option className="bg-zinc-900">Digital Marketing</option>
                  <option className="bg-zinc-900">Media Production</option>
                  <option className="bg-zinc-900">Software Integrations</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Transmission Data</label>
                <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-[#10b981] outline-none transition-all resize-none text-sm" placeholder="Describe the mission objective..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 md:py-5 bg-[#10b981] text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50 text-sm md:text-base"
              >
                {isSubmitting ? 'Uplinking...' : (
                  <>
                    Forge Connection
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2z"/></svg>
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
