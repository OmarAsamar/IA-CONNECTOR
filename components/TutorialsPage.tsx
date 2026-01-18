
import React from 'react';
import { HelpCircle, Play, BookOpen, Layers, Zap, Smartphone, ArrowRight } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const guides = [
    { title: 'Connecting Meta Assets', time: '5m', icon: Layers, desc: 'Step-by-step to link your Business Manager, Pages and IG accounts.' },
    { title: 'AI Automation Logic', time: '8m', icon: Zap, desc: 'How to configure Gemini AI to handle incoming customer inquiries.' },
    { title: 'WhatsApp Template Hub', time: '4m', icon: Smartphone, desc: 'Creation, submission and variable management for HSM messages.' },
    { title: 'Campaign Post Scheduling', time: '6m', icon: BookOpen, desc: 'Optimizing reach with the visual calendar and cross-platform publishing.' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-xl font-black uppercase tracking-tight text-black dark:text-white">Knowledge Base</h1>
          <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest mt-1">Master MetaFlow Pro with professional video guides</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded font-black uppercase text-[9px] text-neutral-500">
          <HelpCircle size={12} className="text-indigo-500" /> Need Live Support?
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map(guide => (
          <div key={guide.title} className="card-pro p-6 flex gap-6 hover:shadow-lg transition-all border-l-4 border-l-black dark:border-l-white">
            <div className="w-16 h-16 bg-neutral-50 dark:bg-black rounded-lg flex items-center justify-center text-black dark:text-white shrink-0 shadow-sm border border-neutral-100 dark:border-neutral-800">
              <guide.icon size={28} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-[12px] font-black uppercase text-black dark:text-white tracking-tight leading-none">{guide.title}</h3>
                <span className="text-[8px] bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded font-black text-neutral-400">{guide.time} READ</span>
              </div>
              <p className="text-[10px] text-neutral-500 mt-2 leading-relaxed">{guide.desc}</p>
              <button className="mt-4 text-[9px] font-black uppercase text-indigo-500 flex items-center gap-1 hover:gap-2 transition-all">
                Start Learning <ArrowRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="card-pro p-6 bg-neutral-50 dark:bg-neutral-900 border-2 border-dashed border-neutral-200 dark:border-neutral-800">
         <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-indigo-500 rounded flex items-center justify-center text-white shadow-lg">
               <Play size={20} fill="currentColor" />
            </div>
            <div>
               <h4 className="text-[11px] font-black uppercase text-black dark:text-white">The "15-Minute Mastery" Video</h4>
               <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest">A complete walkthrough of every core feature in the platform.</p>
            </div>
         </div>
         <div className="aspect-video bg-black rounded-lg flex items-center justify-center group cursor-pointer relative overflow-hidden">
            <img src="https://picsum.photos/seed/tutorial/1200/600" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="" />
            <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
               <Play size={24} className="text-black ml-1" />
            </div>
         </div>
      </div>
    </div>
  );
};

export default TutorialsPage;
