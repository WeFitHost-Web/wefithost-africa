import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    sector: 'Marketing & Tech',
    quote: "Since switching to WeFitHost's managed hosting, our agency site load times dropped by over 60% and we've maintained 100% uptime. Their technical team handles our configurations effortlessly, saving our devs hours of troubleshooting workspace servers.",
    initials: 'OA',
    name: 'Olumide Awosika',
    role: 'Managing Director',
    company: 'Vantage Pulse Media',
    color: 'bg-indigo-500/20 text-indigo-400'
  },
  {
    sector: 'E-commerce Retail',
    quote: "The built-in caching and NVMe infrastructure had been able to give me real peace of mind. During our payday holiday sales rush, our storefront didn't glitch or slow down for a second. The server infrastructure scaling handles heavy traffic spikes perfectly.",
    initials: 'CN',
    name: 'Chioma Nwachukwu',
    role: 'Founder',
    company: 'Asa Threads Hub',
    color: 'bg-emerald-500/20 text-emerald-400'
  },
  {
    sector: 'Media & Publishing',
    quote: "Moving my content site over was completely seamless. I am not a core system administrator, so having their engineers completely migrate my database and handle the daily automated security updates for free keeps my focus strictly on publishing.",
    initials: 'AB',
    name: 'Aminu Bello',
    role: 'Editor & Creator',
    company: 'The Echo Digest',
    color: 'bg-amber-500/20 text-amber-400'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[#1e293b]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it hear from local businesses and creators that switched to our optimized hosting solutions.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 10000, disableOnInteraction: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="h-auto">
              <div className="bg-white rounded-2xl p-6 h-full flex flex-col justify-between border border-slate-700/50">
                <div>
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-slate-100 text-[#6b63ff] text-[10px] font-mono font-bold uppercase px-2.5 py-1.5 rounded">
                      Sector: {t.sector}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-auto">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${t.color}`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">{t.name}</h4>
                    <p className="text-slate-500 text-xs">
                      <span className="font-medium text-slate-700">{t.role}</span> at{' '}
                      <span className="text-[#6b63ff] font-semibold">{t.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default TestimonialsSection;
