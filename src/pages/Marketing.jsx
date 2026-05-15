import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Search, MousePointer2, Share2, 
  Mail, BarChart3, MapPin, CheckCircle2, 
  ArrowRight, Globe, Users, Rocket 
} from 'lucide-react';
import { useCurrency, formatPrice } from '../contexts/CurrencyContext';

// Reusable Service Card Component
const ServiceCard = ({ icon: Icon, title, desc, features }) => (
  <div className="group p-8 rounded-[2rem] bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all hover:-translate-y-2">
    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-6">{desc}</p>
    <ul className="space-y-3">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
          <CheckCircle2 size={14} className="text-indigo-500" /> {f}
        </li>
      ))}
    </ul>
  </div>
);

const Marketing = () => {
  const { currency } = useCurrency();

  const pricingPlans = [
    { name: "Starter", price: 150, features: ["Local SEO (1 City)", "5 Keywords", "Monthly Report"] },
    { name: "Growth", price: 450, features: ["Regional SEO (3 Countries)", "25 Keywords", "PPC Management", "Content Strategy"], popular: true },
    { name: "Enterprise", price: 1200, features: ["Pan-African Reach", "Unlimited Keywords", "Dedicated Account Manager", "Custom API Access"] }
  ];

  return (
    <div className="bg-[#0b1120] text-slate-100 selection:bg-indigo-500/30">
      
      {/* HERO SECTION - Bluehost Structure x Hostinger UI */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent z-0" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <Rocket size={12} /> Scale Across Africa
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-6">
              Dominating the <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">African Market</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
              We help African startups and enterprises bridge the visibility gap. From Lagos to Nairobi, we optimize your digital presence for the mobile-first continent.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2">
                Get a Free Audit <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all">
                View Case Studies
              </button>
            </div>
            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-slate-800 flex items-center gap-8 opacity-50 grayscale">
              <span className="font-black italic text-xl">LAGOS.TECH</span>
              <span className="font-black italic text-xl">NAI-HUB</span>
              <span className="font-black italic text-xl">ZAR-CORP</span>
            </div>
          </motion.div>

          {/* Visual Side - Dashboard Mockup */}
          <div className="relative">
            <div className="absolute -inset-10 bg-indigo-500/20 blur-[120px] rounded-full z-0" />
            <div className="relative bg-slate-900/80 border border-slate-700 p-2 rounded-[2.5rem] backdrop-blur-xl shadow-2xl">
              <div className="bg-[#0b1120] rounded-[2rem] p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="space-y-1">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Organic Traffic</p>
                    <p className="text-2xl font-black text-white">+240% Growth</p>
                  </div>
                  <BarChart3 className="text-indigo-500" />
                </div>
                <div className="h-48 flex items-end gap-2">
                  {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ height: 0 }} 
                      animate={{ height: `${h}%` }} 
                      transition={{ delay: i * 0.1 }}
                      className="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-sm"
                    />
                  ))}
                </div>
                {/* Floating Metrics */}
                <div className="absolute -right-6 top-1/4 p-4 bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md rounded-2xl">
                  <p className="text-[8px] text-emerald-500 font-black uppercase">Top Rank</p>
                  <p className="text-xs text-white font-bold italic">"Best VPS Nigeria"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* STATS SECTION - Hostinger-inspired Stat Cards */}
      <section className="py-20 border-y border-slate-900 bg-[#0b1120]/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Business Scaled", val: "500+", icon: Users },
            { label: "Traffic Generated", val: "12M+", icon: TrendingUp },
            { label: "Countries Reached", val: "15+", icon: Globe },
            { label: "Average ROI", val: "3.5x", icon: BarChart3 },
          ].map((stat, i) => (
            <div key={i} className="text-center group p-6 rounded-3xl hover:bg-slate-800/30 transition-all">
              <div className="w-10 h-10 mx-auto bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                <stat.icon size={20} />
              </div>
              <h4 className="text-3xl font-black text-white mb-1">{stat.val}</h4>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID - Hostinger-style Cards */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">Full-Stack Digital Growth</h2>
          <p className="text-slate-400 max-w-2xl mx-auto italic">Tailored strategies for the unique digital landscape of the African continent.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={Search} 
            title="Localized SEO" 
            desc="Rank #1 in Lagos, Nairobi, or Accra. We optimize for local search intent and regional trends."
            features={["GMB Optimization", "Regional Keyword Research", "Backlink Building"]}
          />
          <ServiceCard 
            icon={MousePointer2} 
            title="Performance PPC" 
            desc="High-conversion Google & Meta ads optimized for African mobile users and data constraints."
            features={["Ad Copywriting", "A/B Testing", "Conversion Tracking"]}
          />
          <ServiceCard 
            icon={Share2} 
            title="Social Growth" 
            desc="Build a community on platforms that matter most to your audience (WhatsApp, IG, LinkedIn)."
            features={["Content Calendar", "Engagement Strategy", "Influencer Outreach"]}
          />
        </div>
      </section>

      {/* AFRICA MARKET SECTION - Localization Focus */}
      <section className="py-32 bg-slate-900/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-cyan-500 blur-2xl opacity-20" />
            <div className="relative bg-slate-950 p-8 rounded-[3rem] border border-slate-800">
               {/* Regional Badges UI */}
               <div className="grid grid-cols-2 gap-4">
                 {['Nigeria SEO', 'Kenya Ads', 'Ghana Strategy', 'SA Branding'].map((region) => (
                   <div key={region} className="flex items-center gap-3 p-4 bg-slate-900 rounded-2xl border border-white/5">
                     <MapPin size={16} className="text-indigo-500" />
                     <span className="text-xs font-bold text-slate-300">{region}</span>
                   </div>
                 ))}
               </div>
               <div className="mt-8 p-6 bg-indigo-600/10 rounded-2xl border border-indigo-500/20">
                  <p className="text-sm text-indigo-300 font-medium italic">"Understanding local nuances like network speeds in Nairobi or mobile payment habits in Lagos is what sets our marketing apart."</p>
               </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-black text-white mb-6 tracking-tighter">Mobile-First, <br />Africa-Focused.</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              The African market doesn't browse like the West. With 70% of traffic coming from mobile devices and varying internet stability, we build lightweight, high-impact campaigns that load instantly and convert fast.
            </p>
            <ul className="space-y-4 mb-10">
              {['Cross-country Campaign Management', 'Localized Search Trend Analysis', 'Mobile-Optimized Landing Pages'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING SECTION - Hostinger Influence */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white tracking-tighter">Transparent Growth Plans</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <div key={i} className={`p-10 rounded-[2.5rem] flex flex-col border ${plan.popular ? 'bg-indigo-600 border-indigo-400 shadow-2xl shadow-indigo-500/20 scale-105' : 'bg-slate-900 border-slate-800'}`}>
              <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black">{formatPrice(plan.price, currency)}</span>
                <span className={`text-xs font-bold uppercase ${plan.popular ? 'text-indigo-200' : 'text-slate-500'}`}>/mo</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs font-medium">
                    <CheckCircle2 size={14} className={plan.popular ? 'text-white' : 'text-indigo-500'} /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${plan.popular ? 'bg-white text-indigo-600 hover:bg-slate-100' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CONSULTATION FORM - Bluehost style Conversion Block */}
      <section className="py-32 bg-white rounded-[4rem] mx-6 mb-32 overflow-hidden shadow-3xl">
        <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-none">Ready to scale <br />your revenue?</h2>
            <p className="text-slate-500 mb-10 text-lg">Book a 15-minute strategy call with our African marketing specialists.</p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900"><Mail size={20}/></div>
                <div><p className="text-xs text-slate-400 font-bold uppercase">Email Us</p><p className="font-bold text-slate-900">marketing@wefithost.africa</p></div>
              </div>
            </div>
          </div>
          <form className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-200 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900" />
              <input type="text" placeholder="Business Name" className="w-full px-6 py-4 rounded-2xl border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900" />
            </div>
            <select className="w-full px-6 py-4 rounded-2xl border-slate-200 outline-none text-slate-500">
              <option>Select Service</option>
              <option>SEO Optimization</option>
              <option>PPC Management</option>
            </select>
            <textarea placeholder="Your Message" rows={4} className="w-full px-6 py-4 rounded-2xl border-slate-200 outline-none text-slate-900" />
            <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-700 transition-all">
              Send Request
            </button>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600 z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-1" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">The Future of <br />African Digital.</h2>
          <button className="px-12 py-6 bg-white text-indigo-600 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl">
            Start Your Journey Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default Marketing;