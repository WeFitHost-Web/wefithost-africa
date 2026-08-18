import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ShoppingBag, User, Users, Rocket, Megaphone } from "lucide-react";

const useCases = [
  {
    icon: <Briefcase size={20} />,
    title: "Business Websites",
    description: "Register a professional domain for your company website.",
  },
  {
    icon: <ShoppingBag size={20} />,
    title: "Online Stores",
    description: "Secure a domain for ecommerce, products, and checkout pages.",
  },
  {
    icon: <User size={20} />,
    title: "Personal Brands",
    description: "Protect your name, portfolio, or personal website.",
  },
  {
    icon: <Users size={20} />,
    title: "Agencies",
    description: "Manage domains for client websites and projects.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Startups",
    description: "Find a memorable domain for a new product or business idea.",
  },
  {
    icon: <Megaphone size={20} />,
    title: "Campaigns",
    description: "Use short domains for marketing campaigns, landing pages, and promotions.",
  },
];

const DomainsUseCases = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
            Who It's For
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
            Domains For Every Online Project
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((u, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="border border-slate-200 rounded-2xl p-6 hover:border-indigo-300 hover:bg-slate-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                {u.icon}
              </div>
              <h3 className="text-slate-900 font-bold mb-1.5">{u.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{u.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsUseCases;