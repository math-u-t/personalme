<template>
  <aside class="w-80 h-screen sticky top-0 p-4 space-y-4 overflow-y-auto hidden lg:block">
    <!-- Search -->
    <SearchBar />

    <!-- Theme toggle -->
    <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-4">
      <div class="flex items-center justify-between">
        <span class="text-light-text-primary dark:text-dark-text-primary font-semibold">
          ダークモード
        </span>
        <ThemeToggle />
      </div>
    </div>

    <!-- Trending topics -->
    <TrendingTopics />

    <!-- Quick links -->
    <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-4">
      <h3 class="font-bold text-light-text-primary dark:text-dark-text-primary mb-3">
        クイックリンク
      </h3>
      <div class="space-y-2">
        <RouterLink
          v-for="link in quickLinks"
          :key="link.path"
          :to="link.path"
          class="block text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-light dark:hover:text-accent-dark transition-colors"
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </div>

    <!-- Footer -->
    <div class="text-xs text-light-text-muted dark:text-dark-text-muted space-x-2 px-4">
      <RouterLink to="/about" class="hover:underline">概要</RouterLink>
      <span>·</span>
      <RouterLink to="/terms" class="hover:underline">利用規約</RouterLink>
      <span>·</span>
      <RouterLink to="/policy" class="hover:underline">プライバシー</RouterLink>
      <span>·</span>
      <RouterLink to="/devs" class="hover:underline">開発者</RouterLink>
      <div class="mt-2">© 2024 PersonalMe</div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SearchBar from './SearchBar.vue'
import ThemeToggle from './ThemeToggle.vue'
import TrendingTopics from './TrendingTopics.vue'

const quickLinks = [
  { path: '/about', label: 'PersonalMeについて' },
  { path: '/faq', label: 'よくある質問' },
  { path: '/inquiry', label: 'お問い合わせ' },
  { path: '/jobs', label: '採用情報' },
  { path: '/devs', label: '開発者向け情報' },
]
</script>
