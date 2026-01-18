
import React from 'react';
import { Calendar as CalendarIcon, List, Filter, ChevronLeft, ChevronRight, Facebook, Instagram, Clock, MoreHorizontal } from 'lucide-react';
import { Post, Platform, PostStatus } from '../types';

const PostScheduler: React.FC = () => {
  const scheduledPosts: Post[] = [
    {
      id: 'p1',
      content: 'Excited to announce our summer sale starting this Friday! 🚀',
      platforms: [Platform.FACEBOOK, Platform.INSTAGRAM],
      status: PostStatus.SCHEDULED,
      scheduledAt: '2023-08-25T10:00:00Z',
      mediaUrls: ['https://picsum.photos/seed/post1/600/400'],
      createdAt: '2023-08-20T12:00:00Z'
    },
    {
      id: 'p2',
      content: 'Check out these customer success stories! #ClientLove',
      platforms: [Platform.INSTAGRAM],
      status: PostStatus.PUBLISHED,
      scheduledAt: '2023-08-24T15:30:00Z',
      mediaUrls: ['https://picsum.photos/seed/post2/600/400'],
      createdAt: '2023-08-21T09:00:00Z'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-4 border border-gray-200 flex items-center justify-between shadow-sm">
        <div className="flex gap-2 p-1 bg-gray-100 rounded-xl">
          <button className="px-6 py-2 bg-white text-blue-600 rounded-lg shadow-sm font-bold text-sm flex items-center gap-2">
            <List size={18} /> List
          </button>
          <button className="px-6 py-2 text-gray-500 hover:bg-white transition rounded-lg font-bold text-sm flex items-center gap-2">
            <CalendarIcon size={18} /> Calendar
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition"><ChevronLeft size={20} /></button>
            <span className="font-bold text-sm text-gray-800">August 2023</span>
            <button className="p-2 hover:bg-gray-100 rounded-full transition"><ChevronRight size={20} /></button>
          </div>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition border border-gray-200"><Filter size={18} /></button>
        </div>
      </div>

      <div className="space-y-4">
        {scheduledPosts.map(post => (
          <div key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-64 aspect-video md:aspect-auto">
              <img src={post.mediaUrls[0]} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex gap-2">
                    {post.platforms.map(p => (
                      <span key={p} className="p-1.5 rounded-lg bg-gray-50 text-gray-400">
                        {p === Platform.FACEBOOK ? <Facebook size={14} /> : <Instagram size={14} />}
                      </span>
                    ))}
                  </div>
                  <div className={`px-2 py-1 rounded-full text-[10px] font-bold tracking-widest ${
                    post.status === PostStatus.SCHEDULED ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
                  }`}>
                    {post.status.toUpperCase()}
                  </div>
                </div>
                <p className="text-sm text-gray-700 font-medium line-clamp-2">{post.content}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-500 text-xs font-bold">
                  <Clock size={14} />
                  {new Date(post.scheduledAt!).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-xs font-bold bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition">Edit Post</button>
                  <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg transition"><MoreHorizontal size={18} /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostScheduler;
