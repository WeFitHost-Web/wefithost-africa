import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Globe, Shield, Zap } from "lucide-react";
import { useCurrency, formatPrice } from "../../contexts/CurrencyContext";

const tlds = [
  { name: ".com", price: 14.99 },
  { name: ".co.uk", price: 7.99 },
  { name: ".uk", price: 6.99 },
  { name: ".net", price: 15.99 },
  { name: ".org", price: 12.99 },
];

const DomainsHero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { currency } = useCurrency();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    const targetUrl = `https://my.wefithost.com/domain-search?domain=${encodeURIComponent(
      searchTerm.trim()
    )}`;
    window.location.href = targetUrl;
  };

  const handleTldClick = (tldName) => {
    const targetUrl = `https://my.wefithost.com/domain-search?domain=${encodeURIComponent(
      tldName
    )}`;
    window.location.href = targetUrl;
  };

  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-[#0b1120] border-b border-slate-800">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle grid mesh overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-600/15 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.08] mb-6">
            Find the Perfect Domain <br className="hidden md:block" />
            for Your{" "}
            <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Next Big Idea
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Search, register, or transfer your domain seamlessly. Enjoy full DNS
            control, automated SSL, and complete privacy protection with zero
            hidden fees.
          </p>

          {/* Search Bar Form */}
          <form
            onSubmit={handleSearch}
            className="bg-slate-900/90 border border-slate-700/80 p-2 md:p-3 rounded-2xl md:rounded-3xl shadow-2xl shadow-indigo-950/50 backdrop-blur-xl max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-3 transition-all focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20"
          >
            <div className="flex items-center gap-3 px-4 w-full flex-1">
              <Search className="text-white shrink-0" size={22} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search your domain name (e.g. mybrand.com)..."
                className="w-full bg-transparent text-white placeholder-slate-200 text-base md:text-lg focus:outline-none py-3 font-medium"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm uppercase tracking-wider px-8 py-4 rounded-xl md:rounded-2xl transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 shrink-0"
            >
              Search Domain
            </button>
          </form>

          {/* TLD Examples Bar */}
          <div className="mt-8">
            <p className="text-xs uppercase font-bold tracking-widest text-white/90 mb-4">
              Popular Extensions
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {tlds.map((tld, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleTldClick(tld.name)}
                  className="group bg-white text-slate-900 font-extrabold text-sm px-5 py-2.5 rounded-xl hover:bg-indigo-500 hover:text-white transition-all shadow-md shadow-black/20 flex items-center gap-2"
                >
                  <span>{tld.name}</span>
                  <span className="text-xs text-indigo-600 font-semibold group-hover:text-indigo-100 transition-colors">
                    {formatPrice(tld.price, currency)}/yr
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DomainsHero;