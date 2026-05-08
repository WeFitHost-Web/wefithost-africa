import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Cloud, Activity } from 'lucide-react';

export const CloudHero = () => (
  <section className="pt-44 pb-32 bg-slate-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-7">
        <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Elastic Global Infrastructure</span>
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
          Infinite Scale. <br />
          <span className="text-indigo-600 italic">Zero Downtime.</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed font-medium">
          Deploy true decentralized architecture in Kenya and Nigeria. Distribute computing workloads dynamically across high-availability clusters.
        </p>
        <button className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-600/20">
          Request Cloud Consultation
        </button>
      </div>

      <div className="lg:col-span-5 relative flex justify-center">
        <div className="absolute w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full z-0" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="relative z-10 text-slate-200/50 w-80 h-80 flex items-center justify-center border-4 border-dashed border-slate-200 rounded-full"
        >
          <Globe2 size={100} className="text-indigo-400 animate-pulse" />
          <div className="absolute top-0 left-10 p-4 bg-white rounded-2xl shadow-2xl text-indigo-600"><Cloud size={24} /></div>
          <div className="absolute bottom-10 right-4 p-4 bg-white rounded-2xl shadow-2xl text-indigo-600"><Activity size={24} /></div>
        </motion.div>
      </div>
    </div>
  </section>
);