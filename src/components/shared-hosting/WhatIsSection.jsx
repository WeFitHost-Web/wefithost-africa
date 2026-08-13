import React from 'react';
import { motion } from 'framer-motion';
import { Server, Users, PoundSterling, Settings } from 'lucide-react';

const wisCards = [
  {
    icon: Users,
    title: 'Shared Resources',
    desc: 'Multiple websites share the same server keeping costs low without compromising on reliability.'
  },
  {
    icon: PoundSterling,
    title: 'Cost Effective',
    desc: 'Server maintenance costs are shared across all users, making it the most affordable hosting option.'
  },
  {
    icon: Settings,
    title: 'Fully Managed',
    desc: 'WeFitHost handles all server maintenance, security patches, and software updates for you.'
  }
];

const WhatIsSection = () => {
  return (
    <section id="what-is" className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-indigo-500/10 text-[#6b63ff] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Server size={14} /> The Basics
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            What is Shared Hosting?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A simple, affordable way to get your website online managed entirely for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="assets/new-images/shared-explained-img.png"
              alt="Shared hosting illustration"
              className="rounded-2xl shadow-xl shadow-indigo-500/10 w-full object-cover"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000'; }}
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-300 mb-4 leading-relaxed">
              Shared hosting is the most popular and affordable type of web hosting. Multiple websites 
              share a single server&apos;s resources including CPU, RAM, and disk space making it a 
              cost-effective option for individuals and small businesses getting started online.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              WeFitHost manages all the technical side for you server maintenance, security updates, 
              and uptime so you can focus on building your website.
            </p>

            {/* Accordion-style info */}
            <div className="space-y-3">
              <details className="group bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-white text-sm hover:text-[#6b63ff] transition-colors">
                  How does shared hosting work?
                  <span className="text-slate-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-slate-400 text-sm leading-relaxed">
                  WeFitHost maintains powerful servers in African data centres. Each server hosts multiple websites. 
                  You get access to a control panel to manage your website, email accounts, databases, and files 
                  with no server maintenance needed on your end.
                </div>
              </details>
              <details className="group bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-white text-sm hover:text-[#6b63ff] transition-colors">
                  What&apos;s included with shared hosting?
                  <span className="text-slate-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-slate-400 text-sm leading-relaxed">
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Control panel access (manage files, email, databases)</li>
                    <li>One-click installer for WordPress and popular apps</li>
                    <li>Professional email accounts at your domain</li>
                    <li>Free SSL certificate</li>
                    <li>Daily backups (Business & Enterprise plans)</li>
                    <li>Local support team</li>
                  </ul>
                </div>
              </details>
            </div>
          </motion.div>
        </div>

        {/* Three info cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {wisCards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <card.icon size={24} className="text-[#6b63ff]" />
              </div>
              <h3 className="text-white font-bold mb-2">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatIsSection;
