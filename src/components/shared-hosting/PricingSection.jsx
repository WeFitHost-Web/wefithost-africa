import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Check, X, Tag, Crown } from 'lucide-react';
import { useCurrency, formatPrice } from '../../contexts/CurrencyContext';

const plans = [
  {
    name: 'Shared Hosting Starter',
    tagline: 'Best for personal websites, portfolios, and blogs',
    monthlyPrice: 3.99,
    features: [
      { text: '1 Website', included: true },
      { text: '10GB SSD Storage', included: true },
      { text: 'Unmetered Bandwidth', included: true },
      { text: 'Free SSL Certificate', included: true },
      { text: '5 Email Accounts', included: true },
      { text: 'Easy Control Panel', included: true },
      { text: 'Free Domain', included: false },
      { text: 'Daily Backups', included: false },
    ],
    popular: false,
    cta: 'Select Plan',
    ctaStyle: 'outline'
  },
  {
    name: 'Shared Hosting Business',
    tagline: 'Best for small businesses and growing websites',
    monthlyPrice: 6.99,
    features: [
      { text: 'Unlimited Websites', included: true },
      { text: '100GB SSD Storage', included: true },
      { text: 'Unmetered Bandwidth', included: true },
      { text: 'Free SSL Certificate', included: true },
      { text: 'Unlimited Email Accounts', included: true },
      { text: 'Easy Control Panel', included: true },
      { text: 'Free Domain (1 year)', included: true },
      { text: 'Daily Backups', included: true },
    ],
    popular: true,
    cta: 'Select Plan',
    ctaStyle: 'solid'
  },
  {
    name: 'Shared Hosting Enterprise',
    tagline: 'Best for high-traffic websites and multiple projects',
    monthlyPrice: 9.99,
    features: [
      { text: 'Unlimited Websites', included: true },
      { text: 'Unlimited SSD Storage', included: true },
      { text: 'Unmetered Bandwidth', included: true },
      { text: 'Free SSL Certificate', included: true },
      { text: 'Unlimited Email Accounts', included: true },
      { text: 'Easy Control Panel', included: true },
      { text: 'Free Domain (1 year)', included: true },
      { text: 'Daily Backups + Staging', included: true },
    ],
    popular: false,
    cta: 'Select Plan',
    ctaStyle: 'outline'
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-indigo-50 text-[#6b63ff] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Tag size={14} /> Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Shared Hosting Plans
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Simple, transparent pricing pick the plan that fits your website.
          </p>
        </div>

        {/* Pricing Cards - Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} index={i} />
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.1}
            centeredSlides={true}
            pagination={{ clickable: true }}
            className="!pb-12"
          >
            {plans.map((plan, i) => (
              <SwiperSlide key={i}>
                <PricingCard plan={plan} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

const PricingCard = ({ plan, index }) => {
  const { currency } = useCurrency();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative bg-white border rounded-xl overflow-hidden transition-all hover:-translate-y-1 shadow-sm ${
        plan.popular 
          ? 'border-[#6b63ff] shadow-lg shadow-indigo-500/10' 
          : 'border-slate-200 hover:border-indigo-500/30'
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-3.5 z-10">
          <span className="bg-[#6b63ff] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-indigo-500/30 flex items-center gap-1">
            <Crown size={12} /> Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="bg-[#6b63ff] p-6 text-center">
        <h3 className="text-white font-bold text-lg">{plan.name}</h3>
        <p className="text-white/80 text-xs mt-1">{plan.tagline}</p>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="text-center mb-6">
          <div className="text-4xl font-black text-slate-900">
            {formatPrice(plan.monthlyPrice, currency)}
            <span className="text-lg text-slate-500 font-normal">/mo</span>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Billed monthly
          </p>
        </div>

        <ul className="space-y-3 mb-6">
          {plan.features.map((feat, i) => (
            <li key={i} className="flex items-center gap-3 text-sm">
              {feat.included ? (
                <Check size={16} className="text-emerald-500 flex-shrink-0" />
              ) : (
                <X size={16} className="text-red-400 flex-shrink-0" />
              )}
              <span className={feat.included ? 'text-slate-700' : 'text-slate-400'}>
                {feat.text}
              </span>
            </li>
          ))}
        </ul>

        <a 
          href="https://my.wefithost.com/order-wordpress-hosting"
          className={`block text-center py-3 rounded-lg font-bold text-sm transition-all ${
            plan.ctaStyle === 'solid'
              ? 'bg-[#6b63ff] text-white hover:bg-[#5a52e0]'
              : 'border-2 border-[#6b63ff] text-[#6b63ff] hover:bg-[#6b63ff] hover:text-white'
          }`}
        >
          {plan.cta}
        </a>
      </div>
    </motion.div>
  );
};

export default PricingSection;