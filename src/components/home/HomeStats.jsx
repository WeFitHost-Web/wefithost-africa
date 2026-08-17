import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Server, Globe2, Headset } from "lucide-react";

const stats = [
  {
    id: "uptime",
    label: "Network Uptime",
    value: "99.99%",
    subtext: "Guaranteed SLA",
    icon: <ShieldCheck className="text-indigo-600" size={20} />,
    bgColor: "bg-indigo-50",
  },
  {
    id: "nodes",
    label: "Edge Locations",
    value: "12+",
    subtext: "African Data Hubs",
    icon: <Server className="text-emerald-600" size={20} />,
    bgColor: "bg-emerald-50",
  },
  {
    id: "sites",
    label: "Active Sites",
    value: "25k+",
    subtext: "Hosted Workloads",
    icon: <Globe2 className="text-cyan-600" size={20} />,
    bgColor: "bg-cyan-50",
  },
  {
    id: "support",
    label: "Avg. Response",
    value: "< 15m",
    subtext: "24/7 Tech Support",
    icon: <Headset className="text-violet-600" size={20} />,
    bgColor: "bg-violet-50",
  },
];

const HomeStats = () => {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center`}
                >
                  {stat.icon}
                </div>
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {stat.subtext}
                </span>
              </div>

              <div className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-1">
                {stat.value}
              </div>

              <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;