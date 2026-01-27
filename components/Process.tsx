
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
          <span className="text-[#10b981] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">The Bycom Method</span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">Digital <span className="text-white/30">Evolution</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-8 glass-panel rounded-3xl border border-white/5 hover:border-[#10b981]/20 transition-all duration-500 overflow-hidden"
            >
              <div 
                className="text-7xl font-black mb-6 opacity-40 group-hover:opacity-100 transition-all duration-700 select-none"
                style={{ 
                  color: step.color,
                  textShadow: `0 0 20px ${step.color}22`
                }}
              >
                {step.num}
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest mb-4 group-hover:text-white transition-colors">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                {step.desc}
              </p>
              
              <div 
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#10b981] transition-all duration-700"
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
