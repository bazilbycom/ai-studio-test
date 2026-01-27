
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { getAIArchitectResponse } from '../services/geminiService';
import { Message } from '../types';

const AIArchitect: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm the **Bycom AI Architect**. \n\nTell me about your project, and I'll help you draft the perfect tech strategy. \n- Web Ecosystems\n- Native Apps\n- AI Integrations" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const playSfx = (type: 'send' | 'receive') => {
    const frequency = type === 'send' ? 880 : 440;
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(frequency > 500 ? 1200 : 200, ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    playSfx('send');
    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getAIArchitectResponse(input, messages);
    playSfx('receive');
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-architect" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-[#10b981] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block underline decoration-2 underline-offset-8">AI Strategy Hub</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 font-heading tracking-tighter uppercase leading-[0.9]">
            The Digital <br/>
            <span className="text-[#10b981]">Architect</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed font-medium">
            Not sure where to start? Our AI agent is trained on thousands of enterprise success patterns. Describe your project vision, and get an instant blueprint.
          </p>
          <div className="space-y-4">
            <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-[#10b981] group-hover:bg-[#10b981] group-hover:text-black transition-all shadow-[0_0_15px_rgba(16,185,129,0)] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span className="font-black text-xs tracking-widest uppercase">Instant Stack Analysis</span>
            </motion.div>
            <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-400 group-hover:text-black transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <span className="font-black text-xs tracking-widest uppercase">Velocity Estimates</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-panel rounded-[2rem] h-[650px] flex flex-col overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] relative"
        >
          <div className="bg-white/5 p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400">Bycom-OS / Neural-Arch-V3</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            <AnimatePresence mode="popLayout">
              {messages.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[90%] px-5 py-4 rounded-2xl text-sm shadow-xl ${
                    m.role === 'user' 
                      ? 'bg-[#10b981] text-black font-black' 
                      : 'bg-white/5 border border-white/10 text-zinc-100'
                  }`}>
                    {m.role === 'assistant' ? (
                      <div className="prose-chat prose-invert max-w-none">
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
              <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }} className="flex justify-start">
                <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full opacity-50"></div>
                  <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full opacity-20"></div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="p-4 bg-black/40 backdrop-blur-md border-t border-white/10">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="What are we building today?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-[#10b981]/50 transition-all pr-14 placeholder:text-zinc-600 font-bold"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-2 h-10 w-10 bg-[#10b981] rounded-lg flex items-center justify-center text-black hover:bg-white transition-colors disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIArchitect;
