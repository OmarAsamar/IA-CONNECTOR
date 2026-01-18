
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Zap, 
  Settings, 
  LogOut, 
  Plus,
  Bell,
  ChevronDown,
  User as UserIcon,
  Phone,
  Users,
  Target,
  FileText,
  Bot,
  Tag,
  Hammer,
  Building2,
  Share2,
  Moon,
  Sun,
  X,
  Globe,
  DollarSign,
  Languages,
  Clock as ClockIcon,
  Download,
  Layers,
  ChevronLeft,
  ChevronRight,
  Monitor,
  ShieldCheck,
  Calendar as CalendarIcon,
  HelpCircle,
  Ticket,
  CreditCard,
  ShoppingCart,
  Menu,
  AlertTriangle
} from 'lucide-react';
import { User } from './types';
import UnifiedInbox from './components/UnifiedInbox';
import PostComposer from './components/PostComposer';
import DashboardStats from './components/DashboardStats';
import AutomationRules from './components/AutomationRules';
import WhatsAppHub from './components/WhatsAppHub';
import IntegrationsPage from './components/IntegrationsPage';
import ContactsTable from './components/ContactsTable';
import AccountProfile from './components/AccountProfile';
import SupportTickets from './components/SupportTickets';
import CalendarTodo from './components/CalendarTodo';
import MarketplacePage from './components/MarketplacePage';
import TeamsPage from './components/TeamsPage';
import TutorialsPage from './components/TutorialsPage';
import ManageOrganizations from './components/ManageOrganizations';
import BillingManagement from './components/BillingManagement';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeSubTab, setActiveSubTab] = useState('contacts');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [activeOrg, setActiveOrg] = useState('org-1');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [currentUser, setCurrentUser] = useState<User | null>({
    id: 'u-1',
    name: 'Sarah Anderson',
    email: 'sarah@business.com',
    role: 'admin',
    status: 'active',
    company: 'MetaFlow Global'
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const organizations = [
    { id: 'org-1', label: 'MF', name: 'MetaFlow Global HQ' },
    { id: 'org-2', label: 'SA', name: 'Sarah\'s Agency Solutions' },
    { id: 'org-3', label: 'EB', name: 'E-com Brand Partnership' },
  ];

  const mainModules = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'inbox', label: 'Unified Inbox', icon: MessageSquare },
    { id: 'whatsapp', label: 'WhatsApp API', icon: Phone },
    { id: 'marketing', label: 'Campaign Hub', icon: Share2 },
    { id: 'calendar', label: 'Calendar & Tasks', icon: CalendarIcon },
    { id: 'automation', label: 'AI Automations', icon: Zap },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingCart },
    { id: 'teams', label: 'Teams', icon: Users },
    { id: 'tickets', label: 'Support Tickets', icon: Ticket },
    { id: 'integrations', label: 'Integrations', icon: Settings },
    { id: 'tutorials', label: 'Tutorials', icon: HelpCircle },
  ];

  const whatsappSubMenu = [
    { id: 'pipelines', label: 'Sales Pipelines', icon: Layers },
    { id: 'contacts', label: 'Subscriber List', icon: Users },
    { id: 'campaigns', label: 'Outbound Blast', icon: Target },
    { id: 'groups', label: 'Segments', icon: Users },
    { id: 'templates', label: 'HSM Templates', icon: FileText },
    { id: 'automations', label: 'Visual Flows', icon: Bot },
    { id: 'tags', label: 'Tag Manager', icon: Tag },
    { id: 'rules', label: 'Trigger Rules', icon: Hammer },
  ];

  const hasSubMenu = activeTab === 'whatsapp';

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black p-4">
        <div className="bg-black text-white p-8 w-full max-w-sm rounded shadow-2xl border border-neutral-800">
          <h1 className="text-xl font-black tracking-widest uppercase mb-6 text-center">MetaFlow</h1>
          <div className="space-y-4 text-[11px]">
            <input type="email" className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded text-white outline-none" placeholder="Email" />
            <input type="password" className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded text-white outline-none" placeholder="Password" />
            <button onClick={() => setCurrentUser({ id: 'u-1', name: 'Sarah', email: 's@b.com', role: 'admin', status: 'active' })} className="w-full bg-white text-black py-2 rounded font-black uppercase tracking-widest">Login</button>
          </div>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardStats />;
      case 'inbox': return <UnifiedInbox />;
      case 'whatsapp': 
        return activeSubTab === 'contacts' ? <ContactsTable /> : <WhatsAppHub />;
      case 'marketing': return <PostComposer />;
      case 'calendar': return <CalendarTodo />;
      case 'automation': return <AutomationRules />;
      case 'marketplace': return <MarketplacePage />;
      case 'teams': return <TeamsPage />;
      case 'tickets': return <SupportTickets />;
      case 'integrations': return <IntegrationsPage />;
      case 'tutorials': return <TutorialsPage />;
      case 'profile': return <AccountProfile user={currentUser} onUpdate={(u) => setCurrentUser(u)} />;
      case 'organisations': return <ManageOrganizations />;
      case 'billing': return <BillingManagement />;
      default: return <DashboardStats />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden text-[11px] font-medium bg-white dark:bg-black">
      
      {/* SIDEBAR 1: Global Modules (Fixed Left, Expandable) */}
      <aside className={`
        ${isSidebarExpanded ? 'w-[200px]' : 'w-[48px]'} 
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        transition-all duration-300 border-r border-neutral-100 dark:border-neutral-800 flex flex-col bg-black z-50 shrink-0 fixed md:relative h-full
      `}>
        <div className="p-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-7 h-7 bg-white rounded flex items-center justify-center text-black font-black text-[10px] shrink-0 shadow-lg shadow-white/10">MF</div>
            {isSidebarExpanded && <span className="text-white font-black uppercase tracking-widest text-[12px] truncate">MetaFlow Pro</span>}
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-white"><X size={18} /></button>
        </div>

        <nav className="flex-1 flex flex-col gap-1 p-2 overflow-y-auto no-scrollbar">
          {mainModules.map((module) => (
            <button
              key={module.id}
              onClick={() => {
                setActiveTab(module.id);
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3 p-2.5 rounded transition-all relative group ${
                activeTab === module.id ? 'bg-white text-black shadow-lg shadow-white/5' : 'text-neutral-500 hover:text-white hover:bg-neutral-900'
              }`}
            >
              <module.icon size={16} className="shrink-0" />
              {isSidebarExpanded && <span className="font-bold truncate text-[10px] uppercase tracking-wider">{module.label}</span>}
              {!isSidebarExpanded && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-black border border-neutral-800 text-white text-[9px] rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-[60] shadow-2xl transition-opacity">
                  {module.label}
                </div>
              )}
            </button>
          ))}
        </nav>

        {/* SUBSCRIPTION WARNING IN SIDEBAR */}
        <div className={`p-2 border-t border-neutral-900 ${isSidebarExpanded ? 'px-4 py-3' : 'px-2 py-2'}`}>
          <button 
            onClick={() => setActiveTab('billing')}
            className={`
              w-full flex items-center gap-2 rounded bg-amber-500/10 border border-amber-500/20 text-amber-500 transition-all hover:bg-amber-500 hover:text-black
              ${isSidebarExpanded ? 'p-2' : 'p-2 justify-center'}
            `}
          >
            <AlertTriangle size={14} className="shrink-0" />
            {isSidebarExpanded && <span className="text-[9px] font-black uppercase truncate">Subscription Expiring</span>}
            {!isSidebarExpanded && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-amber-500 text-black text-[9px] rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-[60] font-black shadow-lg">
                  RENEW NOW (7 DAYS LEFT)
                </div>
            )}
          </button>
        </div>

        {/* SIDEBAR RESIZER BUTTON */}
        <div className="p-2 border-t border-neutral-900 bg-black hidden md:block">
          <button 
            onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
            className="w-full flex items-center justify-center p-2 text-neutral-500 hover:text-white hover:bg-neutral-900 rounded transition-colors group relative"
          >
            {isSidebarExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            {!isSidebarExpanded && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-black border border-neutral-800 text-white text-[9px] rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-[60]">
                  Expand Menu
                </div>
              )}
          </button>
        </div>
      </aside>

      {/* SIDEBAR 2: Org Switcher */}
      <aside className="w-[36px] border-r border-neutral-100 dark:border-neutral-800 flex flex-col items-center py-6 gap-2 shrink-0 bg-gray-50 dark:bg-neutral-900 hidden md:flex">
        <span className="text-[8px] font-black text-neutral-400 mb-2">ORG</span>
        {organizations.map((org) => (
          <div key={org.id} className="relative group">
            <button
              onClick={() => setActiveOrg(org.id)}
              className={`w-6 h-6 rounded flex items-center justify-center text-[9px] font-black transition-all ${
                activeOrg === org.id ? 'bg-black text-white dark:bg-white dark:text-black shadow-md' : 'text-neutral-400 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-black'
              }`}
            >
              {org.label}
            </button>
            <div className="absolute left-full ml-2 px-2 py-1.5 bg-black text-white text-[9px] rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-[60] shadow-2xl border border-neutral-800 transition-opacity font-bold">
              {org.name}
            </div>
          </div>
        ))}
        <button className="w-6 h-6 rounded border border-dashed border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-black transition-colors"><Plus size={10} /></button>
      </aside>

      {/* SIDEBAR 3: Contextual Sub-Menu */}
      {hasSubMenu && (
        <aside className="w-44 border-r border-neutral-100 dark:border-neutral-800 flex flex-col shrink-0 bg-white dark:bg-black animate-in slide-in-from-left duration-200 hidden lg:flex">
          <div className="p-3 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between bg-neutral-50/50 dark:bg-neutral-900/50">
            <span className="font-bold text-[9px] text-neutral-500 uppercase tracking-widest">Management</span>
          </div>
          <nav className="flex-1 overflow-y-auto p-1.5 space-y-0.5 custom-scrollbar">
            {whatsappSubMenu.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSubTab(item.id)}
                className={`w-full flex items-center gap-2 px-3 py-1.5 rounded transition-all ${
                  activeSubTab === item.id 
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                    : 'text-neutral-500 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800'
                }`}
              >
                <item.icon size={12} strokeWidth={2.5} />
                <span className="font-bold truncate">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>
      )}

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-black relative">
        
        {/* TOP BAR */}
        <header className="h-10 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between px-4 shrink-0 bg-white dark:bg-black">
          <div className="flex items-center gap-3">
             <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-1.5 text-neutral-500"><Menu size={18} /></button>
             <button onClick={() => setShowSettingsModal(true)} className="hidden sm:flex items-center gap-2 px-3 py-1 rounded bg-black text-white dark:bg-white dark:text-black transition-all hover:scale-105 active:scale-95 shadow-sm">
                <Globe size={11} />
                <span className="text-[9px] font-black uppercase tracking-widest whitespace-nowrap">Business Workspace</span>
             </button>
             <div className="hidden sm:block h-4 w-px bg-neutral-100 dark:bg-neutral-800"></div>
             <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-1.5 text-neutral-400 hover:text-black dark:hover:text-white transition">
               {isDarkMode ? <Sun size={13} /> : <Moon size={13} />}
             </button>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hidden sm:block p-1.5 text-neutral-400 hover:text-black dark:hover:text-white"><Bell size={13} /></button>
            
            <div className="relative">
              <button 
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className="flex items-center gap-2 pl-2 py-1 hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded transition group"
              >
                <div className="w-5 h-5 bg-black dark:bg-white rounded text-white dark:text-black flex items-center justify-center font-black text-[8px] group-hover:scale-110 transition-transform uppercase">{currentUser.name.split(' ').map(n=>n[0]).join('')}</div>
                <span className="font-bold text-[10px] hidden md:block truncate max-w-[100px]">{currentUser.name}</span>
                <ChevronDown size={11} className="text-neutral-400" />
              </button>

              {showProfileDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded shadow-2xl z-50 p-1 animate-in fade-in zoom-in duration-150">
                  <div className="p-3 border-b border-neutral-50 dark:border-neutral-800 mb-1">
                    <p className="font-black text-[10px] text-black dark:text-white">{currentUser.name}</p>
                    <p className="text-[8px] text-neutral-400 uppercase font-black">{currentUser.role} Access</p>
                  </div>
                  <button onClick={() => {setActiveTab('profile'); setShowProfileDropdown(false);}} className="w-full text-left px-3 py-2 text-[10px] hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded flex items-center gap-2 transition-colors">
                    <UserIcon size={11} /> My Account Profile
                  </button>
                  <button onClick={() => {setActiveTab('organisations'); setShowProfileDropdown(false);}} className="w-full text-left px-3 py-2 text-[10px] hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded flex items-center gap-2 transition-colors">
                    <Building2 size={11} /> Manage Organisations
                  </button>
                  <button onClick={() => {setActiveTab('billing'); setShowProfileDropdown(false);}} className="w-full text-left px-3 py-2 text-[10px] hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded flex items-center gap-2 transition-colors">
                    <CreditCard size={11} /> Billing Management
                  </button>
                  <div className="h-px bg-neutral-100 dark:bg-neutral-800 my-1 mx-1"></div>
                  <button onClick={() => setCurrentUser(null)} className="w-full text-left px-3 py-2 text-[10px] text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded flex items-center gap-2 font-bold transition-colors">
                    <LogOut size={11} /> Logout Session
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* WORKSPACE CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto space-y-4 pb-20">
            {renderContent()}
          </div>
        </main>

        {/* VERSIONED FOOTER */}
        <footer className="h-8 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between px-4 bg-white dark:bg-black shrink-0">
          <div className="hidden sm:flex items-center gap-4">
             <span className="text-neutral-400 text-[8px] font-black uppercase tracking-widest">TLS 1.3 Encryption Active</span>
          </div>
          <span className="text-neutral-400 text-[8px] font-black uppercase tracking-widest text-center flex-1 sm:flex-none">
            MetaFlow Global Business Suite VERSION V2.4.1
          </span>
        </footer>
      </div>

      {/* WORKSPACE SETTINGS MODAL */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-200 border border-neutral-200 dark:border-neutral-800">
            <div className="bg-black p-4 flex justify-between items-center">
              <h3 className="text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Settings size={12} /> Global Configuration
              </h3>
              <button onClick={() => setShowSettingsModal(false)} className="text-white hover:rotate-90 transition-transform"><X size={16} /></button>
            </div>
            <div className="p-6 space-y-4 text-[11px]">
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase text-neutral-400 flex items-center gap-2">
                  <ClockIcon size={10} /> Timezone
                </label>
                <select className="w-full input-pro"><option>Eastern Standard Time (UTC-5)</option><option>London (GMT)</option></select>
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase text-neutral-400 flex items-center gap-2">
                  <DollarSign size={10} /> Base Currency
                </label>
                <select className="w-full input-pro"><option>US Dollar ($)</option><option>Euro (€)</option></select>
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase text-neutral-400 flex items-center gap-2">
                  <Languages size={10} /> Interface Language
                </label>
                <select className="w-full input-pro"><option>English (United States)</option><option>French</option></select>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex gap-2">
                <button onClick={() => setShowSettingsModal(false)} className="flex-1 btn-primary">Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
