import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Eye, X, ExternalLink } from 'lucide-react';

// ── Rokstedi (rokstedi.net) ────────────────────────────────────────────────
import rok1 from '../../assets/websites/rokstedi/1.png';
import rok2 from '../../assets/websites/rokstedi/2.png';
import rok3 from '../../assets/websites/rokstedi/3.png';
import rok4 from '../../assets/websites/rokstedi/4.png';
import rok5 from '../../assets/websites/rokstedi/5.png';

// ── Keza Organics (kezaorganics.com) ───────────────────────────────────────
import keza1 from '../../assets/websites/kezaorganics/1.png';
import keza2 from '../../assets/websites/kezaorganics/2.png';
import keza3 from '../../assets/websites/kezaorganics/3.png';
import keza4 from '../../assets/websites/kezaorganics/4.png';
import keza5 from '../../assets/websites/kezaorganics/5.png';

// ── Viewross (viewross.com) ─────────────────────────────────────────────────
import view1 from '../../assets/websites/viewross/1.png';
import view2 from '../../assets/websites/viewross/2.png';
import view3 from '../../assets/websites/viewross/3.png';
import view4 from '../../assets/websites/viewross/4.png';
import view5 from '../../assets/websites/viewross/5.png';

const showcases = [
  {
    id: 'rokstedi',
    title: 'Rokstedi Entertainment',
    url: 'rokstedi.net',
    liveUrl: 'https://rokstedi.net',
    category: 'Entertainment & Personal Brand',
    desc: 'A luxury booking site for London entertainer DJ Jossy Ladd, built around a cinematic scroll experience and a live Instagram feed.',
    features: [
      'Full-bleed cinematic hero with an animated service marquee',
      'Live Instagram feed pulling in recent posts',
      'Animated stat counters for years, events and TV credits',
      'Structured enquiry form with event type and date fields'
    ],
    idealFor: ['Entertainers, DJs & MCs', 'Public figures & personal brands', 'Event booking businesses'],
    images: [rok1, rok2, rok3, rok4, rok5],
    fallback: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'kezaorganics',
    title: 'Keza Organics',
    url: 'kezaorganics.com',
    liveUrl: 'https://kezaorganics.com',
    category: 'E-commerce & Retail',
    desc: 'A warm, editorial storefront for a shea butter skincare brand, pairing full product shopping with nature-led brand storytelling.',
    features: [
      'Complete shop catalog with quick-view product modals',
      'Benefit-driven storytelling sections for each product line',
      'Customer review carousel with star ratings',
      'Newsletter capture offering 15% off the first order'
    ],
    idealFor: ['Skincare & beauty brands', 'Organic and artisanal product lines', 'Story-first e-commerce'],
    images: [keza1, keza2, keza3, keza4, keza5],
    fallback: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'viewross',
    title: 'Viewross Events',
    url: 'viewross.com',
    liveUrl: 'https://viewross.com',
    category: 'Business & Corporate Services',
    desc: 'A UK-wide catering, food service, and AV equipment rental company site, split across three divisions with a shared portfolio and lead form.',
    features: [
      'Three dedicated divisions: catering, food services, equipment',
      'Recent work portfolio grid with location and category tags',
      'Client testimonial carousel by service line',
      'Multi-field enquiry form with service and date selection'
    ],
    idealFor: ['Event & catering companies', 'Multi-division B2B businesses', 'Portfolio-driven service sites'],
    images: [view1, view2, view3, view4, view5],
    fallback: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200'
  }
];

const WPShowcase = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (item) => {
    setActiveModal(item);
    setActiveIndex(0);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Eye size={14} /> Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Beautiful WordPress Websites Built On WeFitHost
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto font-medium">
            See what African businesses and creators have built with our WordPress hosting across the continent.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {showcases.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/10 transition-all hover:-translate-y-2">
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = item.fallback; }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white text-indigo-600 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-md">
                      <Eye size={16} /> See Details
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-slate-900 font-bold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-slate-500 text-xs font-semibold mb-2">{item.url}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setActiveModal(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative bg-white border border-slate-200 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 z-30 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors shadow-md"
                >
                  <X size={20} />
                </button>

                {/* 2-Column Split Modal Content */}
                <div className="grid md:grid-cols-2 max-h-[90vh] overflow-y-auto md:overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                  {/* Left Column: Screenshot Carousel (this site's own images) */}
                  <div className="relative bg-slate-100 h-72 sm:h-96 md:h-auto md:min-h-[560px]">
                    <Swiper
                      key={activeModal.id}
                      modules={[Pagination, Autoplay]}
                      spaceBetween={0}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                      className="w-full h-full [&_.swiper-pagination-bullet-active]:bg-indigo-600"
                    >
                      {activeModal.images.map((src, index) => (
                        <SwiperSlide key={index} className="w-full h-full">
                          <div className="relative w-full h-full flex items-center justify-center bg-slate-100 p-3 sm:p-5">
                            <img
                              src={src}
                              alt={`${activeModal.title} screenshot ${index + 1}`}
                              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-sm"
                              onError={(e) => { e.target.src = activeModal.fallback; }}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {activeModal.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 z-10">
                      <span className="bg-slate-900/70 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                        {activeIndex + 1} / {activeModal.images.length}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Description & Details */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between bg-white md:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div>
                      <span className="text-indigo-600 text-xs font-extrabold uppercase tracking-widest bg-indigo-50 px-2.5 py-1 rounded-md">
                        {activeModal.category}
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 mt-3 mb-1">{activeModal.title}</h3>
                      <p className="text-slate-400 text-xs font-semibold mb-4">{activeModal.url}</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">{activeModal.desc}</p>

                      <div className="space-y-5 border-t border-slate-100 pt-5">
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-2">Key Features</h4>
                          <ul className="space-y-1.5">
                            {activeModal.features.map((f, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 flex-shrink-0" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-2">Ideal For</h4>
                          <ul className="space-y-1.5">
                            {activeModal.idealFor.map((f, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1 flex-shrink-0" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-4">
                      <a
                        href={activeModal.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all shadow-md"
                      >
                        <span>Visit {activeModal.url}</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default WPShowcase;