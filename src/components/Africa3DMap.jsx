import React from 'react';
import { motion } from 'framer-motion';

const locations = [
  { city: "Lagos", country: "Nigeria", top: "48%", left: "38%", role: "Primary Hub" },
  { city: "Nairobi", country: "Kenya", top: "58%", left: "75%", role: "East Africa Focus" },
  { city: "Accra", country: "Ghana", top: "52%", left: "30%", role: "Regional Ops" },
  { city: "Johannesburg", country: "South Africa", top: "82%", left: "60%", role: "Southern Gateway" },
];

const Africa3DMap = () => {
  return (
    <div className="relative w-full h-[520px] flex items-center justify-center perspective-[1500px]">
      
      {/* 3D BOARD */}
      <motion.div
        initial={{ rotateX: 35, rotateZ: -12, opacity: 0, y: 30 }}
        whileInView={{ rotateX: 25, rotateZ: -8, opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-[90%] h-[80%] transform-gpu"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* The Surface - Styled as a "Targeting Platform" */}
        <div className="absolute inset-0 rounded-[3rem] bg-slate-900 shadow-[0_50px_100px_rgba(0,0,0,0.4)] border border-slate-800 overflow-hidden">
          {/* Animated Tech Grid */}
          <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:30px_30px]" />
          
          {/* Subtle Radial Glow on targeted zones */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15)_0%,transparent_70%)]" />
        </div>

        {/* SVG Network Lines - Representing the "Connection" between target markets */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
           <motion.path 
            d="M38,48 L75,58 L60,82 L30,52 Z" 
            fill="none" 
            stroke="rgba(99,102,241,0.3)" 
            strokeWidth="0.5" 
            strokeDasharray="2,2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
           />
        </svg>

        {/* TARGET PINS */}
        {locations.map((loc, i) => (
          <div
            key={i}
            className="absolute z-10"
            style={{ top: loc.top, left: loc.left }}
          >
            {/* Target Ping */}
            <span className="absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-40"></span>
              <span className="relative inline-flex rounded-full h-10 w-10 bg-indigo-600/20 border border-indigo-500/50" />
            </span>

            {/* Hub Point */}
            <div className="w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#fff]" />

            {/* Label - Glassmorphism */}
            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * i }}
              className="absolute left-6 top-0 -translate-y-1/2 bg-slate-800/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl shadow-2xl whitespace-nowrap"
            >
              <p className="text-[9px] font-black uppercase text-indigo-400 tracking-widest mb-0.5">
                {loc.role}
              </p>
              <p className="text-xs font-bold text-white">
                {loc.city}, {loc.country}
              </p>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Africa3DMap;