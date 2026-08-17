import React, { useState } from "react";

const HomeDomainSearch = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const domain = query.trim();
    if (!domain) return;
    window.location.href = `https://my.wefithost.com/domain-search?domain=${encodeURIComponent(domain)}`;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const appendTld = (tld) => {
    setQuery((prev) => prev.trim().replace(/\.[a-z.]+$/i, "") + tld);
  };

  return (
    <section className="bg-[#0b1120] relative pb-20 px-6">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="relative flex p-2 bg-slate-800/40 border border-slate-700 rounded-2xl focus-within:border-indigo-500/50 transition-all shadow-2xl">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="find your perfect .africa domain..."
            className="bg-transparent border-none text-white px-6 py-4 w-full text-lg outline-none placeholder:text-slate-600 font-medium"
          />
          <button
            onClick={handleSearch}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-indigo-600/20"
          >
            Search
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          {[".africa", ".ng", ".com"].map((tld) => (
            <button
              key={tld}
              type="button"
              onClick={() => appendTld(tld)}
              className="hover:text-indigo-400 transition-colors"
            >
              {tld}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeDomainSearch;