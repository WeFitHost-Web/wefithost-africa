import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layout, Star, CheckCircle } from 'lucide-react';
import wpBg from '../../assets/wordpress-hero-img.png';

const trustItems = [
  '99.9% Uptime Guarantee',
  'Free SSL Certificates',
  'Automated Daily Backups',
  
];

const WPHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[85vh] flex items-center bg-[#0b1120]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src={wpBg} 
          alt="WordPress hosting server illustration"
          className="w-full h-full object-cover"
          onError={(e) => { 
            e.currentTarget.src = 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1000'; 
          }}
        />
        {/* Dark overlay gradient for contrast */}
        <div className="absolute inset-0 bg-[#0b1120]/50 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/30 to-[#0b1120]/50" />
      </div>

      {/* Ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(107,99,255,0.12) 0%, rgba(0,0,0,0) 70%)' }} 
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
            Blazing Fast WordPress Hosting <br />
            <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Built for African Growth
            </span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed drop-shadow">
            Launch, manage and scale WordPress websites with high-performance infrastructure 
            running on African servers. Enterprise security, automated backups and local expert support.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a 
              href="https://my.wefithost.com/order-wordpress-hosting" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6b63ff] to-[#818cf8] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:translate-y-[-2px] transition-all shadow-lg shadow-indigo-500/25"
            >
              Get Started Now <ArrowRight size={16} />
            </a>
            <a 
              href="#pricing" 
              className="inline-flex items-center gap-2 bg-slate-900/60 backdrop-blur-md text-indigo-300 border border-indigo-500/40 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-indigo-500/20 hover:border-indigo-500/60 transition-all"
            >
              View Plans <ArrowRight size={16} />
            </a>
          </div>

          {/* Trust metrics */}
          <div className="border-t border-white/15 pt-6 w-full max-w-2xl">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle size={14} className="text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center gap-3 mt-6 pt-4 border-t border-white/10">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-slate-300 text-sm">Rated 4.9/5 by African WordPress users</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WPHero;