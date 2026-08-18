import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import CloudConfigurator from "./CloudConfigurator";
import { useCurrency, formatPrice } from "../../contexts/CurrencyContext";

const quickPlans = [
  {
    name: "Micro",
    monthlyPrice: 9.7,
    popular: false,
    specs: ["1 vCPU Core", "1GB DDR4 Memory", "25GB SSD Storage", "1000GB Bandwidth"],
  },
  {
    name: "Small",
    monthlyPrice: 19.4,
    popular: false,
    specs: ["1 vCPU Core", "2GB DDR4 Memory", "50GB SSD Storage", "2000GB Bandwidth"],
  },
  {
    name: "Medium",
    monthlyPrice: 38.8,
    popular: true,
    specs: ["2 vCPU Cores", "4GB DDR4 Memory", "80GB SSD Storage", "4000GB Bandwidth"],
  },
  {
    name: "Large",
    monthlyPrice: 77.62,
    popular: false,
    specs: ["4 vCPU Cores", "8GB DDR4 Memory", "160GB SSD Storage", "5000GB Bandwidth"],
  },
  {
    name: "X Large",
    monthlyPrice: 116.44,
    popular: false,
    specs: ["8 vCPU Cores", "16GB DDR4 Memory", "320GB SSD Storage", "10000GB Bandwidth"],
  },
];

const CloudPricing = () => {
  const [cores, setCores] = useState(2);
  const [ram, setRam] = useState(4);
  const [ssd, setSsd] = useState(80);
  const { currency } = useCurrency();

  const calculatePrice = () => {
    return 8 + (cores - 1) * 4.5 + (ram - 1) * 2.5 + (ssd - 20) * 0.12;
  };

  return (
    <section id="pricing" className="py-28 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
            Configure Your Cloud Instance
          </h2>
          <p className="text-slate-400 font-medium">
            Adjust CPU, RAM, and storage live, or pick a ready-made tier below.
          </p>
        </motion.div>

        <CloudConfigurator
          cores={cores}
          setCores={setCores}
          ram={ram}
          setRam={setRam}
          ssd={ssd}
          setSsd={setSsd}
          calculatePrice={calculatePrice}
        />

        {/* Quick-start plan carousel */}
        <div className="mt-24 relative">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tight text-center lg:text-left">
            Or Choose a Ready-Made Tier
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
            className="!pt-6 !pb-14 !px-4 sm:!px-10 [&_.swiper-button-prev]:!left-0 [&_.swiper-button-next]:!right-0 [&_.swiper-button-prev]:!text-indigo-400 [&_.swiper-button-next]:!text-indigo-400 [&_.swiper-pagination-bullet]:!bg-indigo-400"
          >
            {quickPlans.map((plan, i) => (
              <SwiperSlide key={i} className="h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative h-full flex flex-col justify-between rounded-[2rem] p-8 border ${
                    plan.popular
                      ? "bg-indigo-600 border-indigo-500 shadow-2xl shadow-indigo-600/30"
                      : "bg-slate-900 border-slate-800"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-8 bg-white text-indigo-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full z-20 shadow-md">
                      Most Popular
                    </span>
                  )}

                  <div>
                    <h4 className="text-white font-black text-lg mb-4">{plan.name}</h4>
                    <div className="mb-6">
                      <span className="text-3xl lg:text-4xl font-black text-white">
                        {formatPrice(plan.monthlyPrice, currency)}
                      </span>
                      <span
                        className={`text-sm ml-1 ${
                          plan.popular ? "text-indigo-100" : "text-slate-400"
                        }`}
                      >
                        / month
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.specs.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <Check
                            size={16}
                            className={`mt-0.5 flex-shrink-0 ${
                              plan.popular ? "text-white" : "text-indigo-400"
                            }`}
                          />
                          <span className={plan.popular ? "text-white" : "text-slate-300"}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://my.wefithost.com/build-server"
                    className={`block text-center px-6 py-3.5 rounded-xl font-black uppercase tracking-widest text-[11px] transition-all mt-auto ${
                      plan.popular
                        ? "bg-white text-indigo-600 hover:bg-indigo-50"
                        : "bg-indigo-600 text-white hover:bg-indigo-500"
                    }`}
                  >
                    Deploy Instance
                  </a>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Background shape wrapper locked to avoid page overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-950/10 -skew-x-12 transform translate-x-1/4" />
      </div>
    </section>
  );
};

export default CloudPricing;