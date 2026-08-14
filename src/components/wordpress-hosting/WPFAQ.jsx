import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is WordPress Hosting?',
    answer: "Our hosting environment is specifically configured for WordPress performance and security. We include features like automatic WordPress updates, staging environments, WP-CLI access, and server-level caching that's optimized for WordPress running on African servers for local speed."
  },
  {
    question: 'How is WordPress Hosting different from Web Hosting?',
    answer: "Unlike generic shared hosting, our platform is engineered specifically for WordPress. We provide isolated server-level enhancements, automatic updates, enhanced security configurations against core exploits, built-in staging tools, and highly dedicated CMS hardware profiles all from African data centres."
  },
  {
    question: 'Do you migrate WordPress websites?',
    answer: "Absolutely! We offer comprehensive white-glove WordPress migration packages completely free of charge. Our migration engineers will safely move your database records, theme configuration directories, and root files over with guaranteed zero downtime."
  },
  {
    question: 'Are backups included?',
    answer: "Yes, automated daily backups are native to all plans. We capture complete system-level snapshots and preserve data restoration layers offsite securely, enabling you to trigger a clean rolling restoration script with a single click."
  },
  {
    question: 'Is SSL included?',
    answer: "Yes, completely free SSL certificates are provisioned automatically for every domain attached to your platform. The system leverages fully automated Let's Encrypt validation hooks to handle deployment, installations, and ongoing cryptographic renewals."
  },
  {
    question: 'Can I host WooCommerce websites?',
    answer: "Yes, our environment is fully optimized for WooCommerce deployment. High-frequency object caching structures smoothly manage complex operational database queries, dynamic shopping carts, and rapid concurrent inventory lookups without causing application performance drops."
  },
  {
    question: 'Is support available 24/7?',
    answer: "Yes, our engineering support lines remain open 24/7/365. You gain direct connection pathways to authentic, system-level WordPress experts capable of diagnosing plugin conflicts, database anomalies, and critical architectural platform execution errors instantly."
  },
  {
    question: 'Can I upgrade later?',
    answer: "Of course! Your hosting configuration scales seamlessly as your site traffic expands. You can execute immediate storage, memory, or resource scale allocations right from your dashboard without experiencing administrative service interruption periods."
  },
  {
    question: 'Is staging included?',
    answer: "Yes, complete sandbox staging systems come standard. This functionality lets you test theme patches, new layouts, and application extensions safely in an isolated sub-domain cluster before cleanly deploying changes directly to production."
  },
  {
    question: 'Is malware protection included?',
    answer: "Yes, real-time perimeter protection sweeps are deeply integrated. Our continuous monitoring layers actively analyze incoming request payloads, identify file system permission changes, catch malicious code injections, and block brute-force attempts automatically."
  }
];

const WPFAQ = () => {
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
            Everything you need to know about our WordPress hosting in Africa.
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

export default WPFAQ;