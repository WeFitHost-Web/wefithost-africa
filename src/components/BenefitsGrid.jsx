import React from 'react';
import { ShieldCheck, Globe2, Zap, RefreshCw, Lock, Headphones } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: "WHOIS Privacy", desc: "Keep your personal data hidden from spammers for free." },
  { icon: Globe2, title: "Anycast DNS", desc: "Global server clusters ensure your domain resolves instantly." },
  { icon: RefreshCw, title: "Easy Transfers", desc: "Migrate your existing domains with one click and zero downtime." },
  { icon: Lock, title: "Domain Locking", desc: "Prevent unauthorized transfer attempts with enterprise locking." },
  { icon: Zap, title: "Instant Setup", desc: "Your domain is live and ready for hosting within seconds." },
  { icon: Headphones, title: "24/7 Expert Support", desc: "Our engineers are ready to help with DNS or peering issues." },
];

// Mock data for the dashboard to replace the pulse
const mockDNS = [
  { type: 'A', host: '@', value: '192.168.1.1' },
  { type: 'CNAME', host: 'www', value: 'wefithost.africa' },
  { type: 'MX', host: '@', value: 'mail.wefithost.africa' }
];

export const BenefitsGrid = () => (
  <div className="grid lg:grid-cols-2 gap-20 items-center">
    <div className="relative">
      <div className="absolute -inset-4 bg-indigo-500/20 blur-[100px] rounded-full" />
      <div className="relative bg-slate-900 rounded-[3rem] border border-slate-800 p-2 overflow-hidden shadow-2xl">
        
        {/* Fake Dashboard Mockup */}
        <div className="bg-[#0b1120] rounded-[2.5rem] p-8 min-h-[400px]">
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="px-4 py-1 bg-slate-800 rounded-full text-[10px] text-slate-400 font-bold uppercase tracking-widest">DNS Manager</div>
          </div>

          <div className="space-y-4">
            {/* NO MORE PULSE: Static records that look like a completed setup */}
            {mockDNS.map((record, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-4">
                  <span className="w-12 text-center py-1 bg-indigo-500/20 text-indigo-400 text-[10px] font-black rounded font-mono">
                    {record.type}
                  </span>
                  <span className="text-xs text-slate-300 font-mono">{record.host}</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">{record.value}</span>
              </div>
            ))}
            
            {/* Added a 'Success' status indicator */}
            <div className="pt-4 mt-4 border-t border-slate-800 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Features section remains the same */}
    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
      {features.map((f, i) => (
        <div key={i} className="group">
          <div className="mb-4 p-3 bg-indigo-500/10 rounded-2xl w-fit text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
            <f.icon size={24} />
          </div>
          <h4 className="text-lg font-black text-white mb-2 tracking-tight">{f.title}</h4>
          <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  </div>
);