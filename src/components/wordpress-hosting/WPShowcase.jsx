import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
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
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-indigo-500/10 text-[#6b63ff] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Eye size={14} /> Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            Beautiful WordPress Websites Built On WeFitHost
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
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
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all hover:-translate-y-2">
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = item.fallback; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#6b63ff] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white text-[#6b63ff] px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                      <Eye size={16} /> See Details
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
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
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
              onClick={() => setActiveModal(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img 
                    src={activeModal.image} 
                    alt={activeModal.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                    onError={(e) => { e.target.src = activeModal.fallback; }}
                  />
                  <button 
                    onClick={() => setActiveModal(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="p-8">
                  <span className="text-[#6b63ff] text-xs font-bold uppercase tracking-widest">{activeModal.category}</span>
                  <h3 className="text-2xl font-black text-white mt-2 mb-4">{activeModal.title}</h3>
                  <p className="text-slate-400 mb-6">{activeModal.desc}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-bold text-sm mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {activeModal.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-3">Ideal For</h4>
                      <ul className="space-y-2">
                        {activeModal.idealFor.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6b63ff] mt-1.5 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
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
