import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Can I pay in Nigerian Naira or other local currencies?",
    answer:
      "Absolutely. We integrate with major local payment gateways like Flutterwave and Paystack to ensure you can pay smoothly in Naira without worrying about foreign currency limits or exchange rates.",
  },
  {
    question: "Where exactly are your servers located?",
    answer:
      "We utilize a strategic network of dedicated edge nodes located in Lagos, Johannesburg, and Nairobi to deliver ultra-low latency and peak performance for local African traffic.",
  },
  {
    question: "Do you offer free migrations from my current host?",
    answer:
      "Yes, our technical team provides a white-glove migration service at no additional cost, ensuring your website, databases, and emails are transferred seamlessly with zero downtime.",
  },
  {
    question: "What kind of support can I expect if I run into issues?",
    answer:
      "We provide 24/7 priority support through multiple channels, including live chat, email, and local ticketing with fast resolution times from real engineers.",
  },
];

const HomeFAQ = () => {
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
            Everything you need to know about our web hosting services and operations.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, i) => (
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
                <span
                  className={`font-semibold text-sm ${
                    openIndex === i ? "text-[#6b63ff]" : "text-slate-900"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-slate-400 flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 text-[#6b63ff]" : ""
                  }`}
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

export default HomeFAQ;