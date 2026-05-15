import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-slate-800 rounded-3xl overflow-hidden bg-slate-900/50">
          <button 
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full p-8 flex justify-between items-center text-left hover:bg-slate-800/50 transition-colors"
          >
            <span className="text-lg font-bold text-white tracking-tight">{faq.q}</span>
            {openIndex === i ? <Minus className="text-indigo-400" /> : <Plus className="text-slate-500" />}
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="p-8 pt-0 text-slate-400 leading-relaxed text-sm">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};