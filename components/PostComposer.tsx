
import React, { useState, useRef } from 'react';
import { 
  Facebook, 
  Instagram, 
  Send, 
  Clock, 
  Image as ImageIcon, 
  Smile, 
  Plus,
  Smartphone,
  Globe,
  MoreHorizontal,
  Heart,
  MessageCircle,
  Share,
  Monitor,
  CheckCircle2,
  Video,
  Layers,
  Search,
  X,
  Trash2,
  Upload,
  Calendar,
  // Added Zap to fix "Cannot find name 'Zap'" error on line 302
  Zap
} from 'lucide-react';
import { Platform } from '../types';

const PostComposer: React.FC = () => {
  const [content, setContent] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([Platform.FACEBOOK, Platform.INSTAGRAM]);
  const [postType, setPostType] = useState<'single' | 'carousel' | 'video'>('single');
  const [mediaFiles, setMediaFiles] = useState<{url: string, type: string}[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const togglePlatform = (p: Platform) => {
    setSelectedPlatforms(prev => 
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newMedia = Array.from(files).map(file => ({
        url: URL.createObjectURL(file),
        type: file.type.startsWith('video') ? 'video' : 'image'
      }));
      setMediaFiles(prev => [...prev, ...newMedia]);
      
      // Auto-switch post type based on number of items
      if (mediaFiles.length + newMedia.length > 1) {
        setPostType('carousel');
      } else if (newMedia[0]?.type === 'video') {
        setPostType('video');
      }
    }
  };

  const removeMedia = (index: number) => {
    setMediaFiles(prev => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].url);
      updated.splice(index, 1);
      return updated;
    });
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 animate-in fade-in duration-500">
      
      {/* LEFT SIDE: ANDROID HIGH FIDELITY PREVIEW */}
      <div className="xl:col-span-5 flex flex-col items-center order-2 xl:order-1">
        <div className="sticky top-4 flex flex-col items-center">
          <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-400 mb-6">Real-time Meta Preview (Android)</h3>
          
          <div className="relative w-[280px] h-[580px] bg-neutral-900 border-[8px] border-black rounded-[2.5rem] shadow-2xl overflow-hidden ring-4 ring-neutral-200 dark:ring-neutral-800">
            {/* Top Notch/Speaker */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl z-20 flex items-center justify-center">
               <div className="w-8 h-1 bg-neutral-800 rounded-full" />
            </div>

            <div className="h-full bg-white flex flex-col overflow-y-auto no-scrollbar">
              {/* Mock App Header */}
              <div className="h-14 bg-white border-b flex items-center px-4 justify-between shrink-0">
                 <span className="font-black text-lg tracking-tighter text-blue-600">facebook</span>
                 <div className="flex gap-3 text-neutral-500">
                    <Plus size={20} />
                    <Search size={20} />
                    <MessageCircle size={20} />
                 </div>
              </div>

              {/* Post Feed Content */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center font-black text-[10px] text-neutral-400">MF</div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-bold">MetaFlow Global</span>
                      <span className="text-[10px] text-neutral-500 flex items-center gap-1">Just now • <Globe size={10}/></span>
                    </div>
                  </div>
                  <MoreHorizontal size={18} className="text-neutral-400" />
                </div>

                {/* Dynamic Content Preview */}
                <div className="space-y-3">
                   <p className="text-[12px] text-neutral-800 leading-tight whitespace-pre-wrap">
                     {content || "Your post content will appear here..."}
                   </p>
                   
                   {/* Post Media Area */}
                   <div className="aspect-square bg-neutral-50 rounded overflow-hidden relative group">
                      {mediaFiles.length > 0 ? (
                        <div className="w-full h-full">
                           {mediaFiles[0].type === 'video' ? (
                             <video src={mediaFiles[0].url} className="w-full h-full object-cover" muted loop autoPlay />
                           ) : (
                             <img src={mediaFiles[0].url} className="w-full h-full object-cover" alt="Preview" />
                           )}
                           {mediaFiles.length > 1 && (
                             <div className="absolute right-2 top-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded-full font-black">
                               1 / {mediaFiles.length}
                             </div>
                           )}
                        </div>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-neutral-300">
                          {postType === 'video' ? <Video size={48} /> : postType === 'carousel' ? <Layers size={48} /> : <ImageIcon size={48} />}
                          <span className="text-[8px] font-black uppercase mt-2 tracking-widest">Media Placeholder</span>
                        </div>
                      )}
                   </div>

                   {/* Social Actions */}
                   <div className="flex items-center justify-between pt-2 border-t text-neutral-500">
                      <div className="flex items-center gap-1"><Heart size={18} /><span className="text-[10px]">Like</span></div>
                      <div className="flex items-center gap-1"><MessageCircle size={18} /><span className="text-[10px]">Comment</span></div>
                      <div className="flex items-center gap-1"><Share size={18} /><span className="text-[10px]">Share</span></div>
                   </div>
                </div>
              </div>
              <div className="h-40 bg-neutral-50 border-t mt-4" />
            </div>

            {/* Bottom Bar */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-neutral-300 rounded-full z-20" />
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {selectedPlatforms.map(p => (
              <span key={p} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-[8px] font-black uppercase tracking-widest text-neutral-500">
                {p} Ready
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: EDITOR SIDE */}
      <div className="xl:col-span-7 space-y-6 order-1 xl:order-2">
        <div className="card-pro p-6 border-neutral-100 dark:border-neutral-800 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-black text-[12px] uppercase tracking-widest text-black dark:text-white">Campaign Hub Orchestrator</h3>
            <span className="text-[8px] font-black text-neutral-400 uppercase bg-neutral-50 dark:bg-neutral-900 px-2 py-1 rounded">Draft V2.0</span>
          </div>
          
          <div className="space-y-6">
            {/* PLATFORM SELECT */}
            <div className="space-y-3">
              <label className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Target Integrations</label>
              <div className="flex flex-wrap gap-2">
                {[Platform.FACEBOOK, Platform.INSTAGRAM, Platform.WHATSAPP, Platform.LINKEDIN, Platform.TIKTOK].map(p => (
                  <button 
                    key={p}
                    onClick={() => togglePlatform(p)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md border transition-all ${
                      selectedPlatforms.includes(p) 
                        ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-lg' 
                        : 'border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:border-black dark:hover:border-white'
                    }`}
                  >
                    {p === Platform.FACEBOOK && <Facebook size={14} />}
                    {p === Platform.INSTAGRAM && <Instagram size={14} />}
                    {p === Platform.WHATSAPP && <Smartphone size={14} />}
                    {p === Platform.LINKEDIN && <Layers size={14} />}
                    {p === Platform.TIKTOK && <Video size={14} />}
                    <span className="text-[10px] font-bold uppercase tracking-tighter">{p}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* MEDIA UPLOAD AREA */}
            <div className="space-y-3">
              <label className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Media Assets & Gallery</label>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {mediaFiles.map((file, idx) => (
                  <div key={idx} className="aspect-square rounded-lg border border-neutral-100 dark:border-neutral-800 relative group overflow-hidden bg-neutral-50 dark:bg-neutral-900 shadow-sm">
                    {file.type === 'video' ? (
                      <video src={file.url} className="w-full h-full object-cover" />
                    ) : (
                      <img src={file.url} className="w-full h-full object-cover" alt="" />
                    )}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                       <button onClick={() => removeMedia(idx)} className="p-2 bg-red-500 text-white rounded-full hover:scale-110 transition-transform shadow-lg">
                          <Trash2 size={14} />
                       </button>
                    </div>
                    {file.type === 'video' && <div className="absolute bottom-1 right-1 bg-black/50 p-1 rounded"><Video size={10} className="text-white" /></div>}
                  </div>
                ))}
                
                {/* UPLOAD BUTTON */}
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="aspect-square rounded-lg border-2 border-dashed border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center text-neutral-400 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all bg-neutral-50/50 dark:bg-neutral-900/50 group"
                >
                  <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Plus size={16} />
                  </div>
                  <span className="text-[8px] font-black uppercase tracking-widest">Add Media</span>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    multiple 
                    onChange={handleFileUpload} 
                    className="hidden" 
                    accept="image/*,video/*"
                  />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Post Content Text</label>
              <div className="relative">
                <textarea 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full h-32 p-4 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-lg outline-none text-[11px] text-black dark:text-white resize-none font-medium transition-all focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5"
                  placeholder="What's your business announcement today? Use hashtags for better reach..."
                />
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                   <button className="p-1.5 text-neutral-400 hover:text-black dark:hover:text-white transition"><Smile size={16} /></button>
                   <span className="text-[8px] font-black text-neutral-300 uppercase">{content.length} chars</span>
                </div>
              </div>
            </div>

            {/* SCHEDULING SECTION */}
            <div className="space-y-3">
              <label className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Campaign Scheduling Intelligence</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <span className="text-[8px] font-black text-neutral-400 uppercase">Publish Date</span>
                  <div className="relative group">
                    <Calendar className="absolute left-3 top-2.5 text-neutral-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" size={14} />
                    <input 
                      type="date" 
                      value={scheduleDate}
                      onChange={(e) => setScheduleDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 input-pro font-bold shadow-sm" 
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[8px] font-black text-neutral-400 uppercase">Exact Hour</span>
                  <div className="relative group">
                    <Clock className="absolute left-3 top-2.5 text-neutral-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" size={14} />
                    <input 
                      type="time" 
                      value={scheduleTime}
                      onChange={(e) => setScheduleTime(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 input-pro font-bold shadow-sm" 
                    />
                  </div>
                </div>
              </div>
              <p className="text-[8px] text-neutral-400 font-bold uppercase tracking-widest italic">* Scheduled time is based on your Business Workspace timezone.</p>
            </div>

            <div className="flex gap-3 pt-6 border-t border-neutral-100 dark:border-neutral-800">
              <button className="flex-1 btn-primary py-4 flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all">
                <Send size={16} /> Publish Now
              </button>
              <button className="flex-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center gap-2">
                <Clock size={16} /> Add to Queue
              </button>
            </div>
          </div>
        </div>

        {/* POST TIPS CARD */}
        <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 p-4 rounded-xl flex items-start gap-4 shadow-sm">
           <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-500/20">
              <Zap size={16} />
           </div>
           <div>
              <p className="text-[10px] font-black uppercase text-indigo-700 dark:text-indigo-300">Smart Recommendation</p>
              <p className="text-[10px] text-indigo-600 dark:text-indigo-400 mt-1">Posts with images get <span className="font-black">2.3x more engagement</span>. We suggest adding a call-to-action button for your WhatsApp pipeline to increase lead conversion.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PostComposer;
