import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const DomainsCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#6b63ff] via-[#5a52e0] to-[#4a42d6] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-white/5" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Ready To Secure Your Domain?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Search, register, or transfer your domain with WeFitHost and manage your online identity from one simple account.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#6b63ff] px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Search Domains <ArrowRight size={18} />
            </a>
            <a
              href="https://my.wefithost.com/domain-search"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all hover:-translate-y-0.5"
            >
              Transfer a Domain
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DomainsCTA;