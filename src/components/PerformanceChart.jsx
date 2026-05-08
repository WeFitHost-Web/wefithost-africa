import React from 'react';
import { motion } from 'framer-motion';

export const PerformanceChart = () => {
  const data = [
    { label: "Standard HDD", value: 30, color: "bg-slate-400" },
    { label: "Standard SSD", value: 55, color: "bg-indigo-400" },
    { label: "WeFitHost NVMe", value: 100, color: "bg-indigo-600" },
  ];

  return (
    <div className="space-y-6 bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
      <h4 className="text-xl font-black text-slate-900 mb-8">Disk I/O Performance (MB/s)</h4>
      {data.map((item, i) => (
        <div key={i} className="space-y-2">
          <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
            <span>{item.label}</span>
            <span>{item.value}%</span>
          </div>
          <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${item.value}%` }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className={`h-full ${item.color} rounded-full`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};