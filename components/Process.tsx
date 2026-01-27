import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Mapping your landscape and identifying the core digital bottlenecks.",
    color: "#10b981"
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Blueprint phase using our proprietary solution design patterns.",
    color: "#06b6d4"
  },
  {
    num: "03",
    title: "Forge",
    desc: "Rapid development using hyper-modern stacks and AI-augmentation.",
    color: "#8b5cf6"
  },
  {
    num: "04",
    title: "Ascension",
    desc: "Deployment, optimization, and continuous growth loops.",
    color: "#ec4899"
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#10b981] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block text-glow">The Bycom Method</span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">Digital <span className="text-white/30">Evolution</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, scale: 1.05 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: false, margin: "-100px" }}
              className="relative group p-8 glass-panel rounded-3xl border border-white/5 hover:border-[#10b981]/20 transition-all duration-500 overflow-hidden"
            >
              <div 
                className="text-7xl font-black mb-6 transition-all duration-700 select-none text-zinc-700 group-hover:opacity-100"
                style={{ 
                  '--step-color': step.color,
                } as any}
              >
                <span className="group-hover:text-[var(--step-color)] transition-colors duration-500 group-hover:drop-shadow-[0_0_15px_var(--step-color)]">
                  {step.num}
                </span>
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest mb-4 transition-colors text-white">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed transition-colors group-hover:text-zinc-200">
                {step.desc}
              </p>
              
              <div 
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#10b981] to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700"
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;