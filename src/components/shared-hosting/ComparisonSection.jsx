import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, HardDrive, Cloud, CheckCircle, AlertTriangle } from 'lucide-react';

const tabs = [
  { id: 'vps', label: 'vs VPS Hosting', icon: Server },
  { id: 'dedicated', label: 'vs Dedicated Hosting', icon: HardDrive },
  { id: 'cloud', label: 'vs Cloud Hosting', icon: Cloud },
];

const comparisonData = {
  vps: {
    headers: ['Feature', 'Shared Hosting', 'VPS Hosting'],
    rows: [
      ['Best For', 'Beginners & small websites', 'Growing businesses & developers'],
      ['Performance', 'Good for moderate traffic', 'Excellent for medium–high traffic'],
      ['Resources', 'Shared with other sites', 'Guaranteed allocation'],
      ['Management', 'Fully managed', 'Self-managed or managed'],
      ['Server Control', 'Control panel access', 'Root access available'],
      ['Scalability', 'Limited', 'Easy to scale up'],
      ['Technical Skill', 'None required', 'Some knowledge helpful'],
    ]
  },
  dedicated: {
    headers: ['Feature', 'Shared Hosting', 'Dedicated Hosting'],
    rows: [
      ['Best For', 'Beginners & small websites', 'Large businesses & high-traffic sites'],
      ['Performance', 'Good for moderate traffic', 'Maximum performance'],
      ['Resources', 'Shared with other sites', 'Entire server for your use'],
      ['Management', 'Fully managed', 'Managed or unmanaged'],
      ['Server Control', 'Control panel access', 'Full root access'],
      ['Scalability', 'Limited', 'Limited by hardware'],
      ['Technical Skill', 'None required', 'Advanced knowledge needed'],
    ]
  },
  cloud: {
    headers: ['Feature', 'Shared Hosting', 'Cloud Hosting'],
    rows: [
      ['Best For', 'Beginners & small websites', 'Growing businesses & variable traffic'],
      ['Performance', 'Good for moderate traffic', 'Excellent, scales on demand'],
      ['Resources', 'Shared with other sites', 'Scalable on demand'],
      ['Management', 'Fully managed', 'Varies by provider'],
      ['Server Control', 'Control panel access', 'Dashboard & API access'],
      ['Scalability', 'Limited', 'Highly scalable'],
      ['Technical Skill', 'None required', 'Some knowledge helpful'],
    ]
  }
};

const whenToChoose = [
  "You're launching your first website",
  "You run a small business or personal site",
  "You want an affordable, fully managed solution",
  "You don't need custom server configurations",
  "You prefer simplicity over full server control",
];

const whenToUpgrade = [
  "Your website is receiving consistently high traffic",
  "You need faster loading times and dedicated resources",
  "You require custom server software or configurations",
  "Your business depends heavily on website availability",
  "You need enhanced security or compliance requirements",
];

const ComparisonSection = () => {
  const [activeTab, setActiveTab] = useState('vps');
  const data = comparisonData[activeTab];

  return (
    <section id="comparison" className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-indigo-500/10 text-[#6b63ff] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Server size={14} /> Hosting Comparison
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            Shared Hosting vs Other Hosting Options
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Not sure which hosting type is right for you? Here&apos;s how shared hosting compares.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-[#6b63ff] text-white'
                  : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:border-indigo-500/30 hover:text-white'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-x-auto rounded-xl border border-slate-800 mb-12"
        >
          <table className="w-full text-sm">
            <thead>
              <tr>
                {data.headers.map((h, i) => (
                  <th key={i} className={`p-4 text-left font-bold text-white bg-[#6b63ff] ${
                    i === 0 ? 'rounded-tl-xl' : i === data.headers.length - 1 ? 'rounded-tr-xl' : ''
                  }`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {data.rows.map((row, i) => (
                <tr key={i} className="hover:bg-slate-900/30 transition-colors">
                  {row.map((cell, j) => (
                    <td key={j} className={`p-4 ${j === 0 ? 'text-slate-300 font-semibold' : 'text-slate-400'}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* When to choose / When to upgrade */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
          >
            <h3 className="text-white font-bold text-lg mb-4">When to choose shared hosting</h3>
            <ul className="space-y-3">
              {whenToChoose.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
          >
            <h3 className="text-white font-bold text-lg mb-4">When to consider upgrading</h3>
            <ul className="space-y-3">
              {whenToUpgrade.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <AlertTriangle size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Note */}
        <p className="text-center text-slate-400 text-sm">
          Need more power?{' '}
          <a href="/vps-hosting" className="text-[#6b63ff] font-semibold hover:underline">Explore VPS Hosting</a>{' '}
          or{' '}
          <a href="/cloud-hosting" className="text-[#6b63ff] font-semibold hover:underline">Cloud Hosting</a>{' '}
           or{' '}
          <a href="/contact" className="text-[#6b63ff] font-semibold hover:underline">talk to our team</a>{' '}
          and we&apos;ll help you choose.
        </p>

      </div>
    </section>
  );
};

export default ComparisonSection;
