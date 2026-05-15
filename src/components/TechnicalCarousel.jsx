import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const TechnicalCarousel = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full py-20 flex flex-col items-center">
      <div className="relative h-[450px] w-full flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          {slides.map((slide, i) => {
            let offset = i - index;
            if (offset > slides.length / 2) offset -= slides.length;
            if (offset < -slides.length / 2) offset += slides.length;

            const absOffset = Math.abs(offset);
            
            // On mobile show 1, on desktop show 5
            if (isMobile && absOffset > 0) return null;
            if (!isMobile && absOffset > 2) return null;

            return (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  opacity: 1 - absOffset * 0.4,
                  x: offset * (isMobile ? 0 : 340),
                  scale: 1 - absOffset * 0.1,
                  zIndex: 10 - absOffset,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 40 }}
                className={`absolute w-[90%] md:w-[320px] h-[400px] bg-white rounded-[2.5rem] p-8 flex flex-col border transition-all duration-500 ${
                  absOffset === 0 
                  ? "border-slate-200 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)]" 
                  : "border-slate-100 shadow-none"
                }`}
              >
                {/* Visual Accent */}
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl ${absOffset === 0 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-slate-50 text-slate-400'}`}>
                    {React.cloneElement(slide.icon, { size: 24 })}
                  </div>
                  <span className="text-slate-200 font-black text-4xl leading-none tracking-tighter">
                    0{i + 1}
                  </span>
                </div>

                <div className="flex-grow">
                  <h3 className={`text-xl font-black mb-3 tracking-tighter uppercase ${absOffset === 0 ? 'text-slate-900' : 'text-slate-400'}`}>
                    {slide.title}
                  </h3>
                  <p className={`text-sm leading-relaxed font-medium ${absOffset === 0 ? 'text-slate-500' : 'text-slate-300'}`}>
                    {slide.description}
                  </p>
                </div>

                {/* Professional "Action" indicator */}
                <div className={`mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-opacity duration-500 ${absOffset === 0 ? 'opacity-100 text-indigo-600' : 'opacity-0'}`}>
                  Specification Details <ArrowRight size={12} />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
      {/* Refined Navigation UI */}
      <div className="flex items-center gap-8 mt-10">
        <button 
          onClick={prev} 
          className="group flex items-center gap-3 text-slate-400 hover:text-indigo-600 transition-colors"
        >
          <div className="p-3 border border-slate-200 rounded-full group-hover:border-indigo-200 transition-colors">
            <ChevronLeft size={18}/>
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">Prev</span>
        </button>

        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-indigo-600' : 'w-2 bg-slate-200'}`}
            />
          ))}
        </div>

        <button 
          onClick={next} 
          className="group flex items-center gap-3 text-slate-400 hover:text-indigo-600 transition-colors"
        >
          <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">Next</span>
          <div className="p-3 border border-slate-200 rounded-full group-hover:border-indigo-200 transition-colors">
            <ChevronRight size={18}/>
          </div>
        </button>
      </div>
    </div>
  );
};