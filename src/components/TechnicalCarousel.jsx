import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const TechnicalCarousel = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden py-10">
      <div className="relative w-full flex items-center justify-center perspective-1000">
        <AnimatePresence initial={false}>
          {slides.map((slide, i) => {
            let offset = i - index;
            
            // Infinite loop logic
            if (offset > slides.length / 2) offset -= slides.length;
            if (offset < -slides.length / 2) offset += slides.length;

            const absOffset = Math.abs(offset);
            
            // Only show 5 cards (index -2 to +2)
            if (absOffset > 2) return null;

            return (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  opacity: 1 - absOffset * 0.25,
                  // Mobile: centered only, Desktop: Symmetrical spread
                  x: typeof window !== 'undefined' && window.innerWidth < 768 
                     ? offset * 50 
                     : offset * 280, 
                  scale: 1 - absOffset * 0.15,
                  zIndex: 20 - absOffset,
                  rotateY: offset * -30,
                  boxShadow: absOffset === 0 
                    ? "0 25px 50px -12px rgba(99, 102, 241, 0.3)" 
                    : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`absolute w-[280px] md:w-[320px] h-[400px] rounded-[3rem] p-10 flex flex-col justify-center border transition-colors duration-500 ${
                  absOffset === 0 
                  ? "bg-white border-indigo-200" 
                  : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className={`mb-6 p-4 rounded-2xl inline-block ${absOffset === 0 ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-400'}`}>
                  {slide.icon}
                </div>
                <h3 className={`text-xl font-black mb-4 tracking-tighter ${absOffset === 0 ? 'text-slate-900' : 'text-slate-400'}`}>
                  {slide.title}
                </h3>
                <p className={`text-sm leading-relaxed font-medium ${absOffset === 0 ? 'text-slate-500' : 'text-slate-300'}`}>
                  {slide.description}
                </p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
      {/* Navigation */}
      <div className="absolute bottom-4 flex gap-4 z-50">
        <button onClick={prev} className="p-4 bg-slate-900 text-white rounded-full hover:bg-indigo-600 transition-all shadow-xl active:scale-90">
          <ChevronLeft size={20}/>
        </button>
        <button onClick={next} className="p-4 bg-slate-900 text-white rounded-full hover:bg-indigo-600 transition-all shadow-xl active:scale-90">
          <ChevronRight size={20}/>
        </button>
      </div>
    </div>
  );
};