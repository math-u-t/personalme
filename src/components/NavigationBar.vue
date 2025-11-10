<template>
  <nav class="bg-light-bg-secondary dark:bg-dark-bg-secondary border-r border-light-border dark:border-dark-border h-screen sticky top-0 flex flex-col">
    <div class="flex-1 p-4">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 mb-8 px-3">
        <div class="w-8 h-8 bg-accent-light dark:bg-accent-dark rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-lg">P</span>
        </div>
        <span class="text-xl font-bold text-light-text-primary dark:text-dark-text-primary hidden xl:inline">
          PersonalMe
        </span>
      </RouterLink>

      <!-- Navigation items -->
      <div class="space-y-2">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          v-slot="{ isActive }"
          custom
        >
          <a
            :href="item.path"
            @click.prevent="$router.push(item.path)"
            class="flex items-center gap-4 px-4 py-3 rounded-full transition-colors"
            :class="
              isActive
                ? 'bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark font-semibold'
                : 'text-light-text-primary dark:text-dark-text-primary hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary'
            "
          >
            <svg class="w-6 h-6" fill="none" :stroke="isActive ? 'currentColor' : 'currentColor'" viewBox="0 0 24 24" :stroke-width="isActive ? 2.5 : 2">
              <path v-if="item.icon === 'home'" stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              <path v-else-if="item.icon === 'search'" stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              <path v-else-if="item.icon === 'bell'" stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              <path v-else-if="item.icon === 'user'" stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              <path v-else-if="item.icon === 'trending'" stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              <path v-else-if="item.icon === 'stats'" stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              <path v-else-if="item.icon === 'settings'" stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span class="text-lg hidden xl:inline">{{ item.label }}</span>
            <span
              v-if="item.badge && item.badge > 0"
              class="ml-auto bg-accent-light dark:bg-accent-dark text-white text-xs font-semibold px-2 py-0.5 rounded-full hidden xl:inline"
            >
              {{ item.badge > 99 ? '99+' : item.badge }}
            </span>
          </a>
        </RouterLink>
      </div>

      <!-- Post button -->
      <RouterLink
        to="/post"
        class="mt-6 w-full bg-accent-light dark:bg-accent-dark text-white font-semibold py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        <svg class="w-6 h-6 xl:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        <span class="hidden xl:inline">投稿する</span>
      </RouterLink>
    </div>

    <!-- User menu -->
    <div class="p-4 border-t border-light-border dark:border-dark-border">
      <button
        v-if="authStore.user"
        @click="showUserMenu = !showUserMenu"
        class="w-full flex items-center gap-3 px-3 py-2 rounded-full hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors relative"
      >
        <UserAvatar :avatar="authStore.user.avatar" size="md" />
        <div class="flex-1 text-left hidden xl:block">
          <p class="font-semibold text-light-text-primary dark:text-dark-text-primary text-sm">
            {{ authStore.user.displayName }}
          </p>
          <p class="text-light-text-muted dark:text-dark-text-muted text-xs">
            @{{ authStore.user.username }}
          </p>
        </div>
        <svg class="w-5 h-5 text-light-text-primary dark:text-dark-text-primary hidden xl:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>

        <!-- User menu dropdown -->
        <div
          v-if="showUserMenu"
          class="absolute bottom-full left-0 mb-2 w-64 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl shadow-lg border border-light-border dark:border-dark-border overflow-hidden"
        >
          <RouterLink
            to="/settings"
            class="block px-4 py-3 hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors text-light-text-primary dark:text-dark-text-primary"
            @click="showUserMenu = false"
          >
            設定
          </RouterLink>
          <button
            @click="handleLogout"
            class="w-full text-left px-4 py-3 hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors text-light-text-primary dark:text-dark-text-primary"
          >
            ログアウト
          </button>
        </div>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import UserAvatar from './UserAvatar.vue'
import { useAuthStore } from '@/stores/auth'
import { useNotificationsStore } from '@/stores/notifications'

const router = useRouter()
const authStore = useAuthStore()
const notificationsStore = useNotificationsStore()

const showUserMenu = ref(false)

const navItems = computed(() => [
  { path: '/', label: 'ホーム', icon: 'home' },
  { path: '/search', label: '検索', icon: 'search' },
  { path: '/notifications', label: '通知', icon: 'bell', badge: notificationsStore.unreadCount },
  { path: `/profile/${authStore.user?.id}`, label: 'プロフィール', icon: 'user' },
  { path: '/trending', label: 'トレンド', icon: 'trending' },
  { path: '/stats', label: '統計', icon: 'stats' },
  { path: '/settings', label: '設定', icon: 'settings' },
])

const handleLogout = () => {
  authStore.logout()
  showUserMenu.value = false
  router.push('/login')
}
</script>
