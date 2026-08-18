import React from "react";
import { motion } from "framer-motion";
import { Construction, ArrowLeft, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const UnderDevelopment = ({ pageName = "This Page" }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0b1120] border-b border-slate-800 px-6 py-24">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Grid mesh overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Glowing Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/3 w-[250px] h-[250px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Animated Icon Badge */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shadow-xl shadow-indigo-950/50 backdrop-blur-md">
            <Construction size={38} className="animate-pulse" />
          </div>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
             Under Active Development
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-4">
            {pageName} is <br />
            <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            We are hard at work fine-tuning this section to give you the best experience possible. Check back soon!
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-lg shadow-indigo-600/30 hover:-translate-y-0.5"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <Link
              to="https://wefithost.com/contact-us"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-700/80 hover:border-slate-600 text-white font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
            >
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UnderDevelopment;