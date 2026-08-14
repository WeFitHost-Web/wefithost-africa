import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Globe2, Zap, Database, Lock, CloudUpload, Shield, FlaskConical, Terminal, Bug, Sparkles
} from 'lucide-react';

const features = [
  {
    icon: Globe2,
    title: 'WordPress Toolkit',
    desc: 'Manage your instances effortlessly with a centralized control dashboard designed to automate tedious management tasks.',
    items: ['Smart plugin updates', 'Security configuration checklist', 'Clone & sync sites easily', 'Password & user management']
  },
  {
    icon: Zap,
    title: 'LiteSpeed Web Server',
    desc: 'Power your website with event-driven architectures that handle thousands of concurrent users cleanly.',
    items: ['Up to 5x faster delivery', 'HTTP/3 protocol ready', 'Advanced QUIC integration', 'Low memory overhead footprint']
  },
  {
    icon: Database,
    title: 'Redis Cache',
    desc: 'Accelerate slow back-end dynamic request operations with high-speed memory-based database caching.',
    items: ['Persistent Object Caching', 'Database query offloading', 'Instant response indexing', 'Drastically drops TTFB times']
  },
  {
    icon: Lock,
    title: 'Free SSL Certificates',
    desc: 'Encrypt client application pathways automatically and secure sensitive customer transactions.',
    items: ['Automated renewal triggers', "Let's Encrypt validation", 'Wildcard domain coverage', 'Improves search visibility']
  },
  {
    icon: CloudUpload,
    title: 'Daily Backups',
    desc: 'Isolate production data loss anomalies and maintain historical restoration files securely.',
    items: ['30-day snapshot storage', 'One-click backup rollbacks', 'Database & file state tracking', 'On-demand staging exports']
  },
  {
    icon: Shield,
    title: 'Advanced Security',
    desc: 'Proactively safeguard your site perimeter with customized rulesets crafted for WordPress.',
    items: ['DDoS defense scrubbing layers', 'Web Application Firewall (WAF)', 'Brute-force login protection', 'IP reputation tracking']
  },
  {
    icon: FlaskConical,
    title: 'Staging Environment',
    desc: 'Safely iterate design features and test configurations without modifying production code.',
    items: ['One-click test deployments', 'Seamless production push hooks', 'Isolated sandbox environment', 'Database merging controls']
  },
  {
    icon: Terminal,
    title: 'WP-CLI Access',
    desc: 'Automate routine updates and manage configurations directly from a command-line utility.',
    items: ['Secure SSH tunneling protocol', 'Bulk module installations', 'Database search & replace', 'Custom developer scripts']
  },
  {
    icon: Bug,
    title: 'Malware Scanning',
    desc: 'Run automated scripts against your server files to identify backdoors and compromised plugins.',
    items: ['Real-time file tracking sweeps', 'Automatic isolation features', 'Core file verification hashes', 'Immediate notifications']
  },
  {
    icon: Sparkles,
    title: 'One-Click Installation',
    desc: 'Provision new clean application footprints in seconds without complex manual setup.',
    items: ['Instant database creation', 'Pre-configured optimizations', 'Latest core stable builds', 'Automated admin credentials']
  }
];

const WPFeaturesSlider = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-indigo-500/10 text-[#6b63ff] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Zap size={14} /> Platform Features
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Everything You Need to Run WordPress at Peak Performance
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Our hosting platform is optimized specifically for WordPress with features you won't find on generic hosting.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {features.map((feat, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 h-full hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all group"
              >
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-indigo-500/10 transition-colors">
                  <feat.icon size={26} className="text-[#6b63ff]" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2">{feat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{feat.desc}</p>
                <ul className="space-y-2.5">
                  {feat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6b63ff] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default WPFeaturesSlider;
