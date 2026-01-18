
import React from 'react';
import { CheckCircle2, Plus, MessageSquare, PhoneOutgoing, Activity, Settings2 } from 'lucide-react';

const WhatsAppHub: React.FC = () => {
  const templates = [
    { name: 'order_status', category: 'UTILITY', status: 'APPROVED' },
    { name: 'marketing_offer', category: 'MARKETING', status: 'PENDING' },
    { name: 'welcome_flow', category: 'SERVICE', status: 'APPROVED' },
  ];

  return (
    <div className="space-y-4">
      {/* API STATUS CARD */}
      <div className="card-black p-5 border border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white text-black rounded flex items-center justify-center">
            <MessageSquare size={18} />
          </div>
          <div>
            <h2 className="font-black text-[11px] uppercase tracking-widest text-white">WhatsApp Cloud API</h2>
            <div className="flex items-center gap-2 mt-0.5">
               <span className="text-[9px] text-green-400 font-bold tracking-widest uppercase">Verified Connection</span>
               <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
           <button className="bg-neutral-900 border border-neutral-800 text-white px-4 py-1.5 rounded text-[9px] font-black uppercase tracking-widest hover:bg-neutral-800">API Logs</button>
           <button className="bg-white text-black px-4 py-1.5 rounded text-[9px] font-black uppercase tracking-widest">Refresh Hub</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <div className="card-black p-4 border border-neutral-800 flex items-center gap-4">
            <PhoneOutgoing size={16} className="text-neutral-500" />
            <div>
               <p className="text-[10px] text-white font-black">2.4K Messages</p>
               <p className="text-[8px] text-neutral-500 uppercase font-black">Sent Today</p>
            </div>
         </div>
         <div className="card-black p-4 border border-neutral-800 flex items-center gap-4">
            <Activity size={16} className="text-neutral-500" />
            <div>
               <p className="text-[10px] text-white font-black">98.2% Delivery</p>
               <p className="text-[8px] text-neutral-500 uppercase font-black">Success Rate</p>
            </div>
         </div>
         <div className="card-black p-4 border border-neutral-800 flex items-center gap-4">
            <Settings2 size={16} className="text-neutral-500" />
            <div>
               <p className="text-[10px] text-white font-black">API v18.0</p>
               <p className="text-[8px] text-neutral-500 uppercase font-black">Current Version</p>
            </div>
         </div>
      </div>

      <div className="flex justify-between items-center px-1 pt-2">
        <h3 className="font-black text-[9px] uppercase tracking-widest text-neutral-400">Template Approval Pipeline</h3>
        <button className="text-[9px] font-black uppercase text-black hover:underline flex items-center gap-1">
          <Plus size={10} /> New Template
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map(t => (
          <div key={t.name} className="card-black p-4 border border-neutral-800">
             <div className="flex justify-between mb-4">
                <span className="text-[8px] font-black text-neutral-500 uppercase tracking-widest">{t.category}</span>
                <div className={`flex items-center gap-1 text-[8px] font-black uppercase ${t.status === 'APPROVED' ? 'text-green-400' : 'text-amber-400'}`}>
                   <CheckCircle2 size={10} /> {t.status}
                </div>
             </div>
             <h4 className="font-bold text-[11px] mb-4 text-white uppercase">{t.name}</h4>
             <div className="flex gap-2">
                <button className="flex-1 py-1.5 bg-neutral-900 border border-neutral-700 rounded text-[9px] font-black uppercase text-white hover:bg-neutral-800">Configure</button>
                <button className="flex-1 py-1.5 bg-white text-black rounded text-[9px] font-black uppercase">Send Now</button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsAppHub;
