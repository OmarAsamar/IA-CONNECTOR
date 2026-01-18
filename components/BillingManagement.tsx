
import React from 'react';
import { CreditCard, Shield, CheckCircle2, FileText, ArrowUpRight, Download, Zap, AlertTriangle } from 'lucide-react';

const BillingManagement: React.FC = () => {
  const invoices = [
    { id: 'INV-2024-03', date: '2024-03-01', amount: '$499.00', status: 'PAID' },
    { id: 'INV-2024-02', date: '2024-02-01', amount: '$499.00', status: 'PAID' },
    { id: 'INV-2024-01', date: '2024-01-01', amount: '$499.00', status: 'PAID' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-xl font-black uppercase tracking-tight text-black dark:text-white">Billing & Subscription</h1>
          <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest mt-1">Manage your enterprise plan and payment methods</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded font-black uppercase text-[9px] text-neutral-500">
          <Shield size={12} className="text-green-500" /> PCI-DSS Secure Billing
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* CURRENT PLAN */}
        <div className="md:col-span-8 space-y-4">
           <div className="card-pro p-8 bg-black text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Zap size={140} fill="currentColor" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                   <div className="px-2 py-0.5 bg-amber-500 text-black text-[8px] font-black uppercase rounded shadow-lg">Enterprise Plus</div>
                   <span className="text-[10px] font-bold uppercase text-neutral-400">Monthly Plan</span>
                </div>
                <h2 className="text-3xl font-black">$499.00 <span className="text-sm font-bold text-neutral-500">/ Month</span></h2>
                <div className="grid grid-cols-2 gap-4 mt-8">
                   <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-amber-500" />
                      <span className="text-[10px] font-bold uppercase tracking-tight">Unlimited WhatsApp API</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-amber-500" />
                      <span className="text-[10px] font-bold uppercase tracking-tight">Gemini Vision Intelligence</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-amber-500" />
                      <span className="text-[10px] font-bold uppercase tracking-tight">Full Team Collaboration</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-amber-500" />
                      <span className="text-[10px] font-bold uppercase tracking-tight">Audit Log Compliance</span>
                   </div>
                </div>
                <div className="mt-8 flex gap-3">
                   <button className="px-6 py-2 bg-white text-black rounded font-black uppercase tracking-widest text-[10px] hover:scale-105 transition shadow-xl">Upgrade Plan</button>
                   <button className="px-6 py-2 border border-neutral-800 rounded font-black uppercase tracking-widest text-[10px] hover:bg-neutral-900 transition">Cancel Subscription</button>
                </div>
              </div>
           </div>

           <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-amber-800 dark:text-amber-200 tracking-tight">Subscription expiring in 7 days</p>
                  <p className="text-[9px] text-amber-700 dark:text-amber-400 font-bold uppercase tracking-widest">Renew now to avoid service interruption of your AI brain</p>
                </div>
              </div>
              <button className="px-5 py-2 bg-amber-500 text-black rounded font-black uppercase tracking-widest text-[9px] hover:scale-105 transition-all shadow-md">Renew Now</button>
           </div>
        </div>

        {/* PAYMENT & INVOICES */}
        <div className="md:col-span-4 space-y-4">
           <div className="card-pro p-5">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-4 flex items-center gap-2"><CreditCard size={12}/> Payment Method</h3>
              <div className="flex items-center justify-between p-3 border border-neutral-100 dark:border-neutral-800 rounded bg-neutral-50 dark:bg-black/50">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-5 bg-neutral-200 dark:bg-neutral-800 rounded flex items-center justify-center text-[7px] font-black uppercase">VISA</div>
                    <span className="text-[10px] font-black uppercase tracking-widest">•••• 4242</span>
                 </div>
                 <button className="text-[9px] font-black uppercase text-indigo-500 hover:underline">Edit</button>
              </div>
           </div>

           <div className="card-pro p-5">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-4 flex items-center gap-2"><FileText size={12}/> Recent Invoices</h3>
              <div className="space-y-2">
                 {invoices.map(inv => (
                    <div key={inv.id} className="flex items-center justify-between p-2 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded transition-colors group">
                       <div className="flex flex-col">
                          <span className="text-[9px] font-black text-black dark:text-white uppercase tracking-widest">{inv.id}</span>
                          <span className="text-[8px] text-neutral-400 uppercase font-black">{inv.date}</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <span className="text-[10px] font-black">{inv.amount}</span>
                          <button className="text-neutral-300 group-hover:text-black dark:group-hover:text-white"><Download size={14}/></button>
                       </div>
                    </div>
                 ))}
              </div>
              <button className="w-full mt-4 text-[9px] font-black uppercase text-indigo-500 hover:underline text-center">View All Invoices</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BillingManagement;
