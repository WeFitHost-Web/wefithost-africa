import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    sector: "Web Design",
    quote:
      "We came in with just a logo and an idea. Three weeks later we had a site that actually looked like the brand we imagined.",
    initials: "AY",
    name: "Ada Yusuf",
    role: "Founder",
    company: "Bloom & Co.",
    color: "bg-indigo-500/20 text-indigo-400",
  },
  {
    sector: "Website Revamp",
    quote:
      "Our old site was slow and looked dated. The revamp kept everything our customers knew, just faster and far better looking.",
    initials: "PO",
    name: "Peter Okonkwo",
    role: "Operations Lead",
    company: "Harborline Logistics",
    color: "bg-emerald-500/20 text-emerald-400",
  },
  {
    sector: "Website Migration",
    quote:
      "We were dreading the move to a new host, but the migration team handled DNS, email, and files without a single hour of downtime.",
    initials: "RM",
    name: "Rachel Mwangi",
    role: "Marketing Manager",
    company: "Savanna Foods",
    color: "bg-amber-500/20 text-amber-400",
  },
];

const ServicesTestimonials = () => {
  return (
    <section className="py-24 bg-[#1e293b]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real feedback from businesses we've designed, revamped, and migrated for.
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

export default ServicesTestimonials;