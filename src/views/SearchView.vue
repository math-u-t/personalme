<template>
  <div class="min-h-screen">
    <!-- Header with search -->
    <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border p-4 sticky top-0 z-10 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <SearchBar />
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

    <!-- Results -->
    <div v-if="query">
      <!-- Posts -->
      <div v-if="activeTab === 'posts'">
        <PostCard v-for="post in searchResults.posts" :key="post.id" :post="post" />
        <div v-if="searchResults.posts.length === 0" class="p-8 text-center text-light-text-muted dark:text-dark-text-muted">
          投稿が見つかりませんでした
        </div>
      </div>

      <!-- Users -->
      <div v-else-if="activeTab === 'users'">
        <RouterLink
          v-for="user in searchResults.users"
          :key="user.id"
          :to="`/profile/${user.id}`"
          class="flex items-center gap-4 p-4 border-b border-light-border dark:border-dark-border hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors"
        >
          <UserAvatar :avatar="user.avatar" :show-verified="user.isVerified" size="md" />
          <div class="flex-1">
            <p class="font-semibold text-light-text-primary dark:text-dark-text-primary">{{ user.displayName }}</p>
            <p class="text-light-text-muted dark:text-dark-text-muted text-sm">@{{ user.username }}</p>
            <p class="text-light-text-secondary dark:text-dark-text-secondary text-sm mt-1">{{ user.bio }}</p>
          </div>
          <div class="text-sm text-light-text-muted dark:text-dark-text-muted">
            {{ user.followersCount }} フォロワー
          </div>
        </RouterLink>
        <div v-if="searchResults.users.length === 0" class="p-8 text-center text-light-text-muted dark:text-dark-text-muted">
          ユーザーが見つかりませんでした
        </div>
      </div>
    </div>

    <!-- No query -->
    <div v-else class="p-8 text-center text-light-text-muted dark:text-dark-text-muted">
      検索キーワードを入力してください
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import SearchBar from '@/components/SearchBar.vue'
import PostCard from '@/components/PostCard.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import { usePostsStore } from '@/stores/posts'
import { mockUsers } from '@/utils/mockData'

const route = useRoute()
const postsStore = usePostsStore()

const activeTab = ref('posts')
const query = ref('')

const tabs = [
  { id: 'posts', label: '投稿' },
  { id: 'users', label: 'ユーザー' },
]

const searchResults = computed(() => {
  if (!query.value) return { posts: [], users: [] }

  const lowerQuery = query.value.toLowerCase()

  return {
    posts: postsStore.searchPosts(query.value),
    users: mockUsers.filter(
      user =>
        user.displayName.toLowerCase().includes(lowerQuery) ||
        user.username.toLowerCase().includes(lowerQuery) ||
        user.bio.toLowerCase().includes(lowerQuery)
    ),
  }
})

watch(
  () => route.query.q,
  (newQuery) => {
    query.value = (newQuery as string) || ''
  },
  { immediate: true }
)
</script>
