import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQItem = ({ question, answer, dark = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`group mb-2 rounded-2xl border transition-all duration-200 ${
      isOpen 
        ? (dark ? 'bg-slate-800/30 border-indigo-500/20' : 'bg-slate-100/50 border-slate-300') 
        : (dark ? 'bg-transparent border-slate-800/50 hover:border-slate-700' : 'bg-transparent border-slate-200 hover:border-slate-300')
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 flex justify-between items-center text-left"
      >
        <span className={`text-base font-bold tracking-tight transition-colors ${
          isOpen 
            ? (dark ? 'text-white' : 'text-slate-900') 
            : (dark ? 'text-slate-400 group-hover:text-slate-200' : 'text-slate-600 group-hover:text-slate-900')
        }`}>
          {question}
        </span>
        
        {/* Compact Toggle Icon */}
        <div className={`relative w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
           <span className={`absolute top-1/2 left-0 w-full h-[1.5px] rounded-full ${
             isOpen ? 'bg-indigo-500' : (dark ? 'bg-slate-600' : 'bg-slate-400')
           }`} />
           <span className={`absolute top-1/2 left-0 w-full h-[1.5px] rounded-full transition-transform duration-300 ${
             isOpen ? 'bg-indigo-500 rotate-0' : (dark ? 'bg-slate-600 rotate-90' : 'bg-slate-400 rotate-90')
           }`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className={`px-6 pb-5 text-sm leading-relaxed font-medium border-t ${
              dark ? 'text-slate-400 border-slate-800/50' : 'text-slate-500 border-slate-200'
            }`}>
              <div className="pt-4">
                {answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};