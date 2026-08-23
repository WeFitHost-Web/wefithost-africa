import React from "react";
import { motion } from "framer-motion";
import { PenTool, Sparkles, ArrowLeftRight, Check } from "lucide-react";

const services = [
  {
    icon: <PenTool size={24} />,
    title: "Web Design + Development",
    description:
      "A custom website built from the ground up around your brand and goals.",
    points: [
      "Custom UI/UX design",
      "Fully responsive build",
      "SEO-ready structure",
      "Launch-ready in weeks, not months",
    ],
  },
  {
    icon: <Sparkles size={24} />,
    title: "Website Revamp",
    description:
      "Give an outdated site a modern look and faster performance, without losing what already works.",
    points: [
      "Modern visual redesign",
      "Speed & performance tune-up",
      "Mobile-first overhaul",
      "Content restructuring",
    ],
  },
  {
    icon: <ArrowLeftRight size={24} />,
    title: "Website Migration",
    description:
      "Move your existing site to WeFitHost cleanly, with nothing lost along the way.",
    points: [
      "Zero-downtime transfer",
      "DNS & email migration",
      "Full data backup",
      "Post-migration testing",
    ],
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">
            How We Can Help
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Three ways to get your website where it needs to be.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-200 rounded-[2rem] p-8 h-full flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-slate-900 font-black text-xl mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.description}</p>
              <ul className="space-y-2.5 mb-8 flex-grow">
                {s.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check size={16} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="text-center bg-indigo-600 text-white px-6 py-3.5 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-indigo-500 transition-all"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;