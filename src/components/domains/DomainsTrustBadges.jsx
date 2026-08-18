import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Tag, Headset } from "lucide-react";

const badges = [
  { icon: <ShieldCheck size={22} />, label: "Free WHOIS Privacy" },
  { icon: <Zap size={22} />, label: "Instant Registration" },
  { icon: <Tag size={22} />, label: "Transparent Pricing" },
  { icon: <Headset size={22} />, label: "24/7 Domain Support" },
];

const DomainsTrustBadges = () => {
  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                {b.icon}
              </div>
              <p className="text-slate-700 text-sm font-semibold">{b.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsTrustBadges;