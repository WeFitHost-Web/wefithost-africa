import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const TestimonialSlider = ({ testimonials }) => (
  <section className="py-24 bg-[#0b1120]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
          Trusted by <span className="text-indigo-500">thousands</span> of creators.
        </h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-16 testimonial-swiper"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="!h-auto flex">
            {/* 
              - lg:h-[400px]: Sets a strict fixed height on desktop screens.
              - flex flex-col: Keeps internal content organized.
            */}
            <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-[2rem] w-full flex flex-col lg:h-[300px] hover:bg-slate-800/60 transition-colors shadow-xl">
              
              {/* flex-grow ensures the profile stays at the bottom even with a fixed height */}
              <div className="flex-grow overflow-y-auto custom-scrollbar">
                <div className="flex gap-1 text-yellow-500 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-300 italic leading-relaxed font-medium">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-slate-700/30">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .testimonial-swiper .swiper-pagination-bullet { 
        background: #334155; 
        opacity: 1; 
      }
      .testimonial-swiper .swiper-pagination-bullet-active { 
        background: #6366f1; 
        width: 24px; 
        border-radius: 4px; 
        transition: all 0.3s; 
      }
      /* Optional: Hide scrollbar for internal text if it overflows the fixed height */
      .custom-scrollbar::-webkit-scrollbar {
        width: 0px;
        background: transparent;
      }
    `}} />
  </section>
);