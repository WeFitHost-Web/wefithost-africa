import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, MemoryStick, HardDrive, Gauge } from "lucide-react";
import { useCurrency, formatPrice } from "../../contexts/CurrencyContext"; // Adjust import path if needed

export const CloudConfigurator = ({
  cores: initialCores = 2,
  ram: initialRam = 4,
  ssd: initialSsd = 50,
}) => {
  const [cores, setCores] = useState(initialCores);
  const [ram, setRam] = useState(initialRam);
  const [ssd, setSsd] = useState(initialSsd);

  // Safely consume CurrencyContext with a fallback
  const currencyContext = useCurrency();
  const currency = currencyContext?.currency;

  // Calculate base price in GBP
  const calculateGbpPrice = () => {
    const basePrice = 5;
    const cpuCost = cores * 4;
    const ramCost = ram * 2;
    const ssdCost = (ssd / 25) * 1.5;
    return basePrice + cpuCost + ramCost + ssdCost;
  };

  const gbpPrice = calculateGbpPrice();
  const formattedPrice = formatPrice(gbpPrice, currency);
  const bandwidth = cores * 1000;

  const sliders = [
    {
      label: "vCPU Cores",
      icon: <Cpu size={18} />,
      value: cores,
      setValue: setCores,
      min: 1,
      max: 16,
      step: 1,
      unit: cores === 1 ? "core" : "cores",
    },
    {
      label: "RAM",
      icon: <MemoryStick size={18} />,
      value: ram,
      setValue: setRam,
      min: 1,
      max: 32,
      step: 1,
      unit: "GB",
    },
    {
      label: "SSD Storage",
      icon: <HardDrive size={18} />,
      value: ssd,
      setValue: setSsd,
      min: 25,
      max: 640,
      step: 5,
      unit: "GB",
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Sliders */}
      <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-[2rem] p-8 md:p-10 space-y-8">
        {sliders.map((s, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <span className="text-indigo-400">{s.icon}</span>
                {s.label}
              </div>
              <span className="text-indigo-400 font-black text-lg">
                {s.value} {s.unit}
              </span>
            </div>
            <input
              type="range"
              min={s.min}
              max={s.max}
              step={s.step}
              value={s.value}
              onChange={(e) => s.setValue(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none bg-slate-800 accent-indigo-500 cursor-pointer"
            />
          </div>
        ))}

        <div className="flex items-center gap-2 text-slate-400 text-sm pt-2 border-t border-slate-800">
          <Gauge size={16} className="text-indigo-400" />
          Estimated bandwidth allowance:{" "}
          <span className="text-white font-semibold">
            {bandwidth.toLocaleString()} GB / mo
          </span>
        </div>
      </div>

      {/* Live Price Summary */}
      <motion.div
        key={gbpPrice}
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        className="bg-indigo-600 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between shadow-2xl shadow-indigo-600/20"
      >
        <div>
          <span className="text-indigo-100 text-xs font-black uppercase tracking-widest">
            Your Cloud Instance
          </span>
          <div className="mt-3 mb-1 flex items-baseline gap-1">
            <span className="text-white text-5xl font-black tracking-tighter">
              {formattedPrice}
            </span>
          </div>
          <p className="text-indigo-100 text-sm font-medium">per month</p>
        </div>

        <ul className="text-indigo-50 text-sm space-y-2 mt-8">
          <li>
            {cores} vCPU {cores === 1 ? "Core" : "Cores"}
          </li>
          <li>{ram}GB DDR4 Memory</li>
          <li>{ssd}GB NVMe SSD</li>
          <li>{bandwidth.toLocaleString()}GB Bandwidth</li>
        </ul>

        <a
          href="https://my.wefithost.com/build-server"
          className="mt-8 block text-center bg-white text-indigo-600 px-6 py-4 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-indigo-50 transition-all"
        >
          Get Started
        </a>
      </motion.div>
    </div>
  );
};

export default CloudConfigurator;