import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Zap } from 'lucide-react';

const SharedHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[85vh] flex items-center bg-[#0b1120]">
      {/* Ambient glow */}
      <div className="absolute top-[-15%] left-[-15%] w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(0,0,0,0) 70%)' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(107,99,255,0.08)', border: '1px solid rgba(107,99,255,0.2)' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-indigo-300 uppercase tracking-widest">
                Shared Hosting Plans Available
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Affordable Shared Hosting <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Built for Everyday Websites
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
              Launch your website with reliable shared hosting designed for personal sites, 
              blogs, portfolios, startups, and small businesses across Africa.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#pricing" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6b63ff] to-[#818cf8] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:translate-y-[-2px] transition-all shadow-lg shadow-indigo-500/25">
                View Plans <ArrowRight size={16} />
              </a>
              <a href="#what-is" 
                className="inline-flex items-center gap-2 bg-transparent text-indigo-300 border border-indigo-500/30 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all">
                Get Started <ArrowRight size={16} />
              </a>
            </div>

            {/* Trust bar */}
            <div className="border-t border-white/10 pt-6">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Lock size={16} className="text-[#6b63ff]" />
                  Free SSL Certificates
                </div>
                <div className="hidden md:block w-px h-4 bg-white/10" />
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Zap size={16} className="text-[#6b63ff]" />
                  One-Click Apps
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10">
              <img 
                src="assets/new-images/shared-hero-img.png" 
                alt="Shared hosting server illustration"
                className="w-full h-auto object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000'; }}
              />
              {/* Gradient overlay from left */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-[#0b1120]/60 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SharedHero;
