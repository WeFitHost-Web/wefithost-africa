import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is shared hosting good for beginners?',
    answer: "Yes, shared hosting is the most beginner-friendly hosting option available. WeFitHost manages the server for you, so there's nothing technical to worry about. You get a simple control panel, one-click WordPress installation, and local support whenever you need help."
  },
  {
    question: 'Can I install WordPress?',
    answer: "Yes. All WeFitHost shared hosting plans include a one-click installer so you can get WordPress running in minutes with no technical setup needed."
  },
  {
    question: 'Is email hosting included?',
    answer: "Yes. Every plan includes professional email accounts at your domain (e.g., hello@yourbusiness.com). The Starter plan includes 5 accounts, and the Business and Enterprise plans include unlimited email accounts."
  },
  {
    question: 'Do I get a free SSL certificate?',
    answer: "Yes. A free SSL certificate is included on all shared hosting plans. This activates HTTPS on your website and shows the browser padlock to your visitors with no extra cost involved."
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: "Yes. You can upgrade your shared hosting plan at any time as your website grows. If you later need more power, WeFitHost also offers VPS and cloud hosting options you can move to without losing your data."
  },
  {
    question: 'Can WeFitHost help move my website?',
    answer: "Yes. If you have an existing website with another host, our team can help with the migration process. Get in touch with our support team and we'll walk you through the options."
  },
  {
    question: 'Is shared hosting suitable for ecommerce?',
    answer: "Shared hosting can support basic ecommerce websites built on WooCommerce or similar platforms. For larger shops with high traffic or complex requirements, a VPS or dedicated plan may be a better fit. Our team is happy to advise."
  },
  {
    question: 'What happens if my website grows?',
    answer: "You can upgrade your shared hosting plan at any time. If your website grows beyond what shared hosting can comfortably support—such as consistently high traffic or resource-intensive applications—WeFitHost offers VPS and cloud hosting plans to scale into."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-indigo-50 text-[#6b63ff] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <HelpCircle size={14} /> FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Common questions about WeFitHost shared hosting, answered.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
              >
                <span className={`font-semibold text-sm ${openIndex === i ? 'text-[#6b63ff]' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  size={18} 
                  className={`text-slate-400 flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-[#6b63ff]' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
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

export default FAQSection;