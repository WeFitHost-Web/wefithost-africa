export const BrandCarousel = ({ logos }) => (
  <div className="py-12 border-y border-slate-800/50 bg-[#0b1120]">
    <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-10">
      Optimized for leading African platforms
    </p>
    <div className="flex overflow-hidden group">
      <div className="flex animate-loop-scroll group-hover:paused space-x-16 items-center">
        {/* Render twice for infinite loop */}
        {[...logos, ...logos].map((logo, i) => (
          <img 
            key={i} 
            src={logo} 
            alt="partner" 
            className="h-8 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
          />
        ))}
      </div>
    </div>
  </div>
);

