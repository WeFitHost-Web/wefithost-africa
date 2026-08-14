import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Server, Shield, Database, Headphones, Sliders, Zap } from 'lucide-react';

const comparisons = [
  {
    metric: 'Load Time',
    traditional: 'Higher Time',
    wefit: 'Blazing Fast',
    icon: Zap,
    improvement: '5x faster'
  },
  {
    metric: 'Security Platform',
    traditional: 'Standard Protection',
    wefit: 'Advanced WAF',
    icon: Shield,
    improvement: 'Enterprise-grade'
  },
  {
    metric: 'Data Backups',
    traditional: 'Optional Add-on',
    wefit: 'Free Daily Included',
    icon: Database,
    improvement: 'Always protected'
  },
  {
    metric: 'Support Tier',
    traditional: 'General Agents',
    wefit: 'WP Specialists',
    icon: Headphones,
    improvement: 'WordPress experts'
  },
  {
    metric: 'System Tuning',
    traditional: 'Limited/Generic',
    wefit: 'Native WordPress Core',
    icon: Sliders,
    improvement: 'Optimized stack'
  }
];

const stats = [
  { value: '100%', label: 'Network Uptime' },
  { value: '99.98%', label: 'Hardware Reliability' },
  { value: '99.96%', label: 'Application Stability' }
];

const WPPerformance = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Comparison */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-indigo-500/10 text-[#6b63ff] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Server size={14} /> Performance
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
              Performance You Can See and Feel
            </h2>
            <p className="text-slate-500 mb-10 leading-relaxed">
              Our optimized WordPress hosting outperforms traditional shared hosting by up to 300% 
              across critical infrastructure metrics with servers right here in Africa.
            </p>

            <div className="space-y-4">
              {comparisons.map((comp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-slate-50 rounded-xl p-4 border border-slate-100 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <comp.icon size={16} className="text-[#6b63ff]" />
                      <span className="font-bold text-slate-900 text-sm">{comp.metric}</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      {comp.improvement}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-3 border border-slate-200">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Traditional</div>
                      <div className="text-sm text-slate-500 font-medium">{comp.traditional}</div>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                      <div className="text-[10px] font-bold text-[#6b63ff] uppercase tracking-wider mb-1">WeFitHost</div>
                      <div className="text-sm text-[#6b63ff] font-bold flex items-center gap-1">
                        {comp.wefit} <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Dashboard visual + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-slate-800">
              <div className="p-4 border-b border-slate-800 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs text-slate-500 ml-2 font-mono">WeFitHost Dashboard Lagos Node</span>
              </div>
              <img 
                src="https://gloriathemes.com/wp-content/uploads/2023/02/wordpress-custom-dashboard-1.jpg"
                alt="WordPress Optimized Metrics Dashboard"
                className="w-full h-auto"
              />
              <div className="p-6 border-t border-slate-800">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-black text-white">{stat.value}</div>
                      <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Speed test badge */}
            <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap size={24} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">Tested from Lagos, Nigeria</div>
                <div className="text-xs text-slate-500">Average TTFB: 45ms on WordPress Growth plan</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WPPerformance;
