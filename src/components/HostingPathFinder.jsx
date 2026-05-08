import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Zap, ShieldCheck, PieChart, CheckCircle2, ArrowRight } from 'lucide-react';

export const HostingPathFinder = ({ activeTab, setActiveTab }) => {
  const data = {
    shared: {
      title: "Optimized Shared Hosting",
      description: "The perfect launchpad for portfolios, blogs, and emerging small business sites. High performance meets cost-efficiency.",
      status: "Essential Scale",
      cta: "Explore Shared Plans",
      points: [
        "Unmetered Bandwidth for growing traffic",
        "Free SSL & Local Domain Integration",
        "One-Click CMS Deployments (WordPress)",
        "Fully Managed Security Patches"
      ],
      icon: <Rocket className="text-emerald-400" size={32} />
    },
    cloud: {
      title: "Elastic Cloud Infrastructure",
      description: "Engineered for high-traffic apps and fintech systems requiring 99.99% uptime and dynamic resource allocation.",
      status: "High Velocity",
      cta: "Configure Cloud Node",
      points: [
        "Instant Vertical & Horizontal Scaling",
        "Redundant High-Availability Clusters",
        "Dedicated IPv4 & Isolated Networking",
        "Self-Healing Data Architecture"
      ],
      icon: <Zap className="text-indigo-400" size={32} />
    }
  };

  const current = data[activeTab];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">Find Your Foundation</h2>
        <p className="text-slate-500 mt-4 font-medium">Select the environment that matches your current growth stage.</p>
        
        <div className="mt-8 inline-flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          <button 
            onClick={() => setActiveTab('shared')} 
            className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'shared' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Shared Entry
          </button>
          <button 
            onClick={() => setActiveTab('cloud')} 
            className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'cloud' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Cloud Enterprise
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          className="bg-white p-2 md:p-4 rounded-[4rem] border border-slate-100 shadow-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-4">
            <div className={`p-10 md:p-16 rounded-[3rem] transition-colors duration-500 ${activeTab === 'cloud' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
              <div className="flex items-center justify-between mb-8">
                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${activeTab === 'cloud' ? 'border-slate-700 text-slate-400' : 'border-emerald-200 text-emerald-600'}`}>
                  {current.status}
                </div>
                {current.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">{current.title}</h3>
              <p className={`text-sm leading-relaxed mb-10 ${activeTab === 'cloud' ? 'text-slate-400' : 'text-slate-500'}`}>
                {current.description}
              </p>
              <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 ${activeTab === 'cloud' ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                {current.cta} <ArrowRight size={14} />
              </button>
            </div>

            <div className="p-10 md:p-16 flex flex-col justify-center bg-white rounded-[3rem]">
              <div className="space-y-4">
                {current.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:translate-x-2">
                    <CheckCircle2 className={`${activeTab === 'cloud' ? 'text-indigo-500' : 'text-emerald-500'}`} size={20} />
                    <span className="text-sm font-black text-slate-700 uppercase tracking-tight">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};