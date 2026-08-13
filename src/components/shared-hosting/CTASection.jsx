import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#6b63ff] to-[#4a42d6] relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Ready to Launch Your Website?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Start with reliable shared hosting from WeFitHost and get the tools you need to build, manage, and grow your online presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 bg-white text-[#6b63ff] px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all hover:-translate-y-0.5 shadow-lg">
              Choose Your Plan <ArrowRight size={18} />
            </a>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all hover:-translate-y-0.5">
              Contact Sales <MessageCircle size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;