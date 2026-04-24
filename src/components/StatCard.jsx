import { motion } from 'framer-motion';

export const StatCard = ({ label, value, subtext, dark = false }) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.02 }}
    className={`p-10 rounded-[2.5rem] transition-all duration-500 border ${
      dark 
        ? 'bg-slate-900/40 border-slate-800 shadow-2xl hover:border-indigo-500/50 hover:bg-slate-900/60' 
        : 'bg-white border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200'
    }`}
  >
    <div className="flex flex-col h-full">
      <span className="inline-block w-12 h-1 bg-indigo-600 mb-6 rounded-full" />
      <p className={`text-[11px] font-black uppercase tracking-[0.2em] mb-3 ${
        dark ? 'text-indigo-400' : 'text-indigo-600'
      }`}>
        {label}
      </p>
      <h3 className={`text-5xl font-black tracking-tighter mb-3 ${
        dark ? 'text-white' : 'text-slate-900'
      }`}>
        {value}
      </h3>
      <p className={`text-sm font-medium leading-relaxed ${
        dark ? 'text-slate-400' : 'text-slate-500'
      }`}>
        {subtext}
      </p>
    </div>
  </motion.div>
);