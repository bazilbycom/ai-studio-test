import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { getMistralResponse } from '../services/aiService';
import { Message } from '../types';

const BDMManager: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Protocol active. I am your **Bycom Strategic Liaison**.\n\nReady to discuss your enterprise vision. How can we accelerate your digital roadmap today?\n\n- Scale Infrastructure\n- AI Workflow Design\n- Custom Fintech Engines" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ 
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    const currentMessages = [...messages, userMsg];
    setMessages(currentMessages);
    setInput('');
    setIsLoading(true);

    try {
      const history = currentMessages
        .filter(m => m.role === 'user' || m.role === 'assistant')
        .map(m => ({ role: m.role as 'user' | 'assistant', content: m.content }));
      
      const response = await getMistralResponse(input, history);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      console.error("BDM UI Error:", err);
      setMessages(prev => [...prev, { role: 'assistant', content: "Neural relay disrupted. Please reach out via WhatsApp for immediate support: https://wa.me/966575271327" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="bdm-liaison" className="py-24 px-6 relative z-10 min-h-screen flex items-center bg-transparent">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#10b981]/30 bg-[#10b981]/5 mb-8">
             <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div>
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#10b981]">Liaison Core Active</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85] text-white">
            Mistral <br/><span className="text-white/20">Liaison</span>
          </h2>
          <p className="text-zinc-400 text-xl md:text-2xl mb-12 leading-relaxed font-bold max-w-lg italic opacity-90">
            "We don't just build code—we engineer outcomes. Let's draft your next strategic move."
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="px-8 py-5 glass-panel rounded-3xl border border-white/10 flex flex-col">
              <span className="text-[#10b981] font-black text-3xl">L-01</span>
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mt-2">Relay Node</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel rounded-[3rem] h-[650px] flex flex-col overflow-hidden border border-white/20 shadow-2xl bg-[#0a0a0c]/80"
        >
          <div className="bg-white/5 p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-[#10b981] rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-300">SECURE UPLINK // BDM</span>
            </div>
            <div className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Mistral Large 2</div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
            <AnimatePresence mode="popLayout">
              {messages.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] px-6 py-4 rounded-[1.8rem] text-sm md:text-base shadow-xl ${
                    m.role === 'user' 
                      ? 'bg-[#10b981] text-black font-black' 
                      : 'bg-white/5 border border-white/10 text-zinc-200'
                  }`}>
                    {m.role === 'assistant' ? (
                      <div className="prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-strong:text-[#10b981] prose-a:text-[#10b981] prose-a:font-black">
                        <ReactMarkdown>{m.content}</ReactMarkdown>
                      </div>
                    ) : (
                      m.content
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full flex gap-2">
                  <div className="w-2 h-2 bg-[#10b981] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#10b981]/60 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-[#10b981]/30 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-black/40 backdrop-blur-3xl border-t border-white/10">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Message Liaison..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-base focus:outline-none focus:border-[#10b981] transition-all pr-16 text-white placeholder:text-zinc-600 font-bold"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-2 h-12 w-12 bg-[#10b981] rounded-xl flex items-center justify-center text-black hover:bg-white transition-all disabled:opacity-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BDMManager;