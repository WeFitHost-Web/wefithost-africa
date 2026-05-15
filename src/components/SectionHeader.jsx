export const SectionHeader = ({ title, subtitle, light = false }) => (
  <div className="text-center mb-16 max-w-3xl mx-auto">
    <h2 className={`text-4xl md:text-5xl font-black mb-4 tracking-tighter ${light ? 'text-slate-900' : 'text-white'}`}>
      {title}
    </h2>
    <p className={light ? 'text-slate-500' : 'text-slate-400'}>{subtitle}</p>
  </div>
);
