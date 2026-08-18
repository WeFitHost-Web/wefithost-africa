import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import vpsBg from '../../assets/vps-hero-img.png';

const VPSHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[85vh] flex items-center bg-[#0b0f19]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src={vpsBg} 
          alt="VPS hosting server infrastructure"
          className="w-full h-full object-cover"
          onError={(e) => { 
            e.currentTarget.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000'; 
          }}
        />
        {/* Dark overlay gradient for contrast */}
        <div className="absolute inset-0 bg-[#0b0f19]/70 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/50 to-[#0b0f19]/70" />
      </div>

      {/* Ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)' }} 
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full text-center">
        {/* Centered Content Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
         

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6 drop-shadow-md">
            Raw Iron. <br />
            <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-purple-400 bg-clip-text text-transparent italic">
              No Limits.
            </span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed drop-shadow">
            Provision dedicated virtual private servers with full root access,
            scalable resources, and reliable infrastructure built for
            developers, agencies, and businesses that have outgrown shared
            hosting deployed inside Africa for local speed.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-indigo-500 hover:translate-y-[-2px] transition-all shadow-lg shadow-indigo-600/30 text-center"
            >
              View VPS Plans <ArrowRight size={16} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 bg-slate-900/60 backdrop-blur-md text-slate-200 border border-slate-700/80 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-slate-800 hover:border-slate-600 transition-all text-center"
            >
              Explore Features
            </a>
          </div>

          {/* Trust ribbon */}
          {/* <div className="border-t border-white/15 pt-6 w-full max-w-2xl">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {[
                "99.99% Uptime SLA",
                "Full Root Access",
                "Platform Support Included",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-slate-200 text-sm font-semibold"
                >
                  <CheckCircle2 size={16} className="text-indigo-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default VPSHero;