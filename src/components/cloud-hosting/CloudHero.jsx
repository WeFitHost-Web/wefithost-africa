import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const CloudHero = () => {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-[#0a0e1e] via-[#0f172a] to-[#141e3c]">
      {/* Ambient glow */}
      <div className="absolute top-[-15%] left-[10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[5%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Trusted by 10,000+ Businesses
          </div> */}

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.05] mb-6">
            <span className="bg-gradient-to-r from-indigo-300 via-white to-purple-300 bg-clip-text text-transparent">
              Cloud Hosting
            </span>
            <br />
            Built for Scale
          </h1>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
            Deploy scalable applications with high-performance infrastructure.
            99.99% uptime, automatic scaling, and global data centers
            with a dedicated African edge network for local speed.
          </p>

          <div className="flex justify-center mb-10">
            <a
              href="#pricing"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-bold text-sm shadow-2xl shadow-indigo-600/30 transition-all active:scale-95"
            >
              Explore Features
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
            {[
              "No credit card required",
              "Free migration from any host",
              "30-day money-back guarantee",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                <CheckCircle2 size={16} className="text-emerald-400" />
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 pt-8 border-t border-white/10">
            {[
              "99.99% Uptime",
              "15 Global Locations",
              "24/7 Support",
              "500ms Response",
            ].map((item, i) => (
              <span
                key={i}
                className="bg-white/5 border border-white/10 text-white/70 text-xs font-medium px-4 py-2 rounded-full hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-white transition-all"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudHero;