// User types
export interface User {
  id: string
  username: string
  displayName: string
  avatar: string
  bio: string
  followersCount: number
  followingCount: number
  isFollowing?: boolean
  isVerified?: boolean
  createdAt: Date
}

// Post types
export interface Post {
  id: string
  userId: string
  user?: User
  content: string
  images: string[]
  createdAt: Date
  likesCount: number
  repostsCount: number
  commentsCount: number
  isLiked?: boolean
  isReposted?: boolean
  hashtags: string[]
  mentions: string[]
}

// Comment types
export interface Comment {
  id: string
  postId: string
  userId: string
  user?: User
  content: string
  createdAt: Date
  likesCount: number
  isLiked?: boolean
}

// Notification types
export type NotificationType = 'like' | 'repost' | 'comment' | 'follow' | 'mention'

export interface Notification {
  id: string
  type: NotificationType
  fromUserId: string
  fromUser?: User
  targetId: string // Post ID or User ID
  targetPost?: Post
  content?: string
  read: boolean
  createdAt: Date
}

// Trend types
export interface TrendingTopic {
  id: string
  hashtag: string
  postsCount: number
  trend: 'up' | 'down' | 'stable'
}

// Search types
export interface SearchResult {
  users: User[]
  posts: Post[]
}

// Stats types
export interface UserStats {
  totalPosts: number
  totalLikes: number
  totalFollowers: number
  totalFollowing: number
  postsThisMonth: number
  likesThisMonth: number
  engagementRate: number
  topHashtags: { tag: string; count: number }[]
}
