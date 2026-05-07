import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WPModal = ({ isOpen, onClose, image, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0b1120]/80 backdrop-blur-sm" 
          />

          {/* Modal Content - Constrained Dimensions */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative bg-white rounded-[2.5rem] overflow-hidden max-w-4xl w-full max-h-[85vh] shadow-2xl z-10 border border-white/20 flex flex-col lg:flex-row"
          >
            {/* Close Button - Floating inside modal */}
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 z-30 p-2 bg-white/90 backdrop-blur-md rounded-full hover:bg-indigo-600 hover:text-white transition-all shadow-md"
            >
              <X size={20} />
            </button>

            {/* Left Side: Image Section (Constrained height) */}
            <div className="lg:w-1/2 bg-slate-100 overflow-hidden min-h-[250px] lg:min-h-0">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Right Side: Content Section (Scrollable if text is long) */}
            <div className="lg:w-1/2 p-8 md:p-10 flex flex-col bg-white overflow-y-auto">
              <div className="my-auto">
                <span className="text-indigo-600 font-black uppercase tracking-widest text-[10px] mb-2 block">
                  Dashboard Preview
                </span>
                <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Check out the custom management interface. Our dashboard is optimized 
                  for high-speed performance across African nodes, featuring 1-click staging 
                  and real-time server-level caching controls.
                </p>
                
                <div className="space-y-3 mb-8">
                  {['Managed Updates', 'Staging Ready', 'Security Shield'].map((tag, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                      {tag}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={onClose}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-600/10"
                >
                  Return to Projects
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};