<template>
  <div class="min-h-screen">
    <div v-if="user">
      <!-- Cover image -->
      <div class="h-48 bg-gradient-to-r from-accent-light to-accent-dark"></div>

      <!-- Profile info -->
      <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border px-6 pb-4">
        <div class="flex justify-between items-start -mt-16 mb-4">
          <UserAvatar :avatar="user.avatar" :show-verified="user.isVerified" size="xl" />
          <button
            v-if="authStore.user?.id !== user.id"
            @click="toggleFollow"
            class="mt-20 px-6 py-2 rounded-full font-semibold transition-colors"
            :class="
              user.isFollowing
                ? 'bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary hover:bg-red-500/10 hover:text-red-500'
                : 'bg-accent-light dark:bg-accent-dark text-white hover:opacity-90'
            "
          >
            {{ user.isFollowing ? 'フォロー中' : 'フォロー' }}
          </button>
          <RouterLink
            v-else
            to="/settings"
            class="mt-20 px-6 py-2 rounded-full font-semibold bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary hover:bg-light-border dark:hover:bg-dark-border transition-colors"
          >
            プロフィールを編集
          </RouterLink>
        </div>

        <h1 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-1">
          {{ user.displayName }}
        </h1>
        <p class="text-light-text-muted dark:text-dark-text-muted mb-3">@{{ user.username }}</p>

        <p class="text-light-text-primary dark:text-dark-text-primary mb-4">{{ user.bio }}</p>

        <div class="flex gap-4 text-sm">
          <div>
            <span class="font-bold text-light-text-primary dark:text-dark-text-primary">{{ user.followingCount }}</span>
            <span class="text-light-text-muted dark:text-dark-text-muted ml-1">フォロー中</span>
          </div>
          <div>
            <span class="font-bold text-light-text-primary dark:text-dark-text-primary">{{ user.followersCount }}</span>
            <span class="text-light-text-muted dark:text-dark-text-muted ml-1">フォロワー</span>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="border-b border-light-border dark:border-dark-border flex">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="flex-1 py-4 font-semibold transition-colors relative"
          :class="
            activeTab === tab.id
              ? 'text-accent-light dark:text-accent-dark'
              : 'text-light-text-muted dark:text-dark-text-muted hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary'
          "
        >
          {{ tab.label }}
          <div
            v-if="activeTab === tab.id"
            class="absolute bottom-0 left-0 right-0 h-1 bg-accent-light dark:bg-accent-dark"
          ></div>
        </button>
      </div>

      <!-- Posts -->
      <div v-if="activeTab === 'posts'">
        <PostCard v-for="post in userPosts" :key="post.id" :post="post" />
        <div v-if="userPosts.length === 0" class="p-8 text-center text-light-text-muted dark:text-dark-text-muted">
          まだ投稿がありません
        </div>
      </div>

      <!-- Likes placeholder -->
      <div v-else-if="activeTab === 'likes'" class="p-8 text-center text-light-text-muted dark:text-dark-text-muted">
        いいねした投稿
      </div>

      <!-- Media placeholder -->
      <div v-else-if="activeTab === 'media'" class="p-8 text-center text-light-text-muted dark:text-dark-text-muted">
        メディア
      </div>
    </div>

    <!-- User not found -->
    <div v-else class="p-8 text-center">
      <p class="text-light-text-muted dark:text-dark-text-muted">ユーザーが見つかりません</p>
      <RouterLink to="/" class="text-accent-light dark:text-accent-dark hover:underline mt-4 inline-block">
        ホームに戻る
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import UserAvatar from '@/components/UserAvatar.vue'
import PostCard from '@/components/PostCard.vue'
import { useAuthStore } from '@/stores/auth'
import { usePostsStore } from '@/stores/posts'
import { mockUsers } from '@/utils/mockData'

const route = useRoute()
const authStore = useAuthStore()
const postsStore = usePostsStore()

const activeTab = ref('posts')

const tabs = [
  { id: 'posts', label: '投稿' },
  { id: 'likes', label: 'いいね' },
  { id: 'media', label: 'メディア' },
]

const user = computed(() => mockUsers.find(u => u.id === route.params.id))
const userPosts = computed(() => {
  if (!user.value) return []
  return postsStore.getPostsByUserId(user.value.id)
})

const toggleFollow = () => {
  if (user.value) {
    user.value.isFollowing = !user.value.isFollowing
    user.value.followersCount += user.value.isFollowing ? 1 : -1
  }
}
</script>
