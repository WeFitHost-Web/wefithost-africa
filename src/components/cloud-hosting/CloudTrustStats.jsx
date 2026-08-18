import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "15", label: "Global Data Centers" },
  { value: "24/7", label: "Expert Support" },
  { value: "500ms", label: "Avg. Response Time" },
];

const CloudTrustStats = () => {
  return (
    <section className="py-14 bg-[#1e293b] border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-center border-r last:border-r-0 border-slate-700/50 px-2"
            >
              <div className="text-3xl md:text-5xl font-black text-indigo-400 tracking-tighter mb-1">
                {s.value}
              </div>
              <p className="text-slate-300 text-xs md:text-sm font-medium leading-snug">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudTrustStats;