import React from 'react';
import { motion } from 'framer-motion';
import { useCurrency, formatPrice } from "../contexts/CurrencyContext"
import { DomainHeroSearch } from '../components/DomainHeroSearch';
import { TLDPricingCard } from '../components/TLDPricingCard';
import { BenefitsGrid } from '../components/BenefitsGrid';
import { ComparisonTable } from '../components/ComparisonTable';
import { FAQAccordion } from '../components/FAQAccordion';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { ShieldCheck, Zap, Globe2, MapPin } from 'lucide-react';

const DomainsPage = () => {
  const { currency } = useCurrency();

  
  const tldSuggestions = [
    { name: ".com", priceGBP: 10.99 },
    { name: ".ng", priceGBP: 14.50 },
    { name: ".ai", priceGBP: 65.00 },
    { name: ".tech", priceGBP: 4.20 },
    { name: ".africa", priceGBP: 8.99 }
  ];

const popularTLDs = [
  { 
    tld: ".com", 
    priceGBP: 15.99,     
    renewalGBP: 12.99, 
    desc: "The global gold standard.", 
    featured: true 
  },
  { 
    tld: ".tech", 
    priceGBP: 25.00, 
    renewalGBP: 25.00, 
    desc: "Best for African innovation.", 
    featured: false 
  },
  { 
    tld: ".ng", 
    priceGBP: 14.50, 
    renewalGBP: 14.50, 
    desc: "Nigeria's digital address.", 
    featured: false 
  },
];

const faqs = [
  { 
    q: "How long does domain registration take?", 
    a: "Our registration process is fully automated and instantaneous. As soon as your payment is processed through our local gateways, the domain is secured on the global registry. You will receive a confirmation email immediately, and your DNS management dashboard will be active within seconds so you can begin pointing your domain to your hosting server." 
  },
  { 
    q: "Can I transfer my existing domain to WefitHost Africa?", 
    a: "Yes, we make migrations seamless. Our automated transfer tool is designed to move your domain with zero downtime for your existing website or email services. Once you provide the EPP/Authorization code from your current registrar, our technical team monitors the process to ensure a smooth transition to our high-performance African infrastructure." 
  },
  { 
    q: "Do I get free WHOIS protection?", 
    a: "Absolutely. At WefitHost Africa, we believe privacy is a right, not an upsell. We include enterprise-grade WHOIS privacy protection for free with every eligible domain registration. This masks your personal contact details including your name, email, and phone number from the public database to protect you from identity theft, spam, and unsolicited marketing." 
  }
];

const testimonials = [
    {
      name: "Afolabi Williams",
      role: "CEO, TechNode",
      quote: "WefitHost solved our latency issues for our Lagos-based users instantly.",
    },
    {
      name: "Sarah K.",
      role: "Freelance Dev",
      quote: "Finally, a host that accepts local cards without the international transaction headache.",
    },
    {
      name: "Musa Cheni",
      role: "E-commerce Owner",
      quote: "The WordPress optimization is world-class. My store loads in under 1.5 seconds.",
    },
  ];


  return (
    <div className="bg-[#0b1120] text-slate-100 font-sans overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-[#0b1120]/60 to-[#0b1120] z-0" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Scaled down from 9xl to 7xl */}
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-6">
              Find Your <br />
              <span className="text-indigo-400 italic">Perfect</span> Idea.
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-lg mx-auto leading-relaxed">
              Secure your identity with localized pricing and instant global reach.
            </p>
          </motion.div>

          <DomainHeroSearch suggestions={tldSuggestions} currency={currency} formatPrice={formatPrice} />
        </div>
      </section>

      {/* POPULAR TLD SECTION - Grid width reduced for tighter feel */}
      <section className="py-20 bg-slate-50 relative border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tighter">Most Popular Extensions</h2>
            <p className="text-sm text-slate-500">Global reach with local reliability.</p>
          </div>
          {/* Tighter gap (gap-8 -> gap-6) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTLDs.map((data, i) => (
              <TLDPricingCard key={i} {...data} />
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="py-32 bg-[#0b1120]">
        <div className="max-w-7xl mx-auto px-6">
          <BenefitsGrid />
        </div>
      </section>

      {/* PRICING COMPARISON */}
      <section className="py-32 bg-[#0b1120] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">Enterprise Features</h2>
          <p className="text-slate-400">Standard with every domain you register.</p>
        </div>
        <ComparisonTable />
      </section>

      {/* TESTIMONIALS */}
      <TestimonialSlider testimonials={testimonials} />

      {/* FAQ */}
      <section className="py-32 bg-[#0b1120] border-t border-slate-900 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white tracking-tighter">Your Questions, Answered</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto bg-indigo-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-3xl">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.85] mb-8 relative z-10">
            Secure your domain <br /> before someone else does.
          </h2>
          <DomainHeroSearch suggestions={tldSuggestions.slice(0, 3)} currency={currency} formatPrice={formatPrice} isMinimal={true} />
        </div>
      </section>

    </div>
  );
};

export default DomainsPage;