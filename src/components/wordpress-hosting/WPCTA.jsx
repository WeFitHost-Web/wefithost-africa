import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const WPCTA = () => {
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
            Ready to Experience Better WordPress Hosting?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of African WordPress users who've made the switch to our optimized hosting platform with local infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://my.wefithost.com/order-wordpress-hosting" 
              className="inline-flex items-center justify-center gap-2 bg-white text-[#6b63ff] px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Get Started Now <ArrowRight size={18} />
            </a>
            <a 
              href="#pricing" 
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all hover:-translate-y-0.5"
            >
              View Hosting Plans
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WPCTA;