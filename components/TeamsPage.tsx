
import React from 'react';
// Added Plus to imports
import { Users, UserPlus, Shield, MoreVertical, Mail, CheckCircle, Globe, Plus } from 'lucide-react';
import { TeamMember } from '../types';

const TeamsPage: React.FC = () => {
  const members: TeamMember[] = [
    { id: '1', name: 'Sarah Anderson', role: 'Owner / Admin', email: 'sarah@metaflow.pro', status: 'online', avatar: 'https://picsum.photos/seed/sarah/50/50' },
    { id: '2', name: 'Mark Rifkind', role: 'Support Agent', email: 'mark@metaflow.pro', status: 'online', avatar: 'https://picsum.photos/seed/mark/50/50' },
    { id: '3', name: 'Elena Vance', role: 'Marketing Manager', email: 'elena@metaflow.pro', status: 'offline', avatar: 'https://picsum.photos/seed/elena/50/50' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-xl font-black uppercase tracking-tight text-black dark:text-white">Workspace Team</h1>
          <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest mt-1">Manage staff roles and collaboration permissions</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <UserPlus size={14} /> Invite Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map(member => (
          <div key={member.id} className="card-pro p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="relative">
                <img src={member.avatar} className="w-12 h-12 rounded-full border border-neutral-100 dark:border-neutral-800" alt="" />
                <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-neutral-900 ${member.status === 'online' ? 'bg-green-500' : 'bg-neutral-300'}`}></div>
              </div>
              <button className="text-neutral-300 hover:text-black dark:hover:text-white transition-colors"><MoreVertical size={16} /></button>
            </div>

            <h3 className="text-[12px] font-black uppercase text-black dark:text-white">{member.name}</h3>
            <div className="flex items-center gap-1.5 mt-1">
              <Shield size={10} className="text-indigo-500" />
              <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">{member.role}</span>
            </div>

            <div className="flex items-center gap-2 mt-4 text-[10px] text-neutral-500">
               <Mail size={12} className="shrink-0" />
               <span className="truncate">{member.email}</span>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-50 dark:border-neutral-800 flex justify-between">
              <button className="text-[9px] font-black uppercase text-indigo-500 hover:underline">Edit Role</button>
              <button className="text-[9px] font-black uppercase text-red-500 hover:underline">Revoke Access</button>
            </div>
          </div>
        ))}

        <button className="card-pro p-5 border-dashed border-2 flex flex-col items-center justify-center text-neutral-400 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all space-y-2 group">
          <div className="w-10 h-10 bg-neutral-50 dark:bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
             <Plus size={20} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Add New Seat</span>
          <span className="text-[8px] font-bold opacity-50">$19 / User Per Month</span>
        </button>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 p-4 rounded-lg flex items-center gap-4">
         <Globe size={24} className="text-indigo-500 shrink-0" />
         <div>
            <p className="text-[11px] font-black uppercase text-indigo-700 dark:text-indigo-300">Audited Collaboration Workspace</p>
            <p className="text-[10px] text-indigo-600 dark:text-indigo-400 mt-0.5">Every action performed by team members is logged in the Audit Hub for compliance and security monitoring.</p>
         </div>
      </div>
    </div>
  );
};

export default TeamsPage;
