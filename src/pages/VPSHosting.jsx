import React, { useState } from "react";
import { motion } from "framer-motion";
import { TechnicalCarousel } from "../components/TechnicalCarousel";
import { VPSConfigurator } from "../components/VPSConfigurator";
import { TestimonialSlider } from "../components/TestimonialSlider";
import {
  Cpu,
  HardDrive,
  Terminal,
  Database,
  ShieldCheck,
  Zap,
  Activity,
} from "lucide-react";

const VPSHosting = () => {
  const [cores, setCores] = useState(2);
  const [ram, setRam] = useState(4);
  const [ssd, setSsd] = useState(80);

  const calculatePrice = () => {
    return 5 + (cores - 1) * 4 + (ram - 1) * 2 + (ssd - 20) * 0.1;
  };

  // Tech features enhanced using specifications from the product matrix
  const vpsTech = [
    {
      icon: <Cpu size={24} />,
      title: "Dedicated Resources",
      description:
        "Guaranteed CPU and RAM allocation standard across all package tiers. Absolute hardware isolation with zero resource leakage.",
    },
    {
      icon: <Terminal size={24} />,
      title: "Full Root Access",
      description:
        "Complete administrative environment control. Install specialized container tools, custom kernels, and microservice stacks.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Security Firewall",
      description:
        "Enterprise-grade network-level firewall shielding standard on all configurations to protect your running code.",
    },
    {
      icon: <HardDrive size={24} />,
      title: "Gen4 NVMe SSD Arrays",
      description:
        "High-density local solid-state storage arrays provisioning ultra-low database latency directly in Nigeria or Kenya.",
    },
    {
      icon: <Activity size={24} />,
      title: "Low Latency Edge Peering",
      description:
        "Direct interconnection agreements with regional African telecom providers minimizing packet transit times for app users.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Our fintech application required solid sub-20ms database queries. WeFitHost VPS knocked it out of the park.",
      name: "Tunde O.",
      role: "CTO, PaySwift Nigeria",
    },
    {
      quote:
        "Switched our heavy multi-tenant ERP platform from AWS to local VPS. Performance doubled, hosting bills halved.",
      name: "Amara E.",
      role: "Director of IT, SabiGroup",
    },
    {
      quote:
        "The deployment was instant. Having a local IP in Lagos has significantly boosted our local SEO presence.",
      name: "Chidi K.",
      role: "Founder, AfroTech Solutions",
    },
    {
      quote:
        "True root access without restricted kernels. Best environment for our Docker-heavy microservices.",
      name: "Fatima B.",
      role: "Senior Dev, CloudScale",
    },
  ];

  return (
    <div className=" text-slate-100 min-h-screen flex flex-col overflow-x-hidden font-sans">
      
      {/* SECTION 1: HERO (Unified Premium Dark) */}
      <section className="relative pt-44 pb-32 overflow-hidden flex items-center min-h-[85vh]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">
              Low Latency Africa
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-8">
              Raw Iron. <br />{" "}
              <span className="text-indigo-400 italic">No Limits.</span>
            </h1>
            <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
              Ditch crowded hosting boundaries. Provision secure virtual private
              servers natively inside Africa with dedicated environments optimized for developer control.
            </p>
            <button className="bg-indigo-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-600/30">
              Configure Server
            </button>
          </motion.div>

          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full" />
            <div className="relative p-10 bg-slate-900 border border-slate-800 rounded-[3rem] shadow-3xl font-mono text-xs">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <p className="text-indigo-400">
                # wefithost-cli provision vps-node-1
              </p>
              <p className="text-emerald-400 mt-2">
                [✓] Allocating dedicated hardware resources...
              </p>
              <p className="text-emerald-400">
                [✓] Activating hardware security firewall...
              </p>
              <p className="text-indigo-300 mt-4">
                [SUCCESS] Entry, Mid, and High VPS node clusters active.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONFIGURATOR (Unified Dark Background) */}
      <section className="py-32 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
              Build Your Machine
            </h2>
            <p className="text-slate-400 font-medium">
              Instantly adjust your resource layers across Entry, Mid, and High VPS configurations.
            </p>
          </div>
          <VPSConfigurator
            cores={cores}
            setCores={setCores}
            ram={ram}
            setRam={setRam}
            ssd={ssd}
            setSsd={setSsd}
            calculatePrice={calculatePrice}
          />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-950/10 -skew-x-12 transform translate-x-1/4 z-0 pointer-events-none" />
      </section>

      {/* SECTION 3: MATRIX COMPARISON TABLE (Integrated Product Guide Specifications) */}
      <section className="py-24 bg-[#0b1120] border-t border-slate-900 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 text-white tracking-tight">VPS Feature Breakdown</h2>
          <div className="overflow-x-auto rounded-[2rem] border border-slate-800 bg-slate-950/40">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-950/80 border-b border-slate-800">
                <tr>
                  <th className="p-8 text-xs font-black uppercase text-slate-500">Feature Set</th>
                  <th className="p-8 font-black text-slate-300">Entry VPS</th>
                  <th className="p-8 font-black text-indigo-400">Mid VPS</th>
                  <th className="p-8 font-black text-slate-300">High VPS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900">
                {[
                  ["Dedicated Resources", "Yes", "Yes", "Yes"],
                  ["Root Access Control", "Yes", "Yes", "Yes"],
                  ["Security Firewall Layer", "Yes", "Yes", "Yes"],
                  ["Backup Architectures", "Optional", "Yes", "Yes"],
                  ["Managed Support Option", "Optional", "Optional", "Included (Yes)"]
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

      {/* SECTION 4: CAROUSEL */}
      <section className="py-32 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
            Hardware Integrity
          </h2>
          <p className="text-slate-400 mb-12">
            Examine the structural building blocks allocated directly to your virtual container partition.
          </p>
          <TechnicalCarousel slides={vpsTech} />
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS (Runs natively in dark background layout) */}
      <div className="bg-[#0b1120] border-t border-slate-900">
         <TestimonialSlider testimonials={testimonials} />
      </div>

      {/* SECTION 6: ENTERPRISE CTA (Unified Dark Architecture) */}
      <section className="py-5 mt-10 px-6 flex-grow">
        <div className="max-w-5xl mx-auto bg-indigo-600 p-16 md:p-20  rounded-[3rem] border border-slate-800 text-center relative overflow-hidden shadow-3xl">
          <ShieldCheck
            size={200}
            className="absolute -bottom-20 -right-20 text-white opacity-[0.02] pointer-events-none"
          />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
            Need Custom <br />
            Infrastructure?
          </h2>
          <p className="text-white max-w-xl mx-auto mb-12 font-medium">
            Contact our systems engineers for large bare-metal clusters, high-concurrency architectures, or dedicated deployment configurations.
          </p>
          <button className="bg-white text-indigo-600 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-indigo-100 transition-all shadow-xl shadow-indigo-600/20">
            Contact Enterprise Sales
          </button>
        </div>
      </section>
    </div>
  );
};

export default VPSHosting;