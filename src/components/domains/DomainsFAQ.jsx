import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a domain name?",
    answer:
      "A domain name is your unique address on the internet (e.g., yourname.com). It's the professional identity you use to help customers find your website and services online."
  },
  {
    question: "How do I register a domain?",
    answer:
      "Use our domain search tool at the top of the page to check availability. Once you find your perfect name, select your desired extension and proceed to checkout to register it instantly through your WeFitHost account."
  },
  {
    question: "Can I transfer my domain to WeFitHost?",
    answer:
      "Yes, you can easily transfer your existing domain to WeFitHost. This lets you consolidate your billing, DNS, and support into one simple, unified platform."
  },
  {
    question: "What is WHOIS privacy?",
    answer:
      "WHOIS privacy masks your personal contact information, like your address and phone number, in the public WHOIS database, protecting you from spam and identity exposure."
  },
  {
    question: "Can I connect my domain to WeFitHost hosting?",
    answer:
      "Absolutely. Our platform is designed to seamlessly link your domain to our high-performance hosting services, ensuring a smooth setup for your website."
  },
  {
    question: "Can I use my domain for email?",
    answer:
      "Yes. Once your domain is active, you can create professional branded email addresses, like contact@yourdomain.com, directly through your WeFitHost account."
  },
  {
    question: "What happens when my domain expires?",
    answer:
      "An expired domain enters a renewal grace period where you can still renew it at the standard rate. Renew before expiration to avoid service interruption or potential loss of the domain name."
  },
  {
    question: "Which domain extension should I choose?",
    answer:
      "It depends on your goals: .com is the gold standard for global business, country-code extensions suit local projects, while specialist extensions like .tech or .store help define your niche."
  },
];

const DomainsFAQ = () => {
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
            Get answers to common questions about domain registration at WeFitHost.
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

export default DomainsFAQ;