import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "../../assets/long_logo.png";

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', letter: 'f', href: '#' },
    { name: 'Instagram', letter: 'i', href: '#' },
    { name: 'X', letter: 'x', href: '#' },
    { name: 'LinkedIn', letter: 'in', href: '#' },
  ];

  return (
    <footer className="bg-[#0b1120] text-slate-400 py-16 px-6 mt-20 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              <img src={logo} alt="WefitHost Africa" className="h-8 w-auto mb-2" />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              High-performance infrastructure built specifically for African success. Global speed with local reliability.
            </p>
            
            {/* Custom Letter-Based Icons */}
            <div className="flex space-x-3">
              {socialLinks.map(({ name, letter, href }) => (
                <motion.a 
                  key={name}
                  href={href}
                  whileHover={{ y: -4, backgroundColor: '#4f46e5', borderColor: '#6366f1' }}
                  className="w-10 h-10 rounded-xl bg-slate-800/40 border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300"
                  aria-label={name}
                >
                  <span className="text-xs font-black uppercase tracking-tighter italic">{letter}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Hosting Column */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.2em]">Hosting</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/hosting/shared" className="hover:text-indigo-400 transition-colors">Shared Hosting</Link></li>
              <li><Link to="/hosting/wordpress" className="hover:text-indigo-400 transition-colors">WordPress Hosting</Link></li>
              <li><Link to="/hosting/vps" className="hover:text-indigo-400 transition-colors">Managed VPS</Link></li>
              <li><Link to="/hosting/cloud" className="hover:text-indigo-400 transition-colors">Cloud Hosting</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.2em]">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-indigo-400 transition-colors">Official Blog</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Support</Link></li>
              <li>
                <a href="https://wefithost.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium group text-sm">
                  WefitHost UK<span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Currency & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-4">Currency</h4>
              <select className="bg-slate-800/50 border border-slate-700 text-slate-200 text-sm p-3 rounded-xl w-full outline-none focus:ring-2 focus:ring-indigo-600 appearance-none cursor-pointer">
                <option>NGN (₦)</option>
                <option>KES (KSh)</option>
                <option>ZAR (R)</option>
                <option>USD ($)</option>
              </select>
            </div>
            
            <div className="pt-2">
              <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-4">Newsletter</h4>
              <div className="flex bg-slate-800/50 border border-slate-700 rounded-xl p-1 focus-within:ring-2 focus-within:ring-indigo-600 transition-all">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-transparent text-sm px-3 py-2 w-full outline-none text-slate-200 placeholder:text-slate-500"
                />
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-2 rounded-lg transition-all active:scale-95 shadow-lg shadow-indigo-600/20 text-xs font-bold">
                  GO
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <p>© 2026 WefitHost Africa. Global speed, local support.</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;