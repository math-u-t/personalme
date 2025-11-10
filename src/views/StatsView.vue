<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border p-4 sticky top-0 z-10 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <h1 class="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">統計情報</h1>
    </div>

    <div class="p-6 space-y-6">
      <!-- Overview cards -->
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 border border-light-border dark:border-dark-border">
          <p class="text-light-text-muted dark:text-dark-text-muted text-sm mb-2">総投稿数</p>
          <p class="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">{{ stats.totalPosts }}</p>
          <p class="text-green-500 text-sm mt-2">↑ 今月 {{ stats.postsThisMonth }} 件</p>
        </div>

        <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 border border-light-border dark:border-dark-border">
          <p class="text-light-text-muted dark:text-dark-text-muted text-sm mb-2">総いいね数</p>
          <p class="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">{{ stats.totalLikes }}</p>
          <p class="text-green-500 text-sm mt-2">↑ 今月 {{ stats.likesThisMonth }} 件</p>
        </div>

        <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 border border-light-border dark:border-dark-border">
          <p class="text-light-text-muted dark:text-dark-text-muted text-sm mb-2">フォロワー</p>
          <p class="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">{{ stats.totalFollowers }}</p>
        </div>

        <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 border border-light-border dark:border-dark-border">
          <p class="text-light-text-muted dark:text-dark-text-muted text-sm mb-2">エンゲージメント率</p>
          <p class="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">{{ stats.engagementRate }}%</p>
        </div>
      </div>

      <!-- Chart placeholder -->
      <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 border border-light-border dark:border-dark-border">
        <h2 class="text-lg font-bold text-light-text-primary dark:text-dark-text-primary mb-4">投稿数の推移</h2>
        <div class="h-48 flex items-end gap-2">
          <div
            v-for="i in 30"
            :key="i"
            class="flex-1 bg-accent-light dark:bg-accent-dark rounded-t transition-all hover:opacity-75"
            :style="{ height: `${Math.random() * 100}%` }"
          ></div>
        </div>
        <div class="flex justify-between mt-2 text-xs text-light-text-muted dark:text-dark-text-muted">
          <span>30日前</span>
          <span>今日</span>
        </div>
      </div>

      <!-- Top hashtags -->
      <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 border border-light-border dark:border-dark-border">
        <h2 class="text-lg font-bold text-light-text-primary dark:text-dark-text-primary mb-4">よく使うハッシュタグ</h2>
        <div class="space-y-3">
          <div v-for="tag in stats.topHashtags" :key="tag.tag" class="flex items-center justify-between">
            <span class="text-light-text-primary dark:text-dark-text-primary">#{{ tag.tag }}</span>
            <div class="flex items-center gap-2">
              <div class="w-32 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full h-2">
                <div
                  class="bg-accent-light dark:bg-accent-dark h-full rounded-full"
                  :style="{ width: `${(tag.count / stats.topHashtags[0].count) * 100}%` }"
                ></div>
              </div>
              <span class="text-light-text-muted dark:text-dark-text-muted text-sm w-8 text-right">{{ tag.count }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { usePostsStore } from '@/stores/posts'

const authStore = useAuthStore()
const postsStore = usePostsStore()

const stats = computed(() => {
  const userPosts = authStore.user ? postsStore.getPostsByUserId(authStore.user.id) : []
  const totalLikes = userPosts.reduce((sum, post) => sum + post.likesCount, 0)

  return {
    totalPosts: userPosts.length,
    totalLikes,
    totalFollowers: authStore.user?.followersCount || 0,
    totalFollowing: authStore.user?.followingCount || 0,
    postsThisMonth: Math.floor(userPosts.length * 0.3),
    likesThisMonth: Math.floor(totalLikes * 0.2),
    engagementRate: userPosts.length > 0 ? ((totalLikes / userPosts.length) * 2.5).toFixed(1) : 0,
    topHashtags: [
      { tag: 'デザイン', count: 15 },
      { tag: 'クリエイティブ', count: 12 },
      { tag: 'Vue3', count: 8 },
      { tag: 'Web開発', count: 6 },
      { tag: 'UI', count: 4 },
    ],
  }
})
</script>
