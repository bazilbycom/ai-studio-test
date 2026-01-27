import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'General Inquiry', message: '', hp: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'waiting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.hp.length > 0) return;
    setIsSubmitting(true);
    setStatus('waiting');
    const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScNEZXhMNXxAIT17fM4l5QkwRumU7Qx8TjstiluuxAWb6S1yA/formResponse";
    const googlePayload = new FormData();
    googlePayload.append('entry.2005620554', formData.name);
    googlePayload.append('entry.1045781291', formData.email);
    googlePayload.append('entry.839337160', formData.message);
    try {
      await fetch(googleFormUrl, { method: "POST", body: googlePayload, mode: "no-cors" });
      setStatus('success');
      const waText = `Hi, Im ${formData.name} - ${formData.email}. ${formData.message}`;
      const waUrl = `https://wa.me/917259830339?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank');
      setTimeout(() => {
        onClose();
        setIsSubmitting(false);
        setStatus('idle');
        setFormData({ name: '', email: '', service: 'General Inquiry', message: '', hp: '' });
      }, 1500);
    } catch (err) {
      console.error("Submission error", err);
      setIsSubmitting(false);
      setStatus('idle');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/98 backdrop-blur-2xl" />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="relative w-full max-w-lg glass-panel rounded-[3rem] p-10 md:p-14 border border-white/20 shadow-[0_0_150px_rgba(16,185,129,0.25)] my-auto overflow-hidden bg-gradient-to-b from-white/[0.05] to-transparent"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#10b981] to-transparent"></div>
            
            <button onClick={onClose} className="absolute top-8 right-8 text-zinc-400 hover:text-white transition-all hover:rotate-90 z-[110]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="mb-10 text-left">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-3 leading-none text-white">Project <span className="text-[#10b981]">Enquiry</span></h2>
              <p className="text-zinc-200 font-black text-[10px] md:text-[11px] tracking-[0.4em] uppercase opacity-80">Direct Engineering Consultation</p>
            </div>

            <form onSubmit={handleSubmit} className={`space-y-6 ${status === 'waiting' ? 'opacity-50 pointer-events-none' : ''}`}>
              <input type="text" className="hidden" id="bycom_hp_field" value={formData.hp} onChange={e => setFormData({...formData, hp: e.target.value})} />

              <div className="space-y-6">
                <div className="group">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white mb-3 px-1">Full Name / Entity</label>
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} type="text" className="w-full bg-white/[0.05] border border-white/10 rounded-2xl p-5 md:p-6 focus:border-[#10b981] focus:bg-white/[0.08] outline-none transition-all font-black text-lg text-white placeholder:text-white/60 shadow-inner" placeholder="Enter Identity" />
                </div>
                <div className="group">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white mb-3 px-1">Digital Relay / Email</label>
                  <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type="email" className="w-full bg-white/[0.05] border border-white/10 rounded-2xl p-5 md:p-6 focus:border-[#10b981] focus:bg-white/[0.08] outline-none transition-all font-black text-lg text-white placeholder:text-white/60 shadow-inner" placeholder="name@relay.com" />
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white mb-3 px-1">Mission Specs</label>
                <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={4} className="w-full bg-white/[0.05] border border-white/10 rounded-2xl p-5 md:p-6 focus:border-[#10b981] focus:bg-white/[0.08] outline-none transition-all resize-none font-black text-lg text-white placeholder:text-white/60 shadow-inner" placeholder="Detail your project vision..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-6 md:py-7 rounded-[2rem] font-black uppercase tracking-[0.5em] transition-all flex items-center justify-center gap-6 text-sm md:text-base shadow-2xl ${status === 'success' ? 'bg-white text-black' : 'bg-[#10b981] text-black hover:bg-white active:scale-95'}`}
              >
                {status === 'waiting' ? 'Processing...' : status === 'success' ? 'Request Transmitted' : 'Submit Enquiry'}
                <svg className={`w-6 h-6 ${status === 'waiting' ? 'animate-spin' : ''}`} fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2z"/></svg>
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;