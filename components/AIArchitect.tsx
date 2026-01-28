
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { getAIArchitectResponse } from '../services/geminiService';
import { Message } from '../types';

const BDMManager: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Systems online. I am your **Bycom BDM Liaison**.\n\nReady to engineer your digital dominance. How can we deploy our engineering units for your enterprise today?\n\n- Scale existing infrastructure\n- Build AI-native platforms\n- Modernize Fintech stacks" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
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
      // Map history for Gemini API compliance
      const history = currentMessages.slice(0, -1) as { role: 'user' | 'assistant', content: string }[];
      // Using Gemini-powered BDM Liaison
      const response = await getAIArchitectResponse(input, history);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      console.error("BDM UI Error:", err);
      setMessages(prev => [...prev, { role: 'assistant', content: "Liaison uplink timed out. Contacting manual relay..." }]);
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
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#10b981]">Growth Strategist Active</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85] text-white">
            Gemini <br/><span className="text-white/20">Liaison</span>
          </h2>
          <p className="text-zinc-200 text-xl md:text-2xl mb-12 leading-relaxed font-bold max-w-lg italic opacity-90">
            "Your digital legacy isn't an accident—it's engineered. Let's draft your next-gen growth strategy today."
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="px-8 py-5 glass-panel rounded-3xl border border-white/10 flex flex-col bg-gradient-to-br from-emerald-500/10 to-transparent">
              <span className="text-[#10b981] font-black text-3xl">BDM</span>
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-2">Executive Lead</span>
            </div>
            <div className="px-8 py-5 glass-panel rounded-3xl border border-white/10 flex flex-col bg-gradient-to-br from-purple-500/10 to-transparent">
              <span className="text-purple-400 font-black text-3xl">G-V3</span>
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-2">Gemini Core</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel rounded-[3.5rem] h-[750px] flex flex-col overflow-hidden border border-white/20 shadow-[0_50px_100px_rgba(16,185,129,0.15)] bg-black/40 backdrop-blur-3xl"
        >
          <div className="bg-white/5 p-8 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-[#10b981] rounded-full animate-pulse shadow-[0_0_15px_#10b981]"></div>
              <span className="text-[11px] font-black tracking-[0.3em] uppercase text-zinc-200">STRATEGIC RELAY // BDM-BYCOM</span>
            </div>
            <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">ENCRYPTED</div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-10 scrollbar-hide">
            <AnimatePresence mode="popLayout">
              {messages.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] px-8 py-6 rounded-[2.5rem] text-sm md:text-base shadow-2xl relative ${
                    m.role === 'user' 
                      ? 'bg-gradient-to-r from-emerald-500 to-[#10b981] text-black font-black' 
                      : 'bg-white/[0.07] border border-white/10 text-white font-semibold'
                  }`}>
                    {m.role === 'assistant' ? (
                      <div className="prose prose-invert max-w-none prose-p:leading-relaxed prose-strong:text-[#10b981]">
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
              <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }} className="flex justify-start">
                <div className="bg-white/10 border border-white/10 px-8 py-5 rounded-full flex gap-3 items-center">
                  <div className="w-2.5 h-2.5 bg-[#10b981] rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-zinc-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-zinc-700 rounded-full"></div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="p-8 bg-black/60 backdrop-blur-3xl border-t border-white/10">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Draft your mission Specs..."
                className="w-full bg-white/[0.05] border border-white/10 rounded-3xl px-8 py-6 text-lg focus:outline-none focus:border-[#10b981] transition-all pr-20 placeholder:text-zinc-600 font-black text-white"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-4 top-4 h-14 w-14 bg-[#10b981] rounded-2xl flex items-center justify-center text-black hover:bg-white transition-all disabled:opacity-50 shadow-lg"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BDMManager;
