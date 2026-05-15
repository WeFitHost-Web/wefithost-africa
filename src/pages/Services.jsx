import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  MousePointer2,
  Share2,
  PenTool,
  MapPin,
  Mail,
  BarChart3,
  Target,
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
  TrendingUp
} from "lucide-react";
import { useCurrency, formatPrice } from "../contexts/CurrencyContext";
import { ServiceCard } from "../components/ServiceCard";
import { SectionHeader } from "../components/SectionHeader";

const Services = () => {
  const { currency } = useCurrency();

  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      desc: "Dominate search results in Lagos, Nairobi, and beyond with our data-driven organic strategies.",
      deliverables: ["Keyword Research", "On-Page SEO", "Technical Audit"],
    },
    {
      icon: MousePointer2,
      title: "PPC Advertising",
      desc: "High-ROI campaigns across Google and Meta, localized for African consumer spending habits.",
      deliverables: ["Ad Creative", "Bid Management", "ROAS Tracking"],
    },
    {
      icon: MapPin,
      title: "Local SEO",
      desc: "Get your physical business found by customers in your immediate vicinity with GMB expertise.",
      deliverables: ["Maps Ranking", "Local Citations", "Review Growth"],
    },
    {
      icon: Share2,
      title: "Social Media",
      desc: "Engage your audience on the platforms they use daily WhatsApp, Instagram, and LinkedIn.",
      deliverables: ["Content Design", "Community Mgmt", "Paid Social"],
    },
    {
      icon: PenTool,
      title: "Content Creation",
      desc: "Storytelling that resonates with African culture while driving business authority.",
      deliverables: ["Blog Writing", "Video Scripts", "Sales Copy"],
    },
    {
      icon: Mail,
      title: "Email Marketing",
      desc: "Automated funnels designed to nurture leads and drive repeat sales in the e-commerce space.",
      deliverables: ["Drip Campaigns", "Segmentation", "Newsletter Mgmt"],
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: 199,
      featured: false,
      items: ["5 Keywords", "Monthly Report", "Basic SEO"],
    },
    {
      name: "Growth",
      price: 499,
      featured: true,
      items: [
        "20 Keywords",
        "PPC Management",
        "Regional Targeting",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      price: 1299,
      featured: false,
      items: [
        "Unlimited Keywords",
        "Custom Strategy",
        "Multi-Country Ads",
        "Dedicated Manager",
      ],
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* 1. HERO SECTION (Navy) */}
      <section className="relative pt-32 pb-24 bg-[#0b1120] text-white overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <Zap size={12} fill="currentColor" /> Marketing Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
              Grow Your Brand <br /> Across{" "}
              <span className="text-indigo-400">Africa.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
              From Lagos startups to Nairobi enterprises, we build the digital
              infrastructure that reaches more customers and drives real
              revenue.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2">
                Start Campaign <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 bg-slate-800 rounded-xl font-bold hover:bg-slate-700 transition-all">
                Our Work
              </button>
            </div>
          </motion.div>

          {/* Right Visual - Hostinger Glassmorphism */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-10 bg-indigo-600/20 blur-[100px] rounded-full" />
            <div className="relative bg-slate-900/50 border border-slate-700 p-8 rounded-[3rem] backdrop-blur-xl">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                    Market Reach
                  </p>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-indigo-500"
                      />
                    ))}
                  </div>
                </div>
                {[
                  {
                    label: "Nigeria Reach",
                    val: "84%",
                    color: "bg-emerald-500",
                  },
                  { label: "Kenya Growth", val: "62%", color: "bg-indigo-500" },
                  { label: "SA Conversion", val: "45%", color: "bg-cyan-500" },
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase">
                      <span>{stat.label}</span>
                      <span>{stat.val}</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: stat.val }}
                        className={`h-full ${stat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID (Light Gray) */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            light
            title="Comprehensive Solutions"
            subtitle="Strategic digital services localized for the African startup ecosystem."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US (Navy) */}
      <section className="py-32 bg-[#0b1120] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">
              Africa-First Marketing Strategy.
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Regional Expertise",
                  desc: "We understand the specific search behaviors of Lagosians vs. Nairobi residents.",
                },
                {
                  title: "Mobile-First Design",
                  desc: "All campaigns are optimized for lower-bandwidth and high mobile-usage regions.",
                },
                {
                  title: "Data-Driven Decisions",
                  desc: "No guesswork. Every campaign is backed by regional market analytics.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Nigeria", "Kenya", "Ghana", "South Africa"].map((country) => (
              <div
                key={country}
                className="p-8 bg-slate-900 border border-slate-800 rounded-[2rem] text-center group hover:border-indigo-500 transition-colors"
              >
                <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2 group-hover:text-indigo-400">
                  Targeting
                </div>
                <div className="text-xl font-bold">{country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESULTS SECTION (Light Gray Stats) */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: "Campaigns Live", val: "1.2k", icon: Target },
            { label: "ROI Average", val: "320%", icon: TrendingUp },
            { label: "Ad Spend Managed", val: "$2M+", icon: BarChart3 },
            { label: "Market Share Growth", val: "+45%", icon: Globe },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-indigo-600 mb-4 flex justify-center">
                <s.icon size={32} />
              </div>
              <div className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">
                {s.val}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PRICING PACKAGES (Navy) */}
      <section className="py-32 bg-[#0b1120] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Service Packages"
            subtitle="Scale your marketing at a pace that suits your business growth."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`p-10 rounded-[3rem] border transition-all ${plan.featured ? "bg-indigo-600 border-indigo-400 scale-105 shadow-2xl" : "bg-slate-900 border-slate-800"}`}
              >
                <h4 className="text-xl font-bold mb-6">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black">
                    {formatPrice(plan.price, currency)}
                  </span>
                  <span
                    className={`text-xs font-bold uppercase ${plan.featured ? "text-indigo-200" : "text-slate-500"}`}
                  >
                    /mo
                  </span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-xs font-medium"
                    >
                      <CheckCircle2
                        size={16}
                        className={
                          plan.featured ? "text-white" : "text-indigo-500"
                        }
                      />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all ${plan.featured ? "bg-white text-indigo-600" : "bg-slate-800 text-white"}`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONSULTATION FORM (Light Gray) */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 bg-white p-12 md:p-20 rounded-[4rem] border border-slate-100 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
              Start Your Strategy.
            </h2>
            <p className="text-slate-500">
              Receive a 15-minute free audit with our specialists.
            </p>
          </div>
          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="text"
              placeholder="Business Name"
              className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <select className="w-full p-4 rounded-2xl bg-slate-50 border-none text-slate-500">
              <option>Service Interested In</option>
              <option>SEO Optimization</option>
              <option>PPC Advertising</option>
            </select>
            <input
              type="text"
              placeholder="Monthly Budget"
              className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <textarea
              placeholder="Tell us about your goals"
              className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500 outline-none md:col-span-2"
              rows={4}
            ></textarea>
            <button className="md:col-span-2 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
              Request Free Consultation
            </button>
          </form>
        </div>
      </section>

      {/* 7. FINAL CTA (Navy) */}
      <section className="py-32 bg-[#0b1120] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/10 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
            Ready to Lead in <br /> your Industry?
          </h2>
          <div className="flex justify-center gap-6">
            <button className="px-10 py-5 bg-indigo-600 rounded-2xl text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-all">
              Start Your Campaign
            </button>
            <button className="px-10 py-5 bg-slate-800 rounded-2xl text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-all">
              Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
