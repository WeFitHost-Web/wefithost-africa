import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle2, AlertTriangle, Zap } from 'lucide-react';

export const CloudComparison = ({ activeTab, setActiveTab }) => {
  const data = {
    shared: {
      title: "Static Shared Environment",
      description: "Traditional hosting nests hundreds of accounts on single machines. A 'noisy neighbor' can drain your performance.",
      status: "Legacy Architecture",
      color: "red",
      points: [
        { text: "No isolated storage guarantees", status: "fail" },
        { text: "Shared public IP reputational risks", status: "fail" },
        { text: "Restricted configuration freedoms", status: "fail" },
        { text: "Vertical scaling requires migration", status: "fail" }
      ]
    },
    cloud: {
      title: "Elastic Fluid Architecture",
      description: "Multiple processing layers coordinate to secure dedicated resource arrays with seamless automated failover.",
      status: "Enterprise Grade",
      color: "indigo",
      points: [
        { text: "Instant horizontal/vertical scaling", status: "pass" },
        { text: "Native isolation from hardware risks", status: "pass" },
        { text: "High availability redundancy", status: "pass" },
        { text: "Dedicated virtualized networking", status: "pass" }
      ]
    }
  };

  const current = data[activeTab];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">How Does Cloud Differ?</h2>
        <p className="text-slate-500 mt-4 font-medium">Why modern systems depend on dynamic hosting layers.</p>
        
        <div className="mt-8 inline-flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          <button 
            onClick={() => setActiveTab('shared')} 
            className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'shared' ? 'bg-white text-red-600 shadow-sm border border-red-100' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Shared Hosting
          </button>
          <button 
            onClick={() => setActiveTab('cloud')} 
            className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'cloud' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
          >
            WeFit Cloud
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white p-2 md:p-4 rounded-[4rem] border border-slate-100 shadow-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Info Panel */}
            <div className={`p-10 md:p-16 rounded-[3rem] ${activeTab === 'cloud' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-white'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${activeTab === 'cloud' ? 'border-indigo-400 text-indigo-100' : 'border-slate-700 text-slate-400'}`}>
                  {current.status}
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 leading-none">{current.title}</h3>
              <p className={`text-sm leading-relaxed mb-8 ${activeTab === 'cloud' ? 'text-indigo-100' : 'text-slate-400'}`}>
                {current.description}
              </p>
              <button className={`flex items-center gap-2 font-black text-xs uppercase tracking-widest ${activeTab === 'cloud' ? 'text-white' : 'text-indigo-400'}`}>
                Learn more about architecture <Zap size={14} />
              </button>
            </div>

            {/* Checklist Panel */}
            <div className="p-10 md:p-16 flex flex-col justify-center bg-slate-50 rounded-[3rem]">
              <div className="space-y-6">
                {current.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    {point.status === 'pass' ? (
                      <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                    ) : (
                      <XCircle className="text-red-400 shrink-0" size={20} />
                    )}
                    <span className="text-sm font-bold text-slate-700">{point.text}</span>
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