<template>
  <div class="min-h-screen bg-light-bg-primary dark:bg-dark-bg-primary transition-colors duration-200">
    <!-- Layout with navigation and sidebar -->
    <div v-if="!isHideLayout" class="flex">
      <!-- Navigation -->
      <div class="hidden md:block w-64 xl:w-72 flex-shrink-0">
        <NavigationBar />
      </div>

      <!-- Main content -->
      <main class="flex-1 min-w-0 border-x border-light-border dark:border-dark-border">
        <RouterView />
      </main>

      <!-- Sidebar -->
      <div class="hidden lg:block w-80 flex-shrink-0">
        <Sidebar />
      </div>
    </div>

    <!-- Full width layout (for login, etc.) -->
    <div v-else>
      <RouterView />
    </div>

    <!-- Mobile navigation -->
    <nav
      v-if="!isHideLayout"
      class="md:hidden fixed bottom-0 left-0 right-0 bg-light-bg-secondary dark:bg-dark-bg-secondary border-t border-light-border dark:border-dark-border z-50"
    >
      <div class="flex justify-around py-2">
        <RouterLink
          v-for="item in mobileNavItems"
          :key="item.path"
          :to="item.path"
          v-slot="{ isActive }"
          custom
        >
          <a
            :href="item.path"
            @click.prevent="$router.push(item.path)"
            class="flex flex-col items-center gap-1 px-4 py-2 transition-colors"
            :class="
              isActive
                ? 'text-accent-light dark:text-accent-dark'
                : 'text-light-text-muted dark:text-dark-text-muted'
            "
          >
            <svg class="w-6 h-6" fill="none" :stroke="isActive ? 'currentColor' : 'currentColor'" viewBox="0 0 24 24" :stroke-width="isActive ? 2.5 : 2">
              <path v-if="item.icon === 'home'" stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              <path v-else-if="item.icon === 'search'" stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              <path v-else-if="item.icon === 'bell'" stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span class="text-xs">{{ item.label }}</span>
            <span
              v-if="item.badge && item.badge > 0"
              class="absolute top-1 right-3 w-4 h-4 bg-accent-light dark:bg-accent-dark text-white text-[10px] flex items-center justify-center rounded-full"
            >
              {{ item.badge > 9 ? '9+' : item.badge }}
            </span>
          </a>
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, RouterLink, useRoute } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
import Sidebar from '@/components/Sidebar.vue'
import { useThemeStore } from '@/stores/theme'
import { useAuthStore } from '@/stores/auth'
import { useNotificationsStore } from '@/stores/notifications'

const route = useRoute()
const themeStore = useThemeStore()
const authStore = useAuthStore()
const notificationsStore = useNotificationsStore()

// Initialize
themeStore.initTheme()
authStore.initAuth()

const isHideLayout = computed(() => route.meta.hideLayout === true)

const mobileNavItems = computed(() => [
  { path: '/', label: 'ホーム', icon: 'home' },
  { path: '/search', label: '検索', icon: 'search' },
  { path: '/notifications', label: '通知', icon: 'bell', badge: notificationsStore.unreadCount },
  { path: `/profile/${authStore.user?.id}`, label: 'プロフィール', icon: 'user' },
])
</script>
