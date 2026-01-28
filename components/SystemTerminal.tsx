import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOG_MESSAGES = [
  "UPLINK STABLE: Node-India-South-1",
  "LATENCY: 4.2ms | JITTER: 0.1ms",
  "ENCRYPTING: SHA-512 Handshake Complete",
  "DEPLOYING: AI-Native Layer V2.4",
  "CORE: Thermal Optimal (32°C)",
  "QUERY: Received from Client-ID: 8829",
  "RELAY: Routing via Riyadh-Edge-01",
  "SYNC: Global Database Matrix Updated",
  "STATUS: High-Frequency Mode ACTIVE",
  "ENGINE: Mistral-Reasoning-Core Online"
];

const SystemTerminal: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = `[${new Date().toLocaleTimeString()}] ${LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)]}`;
      setLogs(prev => [...prev.slice(-15), newLog]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="fixed bottom-6 right-6 z-[100] hidden md:block">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-80 h-64 glass-panel border border-white/10 rounded-2xl mb-4 overflow-hidden flex flex-col shadow-2xl bg-black/80 backdrop-blur-xl"
          >
            <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#10b981]">Live Node Telemetry</span>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
              </div>
            </div>
            <div 
              ref={scrollRef}
              className="flex-1 p-4 font-mono text-[9px] leading-relaxed overflow-y-auto scrollbar-hide space-y-1"
            >
              {logs.map((log, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-white/20">#</span>
                  <span className={log.includes('LATENCY') ? 'text-[#10b981]' : 'text-zinc-400'}>{log}</span>
                </div>
              ))}
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1.5 h-3 bg-[#10b981] ml-1 align-middle"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 bg-[#10b981] text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)] relative"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isExpanded ? (
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          ) : (
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          )}
        </svg>
        {!isExpanded && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-black rounded-full animate-pulse"></span>
        )}
      </motion.button>
    </div>
  );
};

export default SystemTerminal;