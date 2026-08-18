import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowDownUp, ShieldCheck, Globe2 } from "lucide-react";

const features = [
  {
    icon: <Zap size={22} />,
    title: "Ultra-Fast Performance",
    description:
      "NVMe SSD storage and an optimized stack deliver 3x faster performance than standard hosting.",
  },
  {
    icon: <ArrowDownUp size={22} />,
    title: "Auto Scaling",
    description:
      "Resources automatically adjust to handle traffic spikes without manual intervention.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Enterprise Security",
    description:
      "DDoS protection, firewalls, and automatic backups keep your data safe around the clock.",
  },
  {
    icon: <Globe2 size={22} />,
    title: "Global Network",
    description:
      "15 data centers worldwide, with African edge nodes, to deploy closer to your users.",
  },
];

const CloudFeatures = () => {
  return (
    <section id="features" className="py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">
            Powerful <span className="text-indigo-600">Cloud Infrastructure</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything you need to deploy, manage, and scale your applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow rounded-[2rem] p-8 h-full"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-slate-900 font-black text-lg mb-3">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudFeatures;