<template>
  <article
    class="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border p-4 hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors duration-200 cursor-pointer"
    @click="goToPost"
  >
    <div class="flex gap-3">
      <!-- Avatar -->
      <RouterLink :to="`/profile/${post.user?.id}`" @click.stop>
        <UserAvatar
          :avatar="post.user?.avatar || ''"
          :show-verified="post.user?.isVerified"
          size="md"
        />
      </RouterLink>

      <div class="flex-1 min-w-0">
        <!-- Header -->
        <div class="flex items-center gap-2 mb-1">
          <RouterLink
            :to="`/profile/${post.user?.id}`"
            class="font-semibold text-light-text-primary dark:text-dark-text-primary hover:underline"
            @click.stop
          >
            {{ post.user?.displayName }}
          </RouterLink>
          <span class="text-light-text-muted dark:text-dark-text-muted text-sm">
            @{{ post.user?.username }}
          </span>
          <span class="text-light-text-muted dark:text-dark-text-muted text-sm">
            · {{ formatDate(post.createdAt) }}
          </span>
        </div>

        <!-- Content -->
        <div class="mb-3">
          <p class="text-light-text-primary dark:text-dark-text-primary whitespace-pre-wrap break-words">
            {{ post.content }}
          </p>
        </div>

        <!-- Images -->
        <div v-if="post.images.length > 0" class="mb-3" @click.stop>
          <div
            :class="[
              'grid gap-2 rounded-xl overflow-hidden',
              post.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2',
            ]"
          >
            <img
              v-for="(image, index) in post.images"
              :key="index"
              :src="image"
              :alt="`Image ${index + 1}`"
              :class="[
                'w-full object-cover',
                post.images.length === 1 ? 'max-h-96' : 'h-48',
              ]"
            />
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center justify-between max-w-md">
          <!-- Comment -->
          <button
            class="flex items-center gap-2 text-light-text-muted dark:text-dark-text-muted hover:text-accent-light dark:hover:text-accent-dark transition-colors group"
            @click.stop="$emit('comment')"
          >
            <span class="p-2 rounded-full group-hover:bg-accent-light/10 dark:group-hover:bg-accent-dark/10 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
            <span class="text-sm">{{ post.commentsCount }}</span>
          </button>

          <!-- Repost -->
          <button
            class="flex items-center gap-2 transition-colors group"
            :class="post.isReposted ? 'text-green-500' : 'text-light-text-muted dark:text-dark-text-muted hover:text-green-500'"
            @click.stop="handleRepost"
          >
            <span class="p-2 rounded-full group-hover:bg-green-500/10 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </span>
            <span class="text-sm">{{ post.repostsCount }}</span>
          </button>

          <!-- Like -->
          <button
            class="flex items-center gap-2 transition-colors group"
            :class="post.isLiked ? 'text-red-500' : 'text-light-text-muted dark:text-dark-text-muted hover:text-red-500'"
            @click.stop="handleLike"
          >
            <span class="p-2 rounded-full group-hover:bg-red-500/10 transition-colors">
              <svg class="w-5 h-5" :fill="post.isLiked ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </span>
            <span class="text-sm">{{ post.likesCount }}</span>
          </button>

          <!-- Share -->
          <button
            class="p-2 text-light-text-muted dark:text-dark-text-muted hover:text-accent-light dark:hover:text-accent-dark rounded-full hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-colors"
            @click.stop="$emit('share')"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import type { Post } from '@/types'
import UserAvatar from './UserAvatar.vue'
import { usePostsStore } from '@/stores/posts'

interface Props {
  post: Post
}

const props = defineProps<Props>()
defineEmits(['comment', 'share'])

const router = useRouter()
const postsStore = usePostsStore()

const formatDate = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - new Date(date).getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (minutes < 1) return 'たった今'
  if (minutes < 60) return `${minutes}分前`
  if (hours < 24) return `${hours}時間前`
  if (days < 7) return `${days}日前`

  return new Date(date).toLocaleDateString('ja-JP', {
    month: 'short',
    day: 'numeric',
  })
}

const goToPost = () => {
  router.push(`/post/${props.post.id}`)
}

const handleLike = () => {
  postsStore.toggleLike(props.post.id)
}

const handleRepost = () => {
  postsStore.toggleRepost(props.post.id)
}
</script>
