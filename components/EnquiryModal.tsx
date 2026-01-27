
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Web Development', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending to sales@bycomsolutions.com
    setTimeout(() => {
      const waMsg = `Hello Bycom Team, I am ${formData.name}. I'm interested in ${formData.service}. Message: ${formData.message}`;
      const waUrl = `https://wa.me/966575271327?text=${encodeURIComponent(waMsg)}`;
      
      setIsSubmitting(false);
      onClose();
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
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
            className="relative w-full max-w-xl glass-panel rounded-[3rem] p-10 border border-white/10 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10b981] via-[#06b6d4] to-[#8b5cf6]"></div>
            
            <button onClick={onClose} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">Initiate <span className="text-[#10b981]">Connection</span></h2>
            <p className="text-zinc-500 font-bold mb-8 text-sm">Our sales team will relay your transmission immediately.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Identity</label>
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-[#10b981] outline-none transition-all" placeholder="Name" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Frequency</label>
                  <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-[#10b981] outline-none transition-all" placeholder="Email" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Sector</label>
                <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-[#10b981] outline-none transition-all text-white appearance-none">
                  <option className="bg-zinc-900">Web & App Development</option>
                  <option className="bg-zinc-900">Design & Branding</option>
                  <option className="bg-zinc-900">AI & Automation</option>
                  <option className="bg-zinc-900">Digital Marketing</option>
                  <option className="bg-zinc-900">Media Production</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Message</label>
                <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-[#10b981] outline-none transition-all resize-none" placeholder="Describe your mission..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-5 bg-[#10b981] text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? 'Syncing...' : (
                  <>
                    Send Signal
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
