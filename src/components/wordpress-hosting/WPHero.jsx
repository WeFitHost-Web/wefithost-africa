import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layout, Star, CheckCircle } from 'lucide-react';

const trustItems = [
  '99.9% Uptime Guarantee',
  'Free SSL Certificates',
  'Automated Daily Backups',
  '24/7 Expert Support',
];

const WPHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0b1120] overflow-hidden py-5">
      {/* Ambient glow orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(107,99,255,0.06) 0%, rgba(0,0,0,0) 70%)' }} />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, rgba(0,0,0,0) 70%)' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-indigo-500/20 bg-indigo-500/5">
              <Layout size={16} className="text-[#6b63ff]" />
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">
                Managed WordPress Hosting
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Blazing Fast WordPress Hosting <br />
              <span className="bg-gradient-to-r from-[#6b63ff] via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Built for African Growth
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
              Launch, manage and scale WordPress websites with high-performance infrastructure 
              running on African servers. Enterprise security, automated backups and local expert support.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="https://my.wefithost.com/order-wordpress-hosting" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6b63ff] to-[#818cf8] text-white px-8 py-4 rounded-full font-bold text-sm hover:translate-y-[-2px] transition-all shadow-lg shadow-indigo-500/25">
                Get Started Now <ArrowRight size={16} />
              </a>
              <a href="#pricing" 
                className="inline-flex items-center gap-2 bg-transparent text-slate-300 border border-slate-700 px-8 py-4 rounded-full font-bold text-sm hover:bg-slate-800 hover:border-slate-600 transition-all">
                View Plans
              </a>
            </div>

            {/* Trust metrics */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle size={14} className="text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-800/50">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-slate-500 text-sm">Rated 4.9/5 by African WordPress users</span>
            </div>
          </motion.div>

          {/* Right: Image with gradient overlay */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10">
              <img 
                src="assets/new-images/wordpress-hero-img.png" 
                alt="WordPress hosting dashboard"
                className="w-full h-auto object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1000'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-[#0b1120]/40 to-transparent" />
            </div>
            
            {/* Floating stat card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-xl p-4 shadow-xl"
            >
              <div className="text-2xl font-black text-white">&lt;0.5s</div>
              <div className="text-xs text-slate-400">Avg Load Time from Lagos</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WPHero;
