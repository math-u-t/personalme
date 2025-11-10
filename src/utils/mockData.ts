import type { User, Post, Comment, Notification, TrendingTopic } from '@/types'

// Mock users
export const mockUsers: User[] = [
  {
    id: '1',
    username: 'alice_wonder',
    displayName: 'Alice Wonderland',
    avatar: 'https://i.pravatar.cc/150?img=1',
    bio: 'デザイナー | 旅行好き | 🎨✨',
    followersCount: 1234,
    followingCount: 567,
    isVerified: true,
    createdAt: new Date('2023-01-15'),
  },
  {
    id: '2',
    username: 'bob_builder',
    displayName: 'Bob the Builder',
    avatar: 'https://i.pravatar.cc/150?img=2',
    bio: 'フルスタックエンジニア | React ♥️ | コーヒー☕',
    followersCount: 890,
    followingCount: 234,
    isVerified: false,
    createdAt: new Date('2023-02-20'),
  },
  {
    id: '3',
    username: 'charlie_tech',
    displayName: 'Charlie Tech',
    avatar: 'https://i.pravatar.cc/150?img=3',
    bio: 'AI/ML エンジニア | 機械学習 | Python 🐍',
    followersCount: 2345,
    followingCount: 123,
    isVerified: true,
    createdAt: new Date('2023-03-10'),
  },
  {
    id: '4',
    username: 'diana_creative',
    displayName: 'Diana Creative',
    avatar: 'https://i.pravatar.cc/150?img=4',
    bio: 'UI/UX デザイナー | クリエイティブディレクター',
    followersCount: 3456,
    followingCount: 456,
    isVerified: true,
    createdAt: new Date('2023-04-05'),
  },
  {
    id: '5',
    username: 'evan_photos',
    displayName: 'Evan Photography',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: '📷 フォトグラファー | 自然愛好家 | 世界を旅する',
    followersCount: 5678,
    followingCount: 789,
    isVerified: true,
    createdAt: new Date('2023-05-12'),
  },
]

// Mock posts
export const mockPosts: Post[] = [
  {
    id: '1',
    userId: '1',
    content: '新しいデザインプロジェクトを始めました！ワクワクします 🎨 #デザイン #クリエイティブ',
    images: ['https://picsum.photos/800/600?random=1'],
    createdAt: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    likesCount: 42,
    repostsCount: 8,
    commentsCount: 15,
    hashtags: ['デザイン', 'クリエイティブ'],
    mentions: [],
  },
  {
    id: '2',
    userId: '2',
    content: 'Vue 3とViteで新しいプロジェクトを構築中。開発体験が素晴らしい！ @charlie_tech #Vue3 #Vite #JavaScript',
    images: [],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    likesCount: 89,
    repostsCount: 23,
    commentsCount: 34,
    hashtags: ['Vue3', 'Vite', 'JavaScript'],
    mentions: ['charlie_tech'],
  },
  {
    id: '3',
    userId: '3',
    content: '機械学習モデルの精度が95%に到達！長い道のりでしたが、やっと成果が出ました 🎉 #MachineLearning #AI',
    images: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    likesCount: 156,
    repostsCount: 45,
    commentsCount: 67,
    hashtags: ['MachineLearning', 'AI'],
    mentions: [],
  },
  {
    id: '4',
    userId: '4',
    content: 'UIデザインのベストプラクティスについてブログ記事を書きました。フィードバックをお待ちしています！',
    images: ['https://picsum.photos/800/600?random=4'],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
    likesCount: 234,
    repostsCount: 67,
    commentsCount: 89,
    hashtags: [],
    mentions: [],
  },
  {
    id: '5',
    userId: '5',
    content: '今日の夕焼けが美しすぎた...自然の芸術 🌅 #Photography #Sunset #Nature',
    images: [
      'https://picsum.photos/800/600?random=5',
      'https://picsum.photos/800/600?random=6',
      'https://picsum.photos/800/600?random=7',
    ],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12 hours ago
    likesCount: 567,
    repostsCount: 123,
    commentsCount: 234,
    hashtags: ['Photography', 'Sunset', 'Nature'],
    mentions: [],
  },
  {
    id: '6',
    userId: '1',
    content: 'デザインシステムの重要性について考えています。一貫性のあるUIは本当に大切 💡',
    images: [],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    likesCount: 78,
    repostsCount: 12,
    commentsCount: 23,
    hashtags: [],
    mentions: [],
  },
]

// Add user info to posts
mockPosts.forEach(post => {
  post.user = mockUsers.find(u => u.id === post.userId)
})

// Mock comments
export const mockComments: Comment[] = [
  {
    id: '1',
    postId: '1',
    userId: '2',
    content: '素晴らしい！完成が楽しみです 🎉',
    createdAt: new Date(Date.now() - 1000 * 60 * 20),
    likesCount: 5,
  },
  {
    id: '2',
    postId: '1',
    userId: '3',
    content: 'いいですね！どんなプロジェクトですか？',
    createdAt: new Date(Date.now() - 1000 * 60 * 15),
    likesCount: 3,
  },
]

mockComments.forEach(comment => {
  comment.user = mockUsers.find(u => u.id === comment.userId)
})

// Mock notifications
export const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'like',
    fromUserId: '2',
    targetId: '1',
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 5),
  },
  {
    id: '2',
    type: 'comment',
    fromUserId: '3',
    targetId: '1',
    content: 'いいですね！',
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 10),
  },
  {
    id: '3',
    type: 'follow',
    fromUserId: '4',
    targetId: '1',
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
  },
  {
    id: '4',
    type: 'repost',
    fromUserId: '5',
    targetId: '1',
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
  },
]

mockNotifications.forEach(notification => {
  notification.fromUser = mockUsers.find(u => u.id === notification.fromUserId)
  if (notification.type !== 'follow') {
    notification.targetPost = mockPosts.find(p => p.id === notification.targetId)
  }
})

// Mock trending topics
export const mockTrendingTopics: TrendingTopic[] = [
  { id: '1', hashtag: 'Vue3', postsCount: 12345, trend: 'up' },
  { id: '2', hashtag: 'デザイン', postsCount: 8901, trend: 'up' },
  { id: '3', hashtag: 'AI', postsCount: 7890, trend: 'stable' },
  { id: '4', hashtag: 'Photography', postsCount: 6543, trend: 'down' },
  { id: '5', hashtag: 'JavaScript', postsCount: 5432, trend: 'up' },
]

// Current user (mock)
export const currentUser: User = mockUsers[0]
