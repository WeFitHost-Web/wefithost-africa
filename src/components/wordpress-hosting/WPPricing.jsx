import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Tag } from 'lucide-react';
import { useCurrency, formatPrice } from '../../contexts/CurrencyContext';

const plans = [
  {
    name: 'WordPress Starter',
    tagline: 'For personal sites and blogs',
    monthlyPrice: 2.25,
    popular: false,
    features: [
      '1 website',
      '10 GB SSD Storage',
      '50 GB Bandwidth',
      '10 Professional Email Accounts (10 GB each)',
      '1 GB MySQL Database Storage',
      'WordPress Optimized Performance',
      'Free SSL Certificates',
      'Daily Backups',
      '24/7 Priority Support',
      'Advanced Security'
    ],
    cta: 'Get Started',
    ctaStyle: 'outline',
    orderUrl: 'https://my.wefithost.com/domain-required?p=172004-2-lhr&t=1'
  },
  {
    name: 'WordPress Launch',
    tagline: 'For small businesses',
    monthlyPrice: 3.89,
    popular: false,
    features: [
      '2 Websites',
      '10 GB SSD Storage',
      '100 GB Bandwidth',
      '20 Professional Email Accounts (10 GB each)',
      '2 GB MySQL Database Storage',
      'WordPress Optimized Performance',
      'Free SSL Certificates',
      'Daily Backups',
      '24/7 Priority Support',
      'Advanced Security'
    ],
    cta: 'Get Started',
    ctaStyle: 'outline',
    orderUrl: 'https://my.wefithost.com/domain-required?p=223992-100-lhr&t=1'
  },
  {
    name: 'WordPress Growth',
    tagline: 'For growing businesses',
    monthlyPrice: 6.89,
    popular: true,
    features: [
      '5 Websites',
      '20 GB SSD Storage',
      '200 GB Bandwidth',
      '20 Professional Email Accounts (10 GB each)',
      '5 GB MySQL Database Storage',
      'WordPress Optimized Performance',
      'Free SSL Certificates',
      'Daily Backups',
      '24/7 Priority Support',
      'Advanced Security'
    ],
    cta: 'Get Started',
    ctaStyle: 'solid',
    orderUrl: 'https://my.wefithost.com/domain-required?p=223992-2-lhr&t=1'
  },
  {
    name: 'WordPress Business',
    tagline: 'For high-traffic sites',
    monthlyPrice: 11.99,
    popular: false,
    features: [
      '10 Websites',
      '40 GB SSD Storage',
      '300 GB Bandwidth',
      '50 Professional Email Accounts (10 GB each)',
      '15 GB MySQL Database Storage',
      'WordPress Optimized Performance',
      'Free SSL Certificates',
      'Daily Backups',
      '24/7 Priority Support',
      'Advanced Security'
    ],
    cta: 'Get Started',
    ctaStyle: 'outline',
    orderUrl: 'https://my.wefithost.com/domain-required?p=277091-5-lhr&t=1'
  }
];

const WPPricing = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-indigo-500/10 text-[#6b63ff] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Tag size={14} /> Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            No hidden fees. Cancel anytime. Choose the plan that fits your WordPress journey.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} index={i} />
          ))}
        </div>

        {/* Tablet Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} index={i} />
          ))}
        </div>

        {/* Mobile: Stacked */}
        <div className="md:hidden space-y-6">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} index={i} />
          ))}
        </div>

        <p className="text-center text-slate-700 text-lg mt-10">
          Need custom solutions?{' '}
          <a href="https://wefithost.com/contact-us" className="text-[#6b63ff] font-semibold hover:underline">Contact our sales team</a>
        </p>

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
      transition={{ delay: index * 0.08 }}
      className={`relative bg-white border rounded-2xl overflow-hidden transition-all hover:-translate-y-1 flex flex-col h-full ${
        plan.popular 
          ? 'border-[#6b63ff] shadow-lg shadow-indigo-500/10 ring-1 ring-[#6b63ff]/20' 
          : 'border-slate-200 hover:border-indigo-300 hover:shadow-lg'
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 left-0 right-0 bg-[#6b63ff] text-white text-center text-xs font-bold py-1.5 uppercase tracking-wider z-10">
          <Crown size={12} className="inline mr-1" /> Most Popular
        </div>
      )}

      {/* Added flex-col, h-full, and justify-between to keep CTAs aligned */}
      <div className={`p-6 flex flex-col justify-between flex-1 ${plan.popular ? 'pt-10' : ''}`}>
        <div>
          <h3 className="text-slate-900 font-bold text-lg">{plan.name}</h3>
          <p className="text-slate-500 text-sm mt-1">{plan.tagline}</p>

          <div className="mt-5 mb-6">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-slate-900">
                {formatPrice(plan.monthlyPrice, currency)}
              </span>
              <span className="text-slate-400 text-sm font-medium">/mo</span>
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            {plan.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                <Check size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        <a 
          href={plan.orderUrl}
          className={`block text-center py-3 rounded-xl font-bold text-sm transition-all mt-auto ${
            plan.ctaStyle === 'solid'
              ? 'bg-[#6b63ff] text-white hover:bg-[#5a52e0] shadow-md shadow-indigo-500/20'
              : 'border-2 border-[#6b63ff] text-[#6b63ff] hover:bg-[#6b63ff] hover:text-white'
          }`}
        >
          {plan.cta}
        </a>
      </div>
    </motion.div>
  );
};
export default WPPricing;