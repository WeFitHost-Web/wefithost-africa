import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We talk through what you need, your timeline, and your budget.",
  },
  {
    number: "02",
    title: "Design & Proposal",
    description: "You get a clear scope and a look at the design direction before any code is written.",
  },
  {
    number: "03",
    title: "Build & Review",
    description: "We build in stages, with checkpoints for your feedback along the way.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We go live, then stay on hand for fixes and questions after launch.",
  },
];

const ServicesProcess = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
            A Simple, Transparent Process
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-5xl font-black text-indigo-100 mb-3">{s.number}</div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesProcess;