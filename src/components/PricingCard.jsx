import { useCurrency } from '../contexts/CurrencyContext'; 

export const PricingCard = ({ plan, basePricePounds, features, isFeatured }) => {
  const { currency } = useCurrency();

  // Calculation: Pounds * Rate
  const convertedPrice = (basePricePounds * currency.rate).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2, // Allow decimals for currencies like USD/GBP
  });
  
  return (
    <div className={`
      p-8 rounded-3xl border transition-all h-full flex flex-col
      ${isFeatured 
        ? 'bg-slate-50 border-white shadow-2xl scale-105 z-10' 
        : 'bg-[#0f172a] border-slate-800 text-slate-300'
      }
    `}>
      {/* Plan and Price Section */}
      <div className="flex-grow">
        <h4 className={`text-xl font-bold ${isFeatured ? 'text-slate-900' : 'text-white'}`}>
          {plan}
        </h4>
        
        <div className="my-6 flex items-baseline gap-1">
          <span className={`text-4xl font-black ${isFeatured ? 'text-indigo-600' : 'text-white'}`}>
            {currency.symbol}{convertedPrice}
          </span>
          <span className="text-sm opacity-60 font-medium">/mo</span>
        </div>

        {/* Features List */}
        <ul className="space-y-4 mb-8">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-medium leading-tight">
              <span className="text-indigo-500 text-lg leading-none mt-0.5">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section */}
      <div className="mt-auto pt-6">
        <button className={`
          w-full py-4 rounded-xl font-bold text-sm transition-all active:scale-95 
          ${isFeatured 
            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-700' 
            : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
          }
        `}>
          Choose {plan}
        </button>
      </div>
    </div>
  );
};