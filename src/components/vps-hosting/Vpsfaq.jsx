import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What's the difference between managed and unmanaged VPS?",
    answer:
      "Managed VPS: we handle all server administration including updates, security patches, backups, and troubleshooting ideal for most users. Unmanaged VPS: you have full control and responsibility for server management, built for advanced users who want complete freedom."
  },
  {
    question: "Can I upgrade my VPS resources later?",
    answer:
      "Yes. You can scale CPU, RAM, and storage with zero downtime right from your dashboard. Most upgrades complete within 15 minutes."
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "We offer a 30-day money-back guarantee on all VPS plans, no questions asked."
  },
  {
    question: "What operating systems do you support?",
    answer:
      "We support all major Linux distributions Ubuntu, CentOS, Debian, and more plus Windows Server versions. You can also bring your own custom image."
  },
  {
    question: "Do you migrate existing VPS or dedicated servers?",
    answer:
      "Yes, our migration engineers handle the transfer of your database, files, and configuration with guaranteed minimal downtime, completely free of charge."
  },
  {
    question: "Is DDoS protection included?",
    answer:
      "Yes, network-level DDoS protection is standard across every VPS tier, with higher-capacity anti-DDoS filtering on our larger configurations."
  },
  {
    question: "How fast is deployment?",
    answer:
      "Most VPS instances are provisioned and ready within minutes of ordering, with a local African IP address from first boot."
  },
  {
    question: "Is 24/7 support available?",
    answer:
      "Yes, our engineering support lines are open 24/7/365, with direct access to systems engineers who can help with server-level issues."
  },
];

const VPSFAQ = () => {
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
            Everything you need to know about our VPS hosting in Africa.
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

export default VPSFAQ;