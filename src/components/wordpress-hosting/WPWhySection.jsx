import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'More Security',
    desc: 'Malware protection, SSL and security monitoring built into every plan.',
    stat: '30%',
    statLabel: 'of African customers trust WeFitHost for web hosting'
  },
  {
    icon: Zap,
    title: 'Optimized Performance',
    desc: 'Servers configured specifically for WordPress with LiteSpeed and Redis caching.',
    stat: '2M+',
    statLabel: 'websites currently hosted across Africa'
  },
  {
    icon: Globe,
    title: 'Local Infrastructure',
    desc: 'Data centres in Lagos, Nairobi, and Johannesburg for sub-30ms latency.',
    stat: '3',
    statLabel: 'African edge nodes serving the continent'
  }
];

const WPWhySection = () => {
  return (
    <section className="py-24 bg-[#0b1120]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-indigo-500/10 text-[#6b63ff] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Zap size={14} /> Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-tight">
              Why Managed WordPress Hosting with WeFitHost?
            </h2>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg">
              WeFitHost has everything you need to thrive online across Africa. With 
              blazing-fast local hosting, powerful eCommerce tools, WordPress expertise, 
              and support that understands your market.
            </p>

            <div className="space-y-6">
              {features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                    <feat.icon size={22} className="text-[#6b63ff]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{feat.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="assets/images/feature/wordpress__feature__big.png"
                alt="WordPress hosting features"
                className="w-full h-auto rounded-2xl"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
              {features.map((feat, i) => (
                <div key={i} className="bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-xl p-3 text-center">
                  <div className="text-xl font-black text-white">{feat.stat}</div>
                  <div className="text-[10px] text-slate-400 leading-tight mt-1">{feat.statLabel}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WPWhySection;
