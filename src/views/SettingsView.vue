<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border p-4 sticky top-0 z-10 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <h1 class="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">設定</h1>
    </div>

    <div class="max-w-2xl mx-auto p-6 space-y-6">
      <!-- Profile settings -->
      <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 border border-light-border dark:border-dark-border">
        <h2 class="text-lg font-bold text-light-text-primary dark:text-dark-text-primary mb-4">プロフィール設定</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
              表示名
            </label>
            <input
              v-model="displayName"
              type="text"
              class="w-full px-4 py-2 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-lg border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
              自己紹介
            </label>
            <textarea
              v-model="bio"
              rows="3"
              class="w-full px-4 py-2 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-lg border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark resize-none"
            ></textarea>
          </div>
          <button
            @click="saveProfile"
            class="px-6 py-2 bg-accent-light dark:bg-accent-dark text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            保存
          </button>
        </div>
      </div>

      <!-- Theme settings -->
      <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 border border-light-border dark:border-dark-border">
        <h2 class="text-lg font-bold text-light-text-primary dark:text-dark-text-primary mb-4">表示設定</h2>
        <div class="flex items-center justify-between">
          <div>
            <p class="font-medium text-light-text-primary dark:text-dark-text-primary">ダークモード</p>
            <p class="text-sm text-light-text-muted dark:text-dark-text-muted">暗い配色で表示します</p>
          </div>
          <ThemeToggle />
        </div>
      </div>

      <!-- Notification settings -->
      <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 border border-light-border dark:border-dark-border">
        <h2 class="text-lg font-bold text-light-text-primary dark:text-dark-text-primary mb-4">通知設定</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="font-medium text-light-text-primary dark:text-dark-text-primary">いいね通知</p>
              <p class="text-sm text-light-text-muted dark:text-dark-text-muted">投稿がいいねされたときに通知</p>
            </div>
            <button
              @click="toggleNotification('likes')"
              class="relative w-12 h-6 rounded-full transition-colors"
              :class="notifications.likes ? 'bg-accent-light dark:bg-accent-dark' : 'bg-gray-300 dark:bg-gray-600'"
            >
              <span
                class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform"
                :class="notifications.likes ? 'translate-x-6' : 'translate-x-0'"
              ></span>
            </button>
          </div>

          <div class="flex items-center justify-between">
            <div>
              <p class="font-medium text-light-text-primary dark:text-dark-text-primary">コメント通知</p>
              <p class="text-sm text-light-text-muted dark:text-dark-text-muted">投稿にコメントされたときに通知</p>
            </div>
            <button
              @click="toggleNotification('comments')"
              class="relative w-12 h-6 rounded-full transition-colors"
              :class="notifications.comments ? 'bg-accent-light dark:bg-accent-dark' : 'bg-gray-300 dark:bg-gray-600'"
            >
              <span
                class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform"
                :class="notifications.comments ? 'translate-x-6' : 'translate-x-0'"
              ></span>
            </button>
          </div>

          <div class="flex items-center justify-between">
            <div>
              <p class="font-medium text-light-text-primary dark:text-dark-text-primary">フォロー通知</p>
              <p class="text-sm text-light-text-muted dark:text-dark-text-muted">フォローされたときに通知</p>
            </div>
            <button
              @click="toggleNotification('follows')"
              class="relative w-12 h-6 rounded-full transition-colors"
              :class="notifications.follows ? 'bg-accent-light dark:bg-accent-dark' : 'bg-gray-300 dark:bg-gray-600'"
            >
              <span
                class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform"
                :class="notifications.follows ? 'translate-x-6' : 'translate-x-0'"
              ></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Privacy settings -->
      <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 border border-light-border dark:border-dark-border">
        <h2 class="text-lg font-bold text-light-text-primary dark:text-dark-text-primary mb-4">プライバシー</h2>
        <div class="space-y-2">
          <RouterLink to="/policy" class="block py-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-light dark:hover:text-accent-dark transition-colors">
            プライバシーポリシー
          </RouterLink>
          <RouterLink to="/terms" class="block py-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-light dark:hover:text-accent-dark transition-colors">
            利用規約
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ThemeToggle from '@/components/ThemeToggle.vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const displayName = ref(authStore.user?.displayName || '')
const bio = ref(authStore.user?.bio || '')

const notifications = ref({
  likes: true,
  comments: true,
  follows: true,
})

const saveProfile = () => {
  authStore.updateProfile({
    displayName: displayName.value,
    bio: bio.value,
  })
}

const toggleNotification = (type: keyof typeof notifications.value) => {
  notifications.value[type] = !notifications.value[type]
}
</script>
