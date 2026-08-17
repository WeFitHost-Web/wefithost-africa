import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Zap } from 'lucide-react';
import sharedHostingBg from '../../assets/shared-hosting-bg.png';

const SharedHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[85vh] flex items-center bg-[#0b1120]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src={sharedHostingBg} 
          alt="Shared hosting server illustration"
          className="w-full h-full object-cover"
          onError={(e) => { 
            e.currentTarget.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000'; 
          }}
        />
        {/* Adjusted subtle dark overlay to maintain text contrast without hiding the image */}
        <div className="absolute inset-0 bg-[#0b1120]/50 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/30 to-[#0b1120]/50" />
      </div>

      {/* Ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(0,0,0,0) 70%)' }} 
      />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full text-center">
        {/* Centered Content Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-md">
            Affordable Shared Hosting <br />
            <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Built for Everyday Websites
            </span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed drop-shadow">
            Launch your website with reliable shared hosting designed for personal sites, 
            blogs, portfolios, startups, and small businesses across Africa.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a 
              href="#pricing" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6b63ff] to-[#818cf8] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:translate-y-[-2px] transition-all shadow-lg shadow-indigo-500/25"
            >
              View Plans <ArrowRight size={16} />
            </a>
            <a 
              href="#what-is" 
              className="inline-flex items-center gap-2 bg-slate-900/60 backdrop-blur-md text-indigo-300 border border-indigo-500/40 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-indigo-500/20 hover:border-indigo-500/60 transition-all"
            >
              Get Started <ArrowRight size={16} />
            </a>
          </div>

          {/* Trust bar */}
          <div className="border-t border-white/15 pt-6 w-full max-w-md">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Lock size={16} className="text-[#818cf8]" />
                Free SSL Certificates
              </div>
              <div className="hidden md:block w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Zap size={16} className="text-[#818cf8]" />
                One-Click Apps
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SharedHero;