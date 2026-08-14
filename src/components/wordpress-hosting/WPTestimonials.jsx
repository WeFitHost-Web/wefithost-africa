import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    sector: 'Marketing & Tech',
    quote: "Since switching to WeFitHost's managed hosting, our agency site load times improved by 60% and we've had zero downtime. Their support team has saved us countless hours troubleshooting WordPress issues.",
    initials: 'OA',
    name: 'Olumide Awosika',
    role: 'Managing Director',
    company: 'Vantage Pulse Media',
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    sector: 'E-commerce Retail',
    quote: "The automatic updates and security features give me peace of mind. When we had a traffic spike during Black Friday, our site handled it perfectly thanks to their scalable resources.",
    initials: 'CN',
    name: 'Chioma Nwachukwu',
    role: 'Founder',
    company: 'Asa Threads Hub',
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    sector: 'Media & Publishing',
    quote: "As someone who's not technical, managed hosting was the perfect choice. The migration was seamless and now I don't have to worry about updates or security it's all handled for me.",
    initials: 'AB',
    name: 'Aminu Bello',
    role: 'Editor & Creator',
    company: 'The Echo Digest',
    color: 'bg-amber-100 text-amber-600'
  }
];

const WPTestimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Don't just take our word for it hear from African businesses and creators that switched to our managed hosting.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 8000, disableOnInteraction: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="h-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white text-[#6b63ff] text-[10px] font-mono font-bold uppercase px-3 py-1.5 rounded-lg border border-slate-200">
                    Sector: {t.sector}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic flex-grow">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
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
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default WPTestimonials;