export const PricingCard = ({ plan, price, features, isFeatured, currency = "₦" }) => (
  <div className={`p-8 rounded-3xl border ${isFeatured ? 'bg-slate-50 border-white shadow-2xl scale-105' : 'bg-[#0f172a] border-slate-800 text-slate-300'} transition-all`}>
    <h4 className={`text-xl font-bold ${isFeatured ? 'text-slate-900' : 'text-white'}`}>{plan}</h4>
    <div className="my-6">
      <span className={`text-4xl font-black ${isFeatured ? 'text-indigo-600' : 'text-white'}`}>{currency}{price}</span>
      <span className="text-sm opacity-60">/mo</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-sm font-medium">
          <span className="text-indigo-500 text-lg">✓</span> {f}
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all active:scale-95 ${isFeatured ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
      Choose Plan
    </button>
  </div>
);