export const FeatureSlider = ({ features }) => (
  <section className="py-24 bg-slate-50 rounded-[4rem] mx-4 my-20">
    <div className="max-w-7xl mx-auto px-6">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        className="rounded-3xl overflow-hidden shadow-2xl"
      >
        {features.map((f, i) => (
          <SwiperSlide key={i}>
            <div className="grid md:grid-cols-2 items-center bg-white">
              <div className="p-12 md:p-20">
                <span className="text-indigo-600 font-black text-xs uppercase tracking-widest bg-indigo-50 px-4 py-2 rounded-full">
                  Feature {i + 1}
                </span>
                <h3 className="text-4xl font-black text-slate-900 tracking-tighter mt-6 mb-4">
                  {f.title}
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  {f.description}
                </p>
                <button className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Learn more <span>→</span>
                </button>
              </div>
              <div className="h-[400px] md:h-full bg-slate-200">
                <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);