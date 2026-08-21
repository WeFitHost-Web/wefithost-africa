import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { motion } from 'framer-motion';
import { 
  Mail, MessageSquare, Phone, Globe2, 
  Zap, LifeBuoy, CreditCard, Users, 
  ArrowRight, ShieldCheck, Clock, MapPin,
  CheckCircle2
} from 'lucide-react';
import CoverageSection from '../components/CoverageSection';

const SupportCard = ({ icon: Icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all"
  >
    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed mb-6">{desc}</p>
    <button className="text-xs font-black uppercase tracking-widest text-indigo-600 flex items-center gap-2 hover:gap-3 transition-all">
      Contact Now <ArrowRight size={14} />
    </button>
  </motion.div>
);

const ContactMethod = ({ icon: Icon, title, detail, availability }) => (
  <div className="flex gap-5 p-6 rounded-3xl bg-slate-900/50 border border-slate-800">
    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-white font-bold mb-1">{title}</h4>
      <p className="text-sm text-slate-300 font-mono mb-2">{detail}</p>
      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-black uppercase tracking-widest">
        <Clock size={10} /> {availability}
      </div>
    </div>
  </div>
);

const Contact = () => {
  useSEO({
    title: 'Contact Wefithost Africa | 24/7 Support for Web Hosting & Domains',
    description: 'Contact Wefithost Africa for 24/7 hosting support, sales inquiries, and technical assistance. Reach us via email, WhatsApp, or our help center across Africa.',
    canonical: 'https://africa.wefithost.com/contact'
  });

  return (
    <div className="font-sans selection:bg-indigo-500/30">
      
      {/* 1. HERO SECTION (Navy) */}
      <section className="relative pt-32 pb-20 bg-[#0b1120] text-white overflow-hidden flex items-center min-h-[60vh]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-500/15 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10 items-center w-full">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <Zap size={12} fill="currentColor" /> Typical reply: 24 Hours
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
              Support Built <br /> for <span className="text-indigo-400">Africa.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-md mb-10 leading-relaxed">
              Have questions about scaling your business? Our team is on standby from Lagos to Nairobi to help you grow.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-700 transition-all">
                Send a Message
              </button>
              <button className="px-8 py-4 bg-slate-800 rounded-xl font-bold hover:bg-slate-700 transition-all">
                View Help Center
              </button>
            </div>
          </motion.div>

          {/* Hero Visual - Dashboard Mockup */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-10 bg-indigo-500/10 blur-[120px] rounded-full" />
            <div className="relative bg-slate-900/40 border border-slate-700 p-8 rounded-[3rem] backdrop-blur-xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400"><CheckCircle2 size={20}/></div>
                  <div><p className="text-[10px] text-slate-500 font-bold uppercase">System Status</p><p className="text-sm font-bold">All Services Operational</p></div>
                </div>
                <div className="p-6 bg-indigo-600/10 rounded-2xl border border-indigo-500/20">
                   <div className="flex justify-between text-[10px] font-black uppercase text-indigo-400 mb-2"><span>Response Speed</span><span>98%</span></div>
                   <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full w-[98%] bg-indigo-500" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUPPORT CATEGORIES (Light Gray) */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">How can we help?</h2>
            <p className="text-slate-500">Select a category to get connected with the right specialist.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SupportCard icon={LifeBuoy} title="Technical Support" desc="Assistance with server configurations, DNS issues, or hosting technicalities." />
            <SupportCard icon={Users} title="Sales Inquiry" desc="Looking for a custom plan? Let's discuss a package tailored for your startup." />
            <SupportCard icon={CreditCard} title="Billing Support" desc="Help with regional payment gateways, invoices, or subscription cycles." />
            <SupportCard icon={Globe2} title="Enterprise Support" desc="Dedicated high-priority support for large-scale African corporations." />
            <SupportCard icon={MessageSquare} title="Partnerships" desc="Collaborate with WefitHost to grow the African tech ecosystem." />
            <SupportCard icon={ShieldCheck} title="Abuse & Security" desc="Report suspicious activity or security vulnerabilities on our network." />
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM (White/Split Layout) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">Send us a <br />detailed message.</h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              Our specialists typically respond within 24 hours. Please provide as much detail as possible to help us resolve your query faster.
            </p>
            <div className="space-y-4">
               {['24/7 Monitoring', 'Regional Business Insights', 'Fast Technical Resolution'].map((t, i) => (
                 <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                   <CheckCircle2 size={18} className="text-indigo-600" /> {t}
                 </div>
               ))}
            </div>
          </div>
          
          <form className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-200 shadow-2xl shadow-slate-200/50 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900" />
              <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900" />
            </div>
            <select className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 text-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none">
              <option>Select Service</option>
              <option>Web Hosting</option>
              <option>Digital Marketing</option>
              <option>Domain Registration</option>
            </select>
            <textarea placeholder="How can we help you?" rows={5} className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900" />
            <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* 4. ALTERNATIVE METHODS (Navy) */}
      <section className="py-32 bg-[#0b1120] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
           <ContactMethod title="Email Support" detail="support@wefithost.africa" availability="24/7 Monitoring" icon={Mail} />
           <ContactMethod title="WhatsApp Business" detail="+234 (0) 800-WEFIT" availability="Mon-Fri, 9am-6pm" icon={MessageSquare} />
           <ContactMethod title="Help Center" detail="docs.wefithost.africa" availability="Instant Self-Service" icon={LifeBuoy} />
        </div>
      </section>

     <section><CoverageSection /></section>
      {/* 6. FINAL CTA (Navy) */}
      <section className="py-32 bg-[#0b1120] text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-10 leading-none">Need Help? <br />Let's Talk.</h2>
          <div className="flex justify-center gap-4">
             <button className="px-10 py-5 bg-indigo-600 rounded-2xl text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-all">Contact Support</button>
             <button className="px-10 py-5 bg-slate-800 rounded-2xl  text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-all">Explore Services</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;