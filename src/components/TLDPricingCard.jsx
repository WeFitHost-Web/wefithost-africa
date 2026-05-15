import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import { useCurrency, formatPrice } from '../contexts/CurrencyContext';

export const TLDPricingCard = ({ tld, priceGBP, renewalGBP, desc, featured }) => {
  const { currency } = useCurrency();
  const originalPriceGBP = priceGBP * 1.2;

  return (
    // Reduced padding (p-10 -> p-8) and border radius (3rem -> 2rem)
    <div className={`p-8 rounded-[2rem] bg-white border border-slate-100 flex flex-col justify-between group relative overflow-hidden transition-all hover:scale-[1.01] hover:shadow-xl ${featured ? 'shadow-xl border-indigo-200 ring-2 ring-indigo-50' : 'shadow-sm'}`}>
      
      {featured && (
        <div className="absolute top-4 right-4 inline-flex items-center gap-2 px-2.5 py-1 bg-indigo-600 rounded-full text-white text-[9px] font-black uppercase tracking-widest z-10">
          <Zap size={10} fill="currentColor"/> Popular
        </div>
      )}

      <div>
        {/* Scaled down heading (5xl -> 3xl) */}
        <h3 className="text-3xl font-black text-slate-900 mb-1 tracking-tighter">{tld}</h3>
        <p className="text-slate-500 mb-6 font-medium text-xs leading-relaxed">{desc}</p>
        
        <div className="flex items-center gap-2 mb-1">
          <span className="px-1.5 py-0.5 bg-indigo-50 text-indigo-600 text-[8px] font-black uppercase tracking-widest rounded">
            Save 20%
          </span>
          <span className="text-slate-400 line-through font-bold text-xs">
            {formatPrice(originalPriceGBP, currency)}
          </span>
        </div>

        <div className="flex items-baseline gap-1">
          {/* Scaled down price (6xl -> 4xl) */}
          <span className="text-4xl font-black text-slate-950 tracking-tighter">
            {formatPrice(priceGBP, currency)}
          </span>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">/yr</span>
        </div>
        
        <p className="text-[9px] text-slate-400 tracking-widest mt-2 mb-6 uppercase font-black">
          Renews at {formatPrice(renewalGBP, currency)}
        </p>
      </div>

      {/* Tighter button (py-5 -> py-4) */}
      <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[9px] transition-all flex items-center justify-center gap-2 group ${featured ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-slate-900 text-white'}`}>
        Check Availability <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};