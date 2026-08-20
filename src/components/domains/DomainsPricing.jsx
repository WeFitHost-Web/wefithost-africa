import React from "react";
import { motion } from "framer-motion";
import { useCurrency, formatPrice } from "../../contexts/CurrencyContext";

const popularDomains = [
  { tld: ".com", price: 14.99, badge: "Best Value" },
  { tld: ".co.uk", price: 7.99 },
  { tld: ".uk", price: 6.99 },
  { tld: ".net", price: 15.99 },
  { tld: ".org", price: 12.99 },
];

const specialistDomains = [
  { tld: ".dev", price: 16.99, badge: "Trending" },
  { tld: ".app", price: 19.99 },
  { tld: ".tech", price: 24.99 },
  { tld: ".blog", price: 18.99 },
  { tld: ".store", price: 22.99 },
  { tld: ".online", price: 20.99 },
];

const DomainCard = ({ title, domains, delay, currency }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm h-full"
  >
    <div className="px-5 sm:px-8 py-5 sm:py-6 border-b border-slate-100">
      <h3 className="text-slate-900 font-black text-lg sm:text-xl">{title}</h3>
    </div>
    <div>
      {domains.map((d, i) => (
        <div
          key={i}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 px-5 sm:px-8 py-4 sm:py-5 border-b border-slate-100 last:border-b-0"
        >
          {/* Left Column: TLD + Badge */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-slate-900 font-bold text-base sm:text-lg min-w-[50px]">
              {d.tld}
            </span>
            {d.badge && (
              <span className="bg-indigo-50 text-indigo-600 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap border border-indigo-100/50">
                {d.badge}
              </span>
            )}
          </div>

          {/* Right Column: Price + Action Button */}
          <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 w-full sm:w-auto">
            <span className="text-indigo-600 font-bold text-sm sm:text-base whitespace-nowrap">
              {formatPrice(d.price, currency)}/yr
            </span>
            <a
              href={`https://my.wefithost.com/domain-search?domain=${encodeURIComponent(
                d.tld
              )}`}
              className="bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-indigo-500 transition-colors whitespace-nowrap"
            >
              Register
            </a>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const DomainsPricing = () => {
  const { currency } = useCurrency();

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">
            Domain Pricing Made Simple
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">
            Register popular domain extensions with transparent yearly pricing and
            simple management from your WeFitHost account.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <DomainCard
            title="Popular Domains"
            domains={popularDomains}
            delay={0}
            currency={currency}
          />
          <DomainCard
            title="Specialist Domains"
            domains={specialistDomains}
            delay={0.1}
            currency={currency}
          />
        </div>
      </div>
    </section>
  );
};

export default DomainsPricing;