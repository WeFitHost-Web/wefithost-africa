import React from "react";
import { motion } from "framer-motion";
import { Globe, RefreshCcw, ArrowRightCircle, ShieldCloseIcon, Mail, ArrowLeftRight,  } from "lucide-react";

const features = [
  {
    icon: <Globe size={22} />,
    title: "DNS Management",
    description: "Update nameservers, DNS records, and domain settings from your client area.",
  },
  {
    icon: <RefreshCcw size={22} />,
    title: "Auto-Renewal",
    description: "Keep important domains active with renewal reminders and auto-renew options.",
  },
  {
    icon: <ArrowRightCircle size={22} />,
    title: "Domain Forwarding",
    description: "Redirect your domain to a website, landing page, or social profile.",
  },
  {
    icon: <ShieldCloseIcon size={22} />,
    title: "WHOIS Privacy",
    description: "Protect eligible domain contact details from public lookup where available.",
  },
  {
    icon: <Mail size={22} />,
    title: "Email & Hosting Connection",
    description: "Connect your domain to WeFitHost email and hosting services seamlessly.",
  },
  {
    icon: <ArrowLeftRight size={22} />,
    title: "Transfer Support",
    description: "Move existing domains to WeFitHost with expert guidance where applicable.",
  },
];

const DomainsFeatures = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">
            Everything You Need to <span className="text-indigo-600">Manage Your Domains</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Take full control of your online presence with our comprehensive suite of management tools.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-200 rounded-[1.75rem] p-7"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                {f.icon}
              </div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsFeatures;