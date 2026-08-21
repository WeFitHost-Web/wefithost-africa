import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useCurrency, formatPrice } from "../contexts/CurrencyContext";
import { TLDPricingCard } from '../components/TLDPricingCard';
import { Search, Loader2, CheckCircle2, XCircle } from 'lucide-react';

export const mockDomains = [
  { tld: ".com", priceGBP: 15.99, renewalGBP: 15.99, desc: "The world's most popular domain.", featured: true, available: true },
  { tld: ".ng", priceGBP: 14.50, renewalGBP: 14.50, desc: "Build trust in the Nigerian market.", featured: true, available: true },
  { tld: ".africa", priceGBP: 8.99, renewalGBP: 12.00, desc: "Connect with the entire continent.", featured: true, available: true },
  { tld: ".tech", priceGBP: 4.20, renewalGBP: 35.00, desc: "For startups and innovators.", featured: false, available: true },
  { tld: ".org", priceGBP: 12.99, renewalGBP: 14.99, desc: "Best for non-profits and NGOs.", featured: false, available: false },
  { tld: ".net", priceGBP: 13.50, renewalGBP: 15.50, desc: "The classic alternative to .com.", featured: false, available: true },
  { tld: ".ai", priceGBP: 65.00, renewalGBP: 65.00, desc: "The domain for artificial intelligence.", featured: false, available: true },
  { tld: ".me", priceGBP: 9.99, renewalGBP: 19.99, desc: "Perfect for personal portfolios.", featured: false, available: true },
  { tld: ".co", priceGBP: 11.00, renewalGBP: 28.00, desc: "The modern choice for companies.", featured: false, available: false },
  { tld: ".io", priceGBP: 38.00, renewalGBP: 38.00, desc: "A favorite for tech applications.", featured: false, available: true },
  { tld: ".store", priceGBP: 2.50, renewalGBP: 45.00, desc: "Start your e-commerce journey.", featured: false, available: true },
  { tld: ".online", priceGBP: 1.99, renewalGBP: 32.00, desc: "Your generic global presence.", featured: false, available: true },
  { tld: ".biz", priceGBP: 14.00, renewalGBP: 18.00, desc: "Dedicated for business entities.", featured: false, available: true },
  { tld: ".ke", priceGBP: 22.00, renewalGBP: 22.00, desc: "Reach the Kenyan audience.", featured: false, available: false },
  { tld: ".gh", priceGBP: 28.00, renewalGBP: 28.00, desc: "Establish presence in Ghana.", featured: false, available: true }
];

const DomainSearchPage = () => {
  const { currency } = useCurrency();
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    // 1. If input is cleared, reset to show popular TLDs
    if (!query.trim()) {
      setSearchResults(null);
      setIsSearching(false);
      return;
    }

    // 2. Set loading state immediately when typing starts
    setIsSearching(true);

    // 3. Debounce the search (waits 300ms after last keystroke)
    const delayDebounceFn = setTimeout(() => {
      const nameOnly = query.trim().split('.')[0].toLowerCase();
      
      const results = mockDomains.map(item => ({
        ...item,
        domainName: `${nameOnly}${item.tld}`
      }));

      setSearchResults(results);
      setIsSearching(false);
    }, 400); // Slightly longer delay for a smoother "working" feel

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div className="bg-[#0b1120] min-h-screen text-slate-100 pt-32 pb-20 font-sans">
      <Helmet>
        <title>Domain Search Africa | Find & Register Domain Names | Wefithost Africa</title>
        <meta name="description" content="Search and register domain names in Africa with Wefithost Africa. Check availability for .com.ng, .co.ke, .africa and more." />
        <link rel="canonical" href="https://africa.wefithost.com/domain-search" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Search Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
            Domain <span className="text-indigo-400">Search</span>
          </h1>
          <div className="relative group">
            <div className="absolute inset-0 bg-indigo-500/20 blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity rounded-full" />
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Start typing your brand name..."
              className="relative w-full bg-slate-900 border border-slate-800 p-3 md:p-5 rounded-[2.5rem] outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-bold text-md pr-20"
            />
            <div className="absolute right-8 top-1/2 -translate-y-1/2">
              {isSearching ? (
                <Loader2 className="animate-spin text-indigo-400" size={24} />
              ) : (
                <Search size={24} className="text-slate-500" />
              )}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Priority 1: Show Loader while "fetching"
              Priority 2: Show Results if query exists
              Priority 3: Show Featured if input is empty
          */}
          {isSearching ? (
            <motion.div 
              key="loader"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="py-20 text-center"
            >
              <div className="relative inline-block">
                 <Loader2 size={60} className="mx-auto animate-spin text-indigo-500 mb-6" />
                 <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full" />
              </div>
              <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px]">Verifying Availability...</p>
            </motion.div>
          ) : query.trim() !== "" && searchResults ? (
            <motion.div 
              key="results"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="grid gap-4 max-w-4xl mx-auto"
            >
              {searchResults.map((res) => (
                <div 
                  key={res.tld}
                  className={`flex flex-col md:flex-row items-center justify-between p-6 rounded-[2rem] border transition-all ${
                    res.available 
                      ? "bg-slate-900/50 border-slate-800 hover:border-indigo-500/50 shadow-lg hover:shadow-indigo-500/5" 
                      : "bg-slate-900/10 border-slate-900 opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {res.available ? <CheckCircle2 className="text-emerald-500" /> : <XCircle className="text-slate-600" />}
                    <div>
                      <h3 className="text-xl font-black tracking-tight">{res.domainName}</h3>
                      <p className={`text-[9px] font-black uppercase tracking-[0.2em] ${res.available ? 'text-emerald-500' : 'text-slate-500'}`}>
                        {res.available ? 'Ready for registration' : 'Taken'}
                      </p>
                    </div>
                  </div>

                  {res.available && (
                    <div className="flex items-center gap-8 mt-4 md:mt-0 w-full md:w-auto justify-between border-t md:border-0 border-slate-800 pt-4 md:pt-0">
                      <div className="text-right">
                        <span className="text-2xl font-black">{formatPrice(res.priceGBP, currency)}</span>
                        <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-widest">Initial Year</span>
                      </div>
                      <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-black uppercase text-[9px] tracking-widest transition-all active:scale-95 shadow-lg shadow-indigo-600/20">
                        BUY NOW
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="featured" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-10">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Popular Extensions</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {mockDomains.filter(d => d.featured).map((data, i) => (
                  <TLDPricingCard key={i} {...data} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DomainSearchPage;