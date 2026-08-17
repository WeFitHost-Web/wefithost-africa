import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Terminal } from "lucide-react";

const features = [
  {
    icon: <Zap size={22} />,
    title: "Lightning Fast NVMe SSD",
    description:
      "3× faster than standard VPS with AMD EPYC processors and dedicated allocated hardware resources.",
    points: [
      "Fast NVMe storage arrays",
      "Scalable CPU & RAM allocations",
      "Custom OS environment deployments",
      "High-throughput network ports",
    ],
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Enterprise-Grade Security",
    description:
      "Multi-layered environment protection with core infrastructure-level defenses.",
    points: [
      "Network-level DDoS protection",
      "Isolated virtual server environment",
      "Optional automated backup add-ons",
      "Secure African data center infrastructure",
    ],
  },
  {
    icon: <Terminal size={22} />,
    title: "Developer Freedom",
    description:
      "You retain complete software configuration control. We look after the underlying platform stability.",
    points: [
      "Full root SSH access control",
      "Install custom runtime stacks",
      "Infrastructure support included",
      "Optional control panel add-ons",
    ],
  },
];

const VPSFeatures = () => {
  return (
    <section id="features" className="py-28 bg-[#0b1120] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
            Why Choose Our <span className="text-indigo-400">VPS Hosting?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            High-performance infrastructure designed for ultimate developer control, deployed on African soil.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 h-full flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-white font-black text-xl mb-3">{f.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{f.description}</p>
              <ul className="space-y-2.5 mt-auto">
                {f.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {p}
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

export default VPSFeatures;