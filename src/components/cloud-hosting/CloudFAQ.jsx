import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is cloud hosting?",
    answer:
      "Unlike traditional hosting that relies on a single physical machine, cloud hosting pulls virtual resources from an expansive network of physical servers. This ensures maximum uptime, fast data delivery, and seamless failover if a single hardware node undergoes maintenance."
  },
  {
    question: "What is Managed Cloud Hosting?",
    answer:
      "Managed Cloud Hosting gives you a virtual private server entirely dedicated to your project. We handle the complex server setup, regular patching, and underlying optimization, so you manage everything through an intuitive control panel."
  },
  {
    question: "Should I use shared or cloud hosting?",
    answer:
      "Shared hosting is cost-effective and reliable for standard portfolios, blogs, or early-stage businesses. If your app processes frequent database requests, high transaction volumes, or concurrent traffic spikes, moving to an isolated cloud environment is recommended."
  },
  {
    question: "How does auto scaling work?",
    answer:
      "When your site experiences a dramatic influx of concurrent users, auto scaling instantly assigns extra CPU and RAM to process the demand. Once traffic returns to baseline, resources scale back down automatically so cost stays balanced."
  },
  {
    question: "Can I upgrade my resources later?",
    answer:
      "Yes. You can seamlessly upgrade your core hosting parameters at any stage through your dashboard, with no prolonged downtime or manual data transfers."
  },
  {
    question: "Is cloud hosting suitable for e-commerce?",
    answer:
      "Absolutely. Online stores see fluctuating traffic during seasonal campaigns and flash sales. Cloud architecture provides the performance isolation and rapid processing power needed to handle order spikes smoothly."
  },
  {
    question: "Do I get a dedicated IP?",
    answer:
      "Yes, our Managed Cloud Hosting plans provide a dedicated IPv4 address assigned exclusively to your instance, improving email delivery reliability and isolating you from neighboring domain reputations."
  },
  {
    question: "Are backups and migration included?",
    answer:
      "Yes, automated backup schedules are included to safeguard your databases and files. We also offer professional, complimentary migrations to bring your existing sites over without downtime."
  },
];

const CloudFAQ = () => {
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
            Everything you need to know about our Managed Cloud Hosting.
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

export default CloudFAQ;