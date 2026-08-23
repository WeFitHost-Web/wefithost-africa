import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a new website take to build?",
    answer:
      "Most projects take two to four weeks from discovery call to launch, depending on the number of pages and how much custom design work is involved."
  },
  {
    question: "Can you redesign my site without changing my content?",
    answer:
      "Yes. A revamp typically keeps your existing pages, copy, and structure intact we focus on the visual design, layout, and performance."
  },
  {
    question: "Will migrating my site cause any downtime?",
    answer:
      "No. Our migrations are done in the background on a copy of your site first, then switched over once everything is verified, so your live site stays up throughout."
  },
  {
    question: "Do I need to already have hosting with WeFitHost?",
    answer:
      "Not for design or revamp work. For migrations, we move your site onto a WeFitHost plan as part of the process we'll help you pick the right one."
  },
  {
    question: "Do you offer support after the site goes live?",
    answer:
      "Yes, every project includes a support window after launch for fixes and small adjustments, with ongoing support plans available afterward."
  },
  {
    question: "What if I only need part of my site redesigned?",
    answer:
      "That's fine revamps can cover a single page or section just as easily as a full site. Let us know the scope on the discovery call."
  },
];

const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-indigo-500/10 text-[#6b63ff] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <HelpCircle size={14} /> FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-sm transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
              >
                <span className={`font-semibold text-sm ${openIndex === i ? "text-[#6b63ff]" : "text-slate-900"}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-slate-400 flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-[#6b63ff]" : ""}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;