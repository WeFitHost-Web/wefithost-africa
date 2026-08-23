import React from "react";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden bg-[#0b1120] text-center">
      <div className="absolute top-[-10%] left-[20%] w-[450px] h-[450px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[15%] w-[350px] h-[350px] rounded-full bg-purple-500/10 blur-[110px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Services
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-6">
            Websites, Built &amp;{" "}
            <span className="text-indigo-400">Maintained Right</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            From a brand-new build to a full revamp or a smooth move to WeFitHost,
            our team handles the technical work so you don't have to.
          </p>
          <a
            href="#services"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-2xl font-bold text-sm shadow-2xl shadow-indigo-600/30 transition-all active:scale-95"
          >
            View Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;