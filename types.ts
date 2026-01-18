
export enum Platform {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  WHATSAPP = 'whatsapp',
  MARKETPLACE = 'marketplace',
  LINKEDIN = 'linkedin',
  TIKTOK = 'tiktok'
}

export enum PostStatus {
  DRAFT = 'draft',
  SCHEDULED = 'scheduled',
  PUBLISHED = 'published',
  FAILED = 'failed'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  status: 'active' | 'suspended';
  avatar?: string;
  phone?: string;
  company?: string;
}

export interface ConnectedEntity {
  id: string;
  name: string;
  platform: Platform;
  isActive: boolean;
  avatar?: string;
}

export interface Integration {
  id: string;
  platform: Platform;
  accountName: string;
  status: 'connected' | 'disconnected';
  entities: ConnectedEntity[];
}

export interface Post {
  id: string;
  content: string;
  mediaUrls: string[];
  platforms: Platform[];
  entityIds?: string[];
  scheduledAt?: string;
  status: PostStatus;
  createdAt: string;
}

export interface Message {
  id: string;
  senderName: string;
  senderAvatar: string;
  text: string;
  platform: Platform;
  entityId: string;
  timestamp: string;
  isMine: boolean;
  threadId: string;
}

export interface SupportTicket {
  id: string;
  subject: string;
  status: 'OPEN' | 'PENDING' | 'CLOSED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  createdAt: string;
  lastReply: string;
}

export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  date: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  status: 'online' | 'offline';
  avatar: string;
}
