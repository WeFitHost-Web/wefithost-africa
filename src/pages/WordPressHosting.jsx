import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCurrency } from '../contexts/CurrencyContext';
import { PricingCard } from '../components/PricingCard';
import { ImageCarousel } from '../components/Carousel';
import { WPModal } from '../components/WPModal';
import { 
  Zap, Shield, Globe2, Layout, RefreshCw, 
  Terminal, LifeBuoy, ShoppingCart, Eye, ExternalLink 
} from 'lucide-react';

const WordPressHosting = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const stagingSlides = [
    { 
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000", 
      title: "One-Click Staging", 
      description: "Test updates and design changes in a safe sandbox before going live." 
    },
    { 
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000", 
      title: "Performance Monitoring", 
      description: "Real-time analytics for your WooCommerce store or blog." 
    }
  ];

  // Project Samples Data
  const wpSamples = [
    {
      name: "E-Commerce Hub",
      category: "WooCommerce / Retail",
      previewUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000",
      dashboardUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000", // Example Dashboard
      description: "A high-traffic store optimized for Kenyan mobile payments."
    },
    {
      name: "The Daily Digest",
      category: "Publishing / Blog",
      previewUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000",
      dashboardUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000", // Example Dashboard
      description: "News platform handling 50k+ monthly visitors with LiteSpeed."
    },
    {
      name: "SecurePort Folio",
      category: "Corporate / Agency",
      previewUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2000",
      dashboardUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2000", // Example Dashboard
      description: "Lightning fast corporate site with automated daily backups."
    }
  ];

  const wpPlans = [
    { plan: "WP Starter", basePricePounds: isYearly ? 2.50 : 3.00, features: ["1 WP Site", "20GB NVMe SSD", "Auto-Updates", "WP Staging", "Free SSL"], isFeatured: false },
    { plan: "WP Business", basePricePounds: isYearly ? 5.20 : 6.50, features: ["5 WP Sites", "100GB NVMe SSD", "Object Cache Pro", "Global CDN", "Daily Backups"], isFeatured: false },
    { plan: "WP Scale", basePricePounds: isYearly ? 10.40 : 13.00, features: ["Unlimited Sites", "Unlimited NVMe", "VIP WP Support", "Free .AFRICA Domain", "Priority Patching"], isFeatured: false }
  ];

  return (
    <div className="font-sans text-slate-700 bg-white">
      
      {/* Hero: Popups Removed */}
      <section className="relative pt-40 pb-32 overflow-hidden flex items-center min-h-[70vh]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070')` }}
        />
        <div className="absolute inset-0 z-10 bg-[#0b1120]/75 backdrop-blur-md" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-20 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <Layout className="text-indigo-400" size={20} />
              </div>
              <span className="text-white font-bold tracking-widest text-xs uppercase">WordPress Hosting Africa</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
              WordPress, <br />
              <span className="text-indigo-400 italic">Supercharged.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
              Experience managed WP hosting in Nigeria optimized for extreme performance. 
              Built-in staging, auto-patching, and enterprise-grade security.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-indigo-500 transition-all shadow-2xl">
                Explore WP Plans
                </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WordPress Samples with Popups */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-indigo-600 font-black uppercase tracking-widest text-xs">Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">WordPress in Action</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {wpSamples.map((sample, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all"
              >
                {/* Site Preview Image */}
                <div className="h-64 overflow-hidden relative">
                  <img src={sample.previewUrl} alt={sample.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button 
                      onClick={() => setActiveModal({ title: `${sample.name} - Admin Dashboard`, url: sample.dashboardUrl })}
                      className="bg-white p-4 rounded-2xl text-indigo-600 shadow-xl hover:scale-110 transition-transform flex items-center gap-2 font-bold"
                    >
                      <Eye size={20} /> View More
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <span className="text-indigo-500 text-xs font-black uppercase tracking-widest">{sample.category}</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-2 mb-3">{sample.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{sample.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing: Navy Background */}
      <section className="py-32 bg-[#0b1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Optimized WooCommerce Hosting</h2>
            <div className="mt-12 inline-flex bg-slate-800 p-1 rounded-2xl">
              <button onClick={() => setIsYearly(false)} className={`px-8 py-2 rounded-xl text-sm font-bold transition-all ${!isYearly ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}>Monthly</button>
              <button onClick={() => setIsYearly(true)} className={`px-8 py-2 rounded-xl text-sm font-bold transition-all ${isYearly ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}>Yearly (-20%)</button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {wpPlans.map((plan, i) => (
              <PricingCard key={i} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure/Carousel */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <ImageCarousel slides={stagingSlides} />
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
              One-Click Staging. <br />
              <span className="text-indigo-600">No Risk, All Growth.</span>
            </h2>
            <p className="text-slate-500 mb-8 text-lg leading-relaxed">
              Never break your live site again. Our staging tool allows you to create an 
              exact copy of your site to test new WooCommerce plugins or design updates.
            </p>
            <div className="space-y-4">
              {[
                { icon: <Terminal size={18}/>, text: "WP-CLI & SSH Access" },
                { icon: <ShoppingCart size={18}/>, text: "E-commerce Optimized NVMe" },
                { icon: <Globe2 size={18}/>, text: "Free .com / .africa Domain" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-800 font-bold">
                  <div className="text-indigo-600">{item.icon}</div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-indigo-600 rounded-[4rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black mb-8 italic">Supercharge Your WordPress Today</h2>
          <button className="bg-white text-indigo-600 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all">Get Started</button>
          <Globe2 size={400} className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none" />
        </div>
      </section>

      {/* Popup Modal Component */}
      <WPModal 
        isOpen={!!activeModal} 
        onClose={() => setActiveModal(null)} 
        image={activeModal?.url} 
        title={activeModal?.title} 
      />
    </div>
  );
};

export default WordPressHosting;