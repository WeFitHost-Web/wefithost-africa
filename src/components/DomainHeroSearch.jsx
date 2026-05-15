import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export const DomainHeroSearch = ({ suggestions, currency, formatPrice, isMinimal = false }) => {
    const navigate = useNavigate();
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative flex items-center bg-slate-900/80 border border-slate-700 p-2 md:p-3 rounded-full shadow-2xl mb-8 backdrop-blur-xl">
        <div className="pl-4 pr-3 text-slate-500"><Search size={22}/></div>
        <input 
          type="text" 
          placeholder="find-your-brand.com" 
          className="w-full flex-grow bg-transparent text-white text-base md:text-lg p-3 outline-none"
        />
        <button onClick={() => navigate("/domain-search")} className="bg-indigo-600 text-white px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-indigo-500 transition-all flex items-center gap-2 group">
          Search <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {!isMinimal && (
        <div className="flex flex-wrap gap-3 justify-center text-[10px] text-slate-400 font-black tracking-widest uppercase">
          {suggestions.map((item, i) => (
            <div key={i} className="flex gap-3 items-center p-3 px-5 bg-slate-900/50 rounded-full border border-slate-800">
              <span>{item.name}</span>
              <span className="text-emerald-400 font-black">{formatPrice(item.priceGBP, currency)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};