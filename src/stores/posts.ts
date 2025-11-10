import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Post, Comment } from '@/types'
import { mockPosts, mockComments, mockUsers } from '@/utils/mockData'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Post[]>([...mockPosts])
  const comments = ref<Comment[]>([...mockComments])
  const loading = ref(false)
  const hasMore = ref(true)

  // Get post by ID
  const getPostById = computed(() => (id: string) => {
    return posts.value.find(post => post.id === id)
  })

  // Get comments for post
  const getCommentsByPostId = computed(() => (postId: string) => {
    return comments.value.filter(comment => comment.postId === postId)
  })

  // Get posts by user ID
  const getPostsByUserId = computed(() => (userId: string) => {
    return posts.value.filter(post => post.userId === userId)
  })

  // Create post
  const createPost = (content: string, images: string[] = []) => {
    const newPost: Post = {
      id: String(Date.now()),
      userId: '1', // Current user
      user: mockUsers[0],
      content,
      images,
      createdAt: new Date(),
      likesCount: 0,
      repostsCount: 0,
      commentsCount: 0,
      isLiked: false,
      isReposted: false,
      hashtags: extractHashtags(content),
      mentions: extractMentions(content),
    }
    posts.value.unshift(newPost)
    return newPost
  }

  // Update post
  const updatePost = (postId: string, content: string, images: string[] = []) => {
    const post = posts.value.find(p => p.id === postId)
    if (post) {
      post.content = content
      post.images = images
      post.hashtags = extractHashtags(content)
      post.mentions = extractMentions(content)
    }
  }

  // Delete post
  const deletePost = (postId: string) => {
    const index = posts.value.findIndex(p => p.id === postId)
    if (index !== -1) {
      posts.value.splice(index, 1)
    }
  }

  // Toggle like
  const toggleLike = (postId: string) => {
    const post = posts.value.find(p => p.id === postId)
    if (post) {
      post.isLiked = !post.isLiked
      post.likesCount += post.isLiked ? 1 : -1
    }
  }

  // Toggle repost
  const toggleRepost = (postId: string) => {
    const post = posts.value.find(p => p.id === postId)
    if (post) {
      post.isReposted = !post.isReposted
      post.repostsCount += post.isReposted ? 1 : -1
    }
  }

  // Add comment
  const addComment = (postId: string, content: string) => {
    const newComment: Comment = {
      id: String(Date.now()),
      postId,
      userId: '1',
      user: mockUsers[0],
      content,
      createdAt: new Date(),
      likesCount: 0,
      isLiked: false,
    }
    comments.value.push(newComment)

    const post = posts.value.find(p => p.id === postId)
    if (post) {
      post.commentsCount++
    }

    return newComment
  }

  // Toggle comment like
  const toggleCommentLike = (commentId: string) => {
    const comment = comments.value.find(c => c.id === commentId)
    if (comment) {
      comment.isLiked = !comment.isLiked
      comment.likesCount += comment.isLiked ? 1 : -1
    }
  }

  // Load more posts (infinite scroll)
  const loadMorePosts = async () => {
    if (loading.value || !hasMore.value) return

    loading.value = true
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Add more mock posts (in real app, fetch from API)
    const morePosts = mockPosts.map((post, index) => ({
      ...post,
      id: `${post.id}-${Date.now()}-${index}`,
    }))

    posts.value.push(...morePosts)

    // Simulate reaching end
    if (posts.value.length > 30) {
      hasMore.value = false
    }

    loading.value = false
  }

  // Search posts
  const searchPosts = (query: string) => {
    const lowerQuery = query.toLowerCase()
    return posts.value.filter(post =>
      post.content.toLowerCase().includes(lowerQuery) ||
      post.hashtags.some(tag => tag.toLowerCase().includes(lowerQuery))
    )
  }

  // Helper functions
  const extractHashtags = (text: string): string[] => {
    const hashtagRegex = /#[\w\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]+/g
    const matches = text.match(hashtagRegex)
    return matches ? matches.map(tag => tag.slice(1)) : []
  }

  const extractMentions = (text: string): string[] => {
    const mentionRegex = /@[\w]+/g
    const matches = text.match(mentionRegex)
    return matches ? matches.map(mention => mention.slice(1)) : []
  }

  return {
    posts,
    comments,
    loading,
    hasMore,
    getPostById,
    getCommentsByPostId,
    getPostsByUserId,
    createPost,
    updatePost,
    deletePost,
    toggleLike,
    toggleRepost,
    addComment,
    toggleCommentLike,
    loadMorePosts,
    searchPosts,
  }
})
