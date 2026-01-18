
import React, { useState } from 'react';
import { 
  Facebook, 
  Instagram, 
  Smartphone, 
  Linkedin, 
  Plus, 
  ShieldCheck,
  BrainCircuit,
  Key,
  Eye,
  EyeOff,
  CheckCircle2,
  Globe,
  Sparkles,
  Zap,
  Cpu
} from 'lucide-react';
import { Platform } from '../types';

const IntegrationsPage: React.FC = () => {
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});

  const toggleKey = (id: string) => {
    setShowKeys(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const platforms = [
    { platform: Platform.FACEBOOK, icon: Facebook, label: 'Facebook Business Hub', status: 'Not Connected' },
    { platform: Platform.INSTAGRAM, icon: Instagram, label: 'Instagram Pro Suite', status: 'Active Connection', active: true },
    { platform: Platform.WHATSAPP, icon: Smartphone, label: 'WhatsApp Cloud API', status: 'Active Connection', active: true },
    { platform: Platform.LINKEDIN, icon: Linkedin, label: 'LinkedIn Ads Manager', status: 'Not Connected' },
  ];

  const aiEngines = [
    { id: 'gemini', label: 'Google Gemini Pro', desc: 'Enterprise Multimodal Intelligence', icon: Sparkles, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
    { id: 'openai', label: 'OpenAI ChatGPT-4o', desc: 'Real-time NLP & Analysis Engine', icon: Zap, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
    { id: 'anthropic', label: 'Anthropic Claude 3.5', desc: 'Deterministic Creative Context', icon: Cpu, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
      
      {/* HEADER SECTION */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-xl font-black text-black dark:text-white tracking-tight uppercase">Integration Hub</h1>
          <p className="text-neutral-400 text-[10px] mt-1 font-bold uppercase tracking-widest">Connect your digital ecosystem and AI brain</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded text-[9px] font-black uppercase tracking-widest text-neutral-500 shadow-sm">
          <ShieldCheck size={14} className="text-green-500" /> End-to-End Key Encryption
        </div>
      </div>

      {/* AI LOGIC ENGINES SECTION */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-2">
          <div className="flex items-center gap-2">
            <BrainCircuit size={16} className="text-black dark:text-white" />
            <h2 className="text-xs font-black text-black dark:text-white uppercase tracking-widest">AI Logic Engines</h2>
          </div>
          <span className="text-[8px] font-black text-neutral-400 uppercase">Powering Automated Replies</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiEngines.map((ai) => (
            <div key={ai.id} className="bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-16 h-16 ${ai.bg} -mr-8 -mt-8 rounded-full blur-2xl opacity-50`}></div>
              
              <div className="flex items-center gap-4 mb-6 relative">
                <div className={`w-12 h-12 ${ai.bg} rounded-lg flex items-center justify-center ${ai.color} shadow-sm border border-white/10`}>
                  <ai.icon size={24} />
                </div>
                <div>
                  <h3 className="font-black text-[12px] text-black dark:text-white uppercase tracking-tight">{ai.label}</h3>
                  <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-tighter">{ai.desc}</p>
                </div>
              </div>

              <div className="space-y-4 relative">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                    <Key size={10} /> Secure API Key
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input 
                        type={showKeys[ai.id] ? "text" : "password"}
                        placeholder="••••••••••••••••"
                        className="w-full pl-3 pr-10 py-2.5 bg-neutral-50 dark:bg-black border border-neutral-100 dark:border-neutral-800 rounded-md text-[10px] outline-none font-mono focus:border-black dark:focus:border-white transition-colors"
                      />
                      <button 
                        onClick={() => toggleKey(ai.id)}
                        className="absolute right-3 top-2.5 text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                      >
                        {showKeys[ai.id] ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                    </div>
                    <button className="bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-md text-[9px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-md">
                      Connect
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                   <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
                      <span className="text-[8px] font-black text-neutral-400 uppercase tracking-widest">Inactive</span>
                   </div>
                   <button className="text-[8px] font-black text-indigo-500 uppercase hover:underline">Documentation</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SOCIAL ACCOUNTS SECTION */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-2">
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-black dark:text-white" />
            <h2 className="text-xs font-black text-black dark:text-white uppercase tracking-widest">Marketing Accounts</h2>
          </div>
          <span className="text-[8px] font-black text-neutral-400 uppercase">Managing Reach & Social BI</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {platforms.map((p) => (
            <div key={p.platform} className="card-black p-5 border border-neutral-800 dark:border-neutral-700 group hover:scale-[1.02] transition-all cursor-pointer shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 group-hover:border-white/20 transition-colors">
                  <p.icon size={20} className="text-white" />
                </div>
                {p.active ? (
                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-500/10 text-green-400 rounded-full border border-green-500/20 shadow-sm">
                    <CheckCircle2 size={10} />
                    <span className="text-[8px] font-black uppercase tracking-widest">Connected</span>
                  </div>
                ) : (
                  <button className="p-2 text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-lg transition-all"><Plus size={16} /></button>
                )}
              </div>
              <h3 className="font-black text-[11px] text-white uppercase tracking-widest truncate">{p.label}</h3>
              <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest mt-1 truncate">{p.status}</p>
              
              <button className={`w-full mt-6 py-2.5 rounded-md text-[9px] font-black uppercase tracking-widest transition-all ${
                p.active ? 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white border border-neutral-700' : 'bg-white text-black hover:opacity-90 shadow-md'
              }`}>
                {p.active ? 'Sync Settings' : 'Authorize App'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationsPage;
