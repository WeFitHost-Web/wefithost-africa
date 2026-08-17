import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Eye, X, ExternalLink } from 'lucide-react';

const showcases = [
  {
    title: 'Business Websites',
    desc: 'Professional WordPress site with custom theme and WooCommerce integration perfect for African SMEs scaling online.',
    image: './assets/new-images/1 WORD PRESS HOSTING.jpg',
    fallback: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    features: ['Fully responsive and mobile-friendly', 'Large product images and easy navigation', 'Quick-view and wishlist features', 'Integrated blog and newsletter signup'],
    idealFor: ['Fashion and lifestyle brands', 'Boutique stores', 'Minimalist product lines'],
    category: 'Business & E-commerce'
  },
  {
    title: 'Professional Blog',
    desc: 'High-traffic WordPress blog with custom plugins and performance optimization built for African content creators.',
    image: '/assets/new-images/blog-3.png',
    fallback: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    features: ['Fully responsive and mobile-friendly', 'Optimized typography for readability', 'Featured posts and category highlights', 'Seamless social sharing options'],
    idealFor: ['Personal and professional bloggers', 'Writers and journalists', 'Content-focused brands'],
    category: 'Media & Publishing'
  },
  {
    title: 'E-commerce Store',
    desc: 'WooCommerce store with thousands of products and seamless checkout powering African online retail.',
    image: '/assets/new-images/style.png',
    fallback: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    features: ['Fully responsive and mobile-friendly', 'Large product images and easy navigation', 'Quick-view and wishlist features', 'Color customization options'],
    idealFor: ['Fashion and lifestyle brands', 'Boutique stores', 'Minimalist product lines'],
    category: 'E-commerce Retail'
  }
];

const WPShowcase = () => {
  const [activeModal, setActiveModal] = useState(null);

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
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setActiveModal(item)}
            >
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/10 transition-all hover:-translate-y-2">
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                  <h3 className="text-slate-900 font-bold text-lg mb-2">{item.title}</h3>
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
                className="relative bg-white border border-slate-200 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 z-30 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors shadow-md"
                >
                  <X size={20} />
                </button>

                {/* 2-Column Split Modal Content */}
                <div className="grid md:grid-cols-2 max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  
                  {/* Left Column: Swiper Carousel */}
                  <div className="relative h-64 md:h-full min-h-[350px] w-full bg-slate-100">
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      spaceBetween={0}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 4000, disableOnInteraction: false }}
                      initialSlide={showcases.findIndex(s => s.title === activeModal.title)}
                      className="w-full h-full [&_.swiper-pagination-bullet-active]:bg-indigo-600"
                    >
                      {showcases.map((showcase, index) => (
                        <SwiperSlide key={index} className="w-full h-full">
                          <div className="relative w-full h-full min-h-[350px]">
                            <img 
                              src={showcase.image} 
                              alt={showcase.title}
                              className="w-full h-full object-cover"
                              onError={(e) => { e.target.src = showcase.fallback; }}
                            />
                            <div className="absolute top-4 left-4 z-10">
                              <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                {showcase.category}
                              </span>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* Right Column: Description & Details */}
                  <div className="p-8 flex flex-col justify-between bg-white">
                    <div>
                      <span className="text-indigo-600 text-xs font-extrabold uppercase tracking-widest bg-indigo-50 px-2.5 py-1 rounded-md">
                        {activeModal.category}
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 mt-3 mb-3">{activeModal.title}</h3>
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
                        href="https://wefithost.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all shadow-md"
                      >
                        <span>Launch Your Site</span>
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