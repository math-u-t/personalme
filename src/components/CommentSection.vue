<template>
  <div class="border-t border-light-border dark:border-dark-border">
    <!-- Comment input -->
    <div class="p-4 border-b border-light-border dark:border-dark-border">
      <div class="flex gap-3">
        <UserAvatar
          v-if="authStore.user"
          :avatar="authStore.user.avatar"
          size="sm"
        />
        <div class="flex-1">
          <textarea
            v-model="newComment"
            placeholder="コメントを追加..."
            class="w-full bg-transparent text-light-text-primary dark:text-dark-text-primary placeholder-light-text-muted dark:placeholder-dark-text-muted resize-none focus:outline-none"
            rows="2"
          ></textarea>
          <div class="flex justify-end mt-2">
            <button
              @click="handleAddComment"
              :disabled="!newComment.trim()"
              class="px-4 py-1.5 bg-accent-light dark:bg-accent-dark text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              コメント
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Comments list -->
    <div v-if="comments.length === 0" class="p-8 text-center text-light-text-muted dark:text-dark-text-muted">
      コメントはまだありません
    </div>

    <div v-for="comment in comments" :key="comment.id" class="p-4 border-b border-light-border dark:border-dark-border hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors">
      <div class="flex gap-3">
        <UserAvatar
          :avatar="comment.user?.avatar || ''"
          size="sm"
        />
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1">
            <span class="font-semibold text-light-text-primary dark:text-dark-text-primary text-sm">
              {{ comment.user?.displayName }}
            </span>
            <span class="text-light-text-muted dark:text-dark-text-muted text-xs">
              @{{ comment.user?.username }}
            </span>
            <span class="text-light-text-muted dark:text-dark-text-muted text-xs">
              · {{ formatDate(comment.createdAt) }}
            </span>
          </div>
          <p class="text-light-text-primary dark:text-dark-text-primary text-sm mb-2">
            {{ comment.content }}
          </p>
          <button
            @click="handleLikeComment(comment.id)"
            class="flex items-center gap-1 transition-colors"
            :class="comment.isLiked ? 'text-red-500' : 'text-light-text-muted dark:text-dark-text-muted hover:text-red-500'"
          >
            <svg class="w-4 h-4" :fill="comment.isLiked ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span class="text-xs">{{ comment.likesCount }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Comment } from '@/types'
import UserAvatar from './UserAvatar.vue'
import { useAuthStore } from '@/stores/auth'
import { usePostsStore } from '@/stores/posts'

interface Props {
  postId: string
}

const props = defineProps<Props>()

const authStore = useAuthStore()
const postsStore = usePostsStore()

const newComment = ref('')

const comments = computed(() => postsStore.getCommentsByPostId(props.postId))

const formatDate = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - new Date(date).getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (minutes < 1) return 'たった今'
  if (minutes < 60) return `${minutes}分前`
  if (hours < 24) return `${hours}時間前`
  return `${days}日前`
}

const handleAddComment = () => {
  if (!newComment.value.trim()) return

  postsStore.addComment(props.postId, newComment.value)
  newComment.value = ''
}

const handleLikeComment = (commentId: string) => {
  postsStore.toggleCommentLike(commentId)
}
</script>
