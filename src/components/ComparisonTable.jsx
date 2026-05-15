import React from 'react';
import { Check, X } from 'lucide-react';

const rows = [
  { feature: "Free WHOIS Privacy", starter: true, premium: true, business: true },
  { feature: "Custom DNS Management", starter: true, premium: true, business: true },
  { feature: "Email Forwarding", starter: false, premium: true, business: true },
  { feature: "SSL Certificate", starter: false, premium: true, business: true },
  { feature: "Priority Support", starter: false, premium: false, business: true },
  { feature: "Multi-year Discounts", starter: true, premium: true, business: true },
];

export const ComparisonTable = () => (
  <div className="max-w-5xl mx-auto overflow-hidden rounded-[3rem] border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-slate-900">
          <th className="p-8 text-sm font-black uppercase tracking-widest text-slate-500">Features</th>
          <th className="p-8 text-center text-white font-black uppercase tracking-widest text-xs">Starter</th>
          <th className="p-8 text-center bg-indigo-600 text-white font-black uppercase tracking-widest text-xs">Professional</th>
          <th className="p-8 text-center text-white font-black uppercase tracking-widest text-xs">Enterprise</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-white/5 transition-colors">
            <td className="p-8 text-sm font-bold text-slate-300">{row.feature}</td>
            <td className="p-8 text-center">{row.starter ? <Check className="mx-auto text-emerald-500" size={20}/> : <X className="mx-auto text-slate-600" size={20}/>}</td>
            <td className="p-8 text-center bg-indigo-600/10">{row.premium ? <Check className="mx-auto text-indigo-400" size={20}/> : <X className="mx-auto text-slate-600" size={20}/>}</td>
            <td className="p-8 text-center">{row.business ? <Check className="mx-auto text-emerald-500" size={20}/> : <X className="mx-auto text-slate-600" size={20}/>}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);