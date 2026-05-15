import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Globe2, Rocket, Heart, 
  ShieldCheck, BarChart3, MapPin, 
  ArrowRight, Target, Lightbulb, 
  Zap, CheckCircle2 
} from 'lucide-react';

const StatCard = ({ val, label, desc }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center"
  >
    <div className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">{val}</div>
    <div className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-3">{label}</div>
    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
  </motion.div>
);

const ValueCard = ({ icon: Icon, title, desc }) => (
  <div className="group p-8 rounded-[2.5rem] bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all">
    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all">
      <Icon size={24} />
    </div>
    <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

const About = () => {
  return (
    <div className="font-sans overflow-x-hidden selection:bg-indigo-500/30">
      
      {/* 1. HERO SECTION (Navy) */}
      <section className="relative pt-32 pb-24 bg-[#0b1120] text-white overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <Users size={12} /> Meet WefitHost Africa
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
              Empowering the <br /> <span className="text-indigo-400">Digital Pulse</span> of Africa.
            </h1>
            <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
              We aren't just a hosting provider. We are the infrastructure behind Africa's next generation of startups, creators, and digital entrepreneurs.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2">
                Our Services <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 bg-slate-800 rounded-xl font-bold hover:bg-slate-700 transition-all">
                Contact Team
              </button>
            </div>
          </motion.div>

          {/* Hero Visual - Hostinger-style Glassmorphism */}
          <div className="relative lg:block hidden">
            <div className="absolute -inset-10 bg-indigo-600/20 blur-[100px] rounded-full" />
            <div className="relative bg-slate-900/40 border border-slate-700 p-10 rounded-[3rem] backdrop-blur-xl shadow-2xl">
              <div className="space-y-6">
                <div className="h-2 w-24 bg-indigo-500 rounded-full" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-slate-800 rounded-lg" />
                  <div className="h-4 w-3/4 bg-slate-800 rounded-lg" />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-slate-800/50 rounded-2xl border border-white/5">
                    <p className="text-[10px] font-black text-slate-500 uppercase">Uptime</p>
                    <p className="text-xl font-bold text-emerald-400">99.9%</p>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-2xl border border-white/5">
                    <p className="text-[10px] font-black text-slate-500 uppercase">Support</p>
                    <p className="text-xl font-bold text-white">24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY STORY (White) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8">Bridging the Continent <br />through Technology.</h2>
            <div className="space-y-6 text-slate-500 leading-relaxed text-lg">
              <p>
                WefitHost Africa was born out of a simple observation: African businesses were underserved by global giants who didn't understand local nuances from payment gateway hurdles to regional latency.
              </p>
              <p>
                We set out to build a platform that speaks "African Business." Whether you're a startup in Yaba, Lagos, or a scaling e-commerce brand in Nairobi, we provide the tools to compete on a global stage without the regional friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION (Navy) */}
      <section className="py-32 bg-[#0b1120] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="p-12 rounded-[3rem] bg-gradient-to-br from-indigo-600 to-indigo-900 border border-indigo-400 shadow-2xl relative overflow-hidden group">
            <Target size={120} className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform" />
            <h3 className="text-3xl font-black mb-6">Our Mission</h3>
            <p className="text-indigo-100 text-lg leading-relaxed">To democratize digital growth across Africa by providing reliable, affordable, and high-performance hosting and marketing infrastructure.</p>
          </div>
          <div className="p-12 rounded-[3rem] bg-slate-900 border border-slate-800 relative overflow-hidden group">
            <Lightbulb size={120} className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform" />
            <h3 className="text-3xl font-black mb-6 text-white">Our Vision</h3>
            <p className="text-slate-400 text-lg leading-relaxed">To become the backbone of the African internet, powering 1 million successful African businesses by 2030.</p>
          </div>
        </div>
      </section>

      {/* 4. STATS (Light Gray) */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard val="5k+" label="Businesses" desc="Scaling their impact with our tools." />
          <StatCard val="12" label="Countries" desc="Active presence across the continent." />
          <StatCard val="99.9%" label="Uptime" desc="Reliability you can stake your brand on." />
          <StatCard val="24/7" label="Support" desc="Engineers who speak your language." />
        </div>
      </section>

      {/* 5. CORE VALUES (Navy) */}
      <section className="py-32 bg-[#0b1120] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black tracking-tighter mb-4">Values that Drive Us.</h2>
            <p className="text-slate-400">The principles behind every line of code and every support ticket.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard icon={Rocket} title="Innovation" desc="We don't follow trends; we build tools that solve unique African market challenges." />
            <ValueCard icon={ShieldCheck} title="Reliability" desc="In a digital world, trust is the only currency. We ensure your business never goes offline." />
            <ValueCard icon={Heart} title="Customer Success" desc="Your growth is our ROI. When African startups win, we win." />
          </div>
        </div>
      </section>

      {/* 6. AFRICA IMPACT (White) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">Continental <br />Ambition.</h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We aren't just serving one city. We are connecting the hubs. From the fintech waves in Lagos to the tech-savviness of Nairobi and the creative energy in Accra.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Nigeria', 'Kenya', 'Ghana', 'South Africa', 'Egypt'].map(country => (
                <span key={country} className="px-4 py-2 bg-slate-100 text-slate-600 text-xs font-black uppercase tracking-widest rounded-full border border-slate-200">
                  {country}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-10 bg-indigo-500/5 blur-[100px] rounded-full" />
             <div className="relative p-8 bg-slate-50 rounded-[3rem] border border-slate-100">
               <div className="space-y-4">
                  {[
                    { hub: "Lagos Tech Hub", growth: "+120%" },
                    { hub: "Nairobi Silicon Savannah", growth: "+85%" },
                    { hub: "Cape Town Innovation", growth: "+40%" }
                  ].map((h, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm">
                      <span className="font-bold text-slate-900">{h.hub}</span>
                      <span className="text-indigo-600 font-black">{h.growth}</span>
                    </div>
                  ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US (Navy/Hostinger style) */}
      <section className="py-32 bg-[#0b1120] text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
               {[Zap, Globe2, ShieldCheck, BarChart3].map((Icon, i) => (
                 <div key={i} className="aspect-square bg-slate-900 rounded-[2rem] border border-slate-800 flex items-center justify-center text-indigo-500 hover:border-indigo-500 transition-all">
                   <Icon size={40} />
                 </div>
               ))}
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-black tracking-tighter mb-6">Built for Scaling.</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">Why do African entrepreneurs choose WefitHost? Because we understand that your digital foundation shouldn't be a hurdle it should be a springboard.</p>
            <ul className="space-y-4">
              {['Localized Payment Support', 'Low-Latency African Edge Nodes', 'Enterprise-Grade Security', 'Human Technical Support'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-200">
                  <CheckCircle2 size={18} className="text-indigo-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA (Bluehost style) */}
      <section className="py-40 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-10 tracking-tighter leading-none">Ready to Build <br /> Something Bigger?</h2>
          <div className="flex flex-wrap justify-center gap-6">
             <button className="px-12 py-6 bg-indigo-600 text-white rounded-2xl text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl">Get Started Now</button>
             <button className="px-12 py-6 bg-slate-100 text-slate-900 rounded-2xl text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all">Join Our Team</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;