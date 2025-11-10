<template>
  <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl overflow-hidden">
    <div class="p-4 border-b border-light-border dark:border-dark-border">
      <h2 class="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">
        トレンド
      </h2>
    </div>

    <div>
      <RouterLink
        v-for="(topic, index) in trends"
        :key="topic.id"
        :to="`/search?q=${encodeURIComponent('#' + topic.hashtag)}`"
        class="block p-4 hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors border-b border-light-border dark:border-dark-border last:border-b-0"
      >
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-sm text-light-text-muted dark:text-dark-text-muted">
                {{ index + 1 }} · トレンド
              </span>
              <span
                v-if="topic.trend !== 'stable'"
                :class="[
                  'text-xs',
                  topic.trend === 'up' ? 'text-green-500' : 'text-red-500',
                ]"
              >
                {{ topic.trend === 'up' ? '↑' : '↓' }}
              </span>
            </div>
            <p class="font-bold text-light-text-primary dark:text-dark-text-primary">
              #{{ topic.hashtag }}
            </p>
            <p class="text-sm text-light-text-muted dark:text-dark-text-muted">
              {{ formatCount(topic.postsCount) }} 件の投稿
            </p>
          </div>
        </div>
      </RouterLink>
    </div>

    <RouterLink
      to="/trending"
      class="block p-4 text-accent-light dark:text-accent-dark hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors text-sm"
    >
      さらに表示
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { mockTrendingTopics } from '@/utils/mockData'

const trends = mockTrendingTopics.slice(0, 5)

const formatCount = (count: number): string => {
  if (count >= 10000) {
    return `${(count / 10000).toFixed(1)}万`
  }
  return count.toLocaleString()
}
</script>
