import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Globe } from 'lucide-react';
import Africa3DMap from "./Africa3DMap";

const CoverageSection = () => {
  return (
    <section className="py-32 bg-[#0b1120] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT: THE MAP PLATFORM */}
        <div className="order-2 lg:order-1 relative">
          {/* Decorative glow behind map */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
          <Africa3DMap />
        </div>

        {/* RIGHT: TARGETING CONTENT */}
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-indigo-400 text-[11px] font-black uppercase tracking-widest mb-8">
            <Target size={14} /> Strategic Market Focus
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            Empowering Africa’s <br /> 
            <span className="text-indigo-500 text-glow">Fastest-Growing</span> Hubs.
          </h2>

          <p className="text-slate-400 mb-10 leading-relaxed text-lg">
            We focus our infrastructure and support efforts on the continent's most vital economic engines. By optimizing for **Nigeria, Kenya, Ghana, and South Africa**, we provide the regional expertise required to scale African businesses globally.
          </p>

          {/* Stats Cards - Modern Style */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-[2rem] hover:border-indigo-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-4">
                <Globe size={20} />
              </div>
              <p className="text-3xl font-black text-white mb-1">4</p>
              <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Key Markets</p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-[2rem] hover:border-indigo-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4">
                <Target size={20} />
              </div>
              <p className="text-3xl font-black text-white mb-1">Low-Latency</p>
              <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Regional Routing</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-3 px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-indigo-700 hover:scale-105 transition-all shadow-xl shadow-indigo-500/20 group">
              Explore Our Strategy
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;