
import React from 'react';
import { Plus, Zap, Facebook, Instagram, Smartphone } from 'lucide-react';
import { Platform } from '../types';

const AutomationRules: React.FC = () => {
  const rules = [
    { name: 'Welcome Bot', platform: Platform.WHATSAPP, trigger: 'hello, hi', active: true },
    { name: 'Sales Closer', platform: Platform.FACEBOOK, trigger: 'price, buy', active: false },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-black tracking-tight uppercase">Sales Bot Rules</h2>
        <button className="bg-black text-white px-4 py-2 rounded text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
          <Plus size={14} /> New Rule
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 border-2 border-black rounded flex flex-col justify-between h-40">
           <Zap size={24} className="text-black" />
           <div>
             <h3 className="font-black text-[11px] uppercase tracking-widest text-black">Gemini AI Brain</h3>
             <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-tight mt-1">Smart context-aware replies active</p>
           </div>
        </div>

        {rules.map(rule => (
          <div key={rule.name} className="card-black p-5 border border-neutral-800 flex flex-col justify-between h-40">
            <div className="flex justify-between">
               <span className="text-[8px] font-black text-neutral-500 uppercase tracking-widest">{rule.platform}</span>
               <div className={`w-8 h-4 rounded-full p-0.5 flex ${rule.active ? 'bg-white justify-end' : 'bg-neutral-800 justify-start'}`}>
                  <div className={`w-3 h-3 rounded-full ${rule.active ? 'bg-black' : 'bg-neutral-600'}`}></div>
               </div>
            </div>
            <div>
              <h4 className="font-bold text-[11px]">{rule.name}</h4>
              <p className="text-[9px] text-neutral-400 mt-1">Triggers: {rule.trigger}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutomationRules;
