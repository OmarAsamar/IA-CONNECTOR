
import React from 'react';
import { 
  Users, 
  TrendingUp, 
  MessageCircle, 
  BarChart3, 
  ArrowUpRight, 
  ArrowDownRight, 
  Smartphone, 
  Instagram, 
  Facebook,
  AlertCircle,
  Building2,
  Globe,
  MapPin,
  Briefcase,
  ShieldCheck,
  CreditCard,
  ExternalLink,
  Target
} from 'lucide-react';

const DashboardStats: React.FC = () => {
  const stats = [
    { label: 'Total Contacts', value: '4,129', trend: '+14%', up: true, icon: Users },
    { label: 'Active Deals', value: '152', trend: '+5%', up: true, icon: TrendingUp },
    { label: 'Avg Resp Time', value: '2.4m', trend: '-15s', up: true, icon: MessageCircle },
    { label: 'Campaign ROI', value: '380%', trend: '+22%', up: true, icon: BarChart3 },
  ];

  const socialReach = [
    { platform: 'Facebook', value: '24.1K', icon: Facebook },
    { platform: 'Instagram', value: '15.4K', icon: Instagram },
    { platform: 'WhatsApp', value: '8.2K', icon: Smartphone },
  ];

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      
      {/* SUBSCRIPTION ALERT CARD */}
      <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 p-4 rounded-lg flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-amber-500/20">
            <AlertCircle size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-black text-[11px] text-amber-900 dark:text-amber-200 uppercase tracking-widest">Subscription Warning</h3>
              <span className="px-1.5 py-0.5 bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-100 text-[8px] font-black rounded uppercase">Critical</span>
            </div>
            <p className="text-[10px] text-amber-700 dark:text-amber-400 font-medium">Your enterprise subscription will expire in <span className="font-black underline">7 days</span>. Renew now to avoid losing your AI logic engines and WhatsApp pipelines.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-5 py-2 bg-white dark:bg-neutral-800 border border-amber-300 dark:border-amber-900 text-amber-900 dark:text-amber-100 rounded text-[9px] font-black uppercase tracking-widest hover:bg-amber-100 transition-colors">
            Try Application (Beta)
          </button>
          <button className="px-5 py-2 bg-black dark:bg-amber-500 text-white dark:text-black rounded text-[9px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-black/10">
            Renew Plan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="card-black p-4 border border-neutral-800 dark:border-neutral-700 shadow-xl group hover:border-white transition-all">
            <div className="flex justify-between items-start mb-4">
              <stat.icon size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
              <div className={`flex items-center text-[9px] font-black px-1.5 py-0.5 rounded ${stat.up ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {stat.up ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                {stat.trend}
              </div>
            </div>
            <p className="text-[9px] font-black text-neutral-400 uppercase tracking-widest mb-0.5">{stat.label}</p>
            <h3 className="text-lg font-black tracking-tight text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* FUNNEL & ANALYTICS */}
        <div className="lg:col-span-8 card-black p-5 border border-neutral-800 dark:border-neutral-700">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-black text-[10px] uppercase tracking-widest text-neutral-400 flex items-center gap-2"><Target size={12} /> Conversion Funnel Performance</h3>
            <div className="flex gap-2">
              <button className="text-[9px] font-black uppercase text-neutral-500 hover:text-white border border-neutral-800 px-3 py-1 rounded transition">Week View</button>
              <button className="text-[9px] font-black uppercase text-white bg-neutral-800 px-3 py-1 rounded">Month View</button>
            </div>
          </div>
          <div className="h-44 flex items-end justify-between gap-2 px-1">
            {[35, 60, 45, 80, 55, 90, 70, 40, 65, 85, 95, 75, 55, 65, 45, 80].map((h, i) => (
              <div key={i} className="flex-1 bg-white/10 hover:bg-white/40 transition-all cursor-pointer rounded-t-sm relative group">
                <div style={{ height: `${h}%` }} className="w-full h-full bg-inherit rounded-t-sm"></div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-[8px] font-black rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-20 shadow-xl">
                  {h}% Ratio
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROFESSIONAL COMPANY DETAILS SECTION */}
        <div className="lg:col-span-4 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 p-5 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black dark:bg-white rounded flex items-center justify-center text-white dark:text-black shadow-lg">
                <Building2 size={18} />
              </div>
              <div>
                <h3 className="font-black text-[11px] text-black dark:text-white uppercase tracking-widest">Company Profile</h3>
                <p className="text-[9px] text-neutral-400 font-bold uppercase">Corporate MetaHub ID</p>
              </div>
            </div>
            <ShieldCheck size={16} className="text-green-500" />
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
               <div className="p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-md border border-neutral-100 dark:border-neutral-800">
                  <p className="text-[8px] text-neutral-400 font-black uppercase mb-1">Entity Name</p>
                  <p className="text-[10px] font-black text-black dark:text-white truncate">MetaFlow Global Inc.</p>
               </div>
               <div className="p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-md border border-neutral-100 dark:border-neutral-800">
                  <p className="text-[8px] text-neutral-400 font-black uppercase mb-1">Industry</p>
                  <p className="text-[10px] font-black text-black dark:text-white">Social CRM & BI</p>
               </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 group px-1">
                <Globe size={14} className="text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                <div className="flex-1">
                  <p className="text-[8px] text-neutral-400 font-black uppercase tracking-tighter">Verified Domain</p>
                  <p className="text-[10px] font-bold text-black dark:text-white underline decoration-neutral-200 underline-offset-4 cursor-pointer">www.metaflow.pro</p>
                </div>
                <ExternalLink size={10} className="text-neutral-300" />
              </div>
              <div className="flex items-center gap-3 group px-1">
                <MapPin size={14} className="text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                <div className="flex-1">
                  <p className="text-[8px] text-neutral-400 font-black uppercase tracking-tighter">HQ Operations</p>
                  <p className="text-[10px] font-bold text-black dark:text-white">New York, NY 10001, USA</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group px-1">
                <ShieldCheck size={14} className="text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                <div className="flex-1">
                  <p className="text-[8px] text-neutral-400 font-black uppercase tracking-tighter">Tax Verification</p>
                  <p className="text-[10px] font-bold text-black dark:text-white">US-882190-XX (Verified)</p>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 py-2.5 bg-neutral-100 dark:bg-black border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all rounded text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
            Configure Business Settings
          </button>
        </div>
      </div>

      {/* ADDITIONAL METRICS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card-black p-5 border border-neutral-800 dark:border-neutral-700 flex flex-col shadow-lg">
          <h3 className="font-black text-[10px] uppercase tracking-widest text-neutral-400 mb-6 flex items-center gap-2">
            <Smartphone size={12} /> Connected Ecosystem
          </h3>
          <div className="space-y-4 flex-1">
            {socialReach.map((item) => (
              <div key={item.platform} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <item.icon size={14} className="text-neutral-400 group-hover:text-white transition-colors" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">{item.platform}</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                   <span className="text-[11px] font-black text-white">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 p-5 rounded-lg shadow-sm">
           <h3 className="font-black text-[10px] uppercase tracking-widest text-neutral-400 mb-6 flex items-center gap-2">
            <CreditCard size={12} /> Enterprise Billing
          </h3>
          <div className="p-4 bg-black dark:bg-neutral-800 rounded-lg flex flex-col justify-center items-center text-center space-y-2 border border-neutral-800">
             <p className="text-[8px] text-neutral-400 font-black uppercase tracking-widest">Selected Tier</p>
             <h4 className="text-white text-lg font-black tracking-tight uppercase">Tier 3 Enterprise</h4>
             <p className="text-[9px] text-indigo-400 font-black tracking-widest uppercase">$499 / Month</p>
          </div>
          <button className="w-full mt-4 py-2.5 bg-neutral-50 dark:bg-black text-neutral-500 hover:text-black dark:hover:text-white rounded text-[9px] font-black uppercase tracking-widest transition-colors border border-neutral-100 dark:border-neutral-800">
            View Billing History
          </button>
        </div>

        <div className="bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 p-5 rounded-lg shadow-sm">
           <h3 className="font-black text-[10px] uppercase tracking-widest text-neutral-400 mb-6 flex items-center gap-2">
            <Users size={12} /> Real-time Activity
          </h3>
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center gap-3 pb-3 border-b border-neutral-50 dark:border-neutral-800 last:border-0">
                <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center font-black text-[9px] text-neutral-400">
                  {String.fromCharCode(65 + i)}
                </div>
                <div className="flex-1 min-w-0">
                   <p className="text-[10px] font-bold text-black dark:text-white truncate">Internal Audit Log #{1200 + i}</p>
                   <p className="text-[8px] text-neutral-400 font-black uppercase tracking-widest">System Event • 2m ago</p>
                </div>
                <button className="text-[8px] font-black uppercase text-indigo-500 hover:underline shrink-0">Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
