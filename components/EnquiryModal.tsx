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
    
    // --- BOT PROTECTION ---
    if (formData.hp.length > 0) return;

    setIsSubmitting(true);
    setStatus('waiting');
    
    const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScNEZXhMNXxAIT17fM4l5QkwRumU7Qx8TjstiluuxAWb6S1yA/formResponse";
    const myWhatsAppNumber = "917259830339"; 

    const googlePayload = new FormData();
    googlePayload.append('entry.2005620554', formData.name);
    googlePayload.append('entry.1045781291', formData.email);
    googlePayload.append('entry.839337160', formData.message);

    try {
      await fetch(googleFormUrl, {
        method: "POST",
        body: googlePayload,
        mode: "no-cors"
      });

      setStatus('success');
      
      // --- PERSONALIZED MESSAGE FORMAT ---
      const waText = `Hi, Im ${formData.name} - ${formData.email}. ${formData.message}`;
      const waUrl = `https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(waText)}`;
      
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/98 backdrop-blur-xl" />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="relative w-full max-w-lg glass-panel rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] my-auto"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors z-[110]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="mb-8 text-left">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2 leading-none text-white">Project <span className="text-[#10b981]">Enquiry</span></h2>
              <p className="text-zinc-400 font-bold text-[9px] md:text-[10px] tracking-widest uppercase">Direct Engineering Consultation</p>
            </div>

            <form onSubmit={handleSubmit} className={`space-y-4 md:space-y-5 ${status === 'waiting' ? 'opacity-50 pointer-events-none' : ''}`}>
              <input type="text" className="hidden" id="bycom_hp_field" value={formData.hp} onChange={e => setFormData({...formData, hp: e.target.value})} />

              <div className="space-y-4">
                <div className="group">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#10b981] mb-2 px-1">Your Identity</label>
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} type="text" className="w-full bg-white/[0.07] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 focus:border-[#10b981] outline-none transition-all font-bold text-base text-white placeholder:text-zinc-500 shadow-inner" placeholder="Full Name / Company" />
                </div>
                <div className="group">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#10b981] mb-2 px-1">Relay Address</label>
                  <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type="email" className="w-full bg-white/[0.07] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 focus:border-[#10b981] outline-none transition-all font-bold text-base text-white placeholder:text-zinc-500 shadow-inner" placeholder="name@company.com" />
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] font-black uppercase tracking-widest text-[#10b981] mb-2 px-1">Mission Specs</label>
                <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={4} className="w-full bg-white/[0.07] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 focus:border-[#10b981] outline-none transition-all resize-none font-bold text-base text-white placeholder:text-zinc-500 shadow-inner" placeholder="Describe your project vision and goals..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-5 md:py-6 rounded-2xl md:rounded-3xl font-black uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-4 text-xs md:text-sm shadow-2xl ${status === 'success' ? 'bg-white text-black' : 'bg-[#10b981] text-black hover:bg-white active:scale-95'}`}
              >
                {status === 'waiting' ? 'Processing...' : status === 'success' ? 'Request Sent' : 'Submit Enquiry'}
                <svg className={`w-4 h-4 md:w-5 md:h-5 ${status === 'waiting' ? 'animate-spin' : ''}`} fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2z"/></svg>
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;