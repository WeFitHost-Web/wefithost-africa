import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    sector: "E-commerce",
    quote:
      "Scaling up before Black Friday took us 10 seconds. Absolute game-changer for our e-commerce traffic across the region.",
    initials: "KA",
    name: "Kemi Adeyemi",
    role: "CTO",
    company: "Zando Kenya",
    color: "bg-indigo-500/20 text-indigo-400",
  },
  {
    sector: "Data & Analytics",
    quote:
      "We migrated our analytics workloads to the Lagos cloud hub. Data retrieval speeds went from seconds to milliseconds.",
    initials: "ON",
    name: "Obinna Nnamdi",
    role: "Engineering Lead",
    company: "PulseMetrics",
    color: "bg-emerald-500/20 text-emerald-400",
  },
  {
    sector: "Fintech",
    quote:
      "WeFitHost managed our migration flawlessly. The high-availability clusters have eliminated our previous downtime issues entirely.",
    initials: "SJ",
    name: "Sarah Johnson",
    role: "Ops Manager",
    company: "FintechX",
    color: "bg-amber-500/20 text-amber-400",
  },
];

const CloudTestimonials = () => {
  return (
    <section className="py-24 bg-[#1e293b]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it hear from businesses that scaled with our cloud infrastructure.
          </p>
        </div>

        {/* Swiper */}
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
                className="bg-white rounded-2xl p-6 h-full flex flex-col justify-between border border-slate-700/50"
              >
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
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                    "{t.quote}"
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
                      <span className="font-medium text-slate-700">{t.role}</span> at{" "}
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

export default CloudTestimonials;