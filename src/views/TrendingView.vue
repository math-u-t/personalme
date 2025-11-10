<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border p-4 sticky top-0 z-10 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <h1 class="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">トレンド</h1>
    </div>

    <!-- Trending list -->
    <div>
      <RouterLink
        v-for="(topic, index) in mockTrendingTopics"
        :key="topic.id"
        :to="`/search?q=${encodeURIComponent('#' + topic.hashtag)}`"
        class="block p-6 border-b border-light-border dark:border-dark-border hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors"
      >
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-light-text-muted dark:text-dark-text-muted">
                {{ index + 1 }} · 日本のトレンド
              </span>
              <span
                v-if="topic.trend !== 'stable'"
                :class="[
                  'text-sm font-semibold flex items-center gap-1',
                  topic.trend === 'up' ? 'text-green-500' : 'text-red-500',
                ]"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    v-if="topic.trend === 'up'"
                    fill-rule="evenodd"
                    d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                  <path
                    v-else
                    fill-rule="evenodd"
                    d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ topic.trend === 'up' ? '上昇中' : '下降中' }}
              </span>
            </div>
            <p class="font-bold text-light-text-primary dark:text-dark-text-primary text-xl mb-1">
              #{{ topic.hashtag }}
            </p>
            <p class="text-light-text-muted dark:text-dark-text-muted">
              {{ formatCount(topic.postsCount) }} 件の投稿
            </p>
          </div>

          <!-- Chart placeholder -->
          <div class="w-16 h-16 flex items-end gap-1">
            <div
              v-for="i in 7"
              :key="i"
              class="flex-1 rounded-t"
              :class="topic.trend === 'up' ? 'bg-green-500/30' : topic.trend === 'down' ? 'bg-red-500/30' : 'bg-gray-500/30'"
              :style="{ height: `${Math.random() * 100}%` }"
            ></div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { mockTrendingTopics } from '@/utils/mockData'

const formatCount = (count: number): string => {
  if (count >= 10000) {
    return `${(count / 10000).toFixed(1)}万`
  }
  return count.toLocaleString()
}
</script>
