import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Web & App Development', message: '', hp: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.hp.length > 0) return;

    setIsSubmitting(true);
    
    const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScNEZXhMNXxAIT17fM4l5QkwRumU7Qx8TjstiluuxAWb6S1yA/formResponse";
    const googlePayload = new FormData();
    googlePayload.append('entry.2005620554', formData.name);
    googlePayload.append('entry.1045781291', formData.email);
    googlePayload.append('entry.839337160', `${formData.service}: ${formData.message}`);

    try {
      await fetch(googleFormUrl, {
        method: "POST",
        body: googlePayload,
        mode: "no-cors"
      });

      setIsSuccess(true);
      
      // WhatsApp redirect logic
      const waText = `Hi, Im ${formData.name} - ${formData.email}. I'm interested in ${formData.service}. ${formData.message}`;
      const waUrl = `https://wa.me/917259830339?text=${encodeURIComponent(waText)}`;
      
      setTimeout(() => {
        window.open(waUrl, '_blank');
        onClose();
        setIsSubmitting(false);
        setIsSuccess(false);
        setFormData({ name: '', email: '', service: 'Web & App Development', message: '', hp: '' });
      }, 1500);

    } catch (err) {
      console.error("Submission error", err);
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/95 backdrop-blur-xl" />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl glass-panel rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] my-auto"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none font-heading">Initiate <span className="text-[#10b981]">Contact</span></h2>
              <p className="text-zinc-500 font-bold text-[10px] md:text-xs tracking-widest uppercase">Secured Neural Transmission</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Honeypot Field */}
              <input type="text" className="hidden" name="bycom_hp_field" value={formData.hp} onChange={e => setFormData({...formData, hp: e.target.value})} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} type="text" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 focus:border-[#10b981] outline-none transition-all font-bold text-base md:text-lg" placeholder="Full Name" />
                <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type="email" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 focus:border-[#10b981] outline-none transition-all font-bold text-base md:text-lg" placeholder="Email Address" />
              </div>

              <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 focus:border-[#10b981] outline-none transition-all text-white font-bold text-base md:text-lg appearance-none">
                <option className="bg-zinc-900">Web & App Development</option>
                <option className="bg-zinc-900">AI & Automation</option>
                <option className="bg-zinc-900">Software Integrations</option>
                <option className="bg-zinc-900">Design & Branding</option>
              </select>

              <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 focus:border-[#10b981] outline-none transition-all resize-none font-bold text-base md:text-lg" placeholder="Mission details..."></textarea>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 text-sm md:text-lg shadow-xl ${isSuccess ? 'bg-white text-black' : 'bg-[#10b981] text-black hover:bg-white'}`}
              >
                {isSubmitting ? (isSuccess ? 'Sync Successful' : 'Synchronizing...') : 'Deploy Transmission'}
                {!isSubmitting && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2z"/></svg>}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;