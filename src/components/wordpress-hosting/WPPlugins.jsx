import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Puzzle } from 'lucide-react';

const plugins = [
  {
    name: 'Wordfence Security',
    desc: 'Enterprise-grade WordPress security plugin with firewall and malware scanner.',
    image: 'https://ps.w.org/wordfence/assets/icon-256x256.png',
    badge: 'Included'
  },
  {
    name: 'WP Rocket',
    desc: 'Premium caching plugin to dramatically speed up your WordPress site.',
    image: 'https://www.isitwp.com/wp-content/uploads/2021/02/wp-rocket-.png',
    badge: 'Included'
  },
  {
    name: 'UpdraftPlus',
    desc: 'Backup and restore your WordPress site with this powerful plugin.',
    image: 'https://www.elated.com/wp-content/uploads/2016/11/updraftplus-tutorial.jpg',
    badge: 'Included'
  },
  {
    name: 'WooCommerce',
    desc: 'Transform your WordPress site into a powerful e-commerce store.',
    image: 'https://ps.w.org/woocommerce/assets/icon-256x256.png',
    badge: 'Included'
  }
];

const WPPlugins = () => {
  return (
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-indigo-500/10 text-[#6b63ff] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Puzzle size={14} /> Premium Plugins
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            Pre-installed WordPress Plugins
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            We include premium plugins to enhance your WordPress experience at no extra cost.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {plugins.map((plugin, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all hover:-translate-y-1"
            >
              <span className="inline-block bg-[#6b63ff] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                {plugin.badge}
              </span>
              <img 
                src={plugin.image} 
                alt={plugin.name}
                className="w-16 h-16 object-contain mx-auto mb-4"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/64?text=WP'; }}
              />
              <h3 className="text-white font-bold text-sm mb-2">{plugin.name}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{plugin.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.3}
            centeredSlides={true}
            pagination={{ clickable: true }}
            className="!pb-12"
          >
            {plugins.map((plugin, i) => (
              <SwiperSlide key={i}>
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center">
                  <span className="inline-block bg-[#6b63ff] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    {plugin.badge}
                  </span>
                  <img 
                    src={plugin.image} 
                    alt={plugin.name}
                    className="w-16 h-16 object-contain mx-auto mb-4"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/64?text=WP'; }}
                  />
                  <h3 className="text-white font-bold text-sm mb-2">{plugin.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{plugin.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default WPPlugins;