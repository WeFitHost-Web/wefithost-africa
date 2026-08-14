import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Globe2, GitBranch, Terminal, RefreshCw, Zap, Database, Shield, CloudUpload } from 'lucide-react';

const tools = [
  { icon: Globe2, title: 'One-Click WordPress', desc: 'Deploy fully optimized WordPress instances instantly without touching files or databases.' },
  { icon: GitBranch, title: 'Staging Environment', desc: 'Clone and test changes safely in an isolated sandbox environment before going live.' },
  { icon: Terminal, title: 'WP-CLI', desc: 'Manage your site upgrades, configurations, and core features over command line execution.' },
  { icon: RefreshCw, title: 'Auto Updates', desc: 'Keep your underlying WordPress core framework and extension binaries up to date seamlessly.' },
  { icon: Zap, title: 'LiteSpeed Cache', desc: 'Leverage enterprise page-level caching directly inside your site for faster response.' },
  { icon: Database, title: 'Redis Cache', desc: 'Offload intensive database requests into fast temporary memory space to increase responsiveness.' },
  { icon: Shield, title: 'Malware Protection', desc: 'Proactively monitor file system modifications and isolate malicious application layer activity.' },
  { icon: CloudUpload, title: 'Backup Manager', desc: 'Schedule point-in-time state checks and process quick full restoration paths with one click.' }
];

const WPTools = () => {
  return (
    <section className="py-24 bg-[#0b1120]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-indigo-500/10 text-[#6b63ff] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Terminal size={14} /> Developer Tools
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            Included WordPress Tools
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Powerful tools to help you build, manage, and grow your WordPress site across Africa.
          </p>
        </div>

        {/* Swiper on mobile, grid on desktop */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-indigo-500/20 transition-colors">
                <tool.icon size={28} className="text-[#6b63ff]" />
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{tool.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{tool.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            pagination={{ clickable: true }}
            className="!pb-12"
          >
            {tools.map((tool, i) => (
              <SwiperSlide key={i}>
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <tool.icon size={28} className="text-[#6b63ff]" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{tool.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{tool.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default WPTools;
