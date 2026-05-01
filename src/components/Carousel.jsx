import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ImageCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative group w-full h-[450px] overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10">
      {/* Slides */}
      <div 
        className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out" 
        style={{ backgroundImage: `url(${slides[current].url})` }}
      >
        {/* Improved Overlay: Using Flexbox to separate text and buttons */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent flex items-end justify-between p-8 md:p-12 text-white">
          
          {/* Text Container - limited width to prevent overlap */}
          <div className="max-w-[65%] mb-2">
            <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight">
              {slides[current].title}
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed line-clamp-3">
              {slides[current].description}
            </p>
          </div>

          {/* Navigation Buttons - isolated in the corner */}
          <div className="flex gap-3 shrink-0">
            <button 
              onClick={prevSlide} 
              className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-indigo-600 transition-all active:scale-90"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>
            <button 
              onClick={nextSlide} 
              className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-indigo-600 transition-all active:scale-90"
              aria-label="Next slide"
            >
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};