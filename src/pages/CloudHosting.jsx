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
    <div className=" text-slate-100 min-h-screen flex flex-col overflow-x-hidden font-sans">
      
      {/* Cloud Hero Panel */}
      <CloudHero />

      {/* Bento Grid Features (Unified Premium Dark Framework) */}
      <section className="py-32 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-indigo-400 font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">System Resilience</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
              Engineered for Failure Prevention
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-12 bg-slate-900/40 border border-slate-800 rounded-[3.5rem] flex flex-col justify-between group">
              <div>
                <Layers className="text-indigo-400 mb-8" size={40} />
                <h4 className="text-3xl font-black text-white mb-4">Self-Healing Storage</h4>
                <p className="text-slate-400 font-medium leading-relaxed max-w-lg">
                  Should hardware experience physical anomalies, our cluster nodes seamlessly hot-migrate your storage layer to safe machinery automatically with zero downtime.
                </p>
              </div>
            </div>

            <div className="p-12 bg-indigo-600 text-white rounded-[3.5rem] shadow-xl shadow-indigo-600/10">
              <ShieldCheck className="text-indigo-200 mb-8" size={40} />
              <h4 className="text-2xl font-black mb-4 leading-tight">Active Cloud Defense</h4>
              <p className="text-indigo-100 text-sm font-medium leading-relaxed">
                Real-time multi-layered evaluation patterns intercept traffic threat vectors before they disrupt your live enterprise cloud instance runtime.
              </p>
            </div>

            <div className="p-12 bg-slate-900 border border-slate-800 text-white rounded-[3.5rem]">
              <Globe2 className="text-indigo-400 mb-8" size={40} />
              <h4 className="text-2xl font-black mb-4 leading-tight">Edge Cache Layers</h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Fast cache replication channels operating directly across localized regions handle high traffic peaks gracefully with superior uptime records.
              </p>
            </div>

            <div className="md:col-span-2 p-12 bg-slate-900/40 border border-slate-800 rounded-[3.5rem]">
              <BarChart3 className="text-indigo-400 mb-8" size={40} />
              <h4 className="text-3xl font-black text-white mb-4">Autonomous Auto Scaling</h4>
              <p className="text-slate-400 font-medium leading-relaxed">
                Standard across all architectural tiers. Instantly adjust performance capacity dynamically to easily navigate sudden user traffic bursts without restarting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Cloud Matrix Section (Sourced directly from your Product Guide Rules) */}
      <section className="py-24 bg-[#0b1120] border-t border-slate-900 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 text-white tracking-tight">Features</h2>
          <div className="overflow-x-auto rounded-[2rem] border border-slate-800 bg-slate-950/40">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-950/80 border-b border-slate-800">
                <tr>
                  <th className="p-8 text-xs font-black uppercase text-slate-500">Cloud Capacity Metrics</th>
                  <th className="p-8 font-black text-slate-300">Micro</th>
                  <th className="p-8 font-black text-indigo-400">Small</th>
                  <th className="p-8 font-black text-slate-300">Medium / Large</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900">
                {[
                  ["Autonomous Auto Scaling", "Yes", "Yes", "Yes"],
                  ["Platform Availability", "High", "High", "Very High"],
                  ["Backup Schedules", "Daily", "Daily", "Hourly"],
                  ["Traffic Protection Levels", "Standard", "Enhanced", "Advanced"],
                  ["Support Desk Classification", "Standard", "Priority", "Priority"]
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

      {/* Selection Framework Section */}
      <section className="py-32 bg-slate-950 border-t border-slate-900 relative">
        <HostingPathFinder activeTab={activeTab} setActiveTab={setActiveTab} />
      </section>

      {/* Testimonials Block */}
      <div className="bg-[#0b1120] border-t border-slate-900">
        <TestimonialSlider testimonials={testimonials} />
      </div>

      {/* CTA SECTION (Unified Dark Finish) */}
      <section className="py-32  border-t border-slate-900 px-6 flex-grow">
        <div className="max-w-6xl mx-auto bg-slate-950 border border-slate-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 to-transparent opacity-50 pointer-events-none" />
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.85] mb-8 relative z-10">
            Scale Dynamically. <br /> Build Effortlessly.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-12 font-medium relative z-10">
            Provision cloud cluster configurations or high availability nodes immediately. Build your architecture using Micro, Small, or Medium/Large plans to seamlessly back your application scaling demands.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            <button className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20">
              Initiate Deployment
            </button>
            <button className="bg-slate-900/80 backdrop-blur-md text-white border border-slate-800 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-800 transition-all flex items-center gap-2">
              Speak to Architects <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudHosting;