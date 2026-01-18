
import React, { useState } from 'react';
// Added ChevronLeft and ChevronRight to imports
import { Ticket, Plus, Search, MessageCircle, CheckCircle, Clock, XCircle, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { SupportTicket } from '../types';

const SupportTickets: React.FC = () => {
  const [tickets, setTickets] = useState<SupportTicket[]>([
    { id: 'TKT-1001', subject: 'WhatsApp Cloud API Connection Error', status: 'OPEN', priority: 'HIGH', createdAt: '2024-03-20', lastReply: 'System' },
    { id: 'TKT-1002', subject: 'Billing Inquiry for March 2024', status: 'PENDING', priority: 'LOW', createdAt: '2024-03-18', lastReply: 'Sarah A.' },
    { id: 'TKT-1003', subject: 'Requesting new HSM Template approval', status: 'CLOSED', priority: 'MEDIUM', createdAt: '2024-03-15', lastReply: 'Admin' },
  ]);

  const [viewingTicket, setViewingTicket] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'OPEN': return 'text-red-500 bg-red-50 dark:bg-red-900/20';
      case 'PENDING': return 'text-amber-500 bg-amber-50 dark:bg-amber-900/20';
      case 'CLOSED': return 'text-green-500 bg-green-50 dark:bg-green-900/20';
      default: return 'text-neutral-500';
    }
  };

  if (viewingTicket) {
    const ticket = tickets.find(t => t.id === viewingTicket);
    return (
      <div className="space-y-6 animate-in slide-in-from-right duration-300">
        <button onClick={() => setViewingTicket(null)} className="text-[9px] font-black uppercase text-neutral-400 hover:text-black dark:hover:text-white flex items-center gap-1 mb-4">
          <ChevronLeft size={10} /> Back to Ticket List
        </button>
        
        <div className="card-pro p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-[10px] font-black text-indigo-500">{ticket?.id}</span>
              <h1 className="text-xl font-black text-black dark:text-white uppercase mt-1">{ticket?.subject}</h1>
            </div>
            <div className={`px-3 py-1 rounded text-[9px] font-black uppercase ${getStatusColor(ticket!.status)}`}>
              {ticket?.status}
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="font-bold">System Admin</span>
                <span className="text-neutral-400 text-[9px]">{ticket?.createdAt}</span>
              </div>
              <p className="text-[11px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                Hello, we have received your request and our technical team is investigating the connection issue with your WhatsApp Cloud API credentials. Please ensure your permanent token is correctly configured in the Meta Developers portal.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase text-neutral-400">Your Reply</label>
            <textarea className="w-full h-32 input-pro resize-none" placeholder="Type your message here..."></textarea>
            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setViewingTicket(null)} className="px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded font-black uppercase text-[9px] hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">Close Ticket</button>
              <button className="btn-primary flex items-center gap-2"><Send size={12}/> Send Reply</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-xl font-black uppercase tracking-tight text-black dark:text-white">Support Tickets</h1>
          <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest mt-1">Direct communication with MetaFlow technical support</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={14} /> Open New Ticket
        </button>
      </div>

      <div className="bg-black dark:bg-white text-white dark:text-black p-3 rounded-md flex justify-between items-center">
        <div className="relative w-72">
          <Search className="absolute left-3 top-2.5 text-neutral-500" size={13} />
          <input type="text" placeholder="Search by ticket ID or subject..." className="w-full pl-9 pr-3 py-2 bg-neutral-900 dark:bg-neutral-100 border border-neutral-800 dark:border-neutral-200 rounded text-[10px] outline-none" />
        </div>
      </div>

      <div className="space-y-3">
        {tickets.map(ticket => (
          <div 
            key={ticket.id} 
            onClick={() => setViewingTicket(ticket.id)}
            className="card-pro p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:border-black dark:hover:border-white transition-all shadow-sm group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded flex items-center justify-center text-neutral-500 group-hover:scale-110 transition-transform">
                <Ticket size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black text-indigo-500">{ticket.id}</span>
                  <span className={`px-2 py-0.5 rounded text-[8px] font-black ${getStatusColor(ticket.status)}`}>{ticket.status}</span>
                </div>
                <h3 className="text-[11px] font-black uppercase text-black dark:text-white mt-0.5">{ticket.subject}</h3>
              </div>
            </div>
            
            <div className="flex items-center gap-8 text-[9px] font-black uppercase tracking-widest text-neutral-400">
              <div className="flex flex-col items-end">
                <span>Created</span>
                <span className="text-black dark:text-white">{ticket.createdAt}</span>
              </div>
              <div className="flex flex-col items-end">
                <span>Last Reply</span>
                <span className="text-black dark:text-white">{ticket.lastReply}</span>
              </div>
              <ChevronRight size={14} className="text-neutral-300 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportTickets;
