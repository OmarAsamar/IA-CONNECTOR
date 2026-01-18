
import React from 'react';
import { ShoppingCart, Zap, Box, Shield, Star, ExternalLink, ArrowRight } from 'lucide-react';

const MarketplacePage: React.FC = () => {
  const tools = [
    { name: 'Gemini Vision AI', desc: 'Auto-reply to images sent in WhatsApp DMs using multimodal intelligence.', price: '$29/mo', category: 'AI ENGINES' },
    { name: 'Advanced CRM Sync', desc: 'Sync your Meta leads directly to Salesforce or HubSpot in real-time.', price: '$15/mo', category: 'UTILITY' },
    { name: 'Story Video Automator', desc: 'Generate Instagram stories from text descriptions automatically.', price: '$49/mo', category: 'MARKETING' },
    { name: 'Bulk HSM Sender', desc: 'Optimized high-volume sender for official WhatsApp templates.', price: 'Free', category: 'WHATSAPP' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-xl font-black uppercase tracking-tight text-black dark:text-white">Extension Marketplace</h1>
          <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest mt-1">Enhance your workspace with professional add-ons</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded font-black uppercase text-[9px] text-neutral-500">
          <Star size={12} className="text-amber-500" /> Featured Partner Program
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map(tool => (
          <div key={tool.name} className="card-pro p-6 flex flex-col justify-between group hover:border-black dark:hover:border-white transition-all shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink size={14} className="text-neutral-300" />
            </div>
            
            <div>
              <div className="w-10 h-10 bg-neutral-50 dark:bg-black rounded-lg flex items-center justify-center text-black dark:text-white mb-4 border border-neutral-100 dark:border-neutral-800">
                <Box size={20} />
              </div>
              <span className="text-[8px] font-black text-indigo-500 uppercase tracking-widest">{tool.category}</span>
              <h3 className="text-[12px] font-black uppercase text-black dark:text-white mt-1 leading-tight">{tool.name}</h3>
              <p className="text-[10px] text-neutral-400 font-medium mt-2 leading-relaxed">{tool.desc}</p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-neutral-50 dark:border-neutral-800 pt-4">
              <span className="text-[11px] font-black text-black dark:text-white">{tool.price}</span>
              <button className="text-[9px] font-black uppercase text-indigo-500 flex items-center gap-1 hover:gap-2 transition-all">
                Install Tool <ArrowRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="card-pro p-8 bg-black dark:bg-white text-white dark:text-black flex flex-col md:flex-row items-center gap-8 shadow-2xl">
         <div className="w-20 h-20 shrink-0 bg-white/10 dark:bg-black/10 rounded-full flex items-center justify-center">
            <Zap size={40} className="text-amber-400" />
         </div>
         <div className="flex-1 text-center md:text-left">
            <h2 className="text-lg font-black uppercase tracking-tight">Need a custom enterprise solution?</h2>
            <p className="text-[11px] opacity-70 mt-1 max-w-xl">Our development team can build custom Meta API endpoints, specific CRM integrations, or private AI models tailored to your business needs.</p>
         </div>
         <button className="px-8 py-3 bg-white dark:bg-black text-black dark:text-white rounded font-black uppercase tracking-widest text-[10px] hover:scale-105 transition shadow-lg shrink-0">Contact Sales</button>
      </div>
    </div>
  );
};

export default MarketplacePage;
