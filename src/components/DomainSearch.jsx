export const DomainSearch = () => (
  <div className="max-w-4xl mx-auto">
    <div className="relative flex p-2 bg-slate-800/40 border border-slate-700 rounded-2xl focus-within:border-indigo-500/50 transition-all shadow-2xl">
      <input 
        type="text" 
        placeholder="find your perfect .africa domain..." 
        className="bg-transparent border-none text-white px-6 py-4 w-full text-lg outline-none placeholder:text-slate-600 font-medium"
      />
      <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-indigo-600/20">
        Search
      </button>
    </div>
    <div className="flex justify-center gap-6 mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
      <span className="hover:text-indigo-400 cursor-default">.africa - ₦12,000</span>
      <span className="hover:text-indigo-400 cursor-default">.ng - ₦5,000</span>
      <span className="hover:text-indigo-400 cursor-default">.com - ₦15,000</span>
    </div>
  </div>
);