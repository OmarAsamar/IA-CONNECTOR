
import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Send, 
  Image as ImageIcon, 
  Smile, 
  MoreVertical, 
  Phone, 
  Video,
  Facebook,
  Instagram,
  Smartphone,
  ChevronDown,
  Filter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Platform, Message } from '../types';

// Enhanced Mock Data to meet 25+ chats requirement
const GENERATE_THREADS = () => {
  const platforms = [Platform.FACEBOOK, Platform.INSTAGRAM, Platform.WHATSAPP, Platform.MARKETPLACE];
  const names = ["Alex Rivera", "Julia Smith", "Mark Rifkind", "Elena Vance", "Robert Miller", "Maria Garcia", "David Rodriguez", "Linda Taylor", "Richard Anderson", "Susan Thomas", "Joseph Martinez", "Thomas Lee", "Sarah Wilson", "Kevin Brown", "Amy White", "John Doe", "Jane Roe", "Chris Evans", "Scarlett J.", "Tom H.", "Benedict C.", "Elizabeth O.", "Paul R.", "Jeremy R.", "Mark R."];
  
  return Array.from({ length: 30 }, (_, i) => ({
    id: `t${i + 1}`,
    senderName: names[i % names.length],
    senderAvatar: `https://i.pravatar.cc/150?u=${i + 20}`,
    text: i % 3 === 0 ? "Is this item still available?" : i % 3 === 1 ? "Thanks for the quick response!" : "When do you open?",
    platform: platforms[i % platforms.length],
    timestamp: `${10 + (i % 2)}:${(i * 7) % 60} ${i % 2 === 0 ? 'AM' : 'PM'}`,
    unread: i < 5
  }));
};

const MOCK_MESSAGES: Message[] = [
  { id: 'm1', senderName: 'Alex Rivera', senderAvatar: 'https://i.pravatar.cc/150?u=alex', text: 'Hello! I am inquiring about the recent product drop on Marketplace. Is the limited edition still in stock?', platform: Platform.FACEBOOK, entityId: 'fb-p1', timestamp: '10:45 AM', isMine: false, threadId: 't1' },
  { id: 'm2', senderName: 'Sarah Anderson', senderAvatar: 'https://i.pravatar.cc/150?u=sarah', text: 'Hi Alex! Yes, we still have 4 units left. Would you like to place a reserve?', platform: Platform.FACEBOOK, entityId: 'fb-p1', timestamp: '10:48 AM', isMine: true, threadId: 't1' },
];

const UnifiedInbox: React.FC = () => {
  const [selectedThreadId, setSelectedThreadId] = useState<string>('t1');
  const [messageInput, setMessageInput] = useState('');
  const [platformFilter, setPlatformFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const threadsPerPage = 10;

  const allThreads = useMemo(() => GENERATE_THREADS(), []);
  
  const filteredThreads = useMemo(() => {
    if (platformFilter === 'all') return allThreads;
    return allThreads.filter(t => t.platform === platformFilter);
  }, [platformFilter, allThreads]);

  const totalPages = Math.ceil(filteredThreads.length / threadsPerPage);
  const currentThreads = filteredThreads.slice((currentPage - 1) * threadsPerPage, currentPage * threadsPerPage);

  const selectedThread = allThreads.find(t => t.id === selectedThreadId) || allThreads[0];

  return (
    <div className="h-[calc(100vh-8.5rem)] flex bg-white dark:bg-black border border-neutral-100 dark:border-neutral-800 rounded-md overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
      
      {/* LEFT: THREAD LIST */}
      <div className="w-80 border-r border-neutral-100 dark:border-neutral-800 flex flex-col bg-neutral-50/20 dark:bg-neutral-900/20 shrink-0">
        <div className="p-3 border-b border-neutral-100 dark:border-neutral-800 space-y-2">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 text-neutral-400" size={13} />
              <input type="text" placeholder="Search..." className="w-full pl-9 pr-3 py-2 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-700 rounded text-[10px] outline-none shadow-sm" />
            </div>
            <select 
              value={platformFilter}
              onChange={(e) => { setPlatformFilter(e.target.value); setCurrentPage(1); }}
              className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-700 rounded text-[9px] px-2 outline-none font-bold uppercase"
            >
              <option value="all">All Channels</option>
              <option value={Platform.FACEBOOK}>Facebook</option>
              <option value={Platform.INSTAGRAM}>Instagram</option>
              <option value={Platform.WHATSAPP}>WhatsApp</option>
              <option value={Platform.MARKETPLACE}>Marketplace</option>
            </select>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {currentThreads.map(thread => (
            <button 
              key={thread.id} 
              onClick={() => setSelectedThreadId(thread.id)} 
              className={`w-full p-4 flex gap-3 text-left transition-colors border-b border-neutral-50 dark:border-neutral-800/50 relative ${selectedThreadId === thread.id ? 'bg-white dark:bg-neutral-900 shadow-sm' : 'hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30'}`}
            >
              {selectedThreadId === thread.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-black dark:bg-white" />}
              <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex-shrink-0 relative">
                <img src={thread.senderAvatar} className="w-full h-full rounded-full object-cover" alt="" />
                <div className="absolute -bottom-0.5 -right-0.5 p-0.5 bg-white dark:bg-black rounded-full shadow-sm">
                   {thread.platform === Platform.FACEBOOK && <Facebook size={10} className="text-blue-600" />}
                   {thread.platform === Platform.INSTAGRAM && <Instagram size={10} className="text-pink-600" />}
                   {thread.platform === Platform.WHATSAPP && <Smartphone size={10} className="text-green-600" />}
                   {thread.platform === Platform.MARKETPLACE && <Smartphone size={10} className="text-orange-600" />}
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex justify-between items-center mb-0.5">
                  <span className={`text-[11px] truncate text-black dark:text-white ${thread.unread ? 'font-black' : 'font-bold'}`}>{thread.senderName}</span>
                  <span className="text-[8px] text-neutral-400 font-bold whitespace-nowrap ml-2">{thread.timestamp}</span>
                </div>
                <p className={`text-[10px] truncate ${thread.unread ? 'text-black dark:text-white font-bold' : 'text-neutral-500 dark:text-neutral-400'}`}>{thread.text}</p>
              </div>
            </button>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="p-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between bg-white dark:bg-black">
          <span className="text-[9px] font-black text-neutral-400 uppercase">Page {currentPage} of {totalPages}</span>
          <div className="flex gap-1">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="p-1 disabled:opacity-30 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition"
            >
              <ChevronLeft size={14} />
            </button>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="p-1 disabled:opacity-30 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT: CHAT CANVAS */}
      <div className="flex-1 flex flex-col bg-white dark:bg-black">
        {/* CHAT HEADER */}
        <div className="h-12 border-b border-neutral-100 dark:border-neutral-800 px-5 flex items-center justify-between bg-white dark:bg-black z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800">
               <img src={selectedThread.senderAvatar} className="w-full h-full rounded-full" alt="" />
            </div>
            <div>
              <span className="font-black text-[11px] uppercase tracking-tight text-black dark:text-white">{selectedThread.senderName}</span>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                 <span className="text-[8px] text-neutral-400 uppercase font-black tracking-widest">Active • {selectedThread.platform}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-1.5">
             <button className="p-2 text-neutral-400 hover:text-black dark:hover:text-white transition"><Phone size={14} /></button>
             <button className="p-2 text-neutral-400 hover:text-black dark:hover:text-white transition"><Video size={14} /></button>
             <button className="p-2 text-neutral-400 hover:text-black dark:hover:text-white transition"><MoreVertical size={14} /></button>
          </div>
        </div>

        {/* MESSAGES AREA */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar bg-neutral-50/10 dark:bg-neutral-950/20">
          <div className="flex justify-center mb-8">
             <span className="px-4 py-1.5 bg-neutral-100 dark:bg-neutral-900 text-[9px] font-black text-neutral-400 uppercase tracking-widest rounded-full">End-to-end encrypted session</span>
          </div>
          {MOCK_MESSAGES.map(msg => (
            <div key={msg.id} className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-1 duration-200`}>
              <div className={`max-w-[70%] space-y-1.5`}>
                <div className={`px-4 py-2.5 rounded shadow-sm text-[11px] leading-relaxed ${
                  msg.isMine 
                    ? 'bg-black dark:bg-white text-white dark:text-black font-medium rounded-tr-none' 
                    : 'bg-white dark:bg-neutral-900 text-black dark:text-white border border-neutral-100 dark:border-neutral-800 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
                <p className={`text-[8px] font-black uppercase text-neutral-400 tracking-widest px-1 ${msg.isMine ? 'text-right' : 'text-left'}`}>
                  {msg.timestamp} • Delivered
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* INPUT BOX */}
        <div className="p-4 border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-black">
          <div className="flex gap-2 p-1.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-md shadow-inner">
            <div className="flex">
              <button className="p-2 text-neutral-400 hover:text-black dark:hover:text-white"><ImageIcon size={15} /></button>
              <button className="p-2 text-neutral-400 hover:text-black dark:hover:text-white"><Smile size={15} /></button>
            </div>
            <input 
              type="text" 
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder={`Send message to ${selectedThread.senderName}...`} 
              className="flex-1 bg-transparent text-[11px] outline-none font-medium text-black dark:text-white px-2"
            />
            <button 
              onClick={() => setMessageInput('')} 
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded text-[9px] font-black uppercase tracking-widest hover:opacity-85 transition shadow-md"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnifiedInbox;
