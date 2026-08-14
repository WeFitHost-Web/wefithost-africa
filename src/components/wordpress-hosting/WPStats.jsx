import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, Headphones, MousePointerClick } from 'lucide-react';

const stats = [
  { icon: Activity, value: '99.9%', label: 'Uptime Guarantee', color: 'text-[#6b63ff]' },
  { icon: Clock, value: '<0.5s', label: 'Avg Load Time from Africa', color: 'text-emerald-500' },
  { icon: Headphones, value: '24/7', label: 'WordPress Support', color: 'text-amber-500' },
  { icon: MousePointerClick, value: '1-Click', label: 'WordPress Install', color: 'text-pink-500' },
];

const WPStats = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all"
            >
              <div className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4`}
                style={{ backgroundColor: stat.color === 'text-[#6b63ff]' ? 'rgba(107,99,255,0.1)' : stat.color === 'text-emerald-500' ? 'rgba(16,185,129,0.1)' : stat.color === 'text-amber-500' ? 'rgba(245,158,11,0.1)' : 'rgba(236,72,153,0.1)' }}>
                <stat.icon size={24} className={stat.color} />
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WPStats;
