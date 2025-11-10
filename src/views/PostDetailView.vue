<template>
  <div class="min-h-screen">
    <div v-if="post" class="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border p-6">
      <div class="flex gap-4 mb-4">
        <RouterLink :to="`/profile/${post.user?.id}`">
          <UserAvatar
            :avatar="post.user?.avatar || ''"
            :show-verified="post.user?.isVerified"
            size="lg"
          />
        </RouterLink>

        <div class="flex-1">
          <div class="flex items-center gap-2 mb-2">
            <RouterLink
              :to="`/profile/${post.user?.id}`"
              class="font-bold text-light-text-primary dark:text-dark-text-primary hover:underline text-lg"
            >
              {{ post.user?.displayName }}
            </RouterLink>
            <span class="text-light-text-muted dark:text-dark-text-muted">
              @{{ post.user?.username }}
            </span>
          </div>

          <p class="text-light-text-primary dark:text-dark-text-primary text-lg mb-4 whitespace-pre-wrap break-words">
            {{ post.content }}
          </p>

          <!-- Images -->
          <div v-if="post.images.length > 0" class="mb-4">
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
                  post.images.length === 1 ? 'max-h-[500px]' : 'h-64',
                ]"
              />
            </div>
          </div>

          <div class="text-light-text-muted dark:text-dark-text-muted mb-4">
            {{ formatFullDate(post.createdAt) }}
          </div>

          <!-- Stats -->
          <div class="flex gap-6 py-4 border-y border-light-border dark:border-dark-border mb-4">
            <div>
              <span class="font-bold text-light-text-primary dark:text-dark-text-primary">{{ post.repostsCount }}</span>
              <span class="text-light-text-muted dark:text-dark-text-muted ml-1">リポスト</span>
            </div>
            <div>
              <span class="font-bold text-light-text-primary dark:text-dark-text-primary">{{ post.likesCount }}</span>
              <span class="text-light-text-muted dark:text-dark-text-muted ml-1">いいね</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center justify-around border-b border-light-border dark:border-dark-border pb-4">
            <button
              class="flex items-center gap-2 text-light-text-muted dark:text-dark-text-muted hover:text-accent-light dark:hover:text-accent-dark transition-colors p-2"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>

            <button
              @click="handleRepost"
              :class="post.isReposted ? 'text-green-500' : 'text-light-text-muted dark:text-dark-text-muted hover:text-green-500'"
              class="transition-colors p-2"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>

            <button
              @click="handleLike"
              :class="post.isLiked ? 'text-red-500' : 'text-light-text-muted dark:text-dark-text-muted hover:text-red-500'"
              class="transition-colors p-2"
            >
              <svg class="w-6 h-6" :fill="post.isLiked ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            <button
              class="text-light-text-muted dark:text-dark-text-muted hover:text-accent-light dark:hover:text-accent-dark transition-colors p-2"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Comments section -->
    <CommentSection v-if="post" :post-id="post.id" />

    <!-- Post not found -->
    <div v-else class="p-8 text-center">
      <p class="text-light-text-muted dark:text-dark-text-muted">投稿が見つかりません</p>
      <RouterLink to="/" class="text-accent-light dark:text-accent-dark hover:underline mt-4 inline-block">
        ホームに戻る
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import UserAvatar from '@/components/UserAvatar.vue'
import CommentSection from '@/components/CommentSection.vue'
import { usePostsStore } from '@/stores/posts'

const route = useRoute()
const postsStore = usePostsStore()

const post = computed(() => postsStore.getPostById(route.params.id as string))

const formatFullDate = (date: Date) => {
  return new Date(date).toLocaleString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

const handleLike = () => {
  if (post.value) {
    postsStore.toggleLike(post.value.id)
  }
}

const handleRepost = () => {
  if (post.value) {
    postsStore.toggleRepost(post.value.id)
  }
}
</script>
