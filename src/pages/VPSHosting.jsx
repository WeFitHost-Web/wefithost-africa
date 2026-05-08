import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TechnicalCarousel } from '../components/TechnicalCarousel';
import { VPSConfigurator } from '../components/VPSConfigurator';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { Cpu, HardDrive, Terminal, Database, ShieldCheck, Zap, Activity } from 'lucide-react';

const VPSHosting = () => {
  const [cores, setCores] = useState(2);
  const [ram, setRam] = useState(4);
  const [ssd, setSsd] = useState(80);

  const calculatePrice = () => {
    return (5 + (cores - 1) * 4 + (ram - 1) * 2 + (ssd - 20) * 0.1).toFixed(2);
  };

  const vpsTech = [
    { icon: <Cpu size={24} />, title: "Intel Xeon Scalable", description: "Dedicated physical cores running at high-frequency turbo speeds. Zero resource theft." },
    { icon: <HardDrive size={24} />, title: "Enterprise Gen4 NVMe", description: "Sustained read/write speeds exceeding 7,000 MB/s. Databases load instantly." },
    { icon: <Terminal size={24} />, title: "Full Root Control", description: "Absolute software freedom. Install Docker, custom kernels, and bespoke security." },
    { icon: <Database size={24} />, title: "Local IP Spaces", description: "Dedicated clean IP addresses geolocated in Nigeria or Kenya to maximize local SEO." },
    { icon: <Activity size={24} />, title: "Low Latency Networking", description: "Direct peering with local ISPs to ensure sub-20ms response times for African users." }
  ];

  const testimonials = [
    { quote: "Our fintech application required solid sub-20ms database queries. WeFitHost VPS knocked it out of the park.", name: "Tunde O.", role: "CTO, PaySwift Nigeria" },
    { quote: "Switched our heavy multi-tenant ERP platform from AWS to local VPS. Performance doubled, hosting bills halved.", name: "Amara E.", role: "Director of IT, SabiGroup" },
    { quote: "The deployment was instant. Having a local IP in Lagos has significantly boosted our local SEO presence.", name: "Chidi K.", role: "Founder, AfroTech Solutions" },
    { quote: "True root access without restricted kernels. Best environment for our Docker-heavy microservices.", name: "Fatima B.", role: "Senior Dev, CloudScale" }
  ];

  return (
    <div className="bg-[#0b1120] text-slate-100">
      
      {/* SECTION 1: HERO (Navy Blue) */}
      <section className="relative pt-44 pb-32 overflow-hidden flex items-center min-h-[85vh]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">Low Latency Africa</span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-8">
              Raw Iron. <br /> <span className="text-indigo-400 italic">No Limits.</span>
            </h1>
            <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
              Ditch crowded shared environments. Deploy a secure virtual private server in Nigeria or Kenya with dedicated reservations.
            </p>
            <button className="bg-indigo-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-600/30">
              Configure Server
            </button>
          </motion.div>
          
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full" />
            <div className="relative p-10 bg-slate-900 border border-slate-800 rounded-[3rem] shadow-3xl font-mono text-xs">
               <div className="flex gap-2 mb-6"><div className="w-3 h-3 bg-red-500 rounded-full"/><div className="w-3 h-3 bg-yellow-500 rounded-full"/><div className="w-3 h-3 bg-green-500 rounded-full"/></div>
               <p className="text-indigo-400"># wefithost-cli provision vps-node-1</p>
               <p className="text-emerald-400 mt-2">[✓] Allocating dedicated NVMe array...</p>
               <p className="text-emerald-400">[✓] Binding local Lagos IPv4...</p>
               <p className="text-indigo-300 mt-4">[SUCCESS] Server live at 102.164.21.9</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONFIGURATOR (Light Gray/Blue) */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">Build Your Machine</h2>
            <p className="text-slate-500 font-medium">Instantly provision exact resource blocks. Scale up seamlessly.</p>
          </div>
          <VPSConfigurator 
            cores={cores} setCores={setCores} 
            ram={ram} setRam={setRam} 
            ssd={ssd} setSsd={setSsd} 
            calculatePrice={calculatePrice} 
          />
        </div>
        {/* Subtle background decoration for light section */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-50/50 -skew-x-12 transform translate-x-1/4 z-0" />
      </section>

      {/* SECTION 3: CAROUSEL (Navy Blue) */}
      <section className="py-32 bg-[#0b1120]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">Hardware Integrity</h2>
          <p className="text-slate-400 mb-12">Slide to inspect the enterprise-grade stack powering your partition.</p>
          <TechnicalCarousel slides={vpsTech} />
        </div>
      </section>

    
      <TestimonialSlider testimonials={testimonials} />

      {/* SECTION 5: ENTERPRISE CTA (Light Grayish to contrast the dark testimonials) */}
      <section className="py-32 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 p-16 md:p-24 rounded-[4rem] text-center relative overflow-hidden shadow-3xl">
           <ShieldCheck size={200} className="absolute -bottom-20 -right-20 text-white opacity-5" />
           <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Need Custom <br/>Infrastructure?</h2>
           <p className="text-slate-400 max-w-xl mx-auto mb-12 font-medium">Contact our engineers for bare-metal clusters, managed Kubernetes, or specialized VPC networking in Africa.</p>
           <button className="bg-indigo-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20">
             Contact Enterprise Sales
           </button>
        </div>
      </section>
    </div>
  );
};

export default VPSHosting;