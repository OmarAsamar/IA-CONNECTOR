
import React, { useState } from 'react';
import { User as UserIcon, Mail, Phone, Building, Shield, Check, Save } from 'lucide-react';
import { User } from '../types';

interface Props {
  user: User;
  onUpdate: (user: User) => void;
}

const AccountProfile: React.FC<Props> = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState<User>(user);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      onUpdate(formData);
      setIsSaving(false);
    }, 800);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-black dark:bg-white rounded flex items-center justify-center text-white dark:text-black font-black text-2xl shadow-xl">
          {formData.name.split(' ').map(n=>n[0]).join('')}
        </div>
        <div>
          <h1 className="text-xl font-black uppercase tracking-tight text-black dark:text-white">Account Profile</h1>
          <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">Manage your personal business credentials</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <label className="text-[9px] font-black uppercase text-neutral-400 flex items-center gap-2"><UserIcon size={12}/> Full Name</label>
          <input 
            type="text" 
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            className="w-full input-pro" 
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[9px] font-black uppercase text-neutral-400 flex items-center gap-2"><Mail size={12}/> Email Address</label>
          <input 
            type="email" 
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            className="w-full input-pro" 
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[9px] font-black uppercase text-neutral-400 flex items-center gap-2"><Phone size={12}/> Phone Number</label>
          <input 
            type="text" 
            value={formData.phone || '+1 (555) 000-0000'}
            onChange={e => setFormData({...formData, phone: e.target.value})}
            className="w-full input-pro" 
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[9px] font-black uppercase text-neutral-400 flex items-center gap-2"><Building size={12}/> Primary Company</label>
          <input 
            type="text" 
            value={formData.company || ''}
            onChange={e => setFormData({...formData, company: e.target.value})}
            className="w-full input-pro" 
          />
        </div>
      </div>

      <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 p-4 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield size={20} className="text-indigo-500" />
          <div>
            <p className="text-[10px] font-black uppercase text-black dark:text-white">Security Role: {formData.role.toUpperCase()}</p>
            <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest">Two-Factor Authentication Enabled</p>
          </div>
        </div>
        <button className="text-[9px] font-black uppercase text-indigo-500 hover:underline">Configure MFA</button>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className="btn-primary flex items-center gap-2 px-8 min-w-[140px] justify-center"
        >
          {isSaving ? <div className="w-3 h-3 border-2 border-white border-t-transparent animate-spin rounded-full"></div> : <Save size={14} />}
          {isSaving ? 'Saving...' : 'Save Profile'}
        </button>
      </div>
    </div>
  );
};

export default AccountProfile;
