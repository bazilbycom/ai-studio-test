import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  onOpenModal: () => void;
}

const spintax = [
  "Engineering Peak Performance",
  "Beyond Computing Limits",
  "Constructing Digital Excellence",
  "Architecting Future Systems",
  "Hyper-Scale Infrastructure",
  "Sub-ms Latency Engineering"
];

const ShootingStar = ({ delay, top, left }: { delay: number, top: string, left: string }) => (
  <motion.div
    initial={{ x: "-100%", y: "0%", opacity: 0 }}
    animate={{
      x: ["0%", "350%"],
      y: ["0%", "250%"],
      opacity: [0, 1, 0]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      repeatDelay: Math.random() * 3 + 1,
      delay,
      ease: "linear"
    }}
    className="absolute w-[250px] h-[1px] bg-gradient-to-r from-transparent via-[#10b981] to-transparent z-0 rotate-[-25deg]"
    style={{ top, left }}
  />
);

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % spintax.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex items-center justify-center overflow-hidden h-screen w-full px-4 md:px-12">
      <div className="absolute inset-0 pointer-events-none z-0">
        <ShootingStar delay={0} top="10%" left="5%" />
        <ShootingStar delay={1.5} top="30%" left="15%" />
        <ShootingStar delay={4} top="50%" left="2%" />
        <ShootingStar delay={0.5} top="70%" left="20%" />
        <ShootingStar delay={2.2} top="85%" left="10%" />
        <ShootingStar delay={5} top="20%" left="25%" />

        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#10b981]/15 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-screen-2xl relative z-10 w-full flex flex-col items-center justify-center text-center mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#10b981]/20 glass-panel mt-12 md:mt-0 mb-10 text-[10px] md:text-[12px] font-black tracking-[0.4em] uppercase text-[#10b981] min-w-[280px] justify-center"
        >
          <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse shadow-[0_0_12px_#10b981]"></span>
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.5 }}
            >
              {spintax[index]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[14vw] sm:text-7xl md:text-8xl lg:text-[clamp(3rem,8vw,8.5rem)] font-black mb-8 leading-[0.85] tracking-tighter uppercase text-center w-full mx-auto text-white"
        >
          <span className="md:hidden block">
            <span className="block">Build</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#06b6d4] text-glow py-2">Beyond</span>
            <span className="block">Limits</span>
          </span>
          <span className="hidden md:inline-block whitespace-nowrap">
            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#06b6d4] text-glow px-2">Beyond</span> Limits
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[14px] sm:text-lg md:text-2xl text-zinc-200 mb-12 max-w-2xl mx-auto leading-relaxed font-semibold px-4 drop-shadow-lg"
        >
          Bycom Solutions constructs <span className="text-[#10b981] font-black">ultra-performant</span> digital infrastructure and AI ecosystems for industry leaders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-[280px] sm:max-w-none"
        >
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-10 py-4 md:px-14 md:py-5 bg-[#10b981] text-black font-black uppercase tracking-[0.25em] rounded-2xl hover:bg-white hover:scale-105 transition-all shadow-2xl text-[10px] md:text-[11px]"
          >
            Consult Architect
          </button>
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-10 py-4 md:px-14 md:py-5 border border-white/10 glass-panel font-black uppercase tracking-[0.25em] rounded-2xl hover:border-[#10b981] transition-all text-[10px] md:text-[11px] text-white"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;