
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

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Ensure we pass the updated message history including the current user message
      const response = await getAIArchitectResponse(input, messages);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'assistant', content: "Neural link timeout. Please try again or contact support." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-architect" className="pt-32 pb-24 px-6 bg-[#050505] relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-[#10b981] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">AI Strategy Hub</span>
          <h2 className="text-6xl md:text-8xl font-black mb-8 font-heading tracking-tighter uppercase leading-[0.9]">
            The <span className="text-white/20">Digital</span> <br/>
            Architect
          </h2>
          <p className="text-zinc-400 text-xl mb-8 leading-relaxed font-medium">
            Describe your project vision, and get an instant engineering blueprint. Our agent is trained on enterprise-grade architecture patterns.
          </p>
          <div className="flex gap-4">
            <div className="px-6 py-4 glass-panel rounded-2xl border border-white/5 flex flex-col">
              <span className="text-[#10b981] font-black text-2xl">V3.1</span>
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Neural Core</span>
            </div>
            <div className="px-6 py-4 glass-panel rounded-2xl border border-white/5 flex flex-col">
              <span className="text-purple-400 font-black text-2xl">4.0</span>
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1">GPT Logic</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-[3rem] h-[700px] flex flex-col overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
        >
          <div className="bg-white/5 p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-[#10b981] rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400">Arch-Node / KSA-IN-01</span>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
            <AnimatePresence mode="popLayout">
              {messages.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[90%] px-6 py-5 rounded-[2rem] text-sm shadow-xl ${
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
                <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-full flex gap-2 items-center">
                  <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#10b981] rounded-full opacity-50"></div>
                  <div className="w-2 h-2 bg-[#10b981] rounded-full opacity-20"></div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="p-6 bg-black/40 backdrop-blur-md border-t border-white/10">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Describe your vision..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-base focus:outline-none focus:border-[#10b981] transition-all pr-16 placeholder:text-zinc-600 font-bold"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-3 top-3 h-12 w-12 bg-[#10b981] rounded-xl flex items-center justify-center text-black hover:bg-white transition-all disabled:opacity-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIArchitect;
