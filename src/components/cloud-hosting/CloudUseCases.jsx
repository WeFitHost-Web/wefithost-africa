import React from "react";
import { motion } from "framer-motion";
import { AppWindow, ShoppingCart, Building2 } from "lucide-react";

const useCases = [
  {
    icon: <AppWindow size={22} />,
    tag: "SaaS & Apps",
    title: "Web Applications",
    description:
      "Host your web apps with auto-scaling and high availability perfect for SaaS products and business applications.",
    meta: ["Auto-scaling", "99.99% Uptime"],
  },
  {
    icon: <ShoppingCart size={22} />,
    tag: "Online Stores",
    title: "E-commerce Stores",
    description:
      "Handle traffic spikes during sales and holidays with our auto-scaling infrastructure and global CDN.",
    meta: ["Global CDN", "Traffic Spikes"],
  },
  {
    icon: <Building2 size={22} />,
    tag: "Enterprise",
    title: "Enterprise Solutions",
    description:
      "Dedicated resources, private networking, and custom configurations for your mission-critical applications.",
    meta: ["Private Network", "Custom Config"],
  },
];

const CloudUseCases = () => {
  return (
    <section className="py-28 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
            Use Cases
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
            Perfect For Any Workload
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From small blogs to enterprise applications our cloud scales with you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((u, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  {u.icon}
                </div>
                <span className="bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {u.tag}
                </span>
              </div>
              <h3 className="text-white font-black text-xl mb-3">{u.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{u.description}</p>
              <div className="flex gap-4 pt-4 border-t border-slate-800 mt-auto">
                {u.meta.map((m, j) => (
                  <span key={j} className="text-slate-300 text-xs font-medium">
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudUseCases;