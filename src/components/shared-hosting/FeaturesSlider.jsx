import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Gauge, Globe2, Mail, Database, Lock, Paintbrush, History, Shield, Bug, Code, Globe, FolderOpen,
  Microchip, MemoryStick, HardDrive, Network
} from 'lucide-react';

const features = [
  { icon: Gauge, title: 'Easy Control Panel', desc: 'Manage your website, email accounts, databases, and files from a simple, beginner-friendly control panel.' },
  { icon: Globe2, title: 'One-Click WordPress', desc: 'Install WordPress and other popular applications in seconds no technical knowledge needed.' },
  { icon: Mail, title: 'Professional Email Accounts', desc: 'Create professional email addresses at your domain (e.g. hello@yourbusiness.com) included with every plan.' },
  { icon: Database, title: 'MySQL Databases', desc: 'Support for MySQL databases to power your dynamic websites, WordPress installations, and web applications.' },
  { icon: Lock, title: 'Free SSL Certificates', desc: 'Every plan includes a free SSL certificate securing your website with HTTPS and the browser padlock.' },
  { icon: Paintbrush, title: 'Website Builder', desc: 'Build a professional website using a drag-and-drop website builder no coding skills required.' },
  { icon: History, title: 'Daily Backups', desc: 'Automatic daily backups keep your website data safe and allow quick restoration if anything goes wrong.' },
  { icon: Shield, title: 'DDoS Protection', desc: 'Built-in DDoS protection helps keep your website online and accessible even during traffic attacks.' },
  { icon: Bug, title: 'Malware Scanning', desc: 'Regular malware scans help detect and flag suspicious files before they cause problems for your website.' },
  { icon: Code, title: 'PHP Support', desc: 'Full PHP support with the latest stable versions compatible with WordPress, Joomla, and most web apps.' },
  { icon: Globe, title: 'Domain Management', desc: 'Manage your domain, DNS records, and subdomains directly from your hosting control panel.' },
  { icon: FolderOpen, title: 'File Manager', desc: 'Upload, edit, and manage your website files directly from your browser no FTP client needed.' },
];

const techSpecs = [
  { label: 'Disk Space', value: '10GB SSD to Unlimited' },
  { label: 'Bandwidth', value: 'Unmetered on all plans' },
  { label: 'Email Accounts', value: '5 (Starter) / Unlimited (Business & Enterprise)' },
  { label: 'Databases', value: 'MySQL databases included' },
  { label: 'PHP Version', value: 'Latest stable version supported' },
  { label: 'Uptime Guarantee', value: '99.9% uptime guarantee' },
];

const perfItems = [
  { icon: Microchip, label: 'CPU Usage', badge: 'Shared' },
  { icon: MemoryStick, label: 'Memory Allocation', badge: 'Shared' },
  { icon: HardDrive, label: 'Disk I/O', badge: 'Shared' },
  { icon: Network, label: 'Network Resources', badge: 'Shared' },
];

const FeaturesSlider = () => {
  return (
    <section id="features" className="py-24 bg-[#0b1120]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-indigo-500/10 text-[#6b63ff] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Gauge size={14} /> What You Get
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            Everything Included With Your Plan
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            All the tools you need to build, manage, and grow your website included as standard.
          </p>
        </div>

        {/* Feature Swiper */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {features.map((feat, i) => (
            <SwiperSlide key={i}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 h-[220px] hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
                  <feat.icon size={24} className="text-[#6b63ff]" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{feat.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{feat.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tech Specs + Performance */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {/* Tech Specs Table */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Technical Specifications</h3>
            <div className="overflow-hidden rounded-xl border border-slate-800">
              <table className="w-full text-sm">
                <tbody>
                  {techSpecs.map((spec, i) => (
                    <tr key={i} className="border-b border-slate-800 last:border-0 hover:bg-slate-900/50 transition-colors">
                      <th className="text-left p-4 text-slate-300 font-semibold bg-slate-900/80 w-[40%]">{spec.label}</th>
                      <td className="p-4 text-slate-400">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Performance Considerations */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Performance Considerations</h3>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
              <div className="divide-y divide-slate-800">
                {perfItems.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-900/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <item.icon size={18} className="text-[#6b63ff]" />
                      <span className="text-slate-300 text-sm font-medium">{item.label}</span>
                    </div>
                    <span className="bg-indigo-500/10 text-[#6b63ff] text-xs font-bold px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-slate-800">
                <p className="text-slate-400 text-xs leading-relaxed">
                  Shared hosting is cost-effective and fully managed. Because resources are shared across accounts, 
                  it&apos;s best suited for websites with moderate and predictable traffic levels.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSlider;
