
import React, { useState } from 'react';
import { 
  Plus, 
  Download, 
  Search, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  ChevronLeft, 
  ChevronRight,
  Filter,
  CheckCircle,
  Clock,
  Save,
  X
} from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  company: string;
  tags: string[];
  lastActive: string;
  status: 'Lead' | 'Client' | 'Cold';
}

const GENERATE_CONTACTS = (): Contact[] => {
  const names = ["James Smith", "Maria Garcia", "Robert Miller", "David Rodriguez", "Mary Wilson", "Linda Taylor", "Richard Anderson", "Susan Thomas", "Joseph Martinez", "Thomas Lee"];
  const companies = ["TechCorp", "Innovate LLC", "Global Solutions", "Peak Performance", "Design Studio", "Marketing Hub"];
  const tagsList = ["VIP", "Partner", "Promo", "Standard"];
  const statuses: ('Lead' | 'Client' | 'Cold')[] = ['Lead', 'Client', 'Cold'];
  
  return Array.from({ length: 200 }, (_, i) => ({
    id: `c-${i + 1}`,
    name: names[i % names.length] + " " + String.fromCharCode(65 + (i % 26)) + ".",
    phone: `+1 (555) ${Math.floor(100 + Math.random() * 899)}-${Math.floor(1000 + Math.random() * 8999)}`,
    email: `user${i + 1}@${companies[i % companies.length].toLowerCase().replace(' ', '')}.com`,
    company: companies[i % companies.length],
    tags: [tagsList[i % tagsList.length]],
    lastActive: `${Math.floor(1 + Math.random() * 24)}h ago`,
    status: statuses[i % statuses.length]
  }));
};

const ContactsTable: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(GENERATE_CONTACTS());
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Contact | null>(null);
  const rowsPerPage = 12;

  const filtered = contacts.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()));
  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const currentRows = filtered.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const startEdit = (contact: Contact) => {
    setEditingId(contact.id);
    setEditForm({...contact});
  };

  const saveEdit = () => {
    if (editForm) {
      setContacts(contacts.map(c => c.id === editForm.id ? editForm : c));
      setEditingId(null);
      setEditForm(null);
    }
  };

  if (editingId && editForm) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 animate-in slide-in-from-right duration-300">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-black uppercase text-black dark:text-white">Edit Subscriber</h1>
          <button onClick={() => setEditingId(null)} className="text-neutral-400 hover:text-black dark:hover:text-white"><X size={20}/></button>
        </div>

        <div className="card-pro p-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[9px] font-black uppercase text-neutral-400">Full Name</label>
              <input 
                type="text" 
                value={editForm.name}
                onChange={e => setEditForm({...editForm, name: e.target.value})}
                className="w-full input-pro" 
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black uppercase text-neutral-400">Email Address</label>
              <input 
                type="email" 
                value={editForm.email}
                onChange={e => setEditForm({...editForm, email: e.target.value})}
                className="w-full input-pro" 
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black uppercase text-neutral-400">Phone</label>
              <input 
                type="text" 
                value={editForm.phone}
                onChange={e => setEditForm({...editForm, phone: e.target.value})}
                className="w-full input-pro" 
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black uppercase text-neutral-400">Status</label>
              <select 
                value={editForm.status}
                onChange={e => setEditForm({...editForm, status: e.target.value as any})}
                className="w-full input-pro"
              >
                <option value="Lead">Lead</option>
                <option value="Client">Client</option>
                <option value="Cold">Cold</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-6 border-t border-neutral-100 dark:border-neutral-800">
            <button onClick={() => setEditingId(null)} className="px-6 py-2 rounded border border-neutral-200 dark:border-neutral-800 text-[10px] font-black uppercase tracking-widest hover:bg-neutral-50">Cancel</button>
            <button onClick={saveEdit} className="btn-primary flex items-center gap-2 px-8 min-w-[140px] justify-center">
              <Save size={14} /> Update Contact
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-2 gap-4">
        <div>
          <h1 className="text-xl font-black uppercase tracking-tight text-black dark:text-white">Contacts Database</h1>
          <p className="text-neutral-400 text-[9px] font-black uppercase tracking-widest mt-1">200 CRM records synced from WhatsApp API</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded font-bold uppercase tracking-widest text-[9px] hover:bg-neutral-200 dark:hover:bg-neutral-700 transition">
            <Download size={12} /> Import CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 btn-primary rounded font-black uppercase tracking-widest text-[9px] hover:scale-[1.02] transition">
            <Plus size={12} /> Add Contact
          </button>
        </div>
      </div>

      <div className="bg-black dark:bg-white text-white dark:text-black p-3 flex flex-col md:flex-row justify-between items-center rounded-sm gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto flex-1">
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 text-neutral-500" size={13} />
            <input 
              type="text" 
              placeholder="Filter by name, identifier or tag..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-neutral-900 dark:bg-neutral-100 border border-neutral-800 dark:border-neutral-200 rounded text-[10px] outline-none placeholder:text-neutral-600 font-medium" 
            />
          </div>
          <button className="hidden sm:flex items-center gap-1.5 text-neutral-400 hover:text-white dark:hover:text-black transition-colors text-[9px] uppercase font-black">
            <Filter size={13} /> Filters
          </button>
        </div>
        <div className="text-[9px] font-black text-neutral-500 dark:text-neutral-400 uppercase mr-2 whitespace-nowrap">
          {filtered.length} Leads Total
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead className="bg-neutral-50 dark:bg-black/50 border-b border-neutral-100 dark:border-neutral-800">
            <tr>
              <th className="px-5 py-4 text-[9px] font-black text-neutral-400 uppercase tracking-widest">Subscriber Info</th>
              <th className="px-5 py-4 text-[9px] font-black text-neutral-400 uppercase tracking-widest">Identifier</th>
              <th className="px-5 py-4 text-[9px] font-black text-neutral-400 uppercase tracking-widest">Affiliation</th>
              <th className="px-5 py-4 text-[9px] font-black text-neutral-400 uppercase tracking-widest">Segmentation</th>
              <th className="px-5 py-4 text-[9px] font-black text-neutral-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((contact) => (
              <tr key={contact.id} className="datatable-row border-b border-neutral-50 dark:border-neutral-800/50 transition-colors">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center font-bold text-neutral-500 text-[10px]">
                      {contact.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-black dark:text-white text-[11px]">{contact.name}</span>
                      <span className="text-[9px] text-neutral-400 font-medium">{contact.email}</span>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 text-neutral-600 dark:text-neutral-400 font-medium text-[10px]">{contact.phone}</td>
                <td className="px-5 py-3">
                  <div className="flex flex-col">
                    <span className="text-black dark:text-white font-bold text-[10px]">{contact.company}</span>
                    <span className="text-[8px] text-neutral-400 uppercase font-black tracking-tighter flex items-center gap-1 mt-0.5">
                      <Clock size={8} /> {contact.lastActive}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <div className="flex gap-2">
                    <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest shadow-sm ${
                      contact.status === 'Client' ? 'bg-green-500 text-white' :
                      contact.status === 'Lead' ? 'bg-indigo-500 text-white' :
                      'bg-neutral-100 dark:bg-neutral-800 text-neutral-500'
                    }`}>
                      {contact.status}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3 text-right">
                  <div className="flex justify-end gap-1.5">
                    <button onClick={() => startEdit(contact)} className="p-1.5 text-neutral-400 hover:text-black dark:hover:text-white rounded transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800"><Edit2 size={12} /></button>
                    <button className="p-1.5 text-neutral-400 hover:text-red-500 rounded transition-all hover:bg-red-50 dark:hover:bg-red-900/20"><Trash2 size={12} /></button>
                    <button className="p-1.5 text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-all"><MoreVertical size={12} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION PANEL */}
      <div className="flex justify-between items-center px-1 bg-neutral-50 dark:bg-neutral-900 p-2 rounded">
        <span className="text-[10px] text-neutral-400 font-bold uppercase hidden sm:block">Record {(currentPage - 1) * rowsPerPage + 1} — {Math.min(currentPage * rowsPerPage, filtered.length)} of {filtered.length}</span>
        <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
            className="p-1.5 rounded border border-neutral-200 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800 disabled:opacity-30 transition"
          >
            <ChevronLeft size={14} />
          </button>
          {[...Array(Math.min(5, totalPages))].map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentPage(i + 1)}
              className={`w-7 h-7 flex items-center justify-center rounded text-[10px] font-black transition-all ${
                currentPage === i + 1 ? 'bg-black dark:bg-white text-white dark:text-black scale-110' : 'text-neutral-400 hover:text-black dark:hover:text-white'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
            className="p-1.5 rounded border border-neutral-200 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800 disabled:opacity-30 transition"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactsTable;
