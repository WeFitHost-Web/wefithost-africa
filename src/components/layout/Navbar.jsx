import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../assets/long_logo.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHostingOpen, setIsHostingOpen] = useState(false);

  // Helper to close all menus
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsHostingOpen(false);
  };

  // Mobile Link Component for consistent styling
  const MobileLink = ({ to, children }) => (
    <Link 
      to={to} 
      onClick={closeMenu}
      className="block py-4 text-lg font-bold text-slate-200 border-b border-slate-800 hover:text-indigo-400 transition-colors"
    >
      {children}
    </Link>
  );

  return (
    <nav className="relative bg-[#0b1120] text-slate-200 border-b border-slate-800 font-sans sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Identity */}
        <div className="flex items-center space-x-12">
          <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
            <img src={logo} alt="WefitHost" className="h-9 w-auto" />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center space-x-10 text-[15px] font-medium tracking-tight">
            
            {/* Hosting Mega Menu (Desktop Only) */}
            <div 
              className="group"
              onMouseEnter={() => setActiveMenu('hosting')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center py-7 group-hover:text-indigo-400 transition-colors">
                Hosting
                <svg className={`ml-1.5 w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'hosting' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute inset-x-0 top-20 bg-slate-50 border-b border-slate-200 shadow-2xl invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                <div className="max-w-6xl mx-auto px-8 py-12 grid grid-cols-3 gap-12">
                  <div className="space-y-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-600">Web Hosting</h4>
                    <Link to="/hosting/shared" className="block group/item">
                      <div className="text-slate-900 font-semibold group/item:text-indigo-600 transition-colors">Shared Hosting</div>
                      <p className="text-sm text-slate-500 mt-1">Affordable, reliable hosting for small African businesses.</p>
                    </Link>
                    <Link to="/hosting/wordpress" className="block group/item">
                      <div className="text-slate-900 font-semibold group/item:text-indigo-600 transition-colors">WordPress</div>
                      <p className="text-sm text-slate-500 mt-1">Managed solutions supercharged for local performance.</p>
                    </Link>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-600">Advanced Infrastructure</h4>
                    <Link to="/hosting/vps" className="block group/item">
                      <div className="text-slate-900 font-semibold group/item:text-indigo-600 transition-colors">VPS Hosting</div>
                      <p className="text-sm text-slate-500 mt-1">Dedicated resources and local Africa network nodes.</p>
                    </Link>
                    <Link to="/hosting/cloud" className="block group/item">
                      <div className="text-slate-900 font-semibold group/item:text-indigo-600 transition-colors">Cloud Hosting</div>
                      <p className="text-sm text-slate-500 mt-1">Scalable infrastructure for growing enterprise apps.</p>
                    </Link>
                  </div>

                  {/* <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                    <p className="text-sm text-indigo-600 font-bold italic">Launch Special</p>
                    <h5 className="text-slate-900 font-bold mt-2">Get 20% off your first year!</h5>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">Available for all Shared and WP plans when paying in local currencies.</p>
                    <button className="mt-4 text-sm font-bold text-indigo-600 hover:underline">See all offers →</button>
                  </div> */}
                </div>
              </div>
            </div>

            <Link to="/domains" className="hover:text-indigo-400 transition-colors py-7">Domains</Link>
            <Link to="/services" className="hover:text-indigo-400 transition-colors py-7">Services</Link>
            <Link to="/email" className="hover:text-indigo-400 transition-colors py-7">Email</Link>
            <Link to="/pricing" className="hover:text-indigo-400 transition-colors py-7">Pricing</Link>
            {/* <Link to="/about" className="hover:text-indigo-400 transition-colors py-7">About</Link> */}
          </div>
        </div>

        {/* ACTIONS & HAMBURGER */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link to="https://my.wefithost.com/login" className="hidden md:flex items-center text-sm font-semibold hover:text-white transition-colors">
            Log In
          </Link>
          <button className="hidden md:block bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-900/40 transition-all transform active:scale-95">
            <Link to="https://my.wefithost.com/manage">Sign Up</Link>
          </button>

          {/* MOBILE HAMBURGER BUTTON */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none"
          >
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-slate-200 rounded-full block"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-slate-200 rounded-full block"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-slate-200 rounded-full block"
            />
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100vh', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden absolute top-20 inset-x-0 bg-[#0b1120] overflow-y-auto px-6 pb-24"
          >
            <div className="flex flex-col pt-4">
              
              {/* MOBILE HOSTING ACCORDION */}
              <div className="border-b border-slate-800">
                <button 
                  onClick={() => setIsHostingOpen(!isHostingOpen)}
                  className="w-full py-4 flex justify-between items-center text-lg font-bold text-slate-200"
                >
                  Hosting
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${isHostingOpen ? 'rotate-180 text-indigo-400' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {isHostingOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 pb-4 space-y-1"
                    >
                      <Link to="/hosting/shared" onClick={closeMenu} className="block py-3 text-slate-400 font-semibold hover:text-indigo-400">Shared Hosting</Link>
                      <Link to="/hosting/wordpress" onClick={closeMenu} className="block py-3 text-slate-400 font-semibold hover:text-indigo-400">WordPress Hosting</Link>
                      <Link to="/hosting/vps" onClick={closeMenu} className="block py-3 text-slate-400 font-semibold hover:text-indigo-400">Cloud VPS</Link>
                      <Link to="/hosting/cloud" onClick={closeMenu} className="block py-3 text-slate-400 font-semibold hover:text-indigo-400">Enterprise Cloud</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <MobileLink to="/domains">Domains</MobileLink>
              <MobileLink to="/services">Services</MobileLink>
              <MobileLink to="/about">About Us</MobileLink>
              
              <div className="mt-8 space-y-4">
                <Link 
                  to="https://my.wefithost.com/login" 
                  onClick={closeMenu}
                  className="block w-full text-center py-4 rounded-xl border border-slate-700 font-bold text-slate-200"
                >
                  Log In
                </Link>
                <Link 
                  to="https://my.wefithost.com/manage" 
                  onClick={closeMenu}
                  className="block w-full text-center py-4 rounded-xl bg-indigo-600 font-bold text-white shadow-xl shadow-indigo-900/20"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;