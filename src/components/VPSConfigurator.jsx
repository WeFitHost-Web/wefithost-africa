import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useCurrency, formatPrice } from '../contexts/CurrencyContext';

export const VPSConfigurator = ({ cores, setCores, ram, setRam, ssd, setSsd, calculatePrice }) => {
  const { currency } = useCurrency();
  
  // calculatePrice returns the base GBP amount as a Number
  const basePriceInGBP = calculatePrice();

  return (
    <div className="grid lg:grid-cols-3 gap-12 items-center bg-[#0b1120] p-8 md:p-16 rounded-[4rem] border border-slate-800 shadow-3xl relative z-10">
      <div className="lg:col-span-2 space-y-12">
        <div className="space-y-4">
          <div className="flex justify-between font-black text-[10px] uppercase tracking-widest text-slate-400">
            <span>Processing Power</span>
            <span className="text-indigo-400 text-lg">{cores} vCPU</span>
          </div>
          <input type="range" min="1" max="16" value={cores} onChange={(e) => setCores(Number(e.target.value))} className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer" />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between font-black text-[10px] uppercase tracking-widest text-slate-400">
            <span>Memory</span>
            <span className="text-indigo-400 text-lg">{ram} GB RAM</span>
          </div>
          <input type="range" min="1" max="64" value={ram} onChange={(e) => setRam(Number(e.target.value))} className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer" />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between font-black text-[10px] uppercase tracking-widest text-slate-400">
            <span>NVMe Storage</span>
            <span className="text-indigo-400 text-lg">{ssd} GB SSD</span>
          </div>
          <input type="range" min="20" max="500" step="10" value={ssd} onChange={(e) => setSsd(Number(e.target.value))} className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer" />
        </div>
      </div>

      <div className="bg-slate-900 p-8 rounded-[3rem] border border-slate-700/50 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full" />
        <span className="text-[10px] font-black uppercase text-indigo-400 tracking-[0.2em] block mb-4">Monthly Rate</span>
        
        {/* Dynamic Display */}
        <div className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
          {formatPrice(basePriceInGBP, currency)}
        </div>
        
        <ul className="text-[11px] text-slate-400 space-y-4 mb-8 text-left inline-block">
          {["Dedicated vCPU Threads", "Root SSH Access", "Lagos/Nairobi Low Latency", "99.9% Uptime SLA"].map((text, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckCircle size={14} className="text-emerald-500" /> {text}
            </li>
          ))}
        </ul>

        <button className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl text-[11px] uppercase tracking-[0.15em] hover:bg-indigo-500 transition-all">
          Provision My Server
        </button>
      </div>
    </div>
  );
};