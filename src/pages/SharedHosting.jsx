import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCurrency } from '../contexts/CurrencyContext';
import { PricingCard } from '../components/PricingCard';
import { ImageCarousel } from '../components/Carousel';
import { 
  Zap, Shield, Globe2, Server, MapPin, CheckCircle2 
} from 'lucide-react';

const SharedHosting = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { currency } = useCurrency();

 const dcSlides = [
  { 
    url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2070", 
    title: "Lagos Datacenter", 
    description: "Strategically located to leverage MainOne and Glo-1 subsea cables for maximum West African speed." 
  },
  { 
    url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000", 
    title: "Nairobi Node", 
    description: "A high-density connectivity hub serving the East African community with enterprise-grade reliability." 
  },
  { 
    url: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=2000", 
    title: "Joburg Hub", 
    description: "Our Tier-IV certified facility in South Africa designed for mission-critical hosting and disaster recovery." 
  }
];
  // Modified Pricing to be UNIFORM DARK
  const pricingPlans = [
    { plan: "Starter", basePricePounds: isYearly ? 1.20 : 1.50, features: ["1 Website", "10GB NVMe SSD", "Unlimited Traffic", "Free SSL", "5 Emails"], isFeatured: false },
    { plan: "Professional", basePricePounds: isYearly ? 2.80 : 3.50, features: ["Unlimited Websites", "50GB NVMe SSD", "Free .AFRICA Domain", "LiteSpeed", "Daily Backups"], isFeatured: false }, // Removed featured highlight for color uniformity
    { plan: "Business", basePricePounds: isYearly ? 5.60 : 7.00, features: ["Unlimited Everything", "100GB NVMe SSD", "Free .COM Domain", "Dedicated IP", "VIP Support"], isFeatured: false }
  ];

  return (
    <div className="font-sans bg-white text-slate-700">
      
      {/* Hero Section with Background Image & Translucent Blur */}
      <section className="relative pt-40 pb-32 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-fixed bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')` }}
        />
        {/* Translucent Blur Overlay */}
        <div className="absolute inset-0 z-10 bg-[#0b1120]/60 backdrop-blur-sm" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-20 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
              Fast. Local. <br />
              <span className="text-indigo-400">Reliable.</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 max-w-lg leading-relaxed font-medium">
              The #1 Choice for affordable web hosting in Africa. Deploy your vision on NVMe SSD servers located right in your backyard.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/20">
                Get Started
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-all">
                View All Plans
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section: UNIFORM DARK CARDS */}
      <section className="py-32 bg-[#0b1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Pricing That Makes Sense</h2>
            <div className="mt-8 inline-flex bg-slate-800/50 p-1 rounded-2xl border border-slate-700">
              <button onClick={() => setIsYearly(false)} className={`px-8 py-2 rounded-xl text-sm font-bold transition-all ${!isYearly ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}>Monthly</button>
              <button onClick={() => setIsYearly(true)} className={`px-8 py-2 rounded-xl text-sm font-bold transition-all ${isYearly ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}>Yearly (-20%)</button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <PricingCard key={i} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure & Carousel Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-indigo-600 font-black uppercase tracking-widest text-xs mb-4 block">Our Infrastructure</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1]">
                African Edge Nodes <br />
                <span className="text-indigo-600 italic">For Local Speed.</span>
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Stop routing your traffic through Europe. We utilize local data centers to give you 
                the best cheap hosting in Nigeria and Kenya with 99.9% uptime.
              </p>
              <ul className="space-y-4 mb-10">
                {['Direct peering with local ISPs', 'NVMe SSD storage as standard', 'Free .com / .africa domains'].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-700">
                    <CheckCircle2 size={20} className="text-indigo-500" /> {text}
                  </li>
                ))}
              </ul>
            </div>
            {/* The Carousel */}
            <ImageCarousel slides={dcSlides} />
          </div>
        </div>
      </section>

      {/* Comparison Table (Light/Modern) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 text-slate-900">Compare Plans</h2>
          <div className="overflow-x-auto rounded-[2.5rem] border border-slate-200">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-8 text-xs font-black uppercase text-slate-400">Feature</th>
                  <th className="p-8 font-black">Starter</th>
                  <th className="p-8 font-black text-indigo-600">Professional</th>
                  <th className="p-8 font-black">Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Storage", "10GB NVMe", "50GB NVMe", "100GB NVMe"],
                  ["One-Click WP", "Included", "Included", "Included"],
                  ["Free Domain", "-", "Yes", "Yes"],
                  ["Support", "Standard", "Priority", "VIP 24/7"]
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-8 font-bold text-slate-900">{row[0]}</td>
                    <td className="p-8 text-slate-500">{row[1]}</td>
                    <td className="p-8 text-slate-500">{row[2]}</td>
                    <td className="p-8 text-slate-500">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-indigo-600 rounded-[4rem] p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to grow?</h2>
            <button className="bg-white text-indigo-600 px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all">Order Now</button>
          </div>
          <Globe2 size={500} className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none" />
        </div>
      </section>
    </div>
  );
};

export default SharedHosting;