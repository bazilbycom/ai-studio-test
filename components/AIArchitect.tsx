
import React, { useState, useRef, useEffect } from 'react';
import { getAIArchitectResponse } from '../services/geminiService';
import { Message } from '../types';

const AIArchitect: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm the Bycom AI Architect. Tell me about your project, and I'll help you draft the perfect tech strategy." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getAIArchitectResponse(input, messages);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-architect" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-heading tracking-tighter uppercase leading-none">
            Meet your <br/>
            <span className="text-cyan-400">Solution Architect</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Not sure where to start? Our AI agent is trained on thousands of successful project architectures. Describe your vision, and get an instant blueprint for development.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span className="font-bold text-sm tracking-widest uppercase">Instant Tech Blueprints</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-400 group-hover:text-black transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <span className="font-bold text-sm tracking-widest uppercase">Scalability Estimates</span>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-3xl h-[600px] flex flex-col overflow-hidden border border-white/10 shadow-2xl relative">
          <div className="bg-white/5 p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs font-black tracking-widest uppercase">AI-Architect.v3</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-cyan-500 text-black font-medium' 
                    : 'bg-white/5 border border-white/10 text-zinc-200'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white/5 border-t border-white/10">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="e.g. Build me a high-traffic e-commerce app..."
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors pr-12"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-2 h-8 w-8 bg-cyan-500 rounded-lg flex items-center justify-center text-black hover:bg-cyan-400 transition-colors disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIArchitect;
