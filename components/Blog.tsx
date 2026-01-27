import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchPosts, Post } from '../services/blogService';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts().then(data => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-[#10b981] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="pt-40 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[#10b981] font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Intelligence Hub</span>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
            The <br/><span className="text-white/20">Protocol</span>
          </h1>
          <p className="text-zinc-500 max-w-xl text-lg font-medium">Engineering insights, architectural blueprints, and the future of digital ecosystems curated by Bycom Labs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => window.location.hash = `blog/${post.slug}`}
              className="glass-panel group rounded-[2.5rem] overflow-hidden border border-white/5 cursor-pointer hover:border-[#10b981]/30 transition-all shadow-2xl"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={post.thumbnail} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  alt={post.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6 flex gap-2">
                  {post.categories?.map(cat => (
                    <span key={cat} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest text-[#10b981] border border-white/10">{cat}</span>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <p className="text-[10px] font-black uppercase text-zinc-500 tracking-[0.3em] mb-4">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
                <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight mb-4 group-hover:text-[#10b981] transition-colors">{post.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white group-hover:translate-x-2 transition-transform">
                  Read Report
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;