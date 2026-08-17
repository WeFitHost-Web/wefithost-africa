import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Lock,
  ShieldHalf,
  Rocket,
  Globe2,
  ShoppingCart,
  Gamepad2,
  Code2,
  FlaskConical,
  Cpu,
  Layers,
  ChevronRight,
} from "lucide-react";

const useCases = [
  { icon: <Globe2 size={16} />, label: "High-Traffic Sites" },
  { icon: <ShoppingCart size={16} />, label: "E-Commerce Outlets" },
  { icon: <Gamepad2 size={16} />, label: "Game Servers" },
  { icon: <Code2 size={16} />, label: "SaaS & Web Apps" },
  { icon: <FlaskConical size={16} />, label: "Dev Environments" },
];

const highlights = [
  {
    id: "dedicated",
    icon: <Server size={22} />,
    title: "Dedicated Compute",
    badge: "KVM Virtualization",
    description: "Zero resource contention. Your CPU cores and RAM belong exclusively to your workloads.",
    stat: "100%",
    statLabel: "Guaranteed Resources",
  },
  {
    id: "root",
    icon: <Lock size={22} />,
    title: "Full Root Access",
    badge: "Complete Control",
    description: "Install custom kernels, configure bespoke stacks, or deploy Docker containers without restriction.",
    stat: "SSH / VNC",
    statLabel: "Console Management",
  },
  {
    id: "isolated",
    icon: <ShieldHalf size={22} />,
    title: "Isolated Sandbox",
    badge: "Enterprise Security",
    description: "Strict hypervisor-level isolation ensures neighboring traffic spikes never compromise your server.",
    stat: "Layer-3/4",
    statLabel: "DDoS Mitigation",
  },
  {
    id: "performance",
    icon: <Rocket size={22} />,
    title: "NVMe Speed Engine",
    badge: "Ultra-low Latency",
    description: "Blazing fast read/write speeds designed to handle complex database queries and heavy concurrent traffic.",
    stat: "Up to 10Gbps",
    statLabel: "Network Port Speed",
  },
];

const VPSWhoFor = () => {
  const [activeHighlight, setActiveHighlight] = useState(0);

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6">
              <Cpu size={14} /> Next-Gen Infrastructure
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-[1.05]">
              Dedicated Power. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Zero Compromise.
              </span>
            </h2>

            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
              When shared hosting caps your growth, an isolated virtual server gives you dedicated CPU, memory, and storage with total administrative authority over your environment.
            </p>

            <div className="mb-6">
              <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-3">
                Tailored Solutions For:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {useCases.map((u, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-medium px-3.5 py-2 rounded-lg hover:border-indigo-500/40 hover:text-white transition-all cursor-default"
                  >
                    <span className="text-indigo-400">{u.icon}</span>
                    {u.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Architecture Inspector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2 text-slate-300 font-bold text-sm">
                <Layers size={18} className="text-indigo-400" />
                <span>Virtual Architecture Stack</span>
              </div>
              <span className="text-[10px] uppercase font-black tracking-wider text-slate-500 bg-slate-800/60 px-2.5 py-1 rounded-md">
                KVM Layer Active
              </span>
            </div>

            {/* Selector Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {highlights.map((item, i) => {
                const isActive = activeHighlight === i;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveHighlight(i)}
                    className={`flex items-center justify-between p-3.5 rounded-xl text-left border transition-all ${
                      isActive
                        ? "bg-indigo-600/15 border-indigo-500/50 text-white shadow-lg shadow-indigo-500/5"
                        : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isActive ? "text-indigo-400" : "text-slate-500"}>
                        {item.icon}
                      </span>
                      <span className="text-xs font-bold tracking-wide">{item.title}</span>
                    </div>
                    <ChevronRight size={14} className={`transition-transform ${isActive ? "rotate-90 text-indigo-400" : "text-slate-600"}`} />
                  </button>
                );
              })}
            </div>

            {/* Feature Inspector Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHighlight}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-950 border border-indigo-500/20 rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-md">
                    {highlights[activeHighlight].badge}
                  </span>
                  <div className="text-right">
                    <span className="text-lg font-black text-white block leading-none">
                      {highlights[activeHighlight].stat}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium block">
                      {highlights[activeHighlight].statLabel}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {highlights[activeHighlight].description}
                </p>
              </motion.div>
            </AnimatePresence>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VPSWhoFor;