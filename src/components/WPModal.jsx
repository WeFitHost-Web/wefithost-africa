import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WPModal = ({ isOpen, onClose, image, title }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0b1120]/90 backdrop-blur-md" 
        />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
          className="relative bg-white rounded-[2.5rem] overflow-hidden max-w-5xl w-full shadow-2xl z-10"
        >
          <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-indigo-50 transition-colors">
            <X size={20} className="text-slate-900" />
          </button>
          <div className="p-2">
            <img src={image} alt={title} className="w-full rounded-[2rem] object-cover" />
          </div>
          <div className="p-8 text-center">
            <h3 className="text-2xl font-black text-slate-900">{title}</h3>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);