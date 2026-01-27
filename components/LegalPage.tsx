
import React from 'react';
import { motion } from 'framer-motion';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'refunds';
}

const content = {
  privacy: {
    title: "Privacy Protocol",
    body: "Bycom Solutions respects the integrity of your data. This protocol outlines how we collect, use, and protect your digital footprint. We only gather information necessary to provide elite digital services and maintain our high-frequency ecosystems. Your data is encrypted and never shared with third-party entities without explicit authorization."
  },
  terms: {
    title: "Terms of Engagement",
    body: "Engaging with Bycom Solutions constitutes acceptance of our digital terms. All code, design architectures, and intellectual assets produced by Bycom remain under our custodianship until full fulfillment of project milestones. Clients are granted a perpetual, non-exclusive license to use the final products as per the service level agreement."
  },
  refunds: {
    title: "Refund Policy",
    body: "Due to the specialized nature of our engineering and creative services, refunds are evaluated on a case-by-case basis. Initial discovery and architectural phase fees are non-refundable. If a project is terminated prior to forge completion, only the unallocated man-hours will be eligible for credit toward future Bycom deployments."
  }
};

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const { title, body } = content[type];
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-40 pb-24 px-6 max-w-4xl mx-auto"
    >
      <span className="text-[#10b981] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Legal Repository</span>
      <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-none">{title}</h1>
      <div className="glass-panel p-10 md:p-16 rounded-[3rem] border border-white/5">
        <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-medium mb-8 italic">Version 2025.01 - Secure Deployment</p>
        <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
          {body.split('\n').map((para, i) => <p key={i}>{para}</p>)}
        </div>
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Authorized by Bycom Solutions Legal Dept.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default LegalPage;
