import React from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Globe2 } from 'lucide-react';

const featureGroups = [
  {
    icon: Server,
    title: 'Cloud Infrastructure',
    color: 'text-[#6b63ff]',
    bgColor: 'bg-indigo-500/10',
    items: ['Dynamic Autoscaling', 'High-Availability Platform', 'Lightning-fast Global CDN', 'Lagos, Nairobi & Joburg Nodes']
  },
  {
    icon: Shield,
    title: 'Security & Support',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    items: ['FREE SSL Certificates', 'WAF & Malware Scanning', 'Auto Daily Backups', '24x7 Expert Support']
  },
  {
    icon: Globe2,
    title: 'WordPress Specifics',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    items: ['WordPress Staging & Cloning', 'Integrated WordPress Manager', 'StackCache® Optimisation', 'Auto Core Updates', 'WP-CLI & Checksum Reports']
  }
];

const WPPlatformFeatures = () => {
  return (
    <section className="py-24 bg-[#0b1120]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-indigo-500/10 text-[#6b63ff] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Server size={14} /> Platform
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            Included WordPress Hosting Features
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#6b63ff] to-purple-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featureGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/30 transition-all hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${group.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                <group.icon size={28} className={group.color} />
              </div>
              <h3 className="text-white font-bold text-xl mb-5">{group.title}</h3>
              <ul className="space-y-3.5">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${group.color.replace('text-', 'bg-')}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WPPlatformFeatures;