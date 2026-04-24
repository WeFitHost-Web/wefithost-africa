import { motion } from 'framer-motion'; // <--- Add this line

export const FloatingImage = ({ src, alt }) => (
  <div className="relative group">
    {/* Decorative background blur */}
    <div className="absolute -inset-4 bg-indigo-500/20 rounded-[3rem] blur-3xl group-hover:bg-indigo-500/30 transition-all duration-700" />
    
    <motion.div 
      animate={{ y: [0, -15, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      className="relative rounded-[2.5rem] overflow-hidden border border-slate-700 shadow-2xl"
    >
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
    </motion.div>
  </div>
);