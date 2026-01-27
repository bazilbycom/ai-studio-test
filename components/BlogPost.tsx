import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { fetchPostBySlug, Post } from '../services/blogService';

interface BlogPostProps {
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ slug }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    fetchPostBySlug(slug).then(data => {
      setPost(data);
      setLoading(false);
      window.scrollTo(0, 0);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-[#10b981] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Report Not Found</h2>
        <button onClick={() => window.location.hash = 'blog'} className="text-[#10b981] font-black uppercase tracking-widest">Return to Hub</button>
      </div>
    );
  }

  return (
    <article className="min-h-screen pb-24">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#10b981] z-[100] origin-left"
        style={{ scaleX }}
      />

      <header className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={post.thumbnail} className="w-full h-full object-cover blur-3xl scale-150" alt="" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <button onClick={() => window.location.hash = 'blog'} className="mb-12 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#10b981] hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
            Back to Hub
          </button>
          
          <div className="flex justify-center gap-3 mb-8">
            {post.categories?.map(cat => (
              <span key={cat} className="px-4 py-1.5 glass-panel rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-[#10b981]">{cat}</span>
            ))}
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-center gap-6 pt-12 border-t border-white/5">
            <div className="text-left">
              <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mb-1">Published</p>
              <p className="text-white font-bold">{new Date(post.date).toLocaleDateString()}</p>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="text-left">
              <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mb-1">Source</p>
              <p className="text-white font-bold">Bycom Intelligence</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6">
        <div className="aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/5 mb-20 shadow-2xl">
          <img 
            src={post.thumbnail} 
            className="w-full h-full object-cover"
            alt={post.title}
          />
        </div>

        <div className="prose prose-invert prose-emerald max-w-none">
          <ReactMarkdown 
            components={{
              h2: ({node, ...props}) => <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mt-16 mb-8 text-white" {...props} />,
              p: ({node, ...props}) => <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8 font-medium" {...props} />,
              li: ({node, ...props}) => <li className="text-zinc-400 text-lg mb-4 list-disc ml-6" {...props} />,
              code: ({node, ...props}) => <code className="bg-white/5 border border-white/10 px-2 py-1 rounded text-[#10b981] font-mono" {...props} />,
              pre: ({node, ...props}) => <pre className="bg-black/50 border border-white/5 p-8 rounded-3xl overflow-x-auto my-12" {...props} />,
            }}
          >
            {post.body}
          </ReactMarkdown>
        </div>
        
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
             <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#8b5cf6] rounded-2xl flex items-center justify-center font-black text-xl text-black">B</div>
             <div>
               <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Engineering Entity</p>
               <p className="font-bold text-white">Bycom Solutions Lab</p>
             </div>
          </div>
          <button onClick={() => window.location.hash = 'contact'} className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-[#10b981] transition-all">Discuss This Protocol</button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;