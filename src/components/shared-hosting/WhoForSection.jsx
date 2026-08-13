import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Rocket, PenTool, MapPin, HeartHandshake, Users } from 'lucide-react';

const whoCards = [
  {
    icon: User,
    title: 'Personal Websites',
    desc: 'Affordable hosting for portfolios, blogs, and basic websites that don\'t need complex server setup.'
  },
  {
    icon: Briefcase,
    title: 'Small Businesses',
    desc: 'Reliable hosting for company websites and service pages, with professional email included.'
  },
  {
    icon: Rocket,
    title: 'Startups',
    desc: 'A simple, low-cost way to get online quickly without worrying about server management.'
  },
  {
    icon: PenTool,
    title: 'Bloggers',
    desc: 'Easy WordPress installation, reliable uptime, and professional email everything a blogger needs.'
  },
  {
    icon: MapPin,
    title: 'Local Businesses',
    desc: 'Perfect for trades, restaurants, consultants, and community organisations getting online.'
  },
  {
    icon: HeartHandshake,
    title: 'First-Time Website Owners',
    desc: 'A beginner-friendly hosting option with simple tools, local support, and no technical skills needed.'
  }
];

const WhoForSection = () => {
  return (
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-indigo-500/10 text-[#6b63ff] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Users size={14} /> Who It&apos;s For
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            Who Is Shared Hosting For?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Shared hosting works for a wide range of websites and website owners.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                <card.icon size={20} className="text-[#6b63ff]" />
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{card.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhoForSection;
