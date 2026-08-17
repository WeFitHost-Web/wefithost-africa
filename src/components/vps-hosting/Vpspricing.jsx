import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { VPSConfigurator } from "../VPSConfigurator";
import { useCurrency, formatPrice } from "../../contexts/CurrencyContext";

const quickPlans = [
  {
    name: "1 Core Managed VPS",
    tagline: "Perfect for beginners launching a first site.",
    priceGBP: 24.0,
    popular: false,
    features: [
      "1 Website",
      "1 Core Processor",
      "1GB DDR4 Memory",
      "25 GB SSD Storage",
      "Unlimited Free SSL",
      "MyWeFitHost Control Panel",
    ],
  },
  {
    name: "2 Core Managed VPS",
    tagline: "More headroom for growing sites.",
    priceGBP: 25.0,
    popular: false,
    features: [
      "Unlimited Websites",
      "2 Core Processor",
      "2GB DDR4 Memory",
      "50 GB SSD Storage",
      "Unlimited Free SSL",
      "Web Application Firewall",
    ],
  },
  {
    name: "3 Core Managed VPS",
    tagline: "Robust features for business sites.",
    priceGBP: 28.0,
    popular: true,
    features: [
      "Unlimited Websites",
      "3 Core Processor",
      "4GB DDR4 Memory",
      "75 GB SSD Storage",
      "1Tbps Anti-DDoS",
      "Priority Support & Security Updates",
    ],
  },
  {
    name: "6 Core Managed VPS",
    tagline: "For demanding, high-performance applications.",
    priceGBP: 72.0,
    popular: false,
    features: [
      "Unlimited Websites",
      "6 Core Processor",
      "16GB DDR4 Memory",
      "200 GB SSD Storage",
      "1Tbps Anti-DDoS",
      "Web Application Firewall",
    ],
  },
];

const VPSPricing = () => {
  const { currency } = useCurrency();
  const [cores, setCores] = useState(2);
  const [ram, setRam] = useState(4);
  const [ssd, setSsd] = useState(80);

  // Calculates base custom machine price in GBP
  const calculatePrice = () => {
    return 5 + (cores - 1) * 4 + (ram - 1) * 2 + (ssd - 20) * 0.1;
  };

  return (
    <section id="pricing" className="py-28 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">
            Build Your Machine
          </h2>
          <p className="text-slate-600 font-medium">
            Instantly adjust your resource layers, or pick a ready-made plan below.
          </p>
        </motion.div>

        <VPSConfigurator
          cores={cores}
          setCores={setCores}
          ram={ram}
          setRam={setRam}
          ssd={ssd}
          setSsd={setSsd}
          calculatePrice={calculatePrice}
          currency={currency}
          formatPrice={formatPrice}
        />

        {/* Quick-start plan carousel */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 tracking-tight text-center lg:text-left">
            Or Choose a Ready-Made Plan
          </h3>

          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-14 !pt-6 [&_.swiper-wrapper]:flex [&_.swiper-slide]:h-auto [&_.swiper-slide]:flex"
          >
            {quickPlans.map((plan, i) => (
              <SwiperSlide key={i} className="!h-auto flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative w-full h-[480px] flex flex-col justify-between rounded-[2rem] p-8 border transition-all ${
                    plan.popular
                      ? "bg-indigo-600 border-indigo-500 shadow-xl shadow-indigo-600/20 text-white"
                      : "bg-white border-slate-200 shadow-sm hover:shadow-md text-slate-900"
                  }`}
                >
                  <div>
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-900 text-indigo-100 border border-indigo-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                        Most Popular
                      </span>
                    )}
                    <h4 className={`font-black text-lg mb-2 ${plan.popular ? "text-white" : "text-slate-900"}`}>
                      {plan.name}
                    </h4>
                    <p className={`text-sm mb-6 min-h-[40px] ${plan.popular ? "text-indigo-100" : "text-slate-500"}`}>
                      {plan.tagline}
                    </p>
                    <div className="mb-6">
                      <span className={`text-4xl font-black ${plan.popular ? "text-white" : "text-slate-900"}`}>
                        {formatPrice(plan.priceGBP, currency)}
                      </span>
                      <span className={`text-sm ml-1 ${plan.popular ? "text-indigo-100" : "text-slate-500"}`}>
                        / month
                      </span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <Check
                            size={16}
                            className={`mt-0.5 flex-shrink-0 ${plan.popular ? "text-white" : "text-indigo-600"}`}
                          />
                          <span className={plan.popular ? "text-indigo-50" : "text-slate-600"}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://my.wefithost.com/order-vps"
                    className={`block text-center px-6 py-3.5 rounded-xl font-black uppercase tracking-widest text-[11px] transition-all mt-auto ${
                      plan.popular
                        ? "bg-white text-indigo-600 hover:bg-indigo-50"
                        : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
                    }`}
                  >
                    Get Started
                  </a>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-50/50 -skew-x-12 transform translate-x-1/4 z-0 pointer-events-none" />
    </section>
  );
};

export default VPSPricing;