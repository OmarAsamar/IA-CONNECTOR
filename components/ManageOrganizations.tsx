
import React from 'react';
import { Building2, Plus, Globe, Settings, Users, ArrowRight, ShieldCheck } from 'lucide-react';

const ManageOrganizations: React.FC = () => {
  const orgs = [
    { id: '1', name: 'MetaFlow Global HQ', domain: 'metaflow.pro', users: 12, plan: 'Enterprise' },
    { id: '2', name: 'Sarah\'s Agency Solutions', domain: 'sarah-agency.io', users: 4, plan: 'Pro' },
    { id: '3', name: 'E-com Brand Partnership', domain: 'brand-partners.com', users: 8, plan: 'Enterprise' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-xl font-black uppercase tracking-tight text-black dark:text-white">Business Organisations</h1>
          <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest mt-1">Isolate assets and data across multiple business entities</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={14} /> New Organisation
        </button>
      </div>

      <div className="space-y-3">
        {orgs.map(org => (
          <div key={org.id} className="card-pro p-5 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-black dark:hover:border-white transition-all shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                <Building2 size={24} />
              </div>
              <div>
                <h3 className="text-[13px] font-black uppercase text-black dark:text-white leading-none">{org.name}</h3>
                <div className="flex items-center gap-3 mt-2">
                   <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1"><Globe size={10}/> {org.domain}</span>
                   <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1"><Users size={10}/> {org.users} Members</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                 <p className="text-[8px] font-black text-neutral-400 uppercase">Current Tier</p>
                 <p className="text-[11px] font-black text-indigo-500 uppercase">{org.plan}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 border border-neutral-100 dark:border-neutral-800 rounded hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"><Settings size={14} /></button>
                <button className="px-4 py-2 bg-neutral-50 dark:bg-black border border-neutral-100 dark:border-neutral-800 rounded text-[9px] font-black uppercase tracking-widest hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all flex items-center gap-2">
                  Switch Context <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-2 border-dashed border-neutral-100 dark:border-neutral-800 rounded-lg text-center bg-neutral-50/30 dark:bg-black/20">
         <ShieldCheck size={24} className="mx-auto text-neutral-300 mb-2" />
         <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">Organisation isolation ensures that message threads and post content are never leaked across business units.</p>
      </div>
    </div>
  );
};

export default ManageOrganizations;
