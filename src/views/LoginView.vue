<template>
  <div class="min-h-screen flex items-center justify-center bg-light-bg-primary dark:bg-dark-bg-primary p-4">
    <div class="w-full max-w-md">
      <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl shadow-xl p-8 border border-light-border dark:border-dark-border">
        <!-- Logo -->
        <div class="flex justify-center mb-8">
          <div class="w-16 h-16 bg-accent-light dark:bg-accent-dark rounded-2xl flex items-center justify-center">
            <span class="text-white font-bold text-3xl">P</span>
          </div>
        </div>

        <h1 class="text-2xl font-bold text-center text-light-text-primary dark:text-dark-text-primary mb-8">
          PersonalMeへようこそ
        </h1>

        <!-- Tabs -->
        <div class="flex mb-6 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-lg p-1">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            class="flex-1 py-2 rounded-md font-semibold transition-colors"
            :class="
              activeTab === tab.id
                ? 'bg-light-bg-secondary dark:bg-dark-bg-secondary text-accent-light dark:text-accent-dark'
                : 'text-light-text-muted dark:text-dark-text-muted'
            "
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Login form -->
        <form v-if="activeTab === 'login'" @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
              ユーザー名またはメールアドレス
            </label>
            <input
              v-model="loginForm.username"
              type="text"
              required
              class="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-lg border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
              placeholder="username"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
              パスワード
            </label>
            <input
              v-model="loginForm.password"
              type="password"
              required
              class="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-lg border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            :disabled="loading"
            class="w-full py-3 bg-accent-light dark:bg-accent-dark text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {{ loading ? 'ログイン中...' : 'ログイン' }}
          </button>
        </form>

        <!-- Signup form -->
        <form v-else @submit.prevent="handleSignup" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
              ユーザー名
            </label>
            <input
              v-model="signupForm.username"
              type="text"
              required
              class="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-lg border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
              placeholder="username"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
              表示名
            </label>
            <input
              v-model="signupForm.displayName"
              type="text"
              required
              class="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-lg border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
              メールアドレス
            </label>
            <input
              v-model="signupForm.email"
              type="email"
              required
              class="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-lg border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
              パスワード
            </label>
            <input
              v-model="signupForm.password"
              type="password"
              required
              class="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-lg border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            :disabled="loading"
            class="w-full py-3 bg-accent-light dark:bg-accent-dark text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {{ loading ? 'アカウント作成中...' : 'アカウントを作成' }}
          </button>
        </form>

        <div class="mt-6 text-center text-sm text-light-text-muted dark:text-dark-text-muted">
          <RouterLink to="/terms" class="hover:text-accent-light dark:hover:text-accent-dark">利用規約</RouterLink>
          ・
          <RouterLink to="/policy" class="hover:text-accent-light dark:hover:text-accent-dark">プライバシーポリシー</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const activeTab = ref<'login' | 'signup'>('login')
const loading = ref(false)

const tabs = [
  { id: 'login' as const, label: 'ログイン' },
  { id: 'signup' as const, label: 'サインアップ' },
]

const loginForm = ref({
  username: '',
  password: '',
})

const signupForm = ref({
  username: '',
  displayName: '',
  email: '',
  password: '',
})

const handleLogin = async () => {
  loading.value = true
  try {
    await authStore.login(loginForm.value.username, loginForm.value.password)
    router.push('/')
  } finally {
    loading.value = false
  }
}

const handleSignup = async () => {
  loading.value = true
  try {
    // Mock signup
    await new Promise(resolve => setTimeout(resolve, 1000))
    await authStore.login(signupForm.value.username, signupForm.value.password)
    router.push('/')
  } finally {
    loading.value = false
  }
}
</script>
