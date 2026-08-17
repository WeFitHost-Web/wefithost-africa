import React from "react";
import { motion } from "framer-motion";
import { DomainSearch } from "../DomainSearch";

const heroVideo = "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4";

const HomeHero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden min-h-[85vh] flex items-center bg-[#0b1120]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0b1120]/70 via-[#0b1120]/90 to-[#0b1120] z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6">
            Global Speed. <br /> <span className="text-indigo-500 italic">African Heart.</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-medium">
            Experience hosting built for the continent. Deploy in seconds on
            infrastructure optimized for Lagos, Nairobi, and Johannesburg.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-indigo-500/40 transition-all active:scale-95">
              Get Started Now
            </button>
            <button className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-2xl font-bold text-sm hover:bg-white/20 transition-all active:scale-95">
              View All Plans
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;