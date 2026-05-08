import React, { useState } from 'react';
import { CloudHero } from '../components/CloudHero';
import { CloudComparison } from '../components/CloudComparison';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { Layers, ShieldCheck, Globe2, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { HostingPathFinder } from '../components/HostingPathFinder';
const CloudHosting = () => {
  const [activeTab, setActiveTab] = useState('cloud');

  const testimonials = [
    { quote: "Scaling up before Black Friday took us 10 seconds. Absolute game-changer for our e-commerce traffic.", name: "Kemi A.", role: "CTO, Zando Kenya" },
    { quote: "Migrated our analytics to the Lagos cloud hub. Data retrieval speeds went from seconds to milliseconds.", name: "Obinna N.", role: "Engineering Lead" },
    { quote: "WeFitHost managed our migration flawlessly. The high-availability clusters have eliminated our previous downtime issues.", name: "Sarah J.", role: "Ops Manager, FintechX" }
  ];

  return (
    <div className="bg-white">
      <CloudHero />

      {/* Bento Grid Features */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">System Resilience</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">Engineered for Failure Prevention</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-12 bg-slate-50 border border-slate-100 rounded-[3.5rem] flex flex-col justify-between group">
              <div>
                <Layers className="text-indigo-600 mb-8" size={40} />
                <h4 className="text-3xl font-black text-slate-900 mb-4">Self-Healing Storage</h4>
                <p className="text-slate-500 font-medium leading-relaxed max-w-lg">
                  Should hardware experience physical errors, our nodes seamlessly hot-migrate your storage layer to safe machinery automatically.
                </p>
              </div>
            </div>

            <div className="p-12 bg-indigo-600 text-white rounded-[3.5rem] shadow-xl shadow-indigo-600/20">
              <ShieldCheck className="text-indigo-200 mb-8" size={40} />
              <h4 className="text-2xl font-black mb-4 leading-tight">Active Cloud Defense</h4>
              <p className="text-indigo-100 text-sm font-medium leading-relaxed">
                Real-time network evaluation intercepts threat clusters before they touch live processes.
              </p>
            </div>

            <div className="p-12 bg-slate-900 text-white rounded-[3.5rem]">
              <Globe2 className="text-indigo-400 mb-8" size={40} />
              <h4 className="text-2xl font-black mb-4 leading-tight">Edge Cache Layers</h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Fast cache replication from Lagos to Nairobi handles regional traffic spikes smoothly.
              </p>
            </div>

            <div className="md:col-span-2 p-12 bg-slate-50 border border-slate-100 rounded-[3.5rem]">
              <BarChart3 className="text-indigo-600 mb-8" size={40} />
              <h4 className="text-3xl font-black text-slate-900 mb-4">Dynamic Scaling</h4>
              <p className="text-slate-500 font-medium leading-relaxed">
                No restarts required. Add resources dynamically on active nodes without scheduling operational downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* The "Foundation" Selection Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-200/50">
        <HostingPathFinder activeTab={activeTab} setActiveTab={setActiveTab} />
      </section>

      {/* Your Testimonial Slider */}
      <TestimonialSlider testimonials={testimonials} />

      {/* CTA SECTION */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-6xl mx-auto bg-indigo-600 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.85] mb-8 relative z-10">
            Scale Dynamically. <br /> Build Effortlessly.
          </h2>
          <p className="text-indigo-100 max-w-xl mx-auto mb-12 font-medium relative z-10">
            Provision modern cluster pools or high availability nodes instantly. Our architects are ready to map your migration path.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            <button className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all">
              Initiate Deployment
            </button>
            <button className="bg-indigo-900/30 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-indigo-900/50 transition-all flex items-center gap-2">
              Speak to Architects <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudHosting;