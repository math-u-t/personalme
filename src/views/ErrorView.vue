<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="text-center">
      <div class="mb-8">
        <div class="text-9xl font-bold text-accent-light dark:text-accent-dark mb-4">404</div>
        <h1 class="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
          ページが見つかりません
        </h1>
        <p class="text-light-text-secondary dark:text-dark-text-secondary mb-8">
          お探しのページは存在しないか、移動した可能性があります
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink
          to="/"
          class="px-6 py-3 bg-accent-light dark:bg-accent-dark text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          ホームに戻る
        </RouterLink>
        <button
          @click="$router.back()"
          class="px-6 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-full font-semibold hover:bg-light-border dark:hover:bg-dark-border transition-colors"
        >
          前のページに戻る
        </button>
      </div>

      <div class="mt-12">
        <p class="text-light-text-muted dark:text-dark-text-muted mb-4">お困りですか？</p>
        <div class="flex gap-4 justify-center text-sm">
          <RouterLink to="/faq" class="text-accent-light dark:text-accent-dark hover:underline">
            よくある質問
          </RouterLink>
          <span class="text-light-text-muted dark:text-dark-text-muted">·</span>
          <RouterLink to="/inquiry" class="text-accent-light dark:text-accent-dark hover:underline">
            お問い合わせ
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
