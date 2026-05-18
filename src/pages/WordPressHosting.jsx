import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCurrency } from '../contexts/CurrencyContext';
import { PricingCard } from '../components/PricingCard';
import { ImageCarousel } from '../components/Carousel';
import { WPModal } from '../components/WPModal';
import { 
  Zap, Shield, Globe2, Layout, RefreshCw, 
  Terminal, LifeBuoy, ShoppingCart, Eye, ExternalLink, CheckCircle2
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

  // Case Studies aligned with target audiences (Bloggers, Businesses, Online Stores)
  const wpSamples = [
    {
      name: "E-Commerce Hub",
      category: "WooCommerce Store (Pro / ProPlus)",
      previewUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000",
      dashboardUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000",
      description: "High-performance store optimized for WooCommerce with rapid transaction processing."
    },
    {
      name: "The Daily Digest",
      category: "Publishing / Blog (Essential)",
      previewUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000",
      dashboardUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000",
      description: "Sleek content engine utilizing automatic updates and standard optimization matrices."
    },
    {
      name: "SecurePort Corporate",
      category: "Business Portal (Value)",
      previewUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2000",
      dashboardUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2000",
      description: "Corporate platform fortified with standard malware shield layers and daily backup cycles."
    }
  ];

  // Configured precisely to match the Managed WordPress Hosting Guide specifications
  const wpPlans = [
    { 
      plan: "Essential", 
      basePricePounds: isYearly ? 2.50 : 3.00, 
      features: [
        "Automatic Updates Included", 
        "Daily Backup Architecture", 
        "Basic Security Protection", 
        "Standard Speed Optimization", 
        "1-Click Staging Site Ready"
      ], 
      isFeatured: false 
    },
    { 
      plan: "Value", 
      basePricePounds: isYearly ? 5.20 : 6.50, 
      features: [
        "Automatic Updates Included", 
        "Daily Backup Architecture", 
        "Standard Security Shield", 
        "Enhanced Speed Profiles", 
        "1-Click Staging Site Ready"
      ], 
      isFeatured: false 
    },
    { 
      plan: "Pro / ProPlus", 
      basePricePounds: isYearly ? 10.40 : 13.00, 
      features: [
        "Automatic Updates Included", 
        "Hourly Backup Cycles", 
        "Advanced Malware Protection", 
        "High Performance Tuning", 
        "1-Click Staging Site Ready",
        "Optimized for WooCommerce"
      ], 
      isFeatured: false 
    }
  ];

  return (
    <div className="font-sans text-slate-100 min-h-screen flex flex-col overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden flex items-center min-h-[70vh]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070')` }}
        />
        <div className="absolute inset-0 z-10 bg-[#0b1120]/80 backdrop-blur-md" />
        
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
              Fully automated managed WordPress instances provisioned locally. Get integrated sandboxing, autonomous patching environments, and speed optimization footprints built directly for African digital growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-indigo-500 transition-all shadow-xl">
                Explore WP Plans
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WordPress Case Studies Section (Converted to Dark UI) */}
      <section className="py-32 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-indigo-400 font-black uppercase tracking-widest text-xs">Architecture Archetypes</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">WordPress in Action</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {wpSamples.map((sample, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative bg-slate-900/40 rounded-[3rem] overflow-hidden border border-slate-800 shadow-sm hover:shadow-2xl hover:border-indigo-500/30 transition-all"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={sample.previewUrl} alt={sample.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-indigo-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button 
                      onClick={() => setActiveModal({ title: `${sample.name} - Admin Dashboard`, url: sample.dashboardUrl })}
                      className="bg-indigo-600 px-6 py-4 rounded-2xl text-white shadow-xl hover:scale-110 transition-transform flex items-center gap-2 font-bold text-sm"
                    >
                      <Eye size={18} /> View More
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <span className="text-indigo-400 text-xs font-black uppercase tracking-widest">{sample.category}</span>
                  <h3 className="text-2xl font-black text-white mt-2 mb-3">{sample.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{sample.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-[#0b1120] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Optimized Architecture Tiers</h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto">Completely isolated execution runtime profiles configured specifically for production configurations.</p>
            <div className="mt-8 inline-flex bg-slate-950 p-1 rounded-2xl border border-slate-800">
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

      {/* Deep Dive Matrix Table (Sourced entirely from your Product Guide Rules) */}
      <section className="py-24 bg-[#0b1120] border-t border-slate-900 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 text-white tracking-tight">Features</h2>
          <div className="overflow-x-auto rounded-[2rem] border border-slate-800 bg-slate-950/40">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-950/80 border-b border-slate-800">
                <tr>
                  <th className="p-8 text-xs font-black uppercase text-slate-500">Service Line Features</th>
                  <th className="p-8 font-black text-slate-300">Essential</th>
                  <th className="p-8 font-black text-indigo-400">Value</th>
                  <th className="p-8 font-black text-slate-300">Pro / ProPlus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900">
                {[
                  ["Automatic Code Updates", "Yes", "Yes", "Yes"],
                  ["Backup Retention Intervals", "Daily", "Daily", "Hourly"],
                  ["Security & Malware Shielding", "Basic Mitigation", "Standard Protection", "Advanced Defense Suite"],
                  ["Speed Optimization Profiling", "Standard Tuning", "Enhanced Acceleration", "High Performance Profile"],
                  ["Isolated Staging Runtimes", "Yes", "Yes", "Yes"]
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-900/20 transition-colors">
                    <td className="p-8 font-bold text-slate-200">{row[0]}</td>
                    <td className="p-8 text-slate-400 font-medium">{row[1]}</td>
                    <td className="p-8 text-slate-400 font-medium">{row[2]}</td>
                    <td className="p-8 text-slate-400 font-medium">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Integrated Staging & Infrastructure Carousel Section */}
      <section className="py-32 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <ImageCarousel slides={stagingSlides} />
          <div>
            <h2 className="text-4xl font-black text-white mb-8 leading-tight">
              One-Click Staging. <br />
              <span className="text-indigo-400">No Risk, All Growth.</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Shield live applications from syntax anomalies. Provision synchronous testing branches immediately, verifying compatibility before pushing code adjustments live.
            </p>
            <div className="space-y-4">
              {[
                { icon: <Terminal size={18}/>, text: "Full WP-CLI & Secure Shell Terminal Pipelines" },
                { icon: <ShoppingCart size={18}/>, text: "High-Throughput NVMe Configurations for WooCommerce" },
                { icon: <Globe2 size={18}/>, text: "Autonomous Daily/Hourly Backup Restorations" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-200 font-bold">
                  <div className="text-indigo-400">{item.icon}</div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Area */}
      <section className="py-24 border-t border-slate-900 px-6 flex-grow">
        <div className="max-w-6xl mx-auto bg-indigo-600 rounded-[3rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-none">Supercharge Your WordPress Instance Today</h2>
          <button className="bg-white text-indigo-950 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-98 transition-all shadow-xl">
            Get Started
          </button>
          <Globe2 size={400} className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none" />
        </div>
      </section>

      {/* Modal Engine Component */}
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