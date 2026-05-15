import { motion } from "framer-motion";
import {
  Search,
  MousePointer2,
  Share2,
  PenTool,
  MapPin,
  Mail,
  BarChart3,
  Target,
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
  TrendingUp
} from "lucide-react";

export const ServiceCard = ({ icon: Icon, title, desc, deliverables }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
  >
    <div className="mb-6 p-4 bg-indigo-50 rounded-2xl w-fit text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">{desc}</p>
    <ul className="space-y-3 mb-8">
      {deliverables.map((item, i) => (
        <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-wide">
          <CheckCircle2 size={14} className="text-indigo-500" /> {item}
        </li>
      ))}
    </ul>
    <button className="flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-widest hover:gap-3 transition-all">
      Learn More <ArrowRight size={14} />
    </button>
  </motion.div>
);
