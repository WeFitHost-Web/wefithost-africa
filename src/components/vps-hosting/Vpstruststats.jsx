import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "2.3×", label: "Faster than average VPS arrays" },
  { value: "99.99%", label: "Uptime infrastructure SLA" },
  { value: "24/7", label: "Platform infrastructure monitoring" },
  { value: "3ms", label: "SSD block storage latency" },
];

const VPSTrustStats = () => {
  return (
    <section className="py-14 bg-slate-950 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-center border-r last:border-r-0 border-slate-900 px-2"
            >
              <div className="text-3xl md:text-5xl font-black text-indigo-400 tracking-tighter mb-1">
                {s.value}
              </div>
              <p className="text-slate-400 text-xs md:text-sm font-medium leading-snug">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VPSTrustStats;